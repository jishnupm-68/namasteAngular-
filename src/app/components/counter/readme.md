# selector => this is the name of component we are used in other places to use


# style => inline style

# input 
    -- one way data binding
    -- it uses square bracket for binding the value "[]"
    eg: val = input(0)
        <component [val]="43">

    -- input.required() => used for required inputs
    -- pass function along with the input keyword
    eg: export class CustomSlider {
             label = input('', {transform: trimString});
        }
        function trimString(value: string | undefined): string {
        return value?.trim() ?? '';
        }
    
    -- we can specify the alias option to change the name of an input in templates
        eg: value = input(0, {alias: 'sliderValue'});
        <custom-slider [sliderValue]="50" />


# model => super power of angular made for two way binding
-- it makes the data flow from one component to another component  

# @Input decorators => same as input but slight difference in syntax

# output  => Angular components can define custom events by assigning a property to the output function:


Phase	Method	Summary
Creation	constructor	Standard JavaScript class constructor . Runs when Angular instantiates the component.

Change
Detection
ngOnInit	Runs once after Angular has initialized all the component's inputs.

ngOnChanges	Runs every time the component's inputs have changed.

ngDoCheck	Runs every time this component is checked for changes.

ngAfterContentInit	Runs once after the component's content has been initialized.

ngAfterContentChecked	Runs every time this component content has been checked for changes.

ngAfterViewInit	Runs once after the component's view has been initialized.

ngAfterViewChecked	Runs every time the component's view has been checked for changes.

Rendering	afterNextRender	Runs once the next time that all components have been rendered to the DOM.
afterEveryRender	Runs every time all components have been rendered to the DOM.

Destruction	ngOnDestroy	Runs once before the component is destroyed.