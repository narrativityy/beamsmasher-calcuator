import React, { useState } from 'react'

function App() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [z, setZ] = useState(0)

  const [firstCombo, setFirstCombo] = useState(0)
  const [secondCombo, setSecondCombo] = useState(0)
  const [thirdCombo, setThirdCombo] = useState(0)

  const [previousX, setPreviousX] = useState(null)
  const [previousY, setPreviousY] = useState(null)
  const [previousZ, setPreviousZ] = useState(null)

  const [calculated, setCalculated] = useState(false)

  const calculateVals = () => {
    setFirstCombo(2 * (x) + 11)
    setSecondCombo(((2 * z) + y) - 5)
    setThirdCombo(Math.abs((y + z) - x))

    setCalculated(true)
  }

  const handleClick = (e, func, val) => {
    if (e[0] === 'x') {
      if (previousX) {
        document.getElementById(previousX).style.border = 'none'
      }
      setPreviousX(e)
    }

    if (e[0] === 'y') {
      if (previousY) {
        document.getElementById(previousY).style.border = 'none'
      }
      setPreviousY(e)
    }

    if (e[0] === 'z') {
      if (previousZ) {
        document.getElementById(previousZ).style.border = 'none'
      }
      setPreviousZ(e)
    }
    const element = document.getElementById(e)
    element.style.border = '2px solid blue'
    func(val)
    setPrevious(e)
  }

  return (
    <div className='text-center mt-2'>
      <h3>Terminus Beamsmasher Calculator</h3>
      <div className='mt-4 flex justify-center align-baseline text-center gap-4'>
        <h5>X:</h5>
        <img id='x-1' className='x hover:scale-110 cursor-pointer' onClick={() => handleClick('x-1', setX, 0)} src="symbols-01.jpg" alt="" width={100}/>
        <img id='x-2' className='x hover:scale-110 cursor-pointer' onClick={() => handleClick('x-2', setX, 10)} src="symbols-02.jpg" alt="" width={100}/>
        <img id='x-3' className='x hover:scale-110 cursor-pointer' onClick={() => handleClick('x-3', setX, 11)} src="symbols-03.jpg" alt="" width={100}/>
        <img id='x-4' className='x hover:scale-110 cursor-pointer' onClick={() => handleClick('x-4', setX, 20)} src="symbols-04.jpg" alt="" width={100}/>
        <img id='x-5' className='x hover:scale-110 cursor-pointer' onClick={() => handleClick('x-5', setX, 21)} src="symbols-05.jpg" alt="" width={100}/>
        <img id='x-6' className='x hover:scale-110 cursor-pointer' onClick={() => handleClick('x-6', setX, 22)} src="symbols-06.jpg" alt="" width={100}/>
      </div>
      <div className='flex justify-center align-baseline text-center mt-4 gap-4'>
        <h5>Y:</h5>
        <img id='y-1' className='y hover:scale-110 cursor-pointer' onClick={() => handleClick('y-1', setY, 0)} src="symbols-01.jpg" alt="" width={100} />
        <img id='y-2' className='y hover:scale-110 cursor-pointer' onClick={() => handleClick('y-2', setY, 10)} src="symbols-02.jpg" alt="" width={100}/>
        <img id='y-3' className='y hover:scale-110 cursor-pointer' onClick={() => handleClick('y-3', setY, 11)} src="symbols-03.jpg" alt="" width={100}/>
        <img id='y-4' className='y hover:scale-110 cursor-pointer' onClick={() => handleClick('y-4', setY, 20)} src="symbols-04.jpg" alt="" width={100}/>
        <img id='y-5' className='y hover:scale-110 cursor-pointer' onClick={() => handleClick('y-5', setY, 21)} src="symbols-05.jpg" alt="" width={100}/>
        <img id='y-6' className='y hover:scale-110 cursor-pointer' onClick={() => handleClick('y-6', setY, 22)} src="symbols-06.jpg" alt="" width={100}/>
      </div>
      <div className='flex justify-center align-baseline text-center mt-4 gap-4'>
        <h5>Z:</h5>
        <img id='z-1' className='z hover:scale-110 cursor-pointer' onClick={() => handleClick('z-1', setZ, 0)} src="symbols-01.jpg" alt="" width={100} />
        <img id='z-2' className='z hover:scale-110 cursor-pointer' onClick={() => handleClick('z-2', setZ, 10)} src="symbols-02.jpg" alt="" width={100}/>
        <img id='z-3' className='z hover:scale-110 cursor-pointer' onClick={() => handleClick('z-3', setZ, 11)} src="symbols-03.jpg" alt="" width={100}/>
        <img id='z-4' className='z hover:scale-110 cursor-pointer' onClick={() => handleClick('z-4', setZ, 20)} src="symbols-04.jpg" alt="" width={100}/>
        <img id='z-5' className='z hover:scale-110 cursor-pointer' onClick={() => handleClick('z-5', setZ, 21)} src="symbols-05.jpg" alt="" width={100}/>
        <img id='z-6' className='z hover:scale-110 cursor-pointer' onClick={() => handleClick('z-6', setZ, 22)} src="symbols-06.jpg" alt="" width={100}/>
      </div>

      <button className='bg-slate-300 p-2 mt-4 rounded hover:shadow hover:scale-105' onClick={calculateVals}>Calculate</button>
      { calculated ? <div className='flex flex-col justify-center align-baseline text-center mt-4 gap-2'>
        <p>First Combo: {firstCombo}</p>
        <p>Second Combo: {secondCombo}</p>
        <p>Third Combo: {thirdCombo}</p>
      </div> : <div></div>}
    </div>
  )
}

export default App
