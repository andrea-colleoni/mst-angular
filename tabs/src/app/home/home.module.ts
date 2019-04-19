import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PrimeUiModule } from '../prime-ui.module';
import { TabComponent } from './components/tab/tab.component';
import { TestCompComponent } from './components/test-comp/test-comp.component';
import { MenuComponent } from './components/menu/menu.component';
import { ComponentDirective } from './directives/component.directive';

@NgModule({
  declarations: [LayoutComponent, TabsComponent, TabComponent, TestCompComponent, MenuComponent, ComponentDirective, ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeUiModule,
  ],
  entryComponents: [
    TestCompComponent,
  ]
})
export class HomeModule { }
