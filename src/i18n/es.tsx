const es = {
  common: {
    or: 'Ou',
    cancel: 'Annuler',
    reset: 'Redémarrage',
    save: 'Sauvegarder',
    search: 'Chercher',
    edit: 'Éditer',
    remove: 'Supprimer',
    new: 'Nouveau',
    export: 'Exporter vers Excel',
    noDataToExport: 'Aucune donnée à exporter',
    import: 'Importer',
    discard: 'Jeter',
    yes: 'Oui',
    no: 'Non',
    pause: 'Pause',
    areYouSure: 'Tu es sûr?',
    view: 'Afficher',
    destroy: 'Supprimer',
    mustSelectARow: 'Vous devez sélectionner une ligne',
    start: 'Démarrer',
    end: 'Final',
    select: 'Sélectionner',
    continue: 'Continue',
    filters: 'Filtres',
    administration: 'Administration',
    community: 'Communauté',
    news: 'Actualités',
    membership: 'Adhésions',
    accounting: 'Comptabilité',
  },
  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    election: {
      name: 'election',
      label: 'Élections',
      menu: 'Élections',
      exporterFileName: 'exportacion_election',
      list: {
        menu: 'Élections',
        title: 'Élections',
      },
      create: {
        success: 'Élection enregistré avec Succès',
      },
      update: {
        success: 'Élection enregistré avec Succès',
      },
      destroy: {
        success: 'Élection supprimé avec Succès',
      },
      destroyAll: {
        success: 'Élection(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Élection',
      },
      fields: {
        id: 'Id',
        name: 'Nom',
        members: 'Membres',
        startDateRange: 'Date de début',
        startDate: 'Date de début',
        endDateRange: 'Date de fin',
        endDate: 'Date de fin',
        pv: 'Pv',
        objectifs: 'Objectifs',
        association: 'Association',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Élection',
      },
      view: {
        title: 'Afficher Élection',
      },
      importer: {
        title: 'Importer Élections',
        fileName: 'election_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
      },
    },

    association: {
      name: 'association',
      label: 'Associations',
      menu: 'Associations',
      exporterFileName: 'exportacion_association',
      list: {
        menu: 'Associations',
        title: 'Associations',
      },
      create: {
        success: 'Association enregistré avec Succès',
      },
      update: {
        success: 'Association enregistré avec Succès',
      },
      destroy: {
        success: 'Association supprimé avec Succès',
      },
      destroyAll: {
        success: 'Association(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Association',
      },
      fields: {
        id: 'Id',
        name: 'Nom',
        logo: 'Logo',
        email: 'Email',
        phone: 'Numéro de téléphone',
        postalCodeRange: 'Code Postale',
        postalCode: 'Code Postale',
        city: 'Cité',
        country: 'Pays',
        admins: 'Admins',
        elections: 'Élections',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Association',
      },
      view: {
        title: 'Afficher Association',
      },
      importer: {
        title: 'Importer Associations',
        fileName: 'association_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
      },
    },

    newsCategory: {
      name: 'newsCategory',
      label: 'Catégories',
      menu: 'Catégories',
      exporterFileName: 'exportacion_ActualitésCategory',
      list: {
        menu: 'Catégories',
        title: 'Catégories',
      },
      create: {
        success: 'Catégorie enregistré avec Succès',
      },
      update: {
        success: 'Catégorie enregistré avec Succès',
      },
      destroy: {
        success: 'Catégorie supprimé avec Succès',
      },
      destroyAll: {
        success: 'Catégorie(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Catégorie',
      },
      fields: {
        id: 'Id',
        name: 'Nom',
        description: 'Déscription',
        news: 'Actualités',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Catégorie',
      },
      view: {
        title: 'Afficher Catégorie',
      },
      importer: {
        title: 'Importer Catégories',
        fileName: 'ActualitésCatégorie_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
      },
    },

    newsTag: {
      name: 'newsTag',
      label: 'Tags',
      menu: 'Tags',
      exporterFileName: 'exportacion_ActualitésTag',
      list: {
        menu: 'Tags',
        title: 'Tags',
      },
      create: {
        success: 'Tag enregistré avec Succès',
      },
      update: {
        success: 'Tag enregistré avec Succès',
      },
      destroy: {
        success: 'Tag supprimé avec Succès',
      },
      destroyAll: {
        success: 'Tag(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Tag',
      },
      fields: {
        id: 'Id',
        name: 'Nom',
        description: 'Déscription',
        news: 'Actualités',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Tag',
      },
      view: {
        title: 'Afficher Tag',
      },
      importer: {
        title: 'Importer Tags',
        fileName: 'ActualitésTag_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
      },
    },

    news: {
      name: 'news',
      label: 'Actualités',
      menu: 'Actualités',
      exporterFileName: 'exportacion_Actualités',
      list: {
        menu: 'Actualités',
        title: 'Actualités',
      },
      create: {
        success: 'Actualité enregistré avec Succès',
      },
      update: {
        success: 'Actualité enregistré avec Succès',
      },
      destroy: {
        success: 'Actualité supprimé avec Succès',
      },
      destroyAll: {
        success: 'Actualité(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Actualité',
      },
      fields: {
        id: 'Id',
        name: 'Nom',
        type: 'Type',
        shortDescription: 'Déscription',
        description: 'Détails',
        image: 'Image',
        attachements: 'Attachements',
        category: 'Catégorie',
        tags: 'Tags',
        published: 'Publié',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        type: {
          news: 'Actualités',
          appelOffre: "Appel d'offre",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Actualité',
      },
      view: {
        title: 'Afficher Actualité',
      },
      importer: {
        title: 'Importer Actualités',
        fileName: 'Actualités_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
      },
    },

    partner: {
      name: 'partner',
      label: 'Partenaires',
      menu: 'Partenaires',
      exporterFileName: 'exportacion_partner',
      list: {
        menu: 'Partenaires',
        title: 'Partenaires',
      },
      create: {
        success: 'Partenaire enregistré avec Succès',
      },
      update: {
        success: 'Partenaire enregistré avec Succès',
      },
      destroy: {
        success: 'Partenaire supprimé avec Succès',
      },
      destroyAll: {
        success: 'Partenaire(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Partenaire',
      },
      fields: {
        id: 'Id',
        acronym: 'Acronyme',
        name: 'Nom',
        email: 'Email',
        logo: 'Logo',
        postalAddress: 'Addresse Postale',
        postalCode: 'Code Postale',
        city: 'Cité',
        country: 'Pays',
        members: 'Membres',
        type: 'Type',
        group: 'Groupe',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        type: {
          association: 'Association',
          funder: 'Bailleur de fonds',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Partenaire',
      },
      view: {
        title: 'Afficher Partenaire',
      },
      importer: {
        title: 'Importer Partenaires',
        fileName: 'partner_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
      },
    },

    group: {
      name: 'group',
      label: 'Groupes',
      menu: 'Groupes',
      exporterFileName: 'exportacion_groupe',
      list: {
        menu: 'Groupes',
        title: 'Groupes',
      },
      create: {
        success: 'Groupe enregistré avec Succès',
      },
      update: {
        success: 'Groupe enregistré avec Succès',
      },
      destroy: {
        success: 'Groupe supprimé avec Succès',
      },
      destroyAll: {
        success: 'Groupe(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Groupe',
      },
      fields: {
        id: 'Id',
        name: 'Nom',
        logo: 'Logo',
        admin: 'Admin',
        members: 'Membres',
        partners: 'Partenaires',
        type: 'Type',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        type: {
          administrative: 'Administrative',
          cultural: 'Culturel',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouveau Groupe',
      },
      view: {
        title: 'Afficher Groupe',
      },
      importer: {
        title: 'Importer Groupes',
        fileName: 'groupe_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
      },
    },

    formule: {
      name: 'formule',
      label: 'Formules',
      menu: 'Formules',
      exporterFileName: 'exportacion_formule',
      list: {
        menu: 'Formules',
        title: 'Formules',
      },
      create: {
        success: 'Formule enregistré avec Succès',
      },
      update: {
        success: 'Formule enregistré avec Succès',
      },
      destroy: {
        success: 'Formule supprimé avec Succès',
      },
      destroyAll: {
        success: 'Formule(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Formule',
      },
      fields: {
        id: 'Id',
        name: 'Nom',
        description: 'Déscription',
        amountRange: 'Montant',
        amount: 'Montant',
        membership: 'Adhésion',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Formule',
      },
      view: {
        title: 'Afficher Formule',
      },
      importer: {
        title: 'Importer Formules',
        fileName: 'formule_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
      },
    },

    membership: {
      name: 'membership',
      label: 'Adhésions',
      menu: 'Adhésions',
      exporterFileName: 'exportacion_membership',
      list: {
        menu: 'Adhésions',
        title: 'Adhésions',
      },
      create: {
        success: 'Adhésion enregistré avec Succès',
      },
      update: {
        success: 'Adhésion enregistré avec Succès',
      },
      destroy: {
        success: 'Adhésion supprimé avec Succès',
      },
      destroyAll: {
        success: 'Adhésion(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Adhésion',
      },
      fields: {
        id: 'Id',
        status: 'Statut',
        paymentMethod: 'Mode de paiement',
        formule: 'Formule',
        attachements: 'Attachements',
        member: 'Membre',
        campaign: 'Campagne',
        amountRange: 'Montant',
        amount: 'Montant',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        status: {
          paid: 'Payé',
          waiting: 'En attente',
        },
        paymentMethod: {
          cash: 'En espèces',
          check: 'Chèque',
          bank: 'Banque',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Adhésion',
      },
      view: {
        title: 'Afficher Adhésion',
      },
      importer: {
        title: 'Importer Adhésions',
        fileName: 'membership_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
      },
    },

    campaign: {
      name: 'campaign',
      label: 'Campagnes',
      menu: 'Campagnes',
      exporterFileName: 'exportacion_campaign',
      list: {
        menu: 'Campagnes',
        title: 'Campagnes',
      },
      create: {
        success: 'Campagne enregistré avec Succès',
      },
      update: {
        success: 'Campagne enregistré avec Succès',
      },
      destroy: {
        success: 'Campagne supprimé avec Succès',
      },
      destroyAll: {
        success: 'Campagne(s) supprimé avec Succès',
      },
      edit: {
        title: 'Éditer Campagne',
      },
      fields: {
        id: 'Id',
        name: 'Nom',
        membership: 'Adhésion',
        status: 'Statut',
        yearRange: 'Année',
        year: 'Année',
        startDateRange: 'Date de début',
        startDate: 'Date de début',
        endDateRange: 'Date de fin',
        endDate: 'Date de fin',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        status: {
          published: 'Publié',
          draft: 'Brouillon',
          suspended: 'Suspendu',
          archived: 'Archivé',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Campagne',
      },
      view: {
        title: 'Afficher Campagne',
      },
      importer: {
        title: 'Importer Campagnes',
        fileName: 'campaign_import_template',
        hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace.',
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
        success: 'Objectif enregistré avec succès',
      },
      update: {
        success: 'Objectif enregistré avec succès',
      },
      destroy: {
        success: 'Objectif supprimé avec succès',
      },
      destroyAll: {
        success: 'Objectif(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Objectif',
      },
      fields: {
        id: 'Id',
        numberRange: 'Numéro',
        number: 'Numéro',
        title: 'Titre',
        description: 'Déscription',
        status: 'Statut',
        yearRange: 'Annéee',
        year: 'Annéee',
        startDateRange: 'Date de début',
        progression: 'Progrès',
        startDate: 'Date de début',
        endDateRange: 'Date de fin',
        endDate: 'Date de fin',
        election: 'Élection',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        status: {
          achieved: 'Atteint',
          waiting: 'En cours',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvel Objectif',
      },
      view: {
        title: 'Afficher Objectif',
      },
      importer: {
        title: 'Importer Objectifs',
        fileName: 'objectif_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par un espace.',
      },
    },
    entree: {
      name: 'entree',
      label: 'Entrées',
      menu: 'Entrées',
      exporterFileName: 'entree_export',
      list: {
        menu: 'Entrées',
        title: 'Entrées',
      },
      create: {
        success: 'Entrée enregistré avec succès',
      },
      update: {
        success: 'Entrée enregistré avec succès',
      },
      destroy: {
        success: 'Entrée supprimé avec succès',
      },
      destroyAll: {
        success: 'Entrée(s) supprimé avec succès',
      },
      edit: {
        title: 'Edit Entrée',
      },
      fields: {
        id: 'Id',
        type: 'Type',
        sourceLink: 'Source de revenu',
        amountRange: 'Montant',
        amount: 'Montant',
        dateRange: 'Date',
        date: 'Date',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        type: {
          'e-commerce': 'E-commerce',
          boutique: 'Boutique',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Entrée',
      },
      view: {
        title: 'Afficher Entrée',
      },
      importer: {
        title: 'Importer Entrées',
        fileName: 'entree_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par un espace.',
      },
    },

    depense: {
      name: 'depense',
      label: 'Dépenses',
      menu: 'Dépenses',
      exporterFileName: 'depense_export',
      list: {
        menu: 'Dépenses',
        title: 'Dépenses',
      },
      create: {
        success: 'Dépense enregistré avec succès',
      },
      update: {
        success: 'Dépense enregistré avec succès',
      },
      destroy: {
        success: 'Dépense supprimé avec succès',
      },
      destroyAll: {
        success: 'Dépense(s) supprimé avec succès',
      },
      edit: {
        title: 'Edit Dépense',
      },
      fields: {
        id: 'Id',
        facture: 'Facturé',
        charge: 'Charge',
        amountRange: 'Montant',
        amount: 'Montant',
        type: 'Type',
        dateRange: 'Date',
        date: 'Date',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        type: {
          salaires: 'Salaires',
          loyers: 'Loyers',
          impots: 'Impôts',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Dépense',
      },
      view: {
        title: 'Afficher Dépense',
      },
      importer: {
        title: 'Importer Dépenses',
        fileName: 'depense_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par un espace.',
      },
    },

    charge: {
      name: 'charge',
      label: 'Charges',
      menu: 'Charges',
      exporterFileName: 'charge_export',
      list: {
        menu: 'Charges',
        title: 'Charges',
      },
      create: {
        success: 'Charge enregistré avec succès',
      },
      update: {
        success: 'Charge enregistré avec succès',
      },
      destroy: {
        success: 'Charge supprimé avec succès',
      },
      destroyAll: {
        success: 'Charge(s) supprimé avec succès',
      },
      edit: {
        title: 'Éditer Charge',
      },
      fields: {
        id: 'Id',
        type: 'Type',
        amountRange: 'Montant',
        amount: 'Montant',
        depense: 'Dépense',
        createdAt: 'Créé le',
        updatedAt: 'Mis à jour le',
        createdAtRange: 'Créé le',
      },
      enumerators: {
        type: {
          salaires: 'Salaires',
          loyers: 'Loyers',
          impots: 'Impots',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'Nouvelle Charge',
      },
      view: {
        title: 'Afficher Charge',
      },
      importer: {
        title: 'Importer Charges',
        fileName: 'charge_import_template',
        hint: 'Les colonnes Fichiers/Images doivent contenir les URL des fichiers séparés par un espace.',
      },
    },
  },
  auth: {
    tenants: 'Espaces de travail',
    profile: {
      title: 'Profil',
      success: 'Profil mise à jour avec Succès',
    },
    createAnAccount: 'Créer un compte',
    rememberMe: 'Souviens-toi de moi',
    forgotPassword: 'Mot de passe oublié?',
    signin: 'Connexion',
    signup: 'Créer un compte',
    signout: 'Se déconnecter',
    alreadyHaveAnAccount:
      'Avez-vous déjà un compte? Enregistrement.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Connectez-vous avec un autre compte',
    passwordChange: {
      title: 'Changer le mot de passe',
      success: 'Le mot de passe a été changé avec succès',
      mustMatch: 'Les mots de passe doivent correspondre',
    },
    emailUnverified: {
      message:
        'Confirmez votre email à <strong>{0}</strong> pour continuer.',
      submit: 'Renvoyer la vérification par e-mail',
    },
    emptyPermissions: {
      message:
        "Vous n'avez pas encore les autorisations. Attendez que l'administrateur vous accorde des privilèges.",
    },
    passwordResetEmail: {
      message:
        'Envoyer un e-mail de réinitialisation du mot de passe',
      error: 'E-mail non reconnu',
    },
    passwordReset: {
      message: 'Réinitialisez votre mot de passe',
    },
    emailAddressVerificationEmail: {
      error: 'E-mail non reconnu',
    },
    verificationEmailSuccess:
      'E-mail de verification envoyé avec Succès',
    passwordResetEmailSuccess:
      'E-mail de réinitialisation du mot de passe envoyé correctement',
    passwordResetSuccess:
      'Le mot de passe a été changé avec succès',
    verifyEmail: {
      success: 'E-mail vérifié avec Succès.',
      message:
        'Juste un moment, votre e-mail est vérifié ...',
    },
  },
  tenant: {
    name: 'Tenant',
    label: 'Espaces de travail',
    menu: 'Espaces de travail',
    list: {
      menu: 'Espaces de travail',
      title: 'Espaces de travail',
    },
    create: {
      button: 'Créer un espace de travail',
      success: 'Espace de travail enregistré correctement',
    },
    update: {
      success: 'Espace de travail enregistré correctement',
    },
    destroy: {
      success: 'Espace de travail supprimé correctement',
    },
    destroyAll: {
      success:
        'Espaces de travail supprimé(s) correctement',
    },
    edit: {
      title: 'Éditer espace de travail',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: "Le nom de l'espace de travail",
      tenantId: 'Espace de travail',
      tenantUrl: "URL de l'espace de travail",
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nouvel espace de travail',
    },
    invitation: {
      view: 'Afficher invitations',
      invited: 'Invité',
      accept: "Accepter l'invitation",
      decline: "Rejeter l'invitation",
      declined: 'Invitation rejetée avec Succès',
      acceptWrongEmail:
        "Accepter l'invitation avec cet e-mail",
    },
    select: 'Sélectionner espace de travail',
    validation: {
      url: 'Votre URL espace de travail ne peut contenir que des lettres minuscules, des chiffres et des tirets (et doit commencer par une lettre ou un chiffre).',
    },
  },
  roles: {
    admin: {
      label: 'Administration',
      description: 'Accès complet à toutes les ressources.',
    },
    member: {
      label: 'Membre',
      description: 'Membre role access',
    },
    adherent: {
      label: 'Adhérent',
      description: 'Adhérent role access',
    },
    partner: {
      label: 'Partenaire',
      description: 'Partenaire role access',
    },
  },
  user: {
    invite: 'Invitation',
    title: 'Utilisateurs',
    menu: 'Utilisateurs',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nom complet',
      firstName: 'Prènom',
      lastName: 'Nom',
      status: 'Statut',
      disabled: 'Désactivé',
      phoneNumber: 'Numéro de téléphone',
      role: 'Rôle',
      address: 'Adresse',
      birthDate: 'Date de naissance',
      genre: 'Genre',
      createdAt: 'Créé le',
      updatedAt: 'Mis à jour le',
      roleUser: 'Rôle/Utilisateur',
      roles: 'Rôles',
      createdAtRange: 'Créé le',
      password: 'Mot de passe',
      rememberMe: 'Souviens-toi de moi',
      oldPassword: 'Mot de passe précédent',
      newPassword: 'Nouveau Mot de passe',
      newPasswordConfirmation:
        'Nouvelle confirmation de Mot de passe',
    },
    enabled: 'Autorisé',
    disabled: 'Désactivé',
    validations: {
      // eslint-disable-next-line
      email: "L'E-mail ${value} n'est pas valide",
    },
    disable: 'Désactiver',
    enable: 'Permettre',
    doEnableSuccess: 'Utilisateur Autorisé avec Succès',
    doDisableSuccess: 'Utilisateur désactivé avec Succès',
    doDisableAllSuccess:
      'Utilisateur(s) désactivé avec Succès',
    doEnableAllSuccess:
      'Utilisateur(s) autorisé(s) correctement',
    doAddSuccess:
      'Utilisateur(s) enregistré(s) correctement',
    doUpdateSuccess: 'Utilisateur enregistré avec Succès',
    genre: {
      male: 'Homme',
      female: 'Femme',
    },
    status: {
      active: 'Actif',
      invited: 'Invité',
      'empty-permissions': 'En attente de permis',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Utilisateur supprimé avec Succès',
    doDestroyAllSelectedSuccess:
      'Utilisateur(s) supprimé correctement',
    edit: {
      title: 'Éditer Utilisateur',
    },
    new: {
      title: 'Invitar Utilisateur(s)',
      titleModal: 'Nouvel Utilisateur',
      emailsHint:
        "Séparez plusieurs adresses e-mail à l'aide du caractère virgule.",
    },
    view: {
      title: 'Afficher Utilisateur',
      activity: 'Activité',
    },
    importer: {
      title: 'Importer Utilisateurs',
      fileName: 'users_import_template',
      hint: 'Les colonnes des fichiers/Les images doivent être les URL des fichiers séparés par un espace. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        "L'Utilisateur avec cet E-mail existe déjà",
      userNotFound: 'Utilisateur pas trouvé',
      disablingHimself:
        'Vous ne pouvez pas vous désactiver',
      revokingOwnPermission:
        "Vous ne pouvez pas révoquer votre propre autorisation d'administrateur",
    },
  },
  plan: {
    menu: 'Plans',
    title: 'Plans',
    free: {
      label: 'Gratuit',
      price: '$0',
    },
    growth: {
      label: 'Augmenter',
      price: '$10',
    },
    enterprise: {
      label: 'Entreprise',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actuel',
    subscribe: "S'abonner",
    manage: "Gérer l'abonnement",
    cancelAtPeriodEnd:
      'Ce plan sera annulé à la fin de la période.',
    somethingWrong:
      "Il y a un problème avec votre abonnement. Accédez à gérer l'abonnement pour plus de détails.",
    notPlanUser:
      "Vous n'êtes pas l'administrateur de cet abonnement.",
    demoHintHtml:
      'Astuce : utilisez ces <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> pour la démo.',
  },
  auditLog: {
    menu: 'AuditLog',
    title: 'AuditLog',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Séparez plusieurs entités avec le caractère virgule.',
    fields: {
      id: 'Id',
      timestampRange: 'Periode',
      entityName: 'Nom',
      entityNames: 'Noms',
      entityId: 'IDs',
      action: 'Action',
      values: 'Valeurs',
      timestamp: 'Date',
      createdByEmail: "Email de l'Utilisateur",
    },
  },
  settings: {
    title: 'Réglages',
    menu: 'Réglages',
    save: {
      success:
        'Configuration enregistrée avec Succès. La page se rechargera dans {0} secondes pour que les modifications prennent effet.',
    },
    fields: {
      theme: 'Thème',
      logos: 'Logo',
      backgroundImages: 'Image de fond',
    },
    colors: {
      default: 'Sombre',
      light: 'Claire',
      cyan: 'Cian',
      'geek-blue': 'Bleu geek',
      gold: 'Or',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Vert polaire',
      purple: 'Mauve',
      red: 'Rouge',
      volcano: 'Volcan',
      yellow: 'Jaune',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message:
      'Cette page utilise de fausses données à des fins de démonstration uniquement. Vous pouvez le modifier dans frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Jour',
      red: 'Rouge',
      green: 'Vert',
      yellow: 'Jaune',
      grey: 'Gris',
      blue: 'Bleu',
      orange: 'Orange',
      months: {
        '1': 'Janvier',
        '2': 'Février',
        '3': 'MarS',
        '4': 'Avril',
        '5': 'Mai',
        '6': 'Juin',
        '7': 'Juillet',
        '8': 'Août',
        '9': 'Septembre',
        '10': 'Octobre',
        '11': 'Novembre',
        '12': 'Décembre',
      },
      eating: 'Mangeant',
      drinking: 'Buvant',
      sleeping: 'Dormant',
      designing: 'Conception',
      coding: 'Codage',
      cycling: 'Cyclisme',
      running: 'Coiurir',
      customer: 'Client',
    },
  },
  errors: {
    '403': "Désolé, vous n'avez pas accès à cette page",
    '404':
      "Désolé, la page que vous avez visitée n'existe pas",
    '500': 'Désolé, le serveur signale une erreur',
    '429':
      'Trop de demandes. Veuillez essayer Nouveau plus tard.',
    backToHome: "Revenir à la page d'accueil",
    forbidden: {
      message: 'Interdit',
    },
    validation: {
      message: "Une erreur s'est produite",
    },
    defaultErrorMessage: 'Oups! Une erreur est survenue',
  },

  preview: {
    error:
      "Désolé, cette opération n'est pas autorisée en mode aperçu.",
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: "${path} n'est pas valide",
      required: '${path} est obligatoire',
      oneOf:
        "${path} doit être l'une des valeurs suivantes : ${values}",
      notOneOf:
        "${path} ne doit pas être l'une des valeurs suivantes : ${values}",
      notType: ({ path, type, value, originalValue }) => {
        return `${path} doit être un ${type}`;
      },
    },
    string: {
      length:
        '${path} doit avoir exactement ${length} caractères',
      min: '${path} doit avoir au moins ${min} caractères',
      max: '${path} doit avoir un maximum ${max} caractères',
      matches:
        '${path} doit correspondre avec ce qui suit: "${regex}"',
      email: '${path} doit être un email valide',
      url: '${path} doit être une URL valide',
      trim: '${path} doit être une chaîne coupée',
      lowercase:
        '${path} doit être une chaîne en minuscule',
      uppercase:
        '${path} doit être une chaîne en majuscule',
      selected: '${path} doit être sélectionné',
    },
    number: {
      min: '${path} doit être supérieur ou égal à ${min}',
      max: '${path} doit être inférieur ou égal à ${max}',
      lessThan: '${path} doit être inférieur à ${less}',
      moreThan: '${path} doit être supérieur à ${more}',
      notEqual:
        '${path} ne doit pas être égal à ${notEqual}',
      positive: '${path} doit être un nombre positif',
      negative: '${path} doit être un nombre négatif',
      integer: '${path} doit être un entier',
    },
    date: {
      min: 'La campagne ${path} doit être après à ${min}',
      max: 'La campagne ${path} doit être précédent à ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        "La campagne ${path} ne peut pas avoir de clés non spécifiées dans le formulaire d'objet",
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} est obligatoire`
          : `'La campagne ${path} doit avoir au moins ${min} éléments`,
      max: 'La campagne ${path} doit avoir éléments inférieur ou égal à ${max}',
    },
  },
  fileUploader: {
    upload: 'Télécharger',
    image: 'Vous devez télécharger une image',
    size: 'Le fichier est très volumineux. La taille maximale autorisée est {0}',
    formats: 'Format invalide. doit être un de: {0}.',
  },
  importer: {
    line: 'Ligne',
    status: 'Statut',
    pending: 'En attente',
    imported: 'Importé',
    error: 'Erreur',
    total: '{0} importé, {1} en attente y {2} avec erreur',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      "Ne quittez pas cette page ou l'importation s'arrêtera.",
    completed: {
      success:
        'Importation terminée. Toutes les lignes ont été importées correctement.',
      someErrors:
        "Traitement terminé, mais certaines lignes n'ont pas pu être importées.",
      allErrors:
        "L'importation a échoué. Il n'y a pas de lignes valides.",
    },
    form: {
      downloadTemplate: 'Télécharger le modèle',
      hint: 'Cliquez ou faites glisser le fichier dans cette zone pour continuer.',
    },
    list: {
      discardConfirm:
        'Tu es sûr? Les données non importées seront perdues.',
    },
    errors: {
      invalidFileEmpty: 'Le fichier est vide',
      invalidFileExcel:
        'Seuls les fichiers de Excel(.xlsx)',
      invalidFileUpload:
        "Fichier non valide. Assurez-vous d'utiliser la dernière version du modèle.",
      importHashRequired:
        "Le hachage d'importation est requis",
      importHashExistent:
        'Les données ont déjà été importées',
    },
  },

  autocomplete: {
    loading: 'Chargement...',
    noOptions: 'Données introuvables',
  },
  imagesViewer: {
    noImage: 'Sans photo',
  },
  table: {
    noData: 'Aucun enregistrement trouvé',
    loading: 'Chargement...',
  },
  pagination: {
    items_per_page: '/ page',
    jump_to: 'Ir',
    jump_to_confirm: 'confirmer',
    page: '',

    prev_page: 'Page précédente',
    next_page: 'Page suivante',
    prev_5: '5 pages précédentes',
    next_5: '5 pages suivantes',
    prev_3: '3 pages précédentes',
    next_3: '3 pages suivantes',
  },
};

export default es;
