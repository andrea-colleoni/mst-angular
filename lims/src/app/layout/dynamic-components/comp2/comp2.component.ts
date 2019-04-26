import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TabComponent } from '../../components/tab/tab.component';
import { LimsTab } from '../../model/lims-tab';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flushMicrotasks } from '@angular/core/testing';

@Component({
  selector: 'lims-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  tab: LimsTab;
  testForm: FormGroup;

  constructor(
    private host: TabComponent,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.tab = this.host.tab;
    this.testForm = this.formBuilder.group({
      campo: [this.tab.data.campo, [ Validators.required ]],
    });

    this.testForm.statusChanges.subscribe(sc => this.tab.dataChanged = true);
  }

}
