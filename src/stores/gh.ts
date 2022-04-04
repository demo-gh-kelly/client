import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { useGHUser } from 'stores/gh-user';
import { SessionStorage } from 'quasar';
import { useGHRepos } from './gh-repos';
import to from 'await-to-js';

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

    async authenticate(code: string): Promise<CodeTrasmissionError | null> {
      const body = { code };

      const [err, response] = await to(api.post('/github', body));
      if (err) {
        return new CodeTrasmissionError();
      }

      useGHUser().update(response.data.user);

      return null;
    },
  },
});
