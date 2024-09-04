import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private httpclient: HttpClient) { }
  
  PostMethod(reqUrl: string, payload: any, token: boolean=false, httpOptions: any={}){
    return this.httpclient.post(reqUrl, payload, token && httpOptions);
  }

  PostServiceReset(url: string, reqData: any, token: boolean=true, httpOptions: any={}){
    return this.httpclient.post(url, reqData, token ? httpOptions : {})
  }

  getService(url: string,  token: boolean=true, httpOptions: any={}){
    return this.httpclient.get(url,  token ? httpOptions : {})
  }

  putService(url: string, reqData: any, token: boolean=true, httpOptions: any={}){
    return this.httpclient.put(url, reqData, token ? httpOptions : {})
  }

  

 
  
}
