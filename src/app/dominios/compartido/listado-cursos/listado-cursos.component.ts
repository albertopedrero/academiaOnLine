import { Component, inject } from '@angular/core';
import { CursoComponent } from '../curso/curso.component';
import { MatriculaComponent } from '../matricula/matricula.component';

import { CursosService } from '../../servicios/cursos.service';

@Component({
  selector: 'app-listado-cursos',
  standalone: true,
  imports: [CursoComponent, MatriculaComponent],
  templateUrl: './listado-cursos.component.html',
  styleUrl: './listado-cursos.component.css'
})
export class ListadoCursosComponent {

  listaCursos: any[] = [];
  private cursosService: CursosService;
  cursoMatricular:any;
  constructor(){
    this.cursosService = inject(CursosService);
    this.listaCursos = this.cursosService.getCursos();
  }

  matricular(curso:any){
    this.cursoMatricular = curso;

  }

}
