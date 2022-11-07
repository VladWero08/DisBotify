import { createStore } from 'vuex'

export default createStore({
    state:{
        features: [],
        featureMusic: false,
        currentForm: "",
        token: ""
    },
    mutations:{
        addFeature(state, payload){
            const new_id = state.features.length;
            
            if(payload.name === 'Music'){
                state.featureMusic = true;
            }
            
            state.features.push({
                id: new_id,
                user_msg: payload.user_msg,
                action: payload.action,
                params: payload.params,
                name: payload.name,
                when: payload.when,
                what: payload.what,
            })
            state.currentForm = ""
        },
        deleteFeature(state, payload){
            for(let i = 0; i < state.features.length; i++){
                if( state.features[i].id === payload.nth_element){
                    state.features.splice(i,1);
                    break;
                }
            }
        },
        deleteAllFeatures(state) {
            state.features = []
        },
        setCurrentForm(state, payload) {
            state.currentForm = payload
        },
        setFeatureMusic(state, payload){
            state.featureMusic = payload
        },
        setToken(state, payload) {
            state.token = payload
        }
    },
    actions:{

    },
    modules:{

    }
})