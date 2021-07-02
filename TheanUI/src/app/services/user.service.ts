import { Component, Inject, InjectionToken, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../shared/AppConstants';
import { UserDTO, ChangePasswordDTO } from '../Model/UserDTO';
import { ResponseDTO } from '../Model/ResponseDTO';
import { DeliveryLocationDTO, DeliveryLocationAPIDTO } from '../Model/DeliveryLocationDTO';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  public Http: HttpClient;
  public BaseURL: string;

  constructor(http: HttpClient) {
    this.Http = http;
    this.BaseURL = AppConstants.baseURL;
  }

  AddUser(user: UserDTO) {
    const body = JSON.stringify(user);
    const headers = { 'content-type': 'application/json',
                      'Access-Control-Allow-Origin': 'https://www.thean.in/' ,
                      'withCredentials':'True'
                    };
  
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/AddUser', body, { 'headers': headers });
  }

  ForgortPassword(user: UserDTO) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    const body = JSON.stringify(user);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/ForgotPassword', body, { 'headers': headers });
  }

  ResetPassword(user: ChangePasswordDTO) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    const body = JSON.stringify(user);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/ChangePWD', body, { 'headers': headers });
  }

  LoginUser(user: UserDTO) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    const body = JSON.stringify(user);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/LoginUser', body, { 'headers': headers });
  }

  AddDeliveryLocation(delLocation: DeliveryLocationDTO) {
    var delApiLocation = new DeliveryLocationAPIDTO();
    delApiLocation.userGuid = delLocation.userGuid;
    delApiLocation.lat = delLocation.lat;
    delApiLocation.logt = delLocation.logt;
    delApiLocation.junName = delLocation.junName;
    delApiLocation.nickName = delLocation.nickName;
    delApiLocation.addr = delLocation.houseName + "$$"
      + delLocation.houseNo + "$$"
      + delLocation.street + "$$"
      + delLocation.place;

    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    const body = JSON.stringify(delApiLocation);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/SavDelLoc', body, { 'headers': headers });
  }

  UpdateDeliveryLocation(delLocation: DeliveryLocationDTO) {
    var delApiLocation = new DeliveryLocationAPIDTO();
    delApiLocation.userGuid = delLocation.userGuid;
    delApiLocation.lat = delLocation.lat;
    delApiLocation.logt = delLocation.logt;
    delApiLocation.junName = delLocation.junName;
    delApiLocation.nickName = delLocation.nickName;
    delApiLocation.addr = delLocation.houseName + "$$"
      + delLocation.houseNo + "$$"
      + delLocation.street + "$$"
      + delLocation.place;

    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    const body = JSON.stringify(delApiLocation);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/UptDelLoc', body, { 'headers': headers });
  }

  GetAllDeliveryLocation(guid: string) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    var obj = { "crux": guid };
    const body = JSON.stringify(obj);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/GetDelLoc', body, { 'headers': headers });
  }

  GetDeliveryLocation(guid: string, name: string) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    var obj = { "crux": guid, "Nme": name };
    const body = JSON.stringify(obj);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/GetDelLocByUsr', body, { 'headers': headers });
  }

}
