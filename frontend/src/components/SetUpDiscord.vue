<template>
    <div class="container">
        <!-- CREATE BOT -->
        <div class="container-split">
            <div class="container-split-innter">
                <div class="big-title">1. Create a bot account</div>
                <div class="medium-title"><span class="colored">STEP 1: </span>Log into the Discord Website.</div>

                <div class="medium-title"><span class="colored">STEP 2: </span>Navigate to the application page</div>

                <div class="medium-title"><span class="colored">STEP 3: </span>Click the button:</div>
                <img src="../assets/Images/SetUp/newapp.png" alt="newapp">

                <div class="medium-title"><span class="colored">STEP 4: </span>Name the application and create it</div>
                <img src="../assets/Images/SetUp/create.png" alt="create">

                <div class="medium-title"><span class="colored">STEP 5: </span>Go to "Bot" Tab -> "Add bot"</div>
                <p class="description-text">Click "Yes, do it!"</p>
                <img src="../assets/Images/SetUp/buildbot.webp" alt="buildbot" class="bigger-img">

                <div class="medium-title"><span class="colored">STEP 6: </span>Tick "Public bot"</div>
                <p class="description-text">You should also make sure that <span class="colored">Require OAuth2 Code Grant</span> is unchecked unless you are developing a service that needs it. If you’re unsure, then leave it unchecked.</p>
                <img src="../assets/Images/SetUp/allowbot.png" alt="allowbot">

                <div class="medium-title"><span class="colored">STEP 7: </span>Copy your bot's token</div>
                <p class="description-text">It should be worth noting that this token is essentially your <span class="colored">bot’s password</span>. Only share it if necessary.</p>
            </div>
            <div class="container-split-innter">
                <div class="big-title">2. So... you have created a bot. Now what?</div>
                <div class="medium-title"><span class="colored">STEP 1: </span>Click on your bot's page</div>

                <div class="medium-title"><span class="colored">STEP 2: </span>Go to the “OAuth2” tab</div>
                <img src="../assets/Images/SetUp/oauth2.webp" alt="oauth2" >

                <div class="medium-title"><span class="colored">STEP 3: </span>Tick the bot checkbox under scopes</div>
                <img src="../assets/Images/SetUp/checkbox.webp" alt="checkbox" class="bigger-img">

                <div class="medium-title"><span class="colored">STEP 4: </span>Tick the followin Bot Permissions</div>
                <img src="../assets/Images/SetUp/ticker.webp" alt="ticker" class="bigger-img">

                <div class="medium-title"><span class="colored">STEP 5: </span>Go to "Bot" Tab -> "Add bot"</div>
                <p class="description-text">Please be aware of the consequences of requiring your bot to have the “Administrator” permission</p>

                <div class="medium-title"><span class="colored">STEP 6: </span>Now the resulting URL can be used to add your bot to a server. Copy and paste the URL into your browser, choose a server to invite the bot to, and click “Authorize”</div>
                
                <div class="big-title" style="margin-bottom: 0">D O N E</div>
                <div class="small-title">Now, come with me...</div>
                <div class="btn-basic">
                    <router-link to="/dashboard">Dashboard</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .container{ background: var(--cw-main); }
    .colored{ color: var(--cw-discord-tent); }

    .container-split{display: flex; }
    .container-split div{ flex: 1;}
    .container-split-innter{ padding: 2rem;}

    .container .description-text,
    .container img{  margin-bottom: 16px;}
    .container img{
        height: auto;
        width: 75%;
    }
    .container .bigger-img img{ width: 100% }

    .container
    .medium-title{ color: var(--cw-tent); margin-bottom: 16px;}

    .container .small-title{ margin: 16px 0; color: var(--cw-tent); }
    .container .btn-basic{ 
        border: 2px solid var(--cw-stroke);
        color: var(--cw-stroke);
        max-width: 7rem;
        text-align: center;
    }
    .container .btn-basic a{ color: var(--cw-stroke); text-decoration: none;}
</style>