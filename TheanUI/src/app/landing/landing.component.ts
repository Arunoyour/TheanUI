import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit(): void {
  }

  ChangePassword() {
    this.router.navigate(['resetpassword']);
  }
  ATM() {
  }
  Bakes() {
    this.router.navigate(['CakeHome']);
  }
  Shops() {
    this.router.navigate(['ShopList']);
  }
  Medicine() {
  }
  Vegetables() {
  }

}
