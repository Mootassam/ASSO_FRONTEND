import NewsCategoryService from 'src/modules/newsCategory/newsCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'NEWSCATEGORY_VIEW';

const newsCategoryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: newsCategoryViewActions.FIND_STARTED,
      });

      const record = await NewsCategoryService.find(id);

      dispatch({
        type: newsCategoryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newsCategoryViewActions.FIND_ERROR,
      });

      getHistory().push('/news-category');
    }
  },
};

export default newsCategoryViewActions;
