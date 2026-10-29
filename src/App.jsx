import React from 'react'
import TodoInput from './component/TodoInput'
import FilterTabs from './component/FilterTabs'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <div className="bg-white p-8 max-w-md rounded-3xl shadow-xl shadow-blue-950 border border-blue-700">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Мої завдання</h1>
      <TodoInput />
      <FilterTabs />
      </div>
    </div>
  )
}

export default App