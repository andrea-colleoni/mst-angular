import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appComponent]'
})
export class ComponentDirective {

  private context: any = {};

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }

  @Input() set appComponent(component: any) {
    this.context.component = component;
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }
}
