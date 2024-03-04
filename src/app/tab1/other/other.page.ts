import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Other ngOnInit');
  }
  ionViewWillEnter() {
    console.log('Other ionViewWillEnter');
  }
  ngOnDestroy() {
    console.log('Other ngOnDestroy');
  }
  ionViewWillLeave() {
    console.log('Other ionViewWillLeave');
  }

}
