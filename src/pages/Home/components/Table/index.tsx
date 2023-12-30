import { IssueTable } from './style';

const Table = () => {
  const headers = [
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

  interface itemInterface {
    [index: string]: string;
    title: string;
    user: string;
    created_at: string;
    updated_at: string;
    comments: string;
  }

  const items: itemInterface[] = [
    {
      title: '이슈 번호 1',
      user: 'asd1123dd',
      created_at: '2013-05-29',
      updated_at: '2023-04-13',
      comments: '0',
    },
    {
      title: '이슈 번호 2',
      user: 'dfadsfadsf',
      created_at: '2013-05-29',
      updated_at: '2023-04-13',
      comments: '0',
    },
    {
      title: '이슈 번호 3',
      user: 'dfsdf',
      created_at: '2013-05-29',
      updated_at: '2023-04-13',
      comments: '0',
    },
  ];

  return (
    <IssueTable>
      <thead>
        <tr>
          <th>번호</th>
          {headers.map((header) => (
            <th key={header.value}>{header.text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td key={index}>{index + 1}</td>
            {headerKey.map((key) => (
              <td key={key + index}>{item[key] || ''}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </IssueTable>
  );
};

export default Table;
