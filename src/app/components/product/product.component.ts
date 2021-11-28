import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productList : any ;
public productLis : any ;
public filterCategory:  any;

searchKey:string =""
  constructor(private api: ApiService, private cartService : CartService,private router: Router) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res ;
      this.filterCategory = res
      this.productList.forEach((a:any) => {
        if(a.category === "women's clothing" || a.category === "men's clothing" ){
          a.category = "fashion"
        }
        Object.assign(a,{quantity:1,total:a.price})
      });
      console.log(this.productList)
    })
    this.api.getProduct()
    .subscribe(res=>{
      this.productLis = res ;
      // this.filterCategory = res
      // this.productList.forEach((a:any) => {
      //   if(a.category === "women's clothing" || a.category === "men's clothing" ){
      //     a.category = "fashion"
      //   }
      //   Object.assign(a,{quantity:1,total:a.price})
      // });
      // console.log(this.productList)
    })
    this.cartService.search.subscribe(val=>{
      this.searchKey = val
    })
  }

  addToCart(item:any){
    this.cartService.addToCart(item)
    
  }
  addToCar(item:any){
    this.cartService.addToCar(item)
  }
  addTopd(item:any){
    this.cartService.addToCar(item)
    this.router.navigate(['pd'])
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category ===  category || category === ""){
        return a;
      }
    })
  }
}
