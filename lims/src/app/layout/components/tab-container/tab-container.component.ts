import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { TabComponent } from '../tab/tab.component';
import { LimsTab } from '../../model/lims-tab';

@Component({
  selector: 'lims-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {

  tabs: LimsTab[] = [];
  @ViewChild('tabContent', { read: ViewContainerRef }) vc: ViewContainerRef;
  tabComponentFactory: ComponentFactory<TabComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private ts: TabService,
  ) { }

  ngOnInit() {
    this.tabComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TabComponent);
    this.ts.tabsObservable.subscribe(ta => {
      this.tabs.push(ta.tab);
      this.selectTab(ta.tab);
    });
  }

  selectTab(t: LimsTab) {
    this.tabs.forEach(tab => tab.active = false);
    t.active = true;
    this.vc.clear();
    const ref = this.vc.createComponent(this.tabComponentFactory);
    const tc = ref.instance;
    tc.tab = t;
  }

  closeTab(t: LimsTab) {
    const ix = this.tabs.indexOf(t);
    this.tabs.splice(ix, 1);
    this.selectTab(this.tabs[0]);
  }
}
