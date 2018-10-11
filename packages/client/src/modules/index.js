import defaultRouter from './defaultRouter';
import i18n from './i18n';
import counter from './counter';
import post from './post';
import upload from './upload';
import user from './user';
import payments from './payments';
import contact from './contact';
import pageNotFound from './pageNotFound';
import pagination from './pagination';
import layout from './layout';
import './favicon';

import ClientModule from './ClientModule';

export default new ClientModule(
  defaultRouter,
  counter,
  post,
  upload,
  contact,
  pagination,
  layout,
  payments,
  user,
  i18n,
  pageNotFound
);
