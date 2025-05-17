import { Component, inject, OnDestroy, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subject, takeUntil, timer } from 'rxjs';
import { ErrorMassageComponent } from "../../../shared/components/ui/error-massage/error-massage.component";

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink, ErrorMassageComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnDestroy, OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  simpleEmail: Signal<string> = signal('example@example.com');
  apiError: WritableSignal<string> = signal('');
  signInForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initForm(): void {
    this.signInForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),],],
    });
  }

  onSubmit() {
    console.log(this.signInForm);
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
    } else {

      this.authService.signInUser(this.signInForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.apiError.set('');
            localStorage.setItem('token', res.token);
            timer(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
              this.router.navigate(['/timeline']);
            });
          },
          error: (err) => {
            console.log(err);
            this.apiError.set(err.error.error);
          },
        });
    }
  }
}
