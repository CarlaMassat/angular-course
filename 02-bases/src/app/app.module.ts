import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListComponent } from './heroes/list/list.component';
import { HeroesModule } from './heroes/heroes.module';

//Importo Modulos
@NgModule({
  declarations: [
    AppComponent,
    // ListComponent
  ],
  imports: [
    HeroesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
