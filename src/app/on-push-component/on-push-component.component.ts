import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { delay, map, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-on-push-component',
  template: `
    <h3>
      Change the message via knobs
      and the async message will not update anymore
    </h3>

    <pre>message</pre>
    <p>{{ message }}</p>
    <pre>message$ | async</pre>
    <p>{{ message$ | async }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponentComponent implements OnChanges {
  @Input()
  message: string;

  message$: Observable<string>;

  ngOnChanges(): void {
    this.message$ = timer(0, 500).pipe(map(i => `${this.message} #${i}`), take(10));
  }
}
