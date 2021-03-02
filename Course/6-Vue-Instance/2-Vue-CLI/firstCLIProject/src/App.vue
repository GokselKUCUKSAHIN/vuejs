<template>
  <div>
    <h1>Sunucu durumu {{ status }}</h1>
    <lamp-comp></lamp-comp>
  </div>
</template>
<script>
export default {
  data() {
    return { status: "pasif" };
  }
};
</script>
