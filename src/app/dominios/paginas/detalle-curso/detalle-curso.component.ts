import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

import { CursosService } from '../../servicios/cursos.service';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent {

  private _route: ActivatedRoute;
  private cursosService: CursosService;
  curso: any;

  constructor(){
    this._route = inject(ActivatedRoute);
    this.cursosService = inject(CursosService);
  }
  ngOnInit(){
    this.curso = this.cursosService.getCurso(this._route.snapshot.paramMap.get('titulo'));
  }

}
