<template>
    <input type="text" v-model="contents" v-on:keyup.enter="addList" />
    <button v-on:click="addList">추가</button>
</template>

<script>
import { ref } from 'vue';

export default {
    emits: ['addList'],
    setup(_, { emit }) {
        const contents = ref("");

        function addList() {
            if (!contents.value) return;
            emit('addList', contents.value);
            contents.value = ""
        }

        return {
            contents,
            addList
        }
    }
}
</script>

<style></style>