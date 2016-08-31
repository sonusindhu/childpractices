import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'build/pages/animals/animals.html'
})
export class AnimalsPage {
    aData : any;
    aindex  : any;

  constructor(private http: Http) {    
      this.aData = [{
          "id": "1",
            "english": "Ant",
            "hindi": "चींटी",
            "desc": "",
            "status": true
      }];
      this.aindex = 0;
      this.http.get('api/animals.json'  ).subscribe(data => {
        this.aData = data.json().animals;
        this.aindex = 0;
    });
    
  }
  
 
  
  
nextAnimal(){
   this.aindex++;
}
prevAnimal(){
   this.aindex--;
}
playAnimal(lang){
    var audio = new Audio(); 
    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.aData[this.aindex][lang]+'&tl=hi&vol=1'; 
    audio.play();
}
  
}
