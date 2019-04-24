import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

//使用@Injectable() 装饰器 将这个类标记为依赖注入系统的参与者之一
//HeroService 可以从任何地方获取数据
//默认情况下angular会使用根注入器将服务注册为提供商
@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor() { }


//返回模拟的英雄列表
// getHeroes():Hero[]{
//   return HEROES;
// }

//使用 Observable可观察的
getHeroes():Observable<Hero[]>{
  return of(HEROES);
}

}
