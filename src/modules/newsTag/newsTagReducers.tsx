import list from 'src/modules/newsTag/list/newsTagListReducers';
import form from 'src/modules/newsTag/form/newsTagFormReducers';
import view from 'src/modules/newsTag/view/newsTagViewReducers';
import destroy from 'src/modules/newsTag/destroy/newsTagDestroyReducers';
import importerReducer from 'src/modules/newsTag/importer/newsTagImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
