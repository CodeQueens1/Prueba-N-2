import { Component, OnInit,ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/app/services/language.service'; // Mantén esta importación
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule
  ]
})

export class IngresoPage implements OnInit {

  cuenta: string = '';
  password: string = '';

  constructor(private authService: AuthService //inyectar servicio de autenticación
              , private translate: TranslateService,
              private languageService: LanguageService
  ) { }



  ngOnInit() {
    this.cuenta = 'atorres';
    this.password = '1234';
  }

  iniciarSesion() {
    this.authService.login(this.cuenta, this.password);
  }

  ionViewWillEnter() {
    if (this.languageService && this.languageService.setCurrentLanguage) {
      this.languageService.setCurrentLanguage('es'); // Establece el idioma
    } else {
      console.error('Error: languageService no está inicializado correctamente.');
    }
  }
  
}
