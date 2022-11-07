<template>
    <div class="container container-home">
        <div class="big-title">DisBotify</div>
        <div class="title" style="color: var(--cw-tent);">Configure your own Discord Bot, <br> party or business assistant</div>
    </div>

    <div class="container container-why">
        <div class="container-why-left">
            <div class="big-title">Why choose DisBotify?</div>
            <div>
                <img src="../../assets/Images/Icons/Check.svg" alt="check" height="40" width="40">
                <span class="medium-title">Intuitive design</span>
            </div>
            <div>
                <img src="../../assets/Images/Icons/Check.svg" alt="check" height="40" width="40">
                <span class="medium-title">Easy to use</span>
            </div>
            <div>
                <img src="../../assets/Images/Icons/Check.svg" alt="check" height="40" width="40">
                <span class="medium-title">Instant result</span>
            </div>
            <div>
                <img src="../../assets/Images/Icons/Check.svg" alt="check" height="40" width="40">
                <span class="medium-title">Simple to scale</span>
            </div>
        </div>
        <div class="container-why-right">
            <img src="../../assets/Images/discord-bot.svg" alt="bot">
        </div>
    </div>

    <div class="container container-join">
        <div class="medium-title">Ready to start?</div>
        <div class="small-title">Before jumping to building the bot,<br> you need to make some aditional steps</div>
        <div class="btn-basic">
            <router-link to="/configuration">Configuration</router-link>
        </div>
    </div>
</template>

<script>
import '../../assets/CSS/reset-sheet.css';
import '../../assets/CSS/root.css';

export default {

}
</script>

<style scoped>
    .container-home{
        background-color:hsla(216,18%,16%,1);
        background-image:
                radial-gradient(at 100% 97%, hsla(271,60%,75%,0) 0px, transparent 50%),
                radial-gradient(at 100% 97%, hsla(272,87%,36%,0.66) 0px, transparent 50%);
        align-items: center;
        justify-content: flex-end;
        text-align: center;
        height: 50vh;
    }

    .home-logo
    .big-title{
        margin-bottom: 16px;
    }

    #bot-botify{
        max-height: 15rem;
        width: 50%;
    }

    /* WHY? */
    .container-why{
        background: var(--cw-second);
        display: flex;
        flex-direction: row;
    }

    .container-why-left, 
    .container-why-right{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .container-why-right{
        align-items: center;
        justify-content: center;
    }

    .container-why-left
    .big-title{ color: var(--cw-tent);}

    .container-why-left div{ display: flex; align-items: flex-start; margin-bottom: var(--S-padding); width: '100%'; }
    .container-why-left div span{ margin-left: var(--M-padding); color: var(--cw-tent);}
    .container-why-left div img{ margin-left: var(--L-padding); }

    .container-why-right img{ height: auto; width: 75%;}

    /* JOIN */
    .container-join{
        background: var(--cw-main);
        align-items: center;
        justify-content: center;
    }

    .container-join .medium-title{ color: var(--cw-stroke);}
    .container-join .small-title{ color: var(--cw-tent); margin: 16px 0;}
    .container-join .btn-basic{ 
        border: 2px solid var(--cw-stroke);
        color: var(--cw-stroke);
    }
    .container-join .btn-basic a{ color: var(--cw-stroke); text-decoration: none;}
</style>