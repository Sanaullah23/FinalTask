import React from 'react'
import store from '../app/store'
import poetrySlice from '../Features/post'

const Poetry = () => {
  const [poetryTitle, setPoetryTitle] = useState([]);
  const [poetry, setPoetryData] = useState([]);
  const server = "http://localhost:5000/api/v1/createPoetry"

  const handleTitleChange = (e) => {
    setPoetryTitle(e.target.value)

  }
  const handleDataChange = (e) => {
    setPoetryData(e.target.value)

  }
  const handlePoetry = async (e) => {
    e.preventDefault()
    // isDataValid()
    const OnePoetry = {
      poetryTitle,
      poetry
    }
    // console.log(poetryInfo);
    try {
      const response = await axios.post("http://localhost:5000/api/v1/createdPoetry", OnePoetry)
      console.log(response);
    } catch {
      console.log("Error")
    }
  }

  return (
      <div className="container mx-auto my-8">
        <div className="max-w-md mx-auto">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="poetryInput">
            Poetry Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="poetryInput"
            type="text"
            placeholder="Enter poetry title"
            onChange={handleTitleChange}
          />
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="poetryTextarea">
            Poetry Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="poetryTextarea"
            placeholder="Enter poetry content"
            onChange={handleDataChange}
          />
          <button onClick={handlePoetry} className="shadow-xl bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Insert Poetry</button>
  
        </div>
      </div>
  )
}

export default Poetry