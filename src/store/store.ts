import {create} from 'zustand';
import {produce} from 'immer';
import {persist,createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import FavouritesScreen from '../screens/FavouritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CartScreen from '../screens/CartScreen';


export const useStore = create(
    persist(
        (set,get)=>({
            CoffeeList:CoffeeData,
            BeanList:BeansData,
            FavouriteList:[],
            CartList:[],
            OrderHistoryList:[],
            CartPrice:0
        }),{
            name:'coffee-app',
            storage: createJSONStorage(()=> AsyncStorage)
        }
    )
)