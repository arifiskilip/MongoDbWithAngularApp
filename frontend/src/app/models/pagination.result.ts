export class PaginationResultModel<T>{
    datas: T;
    pageNumber: number ;
    pageSize: number;
    isFirstPage: boolean ;
    isLastPage: boolean ;
    totalPageCount: number;
}