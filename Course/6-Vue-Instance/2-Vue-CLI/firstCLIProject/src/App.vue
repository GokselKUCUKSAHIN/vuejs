<template>
  <div>
    <h1>Sunucu durumu {{ status }}</h1>
    <lamps></lamps>
  </div>
</template>
<script>
export default {
  data() {
    return { status: "pasif" };
  }
};
</script>