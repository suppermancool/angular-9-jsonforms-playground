/*
  The MIT License

  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import { Component, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { isStringControl, RankedTester, rankWith } from '@jsonforms/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-text-control-renderer',
  template: `
    <mat-form-field
      appearance="outline"
      fxFlex
      [fxHide]="hidden"
    >
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [type]="getType()"
        (input)="onChange($event)"
        placeholder="{{ description }}"
        [id]="id"
        [formControl]="form"
      />
      <mat-error *ngIf="form.errors && form.errors.required">
        Required field
      </mat-error>
      <mat-error *ngIf="form.errors && !form.errors.required">{{ error }}</mat-error>
    </mat-form-field>
  `,
})
export class TextControlRendererComponent extends JsonFormsControl implements OnInit {
  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }
  ngOnInit() {
    super.ngOnInit();
    this.form.setValidators([Validators.required]);
  }
  getEventValue = (event: any) => event.target.value;
  getType = (): string => {
    if (this.uischema.options && this.uischema.options.format) {
      return this.uischema.options.format;
    }
    if (this.scopedSchema && this.scopedSchema.format) {
      switch (this.scopedSchema.format) {
        case 'email':
          return 'email';
        case 'tel':
          return 'tel';
        default:
          return 'text';
      }
    }
    return 'text';
  }
}
export const TextControlRendererComponentTester: RankedTester = rankWith(
  1,
  isStringControl
);
