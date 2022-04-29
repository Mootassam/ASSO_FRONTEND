import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import MembershipAutocompleteFormItem from 'src/view/membership/autocomplete/MembershipAutocompleteFormItem';
import {
  Tabs,
  Tab,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import MembershipListFilter from 'src/view/membership/list/MembershipListFilter';
import MembershipListTable from 'src/view/membership/list/MembershipListTable';
import MembershipListToolbar from 'src/view/membership/list/MembershipListToolbar';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.formule.fields.name'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.formule.fields.description'),
    {},
  ),
  amount: yupFormSchemas.decimal(
    i18n('entities.formule.fields.amount'),
    {},
  ),
  membership: yupFormSchemas.relationToMany(
    i18n('entities.formule.fields.membership'),
    {},
  ),
});

function FormuleForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      description: record.description,
      amount: record.amount,
      membership: record.membership || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const data = {
      membership: props.record.membership,
      ...values,
    };
    props.onSubmit(props.record?.id, data);
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
                    <InputFormItem
                      name="name"
                      label={i18n(
                        'entities.formule.fields.name',
                      )}
                      required={false}
                      autoFocus
                    />
                  </Col>
                  <Col xs={6}>
                    <TextAreaFormItem
                      name="description"
                      label={i18n(
                        'entities.formule.fields.description',
                      )}
                      required={false}
                    />
                  </Col>
                  <Col>
                    <InputFormItem
                      name="amount"
                      label={i18n(
                        'entities.formule.fields.amount',
                      )}
                      required={false}
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
                  formule={props.record.id}
                />
                <MembershipListFilter />
                <MembershipListTable
                  data={props.record.membership}
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
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
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

export default FormuleForm;
