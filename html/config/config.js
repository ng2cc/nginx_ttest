const WAS_IP = 'nodejs-alb-589175880.ap-northeast-1.elb.amazonaws.com';

const TYPE_INFO = {
  search: {
    params: [
      'name',
      'contactNumber',
    ],
    method: 'GET',
  },
  searchUserID: {
    params: [
      'userID',
    ],
    method: 'GET',
  },
  update: {
    params:
      [
        'userID',
        'name',
        'residentRegistrationNumber',
        'contactNumber',
        'address',
        'email',
      ],
    method: 'POST',
  },
  insert: {
    params:
      [
        'name',
        'residentRegistrationNumber',
        'contactNumber',
        'address',
        'email',
      ],
    method: 'POST',
  },
  delete: {
    params:
      [
        'userID',
      ],
    method: 'POST',
  },
};
