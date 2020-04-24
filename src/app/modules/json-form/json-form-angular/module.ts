import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { JsonFormsModule } from '@jsonforms/angular';
import { FormsModule as AngularFormsModule } from '@angular/forms';

import {
  BooleanControlRendererComponent,
  TextAreaRendererComponent,
  TextControlRendererComponent,
  NumberControlRendererComponent,
  DateControlRendererComponent,
  AutocompleteControlRendererComponent,
} from './controls';
import {
  HorizontalLayoutRendererComponent,
} from './layouts';
import {
  LabelRendererComponent,
  JsonFormsDetailComponent,
} from './other';

@NgModule({
  imports: [
    CommonModule,
    JsonFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    AngularFormsModule,
  ],
  declarations: [
    BooleanControlRendererComponent,
    TextAreaRendererComponent,
    TextControlRendererComponent,
    NumberControlRendererComponent,
    DateControlRendererComponent,
    HorizontalLayoutRendererComponent,
    LabelRendererComponent,
    JsonFormsDetailComponent,
    AutocompleteControlRendererComponent,
  ],
  entryComponents: [
    BooleanControlRendererComponent,
    TextAreaRendererComponent,
    TextControlRendererComponent,
    NumberControlRendererComponent,
    DateControlRendererComponent,
    HorizontalLayoutRendererComponent,
    LabelRendererComponent,
    JsonFormsDetailComponent,
    AutocompleteControlRendererComponent,
  ],
  exports: [
    CommonModule,
    JsonFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class JsonFormsAngularMaterialModule {}
