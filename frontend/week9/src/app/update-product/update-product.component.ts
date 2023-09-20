import { Component, OnInit} from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Products } from '../products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  constructor(private proddata: ProductdataService, private router: Router) {}

  id:string = "";
  name: string = "";
  description: string = "";
  price: number = 0;
  units: number = 0; 
  updateProd: Products = {id: this.id, name: "", description: "", price: 0, units: 0};

  public  ngOnInit() 
  { 
  
      this.id = localStorage.getItem("id") || "";
      this.name = localStorage.getItem("name") || "";
      this.description = localStorage.getItem("description") || "";
      this.price = Number(localStorage.getItem("price")) || 0;
      this.units = Number(localStorage.getItem("units")) || 0;

    
  }

  updateNewProduct()
  {
    this.updateProd = {id: this.id, name: this.name, description: this.description, price: this.price, units: this.units};
    this.proddata.updateitem(this.updateProd).subscribe((data)=>
      {
        localStorage.clear();
      });
      this.router.navigate(['products'], { replaceUrl: true });

  }

}
