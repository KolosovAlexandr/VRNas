import { INavbar } from "@/types/INavbar"

export const configurationNavbar: INavbar[] = [
    {id: 1, title: 'Home', href: '/'},
    {id: 2, title: 'About us', href: '/About_us'},
    {id: 3, title: 'Service', href: '/Service'},
    {id: 4, title: 'Page', href:'#', children: [
        {id: 5, title: 'Pricing Plan', href: '/Page/About_us'},
        {id: 6, title: 'Our team', href: '/Page/Our_team'},
        {id: 7, title: 'FAQ', href: '/Page/FAQ'},
        {id: 8, title: 'Tems & Conditions', href: '/Page/Tems_&_Conditions'},
        {id: 9, title: 'Privacy Policy', href: '/Page/Privacy_Policy'}
    ]},
    {id: 5, title: 'Blog', href: '/Blog'},
]

