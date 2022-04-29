import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    id: '0',
    path: '/',
    exact: true,
    icon: 'fas fa-th-large',
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: 'fas fa-credit-card',
    label: i18n('plan.menu'),
  },
  {
    id: '1',
    path: '#administration',
    permissionRequired: permissions.associationRead,
    icon: 'fas fa-chevron-right',
    label: i18n('common.administration'),
    haveSubMenu: true,
    subPaths: [
      '/association',
      '/election',
      '/audit-logs',
      '/settings',
    ],
    subMenu: [
      {
        path: '/association',
        permissionRequired: permissions.associationRead,
        icon: 'fa fa-genderless',
        label: i18n('entities.association.menu'),
        haveSubMenu: true,
      },

      {
        path: '/election',
        permissionRequired: permissions.electionRead,
        icon: 'fa fa-circle-o',
        label: i18n('entities.election.menu'),
      },

      {
        path: '/audit-logs',
        icon: 'fas fa-history',
        label: i18n('auditLog.menu'),
        permissionRequired: permissions.auditLogRead,
      },

      {
        path: '/settings',
        icon: 'fas fa-cog',
        label: i18n('settings.menu'),
        permissionRequired: permissions.settingsEdit,
      },
    ],
  },
  {
    id: '2',
    path: '#community',
    permissionRequired: permissions.associationRead,
    icon: 'fas fa-chevron-right',
    label: i18n('common.community'),
    haveSubMenu: true,
    subPaths: ['/user', '/partner', '/group'],
    subMenu: [
      {
        path: '/user',
        permissionRequired: permissions.userRead,
        icon: 'fas fa-chevron-right',
        label: i18n('user.menu'),
      },

      {
        path: '/partner',
        permissionRequired: permissions.partnerRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.partner.menu'),
      },

      {
        path: '/group',
        permissionRequired: permissions.groupRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.group.menu'),
      },
    ],
  },
  {
    id: '3',
    path: '#news',
    permissionRequired: permissions.associationRead,
    icon: 'fas fa-chevron-right',
    label: i18n('common.news'),
    haveSubMenu: true,
    subPaths: ['/news', '/news-tag', '/news-category'],
    subMenu: [
      {
        path: '/news',
        permissionRequired: permissions.newsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.news.menu'),
      },

      {
        path: '/news-tag',
        permissionRequired: permissions.newsTagRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.newsTag.menu'),
      },

      {
        path: '/news-category',
        permissionRequired: permissions.newsCategoryRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.newsCategory.menu'),
      },
    ],
  },

  {
    id: '4',
    path: '#membership',
    permissionRequired: permissions.associationRead,
    icon: 'fas fa-chevron-right',
    label: i18n('common.membership'),
    haveSubMenu: true,
    subPaths: ['/campaign', '/membership', '/formule'],
    subMenu: [
      {
        path: '/campaign',
        permissionRequired: permissions.campaignRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.campaign.menu'),
      },

      {
        path: '/membership',
        permissionRequired: permissions.membershipRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.membership.menu'),
      },

      {
        path: '/formule',
        permissionRequired: permissions.formuleRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.formule.menu'),
      },
    ],
  },
  {
    id: '5',
    path: '#accounting',
    permissionRequired: permissions.depenseRead,
    icon: 'fas fa-chevron-right',
    label: i18n('common.accounting'),
    haveSubMenu: true,
    subPaths: ['/entree', '/depense', '/charge'],
    subMenu: [
      {
        path: '/entree',
        permissionRequired: permissions.entreeRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.entree.menu'),
      },

      {
        path: '/depense',
        permissionRequired: permissions.depenseRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.depense.menu'),
      },

      {
        path: '/charge',
        permissionRequired: permissions.chargeRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.charge.menu'),
      },
    ],
  },

  {
    id: '6',
    path: '#category',
    permissionRequired: permissions.categoryRead,
    icon: 'fas fa-th-large',
    label: i18n('entities.category.menu'),
    haveSubMenu: true,
    subPaths: [
      '/category',
      '/subcategories',
      '/chield-categories',
    ],
    subMenu: [
      {
        path: '/category',
        permissionRequired: permissions.categoryRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.category.menu'),
      },
      {
        path: '/subcategories',
        permissionRequired: permissions.subcategoriesRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.subcategories.menu'),
      },
      {
        path: '/chield-categories',
        permissionRequired:
          permissions.chieldCategoriesRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.chieldCategories.menu'),
      },
    ],
  },

  {
    id: '7',
    path: '#product',
    permissionRequired: permissions.productRead,
    icon: 'fab fa-product-hunt',
    label: i18n('entities.product.menu'),
    haveSubMenu: true,
    subPaths: [
      '/brands',
      '/product',
      '/campaign-items',
      '/edit',
    ],
    subMenu: [
      {
        path: '/brands',
        permissionRequired: permissions.brandsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.brands.menu'),
      },
      {
        path: '/product',
        permissionRequired: permissions.brandsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.product.menu'),
      },

      {
        path: '/campaign-items',
        permissionRequired: permissions.campaignItemsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.campaignItems.menu'),
      },
      {
        path: '/edit',
        permissionRequired: permissions.editRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.edit.menu'),
      },
    ],
  },
  {
    id: '8',
    path: '/order',
    permissionRequired: permissions.orderRead,
    icon: 'fab fa-first-order',
    label: i18n('entities.order.menu'),
  },
  {
    id: '9',
    path: '/transaction',
    permissionRequired: permissions.transactionRead,
    icon: 'fas fa-random',
    label: i18n('entities.transaction.menu'),
  },
  {
    id: '10',
    path: '#e-commerce',
    permissionRequired: permissions.attributeOptionsRead,
    icon: 'fas fa-newspaper',
    label: i18n('e-commerce'),
    haveSubMenu: true,
    subPaths: [
      '/coupons',
      '/shippingservice',
      '/state',
      '/taxes',
      '/paymentsettings',
    ],
    subMenu: [
      {
        path: '/coupons',
        permissionRequired: permissions.couponsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.coupons.menu'),
      },
      {
        path: '/shippingservice',
        permissionRequired: permissions.shippingserviceRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.shippingservice.menu'),
      },
      {
        path: '/state',
        permissionRequired: permissions.stateRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.state.menu'),
      },
      {
        path: '/taxes',
        permissionRequired: permissions.taxesRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.taxes.menu'),
      },

      {
        path: '/paymentsettings',
        permissionRequired: permissions.paymentsettingsRead,
        icon: 'fas fa-chevron-right',
        label: i18n('entities.paymentsettings.menu'),
      },
    ],
  },
].filter(Boolean);
