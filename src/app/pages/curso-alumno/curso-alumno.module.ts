import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoAlumnoPageRoutingModule } from './curso-alumno-routing.module';

import { CursoAlumnoPage } from './curso-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoAlumnoPageRoutingModule
  ],
  declarations: [CursoAlumnoPage]
})
export class CursoAlumnoPageModule {}
