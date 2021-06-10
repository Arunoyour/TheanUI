import { Component, Inject, InjectionToken, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../shared/AppConstants';
import { UserDTO } from '../Model/UserDTO';
import { ResponseDTO } from '../Model/ResponseDTO';


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
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/AddUser', body, { 'headers': headers });
  }

  ForgortPassword(user: UserDTO) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/ForgotPassword', body, { 'headers': headers });
  }

  LoginUser(user: UserDTO) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/User/LoginUser', body, { 'headers': headers });
  }
}
