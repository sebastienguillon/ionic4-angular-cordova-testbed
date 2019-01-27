import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NativeDemosPage } from './native-demos.page';

const routes: Routes = [
  {
    path: '',
    component: NativeDemosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NativeDemosPage]
})
export class NativeDemosPageModule {}
