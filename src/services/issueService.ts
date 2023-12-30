import { issueItem } from '../types/issueItem';
import axios from '../utils/axios';

class issueService {
  getIssues() {
    return axios.get<issueItem[]>(`/repos/h01010/Git-Repo-Issues-App/issues`);
  }
}
export default new issueService();
