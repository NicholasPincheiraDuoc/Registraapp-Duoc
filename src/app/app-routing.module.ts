import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'prelogin',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'prelogin',
    loadChildren: () => import('./pages/prelogin/prelogin.module').then( m => m.PreloginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'curso-alumno',
    loadChildren: () => import('./pages/curso-alumno/curso-alumno.module').then( m => m.CursoAlumnoPageModule)
  },
  {
    path: 'curso-docente',
    loadChildren: () => import('./pages/curso-docente/curso-docente.module').then( m => m.CursoDocentePageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QRPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
