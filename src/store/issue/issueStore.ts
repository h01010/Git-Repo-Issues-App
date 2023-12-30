import { makeAutoObservable, runInAction } from 'mobx';
import issueService from '../../services/issueService';
import { issueItem, issueEssentialItem } from '../../types/issueItem';

class IssueStore {
  issues: issueItem[] = [];

  issuesWithEssentialKey: issueEssentialItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getIssueList = async () => {
    try {
      issueService.getIssues().then((res) => {
        this.getIssueWithEssentialKey(res.data);
        runInAction(() => {
          this.issues = res.data;
        });
      });
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };

  getIssueWithEssentialKey = async (issues: issueItem[]) => {
    try {
      const filteredIssues: issueEssentialItem[] = [];
      issues.forEach((issue, index) => {
        const newIssueItem = {
          id: (index + 1).toString(),
          title: issue.title,
          url: issue.url,
          comments: issue.comments.toString(),
          created_at: issue.created_at.split('T')[0],
          updated_at: issue.updated_at.split('T')[0],
          user: issue.user.login,
        };
        filteredIssues.push(newIssueItem);
      });
      runInAction(() => {
        this.issuesWithEssentialKey = filteredIssues;
      });
      return true;
    } catch (error) {
      console.error('Error: ', error);
      return error;
    }
  };
}

export default IssueStore;
