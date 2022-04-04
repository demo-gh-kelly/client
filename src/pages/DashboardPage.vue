<template>
  <q-page class="column items-center justify-evenly">
    <h1>dashboard</h1>
    <p>{{ fullname }}</p>
    <img :src="avatar" :alt="fullname" />
  </q-page>
</template>

<script lang="ts">
import { useGHUser } from 'stores/gh-user';
import { useGHRepos } from 'src/stores/gh-repos';
import { defineComponent } from 'vue';
import { Loading } from 'quasar';

export default defineComponent({
  name: 'DashboardPage',

  setup() {
    const GHUser = useGHUser();
    const GHRepos = useGHRepos();

    // move this in router
    (async () => {
      await GHUser.refresh();
    })();

    Loading.hide();

    GHRepos.getInstallations();

    return {
      fullname: GHUser.fullname,
      avatar: GHUser.avatarUrl,
    };
  },
});
</script>
