import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heyauto',
  templateUrl: './heyauto.component.html',
  styleUrls: ['./heyauto.component.scss']
})
export class HeyautoComponent implements OnInit {

  maxView = 'year';
  minView = 'minute';
  selectedDate: Date;
  showCalendar = true;
  startView = 'day';
  minuteStep:string="30";

  constructor() { }

  ngOnInit(): void {
  }

  Submit()
  {
    var SelDte= this.selectedDate.getDate()+""+(this.selectedDate.getMonth()+1)+""+this.selectedDate.getFullYear();
    var SelTme=this.selectedDate.getTime();
    let CurDte = new Date().getDate()+""+(new Date().getMonth()+1)+""+new Date().getFullYear();
    let CurTme = new Date().getTime();
    if(SelDte==CurDte||SelDte>CurDte)
    {
      if(SelTme>CurTme+15)
      {
       this.BookNow();
      }
      else /** ERROR CONDITION */
       {
        alert("Please choose a min 15 greater than current time");
       }
    }
    else /** ERROR CONDITION */
    {
     alert("Please choose a min 15 greater than current time");
    }
  }

  BookNow()
  {
    alert("Book Now");
  }

}
