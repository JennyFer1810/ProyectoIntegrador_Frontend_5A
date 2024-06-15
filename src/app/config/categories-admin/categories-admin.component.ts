import { Component, OnInit } from '@angular/core';
import { CatalogoModel } from 'src/app/models/catalogo.model';
import { CatalogoService } from 'src/app/service/catalogo.service';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.scss'],
})
export class CategoriesAdminComponent implements OnInit {
  catalogo: CatalogoModel = new CatalogoModel();
  catalogoList: CatalogoModel[] = [];
  isEditing: boolean = false;
  index: number = 0;

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit(): void {
    this.listadoCategorias();
  }

  private listadoCategorias() {
    this.catalogoService.getList().subscribe({
      next: (data: CatalogoModel[]) => {
        this.catalogoList = data;
        console.log(data)
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }

  selectCatalogo(index: number, catalogo: CatalogoModel) {
    this.catalogo = catalogo;
    this.index = index;
    this.isEditing = true;
  }

  updateCatalogo() {
    this.catalogoService.update(this.catalogo.id, this.catalogo).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }

  saveCatalogo() {
    this.catalogoService.save(this.catalogo).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }

  deleteCatalogo() {
    this.catalogo = new CatalogoModel();
    this.isEditing = false;
  }

  deleteCatalogoFromList(id: number) {
    this.catalogoService.delete(id).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: Error) => {
        console.error(err);
      },
    });
  }
}
