import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StencilDemosPage } from './stencil-demos.page';

const routes: Routes = [
  {
    path: '',
    component: StencilDemosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StencilDemosPage]
})
export class StencilDemosPageModule {}
