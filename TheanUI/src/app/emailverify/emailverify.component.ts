import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-emailverify',
  templateUrl: './emailverify.component.html',
  styleUrls: ['./emailverify.component.scss']
})
export class EmailverifyComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit(): void {
  }
  Submit() {
    alert("submitted");
    this.router.navigate(['Landing']);
  }
  Resend() {
    alert("Resend");
  }
}
