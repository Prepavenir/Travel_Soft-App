import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as WeatherForecastsStore from '../store/WeatherForecasts';

// At runtime, Redux will merge together...
type WeatherForecastProps =
  WeatherForecastsStore.WeatherForecastsState // ... state we've requested from the Redux store
  & typeof WeatherForecastsStore.actionCreators // ... plus action creators we've requested
  & RouteComponentProps<{ startDateIndex: string }>; // ... plus incoming routing parameters


class GuestsList extends React.PureComponent<WeatherForecastProps> {
  // This method is called when the component is first added to the document
  public componentDidMount() {
    this.ensureDataFetched();
  }

  // This method is called when the route parameters change
  public componentDidUpdate() {
    this.ensureDataFetched();
  }

  public render() {
    return (
      <React.Fragment>
        <h1 id="tabelLabel">Popis gostiju</h1>
        <p>Lista svih rezervacija na kojem će se nalaziti informacije
            o gostu, sobi, objektu te datumu.</p>
        {this.renderTable()}
      </React.Fragment>
    );
  }

  private ensureDataFetched() {
    const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }

  private renderTable() {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Puno ime</th>
            <th>Naziv sobe</th>
            <th>Objekt</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          {this.props.forecasts.map((rent: WeatherForecastsStore.WeatherForecast) =>
            <tr key={rent.date}>
              <td>{rent.date}</td>
              <td>{rent.temperatureC}</td>
              <td>{rent.temperatureF}</td>
              <td>{rent.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default connect(
  (state: ApplicationState) => state.weatherForecasts, // Selects which state properties are merged into the component's props
  WeatherForecastsStore.actionCreators // Selects which action creators are merged into the component's props
)(GuestsList as any);
