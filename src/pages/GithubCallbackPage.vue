<template>
  <q-page class="row items-center justify-evenly"> Loading </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from 'boot/axios';
import { useGHUser } from 'stores/gh-user';
import { Loading, QSpinnerGears } from 'quasar';

export default defineComponent({
  name: 'GithubCallbackPage',

  setup() {
    Loading.show({
      spinner: QSpinnerGears,
    });

    const route = useRoute();
    const router = useRouter();

    const { code } = route.query;

    if (!code) {
      router.replace('/');
      return;
    }

    (async () => {
      const githubUser = await api.post(
        '/github',
        {
          code,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const GHUser = useGHUser();
      GHUser.spread(githubUser.data);

      console.log(githubUser);

      router.replace('/dashboard');
    })();
  },
});
</script>
