import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//使用@Injectable() 装饰器 将这个类标记为依赖注入系统的参与者之一
//HeroService 可以从任何地方获取数据
//默认情况下angular会使用根注入器将服务注册为提供商
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //将messageService注入到HeroService中
constructor(private messageService:MessageService) { }


//返回模拟的英雄列表
// getHeroes():Hero[]{
//   return HEROES;
// }

//使用 Observable可观察的
getHeroes():Observable<Hero[]>{
  //在获取到英雄数组时发送一条消息
  this.messageService.add('HeroService:fetched heros');
  return of(HEROES);
}


//通过id获取某个英雄
getHero(id:number):Observable<Hero>{

  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
}

}
