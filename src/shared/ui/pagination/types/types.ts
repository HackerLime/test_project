export type FCPaginationProps = {
  pages: number[]
  page: number;
  currentPage: number
  setCurrentPage: (arg: number) => void
}