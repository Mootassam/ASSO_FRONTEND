import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/user/form/userFormActions';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import userEnumerators from 'src/modules/user/userEnumerators';
import { yupResolver } from '@hookform/resolvers/yup';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import moment from 'moment';
import { Tabs, Tab, Col, Row } from 'react-bootstrap';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import MembershipListFilter from 'src/view/membership/list/MembershipListFilter';
import MembershipListTable from 'src/view/membership/list/MembershipListTable';
import MembershipListToolbar from 'src/view/membership/list/MembershipListToolbar';
import Container from 'react-bootstrap/Container';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('user.fields.firstName'),
    {
      max: 80,
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('user.fields.lastName'),
    {
      max: 175,
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('user.fields.phoneNumber'),
    {
      matches: /^[0-9]/,
      max: 24,
    },
  ),
  birthdate: yupFormSchemas.date(
    i18n('user.fields.birthdate'),
    {},
  ),
  genre: yupFormSchemas.enumerator(
    i18n('entities.user.fields.genre'),
    {
      options: userEnumerators.genre,
    },
  ),
  address: yupFormSchemas.string(
    i18n('user.fields.address'),
    {},
  ),
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
  ),
  membership: yupFormSchemas.relationToMany(
    i18n('user.fields.membership'),
    {},
  ),
  avatars: yupFormSchemas.images(
    i18n('user.fields.avatars'),
    {
      max: 1,
    },
  ),
});

function UserEditForm(props) {
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    const record = props.user || {};

    return {
      roles: record.roles,
      phoneNumber: record.phoneNumber,
      address: record.address,
      firstName: record.firstName,
      lastName: record.lastName,
      genre: record.genre,
      membership: record.membership,
      avatars: record.avatars || [],
      birthDate: record.birthDate
        ? moment(record.birthDate).toDate()
        : null,
    };
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const data = {
      id: props.user.id,
      membership: props.user.membership,
      ...values,
    };
    delete data.email;
    dispatch(actions.doUpdate(data));
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Tabs
            defaultActiveKey="information"
            id="0"
            className="mb-3"
          >
            <Tab eventKey="information" title="Information">
              <Container fluid={true}>
                <Row>
                  <Col>
                    <ImagesFormItem
                      name="avatars"
                      label={i18n('user.fields.avatars')}
                      storage={
                        Storage.values.userAvatarsProfiles
                      }
                      max={1}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="form-group">
                      <label
                        className="col-form-label"
                        htmlFor="email"
                      >
                        {i18n('user.fields.email')}
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="email"
                        name="email"
                        value={props.user.email}
                      />
                    </div>
                  </Col>
                  <Col>
                    <InputFormItem
                      name="firstName"
                      label={i18n('user.fields.firstName')}
                      required={false}
                    />
                  </Col>
                  <Col>
                    <InputFormItem
                      name="lastName"
                      label={i18n('user.fields.lastName')}
                      required={false}
                    />
                  </Col>
                  <Col>
                    <RadioFormItem
                      name="genre"
                      label={i18n('user.fields.genre')}
                      options={userEnumerators.genre.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `user.genre.${value}`,
                          ),
                        }),
                      )}
                      required={false}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputFormItem
                      name="address"
                      label={i18n('user.fields.address')}
                      required={false}
                    />
                  </Col>
                  <Col>
                    <InputFormItem
                      name="phoneNumber"
                      label={i18n(
                        'user.fields.phoneNumber',
                      )}
                      required={false}
                    />
                  </Col>
                  <Col>
                    <DatePickerFormItem
                      name="birthDate"
                      label={i18n('user.fields.birthDate')}
                      required={false}
                      showYearDropdown={true}
                      showMonthDropdown={true}
                    />
                  </Col>
                  <Col>
                    <SelectFormItem
                      name="roles"
                      label={i18n('user.fields.roles')}
                      options={userEnumerators.roles.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `roles.${value}.label`,
                          ),
                        }),
                      )}
                      mode="multiple"
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
                <MembershipListToolbar
                  data={props.user.id}
                />
                <MembershipListFilter />
                <MembershipListTable
                  data={props.user.membership}
                />
              </ContentWrapper>
            </Tab>
          </Tabs>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              disabled={props.saveLoading}
              onClick={onReset}
              type="button"
            >
              <i className="fas fa-undo"></i>
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
                type="button"
              >
                <i className="fas fa-times"></i>
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default UserEditForm;
