import { INavbar } from "@/types/INavbar"

export const dataNavbar: INavbar[] = [
    {id: '1', title: 'Home', href: '/'},
    {id: '2', title: 'About us', href: '/about_us'},
    {id: '3', title: 'Service', href: '/service'},
    {id: '4', title: 'Page', href:'#', children: [
        {id: '5', title: 'Pricing Plan', href: '/pricing_plan'},
        {id: '6', title: 'FAQ', href: '/Page/FAQ'},
        {id: '7', title: 'Tems & Conditions', href: 'tems_conditions'},
        {id: '8', title: 'Privacy Policy', href: '/privacy_policy'}
    ]},
    {id: '9', title: 'Blog', href: '#', children: [
        {id: '10', title: 'Resent articles', href: '/resent_articles'},
        {id: '11', title: 'Our Team', href: '/our_team'},
        {id: '12', title: 'Detail Service', href: '/detail_service'},
    ]},
]

