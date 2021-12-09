
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/PCP' activeStyle>
            PCP
          </NavLink>
          <NavLink to='/SEPARACAO' activeStyle>
            SEPARAÇÃO DE TECIDO
          </NavLink>
          <NavLink to='/CORTE' activeStyle>
            CORTE
          </NavLink>
          <NavLink to='/MATERIALCOSTURA' activeStyle>
            MAT. P/ COSTURA
          </NavLink>
          <NavLink to='/DISTRIBUICAO' activeStyle>
            DISTRIBUIÇÃO
          </NavLink>
          <NavLink to='/COSTURA' activeStyle>
            COSTURA
          </NavLink>
          <NavLink to='/REVISAO' activeStyle>
            REVISÃO DE COSTURA
          </NavLink>
          <NavLink to='/CONSERTO' activeStyle>
            CONCERTO
          </NavLink>
          <NavLink to='/BORDADO' activeStyle>
            BORDADO
          </NavLink>
          <NavLink to='/REVISAOBORDADO' activeStyle>
            REVISÃO DE BORDADO
          </NavLink>
          <NavLink to='/MATERIAL' activeStyle>
            MAT. P/ ACABAMENTO
          </NavLink>
          <NavLink to='/ACABAMENTO' activeStyle>
            ACABAMENTO
          </NavLink>
          <NavLink to='/REVISAOACABAMENTO' activeStyle>
            REVISÃO DE ACABAMENTO
          </NavLink>
          <NavLink to='/EXPEDICAO' activeStyle>
            EXPEDIÇÃO
          </NavLink>
          
        </NavMenu>
        <NavBtn>
         
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

