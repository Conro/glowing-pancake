import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../chat.service';
import { Observable } from 'rxjs';
import {scan} from 'rxjs/operators';




@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
    .pipe( scan((acc, val) => acc.concat(val)) );

    this.chat.converse("This is a welcome message", true);

  }

  sendMessage() {
    this.chat.converse(this.formValue, false);
    this.formValue = '';
  }

}
