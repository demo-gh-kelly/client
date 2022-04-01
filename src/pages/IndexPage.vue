<template>
  <q-page class="row items-center justify-evenly">
    <a :href="url"><h1>github</h1></a>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useURL from 'src/helpers/useURL';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const url = useURL(process.env.GITHUB_OAUTH_GET);
    url.add.clientId();

    return {
      url: url.string(),
    };
  },
});
</script>
