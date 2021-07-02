import { Component, OnInit } from '@angular/core';
declare var device: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TheanUI';
 // document.addEventListner("deviceready",function(){},false);
 ngOnInit(){
  document.addEventListener("deviceready",function(){
    alert(device.platform);
  },false);
 }


}
