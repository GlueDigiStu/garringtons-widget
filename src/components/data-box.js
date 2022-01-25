import React from 'react'

class DataBox extends React.Component{
    handleClick = () => {
        this.props.handlePin(this.props.values);
    }
    render() {
        let val = this.props.values;


        if (val.length > 0) {
            let PBC = null;
            if(val[0].PB === "Over £650k"){
                PBC = "106";
            }else if(val[0].PB === "£350k-£650k"){
                PBC = "605"
            } else if(val[0].PB === "less than £350k"){
                PBC = "661"
            } else{
                PBC = null;
            }
            return (
                <div className="data-box">
                    {!this.props.unpin ?
                    <button className="pin-me" onClick={this.handleClick}>Pin Me</button> :
                        <button onClick={this.handleClick}><i className="fas fa-times"></i></button>}
                    <h1>{val[0].SN}</h1>
                    <p>Overall rank: <span className="result">{val[0].OR} /<span className="mini"> 1372</span></span> </p>
                    <p>Change since last year: <span className="result">{val[0].CHANGE * -1}</span> </p>
                    <hr/>
                    <p>Natural beauty rank: <span className="result">{val[0].PE} /<span className="mini"> 1372</span></span></p>
                    <p>Quality of life rank: <span className="result">{val[0].QL} /<span className="mini"> 1372</span></span></p>
                    <p>Architectural beauty rank: <span className="result">{val[0].AC} /<span className="mini"> 1372</span></span></p>
                    <p>Green rank: <span className="result">{val[0].GGR} /<span className="mini"> 1372</span></span></p>
                    {/*<p>Overall Ranking: </p>*/}
                    <hr/>
                    <p>Average family home cost: <span className="result">{val[0].PB}</span></p>
                    <p>Rank in price band: <span className="result">{val[0].PBR} / <span className="mini"> {PBC}</span></span></p>
                </div>
            )
        } else {
            return (
                <div>
                    {!this.props.unpin ?
                    <p></p> :
                        null}
                </div>
            )
        }
    }
}

export default DataBox


// export default function DataBox(props){
//     let val = props.values;
//     if(val.length > 0){
//         return(
//             <div>
//                 <button onClick={(val)=> props.handlePin(val)}>Pin This Result</button>
//                 <h1>{val[0].SN}</h1>
//                 <p>Physical Environment Score: {val[0].PE}</p>
//                 <p>Quality of living Score: {val[0].QL}</p>
//                 <p>Architecture, heritage, environmental credentials Score: {val[0].AC}</p>
//                 <p>Price band of average family home: {val[0].PB}</p>
//                 <p>Overall Ranking: {val[0].OR}</p>
//                 <p>Price Bracket Ranking: {val[0].PBR}</p>
//             </div>
//         )
//     } else {
//         return(
//             <div>
//                 <p>Please choose a town</p>
//             </div>
//         )
//     }
// }
