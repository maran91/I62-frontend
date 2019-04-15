import React, { Component } from 'react'

export default class EventResult extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      results: [],
    }
  }

  componentDidMount () {
    const eventId = this.props.match.params.id

    fetch(`http://localhost:8000/results/${eventId}`)
      .then(response => response.json())
      .then(response => this.setState({
        loading: false,
        results: response.Results.sort((a, b) => a.Rank - b.Rank)
      }))
  }

  render() {
    if (this.state.loading) {
      return (<div>Loading</div>)
    }

    if (!this.state.loading && this.state.results.length === 0) {
      return <div>No results</div>
    }

    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Country</th>
              <th scope="col">Athlete</th>
              <th scope="col">Result</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map(result => {
              return (
                <tr>
                  <td>{result.Rank}</td>
                  <td>{result.Country}</td>
                  <td>{result.Athlete}</td>
                  <td>{result.Result}</td>
                  <td>{result.Points}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
