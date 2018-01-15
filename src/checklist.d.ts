import { ElementRef } from '@angular/core';
export declare class ChecklistDirective {
    el: ElementRef;
    targetArray: [string];
    constructor(el: ElementRef);
    onChange($event: any): void;
    isChecked(): boolean;
}
