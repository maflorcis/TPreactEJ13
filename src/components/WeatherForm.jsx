import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Introduce el nombre de tu ciudad" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Introduce el nombre del país" className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                Averiguar Clima
            </button>
        </form>
    </div>
);

export default WeatherForm;