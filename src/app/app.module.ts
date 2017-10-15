import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Child1Component } from './child1.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Child1Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
