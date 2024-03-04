import { Routes } from '@angular/router';
import { PrincipalComponent } from './dominios/paginas/principal/principal.component';
import { PreciosComponent } from './dominios/paginas/precios/precios.component';
import { RegistroComponent } from './dominios/paginas/registro/registro.component';
import { DetalleCursoComponent } from './dominios/paginas/detalle-curso/detalle-curso.component';

export const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'detalle/:titulo', component: DetalleCursoComponent}
];
