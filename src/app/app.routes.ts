import { Routes } from '@angular/router';
import { PrincipalComponent } from './dominios/paginas/principal/principal.component';
import { PreciosComponent } from './dominios/paginas/precios/precios.component';
import { Registro2Component } from './dominios/paginas/registro2/registro2.component';
import { DetalleCursoComponent } from './dominios/paginas/detalle-curso/detalle-curso.component';

export const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'registro', component: Registro2Component},
  {path: 'detalle/:titulo', component: DetalleCursoComponent}
];
