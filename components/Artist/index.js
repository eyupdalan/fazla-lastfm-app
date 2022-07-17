import styles from "../../styles/Artist.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Artist({mbid, name, image, listeners, playcount}) {
    return (
        <div className={styles.artist}>
            <div className={styles.artistImage}>
                <Image src={image} alt={name} height={100} width={100}/>
            </div>
            <div className={styles.artistDetailContainer}>
                <h5>Artist</h5>
                <div className={styles.artistDetail}>
                    <div className={styles.artistName}>
                        <Link href={`/artist/${mbid}`}>
                        {name}
                        </Link>
                    </div>
                    <div>
                        <div>Listeners: {listeners}</div>
                        <div>Play count: {playcount}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}