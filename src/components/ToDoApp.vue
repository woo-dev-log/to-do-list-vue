<template>
  <div>
    <h1>{{ msg }}</h1>
    <ToDoInput @addList="addList" />
    <li v-for="todolist in list" v-bind:key="todolist">{{ todolist }}</li>
  </div>
</template>

<script>
import ToDoInput from './ToDoInput.vue';

export default {
  data() {
    return {
      list: []
    }
  },
  props: {
    msg: String
  },
  components: {
    ToDoInput
  },
  methods: {
    addList(contents) {
      this.list.push(contents);
    }
  }
}
</script>

<style scoped>
  li {
    font-size: 20px;
    font-weight: bold;
  }
</style>
