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
import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import {
  Actions,
  composeWithUi,
  ControlElement,
  isEnumControl,
  OwnPropsOfControl,
  RankedTester,
  rankWith,
} from '@jsonforms/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';
import { Validators } from '@angular/forms';

/**
 * To use this component you will need to add your own tester:
 * <pre><code>
 * ...
 * export const AutocompleteControlRendererComponentTester: RankedTester = rankWith(2, isEnumControl);
 * ...
 * </code></pre>
 * Add the tester and renderer to JSONForms registry:
 * <pre><code>
 * ...
 * { tester: AutocompleteControlRendererComponentTester, renderer: AutocompleteControlRendererComponent },
 * ...
 * </code></pre>
 * Furthermore you need to update your module.
 * <pre><code>
 * ...
 * imports: [JsonFormsAngularMaterialModule, MatAutocompleteModule],
 * declarations: [AutocompleteControlRendererComponent],
 * entryComponents: [AutocompleteControlRendererComponent]
 * ...
 * </code></pre>
 *
 */
@Component({
  selector: 'app-autocomplete-control-renderer',
  template: `
    <mat-form-field appearance="outline" fxFlex>
      <mat-label>{{ label }}</mat-label>
      <mat-select
        (selectionChange)="onSelect($event)"
        [id]="id"
        [formControl]="form"
      >
        <mat-option *ngFor="let item of allOptions" [value]="item">
          {{ item }}
        </mat-option>
      </mat-select>

      <mat-error *ngIf="form.errors && form.errors.required">
        Required field
      </mat-error>
      <mat-error *ngIf="form.errors && !form.errors.required">{{
        error
      }}</mat-error>
    </mat-form-field>
  `,
})
export class AutocompleteControlRendererComponent extends JsonFormsControl implements OnInit {
  @Input() options: string[];

  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }
  getEventValue = (event: any) => event.target.value;

  ngOnInit() {
    super.ngOnInit();
    this.form.setValidators([Validators.required]);
  }

  onSelect(ev: MatSelectChange) {
    const path = composeWithUi(this.uischema as ControlElement, this.path);
    this.jsonFormsService.updateCore(Actions.update(path, () => ev.value));
    this.triggerValidation();
  }

  get allOptions(): string[] {
    return this.options || this.scopedSchema.enum || [];
  }

  protected getOwnProps(): OwnPropsOfAutoComplete {
    return {
      ...super.getOwnProps(),
      options: this.options,
    };
  }
}

export const enumControlTester: RankedTester = rankWith(2, isEnumControl);

interface OwnPropsOfAutoComplete extends OwnPropsOfControl {
  options: string[];
}
