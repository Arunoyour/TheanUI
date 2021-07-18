import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ConcatSource } from 'webpack-sources';
import { ImageService } from 'src/app/services/image.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private apiService: ShopService,
    private router: Router,
    private func: ImageService,
    private spinner: NgxSpinnerService) {
  }

  allItemsInshop: any;

  ngOnInit(): void {
    let shopID = window.localStorage.getItem("shopID");
    if (!shopID) {
      this.router.navigate(['ShopList']);
      return;
    }

    this.apiService.GetAllItemsInShop(shopID).subscribe(data => {
      this.allItemsInshop = data["Data"]["Table"];
      console.log(this.allItemsInshop);
    });
  }


  ImageClick(image64: string) {
    this.func.openImageInNewWindow(image64);
  }

  goToDetails(item: any) {
    window.localStorage.removeItem("shopItemID");
    window.localStorage.setItem("shopItemID", item.ItemGUID);
    this.router.navigate(['ShopItem']);
  }

}
