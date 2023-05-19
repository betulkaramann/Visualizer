import React from 'react';
import '../Sorting/SortingVisualizer.css'

const NUMBER_OF_ARRAY_BARS = 200;
const ANIMATION_SPEED_MS = 1;
const PRIMARY_COLOR = 'purple';
const SECONDARY_COLOR = 'red';


class SortingVisualizer extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    handleClick = () => {
        alert('Button clicked!');
        this.resetArray();
      };

    componentDidMount() {
        this.resetArray();
    }
    MergeSort(){

    }
    QuickSort(){

    }
    HeapSort(){

    }

    BubbleSort(){

    }


    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array });
    }
    render() {
        const { array } = this.state;
        return (
            <>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}

                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`,
                            }}
                        >
                            
                        </div>

                    ))

                    }

                </div>
               <div>
               <button className='generate-button' onClick={this.handleClick}>
                               Generate New Array
                            </button>
               <button className='sort-button' onClick={this.MergeSort()}>
                               Merge Sort
                            </button>
               <button className='sort-button' onClick={this.QuickSort()}>
                               Quick Sort
                            </button>
               <button className='sort-button' onClick={this.HeapSort()}>
                               Heap Sort
                            </button>
               <button className='sort-button' onClick={this.BubbleSort()}>
                               Bubble Sort
                            </button>
               </div>
            </>
        );
    }
}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}

export default SortingVisualizer;