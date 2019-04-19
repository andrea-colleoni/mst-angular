import {
  Component, Input, Compiler, NgModule, OnChanges, SimpleChanges} from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { PrimeUiModule } from 'src/app/prime-ui.module';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnChanges {

  @Input() dynamicComponent: any;
  // dynamicModule: NgModuleFactory<any>;
  private componentHistory: any[] = [];

  constructor(
    private compiler: Compiler,
    ) { }

  ngOnChanges(changes: SimpleChanges) {
    // this.dynamicComponent = this.createNewComponent(); // se voglio generare un template al volo
    // this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
    if (changes['dynamicComponent']) {
      this.componentHistory.push(this.dynamicComponent);
    }
  }

  goBack() {
    this.dynamicComponent = this.componentHistory.pop();
  }

  protected createComponentModule(componentType: any) {
    @NgModule({
      imports: [
        CommonModule,
        PrimeUiModule,
      ],
      declarations: [
        componentType,
      ],
      entryComponents: [
        componentType
      ]
    })
    class RuntimeComponentModule {
    }
    // a module for just this Type
    return RuntimeComponentModule;
  }

  protected createNewComponent() {
    @Component({
      selector: 'app-tab-component',
      template: '<div>{{}}</div>'
    })
    class DynamicComponent {
    }
    return DynamicComponent;
  }

}
