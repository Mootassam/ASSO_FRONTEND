import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/election/view/electionViewActions';
import selectors from 'src/modules/election/view/electionViewSelectors';
import ElectionView from 'src/view/election/view/ElectionView';
import ElectionViewToolbar from 'src/view/election/view/ElectionViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ElectionPage() {
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
          [i18n('entities.election.menu'), '/election'],
          [i18n('entities.election.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.election.view.title')}
        </PageTitle>

        <ElectionViewToolbar match={match} />

        <ElectionView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ElectionPage;
