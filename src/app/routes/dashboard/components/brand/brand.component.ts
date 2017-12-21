import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Brand } from './brand.model';
import { Product } from '../product/Product.model';
import { ProductService } from '../product/product.service';
import { BrandService } from './brand.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-brand',
  encapsulation: ViewEncapsulation.None,
  providers: [BrandService],
  template:`
  <div class="col-lg-4">
    <div class="panel panel-default">
        <div class="panel-heading">
            <i class="fa fa-folder fa-fw"></i> Brand Panel
        </div>
        <div class="panel-body">
            <div class="list-group">
                <div  *ngFor="let brand of brands;" class="list-group-item">
                    <i class="fa fa-tag"></i> {{brand.name}}
                    <span class="text-muted small" style="margin-left:10px;">
                      <em>{{brand.productDetail[0].name}}</em>
                    </span>
                    <span class="pull-right">
                        <!-- <a style="cursor: pointer; margin-right:6px">
                            <i class="fa fa-gear"></i>
                        </a> -->
                        <a style="cursor: pointer"  (click)="delBrand(brand)">
                            <i class="fa fa-trash-o"></i>
                        </a>
                    </span>
                </div>
            </div>
            <input class="form-control" style="width: 40%;float: left;margin-right:8px " #brandField>
            <select class="form-control" style="width: 37%;float: left;margin-right:8px" #selectField>
              <option value ="" >choose</option>
              <option *ngFor="let item of products" [value]="item._id">{{item.name}}</option>
            </select>
            <button type="button" (click)="addBrand(brandField.value, selectField.value)" class="btn btn-primary">
              ADD
            </button>
        </div>
    </div>
  </div>`
})
export class BrandComponent implements OnInit, OnDestroy {
  

  private productSubscription : Subscription;
  private brandSubscription : Subscription;
  @ViewChild('brandField') brandField;
  @ViewChild('selectField') selectField;

  brands: Brand[];

  products: Product[];

  selectedProduct: Product;
  
  constructor(private productService : ProductService, private brandService:BrandService) {
    this.productSubscription = this.productService.productChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );

    this.brandSubscription = this.brandService.brandChanged
    .subscribe(
      (brands: Brand[]) => {
        this.brands = brands;
      }
    );
  }

  ngOnInit() {
  }

  delBrand = (value: any) => {
    this.brandService.delBrand(value);
  }

  addBrand = (value: any, id: any) => {
    if(id == "") return;
    if(value == "") return;
    this.brandService.addBrand(value,id);
    this.brandField.nativeElement.value = "";
    this.selectField.nativeElement.value ="";
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
    this.brandSubscription.unsubscribe();
  }

}
