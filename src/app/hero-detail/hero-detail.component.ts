import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

/**
 * 这个组件只是通过hero属性接收一个英雄对象并显示他
 */
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // hero属性必须是一个带有@Input（）装饰器的输入属性，因为外部的HeroesComponent组件将会绑定他
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,   // 保存路由信息
    private heroService: HeroService,  // 获取显示的英雄
    private location: Location   // 与浏览器打交道
  ) { }

  ngOnInit(): void {
    this.getHero();
  }


  // 获取从html来的id
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }


  // 回到上一个页面
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
