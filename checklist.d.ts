import { Directive, ElementRef } from '@angular/core';

@Directive(
  {
    selector: '[checklist]',
    inputs: [
      'targetArray: checklist'
    ],
    host: {
      '(change)': 'onChange($event)',
      '[checked]': 'isChecked()'
    }
  }
)
export declare class ChecklistDirective {
    el: ElementRef;
    targetArray: [string];
    constructor(el: ElementRef);
    onChange($event: any): void;
    isChecked(): boolean;
}
