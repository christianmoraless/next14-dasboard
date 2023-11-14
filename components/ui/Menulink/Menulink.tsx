"use client"

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

type Props = {
    title: string;
    path: string;
    icon: JSX.Element;
}
export const Menulink = ({ path, icon, title }: Props) => {
    const pathname = usePathname()

    return (
        <Link href={path} className={`${styles.container} ${pathname === path && styles.active}`}>
            {icon}
            {title}
        </Link>
    )
}
