import { createMachine, assign } from 'xstate'

// ddashboard entrega los 10 primeros, paltinos y conteo
const getDashboardData = async() => {

  const dataBoard = await fetch("/api/dashboard")
    .then(res => res.json())
    .then(data => data.data)

    return dataBoard
}

const getAllGames = async () => {

  const allGames = await fetch("/api/fedecreator")
  .then(res => res.json())
  .then(data => data.data)

  console.log(allGames)

  return allGames

}

export const loboMachine = createMachine({
  id: "Timy",
  init: "init",
  context: {
    dashboard: [],
    listGames: []
  },
  states: {
    init: {},
    getDataBoard: {
      invoke: {
        src: getDashboardData,
        onDone: {
          target: 'success',
          actions: assign({
            dashboard: (ctx, event) => event.data
          })
        },
        onError: {
          target: "error"
        }
      }
    },
    getAllGames: {
      invoke: {
        src: getAllGames,
        onDone: ({
          target: 'success',
          actions: assign({
            listGames: (ctx, event) => event.data
          })
        }),
        onError: {
          target: "error"
        }
      }

    },
    success: {},
    error: {}
  },
  on: {
    GET_ALL_GAMES: {
      target: "getAllGames"
    },
    GET_DATA_BOARD: {
      target: "getDataBoard"
    }
  }

})