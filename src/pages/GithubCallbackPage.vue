<template>
  <q-page class="row items-center justify-evenly"> Loading </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { CodeTrasmissionError, StateValidationError, useGH } from 'stores/gh';
import { Loading, QSpinnerGears } from 'quasar';

export default defineComponent({
  name: 'GithubCallbackPage',

  setup() {
    Loading.show({
      spinner: QSpinnerGears,
    });

    const router = useRouter();
    const route = useRoute();
    const GH = useGH();
    const stateValidationError = GH.validateState(route.query.state as string);

    if (stateValidationError instanceof StateValidationError) {
      router.replace('/');
      return;
    }

    (async () => {
      const codeTransmissionError = await GH.sendCodeToServer(
        route.query.code as string
      );

      if (codeTransmissionError instanceof CodeTrasmissionError) {
        router.replace('/');
        return;
      }

      router.replace('/dashboard');
    })();
  },
});
</script>
