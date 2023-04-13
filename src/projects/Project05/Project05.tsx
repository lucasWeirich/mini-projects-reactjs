import { FormEvent, useState } from 'react';
import { ProjectsProps } from '../../@types/projects.types';
import usePageTitle from '../../hook/usePageTitle';
import TemplateDefault from '../../templates/Default.template';
import Input from './Input/Input';
import * as CSS from './Poject05.styles'
import ButtonDefault from '../../assets/css/ButtonDefault';

interface dataFormProps {
  name: string,
  email: string,
  password: string
}

export default function Project05({ title }: ProjectsProps) {

  usePageTitle('Form Input Wave');

  const resetDataForm = { name: '', email: '', password: '' };
  const [dataForm, setDataForm] = useState<dataFormProps>(resetDataForm);
  const [messageError, setMessageError] = useState('');

  function handleChangeInputs(e: React.ChangeEvent<HTMLInputElement>) {
    setMessageError('');

    setDataForm(prev => {
      const { name, value } = e.target;
      const newData = {
        ...prev,
        [name]: value
      }
      return newData;
    })
  }

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();
    let auxValidate = true;
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (dataForm['name'].length < 10) {
      auxValidate = false
      setMessageError('Nome precisa ter mais de 10 caractere')
    } else if (!(regexEmail.test(dataForm.email))) {
      auxValidate = false;
      setMessageError('Informe e-mail valido')
    } else if (dataForm['password'].length < 5) {
      auxValidate = false
      setMessageError('Senha precisa ter mais de 5 caractere')
    }

    if (auxValidate)
      alert(JSON.stringify(dataForm));
  }

  return <TemplateDefault title={title}>
    <CSS.Wrapper>
      <CSS.Form onSubmit={handleSubmitForm}>
        <CSS.Title>Please Login</CSS.Title>

        {
          messageError &&
          <CSS.Error>{messageError}</CSS.Error>
        }

        <div style={{ width: '100%' }}>
          <Input
            label='Name'
            name='name'
            value={dataForm.name}
            onChange={handleChangeInputs}
          />
          <Input
            label='E-mail'
            name='email'
            type="email"
            value={dataForm.email}
            onChange={handleChangeInputs}
          />
          <Input
            label='Password'
            name='password'
            type='password'
            value={dataForm.password}
            onChange={handleChangeInputs}
          />
        </div>

        <ButtonDefault>Submit</ButtonDefault>
      </CSS.Form>
    </CSS.Wrapper>
  </TemplateDefault>
}