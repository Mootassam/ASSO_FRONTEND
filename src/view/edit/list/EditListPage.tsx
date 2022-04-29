import React from 'react';
import { i18n } from 'src/i18n';
import EditListFilter from 'src/view/edit/list/EditListFilter';
import EditListTable from 'src/view/edit/list/EditListTable';
import EditListToolbar from 'src/view/edit/list/EditListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function EditListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.edit.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.edit.list.title')}
        </PageTitle>

        <EditListToolbar />
        <EditListFilter />
        <EditListTable />
      </ContentWrapper>
    </>
  );
}

export default EditListPage;
