import React from 'react';
import { i18n } from 'src/i18n';
import CouponsListFilter from 'src/view/coupons/list/CouponsListFilter';
import CouponsListTable from 'src/view/coupons/list/CouponsListTable';
import CouponsListToolbar from 'src/view/coupons/list/CouponsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CouponsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.coupons.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.coupons.list.title')}
        </PageTitle>

        <CouponsListToolbar />
        <CouponsListFilter />
        <CouponsListTable />
      </ContentWrapper>
    </>
  );
}

export default CouponsListPage;
