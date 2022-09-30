import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  apiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getRandomUser():Observable<User>{
    return this.http.get<User>(this.apiUrl);
  }

}
