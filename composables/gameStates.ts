import { Ref } from "nuxt/dist/app/compat/capi";

type GameState = {
  messeges: string[];
  hero: CharacterState;
  monsters: Array<CharacterState>;
  weapons: Array<CharacterState>;
  armors: Array<CharacterState>;
};
type CharacterState = {
  name: string;
  hp: number;
  st: number;
  ac: number;
  dc: number;
};

export const useGameStore = () => {
  const state = useState<GameState>("game", () => ({
    messeges: [],
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
  }));
  return {
    state: readonly(state),
    init: init(state),
    battle: battle(state),
  };
};

const init = (state: Ref<GameState>) => {
  return () => state.value;
};

const battle = (state: Ref<GameState>) => {
  return (count: number) => (
    state.value.hero.hp = count
  );
};

