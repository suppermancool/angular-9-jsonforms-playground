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
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  JsonFormsAngularService,
  JsonFormsBaseRenderer
} from '@jsonforms/angular';
import {
  getData,
  isVisible,
  JsonFormsState,
  LabelElement,
  OwnPropsOfRenderer,
  RankedTester,
  rankWith,
  uiTypeIs
} from '@jsonforms/core';
import { Subscription } from 'rxjs';

const mapStateToProps = (
  state: JsonFormsState,
  ownProps: OwnPropsOfRenderer
) => {
  const visible =
    ownProps.visible !== undefined
      ? ownProps.visible
      : isVisible(ownProps.uischema, getData(state));

  return {
    visible
  };
};

@Component({
  selector: 'app-label-renderer',
  template: `
    <label class="mat-title" fxFlex> {{ label }} </label>
  `,
  styles: [
    `
      .mat-title {
        margin-top: 8px;
        margin-bottom: 0 !important;
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: rgba(0,0,0,0.87);
        letter-spacing: 0.25px;
        line-height: 20px;
      }
    `,
  ],
})
export class LabelRendererComponent extends JsonFormsBaseRenderer<LabelElement> implements OnInit, OnDestroy {
  label: string;
  visible: boolean;

  private subscription: Subscription;

  constructor(private jsonFormsService: JsonFormsAngularService) {
    super();
  }
  ngOnInit() {
    const labelElement = this.uischema;
    this.label =
      labelElement.text !== undefined &&
      labelElement.text !== null &&
      labelElement.text;
    this.subscription = this.jsonFormsService.subscribe({
      next: (state: JsonFormsState) => {
        const props = mapStateToProps(state, this.getOwnProps());
        this.visible = props.visible;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  mapAdditionalProps() {
    this.label = this.uischema.text;
  }
}

export const LabelRendererComponentTester: RankedTester = rankWith(4, uiTypeIs('Label'));
