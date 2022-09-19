import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwowayComponent } from './setvalue/twoway/twoway.component';
import { OnewayComponent } from './setvalue/oneway/oneway.component';
import { TemplatereferenceComponent } from './setvalue/templatereference/templatereference.component';

@NgModule({
  declarations: [
    AppComponent,
    TwowayComponent,
    OnewayComponent,
    TemplatereferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
