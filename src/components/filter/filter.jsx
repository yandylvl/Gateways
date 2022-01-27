import { FormControl, InputLabel, Select } from "@mui/material";
import React from "react";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  currentPageChanged,
  filterCountChanged,
} from "../../store/modules/ui/gateways";

//TODO: enhance to be generic and scalable
const CoinFilter = () => {
  const dispatch = useDispatch();
  const filterCount = useSelector((state) => state.ui.gateways.filterCount);

  const handleChange = (event) => {
    dispatch(filterCountChanged({ filterCount: event.target.value }));

    dispatch(currentPageChanged({ currentPage: 0 }));
  };

  return (
    <FormControl sx={{ ml: 1, minWidth: 100 }}>
      <InputLabel id="filter-by-coin-label">filter</InputLabel>
      <Select
        labelId="filter-by-coin-label"
        id="filter-by-coin"
        value={filterCount}
        label="coin"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CoinFilter;
