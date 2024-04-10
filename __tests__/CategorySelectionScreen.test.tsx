import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CategorySelectionScreen from '../Puzzel_src/screens/categorySelectionScreen/CategorySelectionScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  getUserReducer: {
    getStatusData: null,
    loading: false,
    error: null
  }
});

describe('<CategorySelectionScreen />', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CategorySelectionScreen />
      </Provider>
    );

    // Check if the title is rendered
    const titleElement = getByText('Words Puzzle');
    expect(titleElement).toBeTruthy();
  });

  test('pressing Start button dispatches action', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CategorySelectionScreen />
      </Provider>
    );

    // Mock Redux dispatch
    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: () => mockDispatch
    }));

    // Simulate pressing the Start button
    fireEvent.press(getByText('Start'));

    // Check if the dispatch function is called with the correct action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'GET_USER_REQUEST' // Adjust this action type according to your implementation
    });
  });
});
