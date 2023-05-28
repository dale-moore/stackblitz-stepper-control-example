import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatStep, MatStepper} from "@angular/material/stepper";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'app-step0',
  templateUrl: './step0.component.html',
  styleUrls: ['./step0.component.scss']
})
export class Step0Component {

  @Input() stepperControlReference: MatStepper;

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
    this.stepCompleteEvent.emit(0);
    this.stepperControlReference.selectedIndex = 1;
  }

}
