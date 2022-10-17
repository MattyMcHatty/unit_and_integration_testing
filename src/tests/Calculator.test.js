import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonplus = container.getByTestId('operator-add');
    const buttonequal = container.getByTestId('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(buttonplus);
    fireEvent.click(button4);
    fireEvent.click(buttonequal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');

});

it('should subtract 4 from 7 and get 3', () => {
  const button4 = container.getByTestId('number4');
  const button7 = container.getByTestId('number7');
  const buttonsubtract = container.getByTestId('operator-subtract');
  const buttonequal = container.getByTestId('operator-equals');
  fireEvent.click(button7);
  fireEvent.click(buttonsubtract);
  fireEvent.click(button4);
  fireEvent.click(buttonequal);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('3');

});

it('should multiply 3 by 5 and get 15', () => {
  const button3 = container.getByTestId('number3');
  const button5 = container.getByTestId('number5');
  const buttonmultiply = container.getByTestId('operator-multiply');
  const buttonequal = container.getByTestId('operator-equals');
  fireEvent.click(button3);
  fireEvent.click(buttonmultiply);
  fireEvent.click(button5);
  fireEvent.click(buttonequal);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('15');

});

it('should divide 21 by 7 and get 3', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const buttondivide = container.getByTestId('operator-divide');
  const button7 = container.getByTestId('number7');
  const buttonequal = container.getByTestId('operator-equals');
  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(buttondivide);
  fireEvent.click(button7);
  fireEvent.click(buttonequal);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('3');

});

it('should concatenate multiple number button clicks', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const button7 = container.getByTestId('number7');
  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(button7);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('217');
});

it('should chain multiple operations together', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const buttondivide = container.getByTestId('operator-divide');
  const button7 = container.getByTestId('number7');
  const buttonplus = container.getByTestId('operator-add');
  const buttonequal = container.getByTestId('operator-equals');
  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(buttondivide);
  fireEvent.click(button7);
  fireEvent.click(buttonplus);
  fireEvent.click(button7);
  fireEvent.click(buttonequal);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('10');
});

it('should clear the running total without affecting the calculation', () => {
  const button6 = container.getByTestId('number6');
  const button1 = container.getByTestId('number1');
  const buttonplus = container.getByTestId('operator-add');
  const buttonclear = container.getByTestId('clear');
  fireEvent.click(button6);
  fireEvent.click(buttonplus);
  fireEvent.click(button1);
  fireEvent.click(buttonclear);
  fireEvent.click(buttonplus);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('6');

})

})

