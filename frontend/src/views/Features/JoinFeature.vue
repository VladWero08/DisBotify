<template>
  <form class="add-feature" @submit.prevent="addJoinFeature">
      <h1 class="add-feature-title">Welcome Message:</h1>
      <h2 class="add-feature-subtitle">The bot will send a message to every user who joins the server</h2>
      <h1 class="description-text">Type a message:</h1>
      <input 
          type="text" 
          name="type-to-send"
          v-model="bot_msg"
          :class="{ isError: isCompleted}"
      >
      <p class="caption-text error-text" v-if="isCompleted">You need to complete this field!</p>
      <p class="caption-text">This action set a welcome message.</p>

      <button 
          type="submit"
          class="btn-basic btn-add-feature"
      >CREATE</button>
  </form>
</template>

<script>
import '../../assets/CSS/reset-sheet.css';
import '../../assets/CSS/root.css';
import '../../assets/CSS/feature.css';

export default {
  name: 'JoinFeature',
  data() {
      return {
            bot_msg: "",
            isCompleted: false,
      }
  },
  methods:{
      addJoinFeature(){
          if (this.bot_msg) {
              this.isCompleted = false;
              this.$store.commit('addFeature', {
                  name: 'Join',
                  action: 'on_join',
                  params: [this.bot_msg],
                  when: `When the user joines the server`,
                  what: `The bot will send him a private message with the text <span class="feature-important">'${this.bot_msg}'</span>`
              })
          } else {
              this.isCompleted = true;
          }
      }
  }
}
</script>