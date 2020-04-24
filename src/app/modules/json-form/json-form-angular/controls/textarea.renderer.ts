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
import { isMultiLineControl, RankedTester, rankWith } from '@jsonforms/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-text-area-renderer',
  template: `
    <mat-form-field appearance="outline" fxFlex [fxHide]="hidden">
      <mat-label>{{ label }}</mat-label>
      <textarea
        matInput
        (input)="onChange($event)"
        placeholder="{{ description }}"
        [id]="id"
        [formControl]="form"
        cdkTextareaAutosize
        #autosize="cdkTextareaAutosize"
        cdkAutosizeMinRows="3"
        cdkAutosizeMaxRows="3"
      ></textarea>
      <mat-error *ngIf="form.errors && form.errors.required">
        Required field
      </mat-error>
      <mat-error *ngIf="form.errors && !form.errors.required">{{ error }}</mat-error>
    </mat-form-field>
  `
})
export class TextAreaRendererComponent extends JsonFormsControl implements OnInit {
  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }
  ngOnInit() {
    super.ngOnInit();
    this.form.setValidators([Validators.required]);
  }
  getEventValue = (event: any) => event.target.value;
}
export const TextAreaRendererComponentTester: RankedTester = rankWith(
  2,
  isMultiLineControl
);
