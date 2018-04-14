import { expect } from 'chai'
import { get } from 'lodash'
import { findAndUpdateComponent } from './index'
import { form } from './fixtures/kitchen'

describe('findAndUpdate', () => {
  it('should find and update component', () => {
    const result = findAndUpdateComponent(
      (component) => component.key === 'firstName',
      (component) => ({
        ...component,
        unique: true
      })
    )(form)

    expect(get(result, 'components[0].components[0].columns[0].components[0].unique'))
      .to.equal(true)

    expect(result).to.not.equal(form)
  })
})
