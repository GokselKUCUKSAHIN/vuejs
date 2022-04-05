## Vue.js Documentation.
[![](Resources/img/vue.png "vuejs.org")](https://vuejs.org/guide/introduction.html)

### `Vue App with Vite`
```console
npm create vite@latest
```

## My Docs

### Computed with TypeScript & Composition API
#### Readonly
```ts
const nameAndCountry: ComputedRef<string> = computed((): string => {
  `The movie name is ${movieName.value} from ${country.value}
}`);
```

#### Writable ( get / set )
```ts
const nameAndCountry: WritableComputedRef<string> = computed({
  get(): string {
    return 'somestring'
  },
  set(newValue: string): void {
    // set something
  },
});
```

### Boostrap with Vite/Vue
```console
npm i boostrap jquery popper.js
```

inside `main.ts` import
```ts
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
```