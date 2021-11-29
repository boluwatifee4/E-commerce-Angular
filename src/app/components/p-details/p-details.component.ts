import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-p-details',
  templateUrl: './p-details.component.html',
  styleUrls: ['./p-details.component.css']
})
export class PDetailsComponent implements OnInit {
  public product : any = [];
  public grandTotal !: number ;
    constructor(private cartService: CartService) { }
  
    ngOnInit(): void {
      this.cartService.getProduct()
      .subscribe(res=>{
        this.product= res;
        this.grandTotal = this.cartService.getTotalPrice()
      })
    }

    addToCart(item:any){
      this.cartService.addToCart(item)
      
    }

}
