<template>
  <div>
    <h1>{{ msg }}</h1>
    <ToDoInput @addList="addList" />
    <li v-for="todolist in list" v-bind:key="todolist">{{ todolist }}</li>
  </div>
</template>

<script>
import ToDoInput from './ToDoInput.vue';
import { ref } from 'vue';

export default {
  props: {
    msg: String
  },
  components: {
    ToDoInput
  },
  setup() {
    const list = ref([]);

    function addList(contents) {
      list.value.push(contents);
    }

    return {
      list,
      addList
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
