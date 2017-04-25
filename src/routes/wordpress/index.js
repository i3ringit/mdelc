/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Wordpress from './Wordpress';

const title = 'Marcos del Cristo - Wordpress';

export default {

  path: '/projects/wordpress',

  action() {
    return {
      title,
      component: <Layout><Wordpress title={title} /></Layout>,
    };
  },
};
