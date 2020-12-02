import { createSelector } from 'reselect';

const routerState = (state) => state.router;

export const routerLocationSelector = createSelector(
  routerState,
  (state) => state.location,
)