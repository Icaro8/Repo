import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import {Container} from './styles'

export default function Login(){
  const minLength = 4;
  const maxLength = 20;
  const [user, setUser]=useState('')
  useEffect(()=> {document.title="Página de Login"},[])
  function eventSubmit(event){
    event.preventDefault();
  }
  function onChange(value){
    const Value = value.target.value;
    setUser(Value);
  }
  return(
    <Container>
      <div className="Container-column">
        <h1>Login </h1>
          <main>
            <div className="Content-form">
              <div className="form-margin">
                <form action="" method="" onSubmit={eventSubmit}>
                    <label htmlFor="email"><strong>Usuário</strong></label>
                    <input type="email" id="email" className="input-text" placeholder="Usuário" required onChange={onChange} minLength={minLength} maxLength={maxLength}/>
                    <label htmlFor="senha"><strong>Senha</strong></label>
                    <input type="password" id="senha" className="input-text" placeholder="Senha" required minLength={minLength}/>
                    <input type="submit" value="Logar" className="btn"/>
                </form>
              </div>
              <div>
                <nav>
                  <ul>
                   <li><Link to="" className="Link">Esqueceu senha?</Link></li>
                 </ul>
              </nav>
             </div>
          </div>
        </main>
      </div>
    </Container>
  )
}