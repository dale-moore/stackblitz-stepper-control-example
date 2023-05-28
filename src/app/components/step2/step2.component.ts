import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {

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
    this.stepCompleteEvent.emit(2);
    this.stepperControlReference.selectedIndex = 3;
  }

}
