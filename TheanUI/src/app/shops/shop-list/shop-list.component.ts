import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ConcatSource } from 'webpack-sources';
import { ImageService } from 'src/app/services/image.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
    private apiService: ShopService,
    private router: Router,
    private func: ImageService,
    private spinner: NgxSpinnerService) {
  }

  allShops: any;

  ngOnInit(): void {
    this.apiService.GetAllShops().subscribe(data => {
      this.allShops = data["Data"]["Table"];
      console.log(this.allShops);
    })

  }

  ImageClick(image64: string) {
    this.func.openImageInNewWindow(image64);
  }

  goToDetails(shop: any) {
    window.localStorage.removeItem("shopID");
    window.localStorage.setItem("shopID", shop.ShopGUID);
    this.router.navigate(['ShopHome']);
  }

}
