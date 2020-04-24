import { JsonSchema, Layout } from '@jsonforms/core';

export interface IJsonFormData {
  name: string;
  label: string;
  data: any;
  schema: JsonSchema;
  uischema: Layout;
  config?: any;
}
