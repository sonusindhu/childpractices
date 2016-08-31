import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

//import { MediaPlugin } from 'ionic-native';


@Component({
  templateUrl: 'build/pages/flowers/flowers.html'
})
export class FlowersPage {
    
    fData : any;
    findex  : any;

  constructor(private http: Http) {  
      
      this.fData = [{
          "id": "1",
            "english": "Jasmine",
            "hindi": "चमेली",
            "desc": "",
            "status": true
      }];
      this.findex = 0;
      this.http.get('api/flowers.json'  ).subscribe(data => {
        this.fData = data.json().flowers;
        this.findex = 0;
    });
    
    // 0172 5035016
    
  }
  
 
  
  
nextFlower(){
   this.findex++;
}
prevFlower(){
   this.findex--;
}

playFlower(lang){
    var audio = new Audio(); 
    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.fData[this.findex][lang]+'&tl=hi&vol=1'; 
    audio.play();
    
//    var file = new MediaPlugin('https://code.responsivevoice.org/develop/getvoice.php?t= '+this.fData[this.findex][lang]+'&tl=hi&vol=1' );
//    file.play();
    
}
  
}
