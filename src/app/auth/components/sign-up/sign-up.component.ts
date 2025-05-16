import { Component, inject, OnDestroy, signal, Signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnDestroy {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  simpleEmail: Signal<string> = signal('example@example.com');
  apiError: WritableSignal<string> = signal('');

  signUpForm: FormGroup = this.formBuilder.group(
    {
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
      rePassword: [null],
      dateOfBirth: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    },
    { validators: [this.validateRePassword] }
  );

  validateRePassword(form: AbstractControl) {
    const password = form.get('password')?.value;
    const rePassword = form.get('rePassword')?.value;

    if (password === rePassword) {
      return null;
    } else {
      return { misMatch: true };
    }
  }

  onSubmit() {
    console.log(this.signUpForm);
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
    } else {

      this.authService.signUpUser(this.signUpForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.apiError.set('');
            this.router.navigate(['/signin']);
          },
          error: (err) => {
            console.log(err);
            this.apiError.set(err.error.error);
          },
        });

    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
