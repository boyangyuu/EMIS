import { Subject } from "rxjs/Subject";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forEach } from "@angular/router/src/utils/collection";
import { Product } from "./Product.model";

@Injectable()
export class ProductService {

  productChanged = new Subject<Product[]>();

  products: Product[] = []

  constructor(private http: HttpClient) {
    this.http.get<Product[]>('http://127.0.0.1:3000/api/product')
      .subscribe(
        data => {
          this.products = data;
          this.productChanged.next(this.products);
        },
        error => console.log(error)
      );
  }

  getProducts = () => {
    return this.products;
  }

  addProduct = (name: String) => {
    this.http.post<Product[]>('http://127.0.0.1:3000/api/product', {name : name})
      .subscribe(
        data => {
          this.products = data;
          this.productChanged.next(this.products);
        },
        error => console.log(error)
      )
  }

  delProduct = (product: any) => {

    let id = product._id;
    this.http.delete<Product[]>('http://127.0.0.1:3000/api/product/' + id)
      .subscribe(
        data => {
          this.products = data;
          this.productChanged.next(this.products);
        },
        error => console.log(error)
      )
  }
}