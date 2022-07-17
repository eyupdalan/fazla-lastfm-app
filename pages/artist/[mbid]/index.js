import { useRouter } from 'next/router'

export default function Artist({ artist }) {
    const router = useRouter()
    const { mbid } = router.query

    return <p>Artist: {mbid}</p>
}