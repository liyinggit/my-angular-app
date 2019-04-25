import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

//path：用于匹配浏览器地址栏中url的字符串
//component:当导航到此路由时，路由器应该创建的组件
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //默认路径
  {path:'heroes',component:HeroesComponent},
  {path:'dashboard',component:DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
