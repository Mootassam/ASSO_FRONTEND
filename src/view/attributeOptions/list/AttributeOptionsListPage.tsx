import React from 'react';
import { i18n } from 'src/i18n';
import AttributeOptionsListFilter from 'src/view/attributeOptions/list/AttributeOptionsListFilter';
import AttributeOptionsListTable from 'src/view/attributeOptions/list/AttributeOptionsListTable';
import AttributeOptionsListToolbar from 'src/view/attributeOptions/list/AttributeOptionsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { useRouteMatch } from 'react-router-dom';

function AttributeOptionsListPage(props) {
  const match = useRouteMatch();
  const nameProduct = match.params.name;

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.attributeOptions.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.attributeOptions.list.title')}
        </PageTitle>
        <AttributeOptionsListToolbar
          ProductId={nameProduct}
        />
        <AttributeOptionsListFilter
          productName={nameProduct}
        />
        <AttributeOptionsListTable />
      </ContentWrapper>
    </>
  );
}

export default AttributeOptionsListPage;
