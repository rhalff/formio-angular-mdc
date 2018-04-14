declare module 'formiojs';
declare module 'formiojs/lib/components';
declare module 'formiojs/lib/components/Components' {
  import {BaseComponent} from 'formiojs/lib/components/base/Base';

  class FormioComponents extends BaseComponent {
    /**
     *
     * @param component
     * @param options
     * @param data
     */
    new (component: any, options: any, data: any);

    /**
     *
     */
    build(): void;

    /**
     *
     * @return
     */
    getComponents(): any;

    /**
     * Perform a deep iteration over every component, including those
     * within other container based components.
     *
     * @param {function} fn - Called for every component.
     * @param fn
     */
    everyComponent(fn: any): void;

    /**
     * Perform an iteration over each component within this container component.
     *
     * @param {function} fn - Called for each component
     * @param fn
     */
    eachComponent(fn: any): void;

    /**
     * Returns a component provided a key. This performs a deep search within the
     * component tree.
     *
     * @param {string} key - The key of the component to retrieve.
     * @param {function} fn - Called with the component once found.
     * @return {Object} - The component that is located.
     * @param key
     * @param fn
     * @return
     */
    getComponent(key: string, fn: any): any;

    /**
     * Return a component provided the Id of the component.
     *
     * @param {string} id - The Id of the component.
     * @param {function} fn - Called with the component once it is retrieved.
     * @return {Object} - The component retrieved.
     * @param id
     * @param fn
     * @return
     */
    getComponentById(id: string, fn: any): any;

    /**
     * Create a new component and add it to the components array.
     *
     * @param component
     * @param data
     * @param component
     * @param options
     * @param data
     * @return
     */
    createComponent(component: any, options: any, data: any): any;

    /**
     * Add a new component to the components array.
     *
     * @param {Object} component - The component JSON schema to add.
     * @param {HTMLElement} element - The DOM element to append this child to.
     * @param {Object} data - The submission data object to house the data for this component.
     * @return {BaseComponent} - The created component instance.
     * @param component
     * @param element
     * @param data
     * @return
     */
    addComponent(component: any, element: any, data: any): any;

    /**
     * Remove a component from the components array.
     *
     * @param {BaseComponent} component - The component to remove from the components.
     * @param {Array<BaseComponent>} components - An array of components to remove this component from.
     * @param component
     * @param components
     */
    removeComponent(component: any, components: Array<any>): void;

    /**
     * Removes a component provided the API key of that component.
     *
     * @param {string} key - The API key of the component to remove.
     * @param {function} fn - Called once the component is removed.
     * @return {null}
     * @param key
     * @param fn
     */
    removeComponentByKey(key: string, fn: any): void;

    /**
     * Removes a component provided the Id of the component.
     *
     * @param {string} id - The Id of the component to remove.
     * @param {function} fn - Called when the component is removed.
     * @return {null}
     * @param id
     * @param fn
     */
    removeComponentById(id: string, fn: any): void;

    /**
     * @param element
     * @param data
     * @param element
     * @param data
     */
    addComponents(element: any, data?: any): void;

    /**
     *
     * @param flags
     * @return
     */
    updateValue(flags: any): boolean;
    /**
     *
     */
    updateValue();

    /**
     *
     * @return
     */
    hasChanged(): boolean;

    /**
     * A more performant way to check the conditions, calculations, and validity of
     * a submission once it has been changed.
     *
     * @param data
     * @param flags
     * @param data
     * @param flags
     * @return
     */
    checkData(data: any, flags: any): boolean;
    /**
     * A more performant way to check the conditions, calculations, and validity of
     * a submission once it has been changed.
     *
     * @param data
     * @param flags
     */
    checkData();

    /**
     *
     * @param data
     */
    checkConditions(data: any): boolean;

    /**
     *
     * @param show
     */
    clearOnHide(show: any): void;

    /**
     * Allow components to hook into the next page trigger to perform their own logic.
     *
     * @return {*}
     * @return
     */
    beforeNext(): any;

    /**
     * Allow components to hook into the submission to provide their own async data.
     *
     * @return {*}
     * @return
     */
    beforeSubmit(): any;

