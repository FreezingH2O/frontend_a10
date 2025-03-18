import styles from './topMenuItem.module.css'
import Link from 'next/link'

export default function TopMenuItem ({title,pageRef}:{ title:string, pageRef:string}){
    return (
        <Link className={styles.topMenuItem} href={pageRef}>
        {title}
        </Link>
    );
}