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

  addTab(title: string, data: string) {
    this.ts.newTab(
      {
        tab:
        {
          title: title,
          tabId: this.ts.currentId,
          closeable: true,
          data: JSON.parse(data),
        }
      }
    );
  }

}
