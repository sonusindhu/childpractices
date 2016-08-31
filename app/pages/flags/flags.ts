import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/flags/flags.html'
})
export class FlagsPage {
    
    fgindex : any;
    flags : any;
    
  constructor(private http: Http) {  
      this.flags = 
        [
            {
                "id": "1",
                "capital": "A",
                "small": " a",
                "desc": "",
                "status": true
            }
        ];
      this.fgindex = 0;
      this.http.get('api/flags.json'  ).subscribe(data => {
        this.flags = data.json().flags;
        this.fgindex = 0;
    });


  }
  
  
nextFlag(){
   this.fgindex++;
}
prevFlag(){
   this.fgindex--;
}

playFlag(lang){
    //var audio = new Audio(); 
//    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.flags[this.fgindex][lang]+'&tl=hi&vol=1'; 
    //audio.src ='http://translate.google.com/translate_tts?ie=utf-8&tl=en&q='+this.flags[this.fgindex][lang]; 
   // audio.play();
    
//    TTS
//        .speak(this.flags[this.fgindex][name], function () {
//            alert('success');
//        }, function (reason) {
//            alert(reason);
//        });
    
}
  
}
