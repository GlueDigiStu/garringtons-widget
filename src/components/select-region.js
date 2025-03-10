import React from 'react'

class SelectRegion extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
            displayInfo: 'none'
        }
    }

    handleSelectRegion(e){
        this.setState({
            selectedValue: e.target.value
        })
        this.props.handleSelectRegion(e.target.value)
    }


    handleInfoBoxClick = () => {
        this.state.displayInfo === 'none' ? this.setState({displayInfo: 'block'}) : this.setState({displayInfo: 'none'})
    }
    render(){
        console.log(this.props)
        return(
            <div className='select-region-container'>
                <select
                    className="select-region"
                    value={this.props.selectedRegion}
                    onChange={(event) => this.handleSelectRegion(event)} >
                    <option value=''>{this.props.activeTab === "browse" ? "Select a Region" : "All Regions"}</option>
                    <option value="East Midlands">East Midlands</option>
                    <option value="East of England">East of England</option>
                    <option value="Greater London">Greater London</option>
                    <option value="North East">North East</option>
                    <option value="North West">North West</option>
                    <option value="South East">South East</option>
                    <option value="South West">South West</option>
                    <option value="Wales">Wales</option>
                    <option value="West Midlands">West Midlands</option>
                    <option value="Yorkshire and The Humber">Yorkshire and The Humber</option>
                </select>
                <div className='prime-only-container'>
                    <img alt="" onClick={this.handleInfoBoxClick} style={{width: "15px", marginRight: '10px'}} src="info.svg"/>
                    <p className="info-window" style={{display: this.state.displayInfo}}>A prime location is defined as an area where property values are at least 20% higher than the regional average.</p>
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

export default SelectRegion;
