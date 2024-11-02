import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto permite que el servicio esté disponible globalmente
})
export class LanguageService {
  setCurrentLanguage(lang: string) {
    // Implementación de la lógica para cambiar el idioma
    console.log(`Idioma configurado a: ${lang}`);
  }
}
