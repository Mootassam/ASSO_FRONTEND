import React from 'react';
import { i18n } from 'src/i18n';
import ChieldCategoriesListFilter from 'src/view/chieldCategories/list/ChieldCategoriesListFilter';
import ChieldCategoriesListTable from 'src/view/chieldCategories/list/ChieldCategoriesListTable';
import ChieldCategoriesListToolbar from 'src/view/chieldCategories/list/ChieldCategoriesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ChieldCategoriesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.chieldCategories.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.chieldCategories.list.title')}
        </PageTitle>

        <ChieldCategoriesListToolbar />
        <ChieldCategoriesListFilter />
        <ChieldCategoriesListTable />
      </ContentWrapper>
    </>
  );
}

export default ChieldCategoriesListPage;
