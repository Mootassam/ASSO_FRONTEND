import listActions from 'src/modules/newsTag/list/newsTagListActions';
import NewsTagService from 'src/modules/newsTag/newsTagService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'NEWSTAG_DESTROY';

const newsTagDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: newsTagDestroyActions.DESTROY_STARTED,
      });

      await NewsTagService.destroyAll([id]);

      dispatch({
        type: newsTagDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.newsTag.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/news-tag');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: newsTagDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: newsTagDestroyActions.DESTROY_ALL_STARTED,
      });

      await NewsTagService.destroyAll(ids);

      dispatch({
        type: newsTagDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.newsTag.destroyAll.success'),
      );

      getHistory().push('/news-tag');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: newsTagDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default newsTagDestroyActions;
