import { GlideElement } from '@nuvolo/servicenow-types';
import { ReferenceGlideElement } from '@nuvolo/servicenow-types/util';
import { x_nuvo_eam_work_order } from './x_nuvo_eam_work_order';

export interface x_nuvo_csd_appointment {
  work_order: ReferenceGlideElement<x_nuvo_eam_work_order>;
}
