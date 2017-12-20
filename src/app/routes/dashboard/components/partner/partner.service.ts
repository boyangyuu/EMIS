import { Partner } from "./partner.model";
import { Subject } from "rxjs/Subject";


export class PartnerService {

  partnerChanged = new Subject<Partner[]>();

  partners: Partner[] = [
    new Partner('1','Jimmy'),
    new Partner('2','Trump'),
    new Partner('3','Hillary'),
    new Partner('4','Gates'),
  ]

  getPartners = () => {
    return this.partners;
  }

  addPartner = (partner: Partner) => {
    this.partners.push(partner);
    this.partnerChanged.next(this.partners.slice())
  }
}