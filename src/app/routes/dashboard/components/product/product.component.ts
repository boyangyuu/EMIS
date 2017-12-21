import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Product } from './Product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  template:`
  <div class="col-lg-4">
    <div class="panel panel-default">
        <div class="panel-heading">
            <i class="fa fa-folder fa-fw"></i> Product Panel
        </div>
        <div class="panel-body">
            <div class="list-group">
                <div  *ngFor="let product of products;" class="list-group-item">
                    <i class="fa fa-tag"></i> {{product.name}}
                    <span class="pull-right">
                        <!-- <a style="cursor: pointer; margin-right:6px">
                            <i class="fa fa-gear"></i>
                        </a> -->
                        <a style="cursor: pointer"  (click)="delProduct(product)">
                            <i class="fa fa-trash-o"></i>
                        </a>
                    </span>
                </div>
            </div>
            <input class="form-control" style="width: 80%;float: left;margin-right:8px " #productField>
            <button type="button" (click)="addProduct(productField.value)" class="btn btn-primary">
              ADD
            </button>
        </div>
    </div>
  </div>`
})
export class ProductComponent implements OnInit {

  private subscription : Subscription;
  @ViewChild('productField') productField;
  products: Product[] = []
  
  constructor(private productService: ProductService) {
    this.subscription = this.productService.productChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
   }

  ngOnInit() {
  }

  addProduct = (value: any) => {
    if(value == "") return;
    this.productService.addProduct(value);
    this.productField.nativeElement.value = "";
  }

  delProduct = (product: any) => {
    this.productService.delProduct(product);
  }

}
