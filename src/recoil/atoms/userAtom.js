import { atom } from "recoil"


export const userAtom = atom(({
    default: "userAtom",
    key: {
        userId: '',
        userPw: ''
    }
}))