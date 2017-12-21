import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerComponent } from './dashboard/components/partner/partner.component';
import { HttpClientModule } from '@angular/common/http';
import { DonutChartComponent } from './dashboard/components/chart/DonutChart.component';
import { AreaChartComponent } from './dashboard/components/chart/AreaChart.component';
import { ProductComponent } from './dashboard/components/product/product.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  declarations: [
    DashboardComponent,
    PartnerComponent,
    DonutChartComponent,
    AreaChartComponent,
    ProductComponent
  ]
})
export class RoutersModule {}
