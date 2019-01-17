import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import sumberData from "../../data/data-2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any ;

  constructor(public navCtrl: NavController) {
    this.data = sumberData;
    // cek data
    console.log(this.data);
  }

  detailData(item){
    this.navCtrl.push(DetailPage, item);
  }
}
