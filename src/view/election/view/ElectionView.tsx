import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import AssociationViewItem from 'src/view/association/view/AssociationViewItem';

import { Tabs, Tab } from 'react-bootstrap';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import ObjectifListFilter from 'src/view/objectif/list/ObjectifListFilter';
import ObjectifListTable from 'src/view/objectif/list/ObjectifListTable';
import ObjectifListToolbar from 'src/view/objectif/list/ObjectifListToolbar';
import MemberFilter from 'src/view/member/list/MemberFilter';
import MemberTable from 'src/view/member/list/MemberTable';

function ElectionView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }
  localStorage.setItem('electionId', record.id);
  return (
    <ViewWrapper>
      <Tabs
        defaultActiveKey="information"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="information" title="Information">
          <TextViewItem
            label={i18n('entities.election.fields.name')}
            value={record.name}
          />
          <TextViewItem
            label={i18n(
              'entities.election.fields.startDate',
            )}
            value={record.startDate}
          />

          <TextViewItem
            label={i18n('entities.election.fields.endDate')}
            value={record.endDate}
          />

          <FilesViewItem
            label={i18n('entities.election.fields.pv')}
            value={record.pv}
          />

          <AssociationViewItem
            label={i18n(
              'entities.election.fields.association',
            )}
            value={record.association}
          />
        </Tab>
        <Tab
          eventKey="members"
          title={i18n('entities.election.fields.members')}
        >
          <ContentWrapper>
            <MemberFilter />
            <MemberTable data={record.members} />
          </ContentWrapper>
        </Tab>
        <Tab
          eventKey="objectif"
          title={i18n('entities.objectif.menu')}
        >
          <ContentWrapper>
            <ObjectifListToolbar />
            <ObjectifListFilter />
            <ObjectifListTable data={record.objectifs} />
          </ContentWrapper>
        </Tab>
      </Tabs>
    </ViewWrapper>
  );
}

export default ElectionView;
