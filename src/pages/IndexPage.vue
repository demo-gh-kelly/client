<template>
  <q-page class="row items-center justify-evenly">
    <GithubAppOAuthButton />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GithubAppOAuthButton from 'components/buttons/GithubAppOAuthButton.vue';

export default defineComponent({
  name: 'IndexPage',

  components: { GithubAppOAuthButton },
});
</script>
