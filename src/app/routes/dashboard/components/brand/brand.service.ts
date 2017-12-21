import { Subject } from "rxjs/Subject";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forEach } from "@angular/router/src/utils/collection";
import { Brand } from "./brand.model";

@Injectable()
export class BrandService {

  brandChanged = new Subject<Brand[]>();

  brands: Brand[] = []

  constructor(private http: HttpClient) {
    this.http.get<Brand[]>('http://127.0.0.1:3000/api/brand')
      .subscribe(
        data => {
          console.log(data)
          this.brands = data;
          this.brandChanged.next(this.brands);
        },
        error => console.log(error)
      );
  }

  getbrands = () => {
    return this.brands;
  }

  addBrand = (name: String, pid: String) => {
    this.http.post<Brand[]>('http://127.0.0.1:3000/api/brand', {name : name, pid: pid})
      .subscribe(
        data => {
          this.brands = data;
          this.brandChanged.next(this.brands);
        },
        error => console.log(error)
      )
  }

  delBrand = (brand: any) => {

    let id = brand._id;
    this.http.delete<Brand[]>('http://127.0.0.1:3000/api/brand/' + id)
      .subscribe(
        data => {
          this.brands = data;
          this.brandChanged.next(this.brands);
        },
        error => console.log(error)
      )
  }
}