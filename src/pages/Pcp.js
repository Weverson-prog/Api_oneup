import React, { Component } from 'react';
import api from '../api'

class Pcp extends Component{

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
    const list = all?.value?.filter(a => a.fase === '01 - PCP')
    all?.value?.shift()
    const prd = all?.value?.filter(a => a.fase === '01 - PCP')
    
    if (list?.length > 1) {
      list.length = 1;
    }
    if (prd?.length > 5) {
      prd.length = 5;
    }
   
    if (list?.length > 0){
    return(
      <center>
      <div>
       {console.log(list)}
       {list?.map(({fase, produto,qtde}) => (
          <ul key={fase}>
            <h1 style={{borderStyle: 'solid' ,fontSize: '50px' ,marginTop: '15px', width: 'fit-content', color: 'Black', backgroundColor: '#15CDFC'}}><h1>Operação</h1>FASE : {fase}</h1>            
            <ul style={{borderStyle: 'solid' ,fontSize: '40px' , marginTop: '15px', width: 'fit-content', color: 'Black', backgroundColor: '#15CDFC'}}>PRODUTO : {produto}</ul>
            <b><ul style={{borderStyle: 'solid' ,fontSize: '30px' ,marginTop: '15px', width: 'fit-content', color: 'Black', backgroundColor: '#15CDFC'}}>QUANTIDADE: {qtde}</ul></b>
            <h3 style={{borderStyle: 'solid' ,marginTop: '15px', width: 'fit-content', color: 'Black', backgroundColor: '#15CDFC'}}> {prd?.map(({produto}) => (
            <ul>Proximos Produtos: {produto}</ul>
            ))} </h3>
          </ul> 
          
        ))}
      </div>
      </center>
    );
    }else {
      return (
      <center> 
        <h1 style={{borderStyle: 'solid' ,fontSize: '50px' ,marginTop: '15px', width: 'fit-content', color: 'Black', backgroundColor: 'red'}}>Não existem produtos nesta fase!</h1>
      </center> 
      )
    }
  };

};

export default Pcp;
