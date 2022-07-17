import Link from "next/link";
import styles from "../../styles/ArtistName.module.css";
import PropTypes from "prop-types";

export default function ArtistName({mbid, name}) {
    return (
        <div className={styles.artistName}>
            <Link href={`/artist/${mbid}`}>
                {name}
            </Link>
        </div>
    )
}

ArtistName.propTypes = {
    mbid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

ArtistName.defaultProps = {
    mbid: "",
    name: ""
}