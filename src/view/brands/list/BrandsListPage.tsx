import React from 'react';
import { i18n } from 'src/i18n';
import BrandsListFilter from 'src/view/brands/list/BrandsListFilter';
import BrandsListTable from 'src/view/brands/list/BrandsListTable';
import BrandsListToolbar from 'src/view/brands/list/BrandsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BrandsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.brands.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.brands.list.title')}
        </PageTitle>

        <BrandsListToolbar />
        <BrandsListFilter />
        <BrandsListTable />
      </ContentWrapper>
    </>
  );
}

export default BrandsListPage;
