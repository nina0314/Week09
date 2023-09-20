import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Products } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: Products[] = [];
  constructor(private proddata: ProductdataService, private router: Router) {}

  
  public ngOnInit(): void {

    this.proddata.getlist().subscribe((data) => {
      this.products = data;
    }, 
    (error) => {
      console.error('Error fetching products:', error);
    })
  }

  public reload()
  {
    this.proddata.getlist().subscribe((data) => {
      this.products = data;
    }, 
    (error) => {
      console.error('Error fetching products:', error);
    })
  }

  deleteProducts(id: any)
  {
    if(confirm("Are you sure you want to delete this item"))
    {
      this.proddata.deleteitem(id).subscribe((data)=> {
        this.products = data;
      });
      this.router.navigate(['products'], { replaceUrl: true });
    }
  }

  editProduct(id: any, name: any, description: any, price:any, units: any)
  {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("description", description);
    localStorage.setItem("price", price);
    localStorage.setItem("units", units);

    this.router.navigate(['update-products'], { replaceUrl: true });

  }
  
}
