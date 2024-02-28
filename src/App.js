import React from 'react';
import SearchBox from "./components/search-box";
import data from "./data/data-2024-en";
import ResultsBox from "./components/results-box";
import DataBox from "./components/data-box";
import SelectRegion from "./components/select-region";
import SelectCounty from "./components/select-county";
import SelectMetric from "./components/select-metric";
import SelectOrder from "./components/select-order";
import SelectPlaceInRegion from "./components/select-place-in-region";
import ListAllPlaces from "./components/list-all-places";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            data: data,
            _data: [],
            _selected: {},
            _pinned: {},
            _regionPlaces: [],
            activeTab: 'search',
            selectedRegion: '',
            selectedCounty: '',
            selectedOrder: 'asc',
            selectedMetric: 'OR',
            mobileShowMenu: false,
            countiesList: []
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

    handleSelectRegion(value) {
        console.log(value);
        const matches = this.state.data.filter(v => v.REG === value)
        let counties = matches.map(v => v.COU);
        counties= counties.filter((value, index, array) => array.indexOf(value) === index);

        this.setState({_regionPlaces: matches, _data: matches, selectedRegion: value, countiesList: counties});
        console.log(this.state.countiesList)
    }

    handleSelectCounty(value) {
        console.log(value);
        const matches = this.state.data.filter(v => v.COU === value)
        this.setState({_data: matches, selectedCounty: value});
    }

    handleSelectMetric(value) {
        console.log(value);
        this.setState({selectedMetric: value});
    }

    handleSelectOrder(value) {
        console.log(value);
        this.setState({selectedOrder: value});
    }

    changeActiveTab(value) {
        this.setState({
            activeTab: value,
            mobileShowMenu: false
        })
    }

    handleClick(value) {
        const selected = this.state._data.filter(v => v.UID === value)
        this.setState({_selected: selected, searchValue: '', _data: []}, () => {
            console.log(this.state)
        })
    }

    handleRegionPlaceClick(value) {
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

    handleMobileToggle() {
        this.setState({mobileShowMenu: !this.state.mobileShowMenu})
    }

    render() {

        const activeTab = () => {
            console.log(this.state.data);
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
            } else if (this.state.activeTab === 'browse') {
                return <div><SelectRegion
                    selectedRegion={this.state.selectedRegion}
                    handleSelectRegion={(value) => this.handleSelectRegion(value)}/>
                    <SelectPlaceInRegion
                        handleClick={(value) => this.handleRegionPlaceClick(value)}
                        places={this.state._regionPlaces}
                    />
                </div>
            } else {
                return <div>
                    <div className='sort-filters'>
                        <div>
                            <p>Region</p>
                            <SelectRegion
                                selectedRegion={this.state.selectedRegion}
                                handleSelectRegion={(value) => this.handleSelectRegion(value)}/>
                        </div>
                        <div>
                            <p>County / Unitary Authority</p>
                            <SelectCounty
                                countiesList={this.state.countiesList}
                                selectedCounty={this.state.selectedCounty}
                                handleSelectCounty={(value) => this.handleSelectCounty(value)}/>
                        </div>
                        <div>
                            <p>Metric to order by</p>
                            <SelectMetric
                                handleSelectMetric={(value) => this.handleSelectMetric(value)}/>
                        </div>
                        <div>
                            <p>Order</p>
                            <SelectOrder
                                handleSelectOrder={(value) => this.handleSelectOrder(value)}/>
                        </div>
                    </div>
                    <p>Click a place name below to see additional information</p>

                    <div>
                        <ListAllPlaces
                            places={this.state._data.length > 0 ? this.state._data : this.state.data}
                            metric={this.state.selectedMetric}
                            order={this.state.selectedOrder}
                        />

                    </div>
                </div>
            }
        }

        const currentTab = this.state.activeTab;

        return (
            <div className="App">

                <div className={this.state.mobileShowMenu ? ' tab-buttons mobile-show' : 'tab-buttons mobile-hide'}>
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
                    <button
                        className={currentTab === 'sort' ? 'active' : null}
                        onClick={() => this.changeActiveTab('sort')}>
                        Sort by ranking
                    </button>

                    <div className='mobile-toggle'>
                        <button className='show'
                        onClick={() => this.handleMobileToggle()}
                        >
                            <svg width="35px" height="35px" viewBox="0 0 35 35" >
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                    <g id="Group" transform="translate(1.000000, 1.000000)" stroke="#BB775A" stroke-width="3">
                                        <line x1="16.5" y1="0.5" x2="16.5" y2="32.5" id="Line"></line>
                                        <line x1="16.5" y1="0.5" x2="16.5" y2="32.5" id="Line-Copy" transform="translate(16.500000, 16.500000) rotate(-90.000000) translate(-16.500000, -16.500000) "></line>
                                    </g>
                                </g>
                            </svg>
                        </button>

                        <button
                            onClick={() => this.handleMobileToggle()}
                            className='hide'>
                            <svg width="35px" height="35px" viewBox="0 0 35 35" version="1.1">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                    <g id="Group" transform="translate(1.000000, 1.000000)" stroke="#BB775A" stroke-width="3">
                                        <line x1="16.5" y1="0.5" x2="16.5" y2="32.5" id="Line-Copy" transform="translate(16.500000, 16.500000) rotate(-90.000000) translate(-16.500000, -16.500000) "></line>
                                    </g>
                                </g>
                            </svg>
                        </button>

                    </div>

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
