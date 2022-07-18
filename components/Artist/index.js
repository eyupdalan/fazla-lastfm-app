import PropTypes from "prop-types";
import styles from "../../styles/Artist.module.css";
import Image from "../Image";
import ArtistName from "../ArtistName";
import {Card} from "antd";

export default function Artist({mbid, name, image, listeners, playCount}) {
    return (
        <Card style={{width: "100%", margin: 10}}>
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
        </Card>
    );
}

Artist.propTypes = {
    /**
     * The artist's MusicBrainz ID
     */
    mbid: PropTypes.string.isRequired,
    /**
     * The artist's name
     */
    name: PropTypes.string.isRequired,
    /**
     * The artist's image
     */
    image: PropTypes.string.isRequired,
    /**
     * The artist's listeners count
     */
    listeners: PropTypes.number.isRequired,
    /**
     * The artist's play count
     */
    playCount: PropTypes.number.isRequired
}

Artist.defaultProps = {
    mbid: "",
    name: "",
    image: "",
    listeners: 0,
    playCount: 0
}