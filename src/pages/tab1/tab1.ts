import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ListPage } from '../list/list';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  lifecycle = {
    ionViewDidLoad:0,
    ionViewWillEnter:0,
    ionViewDidEnter:0,        
    ionViewWillLeave:0,
    ionViewDidLeave:0,
    ionViewWillUnload:0
  };

  ionViewDidLoad(){ this.lifecycle.ionViewDidLoad ++; }
  ionViewWillEnter(){ this.lifecycle.ionViewWillEnter ++; }
  ionViewDidEnter(){ this.lifecycle.ionViewDidEnter ++; }        
  ionViewWillLeave(){ this.lifecycle.ionViewWillLeave ++; }
  ionViewDidLeave(){ this.lifecycle.ionViewDidLeave ++; }
  ionViewWillUnload(){ this.lifecycle.ionViewWillUnload ++; }

  gotoListPage(){
    this.appCtrl.getRootNav().push(ListPage);
  }
}
