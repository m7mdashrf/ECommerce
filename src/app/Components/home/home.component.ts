import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  storeInfo : StoreData;
  isImgShown:boolean = true;
  constructor() {
    this.storeInfo = new StoreData('ITI Store','https://picsum.photos/seed/picsum/500/500', ['Cairo', 'Mansoura', 'Alex'] )
    
  }

  ngOnInit(): void {
  }
  toggleImg()
  {
    this.isImgShown = !this.isImgShown;
  }

}
