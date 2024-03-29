import { Component, Inject, InjectionToken, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Constants } from '../shared/constants';
import { ResponseDTO } from '../Model/ResponseDTO';
import { MediAPIDto } from '../Model/MediDTO';
import { constants } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class MediService {

  public Http: HttpClient;
  public BaseURL: string;

  constructor(http: HttpClient) {
    this.Http = http;
    this.BaseURL = Constants.baseURL;
  }

 SaveMediCart(medicart:MediAPIDto)
  {
    const body = JSON.stringify(medicart);
    const headers = { 'content-type': 'application/json',
                      'Access-Control-Allow-Origin': 'https://www.thean.in/' ,
                      'withCredentials':'True'
                    };
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/MediCart/SaveMediCart', body, { 'headers': headers });
  }

}
