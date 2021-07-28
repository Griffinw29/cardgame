import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  data$: Observable<any>;

  constructor(private db: AngularFirestore, private fns: AngularFireFunctions) {
    const things = db.collection('game').doc('UeBXOQTPVdMz23LSUYTX').valueChanges();
    things.subscribe(console.log);

    const callable = fns.httpsCallable('helloWorld');
    this.data$ = callable({ name: 'some-data' });
}

  ngOnInit(): void {
    this.data$.subscribe(e => console.log(e));
  }

}
