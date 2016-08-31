import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'build/pages/vegetables/vegetables.html'
})
export class VegetablesPage {
    cards : any;
    cindex  : any;

  constructor(private http: Http) {    
      this.cards = [{
          "id": "1",
            "english": "Beetroot",
            "hindi": "चुकंदर",
            "desc": "",
            "status": true
      }];
      this.cindex = 0;
      this.http.get('api/vegetables.json'  ).subscribe(data => {
        this.cards = data.json().vegetables;
        this.cindex = 0;
    });
    
  }
  
 
  
  
nextLoad(){
   this.cindex++;
}
prevLoad(){
   this.cindex--;
}
playVegi(lang){
    var audio = new Audio(); 
    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.cards[this.cindex][lang]+'&tl=hi&vol=1'; 
    audio.play();
    
}
  
}
