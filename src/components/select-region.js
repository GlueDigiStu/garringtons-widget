import React from 'react'

class SelectRegion extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        }
    }

    handleSelectRegion(e){
        this.setState({
            selectedValue: e.target.value
        })
        this.props.handleSelectRegion(e.target.value)
    }

    render(){
        return(
            <div>
                <select
                    className="select-region"
                    value={this.props.selectedRegion}
                    onChange={(event) => this.handleSelectRegion(event)} >
                    <option> </option>
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
