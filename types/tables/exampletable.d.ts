import { GlideElement, GlideRecord } from '@nuvolo/servicenow-types';

import { ReferenceGlideElement } from '@nuvolo/servicenow-types/util';

export interface example_table {
  fieldName: GlideElement;
  secondField: GlideElement;
  refField: ReferenceGlideElement<example_table>; // another table
}
