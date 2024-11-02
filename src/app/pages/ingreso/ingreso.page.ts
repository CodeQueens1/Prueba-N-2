import { Component, OnInit,ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
<<<<<<< HEAD
import { LanguageService } from 'src/app/services/language.service'; // Mantén esta importación
=======
import { LanguageComponent } from 'src/app/components/language/language.component';
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
  standalone: true,
  imports: [
<<<<<<< HEAD
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule
  ]
})

=======
            IonicModule,  
            CommonModule, FormsModule,
            //usados
            LanguageComponent
          , TranslateModule ]
})
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
export class IngresoPage implements OnInit {

  cuenta: string = '';
  password: string = '';

<<<<<<< HEAD
  constructor(private authService: AuthService //inyectar servicio de autenticación
              , private translate: TranslateService,
              private languageService: LanguageService
  ) { }



=======
  @ViewChild('selectLanguage') selectLanguage!: LanguageComponent;

  constructor(private authService: AuthService //inyectar servicio de autenticación
              , private translate: TranslateService
  ) { }

>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
  ngOnInit() {
    this.cuenta = 'atorres';
    this.password = '1234';
  }

  iniciarSesion() {
    this.authService.login(this.cuenta, this.password);
  }

<<<<<<< HEAD
  ionViewWillEnter() {
    if (this.languageService && this.languageService.setCurrentLanguage) {
      this.languageService.setCurrentLanguage('es'); // Establece el idioma
    } else {
      console.error('Error: languageService no está inicializado correctamente.');
    }
  }
  
=======
  async ionViewWillEnter() {
    this.selectLanguage.setCurrentLanguage();
  }

>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
}
