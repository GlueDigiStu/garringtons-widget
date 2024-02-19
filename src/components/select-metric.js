import React from 'react'

class SelectMetric extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        }
    }

    handleSelectMetric(e){
        this.setState({
            selectedValue: e.target.value
        })
        this.props.handleSelectMetric(e.target.value)
    }

    render(){
        return(
            <div>
                <select
                    className="select-region"
                    value={this.props.selectedMetric}
                    onChange={(event) => this.handleSelectMetric(event)} >
                    <option value='OR'>Overall Ranking </option>
                    <option value='NE'>Natural Environment </option>
                    <option value='WB'>Wellbeing </option>
                    <option value='HC'>Heritage / Culture </option>
                    <option value='SCH'>Schools, employment and connectivity </option>
                    <option value='HP'>House Price Quality and Value </option>
                    <option value='AP'>Average Family Home Price</option>
                    <option value='SPC'>Average sales price change in last 12 months</option>

                </select>
            </div>
        )
    }
}

export default SelectMetric;
