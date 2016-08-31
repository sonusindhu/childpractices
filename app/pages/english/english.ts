import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/english/english.html'
})
export class EnglishPage {
    
    eindex : any;
    english : any;
    
  constructor(private http: Http) {  
      this.english = 
        [
            {
                "id": "1",
                "capital": "A",
                "small": " a",
                "desc": "",
                "status": true
            }
        ];
      this.eindex = 0;
      this.http.get('api/english.json'  ).subscribe(data => {
        this.english = data.json().english;
        this.eindex = 0;
    });


  }
  
  
nextEnglish(){
   this.eindex++;
}
prevEnglish(){
   this.eindex--;
}

playEnglish(lang){
    var audio = new Audio(); 
    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.english[this.eindex][lang]+'&tl=hi&vol=1'; 
    audio.play();
    
}
  
}
