import React from 'react';
import { i18n } from 'src/i18n';
import StateListFilter from 'src/view/state/list/StateListFilter';
import StateListTable from 'src/view/state/list/StateListTable';
import StateListToolbar from 'src/view/state/list/StateListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function StateListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.state.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.state.list.title')}
        </PageTitle>

        <StateListToolbar />
        <StateListFilter />
        <StateListTable />
      </ContentWrapper>
    </>
  );
}

export default StateListPage;
