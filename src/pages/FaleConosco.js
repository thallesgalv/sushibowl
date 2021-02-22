import React from 'react'
import styles from '../styles/Internas.module.css'
import InputForm from '../components/InputForm'
import useValidateInput from '../hooks/useValidateInput'
import Button from '../components/Button'

const FaleConosco = () => {

  const nome = useValidateInput('nome')
  const email = useValidateInput('email')
  const idade = useValidateInput('idade')
  const cpf = useValidateInput('cpf')
  const celular = useValidateInput('celular')
  const cep = useValidateInput('cep')
  const cidade = useValidateInput('')
  const estado = useValidateInput('estado')
  const logradouro = useValidateInput('')


  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate())
      alert('Enviado')
    else {
      alert('Não Enviado')
    }
  }  

  
  const [response, setResponse] = React.useState(null);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    setQuery(cep.value)
  }, [cep.value])

  React.useEffect( async () => {  
    
    if (query.length >= 8) {
      const resp = await fetch(`https://viacep.com.br/ws/${query}/json/`) 
      const json = await resp.json()
      setResponse(json)
    }
  }, [query])

  React.useEffect(() => {
    if (response) {
      response.localidade && cidade.setValue(response.localidade)
      response.uf && estado.setValue(response.uf)
      response.logradouro && logradouro.setValue(response.logradouro)
    }
  }, [response])

  React.useEffect(() => {
    if (query !== undefined) {
      document.querySelector('#cidade').value = cidade.value
      document.querySelector('#estado').value = estado.value
      document.querySelector('#logradouro').value = logradouro.value
    }
  }, [cidade, estado, logradouro])



  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Fale Conosco</h1>

      <form onSubmit={handleSubmit}>
      <InputForm
          label="Nome"
          id="nome"
          placeholder="Digite o seu nome completo"
          required
          {...nome}
      />
      <InputForm
          label="E-mail"
          id="email"
          placeholder="seuemail@seuemail.com"
          required
          {...email}
      />
      <InputForm
          label="Idade"
          id="idade"
          placeholder="Digite sua idade"
          required
          {...idade}
      />
      <InputForm
          label="CPF"
          id="cpf"
          placeholder="000.000.000-00"
          required
          {...cpf}
      />
      <InputForm
          label="Celular"
          id="celular"
          placeholder="(00) 00000-0000"
          required
          {...celular}
      />
      <InputForm
          label="CEP"
          id="cep"
          placeholder="00.000-000"
          {...cep}
      />
      <InputForm
          label="Cidade"
          id="cidade"
          placeholder="Digite sua cidade"
          {...cidade}
          validate={response && ''}
          onBlur={response && ''}
 
      />
      <InputForm
          label="Estado"
          id="estado"
          placeholder="Digite seu estado. Ex: SP"
          {...estado}
          validate={response && ''}
          onBlur={response && ''}
      />
      <InputForm
          label="Logradouro"
          id="logradouro"
          placeholder="Digite seu endereço"
          {...logradouro}
          validate={response && ''}
          onBlur={response && ''}
          />
      <InputForm
          label="Número"
          id="numero"
          placeholder="* Caso exista"
      />
      <InputForm
          label="Complemento"
          id="complemento"
          placeholder="* Caso exista"
      />
        
      <label htmlFor="mensagem">Mensagem:<textarea id="mensagem"></textarea></label>

        

        <Button text="Enviar" type="submit"/>
        {/* <input type="submit"></input> */}
      </form>
    </main>
  )
}

export default FaleConosco