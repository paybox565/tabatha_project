import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartFormComponent} from "./part-form/part-form.component";
import {PositionFormComponent} from "./position-form/position-form.component";
import {PartsComponent} from "./parts/parts.component";


const routes: Routes = [
  {path: '', component: PartsComponent},
  {path: 'addpart', component: PartFormComponent},
  {path: 'addposition', component: PositionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
