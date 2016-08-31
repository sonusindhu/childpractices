import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/fruits/fruits.html'
})
export class FruitsPage {
    
    findex : any;
    fruits : any;
    
  constructor(private http: Http) {  
      this.fruits = 
        [
            {
                "id": "1",
                "english": "Acai Berry",
                "hindi": "काला जामुन",
                "desc": "",
                "status": true
            }
        ];
      this.findex = 0;
      this.http.get('api/fruits.json'  ).subscribe(data => {
        this.fruits = data.json().fruits;
        this.findex = 0;
    });


  }
  
  
nextFruit(){
   this.findex++;
}
prevFruit(){
   this.findex--;
}

playFruit(lang){
    var audio = new Audio(); 
    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.fruits[this.findex][lang]+'&tl=hi&vol=1'; 
    audio.play();
    
}
  
}
