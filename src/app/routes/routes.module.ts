import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerComponent } from './dashboard/components/partner/partner.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    DashboardComponent,
    PartnerComponent
  ]
})
export class RoutersModule {}
