import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Subscription, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  nextScreen = 'start';
  clicked: Subject<void> = new Subject<void>();

  clicked$: Subscription;

  @HostListener('mouseup', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.clicked.next();
  }

  constructor(private router: Router) {
    this.clicked$ = this.clicked.pipe(debounce(() => interval(100))).subscribe(() => { this.continue(); });

  }

  ngOnInit(): void {
  }

  continue() {

    this.router.navigate([this.nextScreen]);
  }
  ngOnDestroy(): void {
    this.clicked$.unsubscribe();
  }

}
