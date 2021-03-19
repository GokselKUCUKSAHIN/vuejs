<template>
  <li class="list-group-item">
    Sunucu #{{ serverProp.id }}
    <p> Durumu: <strong>{{ serverProp.status }}</strong></p>
  </li>
</template>

<script>
import {eventBus} from "../../main";

export default {
  name: "app-server",
  props: {
    serverProp: {
      type: Object,
      default: {id: 0, status: "bilinmiyor"},
    },
  },

}
</script>

<style scoped>

</style>
