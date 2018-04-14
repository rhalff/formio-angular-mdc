import {
  isArray,
  isPlainObject,
  map,
  curry,
  reduce
} from 'lodash'

export const findAndUpdate = curry((
  collectionKeys,
  findFn,
  replaceFn,
  obj
) => {
  return (function findAndReplace ($) {
    if (isPlainObject($)) {
      return reduce(collectionKeys, (collection, collectionKey) => {
        if (isArray(collection[collectionKey])) {
          collection[collectionKey] = map(collection[collectionKey], (component) => {
            if (findFn(component)) {
              return replaceFn(component)
            }

            return findAndReplace(component)
          })
        }

        return collection
      }, $)
    }

    return $
  })(obj)
})

export const findAndUpdateComponent = findAndUpdate(['components', 'columns', 'rows'])
