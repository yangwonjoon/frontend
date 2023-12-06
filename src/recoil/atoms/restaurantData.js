import { atom } from 'recoil';
import data from '../../services/data'

export const restaurantData = atom({
    key: 'restaurantData',
    default: data,
});