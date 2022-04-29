import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/newsTag/importer/newsTagImporterSelectors';
import NewsTagService from 'src/modules/newsTag/newsTagService';
import fields from 'src/modules/newsTag/importer/newsTagImporterFields';
import { i18n } from 'src/i18n';

const newsTagImporterActions = importerActions(
  'NEWSTAG_IMPORTER',
  selectors,
  NewsTagService.import,
  fields,
  i18n('entities.newsTag.importer.fileName'),
);

export default newsTagImporterActions;