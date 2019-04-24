import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

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
 heroes = HEROES;

 selectedHero:Hero;

  constructor() { }

  ngOnInit() {
  }

  //添加click的事件处理器
  //把从html中来的hero赋值给selectedHero，这样html中就可以再次判断selectedHero的值
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
