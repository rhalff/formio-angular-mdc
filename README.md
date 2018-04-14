# POC Angular-formio & Material Webcomponents

Proof of concept for [angular-formio](https://github.com/formio/angular-formio) and [material-components-web](https://github.com/material-components/material-components-web).

## Components

Components which should work.

 - [button](https://github.com/rhalff/formio-angular-mdc/blob/master/src/app/material/components/button/Button.ts)
 - [column(s)](https://github.com/rhalff/formio-angular-mdc/blob/master/src/app/material/components/columns/Columns.ts)
 - [email](https://github.com/rhalff/formio-angular-mdc/blob/master/src/app/material/components/email/Email.ts)
 - [hidden](https://github.com/rhalff/formio-angular-mdc/blob/master/src/app/material/components/hidden/Hidden.ts)
 - [password](https://github.com/rhalff/formio-angular-mdc/blob/master/src/app/material/components/password/Password.ts)
 - [phonenumber](https://github.com/rhalff/formio-angular-mdc/blob/master/src/app/material/components/phonenumber/PhoneNumber.ts)
 - [select](https://github.com/rhalff/formio-angular-mdc/blob/master/src/app/material/components/select/Select.ts)
 - [textarea](https://github.com/rhalff/formio-angular-mdc/blob/master/src/app/material/components/textarea/TextArea.ts)
 - [textfield](https://github.com/rhalff/formio-angular-mdc/blob/master/src/app/material/components/textfield/TextField.ts)
 
Rest of the components just extend the original components and will probably not render correctly as they are still expecting bootstrap.

## Demo

A demo is available at github pages: https://rhalff.github.io/formio-angular-mdc

## Installation

```
yarn install
```

## Development

Change the appUrl in `environments/environment.ts` to your own form url:

```typescript
export const environment = {
  production: false,
  appUrl: 'https://drptiyhiheyemsr.form.io/testapplication'
}
```

```
yarn start 
```










