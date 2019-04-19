import { Component, OnInit } from '@angular/core';
import { TabsService } from '../../services/tabs.service';
import { TestCompComponent } from '../test-comp/test-comp.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private ts: TabsService
  ) { }

  ngOnInit() {
  }

  newTab(title: string, closeable: boolean) {
    this.ts.newTab({
      title: title,
      closeable: closeable,
      component: TestCompComponent
    });
  }

}
