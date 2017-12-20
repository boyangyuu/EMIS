import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Partner } from './partner.model';
import { PartnerService } from './partner.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-partner',
  encapsulation: ViewEncapsulation.None,
  providers: [PartnerService],
  template:`
  <div class="col-lg-4">
    <div class="panel panel-default">
        <div class="panel-heading">
            <i class="fa fa-folder fa-fw"></i> Agent Panel
        </div>
        <div class="panel-body">
            <div class="list-group">
                <div  *ngFor="let partner of partners;" class="list-group-item">
                    <i class="fa fa-user"></i> {{partner.name}}
                    <span class="pull-right">
                        <!-- <a style="cursor: pointer; margin-right:6px">
                            <i class="fa fa-gear"></i>
                        </a> -->
                        <a style="cursor: pointer" (click)="delPartner(partner)">
                            <i class="fa fa-trash-o"></i>
                        </a>
                    </span>
                </div>
            </div>
            <input class="form-control" style="width: 80%;float: left;margin-right:8px " #partnerField>
            <button type="button" (click)="addPartner(partnerField.value)" class="btn btn-primary">
              ADD
            </button>
        </div>
    </div>
  </div>`
})
export class PartnerComponent implements OnInit {

  @ViewChild('partnerField') partnerField;
  partners: Partner[];
  private subscription : Subscription;
  
  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.subscription = this.partnerService.partnerChanged
      .subscribe(
        (partners: Partner[]) => {
          this.partners = partners;
        }
      );
  }

  addPartner = (value) => {
    if(value == "") return;
    this.partnerService.addPartner(value);
    this.partnerField.nativeElement.value = "";
  }

  delPartner = (partner: Partner) => {
    this.partnerService.delPartner(partner);
  }

}
