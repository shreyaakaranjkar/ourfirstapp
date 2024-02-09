import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector : '[tolowercase]'
})

export class toLowerCaseDirective{
     
    constructor(private eleRef : ElementRef){}


    // @HostListener('keyup') onKeyup(){
    //     // return this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.toLowerCase()
    //     this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.toLowerCase()
    //     console.log(this.eleRef.nativeElement.value);
        
    // }

    //events

    // @HostListener('input',['$event'])
    // onInput(eve : Event){
    //     let inputControl = eve.target as HTMLInputElement; //typecasting
    //     let val = inputControl.value.toLowerCase();
    //     console.log(val)
    //     inputControl.value = val; 
    // }
}