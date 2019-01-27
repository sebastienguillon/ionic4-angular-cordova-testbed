import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonRippleEffectPage } from './ion-ripple-effect.page';

const routes: Routes = [
  {
    path: '',
    component: IonRippleEffectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonRippleEffectPage]
})
export class IonRippleEffectPageModule {}
