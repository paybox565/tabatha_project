import {Component, Input, OnInit} from '@angular/core';
import {ITreeNode} from "../itree-node";

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss']
})
export class PartsListComponent implements OnInit {

  constructor() { }

  @Input() treeData: ITreeNode[];

  ngOnInit(): void {
  }

  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }

}
