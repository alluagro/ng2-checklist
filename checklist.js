"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChecklistDirective = /** @class */ (function () {
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
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ChecklistDirective);
    return ChecklistDirective;
}());
exports.ChecklistDirective = ChecklistDirective;
//# sourceMappingURL=checklist.js.map