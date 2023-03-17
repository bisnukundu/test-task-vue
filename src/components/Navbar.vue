<script setup>
import { ref } from 'vue';
const mobile_menu = ref(false)
const menuToggle = () => {
    mobile_menu.value = !mobile_menu.value
    console.log("working...")
}
</script>
<template>
    <div class="desktop_menu">
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'top' } }">
            Top Games
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'new' } }">
            New Games
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'slots' } }">
            Slots
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'Jackpot' } }">
            Jackpots
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'live' } }">
            Live
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'blackjack' } }">
            Blackjack
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'roulette' } }">
            Roulette
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'table' } }">
            Table
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'poker' } }">
            Poker
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'others' } }">
            Other
        </RouterLink>
    </div>
    <div class="mobile_menu_icon">
        <button @click="menuToggle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                style="width:20px;height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    </div>
    <!-- Mobile menu  -->
    <div class="mobile_menu" v-if="mobile_menu">
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'top' } }">
            Top Games
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'new' } }">
            New Games
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'slots' } }">
            Slots
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'Jackpot' } }">
            Jackpots
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'live' } }">
            Live
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'blackjack' } }">
            Blackjack
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'roulette' } }">
            Roulette
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'table' } }">
            Table
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'poker' } }">
            Poker
        </RouterLink>
        <RouterLink active-class="active-link" :to="{ name: 'games', params: { category: 'others' } }">
            Other
        </RouterLink>
    </div>
</template>
<!-- ['poker', 'jackpot', roulette,blackjack, slots, new, top] -->
<style scoped>
/* #373737 #8DC63F #FFFFFF #FCFCFC */
.mobile_menu {
    display: flex;
    flex-direction: column;
}

div {

    background-color: #373737;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    width: 100%;

    justify-content: center;
    justify-items: center;
    text-align: center;
    /* background-color: #8DC63F; */
}

div a {
    color: #FFFFFF;
    text-decoration: none;
    padding: 20px 10px;
    display: inline-block;
    font-size: 25px;
}

.active-link {
    background-color: #8DC63F;
}

.mobile_menu_icon {
    background-color: #373737;
    color: #fff;
    padding: 10px 20px;
    width: 100%;
}

.mobile_menu_icon button {
    background-color: #373737;
    color: #fff;
    padding: 10px 20px;
}

@media (max-width: 767px) {
    .desktop_menu {
        display: none
    }

    .mobile_menu_icon {
        display: block
    }
}
@media (min-width: 767px) {
    .desktop_menu {
        display: grid
    }

    .mobile_menu_icon {
        display: none
    }
}
</style>