    /**
     *
     * @param scale
     */
    onResize(scale: any): void;

    /**
     *
     * @param data
     * @param flags
     * @return
     */
    calculateValue(data: any, flags: any): boolean;

    /**
     *
     * @param data
     * @param dirty
     * @return
     */
    isValid(data: any, dirty: any): boolean | number;

    /**
     *
     * @param data
     * @param dirty
     * @return
     */
    checkValidity(data: any, dirty: any): boolean;
    /**
     *
     */
    checkValidity();

    /**
     *
     * @param pristine
     */
    setPristine(pristine: any): void;

    /**
     *
     * @param all
     */
    destroy(all: any): void;

    /**
     *
     * @param component
     */
    setHidden(component: any): void;

    /**
     *
     * @param hidden
     */
    hideComponents(hidden: any): void;

    /**
     *
     */
    errors: Array<any>;

    /**
     *
     * @return
     */
    getValue(): any;

    /**
     *
     * @return
     */
    whenReady(): any;

    /**
     *
     * @param value
     * @param flags
     * @return
     */
    setValue(value: any, flags: any): boolean;
    /**
     *
     */
    setValue();

    /**
     *
     */
    type: string;

    /**
     *
     */
    components: Array<any>;

    /**
     *
     */
    hidden: Array<any>;
  }
}

declare module 'formiojs/lib/components/base/Base' {
  export class BaseComponent {
    errorContainer: any;
    errorElement: any;

    data: any;

    /**
     *
     * @param component
     * @param options
     * @param data
     */
    constructor (component: any, options: any, data: any);

    /**
     * Translate a text using the i18n system.
     *
     * @param {string} text - The i18n identifier.
     * @param {Object} params - The i18n parameters to use for translation.
     * @param text
     * @param params
     * @return
     */
    t(text: string, params?: any): string;

    /**
     * Register for a new event within this component.
     *
     * @example
     * let component = new BaseComponent({
	 *   type: 'textfield',
	 *   label: 'First Name',
	 *   key: 'firstName'
	 * });
     * component.on('componentChange', (changed) => {
	 *   console.log('this element is changed.');
	 * });
     *
     *
     * @param {string} event - The event you wish to register the handler for.
     * @param {function} cb - The callback handler to handle this event.
     * @param {boolean} internal - This is an internal event handler.
     * @param event
     * @param cb
     * @param internal
     */
    on(event: string, cb: any, internal?: boolean): void;

    /**
     * Emit a new event.
     *
     * @param {string} event - The event to emit.
     * @param {Object} data - The data to emit with the handler.
     * @param event
     * @param data
     */
    emit(event: string, data: any): void;

    /**
     * Returns an HTMLElement icon element.
     *
     * @param {string} name - The name of the icon to retrieve.
     * @returns {HTMLElement} - The icon element.
     * @param name
     * @return
     */
    getIcon(name: string): any;

    /**
     *
     */
    getBrowserLanguage(): void;

    /**
     * Called before a next page is triggered allowing the components
     * to perform special functions.
     *
     * @return {*}
     * @return
     */
    beforeNext(): any;

    /**
     * Called before a submission is triggered allowing the components
     * to perform special async functions.
     *
     * @return {*}
     * @return
     */
    beforeSubmit(): any;

    /**
     * Builds the component.
     */
    build(): void;

    /**
     *
     */
    viewOnlyBuild(): void;

    /**
     *
     * @return
     */
    createViewOnlyElement(): any;

    /**
     *
     * @param container
     */
    createViewOnlyLabel(container: any): void;

    /**
     *
     * @param container
     */
    createViewOnlyValue(container: any): void;

    /**
     *
     * @param element
     */
    setupValueElement(element: any): void;

    /**
     *
     */
    defaultViewOnlyValue: string;

    /**
     *
     * @param value
     * @return
     */
    getView(value: string | Array<Array<any>>): string;

    /**
     *
     */
    updateViewOnlyValue(): void;

    /**
     *
     * @param element
     */
    empty(element: any): void;

    /**
     * Retrieves the CSS class name of this component.
     * @returns {string} - The class name of this component.
     */
    className: string;

