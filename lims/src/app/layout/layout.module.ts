import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [LayoutComponent, TabContainerComponent, MenuComponent, TabComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
    FormsModule,
  ],
  entryComponents: [
    TabComponent,
  ]
})
export class LayoutModule { }
