import { Component } from '@angular/core';
import { product } from './models/products';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopify-Ui';
  items:product[]=[];

  constructor(private productServives:ProductService){}

  ngOnInit():void{
   this.productServives.getProduts().subscribe((result:product[]) => (this.items=result));
  }
}
