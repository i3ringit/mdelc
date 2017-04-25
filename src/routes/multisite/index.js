/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Multisite from './Multisite';

const title = 'Marcos del Cristo - VetMed Multisite';

export default {

  path: '/projects/vetmed-multisite',

  action() {
    return {
      title,
      component: <Layout><Multisite title={title} /></Layout>,
    };
  },
};
