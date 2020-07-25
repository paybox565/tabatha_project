import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PartFormComponent} from "./part-form/part-form.component";
import {PositionFormComponent} from "./position-form/position-form.component";
import {PartsListComponent} from "./parts-list/parts-list.component";
import {PartsComponent} from "./parts/parts.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    PartFormComponent,
    PositionFormComponent,
    PartsListComponent,
    PartsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PartsComponent},
      {path: 'addpart', component: PartFormComponent},
      {path: 'addposition', component: PositionFormComponent},
    ]),
    SharedModule
  ]
})
export class MenuModule {

}
