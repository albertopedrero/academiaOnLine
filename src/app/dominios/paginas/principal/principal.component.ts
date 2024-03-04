import { Component } from '@angular/core';
import { ListadoCursosComponent } from '../../compartido/listado-cursos/listado-cursos.component';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ListadoCursosComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
