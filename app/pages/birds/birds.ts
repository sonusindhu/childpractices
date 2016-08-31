import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'build/pages/birds/birds.html'
})
export class BirdsPage {
    bData : any;
    bindex  : any;

  constructor(private http: Http) {    
      this.bData = [{
          "id": "1",
            "english": "Cock",
            "hindi": "मुर्गा",
            "desc": "",
            "status": true
      }];
      this.bindex = 0;
      this.http.get('api/birds.json'  ).subscribe(data => {
        this.bData = data.json().birds;
        this.bindex = 0;
    });
    
  }
  
 
  
  
nextBird(){
   this.bindex++;
}
prevBird(){
   this.bindex--;
}
playBird(lang){
    var audio = new Audio(); 
    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.bData[this.bindex][lang]+'&tl=hi&vol=1'; 
    audio.play();
    
}
  
}
