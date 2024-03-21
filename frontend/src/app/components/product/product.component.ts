import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
import { SwalService } from '../../services/swal.service';
import { PaginationResultModel } from '../../models/pagination.result';
import { RequestModel } from '../../models/request';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
   this.getAll();
  }

  searchText:string = "";
  result: PaginationResultModel<Product[]> = new PaginationResultModel<Product[]>();
  request: RequestModel = new RequestModel();
  pageNumbers: number[] = [];
  product: Product = new Product();
  /**
   *
   */
  constructor(
    private _product: ProductService,
    private _swal: SwalService,
    private _toastr: ToastrService,
  ) { }


  getAll(pageNumber = 1) {
    this.request.pageNumber = pageNumber;
    this._product.getAll(this.request, res => {
      this.result = res;
      this.setPageNumbers();
    })
  }

  setPageNumbers() {
    const startPage = Math.max(1, this.result.pageNumber - 2);
    const endPage = Math.min(this.result.totalPageCount, this.result.pageNumber + 2);
    this.pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      this.pageNumbers.push(i);
    }
  }

}
