import { Component, input, signal, Signal } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-massage',
  imports: [],
  templateUrl: './error-massage.component.html',
  styleUrl: './error-massage.component.css'
})
export class ErrorMassageComponent {
  Control = input<AbstractControl | null>(null);
  name = input<string>('');

  simpleEmail: Signal<string> = signal('example@example.com');


}
