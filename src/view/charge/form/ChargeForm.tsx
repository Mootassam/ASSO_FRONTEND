import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import chargeEnumerators from 'src/modules/charge/chargeEnumerators';
import DepenseAutocompleteFormItem from 'src/view/depense/autocomplete/DepenseAutocompleteFormItem';

const schema = yup.object().shape({
  type: yupFormSchemas.enumerator(
    i18n('entities.charge.fields.type'),
    {
      options: chargeEnumerators.type,
    },
  ),
  amount: yupFormSchemas.integer(
    i18n('entities.charge.fields.amount'),
    {},
  ),
});

function ChargeForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      type: record.type,
      amount: record.amount,
      // depense: record.depense,
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
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="type"
                label={i18n('entities.charge.fields.type')}
                options={chargeEnumerators.type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.charge.enumerators.type.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="amount"
                label={i18n(
                  'entities.charge.fields.amount',
                )}
                required={false}
              />
            </div>
          </div>

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

export default ChargeForm;