    /**
     * Build the custom style from the layout values
     * @return {string} - The custom style
     */
    customStyle: string;

    /**
     * Returns the outside wrapping element of this component.
     * @returns {HTMLElement}
     * @return
     */
    getElement(): any;

    /**
     * Create the outside wrapping element for this component.
     * @returns {HTMLElement}
     * @return
     */
    createElement(): any;

    /**
     * Create the input wrapping element. For multiple, this may be the table wrapper for the elements.
     * @returns {boolean}
     * @return
     */
    createWrapper(): boolean;

    /**
     * Sets the pristine flag for this component.
     *
     * @param pristine {boolean} - TRUE to make pristine, FALSE not pristine.
     * @param pristine
     */
    setPristine(pristine: any): void;

    /**
     * Adds a new empty value to the data array.
     */
    addNewValue(): void;

    /**
     * Adds a new empty value to the data array, and add a new row to contain it.
     */
    addValue(): void;

    /**
     * Removes a value out of the data array and rebuild the rows.
     * @param {number} index - The index of the data element to remove.
     * @param index
     */
    removeValue(index: number): void;

    /**
     * Rebuild the rows to contain the values of this component.
     */
    buildRows(): void;

    /**
     *
     * @param name
     * @return
     */
    bootstrap4Theme(name: any): any;

    /**
     *
     * @param name
     * @param spinning
     * @return
     */
    iconClass(name: string, spinning: boolean): string;

    /**
     * Adds a new button to add new rows to the multiple input elements.
     * @returns {HTMLElement} - The "Add New" button html element.
     * @param justIcon
     * @return
     */
    addButton(justIcon: any): any;

    /**
     * The readible name for this component.
     * @returns {string} - The name of the component.
     */
    name: string;

    /**
     * Get the error message provided a certain type of error.
     * @param type
     * @return {*}
     * @param type
     * @return
     */
    errorMessage(type: any): any;

    /**
     * Creates a new "remove" row button and returns the html element of that button.
     * @param {number} index - The index of the row that should be removed.
     * @returns {HTMLElement} - The html element of the remove button.
     * @param index
     * @return
     */
    removeButton(index: number): any;

    /**
     *
     * @param position
     * @return
     */
    labelOnTheLeft(position: any): boolean;

    /**
     *
     * @param position
     * @return
     */
    labelOnTheRight(position: any): boolean;

    /**
     *
     * @param position
     * @return
     */
    rightAlignedLabel(position: any): boolean;

    /**
     *
     * @param position
     * @return
     */
    labelOnTheLeftOrRight(position: any): boolean;

    /**
     *
     * @return
     */
    getLabelWidth(): /* !this.component.labelWidth */ any;

    /**
     *
     * @return
     */
    getLabelMargin(): /* !this.component.labelMargin */ any;

    /**
     *
     * @param input
     */
    setInputStyles(input: /* BaseComponent.element */ any): void;

    /**
     *
     * @return
     */
    labelIsHidden(): /* !this.component.hideLabel */ any;

    hasInput: boolean
    labelElement: any

    /**
     * Create the HTML element for the label of this component.
     * @param {HTMLElement} container - The containing element that will contain this label.
     * @param container
     */
    createLabel(container: /* BaseComponent.element */ any): void;

    /**
     *
     * @param label
     * @param shortcut
     * @return
     */
    addShortcutToLabel(label: any, shortcut: any): any;

    /**
     *
     * @param element
     * @param shortcut
     */
    addShortcut(element: any, shortcut: any): void;

    /**
     *
     * @param element
     * @param shortcut
     */
    removeShortcut(element: any, shortcut: any): void;

    /**
     * Create the HTML element for the tooltip of this component.
     * @param {HTMLElement} container - The containing element that will contain this tooltip.
     * @param container
     * @param component
     * @param classes
     */
    createTooltip(container: any, component?: any, classes?: string): void;

    /**
     * Creates the description block for this input field.
     * @param container
     * @param container
     */
    createDescription(container: any): void;

    /**
     * Creates a new error element to hold the errors of this element.
     */
    createErrorElement(): void;

