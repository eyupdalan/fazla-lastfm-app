import PropTypes from "prop-types";
import styles from "../../styles/Artist.module.css";
import Image from "../Image";
import ArtistName from "../ArtistName";

export default function Artist({mbid, name, image, listeners, playCount}) {
    return (
        <div className={styles.artist}>
            <div className={styles.artistImage}>
                <Image src={image} alt={name} height={100} width={100}/>
            </div>
            <div className={styles.artistDetailContainer}>
                <h5>Artist</h5>
                <div className={styles.artistDetail}>
                    <ArtistName mbid={mbid} name={name}/>
                    <div>
                        <div>Listeners: {listeners}</div>
                        <div>Play count: {playCount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Artist.propTypes = {
    mbid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    listeners: PropTypes.number.isRequired,
    playCount: PropTypes.number.isRequired
}

Artist.defaultProps = {
    mbid: "",
    name: "",
    image: "",
    listeners: 0,
    playCount: 0
}