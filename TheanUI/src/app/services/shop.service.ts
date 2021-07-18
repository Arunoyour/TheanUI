import { Component, Inject, InjectionToken, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Constants } from '../shared/constants';
import { ResponseDTO } from '../Model/ResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  public Http: HttpClient;
  public BaseURL: string;

  constructor(http: HttpClient) {
    this.Http = http;
    this.BaseURL = Constants.baseURL;
  }

  GetAllShops() {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/Shop/GetAllShopNameHomePage', { 'headers': headers });
  }

  GetAllItemsInShop(guid: string) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    var obj = { "ItemID": guid };
    const body = JSON.stringify(obj);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/Shop/GetItemDetails', body, { 'headers': headers });
  }

  GetShopItemDetails(guid: string) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'https://www.thean.in/' };
    var obj = { "ItemID": guid };
    const body = JSON.stringify(obj);
    return this.Http.post<ResponseDTO>(this.BaseURL + 'api/Shop/GetItemDetailsView', body, { 'headers': headers });
  }
}
