import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div [style]="containerStyle">
      <h1 [style]="labelStyle">Angular SSR on Trapiche</h1>
      <div [style]="countStyle">{{ count() }}</div>
      <div [style]="buttonsStyle">
        <button [style]="decStyle" (click)="decrement()">−</button>
        <button [style]="incStyle" (click)="increment()">+</button>
      </div>
      <span [style]="badgeStyle">client-side counter · SSR hydration</span>
    </div>
  `,
})
export class AppComponent {
  count = signal(0)

  increment() { this.count.update(v => v + 1) }
  decrement() { this.count.update(v => v - 1) }

  containerStyle = 'font-family:system-ui,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:#0f0f0f;color:#fff;gap:2rem;margin:0;'
  labelStyle = 'font-size:1.25rem;opacity:0.5;letter-spacing:0.05em;text-transform:uppercase;'
  countStyle = 'font-size:6rem;font-weight:700;line-height:1;'
  buttonsStyle = 'display:flex;gap:1rem;'
  decStyle = 'padding:0.75rem 2rem;font-size:1.25rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;background:#333;color:#fff;'
  incStyle = 'padding:0.75rem 2rem;font-size:1.25rem;border:none;border-radius:8px;cursor:pointer;font-weight:600;background:#6366f1;color:#fff;'
  badgeStyle = 'font-size:0.75rem;opacity:0.35;'
}
