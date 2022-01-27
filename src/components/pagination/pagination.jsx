import { TablePagination } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";

import {
  currentPageChanged,
  pageSizeChanged,
} from "../../store/modules/ui/gateways";

const Pagination = (props) => {
  const { currentPage, pageSize, totalCount } = props;
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    dispatch(currentPageChanged({ currentPage: newPage }));
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(pageSizeChanged({ pageSize: event.target.value }));

    dispatch(currentPageChanged({ currentPage: 0 }));
  };

  return (
    <TablePagination
      component="div"
      rowsPerPageOptions={[10, 20, 50, 100]}
      count={totalCount}
      page={currentPage}
      onPageChange={handleChangePage}
      rowsPerPage={pageSize}
      onRowsPerPageChange={handleChangeRowsPerPage}
      labelRowsPerPage={"Show per Page"}
    />
  );
};

//TODO: Add propTypes to the rest of components

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default Pagination;
