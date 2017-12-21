import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ProductService } from './components/product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ProductService],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
