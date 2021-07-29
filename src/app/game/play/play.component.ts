import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  data$: Observable<any>;
  game$: Observable<any> = this.db.collection('game').doc('UeBXOQTPVdMz23LSUYTX').valueChanges();
  game: any;
  constructor(private db: AngularFirestore, private fns: AngularFireFunctions) {

    this.game$.subscribe(e => this.game = e);

    const callable = fns.httpsCallable('helloWorld');
    this.data$ = callable({ name: 'some-data' });
}

  ngOnInit(): void {

    this.data$.subscribe(e => console.log(e));

  }

}
