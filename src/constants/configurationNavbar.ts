import { INavbar } from "@/types/INavbar"

export const configurationNavbar: INavbar[] = [
    {id: 1, title: 'Home', href: '/'},
    {id: 2, title: 'About us', href: '/about_us'},
    {id: 3, title: 'Service', href: '/service'},
    {id: 4, title: 'Page', href:'#', children: [
        {id: 5, title: 'Pricing Plan', href: '/Page/pricing_plan'},
        {id: 6, title: 'FAQ', href: '/Page/FAQ'},
        {id: 7, title: 'Tems & Conditions', href: '/Page/tems_&_Conditions'},
        {id: 8, title: 'Privacy Policy', href: '/Page/privacy_policy'}
    ]},
    {id: 9, title: 'Blog', href: '#', children: [
        {id: 10, title: 'Resent articles', href: '/Blog/resent_articles'},
        {id: 11, title: 'Our Team', href: '/Blog/our_team'},
        {id: 12, title: 'Detail Service', href: '/Blog/detail_service'},
    ]},
]

