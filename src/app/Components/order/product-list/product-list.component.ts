import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  selectedCatID:number=0;
  catgList: ICategory[];
  PrdList:Iproduct[];
  totalPrice:number = 0;
  constructor() {
    this.catgList = [
      {id:1, name:'laptops'},
      {id:2, name:'Mobiles'},
      {id:3, name:'Tablets'}
    ]
    this.PrdList=[{
    id:100,
    name:"Iphone",
    price:3000,
    quantity:0,
    imgURL:"https://picsum.photos/300/300",
    categoryID:2
    },
    {
      id:101,
      name:"Iphone2",
      price:3000,
      quantity:5,
      imgURL:'https://picsum.photos/300/300',
      categoryID:2
      },
      {
        id:102,
        name:"Iphone2",
        price:3000,
        quantity:2,
        imgURL:"https://picsum.photos/300/300",
        categoryID:3
        },
        {
          id:103,
          name:"Iphone3",
          price:3000,
          quantity:9,
          imgURL:"https://picsum.photos/300/300",
          categoryID:1
          },
          {
            id:104,
            name:"Iphone4",
            price:3000,
            quantity:5,
            imgURL:"https://picsum.photos/300/300",
            categoryID:1
            }]
   }

  ngOnInit(): void {
  }
  Buy(pprice:number, count:string){
     
    this.totalPrice = +count*pprice

  }

}
