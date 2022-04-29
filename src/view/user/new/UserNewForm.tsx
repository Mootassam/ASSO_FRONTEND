import { useForm, FormProvider } from 'react-hook-form';
import { i18n } from 'src/i18n';
import React, { useState } from 'react';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import TagsFormItem from 'src/view/shared/form/items/TagsFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import userEnumerators from 'src/modules/user/userEnumerators';
import { yupResolver } from '@hookform/resolvers/yup';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';

import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import Storage from 'src/security/storage';
const singleSchema = yup.object().shape({
  email: yupFormSchemas.email(i18n('user.fields.email')),
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
    { required: true, min: 1 },
  ),
  avatars: yupFormSchemas.images(
    i18n('user.fields.avatars'),
    {
      max: 1,
    },
  ),
});

const multipleSchema = yup.object().shape({
  emails: yup
    .array()
    .label(i18n('user.fields.emails'))
    .of(
      yup
        .string()
        .transform((cv, ov) => {
          return ov === '' ? null : cv;
        })
        .email(i18n('user.validations.email'))
        .label(i18n('user.fields.email'))
        .max(255)
        .required(),
    )
    .required()
    .min(1),
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
    { required: true, min: 1 },
  ),
});

function UserNewForm(props) {
  const { single, saveLoading } = props;
  const schema = props.single
    ? singleSchema
    : multipleSchema;
  const [initialValues] = useState(() => ({
    emails: [],
    email: '',
    firstName: '',
    lastName: '',
    genre: null,
    address: '',
    phoneNumber: '',
    birthDate: null,
    roles: [],
    avatars: [],
  }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const { ...data } = values;

    if (data.email) {
      data.emails = [data.email];
      delete data.email;
    }

    props.onSubmit(null, data);
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
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              {single ? (
                <InputFormItem
                  name="email"
                  label={i18n('user.fields.email')}
                  required={true}
                  autoFocus
                />
              ) : (
                <TagsFormItem
                  name="emails"
                  label={i18n('user.fields.emails')}
                  notFoundContent={i18n(
                    'user.new.emailsHint',
                  )}
                  required={true}
                />
              )}
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="avatars"
                label={i18n('user.fields.avatars')}
                storage={Storage.values.userAvatarsProfiles}
                max={1}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="firstName"
                label={i18n('user.fields.firstName')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="lastName"
                label={i18n('user.fields.lastName')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="phoneNumber"
                label={i18n('user.fields.phoneNumber')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="address"
                label={i18n('user.fields.address')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="birthDate"
                label={i18n('user.fields.birthDate')}
                required={false}
                showYearDropdown={true}
                showMonthDropdown={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <RadioFormItem
                name="genre"
                label={i18n('user.fields.genre')}
                options={userEnumerators.genre.map(
                  (value) => ({
                    value,
                    label: i18n(`user.genre.${value}`),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="roles"
                label={i18n('user.fields.roles')}
                required={true}
                options={userEnumerators.roles.map(
                  (value) => ({
                    value,
                    label: i18n(`roles.${value}.label`),
                  }),
                )}
                mode="multiple"
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={saveLoading}
                iconClass="far fa-save"
              />
              {i18n('common.save')}
            </button>

            <button
              disabled={saveLoading}
              onClick={onReset}
              className="btn btn-light"
              type="button"
            >
              <i className="fas fa-undo"></i>
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                className="btn btn-light"
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

export default UserNewForm;
