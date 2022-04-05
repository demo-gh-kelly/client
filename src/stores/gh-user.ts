import to from 'await-to-js';
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

interface GHUserState {
  login: string;
  id: number | null;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean | null;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string;
  hireable: boolean | null;
  bio: string;
  twitter_username: string;
  public_repos: number | null;
  public_gists: number | null;
  followers: number | null;
  following: number | null;
  created_at: string;
  updated_at: string;
}

function makeEmptyValue(): GHUserState {
  return {
    login: '',
    id: null,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: null,
    name: '',
    company: null,
    blog: '',
    location: '',
    email: '',
    hireable: null,
    bio: '',
    twitter_username: '',
    public_repos: null,
    public_gists: null,
    followers: null,
    following: null,
    created_at: '',
    updated_at: '',
  };
}

export const useGHUser = defineStore('GHUser', {
  state: () =>
    ({
      updated_at: null,
      value: makeEmptyValue(),
    } as {
      updated_at: Date | null;
      value: GHUserState;
    }),

  getters: {
    isFresh(state) {
      return state.updated_at;
    },

    fullname(state) {
      return state.value.name;
    },
    avatarUrl(state) {
      return state.value.avatar_url;
    },
  },

  actions: {
    update(obj: GHUserState) {
      this.value = obj;
      this.updated_at = new Date();
    },

    async refresh() {
      const [err, response] = await to(
        api.get('/user', { withCredentials: true })
      );

      if (err) {
        return new Error(); // kick out
      }

      this.update(response!.data.user);
    },
  },
});
