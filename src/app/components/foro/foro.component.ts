import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { APIClientService } from '../../services/api-client.service';
import { AuthService } from '../../services/auth.service';
import { Publicacion } from '../../model/publicacion';

@Component({
  selector: 'app-foro',
  standalone: true,
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule]
})
export class ForoComponent implements OnInit {
  publicaciones: Publicacion[] = [];
  nuevaPublicacion: Publicacion = new Publicacion();
  editando: boolean = false;

  constructor(
    private apiService: APIClientService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const usuario = this.authService.obtenerUsuario();
    if (usuario) {
      this.nuevaPublicacion.usuario = `${usuario.nombre} ${usuario.apellido}`;
    }
    this.cargarPublicaciones();
  }

  onSubmit() {
    if (this.nuevaPublicacion.titulo && this.nuevaPublicacion.contenido) {
      if (this.editando) {
        this.actualizarPublicacion();
      } else {
        const publicacionParaEnviar = { ...this.nuevaPublicacion };
        delete publicacionParaEnviar.id;
        this.apiService.crearPublicacion(publicacionParaEnviar).subscribe(() => {
          this.cargarPublicaciones();
          this.limpiarFormulario();
        });
      }
    }
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/ingreso']);
  }

  cargarPublicaciones() {
    this.apiService.obtenerPublicaciones().subscribe({
      next: (publicaciones: Publicacion[]) => {
        this.publicaciones = publicaciones;
      },
      error: (error) => {
        console.error('Error al cargar publicaciones:', error);
      }
    });
  }

  actualizarPublicacion() {
    this.apiService.actualizarPublicacion(this.nuevaPublicacion).subscribe(() => {
      this.cargarPublicaciones();
      this.limpiarFormulario();
      this.editando = false;
    });
  }

  limpiarFormulario() {
    this.nuevaPublicacion = new Publicacion();
    const usuario = this.authService.obtenerUsuario();
    if (usuario) {
      this.nuevaPublicacion.usuario = `${usuario.nombre} ${usuario.apellido}`;
    }
    this.editando = false;
  }

  eliminarPublicacion(id: number | undefined) {
    if (id === undefined) {
      console.error('Error: El ID de la publicación es indefinido, no se puede eliminar.');
      return;
    }
    this.apiService.eliminarPublicacion(id).subscribe({
      next: () => {
        this.cargarPublicaciones();
      },
      error: (error) => {
        console.error('Error al eliminar la publicación:', error);
      }
    });
  }

  editarPublicacion(publicacion: Publicacion) {
    this.nuevaPublicacion = { ...publicacion };
    this.editando = true;
  }
  
}