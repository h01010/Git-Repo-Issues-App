import styled from 'styled-components';

export const IssueTable = styled.table`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  color: #5a6066;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-collapse: collapse;

  th {
    background: #f5f8fa;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 35px;
  }

  th,
  td {
    text-align: left;
  }

  th: nth-child(4),
  th: nth-child(5) {
    text-align: center;
  }

  th:first-child {
    border-radius: 8px 0px 0px 8px;
    padding-left: 12px;
  }

  th:last-child {
    border-radius: 0px 8px 8px 0px;
    padding-right: 12px;
	text-align: right;
  }

  tr td {
    padding-right: 35px;
  }

  tbody:before {
    content: '@';
    display: block;
    line-height: 8px;
    text-indent: -99999px;
  }

  tbody tr td:first-child {
    padding-left: 12px;
  }

  tbody tr td:last-child {
    padding-right: 12px;
	text-align: right;
  }

  tbody td {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  tbody td:nth-child(4),
  td:nth-child(5) {
    text-align: center;
  }
`;
