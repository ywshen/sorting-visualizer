import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort.js';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort.js';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 0.25;

const NUMBER_OF_ARRAY_BARS = 310;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {

  }

  heapSort() {

  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i< animations.length-1; i+=2) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeightOne] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        //barOneStyle.backgroundColor = SECONDARY_COLOR;
        const [barTwoIdx, newHeightTwo] = animations[i+1];
        const barTwoStyle = arrayBars[barTwoIdx].style;
        //barTwoStyle.backgroundColor = SECONDARY_COLOR;
        //barOneStyle.backgroundColor = PRIMARY_COLOR;
        //barTwoStyle.backgroundColor = PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.height = `${newHeightOne}px`;
          barTwoStyle.height = `${newHeightTwo}px`;
        }, i*ANIMATION_SPEED_MS);
      }, i*ANIMATION_SPEED_MS);
    }    
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}>
          Test Sorting Algorithms (BROKEN)
        </button>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
