import React, { Component } from 'react';
import '../assets/css/App.css';
import Card from './Card';
import Button from './Button';

  
class App extends Component {

  constructor(){ //Construtor
    super();
    this.state = {planets: [], randomPosition: 0 };
  }

  componentWillMount(){ // Requisitar dados
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then((data) => {
        let planetslist = data.results;
        //console.log(planets);
        this.setState({ planets: planetslist }); //Mudar o estado
      })
  }    
  sortPlanet(){ //Sortear um numero aleatorio dentro do tamanho da array retornada
    let randomNumber = parseInt(Math.random() * (this.state.planets.length));
    this.setState({ randomPosition: randomNumber }); //Mudar o estado
  }

  render() {
    if(this.state.planets.length === 0){ //IF para evitar que carregue sem que o estado tenha mudado
     return false 
    }
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">  Which is the planet?</h1>
        </header>
        {
          <Card 
            planet = {this.state.planets[this.state.randomPosition].name}
            terrain = {this.state.planets[this.state.randomPosition].terrain}
            population = {this.state.planets[this.state.randomPosition].population}
            climate = {this.state.planets[this.state.randomPosition].climate}
            featured = {this.state.planets[this.state.randomPosition].films.length}
          />
        }
        {
          <Button
            text = "Trust the force"
            action = {this.sortPlanet.bind(this)}
          />
        }

      </div>
    );
  }
}

export default App;
