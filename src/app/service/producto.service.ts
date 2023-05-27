import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../model/producto-model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) {


  }

  getProductos(): Observable<ProductoModel[]> {
    return this.httpClient.get<ProductoModel[]>('http://localhost:8001/producto'+ '/listar').pipe(map(res=> res));
  }


   saveProductos(request:any): Observable<any> {
     return this.httpClient.post<any>('http://localhost:8001/producto'+ '/crear', request).pipe(map(res=> res));
   }

   updateProductos(request:any): Observable<any> {
     return this.httpClient.post<any>('http://localhost:8001/producto'+ '/editar', request).pipe(map(res=> res));
   }

  // deleteProductos(id:number): Observable<any> {
  //   return this.httpClient.get<any>('http://localhost:8001/producto'+ '/eliminar', id).pipe(map(res=> res));
  // }

}
