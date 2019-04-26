import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'lims-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private ts: TabService,
  ) { }

  ngOnInit() {
  }

  addTab(title: string, newTab: boolean, data: string) {
    this.ts.newTab(
      {
        newTab: newTab,
        closeable: true,
        tab:
        {
          title: title,
          tabId: this.ts.currentId,
          data: JSON.parse(data),
        }
      },
    );
  }

  back() {
    this.ts.back(1);
  }
}
