import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from './productdata.service';
import { Products
 } from './products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'week9';

  products: Products[] = [];
  constructor(private router:Router, private proddata: ProductdataService){};

  async ngOnInit()
   {
    console.log('AppComponent ngOnInit called');
     this.proddata.create().subscribe((data) => {
      this.products = data;
      if(this.products.length != 0)
      {
        this.router.navigate(['products'], { replaceUrl: true });
      }
    })

  }

  add()
  {
    this.router.navigate(['add-products'], { replaceUrl: true });
  }

  list()
  {
    this.router.navigate(['products'], { replaceUrl: true });

  }

}
