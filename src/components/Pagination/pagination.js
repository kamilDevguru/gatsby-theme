import * as React from 'react';
import { Link } from 'gatsby';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import {
  PaginationWrapper,
  PrevPage,
  NextPage,
  PageNumber,
} from './pagination.style';

const Pagination = ({
  prevLink,
  nextLink,
  currentPage,
  totalPage,
  className,
  ...props
}) => {
  return (
    <PaginationWrapper {...props} className={className}>
      <PrevPage>
        {prevLink && (
          <Link to={`${prevLink}`} aria-label="Prev">
            <IoMdArrowRoundBack />
          </Link>
        )}
      </PrevPage>

      <PageNumber>{`Page ${currentPage} Of ${totalPage}`}</PageNumber>

      <NextPage>
        {nextLink && (
          <Link to={`${nextLink}`} aria-label="Next">
            <IoMdArrowRoundForward />
          </Link>
        )}
      </NextPage>
    </PaginationWrapper>
  );
};

export default Pagination;
