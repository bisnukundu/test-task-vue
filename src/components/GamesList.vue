<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useGamesStore } from '../stores/games'
const gameStore = useGamesStore();
const route = useRoute();
const games = ref([]);
const jackpotRef = ref([]);


const jackpotData = async () => {

    const gamesData = await gameStore.getGames();
    const jackpot_ = await gameStore.jackpot();
    let arr = [];
    gamesData.data.map((game) => {
        return jackpot_.data.some((jac) => {
            if (game.id === jac.game) {
                arr.push({ ...game, ...jac })
            }
        })
    })
    jackpotRef.value = arr;
}

const filterData = async (category) => {
    const gamesData = await gameStore.getGames();
    const category_name = ['poker', 'jackpot', 'roulette', 'blackjack', 'slots', 'new', 'top'];

    if (category == "others") {
        const filterGame = gamesData.data.filter((game) => {
            return !game.categories.some((ca) => category_name.includes(ca))
        })
        games.value = filterGame

    } else {
        const filterGame = gamesData.data.filter((game) => {
            return game.categories.includes(category)
        })
        games.value = filterGame
    }
}

onMounted(() => {
    filterData(route.params.category)
    setInterval(() => { jackpotData(); console.log("call") }, 1000)
})

watchEffect(() => {
    // console.log('Route params updated:', route.params);
    filterData(route.params.category)
});

</script>
<template>
    <div class="gameContainer">

        <template v-if="route.params.category === 'Jackpot'">
            <template v-for="game in jackpotRef" :key="game.id">
                <div class="game_item">
                    <!-- ribbon  -->
                    <div class="amount"> {{ game.amount }}</div>
                    <div v-if="game.categories.includes('new')" class="ribone">New</div>
                    <div v-else-if="game.categories.includes('top')" class="ribone">Top</div>


                    <div class="gameInfo">
                        <div>
                            <div class="play_button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                </svg>
                            </div>
                            <div class="game_title">
                                <h3>{{ game.name }}</h3>
                            </div>

                            <div class="categorys">
                                <template v-for="category in game.categories" :key="game.id">
                                    <p class="category">| {{ category }} |</p>
                                </template>
                            </div>
                        </div>
                    </div>
                    <img class="game_cover" :src="game.image" alt="Game Image Not Found">
                </div>
            </template>
        </template>
        <template v-else>
            <template v-if="games.length > 0">
                <!-- Only For Jackpot  -->
                <template v-for="game in games" :key="game.id">
                    <div class="game_item">
                        <!-- ribbon  -->
                        <div v-if="game.categories.includes('new')" class="ribone">New</div>
                        <div v-else-if="game.categories.includes('top')" class="ribone">Top</div>


                        <div class="gameInfo">
                            <div>
                                <div class="play_button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                </div>
                                <div class="game_title">
                                    <h3>{{ game.name }}</h3>
                                </div>

                                <div class="categorys">
                                    <template v-for="category in game.categories" :key="game.id">
                                        <p class="category">| {{ category }} |</p>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <img class="game_cover" :src="game.image" alt="Game Image Not Found">
                    </div>
                </template>
            </template>
            <div v-else>
                <h1>Games not found</h1>
            </div>
        </template>
    </div>
</template>
<style scoped>
.ribone {
    box-shadow: 2px 3px 3px white;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #8DC63F;
    color: #fcfcfc;
    padding: 6px 30px;
    display: inline-block;
    border-radius: 20px 0px 0px 20px;
    font-weight: bold;
}

.amount {
    box-shadow: 2px 3px 3px white;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #8DC63F;
    color: #fcfcfc;
    padding: 6px 30px;
    display: inline-block;
    border-radius: 0px 20px 20px 0px;
    font-weight: bold;
}


.play_button {
    cursor: pointer;
}

.play_button svg {
    width: 70px;
    height: 70px;
}

.gameContainer {
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px 20px;

}

.game_item {
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;

}

.game_item,
img {
    width: 100%;
    height: 100%;

}


.game_cover {
    border-radius: 20px;
}

.categorys p {
    padding: 0;
    margin: 0;
    margin-top: 5px;
}

.categorys {
    display: flex;
    gap: 10px;
    text-align: center;
    justify-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
}

.game_title h3 {
    padding: 0;
    margin: 0;
    display: inline-block;
}

.gameInfo {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #373737;
    color: #fff;
    text-align: center;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    display: none;
}

.game_item:hover .gameInfo {
    display: flex;
    transition: 1ms;
}

/* @media (min-width: 992px) and (max-width: 1199px) {
    .gameContainer {
        display: grid;
        justify-content: center;
        justify-items: center;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px 20px
    }
} */
</style>