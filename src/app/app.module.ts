import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoviewComponent } from './todoview/todoview.component';
import { TodoviewModule } from './todoview/todoview.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
