/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;

    GITHUB_OAUTH_AUTHORIZE: string;

    GITHUB_APP_CLIENT_ID: string;
    GITHUB_APP_CALLBACK_URI: string;
  }
}
