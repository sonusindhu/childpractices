import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/hindi/hindi.html'
})
export class HindiPage {
    
    hindex : any;
    hindi : any;
    
  constructor(private http: Http) {  
      this.hindi = 
        [
            {
                "id": "1",
                "hindi": "अ (a) = अ से अनार",
                "desc": "",
                "status": true
            }
        ];
      this.hindex = 0;
      this.http.get('api/hindi.json'  ).subscribe(data => {
        this.hindi = data.json().hindi;
        this.hindex = 0;
    });


  }
  
  
nextHindi(){
   this.hindex++;
}
prevTree(){
   this.hindex--;
}

playHindi(lang){
    var audio = new Audio(); 
    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.hindi[this.hindex][lang]+'&tl=hi&vol=1'; 
    audio.play();
    
}
  
}
