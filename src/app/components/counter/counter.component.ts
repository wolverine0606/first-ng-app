import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  value = signal(0);
  Increment() {
    this.value.update((val) => val + 1);
  }
  Decrement() {
    this.value.update((val) => val - 1);
  }
  Reset() {
    this.value.set(0);
  }
}
