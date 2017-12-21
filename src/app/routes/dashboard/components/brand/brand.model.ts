import { Product } from "../product/Product.model";

export class Brand {
  constructor(public _id: string, public product: Product, public name: string) {}
}