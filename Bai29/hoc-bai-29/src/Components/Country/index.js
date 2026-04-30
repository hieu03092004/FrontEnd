import {country} from "../../data/data-country";
// import "./Country.css";
import "./Country.scss";
function Country(){
    return (
        <>
            <ul className="country">
                {country.map(itemCountry =>(
                    <li key={itemCountry.id} className="country__item">
                        <span className="country__text">{itemCountry.name}</span>
                        <ul className="country__sub">
                            {itemCountry.city.map(itemCountryCity=>(
                                <li className="country__sub--item" key={itemCountryCity.id}>{itemCountryCity.name}</li>
                            ))}
                        </ul>
                        
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Country;