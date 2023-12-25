import { atom } from "recoil"

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const menuAtom = atom({
    key: "menuAtom",
    default: {
        underBeer: 0,
        moreBeer: 0,
        category: '',
    }
    , effects_UNSTABLE: [persistAtom],
})