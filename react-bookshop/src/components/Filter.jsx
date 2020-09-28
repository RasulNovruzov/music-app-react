import React from 'react';
import { Menu, Input } from 'semantic-ui-react'

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
    return (
        <div>
            <Menu secondary>
                <Menu.Item
                    active={filterBy === 'all'}
                    onClick={setFilter.bind(this, 'all')}
                >All</Menu.Item>
                <Menu.Item
                    active={filterBy === 'price_high'}
                    onClick={setFilter.bind(this, 'price_high')}
                >Price (High)</Menu.Item>
                <Menu.Item
                    active={filterBy === 'price_low'}
                    onClick={setFilter.bind(this, 'price_low')}
                >Price (Low)</Menu.Item>
                <Menu.Item
                    active={filterBy === 'author'}
                    onClick={setFilter.bind(this, 'author')}
                >Author</Menu.Item>
                <Menu.Item
                    active={filterBy === 'rating'}
                    onClick={setFilter.bind(this, 'rating')}
                >Rating</Menu.Item>

                <Menu.Item > 
                    <Input placeholder="Введите запрос ... " 
                    icon="search" 
                    style={{width: 400}}
                    value={searchQuery} 
                    
                    onChange={e => setSearchQuery(e.target.value)} />
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Filter;