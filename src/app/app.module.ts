import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule, PERSISTENCE, USE_DEVICE_LANGUAGE } from '@angular/fire/auth';
import { AngularFireFunctionsModule, ORIGIN, REGION } from '@angular/fire/functions';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/auth';
import { UserModule } from './user/user.module';
import { IntroComponent } from './game/intro/intro.component';
import { StartComponent } from './game/start/start.component';
import { PlayComponent } from './game/play/play.component';
import { MaterialModule } from './shared/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './game/play/card/card.component';
import { PlayerComponent } from './game/play/player/player.component';
import { CommunityComponent } from './game/play/community/community.component';
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StartComponent,
    PlayComponent,
    CardComponent,
    PlayerComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    UserModule
  ],
  providers: [
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
    { provide: PERSISTENCE, useValue: 'session' },
    { provide: REGION, useValue: 'us-central1' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
