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

            </div>
        )
    }
}

export default SelectRegion;
