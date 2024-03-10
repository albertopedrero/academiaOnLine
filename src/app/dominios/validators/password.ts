import { AbstractControl } from "@angular/forms";

export class PasswordValidator {

    static contieneCaracterEspecial(cadena: AbstractControl){
      const expresionRegular = /[*()$]+/;
        if (! expresionRegular.test(cadena.value)) {
          return { noContiene: true }
        }
        return null;

      }

    static Iguales(controlName: string, control2Name: string){
      return (controls: AbstractControl) => {
        const password = controls.get(controlName);
        const passwordRepetida = controls.get(control2Name);

        if (passwordRepetida?.errors && !passwordRepetida.errors['matching']){
          return null;
        }
        if (password?.value !== passwordRepetida?.value) {
          controls.get(control2Name)?.setErrors({ passwordMismatch: true });
          return { passwordMistmach: true}
        } else {
          return null
        }
      };
    }

  }

