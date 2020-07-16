import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {ITreeNode} from "../itree-node";

@Component({
  selector: 'app-part-form',
  templateUrl: './part-form.component.html',
  styleUrls: ['./part-form.component.scss']
})
export class PartFormComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  parts: ITreeNode[] = [];
  partName: string;
  parentId: number;

  ngOnInit(): void {
    this.parts = this.productsService.getParts();
  }

  addPart():void{
    if(this.partName){
      this.productsService.addPart(this.partName, this.parentId);
    }
  }

}
