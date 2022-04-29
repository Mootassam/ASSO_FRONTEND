import { createSelector } from 'reselect';

const selectRaw = (state) => state.newsTag.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const newsTagDestroySelectors = {
  selectLoading,
};

export default newsTagDestroySelectors;
