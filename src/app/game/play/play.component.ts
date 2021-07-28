import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private db: AngularFirestore) {
    const things = db.collection('things').valueChanges();
    things.subscribe(console.log);
}

  ngOnInit(): void {
  }

}
