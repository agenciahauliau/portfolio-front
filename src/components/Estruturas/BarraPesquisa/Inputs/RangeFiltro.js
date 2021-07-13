import React, { Component } from 'react';
import { Range } from 'rc-slider';

export default class RangeFiltro extends Component {
    constructor(props) {
      super(props);

      let Max = [...new Set(this.props.valores.sort(function (a, b) { return a - b }).filter(item => item !== 0))].shift()
      let Min = [...new Set(this.props.valores.sort(function (a, b) { return a - b }).filter(item => item !== 0))].pop()
      
      const retornoValores = () => {
        if(this.props.queryURL){
          let arrayURL = []
          for(let query of this.props.queryURL){
            arrayURL.push(+query.value)
          }
          return arrayURL
        } else {
          return [Max, Min]
        }
      }

      this.state = {
        nome: this.props.nome,
        valorMax: Max,
        valorMin: Min,
        valores: [retornoValores()[0], retornoValores()[1]],
        valoresInput: ['', ''],
        distancia: this.props.distance
      };
    }
  
    handleChange = (value) => {
      this.setState({
        valores: value,
        valoresInput: value
      });
    };

    render() {
    
      const Compact = new Intl.NumberFormat("pt-br", { notation: "compact", maximumSignificantDigits: 3 });

      return (
        <div className="Range">
          <div className="valoresRange">
            <p>{Compact.format(this.state.valores[0])}</p>
            <p>{Compact.format(this.state.valores[1])}</p>
          </div>
          <Range
            className={this.state.nome}
            min={this.state.valorMax}
            max={this.state.valorMin}
            defaultValue={[this.state.valores[0], this.state.valores[1]]}
            step={this.state.distancia}
            allowCross={false}
            onChange={this.handleChange}
          />
          <input type="hidden" name={this.state.nome} value={this.state.valoresInput[0]}/>
          <input type="hidden" name={this.state.nome} value={this.state.valoresInput[1]}/>
        </div>
      )
    }
  }