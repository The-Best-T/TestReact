import {useState} from "react";

export const useFetching = (callback) => {
    const [loadingState, setLoadingState] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            setLoadingState(true)
            await callback()
        } catch (error) {
            setError(error.message)
        } finally {
            setLoadingState(false)
        }
    }
    return [fetching, loadingState, error]
}