import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ReactTooltip from 'react-tooltip';

function SettingsFormToolbar(props) {
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );

  return (
    <Toolbar style={{ marginBottom: '16px' }}>
      {hasPermissionToAuditLogs && (
        <Link to={`/audit-logs?entityNames=settings`}>
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
    </Toolbar>
  );
}

export default SettingsFormToolbar;
