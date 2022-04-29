import { createSelector } from 'reselect';

const selectRaw = (state) => state.group.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const groupDestroySelectors = {
  selectLoading,
};

export default groupDestroySelectors;
