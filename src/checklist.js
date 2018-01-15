"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ChecklistDirective = (function () {
    function ChecklistDirective(el) {
        this.el = el;
    }
    ChecklistDirective.prototype.onChange = function ($event) {
        if ($event.target.checked) {
            this.targetArray.push($event.target.value);
        }
        else {
            this.targetArray.splice(this.targetArray.indexOf(this.el.nativeElement.value), 1);
        }
    };
    ChecklistDirective.prototype.isChecked = function () {
        return (this.targetArray.indexOf(this.el.nativeElement.value) !== -1);
    };
    ChecklistDirective = __decorate([
        core_1.Directive({
            selector: '[checklist]',
            inputs: [
                'targetArray: checklist'
            ],
            host: {
                '(change)': 'onChange($event)',
                '[checked]': 'isChecked()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ChecklistDirective);
    return ChecklistDirective;
}());
exports.ChecklistDirective = ChecklistDirective;
//# sourceMappingURL=checklist.js.map