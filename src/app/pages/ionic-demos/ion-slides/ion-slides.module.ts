import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonSlidesPage } from './ion-slides.page';

import { IntroSliderComponent } from 'src/app/components/intro-slider/intro-slider.component';

const routes: Routes = [
  {
    path: '',
    component: IonSlidesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IonSlidesPage,
    IntroSliderComponent,
  ]
})
export class IonSlidesPageModule {}
