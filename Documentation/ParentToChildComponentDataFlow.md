# VueJS Parent Component to Child Component

## on Child Component

We need _props_ for sending data to child component. 
Setting names for reciving attributes.
```js
export default {
  props: ["attr1", "attr2", "attr3"],
  data() {
    return {
      someData: "value",
      fiz: "buz",
    };
  },
};
```
in this example; We define attr1, attr2 and attr3 attributes.

## on Parent Component
```js
<child-component attr1="foo" attr2="bar" attr3="fiz" ></child-component>
```
Sending data using defined props.

## Validate Props


```js
export default {
  props: {
    attr1: String,
    attr2: Number,
    attr3: BigInt
  },
  data() {
    return {
      someData: "value",
      fiz: "buz",
    };
  },
};
```
We define attr1 as String, attr2 as Number and attr3 as BigInt. 

```js
<child-component attr1="foo" attr2="123" attr3="123231312312313131231n" ></child-component>
```

