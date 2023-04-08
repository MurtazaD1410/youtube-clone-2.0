import React from 'react'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='scroller flex flex-row  md:flex-col h-auto md:h-[96%] overflow-y-auto md:mr-5 '>
      {categories.map((category) => (
        <button className='category-btn'
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          style={{

            background: selectedCategory === category.name && '#FC1503',
            color: '#fff'
          }}
        >
          <span style={{
            color: category.name === selectedCategory ? 'white' : 'red',
            marginRight: '15px'
          }}>{category.icon}</span>
          <span
            style={{

              opacity: category.name === selectedCategory ? '1' : '0.8'
            }}
          >{category.name}</span>

        </button>
      ))}
    </div>
  )
}

export default Sidebar