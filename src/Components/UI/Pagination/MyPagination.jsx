import React from 'react'
import {usePagination} from "../../../Hooks/usePagination";
import classes from './MyPagination.module.css'

const MyPagination = ({totalPages, page, changePage}) => {
    const pagesArray = usePagination(totalPages)
    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={
                        page === p
                            ? [classes.page, classes.page__current].join(' ')
                            : classes.page
                    }
                >
                        {p}
                    </span>
            )}
        </div>
    )
}

export default MyPagination