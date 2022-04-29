import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/auditLog/auditLogActions';
import { i18n } from 'src/i18n';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import ReactTooltip from 'react-tooltip';
import Toolbar from 'src/view/shared/styles/Toolbar';

function AuditLogToolbar(props) {
  const loading = useSelector(selectors.selectLoading);
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const dispatch = useDispatch();

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const disabled = !hasRows || loading;

  return (
    <Toolbar>
      <span
        data-tip={i18n('common.noDataToExport')}
        data-tip-disable={!disabled}
        data-for="audit-log-toolbar-export-tooltip"
      >
        <span
          data-tip={i18n('common.export')}
          data-tip-disable={disabled}
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
      </span>
      <ReactTooltip id="audit-log-toolbar-export-tooltip" />
    </Toolbar>
  );
}

export default AuditLogToolbar;
