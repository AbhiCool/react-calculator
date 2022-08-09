import React, { useEffect, useState } from 'react'

function Calculator() {
    const [inputValue, setInputValue] = useState('');

    const buttonClick = (e) => {
        setInputValue(inputValue + e.target.value);
    };

    const computeExpression = () => {
        let output;
        try {
            output = Function("return " + inputValue)();
        }
        catch(err) {
            setInputValue('');
            return;
        }
        setInputValue(output);

    };

    const clearInput = () => {
        setInputValue('');
    }

  return (
    <div className='Calculator container'>
        <div className="row justify-content-center">
            <div className='col-md-5 calcContainer shadow p-3 mb-5 bg-white rounded'>
                <h1 className='fw-bold'>React Calculator</h1>
                <table className="calcTable">
                    <tbody>
                        <tr>
                            <td colSpan="3">
                                <input type="text" className="form-control" value={inputValue} readOnly/>
                            </td>
                            <td>
                                <button className="btn btn-primary" onClick={clearInput}>C</button>
                            </td>
                        </tr>
                        <tr>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="1">1</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="2">2</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="3">3</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="+">+</button></td>
                        </tr>
                        <tr>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="4">4</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="5">5</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="6">6</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="-">-</button></td>
                        </tr>
                        <tr>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="7">7</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="8">8</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="9">9</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="*">*</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value="0">0</button></td>
                            <td><button className="btn btn-primary" onClick={buttonClick} value=".">.</button></td>
                            <td><button className="btn btn-primary" onClick={computeExpression}>=</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Calculator