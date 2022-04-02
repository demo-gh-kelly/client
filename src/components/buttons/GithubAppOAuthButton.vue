<template>
  <a :href="url">Install Github</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import random from 'src/helpers/random';
import { SessionStorage } from 'quasar';

export default defineComponent({
  name: 'GithubAppOAuthButton',

  setup() {
    const url = new URL(process.env.GITHUB_OAUTH_AUTHORIZE);
    url.searchParams.set('client_id', process.env.GITHUB_APP_CLIENT_ID);
    url.searchParams.set('redirect_uri', process.env.GITHUB_APP_CALLBACK_URI);
    const state = random();
    SessionStorage.set('state', state);
    url.searchParams.set('state', state);

    return {
      url,
    };
  },
});
</script>
