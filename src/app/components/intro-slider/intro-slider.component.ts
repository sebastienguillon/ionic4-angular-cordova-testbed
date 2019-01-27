import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-slider',
  templateUrl: './intro-slider.component.html',
  styleUrls: ['./intro-slider.component.scss']
})
export class IntroSliderComponent implements OnInit {
  showPager = true;
  slideOpts = {
    effect: 'cube',
    spaceBetween: 30,
  };

  constructor() { }

  ngOnInit() {
  }

}
