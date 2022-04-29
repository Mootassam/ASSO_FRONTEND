import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/newsTag/view/newsTagViewActions';
import selectors from 'src/modules/newsTag/view/newsTagViewSelectors';
import NewsTagView from 'src/view/newsTag/view/NewsTagView';
import NewsTagViewToolbar from 'src/view/newsTag/view/NewsTagViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function NewsTagPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.newsTag.menu'), '/news-tag'],
          [i18n('entities.newsTag.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.newsTag.view.title')}
        </PageTitle>

        <NewsTagViewToolbar match={match} />

        <NewsTagView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default NewsTagPage;
