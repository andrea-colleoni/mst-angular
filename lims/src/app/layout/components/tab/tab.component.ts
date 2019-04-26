import { Component, OnInit, Input } from '@angular/core';
import { LimsTab } from '../../model/lims-tab';

@Component({
  selector: 'lims-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() tab: LimsTab;
  dynamicComponent: any;

  constructor() { }

  ngOnInit() {
    this.dynamicComponent = this.tab ? this.tab.component : undefined;
  }
}
