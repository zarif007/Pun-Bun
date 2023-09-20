import IPun from "../types/pun"

const fetchPuns = async (): Promise<IPun[]> => {
    const res = await fetch('http://localhost:3000/api/v1/puns')
    return await res.json()
}

export default fetchPuns