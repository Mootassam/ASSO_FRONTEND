import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import attributeOptionsSelectors from 'src/modules/attributeOptions/attributeOptionsSelectors';
import destroyActions from 'src/modules/attributeOptions/destroy/attributeOptionsDestroyActions';
import destroySelectors from 'src/modules/attributeOptions/destroy/attributeOptionsDestroySelectors';
import actions from 'src/modules/attributeOptions/list/attributeOptionsListActions';
import selectors from 'src/modules/attributeOptions/list/attributeOptionsListSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ReactTooltip from 'react-tooltip';

function AttributeOptionsToolbar(props) {
  const [
    destroyAllConfirmVisible,
    setDestroyAllConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToDestroy = useSelector(
    attributeOptionsSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    attributeOptionsSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    attributeOptionsSelectors.selectPermissionToImport,
  );

  const doOpenDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(true);
  };

  const doCloseDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(false);
  };

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    doCloseDestroyAllConfirmModal();

    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;

    const button = (
      <button
        className="btn btn-light"
        disabled={disabled}
        onClick={doExport}
        type="button"
      >
        <ButtonIcon
          loading={exportLoading}
          iconClass="far fa-file-excel"
        />
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.noDataToExport')}
          data-tip-disable={!disabled}
          data-for="attribute-options-list-toolbar-export-tooltip"
        >
          {button}
          <ReactTooltip id="attribute-options-list-toolbar-export-tooltip" />
        </span>
      );
    }

    return button;
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled}
        className="btnCircle btn-primary"
        type="button"
        onClick={doOpenDestroyAllConfirmModal}
      >
        <ButtonIcon
          loading={destroyLoading}
          iconClass="far fa-trash-alt"
        />
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="attribute-options-list-toolbar-destroy-tooltip"
        >
          {button}
          <ReactTooltip id="attribute-options-list-toolbar-destroy-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link
          to={`/attribute-options/new/${props?.ProductId}`}
        >
          <button
            className="btnCircle btn-primary"
            type="button"
          >
            <ButtonIcon iconClass="fas fa-plus" />
          </button>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/attribute-options/importer">
          <button
            className="btnCircle btn-primary"
            type="button"
          >
            <ButtonIcon iconClass="fas fa-upload" />
          </button>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=attributeOptions">
          <button className="btn btn-light" type="button">
            <ButtonIcon iconClass="fas fa-history" />
          </button>
        </Link>
      )}

      {renderExportButton()}

      {destroyAllConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroyAllSelected()}
          onClose={() => doCloseDestroyAllConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </Toolbar>
  );
}

export default AttributeOptionsToolbar;
