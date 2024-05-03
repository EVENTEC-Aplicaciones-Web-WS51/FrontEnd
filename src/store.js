import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoginClicked: false
    },
    mutations: {
        setLoginClicked(state, value) {
            state.isLoginClicked = value;
        }
    }
});