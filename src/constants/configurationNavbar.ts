import { INavbar } from "@/types/INavbar"

export const configurationNavbar: INavbar[] = [
    {id: 1, title: 'Home', href: '/'},
    {id: 2, title: 'About us', href: '/About_us'},
    {id: 3, title: 'Service', href: '/Service'},
    {id: 4, title: 'Page', href:'#', children: [
        {id: 5, title: 'Pricing Plan', href: '/Page/About_us'},
        {id: 6, title: 'FAQ', href: '/Page/FAQ'},
        {id: 7, title: 'Tems & Conditions', href: '/Page/Tems_&_Conditions'},
        {id: 8, title: 'Privacy Policy', href: '/Page/Privacy_Policy'}
    ]},
    {id: 9, title: 'Blog', href: '#', children: [
        {id: 10, title: 'Resent articles', href: '/Blog/Resent_articles'},
        {id: 11, title: 'Our Team', href: '/Blog/Our_Team'},
        {id: 12, title: 'Detail Service', href: '/Blog/Detail_Service'},
    ]},
]

