import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { ApiAiClient } from 'api-ai-javascript';

import { Observable, BehaviorSubject } from 'rxjs';
import { DummyDataService } from './Services/dummy-data.service';
import { Service } from './Models/service.model';

// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}
//wrapper for messages
export class ContentMessage {
  constructor(public message: string, public isUsed: boolean, public sentBy: string) {}
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.brianPBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  sentMessages : ContentMessage[] = [];

  constructor(private dummyDataService: DummyDataService) {}

  ngOnInit() {
    //this.allServices = this.dummyDataService.getAllServices();
  }

  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    //this.printArrayItems(this.sentMessages);

    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    const message = new ContentMessage(userMessage.content, false, userMessage.sentBy);
    this.sentMessages.push(message);
    this.generateContent(message);

    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
               });
  }



  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

  printArrayItems(array: ContentMessage[]) {
    console.log(array);
  }

  generateContent(contentMessage: ContentMessage) {
    const messageExploded : string[] = contentMessage.message.split(" ");
    const allServices = this.dummyDataService.getAllServices();
    
    messageExploded.forEach( ( word ) => {
      this.dummyDataService.allServices.forEach( (service) => {
        if (service.keywords.includes(word) && !service.isUsed) {
          this.dummyDataService.addService(service);  
          service.isUsed = true;
        }
      });
    });
  }

}