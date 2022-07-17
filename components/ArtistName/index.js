import Link from "next/link";
import styles from "../../styles/ArtistName.module.css";

export default function ArtistName({mbid, name}) {
    return (
        <div className={styles.artistName}>
            <Link href={`/artist/${mbid}`}>
                {name}
            </Link>
        </div>
    )
}