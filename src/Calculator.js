import React, { useState } from 'react';
import './Calculator.css';
import { Container, Row, Col, Button, Form
} from 'react-bootstrap';
import CalculatorService from './calculator.service'

function Calculator() {

  const [calculate, concatenateNumber, sumNumbers, subtractNumbers, multiplyNumbers, divideNumbers] = CalculatorService();

  const [txtNumbers, setTxtNumbers] = useState('0');
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);

  function addNumber(number) {
    let result;
    if (operation === null) {
      result = concatenateNumber(number1, number);
      setNumber1(result);
    } else {
      result = concatenateNumber(number2, number);
      setNumber2(result);
    }
    setTxtNumbers(result);
  }

  function defineOperation(op) {
    // It only defines the operation if it doesn't exist
    if (operation === null) {
      setOperation(op);
      return;
    }
    // If the operation is defined and the number 2 is selected, perform the calculation of the operation
    if (number2 !== null) {
      const result = calculate(parseFloat(number1), parseFloat(number2), operation);
      setOperation(op);
      setNumber1(result.toString());
      setNumber2(null);
      setTxtNumbers(result.toString());
    }
  }

  function actionCalculate() {
    if (number2 === null) {
      return;
    }
    const result = calculate(parseFloat(number1), parseFloat(number2), operation);
    setTxtNumbers(result);
  }

  function clean() {
    setTxtNumbers('0');
    setNumber1('0');
    setNumber2(null);
    setOperation(null);
  }

  return (    
    <div className='outBackground'>
      <div className={"calculatorBody"} style={{
        background: 'transparent !important',
      }}>
        <Container>        
          <Row>
            <h4>My Calculator</h4>
          </Row>
          <Row>
            <Col xs="3">
              <Button variant="danger"
              onClick={clean}>C</Button>
            </Col>
            <Col xs="9">
              <Form.Control type="text"
                name="txtNumbers"
                readOnly="readonly" 
                value={txtNumbers}
                data-testid="txtNumbers"/>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('7')}>7</Button>
            </Col>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('8')}>8</Button>
            </Col>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('9')}>9</Button>
            </Col>
            <Col>
              <Button variant="warning"
              onClick={() => defineOperation(divideNumbers)}>/</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('4')}>4</Button>
            </Col>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('5')}>5</Button>
            </Col>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('6')}>6</Button>
            </Col>
            <Col>
              <Button variant="warning"
              onClick={() => defineOperation(multiplyNumbers)}>*</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('1')}>1</Button>
            </Col>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('2')}>2</Button>
            </Col>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('3')}>3</Button>
            </Col>
            <Col>
              <Button variant="warning"
              onClick={() => defineOperation(subtractNumbers)}>-</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('0')}>0</Button>
            </Col>
            <Col>
              <Button variant="light"
              onClick={() => addNumber('.')}>.</Button>
            </Col>
            <Col>
              <Button variant="success"
              onClick={actionCalculate}>=</Button>
            </Col>
            <Col>
              <Button variant="warning"
              onClick={() => defineOperation(sumNumbers)}>+</Button>
            </Col>
          </Row>
        </Container>
      </div>    
    </div>
  );
}

export default Calculator;
