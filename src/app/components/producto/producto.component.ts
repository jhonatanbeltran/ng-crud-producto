import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductoModel } from 'src/app/model/producto-model';
import { ProductoService } from 'src/app/service/producto.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [     
        BrowserModule,
        ReactiveFormsModule
  ],
})
export class AppModule { } 



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})


export class ProductoComponent implements OnInit {
  


  listProductos: ProductoModel [] =[];
  formProductos: FormGroup = new FormGroup({}); 

  constructor(private productoService: ProductoService){ }

  ngOnInit(): void{
    this.list();
    this.formProductos = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      marca: new FormControl(''),
      color: new FormControl(''),
      precio: new FormControl(''),
      stock: new FormControl(''),
      imagen: new FormControl('0'),
    });
  }

  list(){
    this.productoService.getProductos().subscribe(resp =>{
      if (resp) {
          this.listProductos = resp;
      }
    });
  }





}
