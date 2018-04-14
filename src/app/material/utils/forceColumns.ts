export const forceColumns = (form) => ({
  ...form,
  components: [{
    type: 'columns',
    hideLabel: true,
    tags: [],
    conditional: {},
    properties: {},
    clearOnHide: false,
    label: '',
    input: false,
    tableView: false,
    key: 'mdc-group',
    columns: form.components.map((component) => ({
      components: [component],
      width: 12,
      offset: 0,
      push: 0,
      pull: 0
    }))
  }]
})
