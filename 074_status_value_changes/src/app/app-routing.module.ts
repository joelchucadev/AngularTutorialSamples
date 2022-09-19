import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivestatusComponent } from './status/reactivestatus/reactivestatus.component';
import { TemplatestatusComponent } from './status/templatestatus/templatestatus.component';
import { ReactivevalueComponent } from './value/reactivevalue/reactivevalue.component';
import { TemplatevalueComponent } from './value/templatevalue/templatevalue.component';


const routes: Routes = [
  { path: 'templatestatus', component: TemplatestatusComponent},
  { path: 'reactivestatus', component: ReactivestatusComponent},
  { path: 'templatevalue', component: TemplatevalueComponent },
  { path: 'reactivevalue', component: ReactivevalueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }