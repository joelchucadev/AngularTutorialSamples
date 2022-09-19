import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactivestatusComponent } from './status/reactivestatus/reactivestatus.component';
import { TemplatestatusComponent } from './status/templatestatus/templatestatus.component';
import { TemplatevalueComponent } from './value/templatevalue/templatevalue.component';
import { ReactivevalueComponent } from './value/reactivevalue/reactivevalue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReactivestatusComponent,
    TemplatestatusComponent,
    TemplatevalueComponent,
    ReactivevalueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
