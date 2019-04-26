import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.css']
})
export class MessagesComponent implements OnInit {

  // 这里的是public，因为要在html绑定他
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
