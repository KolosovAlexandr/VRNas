
type IChildren = {
    id: string
    title: string
    href: string
    src?: string
}

export type IConfigFooter = {
    id: string
    column: string
    children: IChildren[]
}

export type ICommunity = {
    name: string
    src: string
    alt: string
}