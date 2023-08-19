export default {
    state: {
        list: []
    },
    mutations: {
        addList(state, contents) {
            state.list.push(contents);
        },
        deleteList(state, index) {
            state.list.splice(index, 1);
        }
    },
    actions: {
        addList({ commit }, contents) {
            commit('addList', contents);
        },
        deleteList({ commit }, index) {
            commit('deleteList', index);
        }
    }
};