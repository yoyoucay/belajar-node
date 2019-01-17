import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any = {
    nama: "", pendapat: ""
  };

  constructor(public navCtrl: NavController) {

  }

  submit(){
    console.log(this.data);
    this.navCtrl.push(DetailPage, this.data);
  }
}
