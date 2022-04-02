import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useGHUser } from 'stores/gh-user';
import { SessionStorage } from 'quasar';
import { useGHRepos } from './gh-repos';

abstract class GHError extends Error {}

export class StateValidationError extends GHError {}

export class CodeTrasmissionError extends GHError {}

export class RetrieveRepoError extends GHError {}

export const useGH = defineStore('GH', {
  state: () => ({
    isError: false,
    errorMessage: '',
  }),

  actions: {
    validateState(state: string): StateValidationError | null {
      const sessionStorageState = SessionStorage.getItem('state');
      SessionStorage.remove('state');

      if (state == null || state.length === 0) {
        return new StateValidationError();
      }

      if (state !== sessionStorageState) {
        return new StateValidationError();
      }

      return null;
    },

    async sendCodeToServer(code: string): Promise<CodeTrasmissionError | null> {
      const body = { code };

      const response = await api.post('/github', body);
      if (false /** add await-to-js, handle err */) {
        return new CodeTrasmissionError();
      }

      const GHUser = useGHUser();
      GHUser.update(response.data);

      return null;
    },

    async retrieveUserAllRepos() {
      const GHUser = useGHUser();
      const GHRepos = useGHRepos();

      const body = { login: GHUser.value.login };

      const response = await api.post('/github/repos', body);
      if (false /** add await-to-js, handle err */) {
        return new RetrieveRepoError();
      }

      GHRepos.add(response.data);
    },
  },
});
