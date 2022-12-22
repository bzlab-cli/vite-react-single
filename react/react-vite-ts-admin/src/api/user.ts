import request from '@/utils/request';

import { user } from './mock';

export default {
  // getCurrentUser: () => request.get<any, NSP.User>('/admin/user/info'),
  getCurrentUser: () => {
    return Promise.resolve(user);
  }
};
