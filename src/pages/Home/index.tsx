import Title from '../../components/Title';
import issueService from '../../services/issueService';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import Table from './components/Table';
import { HomeBox, IssueBox } from './style';

function Home() {
  console.log(issueService.getIssues());
  return (
    <HomeBox>
      <Title text="이슈정리" />
      <IssueBox>
        <Filter />
        <Table />
        <Pagination />
      </IssueBox>
    </HomeBox>
  );
}

export default Home;
