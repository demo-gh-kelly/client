<template>
  <q-page class="column items-center justify-evenly">
    <h6>{{ fullname }}</h6>
    <!-- <img :src="avatar" :alt="fullname" /> -->

    repos: {{ reposQuantity }}

    <q-list>
      <template v-for="repo in repos" :key="repo.id">
        <q-item>
          <q-item-section>
            <q-item-label>{{ repo.name }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>
        <q-separator spaced inset />
      </template>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { useGHUser } from 'stores/gh-user';
import { useGHRepos } from 'src/stores/gh-repos';
import { computed, defineComponent } from 'vue';
import { Loading } from 'quasar';

export default defineComponent({
  name: 'DashboardPage',

  setup() {
    const GHUser = useGHUser();
    const GHRepos = useGHRepos();

    // move this in router
    (async () => {
      await GHUser.refresh();
      Loading.hide();

      await Promise.allSettled([
        GHRepos.getRepos(),
        GHRepos.getInstallations(),
      ]);
    })();

    return {
      fullname: computed(() => GHUser.fullname),
      avatar: computed(() => GHUser.avatarUrl),
      reposQuantity: computed(() => GHRepos.quantity),
      repos: computed(() => GHRepos.repos),
    };
  },
});
</script>
