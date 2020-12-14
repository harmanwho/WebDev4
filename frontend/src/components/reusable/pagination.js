/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Pagination from "react-bootstrap/Pagination";
import "../../css/pagination.css";

export default function CustomPagination(props) {
    const items = [];
    const {itemsCount, pageSize, onPageChange, currentPage} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);

    if (pagesCount <= 1) return null;
    
    for (let num = 1; num <= pagesCount; num++) {
      items.push(
        <Pagination.Item 
          onClick={() => {onPageChange(num)}}
          key={num}
          active={num === currentPage}>
          {num}
        </Pagination.Item>
      );
    }

    return (
      <>
        <Pagination>
          <Pagination.First onClick={() => {onPageChange(1)}}/>
          <Pagination.Prev onClick={() => {
            let page = (currentPage === 1) ? currentPage : currentPage - 1;
            onPageChange(page)}
          }/>
          {items}
          <Pagination.Next onClick={() => {
            let page = (currentPage === pagesCount) ? currentPage : currentPage + 1;
            onPageChange(page)}
          }/>
          <Pagination.Last onClick={() => {onPageChange(pagesCount)}}/>
        </Pagination>
      </>
    );
}