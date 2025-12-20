1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    -> getElementById: getElementById is a DOM selector that selects one HTML element using the id attribute.
    -> getElementsByClassName: getElementsByClassName is a DOM selector that selects multiple HTML elements using the class name.
    -> querySelector: querySelector is a DOM selector that selects an HTML element using a CSS selector. If multiple elements match, it selects only the first one.
    -> querySelectorAll: querySelectorAll is a DOM selector that selects all matching HTML elements using a CSS selector.

2. How do you create and insert a new element into the DOM?
    -> createElement: createElement is used to create a new HTML element.
    -> set content: We can add text or attributes to the element.
    ->appendChild: append or appendChild is used to insert the new element into the DOM.

3. What is Event Bubbling and how does it work?
    -> Event Bubbling: Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements.
    -> How it works: When an event happens on a child element, it first runs on that element, then on its parent, then on higher parents, up to the document.

4. What is Event Delegation in JavaScript? Why is it useful?
    -> Event Delegation: Event Delegation is a technique where we add one event listener to a parent element instead of adding listeners to multiple child elements.
    -> Why it is useful: It reduces code, improves performance, and works for dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation()?
    -> preventDefault(): preventDefault() stops the default browser action of an event (like form submit or link open).
    -> stopPropagation(): stopPropagation() stops the event from bubbling up to parent elements.
