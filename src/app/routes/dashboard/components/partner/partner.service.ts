import { Partner } from "./partner.model";
import { Subject } from "rxjs/Subject";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forEach } from "@angular/router/src/utils/collection";

@Injectable()
export class PartnerService {

  partnerChanged = new Subject<Partner[]>();

  partners: Partner[] = []

  constructor(private http: HttpClient) {
    this.http.get<Partner[]>('http://127.0.0.1:3000/api/partner')
      .subscribe(
        data => {
          this.partners = data;
          this.partnerChanged.next(this.partners);
        },
        error => console.log(error)
      );
  }

  getPartners = () => {
    return this.partners;
  }

  addPartner = (name: String) => {
    this.http.post<Partner[]>('http://127.0.0.1:3000/api/partner', {name : name})
      .subscribe(
        data => {
          this.partners = data;
          this.partnerChanged.next(this.partners);
        },
        error => console.log(error)
      )
  }

  delPartner = (partner: Partner) => {
    let name = partner.name;
    this.http.delete<Partner[]>('http://127.0.0.1:3000/api/partner/' + name)
      .subscribe(
        data => {
          this.partners = data;
          this.partnerChanged.next(this.partners);
        },
        error => console.log(error)
      )
  }
}