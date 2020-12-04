import { createAction } from 'redux-act';

const prefix = 'application';

export const applicationRun = createAction(`${prefix}_run`);

export const applicationLoading = createAction(`${prefix}_loading`);