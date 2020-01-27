import {
  GlideElement,
  GlideRecord,
  GlideDateTime,
  GlideDuration
} from '@nuvolo/servicenow-types';

import { ReferenceGlideElement } from '@nuvolo/servicenow-types/util';

export interface x_nuvo_eam_work_order {
  planned_start: GlideElement;
  estimated_effort: GlideElement;
  asset: ReferenceGlideElement<x_nuvo_eam_asset>;
  number: GlideElement;
  work_location: ReferenceGlideElement<{
    floor: ReferenceGlideElement<{
      building: ReferenceGlideElement<{
        latitude: GlideElement;
        longitude: GlideElement;
      }>;
    }>;
  }>;
}
