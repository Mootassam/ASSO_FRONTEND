import { i18n } from 'src/i18n';
import actions from 'src/modules/group/list/groupListActions';
import selectors from 'src/modules/group/list/groupListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import groupEnumerators from 'src/modules/group/groupEnumerators';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.group.fields.name'),
  ),
  admin: yupFilterSchemas.relationToOne(
    i18n('entities.group.fields.admin'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.group.fields.type'),
  ),
});

const emptyValues = {
  name: null,
  admin: null,
  type: null,
};

const previewRenders = {
  name: {
    label: i18n('entities.group.fields.name'),
    render: filterRenders.generic(),
  },
  admin: {
    label: i18n('entities.group.fields.admin'),
    render: filterRenders.relationToOne(),
  },
  type: {
    label: i18n('entities.group.fields.type'),
    render: filterRenders.enumerator(
      'entities.group.enumerators.type',
    ),
  },
};

function GroupListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="name"
                    label={i18n(
                      'entities.group.fields.name',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <UserAutocompleteFormItem
                    name="admin"
                    label={i18n(
                      'entities.group.fields.admin',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <SelectFormItem
                    name="type"
                    label={i18n(
                      'entities.group.fields.type',
                    )}
                    options={groupEnumerators.type.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.group.enumerators.type.${value}`,
                        ),
                      }),
                    )}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default GroupListFilter;
