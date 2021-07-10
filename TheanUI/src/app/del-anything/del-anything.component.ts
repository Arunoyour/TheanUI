import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-del-anything',
  templateUrl: './del-anything.component.html',
  styleUrls: ['./del-anything.component.scss']
})
export class DelAnythingComponent implements OnInit {
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
        $("#e2").select2();
      });
    })(jQuery);
  }

}
