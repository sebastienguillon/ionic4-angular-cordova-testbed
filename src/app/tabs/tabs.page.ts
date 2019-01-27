import { Component, OnInit } from '@angular/core';

interface TabItem {
  tab: string;
  icon: string;
  label: string;

}

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  tabs: TabItem[];

  constructor() {
    this.tabs = [{
      tab: 'home',
      icon: 'home',
      label: 'Home',
    }, {
      tab: 'ionic',
      icon: 'logo-ionic',
      label: 'Ionic',
    }, {
      tab: 'angular',
      icon: 'logo-angular',
      label: 'Angular',
    }, {
      tab: 'native',
      icon: 'phone-portrait',
      label: 'Native',
    }];
  }

  ngOnInit() {

  }
}