    /**
     * Adds a prefix html element.
     *
     * @param {HTMLElement} input - The input element.
     * @param {HTMLElement} inputGroup - The group that will hold this prefix.
     * @returns {HTMLElement} - The html element for this prefix.
     * @param input
     * @param inputGroup
     * @return
     */
    addPrefix(input: any, inputGroup: any): any;

    /**
     * Adds a suffix html element.
     *
     * @param {HTMLElement} input - The input element.
     * @param {HTMLElement} inputGroup - The group that will hold this suffix.
     * @returns {HTMLElement} - The html element for this suffix.
     * @param input
     * @param inputGroup
     * @return
     */
    addSuffix(input: any, inputGroup: any): any;

    /**
     * Adds a new input group to hold the input html elements.
     *
     * @param {HTMLElement} input - The input html element.
     * @param {HTMLElement} container - The containing html element for this group.
     * @returns {HTMLElement} - The input group element.
     * @param input
     * @param container
     * @return
     */
    addInputGroup(input: /* BaseComponent.element */ any, container: /* BaseComponent.element */ any): /* BaseComponent.element */ any;

    /**
     * Creates a new input mask placeholder.
     * @param {HTMLElement} mask - The input mask.
     * @returns {string} - The placeholder that will exist within the input as they type.
     * @param mask
     * @return
     */
    maskPlaceholder(mask: /* BaseComponent.element */ any): string;

    /**
     * Sets the input mask for an input.
     * @param {HTMLElement} input - The html input to apply the mask to.
     * @param input
     */
    setInputMask(input: {} | /* BaseComponent.element */ any): void;

    /**
     * Creates a new input element.
     * @param {HTMLElement} container - The container which should hold this new input element.
     * @returns {HTMLElement} - Either the input or the group that contains the input.
     * @param container
     * @return
     */
    createInput(container: /* BaseComponent.element */ any): /* BaseComponent.element */ any;

    /**
     * Wrapper method to add an event listener to an HTML element.
     *
     * @param obj
     *   The DOM element to add the event to.
     * @param evt
     *   The event name to add.
     * @param func
     *   The callback function to be executed when the listener is triggered.
     * @param obj
     * @param evt
     * @param func
     */
    addEventListener(obj: /* BaseComponent.element */ any, evt: string, func: ((event: any) => void) | (() => boolean)): void;

    /**
     *
     */
    redraw(): void;

    /**
     * Remove all event handlers.
     * @param all
     */
    destroy(all: any): void;

    /**
     * Render a template string into html.
     *
     * @param template
     * @param data
     * @param actions
     *
     * @return {HTMLElement} - The created element.
     * @param template
     * @param data
     * @param actions
     * @return
     */
    renderTemplate(template: any, data: any, actions: any): any;

    /**
     * Append different types of children.
     *
     * @param child
     * @param element
     * @param child
     */
    appendChild(element: any, child: any): void;

    /**
     * Alias for document.createElement.
     *
     * @param {string} type - The type of element to create
     * @param {Object} attr - The element attributes to add to the created element.
     * @param {Various} children - Child elements. Can be a DOM Element, string or array of both.
     * @param {Object} events
     *
     * @return {HTMLElement} - The created element.
     * @param type
     * @param attr
     * @param children
     * @return
     */
    ce(type: string, attr?: any, children?: any): /* BaseComponent.element */ any;

    /**
     * Alias to create a text node.
     * @param text
     * @returns {Text}
     * @param text
     * @return
     */
    text(text: string | boolean): any;

    /**
     * Adds an object of attributes onto an element.
     * @param {HtmlElement} element - The element to add the attributes to.
     * @param {Object} attr - The attributes to add to the input element.
     * @param element
     * @param attr
     */
    attr(element: any, attr: any): void;

    /**
     * Adds a class to a DOM element.
     *
     * @param element
     *   The element to add a class to.
     * @param className
     *   The name of the class to add.
     * @param element
     * @param className
     */
    addClass(element: /* BaseComponent.element */ any, className: string): void;

    /**
     * Remove a class from a DOM element.
     *
     * @param element
     *   The DOM element to remove the class from.
     * @param className
     *   The name of the class that is to be removed.
     * @param element
     * @param className
     */
    removeClass(element: /* BaseComponent.element */ any, className: string): void;

