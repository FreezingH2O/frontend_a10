import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard'
import Rating from '@mui/material/Rating';


export default function Card({venueName, imgSrc,rating ,onRatingChange}: 
    {venueName:string, imgSrc:string, rating?:number,onRatingChange?: (venueName: string, newRating: number) => void;}){
    return (
        <InteractiveCard contentName={venueName}>
        <div >
       
                <Image 
                src={imgSrc}
                alt={venueName} 
                width={350} 
                height={200}
                style={{ objectFit: "cover" }}  
                />
           

            <h3 className={styles.name}>{venueName}</h3>
             {onRatingChange? <div onClick={(e)=>e.stopPropagation()}>
           <Rating
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={rating} 
                    onChange={(event, newValue) => { 
                        event.stopPropagation(); 
                        event.preventDefault();
                        onRatingChange(venueName, newValue ?? 0);}}
                />
            
            </div>:''}
          
        </div>
        </InteractiveCard>
    );
}