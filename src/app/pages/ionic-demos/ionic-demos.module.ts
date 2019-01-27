import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonicDemosPage } from './ionic-demos.page';

const routes: Routes = [
  {
    path: '',
    component: IonicDemosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonicDemosPage]
})
export class IonicDemosPageModule {}