    /**
     * Determines if this component has a condition defined.
     *
     * @return {null}
     * @return
     */
    hasCondition(): /* !this._hasCondition */ any;

    /**
     * Check for conditionals and hide/show the element based on those conditions.
     * @param data
     * @return
     */
    checkConditions(data: any): boolean;

    /**
     * Check all triggers and apply necessary actions.
     *
     * @param data
     * @param data
     * @return
     */
    fieldLogic(data: any): number;
    /**
     * Check all triggers and apply necessary actions.
     *
     * @param data
     */
    fieldLogic();

    /**
     * Add a new input error to this element.
     *
     * @param message
     * @param dirty
     * @param message
     * @param dirty
     */
    addInputError(message: boolean | string, dirty: any): void;

    /**
     * Hide or Show an element.
     *
     * @param show
     * @param show
     * @return
     */
    show(show: boolean): boolean;

    /**
     * Show or hide the root element of this component.
     *
     * @param show
     * @param show
     * @return
     */
    showElement(show: boolean): boolean;

    /**
     *
     * @param show
     */
    clearOnHide(show: boolean): void;

    /**
     *
     */
    onResize(scale: any): void;

    /**
     * Allow for options to hook into the functionality of this renderer.
     * @return {*}
     * @return
     */
    hook(): string;

    /**
     *
     */
    visible: boolean;

    /**
     *
     * @param flags
     * @param fromRoot
     */
    onChange(flags: any, fromRoot: any): void;

    /**
     *
     * @param input
     */
    addInputSubmitListener(input: /* BaseComponent.element */ any): void;

    /**
     * Add new input element listeners.
     *
     * @param input
     * @param input
     */
    addInputEventListener(input: /* BaseComponent.element */ any): void;

    /**
     * Add a new input to this comonent.
     *
     * @param input
     * @param container
     * @param noSet
     * @param input
     * @param container
     */
    addInput(input: /* BaseComponent.element */ any, container: /* BaseComponent.element */ any): void;

    /**
     * Get the value of this component.
     *
     * @return {*}
     */
    value: Array<Array<any>>;

    /**
     * Splice a value from the dataValue.
     *
     * @param index
     * @param index
     */
    splice(index: number): void;

    /**
     * Deletes the value of the component.
     */
    deleteValue(): void;

    /**
     * Get the value at a specific index.
     *
     * @param index
     * @returns {*}
     * @param index
     * @return
     */
    getValueAt(index: any): any;

    /**
     * Get the input value of this component.
     *
     * @return {*}
     * @return
     */
    getValue(): any;

    /**
     * Determine if the value of this component has changed.
     *
     * @param before
     * @param after
     * @return {boolean}
     * @param before
     * @param after
     * @return
     */
    hasChanged(before: Array<Array</* BaseComponent.element.value */ any>>, after: Array<any>): boolean;

    /**
     * Update the value on change.
     *
     * @param flags
     * @param changed
     * @param flags
     * @param changed
     * @return
     */
    updateOnChange(flags: any, changed: boolean): boolean;

    /**
     * Update a value of this component.
     *
     * @param flags
     * @param flags
     * @return
     */
    updateValue(flags: any):  /* error */ any;

    /**
     * Restore the value of a control.
     */
    restoreValue(): void;

    /**
     * Perform a calculated value operation.
     *
     * @param data - The global data object.
     *
     * @return {boolean} - If the value changed during calculation.
     * @param data
     * @param flags
     * @return
     */
    calculateValue(data: any, flags: any): boolean;

    /**
     * Get FormioForm element at the root of this component tree.
     * @return
     */
    getRoot(): /* !this.root */ any;

    /**
     * Returns the invalid message, or empty string if the component is valid.
     *
     * @param data
     * @param dirty
     * @return {*}
     * @param data
     * @param dirty
     * @return
     */
    invalidMessage(data: any, dirty: any): string;

    /**
     * Returns if the component is valid or not.
     *
     * @param data
     * @param dirty
     * @return {boolean}
     * @param data
     * @param dirty
     * @return
     */
    isValid(data: any, dirty: any): boolean | number;

