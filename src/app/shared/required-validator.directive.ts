import { Validators, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validators {
    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        const controToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controToCompare && controToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
}