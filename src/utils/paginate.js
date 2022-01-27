import _ from "lodash";

export default function paginate(items, pageNumber, pageSize) {
  const startIndex = pageNumber * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
