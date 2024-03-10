import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';

import { PasswordValidator } from '../../validators/password';

@Component({
  selector: 'app-registro2',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  template: `
  <div class="container">
    <h2>Registro de usuario</h2>
    <hr>
    <!--
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
      -->
    <br>

    <form [formGroup]="formularioRegistro" (ngSubmit)="onSubmit()" (keydown.enter)="$event.preventDefault()">
        <p class="info">Los campos marcados con * son obligatorios</p>

        <!--   **************** Nombre ****************** -->
        <label for="nombre">Nombre *:</label>
        <input id="nombre" type="text" formControlName="nombre">
        @if (nombreNoValido) {
          <div class="mensaje error-activo">
            <strong>El nombre es obligatorio; no puede tener números ni caracteres especiales</strong>
          </div>
        }

        <!--   **************** Apellidos ****************** -->


        <label for="apellidos">Apellidos *:</label>
        <input type="text" formControlName="apellidos">
        @if (apellidoNoValido) {
          <div class="mensaje error-activo">
            <strong>El apellido es obligatorio; no puede tener números ni caracteres especiales</strong>
          </div>
        }

        <!--
              **************** Email ******************
              Añadir campos de email de manera dinámica

        -->
        <div formArrayName="emails">
          @for (campo of listadoEmails.controls; track campo; let index = $index){
            <div [formGroupName]="index">
              <label for="emails">Email {{index + 1}}* (puedes proporcionar más de uno) </label>
                <input type="email" formControlName="email">
                <button (click)="eliminarEmail(index)">Eliminar</button>
              </div>
          }
        </div>

        @if (emailNoValido) {
          <div class="mensaje error-activo">
            <strong>Alguno de los emails no es válido</strong>
          </div>
        }
        <button type="button" (click)="anadirCampoEmail()">Añadir mail adicional</button>


        <!--
              **************** Password ******************
              La contraseña 1 debe tener al menos 8 caracteres y debe contener al menos un carácter de los siguientes: *()$

        -->
        <fieldset>
          <legend>La contraseña debe tener al menos 8 caracteres y al menos un carácter *()$</legend>
            <label for="contrasena1">
              Contraseña:
              <input type="password" formControlName="contrasena1" />
            </label>
                @if (contrasenaVacia){
                  <div class="mensaje error-activo">
                    <strong>La contraseña es obligatoria</strong>
                  </div>
                }
                @if (contrasenaNoLongitud){
                  <div class="mensaje error-activo">
                    <strong>La contraseña debe tener al menos 8 caracteres</strong>
                  </div>
                }

                @if (contrasenaNoCaracter ){
                  <div class="mensaje error-activo">
                    <strong>La contraseña debe tener al menos uno de los siguientes carateres: *()$</strong>
                  </div>
                }
            <label for="contrasena2">
              Repetir contrasena:
              <input type="password" formControlName="contrasena2" />
            </label>
              @if (contrasensNoCoinciden){
                <div class="mensaje error-activo">
                    <strong>Las contraseñas no coinciden</strong>
                  </div>
              }
        </fieldset>



        <label class="linea" for="genero">Género: </label>
        <select formControlName="genero" id="genero">
          <option value="hombre">Masculino</option>
          <option value="mujer">Femenino</option>
          <option value="no">No quiero indicarlo</option>
        </select>

        <br>
        <label for="edad">
          Edad:
          <input type="number" formControlName="edad"/>
        </label>
        <br>

        @if (edadNoValida) {
          <div class="mensaje error-activo">
            <strong>La edad debe ser al menos 18 años</strong>
        </div>
        }

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
              <input type="checkbox" id="acepto" formControlName="acepto">
              <label class="linea" for="acepto">Acepto que mis datos pasen a formar parte de un fichero automatizado de datos propiedad de "Academia Cinco Punto Cero", pudiendo ejercer posteriormente mis derechos sobre el borrado de datos de dicho fichero una vez dado de baja de la academia.
</label>

        </div>
        @if (noAcepta) {
          <div class="mensaje error-activo">
            <strong>Debes aceptar la cláusula</strong>
          </div>
        }
        <br>
        <button type="submit" >Enviar datos</button>
    </form>


        <section> <!-- Debes borrar esta seccion -->
      <h2>Estos son los valores del formulario</h2>
      {{formularioRegistro.value | json}}
      </section>

    </div>
    `,
  styleUrl: './registro2.component.css'
})
export class Registro2Component {

  //otro = new FormControl('', [Validators.required, Validators.maxLength(10)]);

  fb = inject(FormBuilder)

  formularioRegistro = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/) ]],
      emails: this.fb.array([this.crearCampoEmail()]),
      contrasena1: ['', [Validators.required, Validators.minLength(8),PasswordValidator.contieneCaracterEspecial] ],
      contrasena2:[''],
      genero: ['m'],
      edad: ['', Validators.min(18)],
      otrasPlataformas: [],
      acepto: ['', Validators.requiredTrue]
    },
    {
      validators: [PasswordValidator.Iguales('contrasena1', 'contrasena2')],
    }
  );


  ngOnInit(){
        // this.otro.valueChanges.subscribe( valor => console.log(valor))


  }

  // Gestión de campos dinámicos en un formulario
    get listadoEmails() {
      // devolvemos todos los campos emailAdicional en forma de array
      return this.formularioRegistro.get('emails') as FormArray
    }

    anadirCampoEmail(){
      // solicitamos el array de campos y añadimos uno más
      this.listadoEmails.push(this.crearCampoEmail())
    }

    crearCampoEmail(): FormGroup {
      // añadimos el nombre del campo y sus validadores
      return this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      });
    }

    eliminarEmail(index: number): void {
      // damos la posibilidad de eliminar emails añadidos, aunque exigimos que haya al menos uno
      const emailsArray = this.formularioRegistro.get('emails') as FormArray;
      if (emailsArray.length > 1) {
            emailsArray.removeAt(index);
      } else {
        alert('Debe existir al menos un email')
      }
    }

  onSubmit(){
    console.log(this.formularioRegistro.value);
    if (this.formularioRegistro.invalid){
      Object.values(this.formularioRegistro.controls).forEach( control => {
        control.markAllAsTouched();
      })
      return
    }
  }

    get nombreNoValido(){
      return this.formularioRegistro.get('nombre')?.invalid && this.formularioRegistro.get('nombre')?.touched;
    }

    get apellidoNoValido(){
      return this.formularioRegistro.get('apellidos')?.invalid && this.formularioRegistro.get('apellidos')?.touched;
    }

    get emailNoValido(){
      return this.formularioRegistro.get('emails')?.invalid && this.formularioRegistro.get('emails')?.touched;
    }

    get edadNoValida(){
      return this.formularioRegistro.get('edad')?.hasError('min');
    }

    get contrasenaVacia(){
      return this.formularioRegistro.get('contrasena1')?.hasError('required') && this.formularioRegistro.get('contrasena1')?.touched;
    }
    get contrasenaNoLongitud(){
      return this.formularioRegistro.get('contrasena1')?.hasError('minlength') && this.formularioRegistro.get('contrasena1')?.touched;
    }
    get contrasenaNoCaracter(){
      return this.formularioRegistro.get('contrasena1')?.hasError('noContiene') && this.formularioRegistro.get('contrasena1')?.touched;
    }
    get contrasensNoCoinciden(){
      return this.formularioRegistro.get('contrasena2')?.hasError('passwordMismatch');
    }
    get noAcepta(){
      return this.formularioRegistro.get('acepto')?.invalid && this.formularioRegistro.get('acepto')?.touched;
    }

  }
