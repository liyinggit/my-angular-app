import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',   //组件的选择器，css元素选择器
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 hero:Hero ={
   id:1,
   name:'windstorm'
 }

  constructor() { }

  ngOnInit() {
  }

}
