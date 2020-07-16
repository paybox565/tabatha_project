import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {ITreeNode} from "../itree-node";

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.scss']
})
export class PositionFormComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  parts: ITreeNode[] = [];
  positionName: string;
  price: number;
  parentId: number;

  ngOnInit(): void {
    this.parts = this.productsService.getParts();
  }

  addPosition():void{
    if(this.positionName && this.price){
      this.productsService.addPosition(this.positionName, this.price);
    }
  }

}
