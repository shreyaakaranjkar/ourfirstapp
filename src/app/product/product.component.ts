import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  isProductAvailable! : boolean

  ngOnInit(): void {
    this.isProductAvailable = Math.random() >= .5? true : false;
  }

  productName : string = 'Vivo X1';
  productId : number = 101;

  skills : Array<string> = ['HTML','CSS','Javascript','Bootstrap','SASS','Angular']



}
