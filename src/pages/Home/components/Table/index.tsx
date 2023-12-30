import { issueEssentialItem } from '../../../../types/issueItem';
import { IssueTable } from './style';

type TableProps = {
  issues: issueEssentialItem[];
};

const Table = ({ issues }: TableProps) => {
  const headers = [
    {
      text: '번호',
      value: 'id',
    },
    {
      text: '제목',
      value: 'title',
    },
    {
      text: '작성자',
      value: 'user',
    },
    {
      text: '작성일',
      value: 'created_at',
    },
    {
      text: '수정일',
      value: 'updated_at',
    },
    {
      text: '코멘트 수',
      value: 'comments',
    },
  ];

  const headerKey = headers.map((header) => header.value);

  return (
    <IssueTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.value}>{header.text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {issues.map((issue, index) => (
          <tr key={index}>
            {headerKey.map((key) => (
              <td key={key + index}>{issue[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </IssueTable>
  );
};

export default Table;
