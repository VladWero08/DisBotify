<template>
    <div class="dashboard-bot">
        <div class="dashboard-new-features">
            <div class="current-feature-btns" style="justify-content: unset">
                <img src="../../assets/Images/Icons/delete-dark.svg" class="btn-basic" alt="delete" height="24" width="24" @click="clearMessage">
                <input type="text" placeholder="Bot's token..." class="input-bot medium-title" v-model="token">
            </div>
            
            <music-feature v-if="this.getFormStatus == 'music'"></music-feature>
            <message-feature v-else-if="this.getFormStatus == 'msg'"></message-feature>
            <kick-feature v-else-if="this.getFormStatus == 'kick'">kick</kick-feature>
            <ban-feature v-else-if="this.getFormStatus == 'ban'"></ban-feature>
            <mute-feature v-else-if="this.getFormStatus == 'mute'">mute</mute-feature>
            <join-feature v-else-if="this.getFormStatus == 'on_join'"></join-feature>
        </div>

        <dashboard-features></dashboard-features>
    </div>
</template>

<script>
import MuteFeature from '../Features/MuteFeature.vue';
import KickFeature from '../Features/KickFeature.vue';
import BanFeature from '../Features/BanFeature.vue';
import DashboardFeatures from '../Features/DashboardFeatures.vue';
import MusicFeature from '../Features/MusicFeature.vue';
import MessageFeature from '../Features/MessageFeature.vue';
import JoinFeature from '../Features/JoinFeature.vue';

export default {
    components:{
        DashboardFeatures,
        MusicFeature,
        MessageFeature,
        MuteFeature,
        BanFeature,
        KickFeature,
        JoinFeature
    },
    data() {
        return {
            token: ""
        }
    },
    watch: {
        token() {
            this.$store.commit('setToken', this.token)
        }
    },
    computed: {
        getFormStatus() {
            return this.$store.state.currentForm
        }
    },
    methods: {
        clearMessage(){
            this.token = ""
        },
    }
}
</script>

<style scoped>
    .dashboard-bot{
        height: calc(100vh -62px) !important;
        flex: 9;
        display: flex;
        padding: var(--S-padding);
    }

    .dashboard-new-features,
    .dashboard-current-features{ flex: 1;border-radius: 10px;}

    .current-feature-btns{ display: flex; align-items: center; justify-content: space-between; }

    .dashboard-new-features
    .current-feature-btns{ margin-bottom: var(--M-padding); }

    /* NEW FEATURES */
    
    .dashboard-new-features{
        display: flex;
        flex-direction: column;
        padding: var(--S-padding);
        padding-left: 0;
    }

    .input-bot{
        width: 100%;
        padding: var(--S-padding);
        border: none;
        overflow-x: hidden;
        border-bottom: 1px solid var(--cw-main);
    }
</style>