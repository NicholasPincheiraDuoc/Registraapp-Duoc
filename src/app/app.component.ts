import { Component } from '@angular/core';
import { LoginPage } from './pages/login/login.page';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes: Componente[] = [ 
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'qr-code-outline',
      name: 'Escanear QR',
      redirecTo: '/curso-alumno',
    },
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/curso-docente',
    }
   ];
    
    
    




  }