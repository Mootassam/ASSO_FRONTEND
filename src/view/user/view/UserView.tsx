import React from 'react';
import Roles from 'src/security/roles';
import Spinner from 'src/view/shared/Spinner';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserStatusView from 'src/view/user/view/UserStatusView';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import {
  Tabs,
  Tab,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import MembershipListFilter from 'src/view/membership/list/MembershipListFilter';
import MembershipListTable from 'src/view/membership/list/MembershipListTable';
import moment from 'moment';

function UserView(props) {
  const { user, loading } = props;
  if (loading || !user) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Tabs
        defaultActiveKey="information"
        id="0"
        className="mb-3"
      >
        <Tab eventKey="information" title="Information">
          <Container fluid={true}>
            <Row>
              {user.avatars.length > 0 ? (
                <Col>
                  <ImagesViewItem
                    label={i18n('user.fields.avatars')}
                    value={user.avatars}
                  />
                </Col>
              ) : null}
              <Col>
                <CustomViewItem
                  label={i18n('user.fields.status')}
                  value={user.status}
                  render={(value) => (
                    <UserStatusView value={value} />
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextViewItem
                  label={i18n('user.fields.email')}
                  value={user.email}
                />
              </Col>
              {user.firstName ? (
                <Col>
                  <TextViewItem
                    label={i18n('user.fields.firstName')}
                    value={user.firstName}
                  />
                </Col>
              ) : null}
              {user.lastName ? (
                <Col>
                  <TextViewItem
                    label={i18n('user.fields.lastName')}
                    value={user.lastName}
                  />
                </Col>
              ) : null}
              {user.genre ? (
                <Col>
                  <TextViewItem
                    label={i18n('user.fields.genre')}
                    value={user.genre}
                  />
                </Col>
              ) : null}
            </Row>
            <Row>
              {user.address ? (
                <Col>
                  <TextViewItem
                    label={i18n('user.fields.address')}
                    value={user.address}
                  />
                </Col>
              ) : null}
              {user.phoneNumber ? (
                <Col>
                  <TextViewItem
                    label={i18n('user.fields.phoneNumber')}
                    value={user.phoneNumber}
                  />
                </Col>
              ) : null}
              {user.birthDate ? (
                <Col>
                  <TextViewItem
                    label={i18n('user.fields.birthDate')}
                    value={moment(user.birthDate).format(
                      'MMM Do YY',
                    )}
                  />
                </Col>
              ) : null}
              <Col>
                <CustomViewItem
                  label={i18n('user.fields.roles')}
                  value={user.roles}
                  render={(value) =>
                    value.map((roleId) => (
                      <div key={roleId}>
                        <span>{Roles.labelOf(roleId)}</span>
                      </div>
                    ))
                  }
                />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab
          eventKey="membership"
          title={i18n('entities.membership.menu')}
        >
          <ContentWrapper>
            <MembershipListFilter />
            <MembershipListTable data={user.membership} />
          </ContentWrapper>
        </Tab>
      </Tabs>
    </ViewWrapper>
  );
}

export default UserView;
