import { Sort } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { orderChanged, sortByChanged } from "../../store/modules/ui/gateways";

//TODO: enhance to be generic and scalable
const SortBy = () => {
  const dispatch = useDispatch();
  const { sortBy, order } = useSelector((state) => state.ui.gateways);

  const handleSortByChange = (event) => {
    dispatch(sortByChanged({ sortBy: event.target.value }));
  };
  const handleOrderChange = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    dispatch(orderChanged({ order: newOrder }));
  };

  const transform = order === "asc" ? "scaleY(-1)" : "scaleY(1)";

  return (
    <Box>
      <Grid container alignItems="center">
        {sortBy !== "" && (
          <IconButton
            onClick={handleOrderChange}
            color="primary"
            aria-label="sort order"
          >
            <Sort
              sx={{ transform: transform, transition: "transform 0.15s" }}
            />
          </IconButton>
        )}
        <FormControl sx={{ ml: 1, minWidth: 135 }}>
          <InputLabel id="sort-by-label">sort</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortBy}
            label="sort"
            onChange={handleSortByChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"peripherals"}>Peripherals</MenuItem>
            <MenuItem value={"serialNumber"}>Serial #</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default SortBy;
