import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes as AppRoutes } from './app.routes';
import { QRCodeModule } from 'angularx-qrcode';
import { TranslateModule } from '@ngx-translate/core';


=======
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { QrComponent } from './components/qr/qr.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { ForoComponent } from './components/foro/foro.component';
import { routes as AppRoutes } from './app.routes'; // Importa las rutas desde app.routes
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    ForoComponent,
    QrComponent
>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
<<<<<<< HEAD
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    TranslateModule.forRoot()
=======
    RouterModule.forRoot(AppRoutes),  // Utiliza RouterModule con las rutas de app.routes
    FormsModule,
    HttpClientModule,
    NgxQRCodeModule,

>>>>>>> 845ae8cbf9909ecf8bf27b1c8e64b700d89c06a5
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
