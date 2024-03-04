import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {

  @Input() curso:any;
  @Output() eventoMatricular= new EventEmitter;
  matricular(curso:string){
    this.eventoMatricular.emit(curso);
  }

}
