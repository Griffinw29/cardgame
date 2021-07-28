import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleSigninDirective } from './google-signin.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material-module';
import { FacebookSigninDirective } from './facebook-signin.directive';


@NgModule({
  declarations: [GoogleSigninDirective, FacebookSigninDirective],
  exports: [GoogleSigninDirective, FacebookSigninDirective],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
