import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  postData(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/post`,data);
  }
}
