import styled from 'styled-components';

export const FilterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .issue__status {
    display: flex;
    padding: 8px 8px 8px 14px;
    align-items: center;
    gap: 4px;
    justify-content: center;
    border-radius: 32px;
    border: 1px solid #dfe5eb;
    background: #fff;
  }

  .issue__sort {
    display: flex;
    align-items: center;
    gap: 2px;
    justify-content: center;
    border: none;
    background: white;
    color: #5a6066;
  }

  button span {
    color: #14171a;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  button path {
    width: 24px;
    height: 24px;
  }
`;
