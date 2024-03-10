import { FormGroup } from '@angular/forms';

// Función del validador personalizado
export function passwordMatchValidator(formGroup: FormGroup) {
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
}
