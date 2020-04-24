import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'jsonforms',
        pathMatch: 'full'
      },
      {
        path: 'jsonforms',
        loadChildren: () =>
          import('./modules/json-form/json-form.module').then(m => m.JsonFormModule),
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
