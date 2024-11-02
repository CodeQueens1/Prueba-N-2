<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
=======
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule aquí
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
import { Router } from '@angular/router';
import { APIClientService } from '../../services/api-client.service';
import { AuthService } from '../../services/auth.service';
import { Publicacion } from '../../model/publicacion';

@Component({
  selector: 'app-foro',
  standalone: true,
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss'],
<<<<<<< HEAD
  imports: [IonicModule, FormsModule, CommonModule]
})
=======
  imports: [
    IonicModule, 
    FormsModule, 
    CommonModule  // Importa solo CommonModule y elimina HttpClientModule
  ]
})

>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
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
<<<<<<< HEAD
        this.actualizarPublicacion();
      } else {
        const publicacionParaEnviar = { ...this.nuevaPublicacion };
        delete publicacionParaEnviar.id;
=======
        // Si estamos editando, llamamos a un método para actualizar la publicación
        this.actualizarPublicacion();
      } else {
        // Si no estamos en modo edición, creamos una nueva publicación
        const publicacionParaEnviar = { ...this.nuevaPublicacion };
        delete publicacionParaEnviar.id;
        
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
        this.apiService.crearPublicacion(publicacionParaEnviar).subscribe(() => {
          this.cargarPublicaciones();
          this.limpiarFormulario();
        });
      }
    }
  }
<<<<<<< HEAD

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/ingreso']);
=======
  
  
  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
  }

  cargarPublicaciones() {
    this.apiService.obtenerPublicaciones().subscribe({
      next: (publicaciones: Publicacion[]) => {
<<<<<<< HEAD
=======
        console.log('Publicaciones obtenidas:', publicaciones); // Revisa si las publicaciones se logran aquí
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
        this.publicaciones = publicaciones;
      },
      error: (error) => {
        console.error('Error al cargar publicaciones:', error);
      }
    });
  }
<<<<<<< HEAD

=======
  
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
  actualizarPublicacion() {
    this.apiService.actualizarPublicacion(this.nuevaPublicacion).subscribe(() => {
      this.cargarPublicaciones();
      this.limpiarFormulario();
<<<<<<< HEAD
      this.editando = false;
=======
      this.editando = false; // Salimos del modo edición después de actualizar
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
    });
  }

  limpiarFormulario() {
    this.nuevaPublicacion = new Publicacion();
    const usuario = this.authService.obtenerUsuario();
    if (usuario) {
      this.nuevaPublicacion.usuario = `${usuario.nombre} ${usuario.apellido}`;
    }
<<<<<<< HEAD
    this.editando = false;
=======
    this.editando = false; // Asegurarse de que salimos del modo edición
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
  }

  eliminarPublicacion(id: number | undefined) {
    if (id === undefined) {
      console.error('Error: El ID de la publicación es indefinido, no se puede eliminar.');
      return;
    }
<<<<<<< HEAD
    this.apiService.eliminarPublicacion(id).subscribe({
      next: () => {
        this.cargarPublicaciones();
=======
  
    this.apiService.eliminarPublicacion(id).subscribe({
      next: () => {
        this.cargarPublicaciones(); // Recarga la lista de publicaciones después de eliminar
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
      },
      error: (error) => {
        console.error('Error al eliminar la publicación:', error);
      }
    });
<<<<<<< HEAD
  }

=======
  }  
  
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
  editarPublicacion(publicacion: Publicacion) {
    this.nuevaPublicacion = { ...publicacion };
    this.editando = true;
  }
<<<<<<< HEAD
  
=======
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
}
