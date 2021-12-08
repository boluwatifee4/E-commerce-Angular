import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
public product : any = [];
public grandTotal !: number ;

// Injecting Cart Service 
  constructor(private cartService: CartService) { }

  // getting an instance of an observable to getList Of Products/price
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product= res;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  //function to remove item 
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  // function to remove all items at once
  emptyCart(){
    this.cartService.removeAllCart();
  }
}
