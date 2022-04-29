import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/user/list/userListActions';
import selectors from 'src/modules/user/list/userListSelectors';
import userSelectors from 'src/modules/user/userSelectors';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';

function UserToolbar(props) {
  const dispatch = useDispatch();

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToCreate = useSelector(
    userSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    userSelectors.selectPermissionToImport,
  );
  const hasPermissionToDestroy = useSelector(
    userSelectors.selectPermissionToDestroy,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const loading = useSelector(selectors.selectLoading);
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    dispatch(actions.doDestroyAllSelected());
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;

    const button = (
      <span
        data-tip={i18n('common.export')}
        data-for="charge-list-toolbar-export"
      >
        <button
          className="btnCircle btn-light"
          disabled={disabled}
          onClick={doExport}
          type="button"
        >
          <ButtonIcon
            loading={exportLoading}
            iconClass="far fa-file-excel"
          />
        </button>
        <ReactTooltip id="charge-list-toolbar-export" />
      </span>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.noDataToExport')}
          data-tip-disable={!disabled}
          data-for="user-users-toolbar-export-tooltip"
        >
          {button}
          <ReactTooltip id="user-users-toolbar-export-tooltip" />
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
      <span
        data-tip={i18n('common.destroy')}
        data-tip-disable={disabled}
        data-for="charge-list-toolbar-destroy"
      >
        <button
          disabled={disabled}
          className="btnCircle btn-primary"
          type="button"
          onClick={doDestroyAllSelected}
        >
          <ButtonIcon iconClass="fas fa-user-minus" />
        </button>
        <ReactTooltip id="charge-list-toolbar-destroy" />
      </span>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="user-users-toolbar-destroy-all-tooltip"
        >
          {button}
          <ReactTooltip id="user-users-toolbar-destroy-all-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/user/new">
          <span
            data-tip={i18n('common.new')}
            data-for="charge-list-toolbar-new-tooltip"
          >
            <button
              className="btnCircle btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-user-plus" />
            </button>
            <ReactTooltip id="charge-list-toolbar-new-tooltip" />
          </span>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/user/importer">
          <span
            data-tip={i18n('common.import')}
            data-for="charge-list-toolbar-import-tooltip"
          >
            <button
              className="btnCircle btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-upload" />
            </button>
            <ReactTooltip id="charge-list-toolbar-import-tooltip" />
          </span>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=user">
          <span
            data-tip={i18n('auditLog.menu')}
            data-for="charge-list-toolbar-auditLog-tooltip"
          >
            <button
              className="btnCircle btn-light"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-history" />
            </button>
            <ReactTooltip id="charge-list-toolbar-auditLog-tooltip" />
          </span>
        </Link>
      )}

      {renderExportButton()}
    </Toolbar>
  );
}

export default UserToolbar;
