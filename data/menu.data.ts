
export interface IBannerItem {
    degrees: number
    colors: string[]
    positions: number[]
}

export interface IHeaderItem {
    title: string
}

export interface IFooterItem {
    title: string
    phone: string
    email: string
}


export const BANNER_DATA : IBannerItem = {
    degrees: 165,
    colors: [`#3D2E80`, `#DC1969`],
    positions: [45, 110],
}

export const HEADER_DATA : IHeaderItem = {
    title: 'Zvýšte svoje zisky optimalizáciou vášho eshopu.'
}

export const FOOTER_DATA : IFooterItem = {
    title: 'Máte otázky? Jednoducho sa spýtajte.',
    phone: '+421 (02) 555 65 726',
    email: 'uxdesign@riesenia.com'
}

