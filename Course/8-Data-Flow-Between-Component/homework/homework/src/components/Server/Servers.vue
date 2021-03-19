<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server
        v-for="(server, index) in servers"
        :key="index" :server-prop="server"
        @click.native="showStatus(server)"
      ></app-server>

    </ul>
  </div>
</template>

<script>
import {eventBus} from "../../main";
import Server from "./Server"

export default {
  components: {
    "app-server": Server,
  },
  data() {
    return {
      servers: [
        {id: 1, status: "Kritik"},
        {id: 2, status: "Sorun"},
        {id: 3, status: "Bilinmiyor"},
        {id: 4, status: "Tehlikede"},
        {id: 5, status: "Kritik"},
      ],
    }
  },
  methods: {
    showStatus(server) {
      eventBus.sendServerData(server);
    }
  }
};

</script>
