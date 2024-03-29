import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/Messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';

@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      MessagesComponent,
      DashboardComponent,
      HeroSearchComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
         InMemoryDataService, { dataEncapsulation: false }
      ),
      environment.production ?
         [] :
         [AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot()]
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
