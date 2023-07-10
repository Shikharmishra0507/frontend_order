import { Component, OnInit } from '@angular/core';
import {ProductService} from '../_service/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response) => {
        console.log("get response");
        this.products = response; 
        // Process the response data as needed
      },
      (error) => {
        console.log('API error:', error);
        // Handle the error appropriately
      }
    );

  }
  
}
