import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './Pessoa/edit/edit.component';
import { AddComponent } from './Pessoa/add/add.component';
import { ListComponent } from './Pessoa/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
