import { defineStore } from 'pinia';

export interface GHRepo {
  id: 324551208;
  node_id: 'MDEwOlJlcG9zaXRvcnkzMjQ1NTEyMDg=';
  name: '.dotfiles';
  full_name: 'didof/.dotfiles';
  private: false;
  owner: {
    login: 'didof';
    id: 57268193;
    node_id: 'MDQ6VXNlcjU3MjY4MTkz';
    avatar_url: 'https://avatars.githubusercontent.com/u/57268193?v=4';
    gravatar_id: '';
    url: 'https://api.github.com/users/didof';
    html_url: 'https://github.com/didof';
    followers_url: 'https://api.github.com/users/didof/followers';
    following_url: 'https://api.github.com/users/didof/following{/other_user}';
    gists_url: 'https://api.github.com/users/didof/gists{/gist_id}';
    starred_url: 'https://api.github.com/users/didof/starred{/owner}{/repo}';
    subscriptions_url: 'https://api.github.com/users/didof/subscriptions';
    organizations_url: 'https://api.github.com/users/didof/orgs';
    repos_url: 'https://api.github.com/users/didof/repos';
    events_url: 'https://api.github.com/users/didof/events{/privacy}';
    received_events_url: 'https://api.github.com/users/didof/received_events';
    type: 'User';
    site_admin: false;
  };
  html_url: 'https://github.com/didof/.dotfiles';
  description: "The Christmas present I didn't know I needed, with love from my brother (https://github.com/search?q=leodido)";
  fork: false;
  url: 'https://api.github.com/repos/didof/.dotfiles';
  forks_url: 'https://api.github.com/repos/didof/.dotfiles/forks';
  keys_url: 'https://api.github.com/repos/didof/.dotfiles/keys{/key_id}';
  collaborators_url: 'https://api.github.com/repos/didof/.dotfiles/collaborators{/collaborator}';
  teams_url: 'https://api.github.com/repos/didof/.dotfiles/teams';
  hooks_url: 'https://api.github.com/repos/didof/.dotfiles/hooks';
  issue_events_url: 'https://api.github.com/repos/didof/.dotfiles/issues/events{/number}';
  events_url: 'https://api.github.com/repos/didof/.dotfiles/events';
  assignees_url: 'https://api.github.com/repos/didof/.dotfiles/assignees{/user}';
  branches_url: 'https://api.github.com/repos/didof/.dotfiles/branches{/branch}';
  tags_url: 'https://api.github.com/repos/didof/.dotfiles/tags';
  blobs_url: 'https://api.github.com/repos/didof/.dotfiles/git/blobs{/sha}';
  git_tags_url: 'https://api.github.com/repos/didof/.dotfiles/git/tags{/sha}';
  git_refs_url: 'https://api.github.com/repos/didof/.dotfiles/git/refs{/sha}';
  trees_url: 'https://api.github.com/repos/didof/.dotfiles/git/trees{/sha}';
  statuses_url: 'https://api.github.com/repos/didof/.dotfiles/statuses/{sha}';
  languages_url: 'https://api.github.com/repos/didof/.dotfiles/languages';
  stargazers_url: 'https://api.github.com/repos/didof/.dotfiles/stargazers';
  contributors_url: 'https://api.github.com/repos/didof/.dotfiles/contributors';
  subscribers_url: 'https://api.github.com/repos/didof/.dotfiles/subscribers';
  subscription_url: 'https://api.github.com/repos/didof/.dotfiles/subscription';
  commits_url: 'https://api.github.com/repos/didof/.dotfiles/commits{/sha}';
  git_commits_url: 'https://api.github.com/repos/didof/.dotfiles/git/commits{/sha}';
  comments_url: 'https://api.github.com/repos/didof/.dotfiles/comments{/number}';
  issue_comment_url: 'https://api.github.com/repos/didof/.dotfiles/issues/comments{/number}';
  contents_url: 'https://api.github.com/repos/didof/.dotfiles/contents/{+path}';
  compare_url: 'https://api.github.com/repos/didof/.dotfiles/compare/{base}...{head}';
  merges_url: 'https://api.github.com/repos/didof/.dotfiles/merges';
  archive_url: 'https://api.github.com/repos/didof/.dotfiles/{archive_format}{/ref}';
  downloads_url: 'https://api.github.com/repos/didof/.dotfiles/downloads';
  issues_url: 'https://api.github.com/repos/didof/.dotfiles/issues{/number}';
  pulls_url: 'https://api.github.com/repos/didof/.dotfiles/pulls{/number}';
  milestones_url: 'https://api.github.com/repos/didof/.dotfiles/milestones{/number}';
  notifications_url: 'https://api.github.com/repos/didof/.dotfiles/notifications{?since,all,participating}';
  labels_url: 'https://api.github.com/repos/didof/.dotfiles/labels{/name}';
  releases_url: 'https://api.github.com/repos/didof/.dotfiles/releases{/id}';
  deployments_url: 'https://api.github.com/repos/didof/.dotfiles/deployments';
  created_at: '2020-12-26T12:32:17Z';
  updated_at: '2020-12-26T12:33:57Z';
  pushed_at: '2020-12-26T12:33:54Z';
  git_url: 'git://github.com/didof/.dotfiles.git';
  ssh_url: 'git@github.com:didof/.dotfiles.git';
  clone_url: 'https://github.com/didof/.dotfiles.git';
  svn_url: 'https://github.com/didof/.dotfiles';
  homepage: null;
  size: 24;
  stargazers_count: 0;
  watchers_count: 0;
  language: 'Shell';
  has_issues: true;
  has_projects: true;
  has_downloads: true;
  has_wiki: true;
  has_pages: false;
  forks_count: 0;
  mirror_url: null;
  archived: false;
  disabled: false;
  open_issues_count: 0;
  license: null;
  allow_forking: true;
  is_template: false;
  topics: [];
  visibility: 'public';
  forks: 0;
  open_issues: 0;
  watchers: 0;
  default_branch: 'master';
}

export const useGHRepos = defineStore('GHRepos', {
  state: () => ({
    value: [] as GHRepo[],
  }),

  getters: {
    quantity(state) {
      return state.value.length;
    },
  },

  actions: {
    add(...repos: GHRepo[]) {
      this.value.push(...repos);
    },
  },
});
