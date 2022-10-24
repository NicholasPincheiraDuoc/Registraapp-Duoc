import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoAlumnoPage } from './curso-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: CursoAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoAlumnoPageRoutingModule {}
