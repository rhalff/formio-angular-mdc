export function mixin (derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (
        name !== 'constructor' &&
        !derivedCtor.prototype.hasOwnProperty(name)
      ) {
        const descriptor = Reflect.getOwnPropertyDescriptor(baseCtor.prototype, name)

        Reflect.defineProperty(
          derivedCtor.prototype,
          name,
          descriptor
        )
      }
    })
  })
}
