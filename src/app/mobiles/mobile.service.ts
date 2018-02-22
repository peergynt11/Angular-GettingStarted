import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMobile } from './mobile';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class MobileService {

  private _mobileUrl       = 'http://ci30.local:1104/index.php/mobileapp/listall';
  private _singlemobileUrl = 'http://ci30.local:1104/index.php/mobileapp/listsingle/';


  constructor(private _http: HttpClient) { }

  getMobiles(): Observable<IMobile[]>{
    return this._http.get<IMobile[]>(this._mobileUrl)
      .do(data => console.log(JSON.stringify(data)))
      .do(data => console.log(data))
      .catch(this.handleError)
  }

  getSingleMobile(id: String): Observable<any>{
    let url = this._singlemobileUrl + id;
    console.log('URL: '+url);
    return this._http.get<any>(url)
      .do(data => console.log('DoData: '+JSON.stringify(data)))
      .catch(this.handleError)
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
}  

}
