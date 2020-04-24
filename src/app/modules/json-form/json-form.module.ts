import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonFormComponent } from './json-form.component';
import { JsonFormsAngularService } from '@jsonforms/angular';
import { initialState } from './store';
import { JsonFormsAngularMaterialModule } from './json-form-angular/module';
import { JsonFormsRoutingModule } from './json-form-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [JsonFormComponent],
  imports: [
    CommonModule,
    JsonFormsAngularMaterialModule,
    JsonFormsRoutingModule,
    MatSlideToggleModule,
  ],
  entryComponents: [],
  exports: [JsonFormComponent],
})
export class JsonFormModule {
  constructor(jsonformsService: JsonFormsAngularService) {
    jsonformsService.init(initialState.jsonforms);
  }
}
