import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',   //组件的选择器，css元素选择器
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

//  hero:Hero ={
//    id:1,
//    name:'windstorm'
//  }

 //heros属性可以暴露mock里的英雄数据
 //直接获取到模拟的英雄列表
//  heroes = HEROES;

heroes:Hero[];

 selectedHero:Hero;

 //注入HeroService
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  //添加click的事件处理器
  //把从html中来的hero赋值给selectedHero，这样html中就可以再次判断selectedHero的值
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }


  //从service中获取这些英雄数据,同步的
  // getHeroes():void{
  //   this.heroes = this.heroService.getHeroes();
  // }

  //service中使用了Observable可观察的，异步方式
  getHeroes():void{
    this.heroService.getHeroes()
      .subscribe(heroes =>this.heroes = heroes)
  }
}