    /**
     *
     * @param data
     * @param dirty
     * @return
     */
    checkValidity(data: any, dirty: any): boolean;

    /**
     *
     * @return
     */
    getRawValue(): /* !this.validationValue */ any;

    /**
     *
     * @param value
     * @return
     */
    isEmpty(value: string | Array<Array</* BaseComponent.element.value */ any>>): boolean;

    /**
     * Check if a component is eligible for multiple validation
     *
     * @return {boolean}
     * @param value
     * @return
     */
    validateMultiple(value: any): /* !this.component.multiple */ any;

    /**
     *
     */
    errors: Array<string>;

    /**
     *
     * @param string
     * @param data
     */
    interpolate(string: any, data: any): string;

    /**
     *
     * @param message
     * @param dirty
     */
    setCustomValidity(message: boolean | string, dirty: any): void;

    /**
     * Set the value at a specific index.
     *
     * @param index
     * @param value
     * @param index
     * @param value
     */
    setValueAt(index: any, value: Array</* BaseComponent.element.value */ any>): void;

    /**
     *
     * @return
     */
    getFlags(): any;

    /**
     *
     * @return
     */
    whenReady(): /* BaseComponent.prototype.+Promise */ any;

    /**
     * Set the value of this component.
     *
     * @param value
     * @param flags
     *
     * @return {boolean} - If the value changed.
     * @param value
     * @param flags
     * @return
     */
    setValue(value: Array</* BaseComponent.element.value */ any>, flags: any): boolean;

    /**
     * Prints out the value of this component as a string value.
     * @param value
     * @return
     */
    asString(value: Array<Array</* BaseComponent.element.value */ any>>): string;

    /**
     *
     */
    disabled: boolean;

    /**
     *
     * @param element
     * @param disabled
     */
    setDisabled(element: any, disabled: any): void;

    /**
     *
     * @param element
     * @param loading
     */
    setLoading(element: any, loading: any): void;

    /**
     *
     * @param select
     * @param tag
     * @param options
     * @param defaultValue
     */
    selectOptions(select: any, tag: any, options: any, defaultValue: any): void;

    /**
     *
     * @param select
     * @param value
     */
    setSelectValue(select: any, value: any): void;

    /**
     *
     */
    clear(): void;

    /**
     *
     * @param element
     * @param container
     */
    appendTo(element: /* BaseComponent.element */ any, container: /* BaseComponent.prototype.setLoading.!0 */ any): void;

    /**
     *
     * @param element
     */
    append(element: /* BaseComponent.element */ any): void;

    /**
     *
     * @param element
     * @param container
     */
    prependTo(element: any, container: /* BaseComponent.element */ any): void;

    /**
     *
     * @param element
     */
    prepend(element: any): void;

    /**
     *
     * @param element
     * @param container
     */
    removeChildFrom(element: /* BaseComponent.element */ any, container: /* BaseComponent.prototype.setLoading.!0 */ any): void;

    /**
     *
     * @param element
     */
    removeChild(element: any): void;

    /**
     * Get the element information.
     * @return
     */
    elementInfo(): any;

    /**
     *
     */
    validationValue: {
    }

    /**
     *
     */
    static externalLibraries: any

    /**
     *
     * @param name
     * @param property
     * @param src
     * @param polling
     * @return
     */
    static requireLibrary(name: any, property: any, src: any, polling: any): Promise<any>;

    /**
     *
     * @param name
     * @return
     */
    libraryReady(name: any): Promise<any>;
    /**
     *
     * @param executor
     * @return
     */
    libraryReady(executor: () => void): /* !custom:Promise_ctor */ any;

    /**
     * The ID of this component. This value is auto-generated when the component is created, but
     * can also be provided from the component.id value passed into the constructor.
     * @type {string}
     */
    id: string;

    /**
     * The options for this component.
     * @type {{}}
     */
    options: {

      /**
       *
       */
      name: string;
      formio?: any;
    }

    /**
     * Ensure you can get the component info from the element.
     */
    component: any;
    /*
    {
      customClass?: string;

      html?: string;

      labelWidth: number;

      labelMargin: number;
    }
    */

