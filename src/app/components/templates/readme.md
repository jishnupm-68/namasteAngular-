# templates
-- contains the html content

# templateUrl 
-- contains the html file path 


# attributes
eg: <!-- Bind the `role` attribute on the `<ul>` element to the component's `listRole` property. -->
<ul [attr.role]="listRole()">

# text interpolation
<!-- Binds a value to the `alt` property of the image element's DOM object. -->
<img src="profile-photo.jpg" alt="Profile photo of {{ firstName() }}" >


# css classes
<!-- When `isExpanded` is truthy, add the `expanded` CSS class. -->
<ul [class.expanded]="isExpanded()">

# Event listners can be placed inside paranthesis " () " 
eg:  <input type="text" (keyup)="updateField()" />

# accessing the event argument
@Component({
  template: `
    <input type="text" (keyup)="updateField($event)" />
  `,
  ...
})
export class AppComponent {
  updateField(event: KeyboardEvent): void {
    console.log(`The user pressed: ${event.key}`);
  }
}

# two way binding  | banana symbol  , import ngModel to use this property
used for binding data 
[()] => symbol used for 2 way binding 


# control flow
    -- @if 
    -- @else -if @else
    --@ for         => track used for the same purpose as key in  map
        -> $count	Number of items in a collection iterated over
        -> $index	Index of the current row
        -> $first	Whether the current row is the first row
        -> $last	Whether the current row is the last row
        -> $even	Whether the current row index is even
        -> $odd	    Whether the current row index is odd
    -- @switch
        eg: @switch (userPermissions) {
                @case ('admin') {
                    <app-admin-dashboard />
                }
                @case ('reviewer') {
                    <app-reviewer-dashboard />
                }
                @case ('editor') {
                    <app-editor-dashboard />
                }
                @default {
                    <app-viewer-dashboard />
                }
        }
    --pipes
    Pipes are a special operator in Angular template expressions that allows you to transform data declaratively in your template. Pipes let you declare a transformation function once and then use that transformation across multiple templates. Angular pipes use the vertical bar character (|),
    eg:    import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
          <p>Total: {{ amount | currency }}</p>