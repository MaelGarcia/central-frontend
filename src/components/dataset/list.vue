<!--
Copyright 2022 ODK Central Developers
See the NOTICE file at the top-level directory of this distribution and at
https://github.com/getodk/central-frontend/blob/master/NOTICE.

This file is part of ODK Central. It is subject to the license terms in
the LICENSE file found in the top-level directory of this distribution and at
https://www.apache.org/licenses/LICENSE-2.0. No part of ODK Central,
including this file, may be copied, modified, propagated, or distributed
except according to the terms contained in the LICENSE file.
-->
<template>
  <div id="dataset-list">
    <page-section>
      <template #heading>
        <h1>{{ $t('resource.datasets') }}</h1>
      </template>
      <template #body>
        <dataset-table/>
        <loading :state="datasets.initiallyLoading"/>
        <dataset-introduction/>
      </template>
    </page-section>
  </div>
</template>

<script>
export default {
  name: 'DatasetList'
};
</script>
<script setup>
import DatasetIntroduction from './introduction.vue';
import DatasetTable from './table.vue';
import Loading from '../loading.vue';
import PageSection from '../page/section.vue';

import { apiPaths } from '../../util/request';
import { noop } from '../../util/util';
import { useRequestData } from '../../request-data';

const props = defineProps({
  projectId: {
    type: String,
    required: true
  }
});

const { datasets } = useRequestData();
datasets.request({
  url: apiPaths.datasets(props.projectId),
  extended: true,
  resend: false
}).catch(noop);
</script>
