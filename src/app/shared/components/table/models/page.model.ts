export class Page<T> {
  content: T[];
  pageable: Pageable | string;
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: Sort;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
