import React from 'react'

class SelectCounty extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
            displayInfo: 'none'
        }
    }

    handleSelectCounty(e){
        this.setState({
            selectedValue: e.target.value
        })
        this.props.handleSelectCounty(e.target.value)
    }

    handleInfoBoxClick = () => {
        this.state.displayInfo === 'none' ? this.setState({displayInfo: 'block'}) : this.setState({displayInfo: 'none'})
    }

    render(){
        return(
            <div className='select-region-container'>
                <select
                    className="select-region"
                    value={this.props.selectedCounty}
                    onChange={(event) => this.handleSelectCounty(event)}>
                    <option value=''>All Counties</option>
                    {this.props.countiesList.map((county, index) => {
                        return <option key={index} value={county}>{county}</option>
                    })}
                </select>
                <div className='prime-only-container'>
                    <img alt="" onClick={this.handleInfoBoxClick} style={{width: "15px", marginRight: '10px'}}
                         src="info.svg"/>
                    <p className="info-window" style={{display: this.state.displayInfo}}>A prime location is defined as an area where property values are at least 20% higher than the regional average. Whilst all locations have prime areas, not all have them listed, as small villages or hamlets may not qualify under the research criteria.</p>
                    <label
                        style={{whiteSpace: 'nowrap'}} htmlFor="primeOnly"> Prime Locations Only </label>
                    <input style={{margin: 0}} type="checkbox" id="primeOnly" name="primeOnly"
                           checked={this.props.primeOnly}
                           onChange={(e) => this.props.handlePrimeOnly(e.target.checked)}/>
                </div>
            </div>
        )
    }
}

export default SelectCounty;
