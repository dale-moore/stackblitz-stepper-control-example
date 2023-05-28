import {Component, Input, ViewChild} from '@angular/core';
import {MatStepper} from "@angular/material/stepper";
import { Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {
  @Input() stepperControlReference: MatStepper;
  @Output() stepCompleteEvent = new EventEmitter<number>();
  @ViewChild('questionControlElement') firstFormCtrl: MatInput;

  currentStepNumber: number = 1;
  nextStepNumber: number = 2;

  formGroup = new FormGroup({
    questionFormCtrl: new FormControl('', Validators.required),
  });

  constructor() {

  }

  /**
   * This method is called from the app.component.ts when the Stepper animation is done.
   * This allows the component to know when it is displayed and to set the focus to an appropriate control.
   */
  onComponentDisplayed() {
    this.firstFormCtrl.focus();
  }

  stepDone() {

    // TODO - Perform validations before going to the next step

    this.stepCompleteEvent.emit(this.currentStepNumber);
    this.stepperControlReference.selectedIndex = this.nextStepNumber;
  }

}
