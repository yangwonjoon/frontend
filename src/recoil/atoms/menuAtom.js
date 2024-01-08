import { atom } from "recoil"

export const menuAtom = atom({
    key: "menuAtom",
    default: {
        moresoju: 0,
        undersoju: 0,
        underBeer: 0,
        moreBeer: 0,
        category: '',
    }
})