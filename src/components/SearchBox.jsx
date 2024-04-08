import { useState, useRef } from "react"
import { products as p } from "../data/data"

export default function SearchBox() {
  const [products, setProducts] = useState(p);
  const search = useRef()
  // const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault()

    let input = search.current.value.trim()

    console.log(input)

    if (input === '') {
      setProducts(p)
      return
    }

    var res = p.filter((item) => (
      item.name.toLowerCase().includes(input.toLowerCase())
    )
    )

    setProducts(res)
    // console.log(search.current.value)

    // console.log(fd)
  }


  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">search</label>
        {/* <input onChange={(event) => { setSearch(event.target.value); handleSearch(event)}} value={search} className="bg-gray-400 p-2 rounded" type="text" name="search" /> */}
        <input ref={search} onChange={(event) => (handleSearch(event))} className="bg-gray-400 p-2 rounded" type="text" name="search" />
        <button type="submit" onClick={handleSearch} className="bg-blue-300 p-2 rounded-[20%] m-1 hover:bg-green-400 active:bg-red-500">Search</button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4">
        {
          products.map((p, index) => (
            <div className="bg-purple-400 rounded m-1" key={index}>
              <h1>{p.name}</h1>
              <h1>{p.price}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}
