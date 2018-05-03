import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-area',
  templateUrl: 'area.html',
})
export class AreaPage {

  imgs;
  img;
  index;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = -1;
    this.imgs = [
      {
        'img' : 'https://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png',
        'msg' : 'oiiiii'
      },
      {
        'img' : 'https://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png',
        'msg' : 'nego'
      },
    ];
    this.next();
  }

  next() {
    this.img = this.imgs[++this.index];
  }

}
