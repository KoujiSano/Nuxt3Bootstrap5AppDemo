export const useGameState = () => useState('game', () => {
  return {
    messeges: [

    ],
    hero: {
      name: "",
      hp: 0,
      st: 0,
      ac: 0,
      dc: 0,
    },
    monsters: [
      {
        name: "",
        hp: 0,
        st: 0,
        ac: 0,
        dc: 0,
      },
      {
        name: "",
        hp: 0,
        st: 0,
        ac: 0,
        dc: 0,
      },
    ],
    weapons: [
      {
        name: "",
        hp: 0,
        st: 0,
        ac: 0,
        dc: 0,
      },
    ],
    armors: [
      {
        name: "",
        hp: 0,
        st: 0,
        ac: 0,
        dc: 0,
      },
    ]
  }
})