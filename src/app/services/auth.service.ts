import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountDTO } from '../models/accountDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username:string, password:string ):Observable<any> {
    return this.http.post(`${environment.BASEURL}/account`, {username, password});
  }

  register(username:string, email:string, password:string ):Observable<any> {
    return this.http.post(`${environment.BASEURL}/account/register`, {username, email, password});
  }
}
