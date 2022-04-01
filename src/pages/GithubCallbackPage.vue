<template>
  <q-page class="row items-center justify-evenly"> Loading </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from 'boot/axios';
import { useGHUser } from 'stores/gh-user';
import { Loading, QSpinnerGears } from 'quasar';
import { SessionStorage } from 'quasar';

export default defineComponent({
  name: 'GithubCallbackPage',

  setup() {
    Loading.show({
      spinner: QSpinnerGears,
    });

    const route = useRoute();
    const router = useRouter();

    const { code, state } = route.query;

    if (!code || !state || state !== SessionStorage.getItem('state')) {
      router.replace('/');
      return;
    }

    SessionStorage.remove('state');

    (async () => {
      const body = { code };

      const response = await api.post('/github', body);

      const GHUser = useGHUser();
      GHUser.spread(response.data);

      router.replace('/dashboard');
    })();
  },
});
</script>
