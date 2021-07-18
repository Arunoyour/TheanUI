import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ConcatSource } from 'webpack-sources';
import { CakeService } from 'src/app/services/cake.service';
import { ImageService } from 'src/app/services/image.service';



@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private apiService: CakeService,
    private router: Router,
    private func: ImageService,
    private spinner: NgxSpinnerService) {
  }

  allCakes: any;

  ngOnInit(): void {
    this.apiService.GetAllCakeItems().subscribe(data => {
      this.allCakes = data["Data"]["Table"];
      console.log(this.allCakes);
    })

  }

  ImageClick(image64: string) {
    this.func.openImageInNewWindow(image64);
  }

  goToDetails(cake: any) {
    window.localStorage.removeItem("cakeDetailID");
    window.localStorage.setItem("cakeDetailID", cake.ItemGUID);
    this.router.navigate(['CakeDetail']);
  }

}
