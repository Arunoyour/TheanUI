import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ConcatSource } from 'webpack-sources';
import { CakeService } from 'src/app/services/cake.service';
import { ImageService } from 'src/app/services/image.service';
import { concat } from 'rxjs';


@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.scss']
})
export class CakeDetailComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
    private apiService: CakeService,
    private router: Router,
    private func: ImageService,
    private spinner: NgxSpinnerService) {
  }
  imageArr: string[] = [];
  cakeItem: any;
  perc: any = 16;
  message: string = '';
  selImage: string = '';
  selWeight: string = '';

  ImageClick(image64: string) {
    this.selImage = image64
  }

  selectWeight(we: any) {
    if (we == 0) {
      this.selWeight = '0';
    } else if (we == 1) {
      this.selWeight = '1';
    } else if (we == 2) {
      this.selWeight = '2';
    }
  }

  ngOnInit(): void {
    let cakeItemId = window.localStorage.getItem("cakeDetailID");
    if (!cakeItemId) {
      this.router.navigate(['CakeDetail']);
      return;
    }

    this.apiService.GetCakeItem(cakeItemId).subscribe(data => {
      this.cakeItem = data["Data"]["Table"][0];
      this.imageArr = this.cakeItem.Image != null ? this.cakeItem.Image.split('^') : [];
      this.selImage = this.imageArr[0];
      this.calculatePercentageOffer();
    });
  }

  calculatePercentageOffer() {
    this.perc = (((this.cakeItem.SellingPricetoCustomer - this.cakeItem.OfferPricetoCustomer) / this.cakeItem.SellingPricetoCustomer) * 100).toFixed(0);
  }

}
