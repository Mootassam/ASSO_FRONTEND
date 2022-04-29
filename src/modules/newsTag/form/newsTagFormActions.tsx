import NewsTagService from 'src/modules/newsTag/newsTagService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'NEWSTAG_FORM';

const newsTagFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: newsTagFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await NewsTagService.find(id);
      }

      dispatch({
        type: newsTagFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newsTagFormActions.INIT_ERROR,
      });

      getHistory().push('/news-tag');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: newsTagFormActions.CREATE_STARTED,
      });

      await NewsTagService.create(values);

      dispatch({
        type: newsTagFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.newsTag.create.success'),
      );

      getHistory().push('/news-tag');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newsTagFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: newsTagFormActions.UPDATE_STARTED,
      });

      await NewsTagService.update(id, values);

      dispatch({
        type: newsTagFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.newsTag.update.success'),
      );

      getHistory().push('/news-tag');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newsTagFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default newsTagFormActions;
