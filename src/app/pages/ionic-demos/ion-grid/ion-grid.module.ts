import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonGridPage } from './ion-grid.page';

const routes: Routes = [
  {
    path: '',
    component: IonGridPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonGridPage]
})
export class IonGridPageModule {}
