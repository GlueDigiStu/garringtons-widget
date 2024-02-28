import React from 'react'

class SelectCounty extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        }
    }

    handleSelectCounty(e){
        this.setState({
            selectedValue: e.target.value
        })
        this.props.handleSelectCounty(e.target.value)
    }

    render(){
        return(
            <div>
                <select
                    className="select-region"
                    value={this.props.selectedCounty}
                    onChange={(event) => this.handleSelectCounty(event)} >
                    <option> </option>
                    {this.props.countiesList.map((county, index) => {
                        return <option key={index} value={county}>{county}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default SelectCounty;
