import {Component, ViewChild} from '@angular/core';
import {MatStep, MatStepper} from "@angular/material/stepper";
import {Step0Component} from "./components/step0/step0.component";
import {Step1Component} from "./components/step1/step1.component";
import {Step3Component} from "./components/step3/step3.component";
import {Step2Component} from "./components/step2/step2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Material UI Stepper Control Example';

  @ViewChild('stepper') stepper: MatStepper;

  // References to each of the steps:
  @ViewChild('step0') step0: MatStep;
  @ViewChild('step1') step1: MatStep;
  @ViewChild('step2') step2: MatStep;
  @ViewChild('step3') step3: MatStep;

  // References to each of the components that are used for the steps
  @ViewChild('step0Component') step0Component: Step0Component;
  @ViewChild('step1Component') step1Component: Step1Component;
  @ViewChild('step2Component') step2Component: Step2Component;
  @ViewChild('step3Component') step3Component: Step3Component;

  constructor() {}

  onAnimationDone() {
    if (this.stepper.selectedIndex == 0) {
      this.step0Component.onComponentDisplayed();
    } else if (this.stepper.selectedIndex == 1) {
      this.step1Component.onComponentDisplayed();
    } else if (this.stepper.selectedIndex == 2) {
      this.step2Component.onComponentDisplayed();
    } else if (this.stepper.selectedIndex == 3) {
      this.step3Component.onComponentDisplayed();
    }
  }

  resetStepEvent(step: number) {
    if (step == 0) {
      this.step0.completed = false;
      this.step0.editable = true;
    } else if (step == 1) {
      this.step1.completed = false;
      this.step1.editable = true;
    } else if (step == 2) {
      this.step2.completed = false;
      this.step2.editable = true;
    } else if (step == 3) {
      this.step3.completed = false;
      this.step3.editable = true;
    }
  }
  stepCompletedEvent(step: number) {
    if (step == 0) {
      this.step0.completed = true;
      this.step0.editable = false;
    } else if (step == 1) {
      this.step1.completed = true;
      this.step1.editable = false;
    } else if (step == 2) {
      this.step2.completed = true;
      this.step2.editable = false;
    } else if (step == 3) {
      this.step3.completed = true;
      this.step3.editable = false;
    }
  }

}
