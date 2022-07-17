import styles from "../../styles/Artist.module.css";

export default function Artist({mbid, name, image, listeners, playcount}) {
    return (
        <div className={styles.artist}>
            <div>{mbid}</div>
            <div>{name}</div>
            <div>{image}</div>
            <div>{listeners}</div>
            <div>{playcount}</div>
        </div>
    )
}