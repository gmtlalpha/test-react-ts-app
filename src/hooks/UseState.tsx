import { useState } from 'react';

const UseStateTest: React.FunctionComponent = () =>{

  const [arr, setArr] = useState<number[]>([])
  const [name, setName] = useState<string | null>(null)

  return (
    <>
      <h1>{JSON.stringify(arr)}</h1>
      <button onClick={() => setArr([...arr, arr.length + 1])}>
        setArr
      </button>
      <button onClick={()=>setArr(previouseState=>{
                             return [...previouseState, previouseState.length+1]
                           })}>
        setArr
      </button>

      <hr></hr>

      <h1>{JSON.stringify(name)}</h1>
      <button onClick={()=> {return name == 'Noel' ? setName(null)
                                                   : setName('Noel')}}>
        setName
      </button>
    </>
  )
}
export default UseStateTest