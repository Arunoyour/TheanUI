import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { DeliveryLocationDTO } from '../Model/DeliveryLocationDTO';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.scss']
})
export class AddlocationComponent implements OnInit {

  @ViewChild('mylat') mylat: ElementRef;
  @ViewChild('mylong') mylong: ElementRef;

  addForm: FormGroup;
  isEdit: boolean = false;
  userLocation: any;
  editDT: DeliveryLocationDTO = <DeliveryLocationDTO>{};

  constructor(private formBuilder: FormBuilder,
    private apiService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: NotificationService) {

    this.addForm = this.formBuilder.group({
      userGuid: [],
      lat: [],
      logt: [],
      houseName: [],
      houseNo: [],
      street: [],
      place: [],
      junName: [],
      nickName: []
    });
  }

  ngOnInit() {
    this.isEditDataPopulate();
  }

  onSubmit() {
    this.addForm.controls["userGuid"].setValue(localStorage.getItem("CurrUser"));
    if (this.isEdit) {
      this.apiService.UpdateDeliveryLocation(this.addForm.value)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['Landing']);
        });
    } else {
      this.apiService.AddDeliveryLocation(this.addForm.value)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['Landing']);
        });
    }

  }

  LatChange() {
    var ctrl = this.addForm.controls['lat'];
    ctrl.setValue(this.mylat.nativeElement.value);
  }
  LongChange() {
    var ctrl = this.addForm.controls['logt'];
    ctrl.setValue(this.mylong.nativeElement.value);
  }

  isEditDataPopulate() {
    var curUser = localStorage.getItem("CurrUser");
    var editLoc = localStorage.getItem("EditLocation");
    console.log("testdetailssssssssssss");
    console.log(curUser);
    console.log(editLoc);
    if (editLoc != null && curUser != null) {
      this.isEdit = true;
      this.apiService.GetDeliveryLocation(curUser.toString(), editLoc).subscribe(location => {
        console.log(location);
        if (location["Data"]["Table"] != null) {
          this.userLocation = location["Data"]["Table"][0];

          var addressArr = this.userLocation.Address.split('$$');
          this.editDT.lat = this.userLocation.Lattitude;
          this.editDT.logt = this.userLocation.Longitude;
          this.editDT.junName = this.userLocation.NearestJunction;
          this.editDT.nickName = this.userLocation.AddressShortName;
          this.editDT.houseName = addressArr[0]
          this.editDT.houseNo = addressArr[1]
          this.editDT.street = addressArr[2]
          this.editDT.place = addressArr[3]


          this.addForm.patchValue(this.editDT);
          console.log("get user location");
          console.log(this.userLocation);
        }
      });
    }
  }

}
