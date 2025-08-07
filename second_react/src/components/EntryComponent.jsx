export default function EntryComponent(props) {
    return (
        <div className="entry-component">
            <img className= "place-image" src={props.LocationImg} />
            <div className="place-data">
                <div className="location-data">
                    <img src="./././public/marker.png" />
                    <span className="country-name">{props.CountryName}</span>
                    <a href={props.MapsLink}>
                        View on Google Maps
                    </a>
                </div>
                <span className="place-name">
                    {props.PlaceName}
                </span>
                <span className="date">
                    {props.Date}
                </span>
                <span className="description">
                    {props.PlaceDescription}
                </span>
            </div>
        </div>
    );
}
