import React from "react";

let Price=React.createContext(0);
let Discount=React.createContext(0);

function PriceComp(props){
    return(
        <div>
            <Price.Provider value={4000}>
                {props.children}
            </Price.Provider>
        </div>
    )
}

function DiscountComp(props){
    return(
        <div>
            <Discount.Provider value={30}>
                {props.children}
            </Discount.Provider>
        </div>
    )
}

function AppComp(){
    return(
        <div>
            <PriceComp>
                <DiscountComp>
                    <Price.Consumer>
                        {(prodPrice) => (
                            <Discount.Consumer>
                                {(disc) => {
                                    let discountedPrice=prodPrice-(prodPrice*disc)/100;
                                    return(
                                        <div>
                                            <p>Actual Price: {prodPrice}</p>
                                            <p>Discount Given: {disc}</p>
                                            <p>Discounted Price: {discountedPrice}</p>
                                        </div>
                                    )
                                }}
                            </Discount.Consumer>
                        )}
                    </Price.Consumer>
                </DiscountComp>
            </PriceComp>
        </div>
    )
}


export default AppComp;