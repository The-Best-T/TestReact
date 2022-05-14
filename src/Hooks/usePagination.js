import {useMemo} from "react";
import {getPagesArray} from "../Utils/pages";

export const usePagination=(totalPages)=>{
    const pagesArray=useMemo(()=>{
        return getPagesArray(totalPages)
    },[totalPages])
    return pagesArray
}