import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import ObjectifAutocompleteFormItem from 'src/view/objectif/autocomplete/ObjectifAutocompleteFormItem';
import { Tabs, Tab } from 'react-bootstrap';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import ObjectifListFilter from 'src/view/objectif/list/ObjectifListFilter';
import ObjectifListTable from 'src/view/objectif/list/ObjectifListTable';
import ObjectifListToolbar from 'src/view/objectif/list/ObjectifListToolbar';
import MemberFilter from 'src/view/member/list/MemberFilter';
import MemberTable from 'src/view/member/list/MemberTable';
import MemberAutocompleteFormItem from 'src/view/member/autocomplete/MemberAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.election.fields.name'),
    {
      required: true,
    },
  ),
  members: yupFormSchemas.relationToMany(
    i18n('entities.election.fields.members'),
    {},
  ),
  startDate: yupFormSchemas.date(
    i18n('entities.election.fields.startDate'),
    {},
  ),
  endDate: yupFormSchemas.date(
    i18n('entities.election.fields.endDate'),
    {},
  ),
  pv: yupFormSchemas.files(
    i18n('entities.election.fields.pv'),
    {},
  ),
  objectifs: yupFormSchemas.relationToMany(
    i18n('entities.election.fields.objectifs'),
    {},
  ),
});

function ElectionForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      members: record.members || [],
      startDate: record.startDate
        ? moment(record.startDate, 'YYYY-MM-DD').toDate()
        : null,
      endDate: record.endDate
        ? moment(record.endDate, 'YYYY-MM-DD').toDate()
        : null,
      pv: record.pv || [],
      objectifs: record.objectifs || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
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
          {props.isEditing ? (
            <Tabs
              defaultActiveKey="information"
              id="information"
              className="mb-3"
            >
              <Tab
                eventKey="information"
                title="Information"
              >
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-12">
                    <InputFormItem
                      name="name"
                      label={i18n(
                        'entities.election.fields.name',
                      )}
                      required={true}
                      autoFocus
                    />
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <DatePickerFormItem
                      name="startDate"
                      label={i18n(
                        'entities.election.fields.startDate',
                      )}
                      required={false}
                    />
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <DatePickerFormItem
                      name="endDate"
                      label={i18n(
                        'entities.election.fields.endDate',
                      )}
                      required={false}
                    />
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <FilesFormItem
                      name="pv"
                      label={i18n(
                        'entities.election.fields.pv',
                      )}
                      required={false}
                      storage={Storage.values.electionPv}
                      max={undefined}
                      formats={undefined}
                    />
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="members"
                title={i18n(
                  'entities.election.fields.members',
                )}
              >
                <ContentWrapper>
                  <div
                    className="col-lg-12 col-md-12 col-12"
                    style={{
                      padding: '0px',
                      marginBottom: '8px',
                    }}
                  >
                    <MemberAutocompleteFormItem
                      name="members"
                      required={false}
                      showCreate={false}
                      mode="multiple"
                    />
                  </div>
                  <MemberFilter />
                  <MemberTable
                    data={props.record.members}
                  />
                </ContentWrapper>
              </Tab>
              <Tab
                eventKey="objectif"
                title={i18n('entities.objectif.menu')}
              >
                <ContentWrapper>
                  <ObjectifListToolbar />
                  <ObjectifListFilter />
                  <ObjectifListTable
                    data={props.record.objectifs}
                  />
                </ContentWrapper>
              </Tab>
            </Tabs>
          ) : (
            <div className="row">
              <div className="col-lg-7 col-md-8 col-12">
                <InputFormItem
                  name="name"
                  label={i18n(
                    'entities.election.fields.name',
                  )}
                  required={true}
                  autoFocus
                />
              </div>
              <div className="col-lg-7 col-md-8 col-12">
                <MemberAutocompleteFormItem
                  name="members"
                  label={i18n(
                    'entities.election.fields.members',
                  )}
                  required={false}
                  showCreate={!props.modal}
                  mode="multiple"
                />
              </div>
              <div className="col-lg-7 col-md-8 col-12">
                <DatePickerFormItem
                  name="startDate"
                  label={i18n(
                    'entities.election.fields.startDate',
                  )}
                  required={false}
                />
              </div>
              <div className="col-lg-7 col-md-8 col-12">
                <DatePickerFormItem
                  name="endDate"
                  label={i18n(
                    'entities.election.fields.endDate',
                  )}
                  required={false}
                />
              </div>
              <div className="col-lg-7 col-md-8 col-12">
                <FilesFormItem
                  name="pv"
                  label={i18n(
                    'entities.election.fields.pv',
                  )}
                  required={false}
                  storage={Storage.values.electionPv}
                  max={undefined}
                  formats={undefined}
                />
              </div>

              <div className="col-lg-7 col-md-8 col-12">
                <ObjectifAutocompleteFormItem
                  name="objectifs"
                  label={i18n(
                    'entities.election.fields.objectifs',
                  )}
                  required={false}
                  showCreate={!props.modal}
                  mode="multiple"
                />
              </div>
            </div>
          )}

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

export default ElectionForm;
