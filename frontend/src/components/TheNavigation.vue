<template>
    <nav>
        <div class="nav-logo">  
            <img src="../assets/Images/DisBotify.svg" alt="">
            <div class="big-title" style="margin-bottom: 0">DisBotify</div>
        </div>
        <div class="nav-links">
            <div class="nav-link">
                <router-link to="/">Home</router-link>
            </div>
            <div class="nav-link">
                <router-link to="/configuration">Set up</router-link>
            </div>
            <div class="nav-link">
                <router-link to="/dashboard">Dashboard</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    nav{
        background: var(--cw-stroke-tent);
        display: flex;
        justify-content: space-evenly;
        padding:var(--S-padding) 10%;
        padding-left: 2rem;
    }

    .nav-logo{ flex: 1; display: flex; align-items: center;}
    .nav-logo img{ width: 2rem; margin-right: 8px;}
    .nav-logo
    .big-title{ font-size: var(--M-title); margin-bottom: none;}

    .nav-links{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .nav-link,
    .nav-link a{
        color: var(--cw-tent);
        text-decoration: none;
        font-weight: 500;
    }

    .nav-link:not(:last-child){ margin-right: var(--M-padding);}
</style>