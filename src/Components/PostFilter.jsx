import React from 'react'
import MySelect from "./UI/Select/MySelect";
import MyInput from "./UI/Input/MyInput";

const PostFiler = ({filter, setFilter, ...props}) => {
    return (
        <div {...props}>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultOption="Sort"
                options={[
                    {value: 'title', name: 'By title'},
                    {value: 'body', name: 'By description'}
                ]}
            />
        </div>
    )
}

export default PostFiler