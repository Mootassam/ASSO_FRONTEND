import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { i18n } from 'src/i18n';
import AuditLogFilter from 'src/view/auditLog/AuditLogFilter';
import AuditLogTable from 'src/view/auditLog/AuditLogTable';
import AuditLogToolbar from 'src/view/auditLog/AuditLogToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AuditLogPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('auditLog.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('auditLog.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <AuditLogToolbar />
            </Col>
          </Row>
        </Container>
        <AuditLogFilter />
        <AuditLogTable />
      </ContentWrapper>
    </>
  );
}

export default AuditLogPage;
