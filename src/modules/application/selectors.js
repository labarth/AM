import { createSelector } from 'reselect';

const applicationState = (state) => state.application;

export const applicationLoadingSelector = createSelector(
  applicationState,
  (appState) => appState.loading,
);