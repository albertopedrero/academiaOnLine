

import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  //templateUrl: './registro.component.html',
  template: `
  <div class="container">
    <h2>Registro de usuario</h2>
    <hr>
    <br>

    <input
      type="text"
      [formControl]="otro"
      [class.valido]="otro.valid && otro.touched"
      [class.no-valido]="otro.invalid && otro.touched"/>

      - Valido: {{otro.valid}}

    <div class="mensaje" [class.error-activo]="otro.touched && otro.invalid">
        @if (otro.hasError('required') && otro.touched){
              <p>Otro es obligtorio</p>
        }
        @if (otro.hasError('maxlength') && otro.dirty){
              <p>no puede tener más de 10 caracteres</p>

        }
    </div>

    <br>
<!--
    <form [formGroup]="formulario" (ngSubmit)="onSubmit()">

        <p><strong>Los campos marcados con * son obligatorios</strong></p>
        <label for="nombre">Nombre *:</label>
        <input id="nombre" type="text" formControlName="nombre">
        @if (nombreNoValido) {
          <p>
            <strong>El nombre es obligatorio</strong>
          </p>
        }

        <br>
        <label for="apellidos">Apellidos *:</label>
        <input type="text" formControlName="apellidos">
        <br>
        <label for="email">Email *:</label>
        <input type="email" id="email" formControlName="email">
        <br>
        <button (click)="mostrarValores()">mostrar</button>

        <br>
        <label class="linea" for="genero">Género: </label>
        <select formControlName="genero" id="genero">
          <option value="hombre">Masculino</option>
          <option value="mujer">Femenino</option>
          <option value="no">No quiero indicarlo</option>

        </select>

        <br>
        <label  class="linea" for="otrasPlataformas">Utilizas otras platformas de formación: </label>

        <label  class="linea">
          Sí
          <input type="radio" name="otrasPlataformas" value="Sí" formControlName="otrasPlataformas">
        </label>
        <label  class="linea">
          No
          <input type="radio" name="otrasPlataformas" value="No" formControlName="otrasPlataformas">

        </label>
        <hr>
        <div class="proteccion">
          <p>
              <input type="checkbox" formControlName="acepto">
              <label class="linea" for="acepto">Acepto</label>
              que mis datos pasen a formar parte de un fichero automatizado de datos propiedad de "Academia Cinco Punto Cero", pudiendo ejercer posteriormente mis derechos sobre el borrado de datos de dicho fichero una vez dado de baja de la academia.
            </p>
        </div>

        <br>
        <button type="submit" >Enviar datos</button>
    </form>-->
    </div>
    `,
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  otro = new FormControl('', [Validators.required, Validators.maxLength(10)]);

  formulario: FormGroup;

  constructor( private fb: FormBuilder){
    this.formulario = this.fb.group({
      nombre: ['Introduce el nombre', Validators.required],
      apellidos: ['Introduce apellidos', Validators.required],
      email: ['Correo electrónico', [Validators.email, Validators.email]],
      email2: this.fb.array([]),
      genero: ['m'],
      otrasPlataformas: [],
      acepto: []
    })
  }
  addCampoEmail(){
    this.email2.push(this.crearCampoEmail())
  }
  private crearCampoEmail(){
    return this.fb.group({
      segundoMail: ['', Validators.required]
    })
  }
  get email2() {
    return this.formulario.get('email2') as FormArray
  }
  ngOnInit(){
    console.log('hola');

    this.otro.valueChanges
      .subscribe( valor => console.log(valor))
    /*this.apellidos.valueChanges
      .subscribe( valor => console.log(valor))*/
  }

  mostrarValores(){
    // console.log(this.nombre.value, this.apellidos.value)
    //console.log(this.formulario )
  }
  /*
  onSubmit(){
    console.log('enviando formulario');
    if (this.formulario.invalid){
      console.log('formulario no válido')
      Object.values(this.formulario.controls).forEach( control => {
        control.markAllAsTouched();
      })
      return
    }
  }

  get nombreNoValido(){
    return this.formulario.get('nombre')?.invalid && this.formulario.get('nombre')?.touched;
  }*/
}
