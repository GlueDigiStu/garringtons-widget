import React from 'react';
import SearchBox from "./components/search-box";
import data from "./data/data-2024-en";
import ResultsBox from "./components/results-box";
import DataBox from "./components/data-box";
import SelectRegion from "./components/select-region";
import SelectPlaceInRegion from "./components/select-place-in-region";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            data: data,
            _data: [],
            _selected: {},
            _pinned: {},
            _regionPlaces : [],
            activeTab: 'search',
            selectedRegion: ''
        }
    }

    handleKeyUp(value) {
        this.setState({searchValue: value},
            () => {
                if (this.state.searchValue.length > 2) {
                    const s = this.state.searchValue.toLowerCase()
                    const matches = this.state.data.filter(v => v.SN.toLowerCase().startsWith(s))
                    this.setState({_data: matches})
                } else {
                    this.setState({_data: []})
                }
            }
        )
    }

    handleSelectRegion(value){
        console.log(value);
        const matches = this.state.data.filter(v => v.REG === value)
        this.setState({_regionPlaces: matches, _data: matches, selectedRegion: value});
    }

    changeActiveTab(value) {
        this.setState({
            activeTab: value
        })
    }

    handleClick(value) {
        const selected = this.state._data.filter(v => v.UID === value)
        this.setState({_selected: selected, searchValue: '', _data: []}, () => {
            console.log(this.state)
        })
    }

    handleRegionPlaceClick(value){
        const selected = this.state._data.filter(v => v.UID === value)
        this.setState({_selected: selected, searchValue: ''}, () => {
            console.log(this.state)
        })
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

    onFormSubmit(e) {
        e.preventDefault();
        if (this.state._data.length === 1) {
            this.handleClick(this.state._data[0].UID)
        }

    }

    render() {

        const activeTab = () => {
            if (this.state.activeTab === 'search') {
                return <div>
                    <SearchBox
                    onFormSubmit={(e) => this.onFormSubmit(e)}
                    handleKeyUp={(value) => this.handleKeyUp(value)}
                    value={this.state.searchValue}/>
                    <ResultsBox
                        handleClick={(value) => this.handleClick(value)}
                        data={this.state._data}
                        query={this.state.searchValue}/></div>
            } else {
                return <div><SelectRegion
                            selectedRegion={this.state.selectedRegion}
                            handleSelectRegion={(value) => this.handleSelectRegion(value)}/>
                <SelectPlaceInRegion
                    handleClick={(value) => this.handleRegionPlaceClick(value)}
                    places={this.state._regionPlaces}
                />
                </div>
            }
        }

        const currentTab = this.state.activeTab;

        return (
            <div className="App">

                <div className="tab-buttons">
                    <button
                        className={currentTab === 'search' ? 'active' : null}
                        onClick={() => this.changeActiveTab('search')}>
                        Search for a place
                    </button>
                    <button
                        className={currentTab === 'browse' ? 'active' : null}
                        onClick={() => this.changeActiveTab('browse')}>
                        Browse by region
                    </button>
                </div>

                {activeTab()}


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
