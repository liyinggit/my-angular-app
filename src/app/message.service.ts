import { Injectable } from '@angular/core';

/**
 * 该服务暴露了它messages缓存，add方法往缓存上添加方法，clear方法用于清空缓存
 */
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];
 
  add(message: string) {
    this.messages.push(message);
  }
 
  clear() {
    this.messages = [];
  }

}
