/*
Copyright 2021 Conectados Developers
See the NOTICE file at the top-level directory of this distribution and at
https://github.com/getodk/central-frontend/blob/master/NOTICE.

This file is part of Conectados. It is subject to the license terms in
the LICENSE file found in the top-level directory of this distribution and at
https://www.apache.org/licenses/LICENSE-2.0. No part of Conectados,
including this file, may be copied, modified, propagated, or distributed
except according to the terms contained in the LICENSE file.
*/

// eslint-disable-next-line import/prefer-default-export
export const localStore = {
  getItem(name) {
    try {
      return localStorage.getItem(name);
    } catch (e) {
      return null;
    }
  },
  setItem(name, value) {
    try {
      localStorage.setItem(name, value);
    } catch (e) {}
  },
  removeItem(name) {
    try {
      localStorage.removeItem(name);
    } catch (e) {}
  }
};
