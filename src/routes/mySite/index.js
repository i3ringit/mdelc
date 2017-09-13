/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React from 'react';
import Layout from '../../components/Layout';
import MySite from './MySite';

const title = 'Marcos del Cristo - MySite';

export default {

  path: '/projects/my-site',

  action() {
    return {
      title,
      component: <Layout><MySite title={title} /></Layout>,
    };
  },
};
