import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {
    console.log('Tab3Page ngOnInit');
  }
  ionViewWillEnter() {
    console.log('Tab3Page ionViewWillEnter');
  }
  ngOnDestroy() {
    console.log('Tab3Page ngOnDestroy');
  }
  ionViewWillLeave() {
    console.log('Tab3Page ionViewWillLeave');
  }

}
