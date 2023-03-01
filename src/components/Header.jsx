import React, { useState } from 'react'
import Input from './UI/Input.jsx'
import Select from './UI/Select.jsx'
import '../App.scss'

const Header = ({filter, setFilter, fetchPosts}) => 
{

    function searchOnEnter(e) {
        setFilter({...filter, query: e.target.value})
    }

  return (
    <header className='header'>
        <Input placeholder="Найти..."
                value = {filter.query}
                onChange = {(e) => searchOnEnter(e)}
                
                />
        <div className="header__selects">
            <Select defaultValue = "Категории"
                    value={filter.category}
                    options={
                        [   
                            {value: '', name: 'Все'},
                            {value: 'art', name: 'Арт'},
                            {value: 'biography', name: 'Биография'},
                            {value: 'computers', name: 'Компьютеры'},
                            {value: 'history', name: 'История'},
                            {value: 'medical', name: 'Медицина'},
                            {value: 'poetry', name: 'Поэзия'}
                        ]
                    }
                    onChange={selectedSort => {
                        setFilter({...filter, category: selectedSort})
                        fetchPosts()
                    }}
                    ></Select>
                    <Select defaultValue = "Тип"
                    value={filter.actual}
                            options={
                                [
                                    {value: 'relevance', name: 'Актуальные'},
                                    {value: 'newest', name: 'Новые'}
                                ]
                    }
                    onChange={selectedSort => {
                        setFilter({...filter, actual: selectedSort})
                        fetchPosts()
                    }}
                    ></Select>
        </div>
    </header>
  )
}

export default Header