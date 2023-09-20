import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Products } from '../products';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  productname: string = "";
  productdesc: string = "";
  productprice: number = 0;
  productunits: number = 0;
  productid: string = "";
  newprod: Products = {id: this.productid, name: "", description: "", price: 0, units: 0};
  newProductMessage = "";
  iderrormsg: string = "This id already exists & new ID is required";



  constructor(private prodata: ProductdataService) {};

  ngOnInit(): void {
    
  }

  addNewProduct(event:any)
  {
    if(this.productid == null){
      console.log(this.iderrormsg);
    }
    else
    {
      this.newprod = {id: this.productid, name: this.productname, description: this.productdesc, price: this.productprice, units: this.productunits};
      console.log(this.newprod);
      this.prodata.add(this.newprod).subscribe((data)=>
      {
        this.productid = "";
        this.productname = "";
        this.productdesc = "";
        this.productprice = 0;
        this.productunits = 0; 
      });
      
    }
  }

}