    /**
     * The bounding HTML Element which this component is rendered.
     * @type {null}
     */
    element: any

    /**
     * The existing error that this component has.
     * @type {string}
     */
    error: string;

    /**
     * An array of all of the input HTML Elements that have been added to this component.
     * @type {Array}
     */
    inputs: Array</* BaseComponent.element */ any>;

    /**
     * The element information for creating the input element.
     * @type {*}
     */
    info: {
      /**
       *
       */
      type: string;

      /**
       *
       */
      changeEvent: string;

      /**
       *
       */
      attr: {
        id?: string;

        /**
         *
         */
        name: string;

        /**
         *
         */
        type: string;

        /**
         *
         */
        class: string;


        rows?: number;

        spellcheck?: boolean;
      }

      /**
       *
       */
      component: /* BaseComponent.component */ any;
    }

    /**
     * Determines if this component is disabled, or not.
     *
     * @type {boolean}
     */
    _disabled: boolean;

    /**
     * Determines if this component is visible, or not.
     */
    _visible: boolean;

    /**
     * If this input has been input and provided value.
     *
     * @type {boolean}
     */
    pristine: boolean;

    /**
     * Points to the parent component.
     *
     * @type {BaseComponent}
     */
    parent: BaseComponent;

    /**
     * The validators that are assigned to this component.
     * @type {[string]}
     */
    validators: Array<string>;

    /**
     * An array of event handlers so that the destry command can deregister them.
     * @type {Array}
     */
    eventHandlers: Array<any>;

    /**
     * To force this component to be invalid.
     */
    invalid: boolean;

    /**
     * Determine if the component has been built.
     */
    isBuilt: boolean;

    /**
     * An array of the event listeners so that the destroy command can deregister them.
     * @type {Array}
     */
    eventListeners: Array<any>;

    /**
     * Add a default value.
     */
    dataValue: Array<Array</* BaseComponent.element.value */ any>>;
  }
}
declare module 'formiojs/lib/components/button/Button';
declare module 'formiojs/lib/components/columns/Column';
declare module 'formiojs/lib/components/columns/Columns';
declare module 'formiojs/lib/components/container/Container';
declare module 'formiojs/lib/components/content/Content';
declare module 'formiojs/lib/components/email/Email';
declare module 'formiojs/lib/components/fieldset/Fieldset';
declare module 'formiojs/lib/components/form/Form' {
  import { FormioForm } from 'formiojs'

  class FormComponent extends FormioForm {

    /**
     *
     * @param component
     * @param options
     * @param data
     */
    new (component : any, options : any, data : any);

    /**
     * Set data to submission.
     */
    emptyValue : {
    }

    /**
     * Load the subform.
     * @return
     */
    loadSubForm(): boolean;

    /**
     *
     * @param data
     * @param dirty
     */
    checkValidity(data : any, dirty : any): void;

    /**
     *
     * @return
     */
    checkConditions(): boolean;

    /**
     *
     * @param data
     * @param flags
     */
    calculateValue(data : any, flags : any): void;

    /**
     * Submit the form before the next page is triggered.
     */
    beforeNext(): void;

    /**
     * Submit the form before the whole form is triggered.
     */
    beforeSubmit(): void;

    /**
     *
     */
    build(): void;

    /**
     *
     */
    whenReady(): void;

    /**
     *
     * @param event
     * @param data
     */
    emit(event : string, data : any): void;

    /**
     *
     * @param submission
     * @param flags
     * @return
     */
    setValue(submission: any, flags: any): boolean;

    /**
     *
     * @return
     */
    getValue(): any;
  }
}
declare module 'formiojs/lib/components/hidden/Hidden' {
  import {BaseComponent} from 'formiojs/lib/components/base/Base'

  class HiddenComponent extends BaseComponent {}
}
declare module 'formiojs/lib/components/panel/Panel';
declare module 'formiojs/lib/components/phonenumber/Phonenumber';
declare module 'formiojs/lib/components/select/Select' {
  import { BaseComponent} from 'formiojs/lib/components/base/Base'

