import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HideCardNumberPipe } from './pipes/hide-card-number.pipe';

@NgModule({
  declarations: [
    CardFormComponent,
    CardListComponent,
    HideCardNumberPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CardFormComponent,
    CardListComponent
  ]
})
export class CardModule { }
