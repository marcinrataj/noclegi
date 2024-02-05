import { Component } from 'react';
import Hotel from './Hotel/Hotel'
import styles from './Hotels.module.css'
class Hotels extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Oferty:</h2>
        {this.props.hotels.map(hotel => <Hotel {...hotel}/>)}
      </div>
    )
  }
}

export default Hotels;