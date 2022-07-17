import styles from "../../styles/Artist.module.css";
import Image from "next/image";

export default function Artist({mbid, name, image, listeners, playcount}) {
    return (
        <div className={styles.artist}>
            <div className={styles.artistImage}>
                <Image src={image} alt={name} height={100} width={100}/>
            </div>
            <div>
                <div>{mbid}</div>
                <div>{name}</div>
                <div>{listeners}</div>
                <div>{playcount}</div>
            </div>
        </div>
    )
}