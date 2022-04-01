/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;

    GITHUB_OAUTH_GET: string;
    GITHUB_OAUTH_POST: string;
    GITHUB_OAUTH_REDIRECT_URI: string;

    DEMO_KELLY_CLIENT_ID: string;
    DEMO_KELLY_CLIENT_SECRET: string;
  }
}
