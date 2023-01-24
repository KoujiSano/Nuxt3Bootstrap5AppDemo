import { rand } from "@vueuse/core";
import { Ref } from "nuxt/dist/app/compat/capi";

type GameState = {
  messeges: Array<string>;
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
    addMessage: addMessage(state)
  };
};

const init = (state: Ref<GameState>) => {
  return (heroName: string) => {
    state.value.hero = initCharacter(heroName, 1, 100)
    state.value.monsters.push(initCharacter("スライム", 1, 100))
    state.value.monsters.push(initCharacter("ゴブリン", 1, 100))
    state.value.monsters.push(initCharacter("ゴブリン", 1, 100))
  };
};

const initCharacter = (name: string, min: number, max: number): CharacterState => {
  return {
    name: name,
    hp: rand(min, max),
    st: rand(min, max),
    ac: rand(min, max),
    dc: rand(min, max)
  };
};

const addMessage = (state: Ref<GameState>) => {
  return (message: string) => {
    state.value.messeges.push(message)
  }
}

const battle = (state: Ref<GameState>) => {
  return (count: number) => (
    state.value.hero.hp = count
  );
};

