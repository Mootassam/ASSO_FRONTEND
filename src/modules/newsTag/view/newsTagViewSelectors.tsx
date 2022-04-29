import { createSelector } from 'reselect';

const selectRaw = (state) => state.newsTag.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const newsTagViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default newsTagViewSelectors;
