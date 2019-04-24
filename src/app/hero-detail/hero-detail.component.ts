import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';

/**
 * 这个组件只是通过hero属性接收一个英雄对象并显示他
 */
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //hero属性必须是一个带有@Input（）装饰器的输入属性，因为外部的HeroesComponent组件将会绑定他
  @Input() hero:Hero;

  constructor() { }

  ngOnInit() {
  }

}
