function MovieDetails(props){
    return (
        <div className="movie-container">
            <div className="movie-body">
                <img src="{props.picture}" alt="Image" className="movie-image"></img>
                <h5>{props.title}</h5>
                <h6>{props.year}</h6>

            </div>
        </div>
    );
}
export default MovieDetails;