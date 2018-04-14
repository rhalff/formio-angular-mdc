export interface IMaterialBaseMixin {

  /**
   * Returns an HTMLElement icon element.
   *
   * @param {string} name - The name of the icon to retrieve.
   * @returns {HTMLElement} - The icon element.
   * @param name
   * @return
   */
  getIcon (name: string): any

  /**
   * Create the input wrapping element. For multiple, this may be the table wrapper for the elements.
   * @returns {boolean}
   * @return
   */
  createWrapper (): boolean

  /**
   *
   * @param name
   * @param spinning
   * @return
   */
  iconClass (name: string, spinning: boolean): string

  /**
   * Adds a new button to add new rows to the multiple input elements.
   * @returns {HTMLElement} - The "Add New" button html element.
   * @param justIcon
   * @return
   */
  addButton (justIcon: any): any

  /**
   * Creates a new "remove" row button and returns the html element of that button.
   * @param {number} index - The index of the row that should be removed.
   * @returns {HTMLElement} - The html element of the remove button.
   * @param index
   * @return
   */
  removeButton (index: number): any

  /**
   * Create the HTML element for the label of this component.
   * @param {HTMLElement} container - The containing element that will contain this label.
   * @param container
   */
  createLabel (container: any): void

  /**
   * Create the HTML element for the tooltip of this component.
   * @param {HTMLElement} container - The containing element that will contain this tooltip.
   * @param container
   * @param component
   * @param classes
   */
  createTooltip (container: any, component?: any, classes?: string): void

  /**
   * Creates the description block for this input field.
   * @param container
   * @param container
   */
  createDescription (container: any): void

  /**
   * Creates a new error element to hold the errors of this element.
   */
  createErrorElement (): void

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
  addPrefix (input: any, inputGroup: any): any

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
  addSuffix (input: any, inputGroup: any): any

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
  addInputGroup (input: any, container: any): any

  /**
   * Add a new input error to this element.
   *
   * @param message
   * @param dirty
   * @param message
   * @param dirty
   */
  addInputError (message: boolean | string, dirty: any): void

  /**
   *
   * @param element
   * @param loading
   */
  setLoading (element: any, loading: any): void

  /**
   * Get the element information.
   * @return
   */
  elementInfo (): any
}
