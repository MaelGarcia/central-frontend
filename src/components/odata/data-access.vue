<!--
Copyright 2020 ODK Central Developers
See the NOTICE file at the top-level directory of this distribution and at
https://github.com/getodk/central-frontend/blob/master/NOTICE.

This file is part of ODK Central. It is subject to the license terms in
the LICENSE file found in the top-level directory of this distribution and at
https://www.apache.org/licenses/LICENSE-2.0. No part of ODK Central,
including this file, may be copied, modified, propagated, or distributed
except according to the terms contained in the LICENSE file.
-->
<template>
  <span id="odata-data-access">
    <a class="btn btn-default"
      href="https://odkcentral.docs.apiary.io/#reference/odata-endpoints"
      target="_blank" rel="noopener">
      <span class="icon-plug"></span>{{ $t('action.apiAccess') }}
    </a>
    <button id="odata-data-access-analyze-button" type="button"
      class="btn btn-default" :aria-disabled="analyzeDisabled"
      v-tooltip.aria-describedby="analyzeDisabled ? analyzeDisabledMessage : null"
      @click="$emit('analyze')">
      <span class="icon-bar-chart"></span>{{ $t('action.analyze') }}&hellip;
    </button>
  </span>
</template>

<script>
export default {
  name: 'OdataDataAccess',
  props: {
    analyzeDisabled: Boolean,
    analyzeDisabledMessage: String
  },
  emits: ['analyze']
};
</script>

<style lang="scss">
#odata-data-access-analyze-button { margin-left: 5px; }
</style>

<i18n lang="json5">
{
  "en": {
    "action": {
      "apiAccess": "API access",
      "analyze": "Analyze via OData"
    }
  }
}
</i18n>

<!-- Autogenerated by destructure.js -->
<i18n>
{
  "cs": {
    "action": {
      "apiAccess": "Přístup k API",
      "analyze": "Analýza přes OData"
    }
  },
  "de": {
    "action": {
      "apiAccess": "API-Zugriff",
      "analyze": "Mittels OData analysieren"
    }
  },
  "es": {
    "action": {
      "apiAccess": "Acceso API",
      "analyze": "Analizar a través de OData"
    }
  },
  "fr": {
    "action": {
      "apiAccess": "Accès via l'API",
      "analyze": "Analyser via OData"
    }
  },
  "it": {
    "action": {
      "apiAccess": "accesso attraverso API",
      "analyze": "Analizzare attraverso OData"
    }
  },
  "sw": {
    "action": {
      "apiAccess": "Ufikiaji wa API",
      "analyze": "Changanua kupitia OData"
    }
  }
}
</i18n>
