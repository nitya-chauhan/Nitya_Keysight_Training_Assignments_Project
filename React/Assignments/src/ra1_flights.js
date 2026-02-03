import React from 'react';  
 
function App(){
        return(
           <div>
                <h2>Single Flight Details</h2>
                <FlightInfo airlinename="Indigo" airlinecode="7D-596" seats={180} source="Delhi" destination="Mumbai" price={5500} />  
           </div>
        )
}


function FlightInfo(props){
        return(
            <div>
                <h3>Flight Info</h3>    
                <p>Airline Name:{props.airlinename}</p>
                <p>Airline Code:{props.airlinecode}</p>
                <p>Airline Seats:{props.seats}</p>
                <RouteInfo source={props.source} destination={props.destination} />
                <PriceInfo price={props.price} />
            </div>
        )
    }


function RouteInfo(props){
        return(
            <div>
                <h3>Route Details</h3>
                <p> Source City: {props.source}</p>  
                <p> Destination City: {props.destination}</p>  
            </div>
        )
    }

 
function PriceInfo(props){
        return(
            <div>
                <h3> Ticket Price</h3>
                <p> Price: {props.price}</p>  
            </div>
        )
    }

 
export default App;