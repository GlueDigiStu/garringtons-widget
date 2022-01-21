import React from "react";

class SelectPlaceInRegion extends React.Component {
    render() {

        console.log(this.props.places);

        const sorted = this.props.places.sort((a,b) => (a.SN > b.SN) ? 1 : ((b.SN > a.SN) ? -1 : 0))


        const display = () => {
            if (this.props.places.length > 0) {
                return <div className="region-select">
                    <ul>
                        {
                           sorted.map((item) =>
                                <li
                                    onClick={(event) => this.props.handleClick(item.UID)}
                                    key={item.UID}>{item.SN}</li>
                            )
                        }
                    </ul>
                </div>
            } else {
                return <div/>
            }
        }
        return (
            <div>
                {display()}
            </div>
        )
    }
}

export default SelectPlaceInRegion
