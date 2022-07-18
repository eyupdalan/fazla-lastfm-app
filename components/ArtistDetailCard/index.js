import styles from "../../styles/ArtistDetailCard.module.css";
import Image from "../Image";
import ArtistName from "../ArtistName";
import PropTypes from "prop-types";
import {Card} from "antd";

export default function ArtistDetailCard({mbid, artist, name, image, listeners, playCount}) {
    return (
        <Card style={{width: 500, margin: 10}}>
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
                        {listeners && <div>Listeners: {listeners}</div>}
                        <div>Play count: {playCount}</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

ArtistDetailCard.propTypes = {
    mbid: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    listeners: PropTypes.number,
    playCount: PropTypes.number
}

ArtistDetailCard.defaultProps = {
    listeners: null,
    playCount: null
}