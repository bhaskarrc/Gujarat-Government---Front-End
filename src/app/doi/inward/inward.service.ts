import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InwardService {

  constructor(
    private http: HttpClient,
  ) { }

  triggerFetchData = new BehaviorSubject("");

  doTrigger() {
    this.triggerFetchData.next("fetch");
  }


  getInwardEntryById(id) {
    return this.http.get(environment.baseUrl + `DOI/inward/get/${id}`);
  }
  saveInwardEntry(elementData) {
    return this.http.post<any>(environment.baseUrl + `DOI/inward/save`, elementData)
  }

  getInwardEntryByElement(obj){
    return this.http.post<any>(environment.baseUrl + `DOI/inward/getByFieldName`, obj)
  }

  getMaxInwardNumber() {
    return this.http.get<any>(environment.baseUrl + `DOI/inward/maxInwardNo`);
  }

  getBankBranchByBankNames() {
    return this.http.get<any>(environment.baseUrl + `DOI/inward/bankBranches`);
  }

}
