import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import NewsViewItem from 'src/view/news/view/NewsViewItem';

function NewsCategoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.newsCategory.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.newsCategory.fields.description')}
        value={record.description}
      />

      <NewsViewItem
        label={i18n('entities.newsCategory.fields.news')}
        value={record.news}
      />
    </ViewWrapper>
  );
}

export default NewsCategoryView;
