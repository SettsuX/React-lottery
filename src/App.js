import './App.css';
import { useState } from 'react';

function App() {

    const [numbers, setNumbers] = useState([]);
    const [numberOne, setNumberOne] = useState([]);
    const [numberTwo, setNumberTwo] = useState([]);
    const [numberThree, setNumberThree] = useState([]);
    const [numberFour, setNumberFour] = useState([]);
    const [enterNumber, setEnterNumber] = useState('');

    const [previousNumber, setPreviousNumber] = useState([]);
    const [beforeNumber, setBeforeNumber] = useState([]);

    const numberOneStr = numberOne.toString();
    const twoDigitNumber = numberOneStr.slice(1, 3);

    const [winPrize, setWinPrize] = useState('กรุณาใส่ตัวเลขของท่าน');

    const handleInput = (event) => {
        setEnterNumber(event.target.value);
    }

    const checkValue = () => {
        if (enterNumber == '') {
            setWinPrize('ยังไม่ได้กรอกเลขของท่าน');
        } else if (numbers.length == 0) {
            setWinPrize('ยังไม่ได้กดสุ่มเลขของท่าน');
        } else if (enterNumber.length == 3) {
            checkNumber(enterNumber);
        } else {
            setWinPrize('ท่านจำเป็นต้องกรอก 3 ตัวเลข');
        }
    }

        const checkNumber = (enterNumber) => {
            if (enterNumber == numberOne) {
                setWinPrize(`${enterNumber} ถูกรางวัลที่ 1 และถูกรางวัลเลขท้าย 2 ตัว`);
            }
                else if (enterNumber == numberTwo) {
                    setWinPrize(`${enterNumber} ถูกรางวัลที่ 2`);
                }
                else if (enterNumber == numberThree) {
                    setWinPrize(`${enterNumber} ถูกรางวัลที่ 2`);
                }
                else if (enterNumber == numberFour) {
                    setWinPrize(`${enterNumber} ถูกรางวัลที่ 2`);
                }
                else if (enterNumber == previousNumber) {
                    setWinPrize(`${enterNumber} ถูกรางวัลไกล้เคียง`);
                }
                else if (enterNumber == beforeNumber) {
                    setWinPrize(`${enterNumber} ถูกรางวัลไกล้เคียง`);
                }
                else if (enterNumber.slice(1,3) == twoDigitNumber) {
                    setWinPrize(`${enterNumber} ถูกรางวัลเลขท้าย 2 ตัว`);
                }
            else {
                setWinPrize('เสียใจด้วย ท่านไม่ถูกรางวัล');
            }
        }
    
    const generateRandomNumbers = () => {
        const randomNumbers = Array.from({ length: 4 }, () => Math.floor(100 + Math.random() * 900));
        setNumbers(randomNumbers);
        setNumberOne(randomNumbers[0]);
        setNumberTwo(randomNumbers[1]);
        setNumberThree(randomNumbers[2]);
        setNumberFour(randomNumbers[3]);
        setPreviousNumber(randomNumbers[0]-1);
        setBeforeNumber(randomNumbers[0]+1);
      };
    
    return (
        <div className="App center">
            <header className='app-header'>
                <h3>รางวัลล็อตเตอรี่ Diversition</h3>
            </header>
            <div className='py-3'>
                ผลการออกรางวัลล็อตเตอรี่ Diversition
            </div>
            <button className='btn btn-primary' onClick={generateRandomNumbers}>
                ดำเนินการสุ่มรางวัล
            </button>
            <div className='container-fluid d-flex justify-content-center align-items-center pt-3'>
                <div className='row col-12 col-md-6 text-center'>
                    <div className='col-6 text-color bordered'>
                        รางวัลที่ 1
                    </div>
                    <div className='col-6 number bordered'>
                        {numberOne}
                    </div>
                    <div className='col-6 text-color bordered'>
                        รางวัลข้างเคียงที่ 1
                    </div>
                    <div className='col-3 number1 bordered'>
                        {previousNumber}
                    </div>
                    <div className='col-3 number1 bordered'>
                        {beforeNumber}
                    </div>
                    <div className='col-3 text-color bordered'>
                        รางวัลที่ 2
                    </div>
                    <div className='col-3 number2 bordered'>
                        {numberTwo}
                    </div>
                    <div className='col-3 number2 bordered'>
                        {numberThree}
                    </div>
                    <div className='col-3 number2 bordered'>
                        {numberFour}
                    </div>
                    <div className='col-6 text-color bordered'>
                        รางวัลเลขท้าย 2 ตัว
                    </div>
                    <div className='col-6 number3 bordered'>
                        {twoDigitNumber}
                    </div>
                </div>
            </div>
            <div className='pt-4 w-100'>
                <div className='form-group pb-3'>
                    <input className='custom-input' type='text' value={enterNumber} onChange={handleInput} placeholder='กรอก 3 ตัวเลข'></input>
                </div>
                <button className='btn btn-primary' onClick={checkValue}>
                    ตรวจรางวัล
                </button>
            </div>
            <p className='pt-2'>{winPrize}</p>
        </div>
    );
}

export default App;