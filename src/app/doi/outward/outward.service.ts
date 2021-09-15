import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OutwardService {

  constructor(
    private http: HttpClient,
  ) { }
  saveOutWardEntry(elementData) {
    return this.http.post<any>(environment.baseUrl + `DOI/outward/save`, elementData)
  }

  getOutWardEntryByElement(obj){
    return this.http.post<any>(environment.baseUrl + `DOI/outward/get`, obj)
  }

}
