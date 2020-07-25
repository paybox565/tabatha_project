import { Component, OnInit } from '@angular/core';
import {ITreeNode} from "../itree-node";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  nodes: ITreeNode[] =[];

  ngOnInit(): void {
    this.nodes = this.productsService.getProducts();
  }

}
