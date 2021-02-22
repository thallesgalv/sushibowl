import React from 'react'


const validation = {
  nome: {
    regexp: /^([^0-9]*)$/,
    message: 'O campo nome não aceita números'
  },
  email: {
    regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Digte um e-mail válido",
  },
  idade: {
    regexp: /^(?:1[01][0-9]|120|1[8-9]|[2-9][0-9])$/,
    message: "O campo idade só aceita números entre 18 e 120",
  },
  cpf: {
    regexp: /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
    message: 'Digite um CPF válido'
  },
  celular: {
    regexp: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
    message: 'Digite um celular no formato (00) 000000000'
  },
  cep: {
    regexp: /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/,
    message: 'Digite um CEP válido'
  },
  estado: {
    regexp: /^(ac|AC|al|AL|am|AM|ap|AP|ba|BA|ce|CE|df|DF|es|ES|go|GO|ma|MA|mg|MG|ms|MS|mt|MT|pa|PA|pb|PB|pe|PE|pi|PI|pr|PR|rj|RJ|rn|RN|ro|RO|rr|RR|rs|RS|sc|SC|se|SE|sp|SP|to|TO)$/,
    message: 'O campo estado só aceita siglas de duas letras'
  },
}

const useValidateInput = (inputType) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);


  function validate(value) {
    if (value.length === 0) {
      setError('Por favor, preencha um valor.')
    }
    
    else if (!validation[inputType].regexp.test(value)) {
      setError(validation[inputType] && validation[inputType].message)
      return false
    }
    else if (inputType == 'cpf') {
      validateCPF(value) ? setError(null) : setError(validation[inputType] && validation[inputType].message)
      return false
    }
    else {
      setError(null)
      return true
    }
  }
  
  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  function validateCPF(cpf) {
    const check = [...cpf.slice(0, -2)].map((item, index) => +item * (10 - index)).reduce((acc, current) => acc + current) * 10 % 11
    
    if (check === 10 || check === 11 || check === +cpf[9]) {
      const secondCheck = [...cpf.slice(0, -1)].map((item, index) => +item * (11 - index)).reduce((acc, current) => acc + current) * 10 % 11
      
      if(secondCheck === +cpf[10]) return true
    }
    
    return false
  }
  
  return {
    value,
    error,
    setValue,
    validate,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useValidateInput