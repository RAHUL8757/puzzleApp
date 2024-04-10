import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameScreen from '../Puzzel_src/screens/gameScreen/GameScreen';

describe('<GameScreen />', () => {
  test('renders correctly with correct category, clue, and data', () => {
    const navigation = { navigate: jest.fn() };
    const route = { params: { category: 'Test Category', clue: 'Test Clue', data: 'Test Data', point: 10 } };
    const { getByText } = render(<GameScreen navigation={navigation} route={route} />);
    const titleText = getByText('Test Category');
    const clueText = getByText('Test Clue');
    expect(titleText).toBeTruthy();
    expect(clueText).toBeTruthy();
  });

  test('renders correctly with different category, clue, and data', () => {
    const navigation = { navigate: jest.fn() };
    const route = { params: { category: 'Another Category', clue: 'Another Clue', data: 'Another Data', point: 15 } };
    const { getByText } = render(<GameScreen navigation={navigation} route={route} />);
    const titleText = getByText('Another Category');
    const clueText = getByText('Another Clue');
    expect(titleText).toBeTruthy();
    expect(clueText).toBeTruthy();
  });

  test('navigates to CategorySelection when Skip button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const route = { params: { category: 'Test Category', clue: 'Test Clue', data: 'Test Data', point: 10 } };
    const { getByText } = render(<GameScreen navigation={navigation} route={route} />);
    const skipButton = getByText('Skip');
    fireEvent.press(skipButton);
    expect(navigation.navigate).toHaveBeenCalledWith('CategorySelection');
  });

  test('navigates to Result with correct point when puzzle is submitted with correct data', () => {
    const navigation = { navigate: jest.fn() };
    const route = { params: { category: 'Test Category', clue: 'Test Clue', data: 'Test Data', point: 10 } };
    const { getByText } = render(<GameScreen navigation={navigation} route={route} />);
    const submitButton = getByText('Next');
    fireEvent.press(submitButton);
    expect(navigation.navigate).toHaveBeenCalledWith('Result', { point: 10 });
  });

  test('navigates to Result with 0 point when puzzle is submitted with incorrect data', () => {
    const navigation = { navigate: jest.fn() };
    const route = { params: { category: 'Test Category', clue: 'Test Clue', data: 'Test Data', point: 10 } };
    const { getByText } = render(<GameScreen navigation={navigation} route={route} />);
    const submitButton = getByText('Next');
    // Assume incorrect data is submitted, such as 'Wrong Data'
    fireEvent.press(submitButton);
    expect(navigation.navigate).toHaveBeenCalledWith('Result', { point: 0 });
  });

  // Add more test cases to cover other functionalities, such as choosing words, handling state changes, etc.
});
