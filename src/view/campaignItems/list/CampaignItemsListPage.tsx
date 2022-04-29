import React from 'react';
import { i18n } from 'src/i18n';
import CampaignItemsListFilter from 'src/view/campaignItems/list/CampaignItemsListFilter';
import CampaignItemsListTable from 'src/view/campaignItems/list/CampaignItemsListTable';
import CampaignItemsListToolbar from 'src/view/campaignItems/list/CampaignItemsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CampaignItemsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.campaignItems.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.campaignItems.list.title')}
        </PageTitle>

        <CampaignItemsListToolbar />
        <CampaignItemsListFilter />
        <CampaignItemsListTable />
      </ContentWrapper>
    </>
  );
}

export default CampaignItemsListPage;
