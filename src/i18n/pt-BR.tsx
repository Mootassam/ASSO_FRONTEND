const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    election: {
      name: 'Election',
      label: 'Elections',
      menu: 'Elections',
      exporterFileName: 'Election_exportados',
      list: {
        menu: 'Elections',
        title: 'Elections',
      },
      create: {
        success: 'Election salvo com sucesso',
      },
      update: {
        success: 'Election salvo com sucesso',
      },
      destroy: {
        success: 'Election deletado com sucesso',
      },
      destroyAll: {
        success: 'Election(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Election',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        members: 'Members',
        startDateRange: 'StartDate',
        startDate: 'StartDate',
        endDateRange: 'EndDate',
        endDate: 'EndDate',
        pv: 'Pv',
        association: 'Association',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo Election',
      },
      view: {
        title: 'Visualizar Election',
      },
      importer: {
        title: 'Importar Elections',
        fileName: 'election_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    association: {
      name: 'Association',
      label: 'Associations',
      menu: 'Associations',
      exporterFileName: 'Association_exportados',
      list: {
        menu: 'Associations',
        title: 'Associations',
      },
      create: {
        success: 'Association salvo com sucesso',
      },
      update: {
        success: 'Association salvo com sucesso',
      },
      destroy: {
        success: 'Association deletado com sucesso',
      },
      destroyAll: {
        success: 'Association(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Association',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        logo: 'Logo',
        email: 'Email',
        phone: 'Phone',
        postalCodeRange: 'PostalCode',
        postalCode: 'PostalCode',
        city: 'City',
        country: 'Country',
        admins: 'Admins',
        elections: 'Elections',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo Association',
      },
      view: {
        title: 'Visualizar Association',
      },
      importer: {
        title: 'Importar Associations',
        fileName: 'association_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    newsCategory: {
      name: 'NewsCategory',
      label: 'NewsCategories',
      menu: 'NewsCategories',
      exporterFileName: 'NewsCategory_exportados',
      list: {
        menu: 'NewsCategories',
        title: 'NewsCategories',
      },
      create: {
        success: 'NewsCategory salvo com sucesso',
      },
      update: {
        success: 'NewsCategory salvo com sucesso',
      },
      destroy: {
        success: 'NewsCategory deletado com sucesso',
      },
      destroyAll: {
        success: 'NewsCategory(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar NewsCategory',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        news: 'News',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo NewsCategory',
      },
      view: {
        title: 'Visualizar NewsCategory',
      },
      importer: {
        title: 'Importar NewsCategories',
        fileName: 'newsCategory_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    newsTag: {
      name: 'NewsTag',
      label: 'NewsTags',
      menu: 'NewsTags',
      exporterFileName: 'NewsTag_exportados',
      list: {
        menu: 'NewsTags',
        title: 'NewsTags',
      },
      create: {
        success: 'NewsTag salvo com sucesso',
      },
      update: {
        success: 'NewsTag salvo com sucesso',
      },
      destroy: {
        success: 'NewsTag deletado com sucesso',
      },
      destroyAll: {
        success: 'NewsTag(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar NewsTag',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        news: 'News',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo NewsTag',
      },
      view: {
        title: 'Visualizar NewsTag',
      },
      importer: {
        title: 'Importar NewsTags',
        fileName: 'newsTag_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    news: {
      name: 'News',
      label: 'News',
      menu: 'News',
      exporterFileName: 'News_exportados',
      list: {
        menu: 'News',
        title: 'News',
      },
      create: {
        success: 'News salvo com sucesso',
      },
      update: {
        success: 'News salvo com sucesso',
      },
      destroy: {
        success: 'News deletado com sucesso',
      },
      destroyAll: {
        success: 'News(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar News',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        type: 'Type',
        shortDescription: 'ShortDescription',
        description: 'Description',
        image: 'Image',
        attachements: 'Attachements',
        category: 'Category',
        tags: 'Tags',
        published: 'Published',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        type: {
          news: 'News',
          appelOffre: 'AppelOffre',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo News',
      },
      view: {
        title: 'Visualizar News',
      },
      importer: {
        title: 'Importar News',
        fileName: 'news_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    partner: {
      name: 'Partner',
      label: 'Partners',
      menu: 'Partners',
      exporterFileName: 'Partner_exportados',
      list: {
        menu: 'Partners',
        title: 'Partners',
      },
      create: {
        success: 'Partner salvo com sucesso',
      },
      update: {
        success: 'Partner salvo com sucesso',
      },
      destroy: {
        success: 'Partner deletado com sucesso',
      },
      destroyAll: {
        success: 'Partner(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Partner',
      },
      fields: {
        id: 'Id',
        acronym: 'Acronym',
        name: 'Name',
        email: 'Email',
        logo: 'Logo',
        postalAddress: 'PostalAddress',
        postalCode: 'PostalCode',
        city: 'City',
        country: 'Country',
        members: 'Members',
        type: 'Type',
        group: 'Group',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        type: {
          association: 'Association',
          funder: 'Funder',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo Partner',
      },
      view: {
        title: 'Visualizar Partner',
      },
      importer: {
        title: 'Importar Partners',
        fileName: 'partner_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    group: {
      name: 'Group',
      label: 'Groups',
      menu: 'Groups',
      exporterFileName: 'Group_exportados',
      list: {
        menu: 'Groups',
        title: 'Groups',
      },
      create: {
        success: 'Group salvo com sucesso',
      },
      update: {
        success: 'Group salvo com sucesso',
      },
      destroy: {
        success: 'Group deletado com sucesso',
      },
      destroyAll: {
        success: 'Group(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Group',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        logo: 'Logo',
        admin: 'Admin',
        members: 'Members',
        partners: 'Partners',
        type: 'Type',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        type: {
          administrative: 'Administrative',
          cultural: 'Cultural',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo Group',
      },
      view: {
        title: 'Visualizar Group',
      },
      importer: {
        title: 'Importar Groups',
        fileName: 'group_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    formule: {
      name: 'Formule',
      label: 'Formules',
      menu: 'Formules',
      exporterFileName: 'Formule_exportados',
      list: {
        menu: 'Formules',
        title: 'Formules',
      },
      create: {
        success: 'Formule salvo com sucesso',
      },
      update: {
        success: 'Formule salvo com sucesso',
      },
      destroy: {
        success: 'Formule deletado com sucesso',
      },
      destroyAll: {
        success: 'Formule(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Formule',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        amountRange: 'Amount',
        amount: 'Amount',
        membership: 'Membership',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo Formule',
      },
      view: {
        title: 'Visualizar Formule',
      },
      importer: {
        title: 'Importar Formules',
        fileName: 'formule_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    membership: {
      name: 'Membership',
      label: 'Memberships',
      menu: 'Memberships',
      exporterFileName: 'Membership_exportados',
      list: {
        menu: 'Memberships',
        title: 'Memberships',
      },
      create: {
        success: 'Membership salvo com sucesso',
      },
      update: {
        success: 'Membership salvo com sucesso',
      },
      destroy: {
        success: 'Membership deletado com sucesso',
      },
      destroyAll: {
        success: 'Membership(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Membership',
      },
      fields: {
        id: 'Id',
        status: 'Status',
        paymentMethod: 'PaymentMethod',
        formule: 'Formule',
        attachements: 'Attachements',
        member: 'Member',
        campaign: 'Campaign',
        amountRange: 'Amount',
        amount: 'Amount',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        status: {
          paid: 'Paid',
          waiting: 'Waiting',
        },
        paymentMethod: {
          cash: 'Cash',
          check: 'Check',
          bank: 'Bank',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo Membership',
      },
      view: {
        title: 'Visualizar Membership',
      },
      importer: {
        title: 'Importar Memberships',
        fileName: 'membership_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    campaign: {
      name: 'Campaign',
      label: 'Campaigns',
      menu: 'Campaigns',
      exporterFileName: 'Campaign_exportados',
      list: {
        menu: 'Campaigns',
        title: 'Campaigns',
      },
      create: {
        success: 'Campaign salvo com sucesso',
      },
      update: {
        success: 'Campaign salvo com sucesso',
      },
      destroy: {
        success: 'Campaign deletado com sucesso',
      },
      destroyAll: {
        success: 'Campaign(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Campaign',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        membership: 'Membership',
        status: 'Status',
        yearRange: 'Year',
        year: 'Year',
        startDateRange: 'StartDate',
        startDate: 'StartDate',
        endDateRange: 'EndDate',
        endDate: 'EndDate',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        status: {
          published: 'Published',
          draft: 'Draft',
          suspended: 'Suspended',
          archived: 'Archived',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Novo Campaign',
      },
      view: {
        title: 'Visualizar Campaign',
      },
      importer: {
        title: 'Importar Campaigns',
        fileName: 'campaign_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
    objectif: {
      name: 'objectif',
      label: 'Objectifs',
      menu: 'Objectifs',
      exporterFileName: 'objectif_export',
      list: {
        menu: 'Objectifs',
        title: 'Objectifs',
      },
      create: {
        success: 'Objectif successfully saved',
      },
      update: {
        success: 'Objectif successfully saved',
      },
      destroy: {
        success: 'Objectif successfully deleted',
      },
      destroyAll: {
        success: 'Objectif(s) successfully deleted',
      },
      edit: {
        title: 'Edit Objectif',
      },
      fields: {
        id: 'Id',
        numberRange: 'Number',
        number: 'Number',
        title: 'Title',
        description: 'Description',
        status: 'Status',
        yearRange: 'Year',
        year: 'Year',
        startDateRange: 'StartDate',
        startDate: 'StartDate',
        endDateRange: 'EndDate',
        endDate: 'EndDate',
        election: 'Election',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          achieved: 'Achieved',
          waiting: 'Waiting',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Objectif',
      },
      view: {
        title: 'View Objectif',
      },
      importer: {
        title: 'Import Objectifs',
        fileName: 'objectif_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists:
        'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Escuro',
      light: 'Claro',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min: '${path} deve possuir ao menos ${min} caracteres',
      max: '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim: '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size: 'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint: 'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',

    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas',
  },
};

export default ptBR;
