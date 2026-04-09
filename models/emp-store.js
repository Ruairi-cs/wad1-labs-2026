'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const empStore = {

  store: new JsonStore('./models/emp-store.json', { employee: {} }),
  collection: 'employees',


  getAppInfo() {
    return this.store.findAll(empStore.collection);
  },

  getAllEmployees() {
    return this.store.findAll(empStore.collection);
  },
};

export default empStore;
