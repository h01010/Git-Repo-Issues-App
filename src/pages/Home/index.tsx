import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { useEffect } from 'react';
import Title from '../../components/Title';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import Table from './components/Table';
import { HomeBox, IssueBox } from './style';

const Home = observer(() => {
  const { issueStore } = useStore();
  const { issuesWithEssentialKey, getIssueList } = issueStore;
  useEffect(() => {
    getIssueList();
  }, []);

  return (
    <HomeBox>
      <Title text="이슈정리" />
      <IssueBox>
        <Filter />
        <Table issues={issuesWithEssentialKey} />
        <Pagination />
      </IssueBox>
    </HomeBox>
  );
});

export default Home;
