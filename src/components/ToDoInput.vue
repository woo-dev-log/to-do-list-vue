<template>
    <input type="text" v-model="contents" v-on:keyup.enter="addList" />
    <button v-on:click="addList">추가</button>
</template>

<script>
export default {
    data() {
        return {
            contents: '',
        }
    },
    emits: ['addList'],
    methods: {
        addList() {
            if (!this.contents) return;
            this.$emit('addList', this.contents);
            this.contents = ''
        }
    }
}
</script>

<style></style>