import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/campaign/view/campaignViewActions';
import selectors from 'src/modules/campaign/view/campaignViewSelectors';
import CampaignView from 'src/view/campaign/view/CampaignView';
import CampaignViewToolbar from 'src/view/campaign/view/CampaignViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CampaignPage() {
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
          [i18n('entities.campaign.menu'), '/campaign'],
          [i18n('entities.campaign.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.campaign.view.title')}
        </PageTitle>

        <CampaignViewToolbar match={match} />

        <CampaignView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CampaignPage;
