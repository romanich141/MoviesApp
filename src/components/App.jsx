import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";
import ResetFilters from "./Filters/ResetFilters";
const initialState = {
  filters: {
    sort_by: "popularity.desc",
    primary_release_year: 2019,
    with_genres: []
  },
  page: 1,
  totalPages: null
};
export default class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  onResetFilters = event => {
    event.preventDefault();
    this.setState({
      ...initialState
    });
  };
  onChangeFilters = event => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    this.setState({
      filters: newFilters
    });
  };
  onChangePages = page => {
    this.setState({
      page
    });
  };
  showTotalPages = totalPages => {
    this.setState({
      totalPages
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div>
                  <h3>Фильтры:</h3>
                </div>
                <ResetFilters onResetFilters={this.onResetFilters} />
                <Filters
                  filters={this.state.filters}
                  page={this.state.page}
                  totalPages={this.state.totalPages}
                  onChangeFilters={this.onChangeFilters}
                  onChangePages={this.onChangePages}
                  onResetFilters={this.onResetFilters}
                  onChangeCheckbox={this.onChangeCheckbox}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              filters={this.state.filters}
              page={this.state.page}
              showTotalPages={this.showTotalPages}
              onChangePages={this.onChangePages}
            />
          </div>
        </div>
      </div>
    );
  }
}