  class SelectComponent extends BaseComponent {
    requestHeaders: any;
    useTemplate: boolean;

    /**
     *
     * @param component
     * @param options
     * @param data
     */
    new (component : any, options : any, data : any);

    /**
     *
     */
    refreshItems(): void;

    /**
     *
     * @return
     */
    elementInfo(): any;

    /**
     *
     * @return
     */
    createWrapper(): boolean;

    /**
     *
     * @param data
     * @return
     */
    itemTemplate(data: any): string;

    /**
     *
     * @param data
     * @return
     */
    itemValue(data : any): any;

    /**
     *
     * @param container
     */
    createInput(container : any): void;

    /**
     * Adds an option to the select dropdown.
     *
     * @param value
     * @param label
     * @param value
     * @param label
     * @param attr
     */
    addOption(value : string, label : string, attr : any): void;

    /**
     *
     * @param items
     */
    addValueOptions(items: any): void;

    /**
     *
     * @param items
     */
    setItems(items: any): void;

    /**
     *
     * @param url
     * @param search
     * @param headers
     * @param options
     * @param method
     * @param body
     */
    loadItems(url: string, search: any, headers: any, options?: any, method? : string, body? : any): void;

    /**
     *
     */
    updateCustomItems(): void;

    /**
     *
     * @param searchInput
     * @param forceUpdate
     */
    updateItems(searchInput : any, forceUpdate : any): void;

    /**
     *
     * @param input
     */
    addPlaceholder(input : any): void;

    /**
     * Activate this select control.
     */
    activate(): void;

    /**
     *
     */
    active : boolean;

    /**
     *
     * @param input
     * @param container
     */
    addInput(input : any, container : any): void;

    /**
     *
     * @param value
     * @param items
     */
    addCurrentChoices(value : any, items : Array<any>): void;

    /**
     *
     * @param data
     * @return
     */
    getView(data : any): string;

    /**
     *
     * @param flags
     * @return
     */
    getValue(flags?: any): any;

    /**
     *
     * @param value
     * @param flags
     * @return
     */
    setValue(value : any, flags : boolean):  /* error */ any;

    /**
     * Check if a component is eligible for multiple validation
     *
     * @return {boolean}
     * @return
     */
    validateMultiple(): boolean;

    /**
     * Ouput this select dropdown as a string value.
     * @return {*}
     * @param value
     * @return
     */
    asString(value : any): any;

    /**
     *
     * @param element
     */
    setupValueElement(element : any): void;

    /**
     *
     */
    destroy(): void;

    /**
     *
     */
    focus(): void;
  }
}
declare module 'formiojs/lib/components/textarea/Textarea';
declare module 'formiojs/lib/components/radio/Radio' {
  import { BaseComponent } from 'formiojs/lib/components/base/Base'

  export class RadioComponent extends BaseComponent {
    /**
     *
     */
    new ();

    /**
     *
     * @return
     */
    elementInfo(): any;

    /**
     *
     * @param container
     */
    createInput(container : any): void;

    /**
     *
     */
    optionWrapperClass : string;

    /**
     *
     * @return
     */
    optionsLabelOnTheTopOrLeft(): boolean;

    /**
     *
     * @return
     */
    optionsLabelOnTheTopOrBottom(): boolean;

    /**
     *
     * @param label
     */
    setInputLabelStyle(label : any): void;

    /**
     *
     * @param input
     */
    setInputStyle(input : any): void;

    /**
     *
     * @return
     */
    getValue(): /* !this.dataValue */ any;

    /**
     *
     * @param value
     * @return
     */
    getView(value : any): string;

    /**
     *
     * @param index1
     * @param value
     */
    setValueAt(index : any, value : any): void;

    /**
     *
     * @param value
     * @param flags
     */
    updateValue(flags : any): any;
    updateValue(value : any, flags : any): any;

    /**
     *
     */
    destroy(): void;
  }
}
declare module 'formiojs/lib/components/textfield/TextField' {
  import { BaseComponent } from 'formiojs/lib/components/base/Base'

  class TextFieldComponent extends BaseComponent {
  }
}
declare module 'formiojs/lib/components/well/Well';

