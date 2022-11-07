<template>
    <div class="add-feature">
        <h1 class="add-feature-title">Message:</h1>
        <h2 class="add-feature-subtitle">Send message when an user uses a certan word</h2>
 
        <h1 class="description-text">Message to be sent...</h1>
        <input type="text" 
            name="bot_msg" 
            v-model="bot_msg"
            :class="{ isError: isCompleted}"
        />
        <h1 class="description-text">...when this word is used</h1>
        <input type="text" 
            name="user_msg" 
            v-model="user_msg"
            :class="{ isError: isCompleted}"
        >

        <p class="caption-text error-text" v-if="isCompleted">You need to complete both fields</p>
        <p class="caption-text">This action will automatically send messages to the channel's users.</p>
        <button 
            class="btn-basic btn-add-feature"
            @click="addMessageFeature"
        >CREATE</button>
    </div>
</template>

<script>
import '../../assets/CSS/reset-sheet.css';
import '../../assets/CSS/root.css';
import '../../assets/CSS/feature.css';

export default {
    name: 'MessageFeature',
    data(){
        return{
            isCompleted: false,
            bot_msg: "",
            user_msg: "",
        }
    },
    methods:{
        addMessageFeature(){
            if(this.user_msg && this.bot_msg){
                this.isCompleted = false;
                this.$store.commit('addFeature', {
                    name: 'Message',
                    action: 'msg',
                    user_msg: this.user_msg,
                    params: [this.bot_msg],
                    when: `When the user types <span class="feature-important">'${this.user_msg}'</span>`,
                    what: `The bot will say <span class="feature-important">'${this.bot_msg}'</span>`
                })
            } else{
                this.isCompleted = true;
            }
        }
    }
}
</script>



