import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { JsonFormsAngularService } from '@jsonforms/angular';
import {
  Actions,
  getData,
  getUiSchema,
  setReadonly,
  unsetReadonly,
  JsonFormsState
} from '@jsonforms/core';
import { IJsonFormData } from 'src/app/shared/models/json-form-data';
import { examples } from './examples';
import * as _ from 'lodash';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {
  public readonly = false;
  jsonFormData: IJsonFormData = examples[0];
  @Output() eventFormChange = new EventEmitter<JsonFormsState>();

  data: any;

  constructor(private jsonformService: JsonFormsAngularService) {
    this.jsonformService.subscribe({
      next: state => {
        this.data = getData(state);
        this.eventFormChange.emit(state);
      }
    });
  }

  get examples() {
    return examples;
  }

  ngOnInit() {
    if (this.jsonFormData) {
      this.jsonformService.updateCore(
        Actions.init(
          this.jsonFormData.data,
          this.jsonFormData.schema,
          this.jsonFormData.uischema
        )
      );
    } else {
      this.jsonformService.updateCore(
        Actions.init(
          {},
          {},
          {
            type: 'VerticalLayout',
          }
        )
      );
    }
  }

  onChange(event) {
    this.jsonFormData = _.find(this.examples, { name: event.value })
    this.ngOnInit();
  }

  setReadonly(event) {
    console.log('totest event', event);
    const uischema = getUiSchema(this.jsonformService.getState());
    if (event.checked) {
      setReadonly(uischema);
    } else {
      unsetReadonly(uischema);
    }
    this.jsonformService.updateCore(Actions.setUISchema(uischema));
  }

  get getJsonData() {
    return JSON.stringify(this.data);
  }
}
