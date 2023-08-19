<template>
  <h1>{{ msg }}</h1>
  <ToDoInput @addList="addList" />

  <h2 v-if="(list.length > 0)">{{ list.length }}개의 리스트가 있습니다.</h2>
  <h2 v-else>등록된 리스트가 없습니다.</h2>

  <ul>
    <li v-for="(todolist, index) in list" v-bind:key="todolist">{{ todolist }}
      <button v-on:click="deleteList(index)">삭제</button>
    </li>
  </ul>
</template>

<script>
import ToDoInput from './ToDoInput.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    msg: String
  },
  components: {
    ToDoInput
  },
  setup() {
    const store = useStore();
    const list = computed(() => store.state.list.list);

    function addList(contents) {
      store.dispatch("addList", contents);
    }

    function deleteList(index) {
      store.dispatch("deleteList", index);
    }

    return {
      list,
      addList,
      deleteList
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border: 1px solid black;
  min-width: 500px;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
}

button {
  cursor: pointer;
  border: 1px solid black;
  background-color: white;
  width: 50px;
  height: 30px;
  font-weight: bold;
}
</style>