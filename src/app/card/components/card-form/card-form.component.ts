import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../services/card.service';

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrl: './card-form.component.css',
    standalone: false
})
export class CardFormComponent implements OnInit {
  cardForm!: FormGroup;

  constructor(private fb: FormBuilder, private cardService: CardService) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      ccv: ['', [Validators.required, Validators.pattern('^{0-9]{3}$')]],
      expirationDate: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])/([0-9]{2})$')]]
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      this.cardService.addCard(this.cardForm.value);
      this.cardForm.reset();
    }
  }
}
