import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  // data$: Observable<any>;
  game$: Observable<any> = this.db.collection('game').doc('UeBXOQTPVdMz23LSUYTX').valueChanges();
  game: Game =  {
    active: false,
    community: [],
    id: '',
    players: [],
    pot: 0
  };

  destroy$: Subject<void> = new Subject<void>();
  constructor(private db: AngularFirestore, private fns: AngularFireFunctions, private afAuth: AngularFireAuth) {

    this.game$.pipe(takeUntil(this.destroy$)).subscribe(e => this.game = e);

    // const callable = fns.httpsCallable('helloWorld');
    // this.data$ = callable({ name: 'some-data' });
}

  ngOnInit(): void {

    // this.data$.subscribe(e => console.log(e));

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  addGame(data: any) {
    this.afAuth.authState.subscribe( u => {
      this.db.collection('game').add({email: u?.email || 'unknown', data});
    });

  }


}
