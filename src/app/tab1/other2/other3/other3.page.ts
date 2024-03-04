import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-other3',
  templateUrl: './other3.page.html',
  styleUrls: ['./other3.page.scss'],
})
export class Other3Page implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Other3 ngOnInit');
  }
  ionViewWillEnter() {
    console.log('Other3 ionViewWillEnter');
  }
  ngOnDestroy() {
    console.log('Other3 ngOnDestroy');
  }
  ionViewWillLeave() {
    console.log('Other3 ionViewWillLeave');
  }
}
