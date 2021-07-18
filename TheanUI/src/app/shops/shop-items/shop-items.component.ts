import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ConcatSource } from 'webpack-sources';
import { ImageService } from 'src/app/services/image.service';
import { concat } from 'rxjs';
import { ShopService } from 'src/app/services/shop.service';


@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.scss']
})
export class ShopItemsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private apiService: ShopService,
    private router: Router,
    private func: ImageService,
    private spinner: NgxSpinnerService) {
  }

  imageArr: string[] = [];
  shopItem: any;
  perc: any = 16;
  selImage: string = '';
  selWeight: string = '';

  units: Array<any> = [1,2,3,4,5,6,7,8,9,10];

  ImageClick(image64: string) {
    this.selImage = image64
  }

  ngOnInit(): void {
    let shopItemId = window.localStorage.getItem("shopItemID");
    if (!shopItemId) {
      this.router.navigate(['ShopHome']);
      return;
    }

    this.apiService.GetShopItemDetails(shopItemId).subscribe(data => {
      this.shopItem = data["Data"]["Table"][0];
      this.imageArr = this.shopItem.Image != null ? this.shopItem.Image.split('^') : [];
      this.selImage = this.imageArr[0];
      this.calculatePercentageOffer();
    });
  }

  calculatePercentageOffer() {
    this.perc = (((this.shopItem.SellingPricetoCustomer - this.shopItem.OfferPricetoCustomer) / this.shopItem.SellingPricetoCustomer) * 100).toFixed(0);
  }

}
