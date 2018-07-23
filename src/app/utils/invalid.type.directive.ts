import { NgControl } from '@angular/forms';
import { Directive, ElementRef, ViewContainerRef, TemplateRef, Renderer2, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, AbstractControl, FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { InvalidmessageDirective } from './invalid.message.directive';
@Directive({
  selector: '[invalidType]'
})
export class InvalidTypeDirective implements OnInit {
  @Input('invalidType') type: string;
  private hasView = false;
  constructor(
    private invalidmessage: InvalidmessageDirective,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    this.invalidmessage.controlValue$.subscribe(() => {
      this.setVisible();
    });
  }

  private setVisible() {


    if (this.invalidmessage.match(this.type)) {

      if (this.invalidmessage.invalidmessage === 'montoDscto') {
        console.log('setVisible this.type: ' + this.type);
        console.log('setVisible match: ' + this.type);

      }

      if (!this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    } else {
      if (this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    }
  }
}
