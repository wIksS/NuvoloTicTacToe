import { GlideRecord } from '@nuvolo/servicenow-types';
import { TypedGR } from '@nuvolo/servicenow-types/util';
import { x_nuvo_csd_call } from '../tables';
import { IScheduleMap, ILatLong } from 'sinc-eam/types/scheduler';
import { IDispatchScheduleMap } from '../src/sys_script_include/DispatchScheduleUtils/script.sn';
import TaskRoutingRuleUtils, {
  IScoredUser
} from '../src/sys_script_include/TaskRoutingRuleUtils/script.sn';

export interface IGetUnroutedSchedulerDataResponseBody {
  techs: Partial<IScoredUser>[];
  appointments: IScheduleMap;
  routed: boolean;
}

export interface IGetSchedulerDataResponseBody
  extends IGetUnroutedSchedulerDataResponseBody {
  task: IGetSchedulerDataTask;
  techs: IScoredUser[];
  appointments: IDispatchScheduleMap;
  assets: IAsset[];
  routed: boolean;
  homeBaseThreshold: Number;
  workOrderCheck: IWorkOrderCheck;
  dateRange: IDateRange;
}

export interface IGetSchedulerDataTask {
  details: ITaskDetails;
  proposed_appt: ITaskProposedAppt;
}

export interface ITaskDetails {
  number: string;
  short_description: string;
  sys_id: string;
  location: ILatLong;
}

export interface ITaskProposedAppt {
  start_date: string;
  end_date: string;
  section_id: string;
  workOrder: string;
  location: ILatLong;
  sys_id?: string;
}

export interface IAsset extends IScoredUser {
  data_type: string;
}

export interface ICheckToast extends IToastMessageOptions {
  message: string;
}

export interface IToastMessageOptions {
  duration?: number;
  autoClose?: boolean;
}

export interface IWorkOrderCheck {
  errors: ICheckToast[];
  warnings: ICheckToast[];
}

declare const dispatchCheckWorkOrder: (
  workOrderGR: GlideRecord,
  addErrorMsg: (msg: string, options: IToastMessageOptions) => void,
  addWarningMsg: (msg: string, options: IToastMessageOptions) => void
) => void;
