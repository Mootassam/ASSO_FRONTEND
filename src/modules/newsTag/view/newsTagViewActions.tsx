import NewsTagService from 'src/modules/newsTag/newsTagService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'NEWSTAG_VIEW';

const newsTagViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: newsTagViewActions.FIND_STARTED,
      });

      const record = await NewsTagService.find(id);

      dispatch({
        type: newsTagViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newsTagViewActions.FIND_ERROR,
      });

      getHistory().push('/news-tag');
    }
  },
};

export default newsTagViewActions;
