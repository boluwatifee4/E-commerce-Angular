import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public cartItemLis: any = [];
  public productLis = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }

  getProducts(){
    return this.productList.asObservable()
  }
  getProduct(){
    return this.productLis.asObservable()
  }

  setProduct(product: any){
    this.cartItemList.push(...product)
    this.productList.next(product)
  }
  setProduc(product: any){
    this.cartItemLis.push(...product)
    this.productLis.next(product)
  }

  addToCart(product: any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice()
    console.log(this.cartItemList)
  }
  addToCar(product: any){
    this.cartItemLis.push(product)
    this.productLis.next(this.cartItemLis)
    console.log(this.cartItemLis)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal+= a.total
    })
    return grandTotal
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList)
  }

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList) 
  }
}
