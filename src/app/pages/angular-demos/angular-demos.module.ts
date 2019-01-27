import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AngularDemosPage } from './angular-demos.page';

const routes: Routes = [
  {
    path: '',
    component: AngularDemosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AngularDemosPage]
})
export class AngularDemosPageModule {}
