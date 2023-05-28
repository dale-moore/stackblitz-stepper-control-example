import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {
  @Input() stepperControlReference: MatStepper;

  @Output() resetStepEvent = new EventEmitter<number>();

  @Output() stepCompleteEvent = new EventEmitter<number>();

  constructor() {

  }

  /**
   * This method is called from the app.component.ts when the Stepper animation is done.
   * This allows the component to know when it is displayed and to set the focus to an appropriate control.
   */
  onComponentDisplayed() {
  }

  stepDone() {

  }

  onCreateAnotherQuestion() {
    // Reset the steps that we will be executing again
    if (this.resetStepEvent !== null) {
      this.resetStepEvent.emit(1);
      this.resetStepEvent.emit(2);
      this.resetStepEvent.emit(3);
    }

    this.stepperControlReference.selectedIndex = 1;
  }
}
