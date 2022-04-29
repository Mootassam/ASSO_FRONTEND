import Roles from 'src/security/roles';

const userEnumerators = {
  status: ['active', 'invited', 'empty-permissions'],
  roles: Object.keys(Roles.values),
  genre: [
    'male',
    'female',
  ],
};

export default userEnumerators;
