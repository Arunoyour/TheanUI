import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit {
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
