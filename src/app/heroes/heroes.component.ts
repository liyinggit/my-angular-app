import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',   //组件的选择器（css元素选择器）
  templateUrl: './heroes.component.html',    //组件模板元素的位置
  styleUrls: ['./heroes.component.css']    //组件私有css样式表文件位置
})
export class HeroesComponent implements OnInit {
  //添加一个hero属性，可以在模板文件heroes.component.html中使用
  hero :Hero = {
    id:1,
    name:'windstorm'
  }

  constructor() { }

  /**
   * 生命周期钩子，初始化逻辑
   */
  ngOnInit() {
  }

  
}
