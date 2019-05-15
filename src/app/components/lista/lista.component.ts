import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items:any;
  editarItem:any= {
    name: ''
  }
  constructor(private conexion:ConexionService) {
    this.conexion.listaItem().subscribe(item=>{
      this.items = item;
      console.log(this.items);
    })
  }

  ngOnInit() {
  }

  eliminar(item){
    this.conexion.eliminarItem(item);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarEditado(){
    this.conexion.editarItem(this.editarItem);
  }

}
