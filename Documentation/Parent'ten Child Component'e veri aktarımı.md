# VueJS Parent Component'ten Child Component'e Veri Akışı

## Child tarafı:

Parent tarafından gönderilen verileri almak için _props_ isimli yapıyı kullanıyoruz. _props_ aynı _methods_, _data_, _computed_ vs gibi bir Vue Instance'ının bir elemanı.

```js
export default {
  props: ["name", "phoneNumber", "numberOfStars"],
  data() {
    return {
      ...
    };
  },
};
```

export default içerisine yukarıdaki şekilde **Array** Syntax'ı _n_ adet prop tanımlanabilir. Tanımlanan prop'lar aynı _data_, _computed property_ gibi {{ handlebar }} Syntax'ı ile kullanılabilir.
<br/>
<br/>

## Parent Component ile Veriyi Göndermek

```js
<child-component
  name="Göksel"
  phoneNumber="05123123123"
  numberOfStars="7823438823748374823n"
></child-component>
```

HTML property'si şeklinde kullanılabilir.
<br/>
<br/>

## Prop'ları Doğrulamak

```js
export default {
  props: {
    name: String,
    phoneNumber: Number,
    numberOfStars: [Number, BigInt],
  },
  data() {
    return {
      ...
    };
  },
};
```

**name** _String_, **phoneNumber** _Number_ ve **numberOfStars** ise _BigInt_ veya _Number_ olarak tanımladı.

```js
<child-component
  name="Göksel"
  phoneNumber="rainbows"
  numberOfStars="123231312312313131231n"
></child-component>
```

### Bir şeyler ters gitti! ⚠️

Çünkü **phoneNumber** _Number_ olarak tanımlandığı halde _String_ gönderildi. Vue bize bir hata gönderecektir.

## Prop'ları Daha Detaylı Doğrulamak

```js
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    numberOfStars: {
      type: [Number, BigInt],
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      ...
    };
  },
};
```

Sadece tiplerini değil. Gerekli olup olmama durumu ve boş bırakılma durumunda _default_ değerinin ne olacağını belirleyebiliyoruz.