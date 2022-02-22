import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class Dets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            time : []
        }
    }
    
    componentDidMount () {
        const id = [1248991, 1850147, 2644210, 2988507, 2147714, 4930956, 1796236, 3143244];
        const units = "metric";
        const appid = "1dfdff4f77995429197a7bc900bad01d";
        axios.get(`http://api.openweathermap.org/data/2.5//group?id=${id}&units=${units}&appid=${appid}`)
        .then((res) =>{
            //console.log("data", res.data);
            this.setState({
                items:res.data.list
            })
            console.log(this.state.time);
            this.state.items.map((a, key) => {
               // console.log("item",a.dt);
            })
        }).catch(err =>{
            //console.log(err);
        })
        //console.log(this.state.items);
        
    }
    

    render () {
        return (
            <div className="page">
            
                <h2> Weather</h2>
                <table className="table">    
                    <tbody> 
                        {
                            this.state.items.map((a, key) => (
                            <tr className="row">
                                <td className="col">ID : {a.id}</td>
                                <td className="col">City : {a.name}</td>
                                <td className="col">Temperature : {a.main.temp} C</td>
                                {a.weather.map((b, key) => (<td className="col">Info : {b.description}</td>))}
                                <td className="col">Date : {a.dt}</td>
                            </tr> 
                            ))
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        )
    }
}export default Dets;