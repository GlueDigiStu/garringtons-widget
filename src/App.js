import React from 'react';
import SearchBox from "./components/search-box";
import data from "./data/data";
import ResultsBox from "./components/results-box";
import DataBox from "./components/data-box";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            data: data,
            _data: [],
            _selected: {},
            _pinned: {}
        }
    }

    handleKeyUp(value) {
        this.setState({searchValue: value},
            () => {
                if (this.state.searchValue.length > 2) {
                    const s = this.state.searchValue.toLowerCase()
                    const matches = this.state.data.filter(v => v.SN.toLowerCase().startsWith(s))
                    this.setState({_data: matches},
                        () => {
                            console.log(this.state._data)
                        }
                    )
                } else {
                    this.setState({_data: []})
                }
            }
        )
    }

    handleClick(value) {
        const selected = this.state._data.filter(v => v.OR === value)
        this.setState({_selected: selected, searchValue: '', _data: []})
    }

    handlePin(value) {
        this.setState(
            {
                _pinned: value,
                _selected: {}
            }
        )

    }

    handleUnPin(value) {
        this.setState({
                _pinned: {}
            }
        )
    }

    render() {
        return (
            <div className="App">
                <SearchBox
                    handleKeyUp={(value) => this.handleKeyUp(value)}
                    value={this.state.searchValue}
                />
                <ResultsBox
                    handleClick={(value) => this.handleClick(value)}
                    data={this.state._data}
                    query={this.state.searchValue}
                />
                <div className="data-boxes">

                <DataBox
                    handlePin={(value) => this.handlePin(value)}
                    values={this.state._selected
                    }/>

                <DataBox
                    unpin={true}
                    handlePin={(value) => this.handleUnPin(value)}
                    values={this.state._pinned}/>
                </div>
            </div>
        )
    }
}

export default App;
