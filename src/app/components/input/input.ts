import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Counter } from "../counter/counter";

@Component({
  selector: 'app-input',
  imports: [FormsModule, Counter],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class Input {
    inputValue=  "";
    initialCount = 0;
    
    typeEvent(event:KeyboardEvent){
      console.log(event.key);
    }

    updateField(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      console.log('The user pressed enter in the text field.');
    }
  }

    showOverlay(event: PointerEvent): void {
    event.preventDefault();
    console.log('Show overlay without updating the URL!');
  }

}
