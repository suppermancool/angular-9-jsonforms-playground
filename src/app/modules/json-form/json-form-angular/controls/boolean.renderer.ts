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
import * as _ from 'lodash';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import {
  isBooleanControl,
  RankedTester,
  rankWith,
  composeWithUi,
  ControlElement,
  Actions,
} from '@jsonforms/core';

@Component({
  selector: 'app-boolean-control-renderer',
  template: `
    <div
      [fxHide]="hidden"
      fxLayout="row"
      fxLayoutAlign="start start"
      style="height:100%"
      class="relative"
      [ngClass]="{ 'is-custom': isCustom }"
    >
      <mat-checkbox
        (change)="onChange($event)"
        [checked]="isChecked()"
        [disabled]="!isEnabled()"
        [id]="id"
      >
        {{ isCustom ? '' : label }}
      </mat-checkbox>

      <ng-container *ngFor="let extendField of extendFields; let i = index">
        <mat-form-field
          *ngIf="extendField.type === 'input'"
          class="flex-1 extend-field"
          appearance="outline"
        >
          <mat-label>{{ extendField.name }}</mat-label>
          <input
            matInput
            (input)="updateFormValue()"
            [(ngModel)]="this.data.extendFields[i]"
          />
        </mat-form-field>

        <mat-form-field
          *ngIf="extendField.type === 'date'"
          (click)="datepicker.open()"
          appearance="outline"
          class="flex-1 extend-field"
        >
          <mat-label>{{ extendField.name }}</mat-label>
          <input
            matInput
            [matDatepicker]="datepicker"
            (input)="updateFormValue()"
            [(ngModel)]="this.data.extendFields[i]"
          />
          <mat-datepicker #datepicker></mat-datepicker>
        </mat-form-field>

        <mat-form-field
          *ngIf="extendField.type === 'textarea'"
          appearance="outline"
          class="flex-1 extend-field"
        >
          <mat-label>{{ extendField.name }}</mat-label>
          <textarea
            matInput
            cdkTextareaAutosize
            #autosize="cdkTextareaAutosize"
            cdkAutosizeMinRows="5"
            cdkAutosizeMaxRows="5"
            (input)="updateFormValue()"
            [(ngModel)]="this.data.extendFields[i]"
          ></textarea>
        </mat-form-field>
      </ng-container>

      <mat-error *ngIf="!isCustom" class="mat-caption">{{ error }}</mat-error>
      <mat-error *ngIf="isCustom && customError" class="mat-caption">{{ customError }}</mat-error>
    </div>
  `,
  styles: [
    `
      .extend-field {
        margin-left: 24px;
      }

      .extend-field:first-of-type {
        margin-left: 12px;
      }

      mat-error {
        position: absolute;
        top: calc(100% + 3px);
        left: 27px;
      }
    `,
  ],
})
export class BooleanControlRendererComponent extends JsonFormsControl implements OnInit {
  extendFieldsDataControl = [];
  customError = '';
  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }

  ngOnInit() {
    super.ngOnInit();

    if (this.isCustom) {
      _.forEach(this.extendFields, (v, i) => {
        if (v.type === 'date') {
          this.data.extendFields[i] = new Date(this.data.extendFields[i]);
        }
      });
    }
  }
  extendFieldControl(i) {
    return this.data.extendFields[i];
  }
  get isCustom() {
    if (!this.scopedSchema) {
      return false;
    }
    return (this.scopedSchema as any).isCustom;
  }
  get extendFields() {
    if (this.isCustom) {
      return (this.scopedSchema as any).extendFields;
    }
    return [];
  }
  isChecked = () => {
    if (!this.isCustom) {
      return this.data || false;
    }
    return this.data.isChecked;
  }
  getEventValue = (event: any) => {
    return event.checked;
  }
  onChange(event: any) {
    if (!this.isCustom) {
      super.onChange(event);
    } else {
      this.data.isChecked = event.checked;
      this.updateFormValue();
    }
  }
  updateFormValue() {
    if (this.data.isChecked) {
      if (_.some(this.data.extendFields, (f) => !f)) {
        this.customError = 'Selected field must be filled out';
      } else {
        this.customError = null;
      }
    } else {
      this.customError = null;
    }
    const path = composeWithUi(this.uischema as ControlElement, this.path);
    this.jsonFormsService.updateCore(
      Actions.update(path, () => this.data)
    );
  }
}

export const booleanControlTester: RankedTester = rankWith(2, isBooleanControl);
