import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import trackOrderSelectors from 'src/modules/trackOrder/trackOrderSelectors';
import destroyActions from 'src/modules/trackOrder/destroy/trackOrderDestroyActions';
import destroySelectors from 'src/modules/trackOrder/destroy/trackOrderDestroySelectors';
import actions from 'src/modules/trackOrder/list/trackOrderListActions';
import selectors from 'src/modules/trackOrder/list/trackOrderListSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ReactTooltip from 'react-tooltip';

function TrackOrderToolbar(props) {
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
    trackOrderSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    trackOrderSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    trackOrderSelectors.selectPermissionToImport,
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
          data-for="track-order-list-toolbar-export-tooltip"
        >
          {button}
          <ReactTooltip id="track-order-list-toolbar-export-tooltip" />
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
          data-for="track-order-list-toolbar-destroy-tooltip"
        >
          {button}
          <ReactTooltip id="track-order-list-toolbar-destroy-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/track-order/new">
          <button
            className="btnCircle btn-primary"
            type="button"
          >
            <ButtonIcon iconClass="fas fa-plus" />
          </button>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/track-order/importer">
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
        <Link to="/audit-logs?entityNames=trackOrder">
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

export default TrackOrderToolbar;
