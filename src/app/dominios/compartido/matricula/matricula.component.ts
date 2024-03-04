import { Component, Input, inject } from '@angular/core';
import { CursosService } from '../../servicios/cursos.service';
@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.css'
})
export class MatriculaComponent {

  @Input() curso:any;
  private cursosService: CursosService;

  constructor(){
    this.cursosService = inject(CursosService);
  }
  matricular(curso:string, nombre: HTMLInputElement){
    this.cursosService.matricular(curso, nombre.value);
    nombre.value = "";
  }
}
