import { atom } from "recoil"

export const detailAtom = atom({
    key: "detailAtom",
    default: {
        address: '',
        beerPrice: 0,
        sojuPrice: 0,
        bookmarkCount: '',
        category: '',
        imageURLs: [],
        lat: 0,
        lon: 0,
        restaurantName: ''
    }
})