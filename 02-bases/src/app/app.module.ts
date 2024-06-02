import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListComponent } from './heroes/list/list.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

// import { PagesComponent } from './pages/pages.component';
// import { MainPageComponent } from './pages/main-page/main-page.component';


//Importo Modulos
@NgModule({
  declarations: [
    AppComponent,
   
    // PagesComponent,
    // MainPageComponent,
    // ListComponent
  ],
  imports: [
    DbzModule,
    HeroesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
