import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  strs: string[] = [];
  sub: Subscription;

  constructor(
    private ms: MessagesService
  ) { }

  ngOnInit() {
    this.sub = this.ms.messages.subscribe(s => this.strs.push(s));
  }

  aggiungi(msg: string) {
    this.ms.nuovoMessaggio(msg);
  }

  rimuovi() {
    this.sub.unsubscribe();
  }

}
