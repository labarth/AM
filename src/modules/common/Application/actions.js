import { createAction } from 'redux-act';

const prefix = 'common';

export const applicationRun = createAction(`${prefix}_application_run`);

export const applicationLoading = createAction(`${prefix}_application_loading`);