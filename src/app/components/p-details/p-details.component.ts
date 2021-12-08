import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-p-details',
  templateUrl: './p-details.component.html',
  styleUrls: ['./p-details.component.css']
})
export class PDetailsComponent implements OnInit {
  public product : any = [];
  public grandTotal !: number ;

  // Imjecting cart service
    constructor(private cartService: CartService, private router: Router) { }
  
// getting products and adding it in oder to view detaiks
// too lazy to get new functions lol
    ngOnInit(): void {
      this.cartService.getProduct()
      .subscribe(res=>{
        this.product= res;
      })
    }

    addToCart(item:any){
      this.cartService.addToCart(item)
      this.removeItem(item);{
        this.cartService.removeAllCar()
      }
      this.router.navigate(['/', 'cart']);
    }
    removeItem(item: any){
    this.cartService.removeAllCar();
  }

}
