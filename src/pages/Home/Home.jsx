import React from 'react'
import ListedHouse from './ListedHouse/ListedHouse'

const Home = () => {
    return (
        <div className='grid md:grid-cols-4 gap-6 my-12'>
            <ListedHouse></ListedHouse>
            <ListedHouse></ListedHouse>
            <ListedHouse></ListedHouse>
            <ListedHouse></ListedHouse>
            <ListedHouse></ListedHouse>
        </div>
    )
}

export default Home