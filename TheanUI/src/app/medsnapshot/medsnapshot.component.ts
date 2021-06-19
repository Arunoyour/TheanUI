import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MediService } from '../services/medi.service';
import { MediAPIDto } from '../Model/MediDTO';
import { Router } from "@angular/router";
declare var jQuery: any;

@Component({
  selector: 'app-medsnapshot',
  templateUrl: './medsnapshot.component.html',
  styleUrls: ['./medsnapshot.component.scss']
})
export class MedsnapshotComponent implements OnInit {

  constructor(
    private apiService: MediService,
   
    private router: Router
  ) { }

   mediDto:MediAPIDto;
   values :{[k:string]:string}={};
   public MedList: any[] = [{
    Mediname:''
  }];

  ngOnInit(): void {
    this.allStorage();
    (function ($) {
      $(document).ready(function(){
        console.log("Hello from jQuery!");
        let input:any = document.getElementById('capture');
      
        
        input.addEventListener('change', (ev:any)=>{
          if(input.files.length<30)
          {
           for (var i = 0; i < input.files.length; i++) {
          
            let reader:any = new FileReader();
            reader.onload = function(even:any) {
              //console.log(i);
              localStorage.setItem('medicart_'+(621355968e9 + (new Date()).getTime() * 1e4),reader.result);
            }
            reader.readAsDataURL(input.files[i]);
           }

          }
          else  {
            alert("Maximum 30 Files");
          }
            
        });
      });
    })(jQuery);
  }

  allStorage() {
   
    let    keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
      if(Object.keys(localStorage)[i].includes('medicart')){
       this.values[Object.keys(localStorage)[i]]=localStorage.getItem(keys[i]);
      }
    }
    
}

addMedi() {
this.MedList.push({
});
}

removeMedi(i: number) {
  this.MedList.splice(i, 1);
}

SubmitMedi(){
  console.log("Am here");


let    keys = Object.keys(localStorage),
i = keys.length;
var val=  new Array(i);

while ( i-- ) {
if(Object.keys(localStorage)[i].includes('medicart')){
//this.val[Object.keys(localStorage)[i]]=localStorage.getItem(keys[i]);
//val.push(localStorage.getItem(keys[i]));
val[i]=localStorage.getItem(keys[i]);

}
}



  this.mediDto={
    MediName:this.MedList,
    MediImage:val
  };
  this.apiService.SaveMediCart(this.mediDto);
}
}
