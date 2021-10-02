import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    TodoviewModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
