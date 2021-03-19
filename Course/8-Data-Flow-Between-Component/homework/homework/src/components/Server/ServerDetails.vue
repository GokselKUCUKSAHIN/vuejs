<template>
  <div class="col-xs-12 col-sm-6">
    <p>Sunucu Durumu: {{ server.status }}
      <button
        v-if="this.server.id"
        @click="changeStatus('Normal')">
        Düzelt
      </button>
    </p>
  </div>
</template>
<script>
import {eventBus} from "../../main";

export default {
  data() {
    return {
      server: {id: 0, status: "null"},
    }
  },
  methods: {
    changeStatus(newValue) {
      this.server.status = "Normal";
    },
  },
  created() {
    eventBus.$on("server-info", value => {
      this.server = value;
    });
  },
}
</script>
