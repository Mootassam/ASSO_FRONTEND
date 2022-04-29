import React from 'react';
import { i18n } from 'src/i18n';
import ShippingserviceListFilter from 'src/view/shippingservice/list/ShippingserviceListFilter';
import ShippingserviceListTable from 'src/view/shippingservice/list/ShippingserviceListTable';
import ShippingserviceListToolbar from 'src/view/shippingservice/list/ShippingserviceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ShippingserviceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.shippingservice.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.shippingservice.list.title')}
        </PageTitle>

        <ShippingserviceListToolbar />
        <ShippingserviceListFilter />
        <ShippingserviceListTable />
      </ContentWrapper>
    </>
  );
}

export default ShippingserviceListPage;
