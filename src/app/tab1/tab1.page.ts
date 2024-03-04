import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
    console.log('Tab1Page ngOnInit');
  }
  ionViewWillEnter() {
    console.log('Tab1Page ionViewWillEnter');
  }
  ngOnDestroy() {
    console.log('Tab1Page ngOnDestroy');
  }
  ionViewWillLeave() {
    console.log('Tab1Page ionViewWillLeave');
  }

  // Перейти на страницу other
  async goToOther() {
    await this.router.navigate(['/tabs/tab1/other']);
  }
}
