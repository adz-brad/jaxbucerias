import { atom } from 'recoil'

export const apolloState = atom({
    key: 'apolloState',
    default: null
})

export const categoryState = atom({
    key: 'categoryState',
    default: null
})

export const subcategoryState = atom({
    key: 'subcategoryState',
    default: null
})

export const modalState = atom({
    key: 'modalState',
    default: {
        open: false,
        content: null
    }
})

export const localeState = atom({
    key: 'localeState',
    default: 'en'
})