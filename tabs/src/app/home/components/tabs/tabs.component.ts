import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Tab } from '../../models/tab';
import { TestCompComponent } from '../test-comp/test-comp.component';
import { TabsService } from '../../services/tabs.service';
import { Observable } from 'rxjs';
import { TabView, TabPanel } from 'primeng/tabview';
import { constructor } from 'q';
import { title } from 'process';
import { TabComponent } from '../tab/tab.component';
import { createText } from '@angular/core/src/view/text';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs: Tab[] = [];

  @ViewChild('tv') tabView: TabView;
  @ViewChild('tv', { read: ViewContainerRef }) vc: ViewContainerRef;
  @ViewChild('tab') tabTemplate: TemplateRef<any>;

  constructor(
    private ts: TabsService
  ) { }

  ngOnInit() {
    this.ts.tabsObservable.subscribe(t => {
      const tp = new TabPanel(this.vc);
      tp.contentTemplate = this.tabTemplate;
      tp.header = t.title;
      tp.closable = t.closeable;
      this.tabView.tabs.push(tp);
      // tp.view.context.component = t.component;
      /*
      if (t.tabIndex) {
        if (t.tabIndex === 0) {
          // corrente
          // this.tabView[this.tabView.activeIndex];
        } else {

        }
      } else {
        this.tabs.push(t);
      }
      */
    });
  }

  newTab(tabTitle: string, closeable: boolean) {
    this.ts.newTab({
      title: tabTitle,
      closeable: closeable,
      component: TestCompComponent
    });
  }

}
