import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleSigninDirective } from './google-signin.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material-module';


@NgModule({
  declarations: [GoogleSigninDirective],
  exports: [GoogleSigninDirective],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
