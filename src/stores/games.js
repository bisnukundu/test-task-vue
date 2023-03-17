import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGamesStore = defineStore('games', () => {
  const URL = 'http://stage.whgstage.com/front-end-test/games.php'
  const JackpotURL = 'http://stage.whgstage.com/front-end-test/jackpots.php'
  const getGames = async () => {
    const games = await axios.get(URL)
    return games
  }
  const jackpot = async () => {
    return await axios.get(JackpotURL)
  }

  return { getGames, jackpot }
})
