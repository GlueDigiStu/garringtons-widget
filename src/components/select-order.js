import React from 'react'

class SelectOrder extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        }
    }

    handleSelectOrder(e){
        this.setState({
            selectedValue: e.target.value
        })
        this.props.handleSelectOrder(e.target.value)
    }

    render(){
        return(
            <div>
                <select
                    className="select-region"
                    value={this.props.selectedOrder}
                    onChange={(event) => this.handleSelectOrder(event)} >
                    <option value='asc'>Ascending</option>
                    <option value='des'>Descending</option>

                </select>
            </div>
        )
    }
}

export default SelectOrder;
