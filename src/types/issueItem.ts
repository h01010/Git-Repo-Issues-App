export interface issueItem {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: any[]
  state: string
  locked: boolean
  assignee: any
  assignees: any[]
  milestone: any
  comments: number
  created_at: string
  updated_at: string
  closed_at: any
  author_association: string
  active_lock_reason: any
  body: any
  reactions: Reactions
  timeline_url: string
  performed_via_github_app: any
  state_reason: any
}

export interface issueEssentialItem {
  [key: string]: string;
  id: string;
  url: string;
  comments: string;
  created_at: string;
  updated_at: string;
  user: string;
}

export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Reactions {
  url: string
  total_count: number
  "+1": number
  "-1": number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}
