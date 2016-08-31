import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/trees/trees.html'
})
export class TreesPage {
    
    tindex : any;
    trees : any;
    
  constructor(private http: Http) {  
      this.trees = 
        [
            {
                "id": "1",
                "english": "Acai Berry",
                "hindi": "काला जामुन",
                "desc": "",
                "status": true
            }
        ];
      this.tindex = 0;
      this.http.get('api/trees.json'  ).subscribe(data => {
        this.trees = data.json().trees;
        this.tindex = 0;
    });


  }
  
  
nextTree(){
   this.tindex++;
}
prevTree(){
   this.tindex--;
}

playTree(lang){
    var audio = new Audio(); 
    audio.src ='https://code.responsivevoice.org/develop/getvoice.php?t= '+this.trees[this.tindex][lang]+'&tl=hi&vol=1'; 
    audio.play();
    
}
  
}
