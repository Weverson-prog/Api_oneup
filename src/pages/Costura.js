import React, { Component } from 'react';
import api from '../api'

class Costura extends Component{

  state={
    all: []
  }

  async componentDidMount(){
    const response =  await api.get('')
    console.log(response.data)
    this.setState({all: response.data})
  }
  render(){
    const { all } = this.state;
    const list = all?.value?.filter(a => a.fase === '06 - COSTURA')
    all?.value?.shift()
    const prd = all?.value?.filter(a => a.fase === '06 - COSTURA')
    
    if (list?.length > 1) {
      list.length = 1;
    }
    if (prd?.length > 3) {
      prd.length = 3;
    }
    
    if (list?.length > 0){
      return(
        <center>
        <div>
          
          {list?.map(({fase, produto,qtde, cod_produto}) => (
            <ul key={fase}>
              <h1 style={{borderStyle: 'solid' ,fontSize: '50px' ,marginTop: '15px', width: '900px',color: 'Black'}}>FASE : {fase}</h1>            
              <ul style={{borderStyle: 'solid', fontSize: '40px' , marginTop: '15px', width: '900px', height : '180px', color: 'Black'}}><u>PRODUTO : </u><br/>{produto}<br/>{cod_produto}</ul>
              <b><ul style={{borderStyle: 'solid' ,fontSize: '30px' , width: '400px', color: 'Black'}}>QUANTIDADE: {qtde}</ul></b>
              <ul style={{fontSize: '30px', marginTop: '15px',}}>Proximos Produtos:<br/> </ul>
              <h3 style={{borderStyle: 'solid' ,marginTop: '15px', width: 'fit-content', color: 'Black', backgroundColor: '#15CDFC'}}> {prd?.map(({produto}) => (
              
              <ul> {produto}</ul>
             
              
              ))} </h3>
            </ul> 
            
          ))}
        </div>
        </center>
      );
      } else {
        return (
          <center> 
        <h1 style={{borderStyle: 'solid' ,fontSize: '50px' ,marginTop: '15px', width: 'fit-content', color: 'Black', backgroundColor: 'red'}}>Não existem produtos nesta fase!</h1>
      </center> 
        )
      }
  };

};

export default Costura;


