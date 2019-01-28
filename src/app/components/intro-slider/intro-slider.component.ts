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
        let bullets = '';
        for (let i = 1; i <= total; i++) {
          const activeClass = (current === i) ? ' swiper-pagination-bullet-active' : '';
          bullets += `<span class="swiper-pagination-bullet${activeClass}"></span> `;
        }
        return `
          <div class="swiper-pagination swiper-pagination-bullets" style="width:100%;bottom:40px;">
            ${bullets}
          </span></div>
        `;
      }
    },
    spaceBetween: 0,
  };

  constructor() { }

  ngOnInit() {
  }

}
