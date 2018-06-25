/*
Copyright 2017 ODK Central Developers
See the NOTICE file at the top-level directory of this distribution and at
https://github.com/opendatakit/central-frontend/blob/master/NOTICE.

This file is part of ODK Central. It is subject to the license terms in
the LICENSE file found in the top-level directory of this distribution and at
https://www.apache.org/licenses/LICENSE-2.0. No part of ODK Central,
including this file, may be copied, modified, propagated, or distributed
except according to the terms contained in the LICENSE file.
*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import pluralize from 'pluralize';

import GlobalComponents from './global-components';
import { formatDate, uniqueSequence } from './util';
import { logOut } from './session';
import './jquery';
import './bootstrap';

Vue.use(VueRouter);
Vue.config.productionTip = false;
GlobalComponents.register();

// Utilities
// https://vuejs.org/v2/cookbook/adding-instance-properties.html
Vue.prototype.$formatDate = formatDate;
Vue.prototype.$http = axios.create({ baseURL: '/api/v1' });
Vue.prototype.$logger = console;
Vue.prototype.$pluralize = pluralize;
Vue.prototype.$uniqueId = uniqueSequence();

// Global state
// The following prototype properties store global state. Components can set
// these properties using `this`, rather than directly accessing the prototype.
// For example, `this.$alert = ...` from within a component sets the $alert
// prototype property.
const STATE_PROPERTIES = ['session', 'alert'];
for (const name of STATE_PROPERTIES) {
  const $name = `$${name}`;
  const $_name = `$_${name}`; // eslint-disable-line camelcase
  Object.defineProperty(Vue.prototype, $name, {
    get() { return Vue.prototype[$_name]; },
    set(value) { Vue.prototype[$_name] = value; }
  });
}
logOut();
Vue.prototype.$alert = null;