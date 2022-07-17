import styles from "../../styles/ArtistDetailCard.module.css";
import Image from "../Image";
import ArtistName from "../ArtistName";

export default function ArtistDetailCard({mbid, artist, name, image, listeners, playCount}) {
    return (
        <div className={styles.artistDetailCard}>
            <div className={styles.artistDetailCardImage}>
                <Image src={image} alt={name} height={100} width={100}/>
            </div>
            <div className={styles.artistDetailCardContent}>
                <div>
                    <div>{name}</div>
                    <ArtistName mbid={mbid} name={artist}/>
                </div>
                <div>
                    <div>Listeners: {listeners}</div>
                    <div>Play count: {playCount}</div>
                </div>
            </div>
        </div>
    )
}