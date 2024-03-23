export class PaginationResultModel<T>{
    datas: T;
    pageNumber: number ;
    pageSize: number;
    totalPageCount: number;
    isFirstPage: boolean ;
    isLastPage: boolean ;
   
}