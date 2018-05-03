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

  sources;
  img;

  index;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = -1;
    
    this.sources = [
      'mercado_01.png','mercado_02.png','mercado_03.jpg', 
      'curso_01.png', 'curso_02.jpg', 'curso_03.jpg', 'curso_04.jpg', 'curso_05.jpg',
      'estrutura_01.jpg'
    ];
    this.next();
  }

  next() {
    if (this.index < this.sources.length-1) {      
      ++this.index;
      this.img = this.sources[this.index];
    } else {
      this.navCtrl.pop();
      this.index = -1;
    }
  }

  previous() {
    if (this.index > 0) {      
      --this.index;
      this.img = this.sources[this.index];
    } else {
      this.navCtrl.pop();
      this.index = -1;
    }
  }

}
