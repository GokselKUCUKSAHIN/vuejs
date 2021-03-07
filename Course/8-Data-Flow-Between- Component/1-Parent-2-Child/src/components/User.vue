<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani her şeyin import edildiği component :)</p>
    <button @click="changeName">Adımı Değiştir</button>
    <button @click="title = 123">Sayı gönder</button>
    <button @click="title = undefined">Boş gönder</button>
    <hr />
    <div class="row">
      <app-user-detail :name="title"></app-user-detail>
      <app-user-edit></app-user-edit>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
export default {
  components: {
    "app-user-detail": UserDetail,
    "app-user-edit": UserEdit,
  },
  data() {
    return {
      title: "Göksel",
    };
  },
  methods: {
    changeName() {
      this.title = "KÜÇÜKŞAHİN";
    },
  },
};
</script>

<style>
div.container {
  margin-top: 30px;
  padding: 20px 40px;
  background-color: #6a8d99;
  border: 1px solid #666;
}
div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
