import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-rent-driver',
  templateUrl: './rent-driver.component.html',
  styleUrls: ['./rent-driver.component.scss']
})
export class RentDriverComponent implements OnInit {

  maxView = 'year';
  minView = 'minute';
  selectedDate: Date;
  showCalendar = true;
  startView = 'day';
  minuteStep:string="30";
  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        $("#e1").select2();
      });
    })(jQuery);
  }

}
