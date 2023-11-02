import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Empresa } from 'src/app/entidades/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { EmpresaEditarComponent } from '../empresa-editar/empresa-editar.component';
import { Pais } from 'src/app/entidades/pais';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  public textoBusqueda: string = "";
  public empresas: Empresa[] = [];
  public paises: Pais[] = [];
  public columnas = [
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Código', prop: 'id' },
    { name: 'País', prop: 'pais.nombre' },
  ];
  public tipoSeleccion = SelectionType;
  public modoColumna = ColumnMode;

  constructor(private empresaService: EmpresaService,
    private dialogService: MatDialog,
    private paisService: PaisService,
  ) {

  }

  ngOnInit(): void {
    this.listar();
    this.listarPaises();
  }

  private listar() {
    this.empresaService.listar().subscribe(
      respuesta => {
        this.empresas = respuesta;
      },
      error => {
        window.alert(error.message)
      }
    );
  }

  private listarPaises() {
    this.paisService.listar().subscribe(
      respuesta => {
        this.paises = respuesta;
      },
      error => {
        window.alert(error.message)
      }
    );
  }

  public buscar() {

  }

  public agregar() {
    this.dialogService.open(EmpresaEditarComponent, {
      width: '600px',
      height: '500px',
      data: {
        encabezado: "Agregando Empresa:",
        empresa: new Empresa(
          0, //id
          "", //nombre,
          new Pais(0, "", "", "")
        ),
        paises: this.paises
      }
    });
  }

  public modificar() {

  }

  public verificarEliminar() {

  }

  public onActivate(event: any) {

  }

}
