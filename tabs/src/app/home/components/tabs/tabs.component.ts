import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Tab } from '../../models/tab';
import { TestCompComponent } from '../test-comp/test-comp.component';
import { TabsService } from '../../services/tabs.service';
import { Observable } from 'rxjs';
import { TabView } from 'primeng/tabview';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs: Tab[] = [];

  @ViewChild('tv') tabView: TabView;

  constructor(
    private ts: TabsService
  ) { }

  ngOnInit() {
    this.ts.tabsObservable.subscribe(t => {
      if (t.tabIndex) {
        if (t.tabIndex === 0) {
          // corrente
          // this.tabView[this.tabView.activeIndex];
        } else {

        }
      } else {
        this.tabs.push(t);
      }
    });
  }

  newTab(title: string, closeable: boolean) {
    this.ts.newTab({
      title: title,
      closeable: closeable,
      component: TestCompComponent
    });
  }

}
