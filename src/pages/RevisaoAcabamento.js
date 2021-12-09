import React, { Component } from 'react';
import api from '../api';


class RevisaoA extends Component{

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
    const list = all?.value?.filter(a => a.fase === '13 - REVISAO DE ACABAMENTO')
    all?.value?.shift()
    const prd = all?.value?.filter(a => a.fase === '13 - REVISAO DE ACABAMENTO')
    
    if (list?.length > 1) {
      list.length = 1;
    }
    prd?.shift()
    if (prd?.length > 3) {
      prd.length = 3;
    }
   
    if (list?.length > 0){
      return(
        <center>
        <div>
          
          {list?.map(({fase, produto,qtde, cod_produto}) => (
            <ul key={fase}>
              <h1 style={{borderStyle: 'solid' ,fontSize: '60px' ,marginTop: '15px', width: '1200px',height : '100px',color: 'Black'}}>FASE : {fase}</h1>            
              <ul style={{borderStyle: 'solid', fontSize: '65px' , marginTop: '15px', width: '1200px', height : '300px', color: 'Black'}}><u>PRODUTO : </u><br/>{produto}<br/>{cod_produto}</ul>
              <b><ul style={{borderStyle: 'solid' ,fontSize: '50px' , width: '500px', color: 'Black'}}>QUANTIDADE: {qtde}</ul></b>
              <b><ul style={{fontSize: '30px', marginTop: '35px',}}>Proximos Produtos:<br/> </ul></b>
              <table style={{ marginTop: '25px',}}>
                <b>
                <thead>
                  <tr>
                    <th style={{borderStyle: '1px',fontSize: '25px', backgroundColor: 'rgb(0 114 245)'}}>Posição</th>
                    <th style={{borderStyle: '1px',fontSize: '25px', backgroundColor: 'rgb(0 114 245)'}}>Nome</th>
                    <th style={{borderStyle: '1px',fontSize: '25px', backgroundColor: 'rgb(0 114 245)'}}>Código</th>
                    <th style={{borderStyle: '1px',fontSize: '25px', backgroundColor: 'rgb(0 114 245)'}}>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                
                {prd?.map(({produto, cod_produto, qtde},index) => (
                
                    <tr key={produto}>
                      <td style={{borderStyle: '1px',fontSize: '25px', backgroundColor: 'rgb(151 189 233)',width: '300px',textAlign: 'center' , height : '50px'}}>{index+1}</td>
                      <td style={{borderStyle: '1px',fontSize: '25px', backgroundColor: 'rgb(151 189 233)',width: '600px',textAlign: 'center'}}>{produto}</td>
                      <td style={{borderStyle: '1px',fontSize: '25px', backgroundColor: 'rgb(151 189 233)',width: '300px',textAlign: 'center'}}>{cod_produto}</td>
                      <td style={{borderStyle: '1px',fontSize: '25px', backgroundColor: 'rgb(151 189 233)',width: '300px',textAlign: 'center'}}>{qtde}</td>
                    </tr>
                  ))}
                </tbody>
                </b>
              </table>
              
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

export default RevisaoA;
