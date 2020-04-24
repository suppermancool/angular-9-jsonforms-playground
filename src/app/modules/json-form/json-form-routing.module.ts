import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonFormComponent } from './json-form.component';

const routes: Routes = [
  {
    path: '',
    component: JsonFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonFormsRoutingModule {}
