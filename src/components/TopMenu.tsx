import Image from "next/image";
import styles from './topMenu.module.css'
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"; 
import Link from "next/link";

export default async function TopMenu(){

const session = await getServerSession(authOptions)
console.log(session)

    return (
        <div className={styles.topMenu}>
            <TopMenuItem title="Venue" pageRef="/venue"/>
            <TopMenuItem title="Booking" pageRef="/booking"/>
            

            <Image className={styles.logo}
                src = '/img/logo.png'
                alt = "logo"
                width= {0}
                height = {0}
                sizes="100vh"
            />
            <div className="flex flex-row items-center absolute left-0 top-0 h-full  pl-8 gap-8">
           
{
    session? <Link href='/api/auth/signout?callbackUrl=/'>
                <div >
                    Sign-Out of {session.user?.name}
                </div>
            </Link>
            :<Link href='/api/auth/signin'>
                <div >
                    Sign-In
                </div>
            </Link>
}

            <Link href='/mybooking'>
                <div >
                    My Booking
                </div>
            </Link>

</div>

        </div>
    );
}