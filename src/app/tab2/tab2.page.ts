import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {
    console.log('Tab2Page ngOnInit');
  }
  ionViewWillEnter() {
    console.log('Tab2Page ionViewWillEnter');
  }
  ngOnDestroy() {
    console.log('Tab2Page ngOnDestroy');
  }
  ionViewWillLeave() {
    console.log('Tab2Page ionViewWillLeave');
  }

}
