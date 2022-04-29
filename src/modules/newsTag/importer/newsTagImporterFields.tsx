import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.newsTag.fields.name'),
    schema: schemas.string(
      i18n('entities.newsTag.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.newsTag.fields.description'),
    schema: schemas.string(
      i18n('entities.newsTag.fields.description'),
      {},
    ),
  },
  {
    name: 'news',
    label: i18n('entities.newsTag.fields.news'),
    schema: schemas.relationToMany(
      i18n('entities.newsTag.fields.news'),
      {},
    ),
  },
];