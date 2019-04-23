import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { TodosComponent } from './todos/todos.component';

@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      TodosComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      environment.production?\n[
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
