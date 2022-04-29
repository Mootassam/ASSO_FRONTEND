import React from 'react';
import { i18n } from 'src/i18n';
import NewsTagListFilter from 'src/view/newsTag/list/NewsTagListFilter';
import NewsTagListTable from 'src/view/newsTag/list/NewsTagListTable';
import NewsTagListToolbar from 'src/view/newsTag/list/NewsTagListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Container, Row, Col } from 'react-bootstrap';

function NewsTagListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.newsTag.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.newsTag.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <NewsTagListToolbar />
            </Col>
          </Row>
        </Container>

        <NewsTagListFilter />
        <NewsTagListTable />
      </ContentWrapper>
    </>
  );
}

export default NewsTagListPage;
