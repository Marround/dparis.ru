import { Component, OnInit } from '@angular/core';
import { PricelistService } from './pricelist.service';

@Component({
  moduleId: module.id,
  selector: 'app-pricelist-section',
  templateUrl: 'pricelist.component.html',
  styleUrls: ['pricelist.component.css']
})
export class PricelistSectionComponent implements OnInit{
  menu: any[];

  constructor(private pricelistsService: PricelistService) {}

  ngOnInit() {
    this.pricelistsService.getLists().subscribe(data => this.menu = data.menu);
  }
}
