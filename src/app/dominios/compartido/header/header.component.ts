import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private router: Router;
  constructor(){
    this.router = inject(Router)
  }
  registrar(){
    this.router.navigate(['registro'])
  }
}
