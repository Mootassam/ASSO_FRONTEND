import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.newsTag.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.newsTag.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.newsTag.fields.description'),
  },
  {
    name: 'news',
    label: i18n('entities.newsTag.fields.news'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.newsTag.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.newsTag.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
