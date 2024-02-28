import React from 'react'

class ListAllPlaces extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
            expandedPlaces: {}, // Store the visibility state for each place

        }
    }

    toggleExtraContent(placeId) {
        this.setState((prevState) => ({
            expandedPlaces: {
                ...prevState.expandedPlaces,
                [placeId]: !prevState.expandedPlaces[placeId], // Toggle the visibility state for the specific place
            },
        }));
    }

    render() {

        const listPlaces = () => {
            const order = this.props.order;
            let sortedData;

            if (order === 'asc') {
                sortedData = this.props.places.sort((a, b) => {
                    const valueA = getValueToCompare(a, this.props.metric);
                    const valueB = getValueToCompare(b, this.props.metric);
                    return compareValues(valueA, valueB);
                });
            } else if (order === 'des') {
                sortedData = this.props.places.sort((a, b) => {
                    const valueA = getValueToCompare(b, this.props.metric);
                    const valueB = getValueToCompare(a, this.props.metric);
                    return compareValues(valueA, valueB);
                });
            } else {
                // Handle invalid order value
                console.error('Invalid order value');
            }

// Function to get the value to compare based on the metric
            function getValueToCompare(item, metric) {
                if (metric === 'AP') {
                    return parseFloat(item.AP.replace(/[^\d.-]/g, ''));
                } else if (metric === 'SPC') {
                    return parseFloat(item.SPC.replace('%', ''));
                } else {
                    return item[metric];
                }
            }

// Function to compare values
            function compareValues(valueA, valueB) {
                // Handle non-string values
                if (typeof valueA !== 'string' || typeof valueB !== 'string') {
                    return valueA - valueB;
                }
                return valueA.localeCompare(valueB);
            }

            return sortedData.map((place) => {
                return (
                    <div className='place-row' key={place.UID} onClick={() => this.toggleExtraContent(place.UID)}>
                        <h1 className='place-name'>{place.SN}</h1>
                        <h1>{place[this.props.metric]}</h1>
                        {this.state.expandedPlaces[place.UID] && ( // Check the visibility state for this place

                            <div className='place-extra-content'>
                                <p className='large'>Overall rank: <span className="result large">{place.OR} /<span
                                    className="mini"> 1429</span></span></p>
                                {/*<p>Change since last year: <span className="result">{place.CHANGE * -1}</span> </p>*/}
                                <p>Natural Environment: <span className="result">{place.NE}</span></p>
                                <p>Wellbeing: <span className="result">{place.WB}</span></p>
                                <p>Heritage / Culture: <span className="result">{place.HC}</span></p>
                                <p>Schools, Employment & Connectivity: <span className="result">{place.SCH}</span></p>
                                <p>House Price Quality & Value: <span className="result">{place.HP}</span></p>
                                {/*<p>Overall Ranking: </p>*/}
                                <p>Average family home cost: <span className="result">{place.AP}</span></p>
                                <p>Sales price change in last 12 months: <span
                                    className="result">{place.SPC}</span></p>
                            </div>
                        )}
                    </div>
                )
            })
        }
        console.log(this.props.places);
        return (
            <div>
                {listPlaces()}
            </div>
        )
    }
}

export default ListAllPlaces;
