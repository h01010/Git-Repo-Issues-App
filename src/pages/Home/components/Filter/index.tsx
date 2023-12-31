import { FilterBox } from './style';
import { IoIosArrowDown } from 'react-icons/io';

/* TODO: 필터 기능 구현 */
const Filter = () => {
  return (
    <FilterBox>
      <button className="issue__status">
        <span>이슈 상태</span>
        <IoIosArrowDown />
      </button>
      <button className="issue__sort">
        <span>작성일 순</span>
        <IoIosArrowDown />
      </button>
    </FilterBox>
  );
};

export default Filter;
