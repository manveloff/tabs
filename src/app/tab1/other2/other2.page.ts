import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-other2',
  templateUrl: './other2.page.html',
  styleUrls: ['./other2.page.scss'],
})
export class Other2Page implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Other2 ngOnInit');
  }
  ionViewWillEnter() {
    console.log('Other2 ionViewWillEnter');
  }
  ngOnDestroy() {
    console.log('Other2 ngOnDestroy');
  }
  ionViewWillLeave() {
    console.log('Other2 ionViewWillLeave');
  }
}
