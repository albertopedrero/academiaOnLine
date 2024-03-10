import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';

import { PasswordValidator } from '../../validators/password';
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

    <input type="text" [formControl]="otro"/> -> {{otro.valid}}

  <form [formGroup]="formulario" (ngSubmit)="onSubmit($event)">
    <label>
      Nombre:
      <input type="text" formControlName="nombre" />
    </label>
    <label>
      Apellidos:
      <input type="text" formControlName="apellidos" />
    </label>
    <label for="email">
      Email:
    </label>
    <input type="email" id="email" formControlName="email">
    <br/>

    <input type="submit"  value="Enviar" [disabled]="formulario.invalid"/>
  </form>







    <!--
    <input
      type="text"
      [formControl]="otro"
      [class.valido]="otro.valid && otro.touched"
      [class.no-valido]="otro.invalid && otro.touched"/>

      - Valido: {{otro.valid  }}

    <div class="mensaje" [class.error-activo]="otro.touched && otro.invalid">
        @if (otro.hasError('required') && otro.touched){
              <p>Otro es obligtorio</p>
        }
        @if (otro.hasError('maxlength') && otro.dirty){
              <p>no puede tener más de 10 caracteres</p>

        }
    </div>

    <br>

    <form [formGroup]="formulario" (ngSubmit)="onSubmit()" (keydown.enter)="$event.preventDefault()">
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
        <br>-->
        <!--
              Añadir campos de manera dinámica

        -->
        <!--<div formArrayName="emails">
          @for (campo of listadoEmails.controls; track campo; let index = $index){
            <div [formGroupName]="index">
              <label for="emails">Email {{index + 1}}
                <input type="email" formControlName="email">
                <button type="button" (click)="eliminarEmail(index)">Eliminar</button>
              </label>
              </div>
          }
        </div>
        <button type="button" (click)="anadirCampoEmail()">Añadir mail adicional</button>


        <br>
        <label for="password1">
          Password
          <input type="password" formControlName="password1" />
        </label>
        <label for="password2">
          Password
          <input type="password" formControlName="password2" />
        </label>
        @if (formulario.hasError('mismatch')){
          <p>Las contraseñas no coinciden</p>
        }

        <div *ngIf="formulario.hasError('mismatch')">
      Las contraseñas no coinciden
    </div>

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
    </form>
    </div>-->
    `,
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  otro = new FormControl('valor por defecto', [Validators.required, Validators.maxLength(10)])

  formulario:FormGroup;

  constructor(private fb: FormBuilder){
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(6)]],
      apellidos: ['', [Validators.required, Validators.minLength(6)]],
      email: ['',[Validators.required, Validators.email]]
    })
  }

  onSubmit(event: Event){
    event.preventDefault();
    console.log(this.formulario.value);
    console.log(this.formulario.valid)
  }

  ngOnInit(){
    this.otro.valueChanges
      .subscribe ( (valor) => console.log(valor))
  }

  /*
  otro = new FormControl('', [Validators.required, Validators.maxLength(10)]);

  formulario: FormGroup;

  constructor( private fb: FormBuilder){
    this.formulario = this.fb.group({
      nombre: ['Introduce el nombre', Validators.required],
      apellidos: ['Introduce apellidos', Validators.required],
      emails: this.fb.array([this.crearCampoEmail()]),
      password1: ['', ],
      password2:['', { updateOn: 'blur' }],
      genero: ['m'],
      otrasPlataformas: [],
      acepto: []
    }, { validator: this.passwordMatchValidator }
    );
  }
  anadirCampoEmail(){
    // solicitamos el array de campos y añadimos uno más
    this.listadoEmails.push(this.crearCampoEmail())

  }

  get listadoEmails() {
    // devolvemos todos los campos emailAdicional en forma de array
    return this.formulario.get('emails') as FormArray
  }
  crearCampoEmail(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  eliminarEmail(index: number): void {
    const emailsArray = this.formulario.get('emails') as FormArray;
    emailsArray.removeAt(index);
  }


  ngOnInit(){
    console.log('hola');

    this.otro.valueChanges
      .subscribe( valor => console.log(valor))
    /*this.apellidos.valueChanges
      .subscribe( valor => console.log(valor))
  }

  mostrarValores(){
    // console.log(this.nombre.value, this.apellidos.value)
    //console.log(this.formulario )
  }

  onSubmit(){
    console.log('enviando formulario');
    console.log(this.formulario.value);
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
  }

   passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password1');
    const confirmPasswordControl = formGroup.get('password2');

    console.log('comprobando contraseña')
    if (passwordControl?.value === confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors(null);
      console.log('iguales')
    } else {
      console.log('distintas')
      confirmPasswordControl?.setErrors({ mismatch: true });
    }
   }*/
  }
