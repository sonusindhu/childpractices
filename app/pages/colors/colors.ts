import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'build/pages/colors/colors.html'
})
export class ColorsPage {
    colors : any;
    clindex  : any;

  constructor(private http: Http) {    
      this.colors = [{
          "id": "1",
            "english": "Black",
            "hindi": "काला",
            "desc": "",
            "status": true
      }];
      this.clindex = 0;
      this.http.get('api/colors.json'  ).subscribe(data => {
        this.colors = data.json().colors;
        this.clindex = 0;
    });
    
  }
  
 
  
   
nextColor(){
   this.clindex++;
}
prevColor(){
   this.clindex--;
}
playColor(lang){
    var audio = new Audio(); 
    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.colors[this.clindex][lang]+'&tl=hi&vol=1'; 
    audio.play();
}
  
}
