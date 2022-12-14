import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {animeListPageNum} from "../../store";
import styled from "styled-components";

const PER_PAGE = 50

const Pagination = ({listLength}) => {
  const [pageNum, setPageNum] = useRecoilState(animeListPageNum)
  const [numsArr, setNumsArr] = useState([])

  useEffect(() => {
    const max = Math.ceil(listLength / PER_PAGE)
    let nums = []

    for (let i = 0; i <= max; i++) {
      nums.push(max - i)
    }

    setNumsArr(nums.sort((a, b) => a - b))

  }, [listLength])

  return (
    <StyledPagination>
      {numsArr?.length ? numsArr?.map((num) => (
        <button
          className={pageNum === num ? 'active' : ''}
          onClick={() => setPageNum(num)}
          key={num}
        >
          {num + 1}
        </button>
      )) : null}
    </StyledPagination>
  )
}

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  border-width: 2px 2px 2px 0;
  border-style: solid;
  width: max-content;
  & button {
    outline: none;
    background: transparent;
    border: none;
    border-left: 2px solid;
    width: 35px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover,
    &.active {
      background: #fae1da;
    }
  }
`

export default Pagination