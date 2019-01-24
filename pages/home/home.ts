import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import sumberData from '../../data/sumber-data';


@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})

export class HomePage {
      jokes: any;
          constructor(public navCtrl: NavController) {
          this.jokes = sumberData;
          console.log(this.jokes);
      }

      detail(data){
        this.navCtrl.push(DetailPage, data);
      }
      
}