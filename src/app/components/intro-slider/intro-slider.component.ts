import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-slider',
  templateUrl: './intro-slider.component.html',
  styleUrls: ['./intro-slider.component.scss']
})
export class IntroSliderComponent implements OnInit {
  showPager = true;
  slideOpts = {
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: (swiper, current, total) => {
        console.log(swiper, current, total);
        console.log(swiper.pagination.$el[0].innerHTML);
          return swiper.pagination.$el[0].innerHTML;
      }
    },
    spaceBetween: 30,
  };

  constructor() { }

  ngOnInit() {
  }

}
