<template>
  <q-page class="row items-center justify-evenly">
    <a :href="url">
      <h1>Install githubapp</h1>
    </a>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SessionStorage } from 'quasar';
import random from 'src/helpers/random';

export default defineComponent({
  name: 'IndexPage',

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
