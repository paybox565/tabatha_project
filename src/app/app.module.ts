import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartFormComponent } from './part-form/part-form.component';
import { PositionFormComponent } from './position-form/position-form.component';
import { PartsListComponent } from './parts-list/parts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PartFormComponent,
    PositionFormComponent,
    PartsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
