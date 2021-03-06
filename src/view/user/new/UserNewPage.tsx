import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import actions from 'src/modules/user/form/userFormActions';
import selectors from 'src/modules/user/form/userFormSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import UserNewForm from 'src/view/user/new/UserNewForm';

function UserNewPage(props) {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  useEffect(() => {
    dispatch(actions.doInit());
  }, [dispatch]);

  const doSubmit = (id, data) => {
    dispatch(actions.doAdd(data));
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu'), '/user'],
          [i18n('user.new.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{i18n('user.new.title')}</PageTitle>

        <UserNewForm
        single={true}
          saveLoading={saveLoading}
          onSubmit={doSubmit}
          onCancel={() => getHistory().push('/user')}
        />
      </ContentWrapper>
    </>
  );
}

export default UserNewPage;
