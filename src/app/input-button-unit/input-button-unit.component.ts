import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input 
        #inputElementRef
       (keyup.enter)="submitValue(getInputValue($event))"
       class="todo-input">
    <button (click)="submitValue(inputElementRef.value)" class="btn">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Hello World';

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    this.submitValue('My First Angular App');
  };

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  };

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
  

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }


}
