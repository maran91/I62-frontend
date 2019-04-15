import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/events')
      .then(response => response.json())
      .then(events => this.setState({
        events
      }))
  }

  render () {
    const { events } = this.state
    return (
      <div>
        <h3>Events</h3>
        <ul className="list-group">
          {events.map(event => {
            return (
              <li className="list-group-item">
                <Link to={`/events/${event.id}/results`}>{event.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
