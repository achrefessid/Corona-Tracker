import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <>
      {/*navbar*/}
      <nav class="navbar navbar-dark default-color"><a class="navbar-brand" href="#">Corona Virus Tracker</a>
      <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item">
        <a class="nav-link waves-effect waves-light"><i class="fab fa-twitter"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link waves-effect waves-light"><i class="fab fa-google-plus-g"></i></a>
      </li>
      </ul>
      </nav>
      {/*navbar*/}
        <header id="header">
        <div className="logo">
        <a class="navbar-brand" href="#">Corona Virus Tracker</a>
        </div>
        <nav id="nav-bar">
          <ul>
          <li><a className="nav-link" to="/"></a></li>
          <a class="nav-link waves-effect waves-light"><i class="fab fa-facebook"></i></a>
          <a class="nav-link waves-effect waves-light"><i class="fab fa-twitter"></i></a>
          </ul>
        </nav>
      </header>

      {/**/}
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        </div>
        
      {/*footer*/}
        {/*<footer class="page-footer font-small teal">
          <div class="footer-copyright text-center py-3">© 2020 Copyright:
          <a href=""> Corona Virus Tracker</a>
          </div>
          </footer>*/}
          <footer className="footer">
          <p>© 2020 Copyright: &copy; Corona Virus Tracker</p>
          </footer>
        </>
    );
  }
}

export default App;



