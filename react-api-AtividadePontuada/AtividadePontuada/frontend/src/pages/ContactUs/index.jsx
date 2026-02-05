import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

// 🧩 Schema de validação dos campos
const validationSchema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  telefone: yup
    .string()
    .required('O telefone é obrigatório')
    .matches(/^[0-9()\-.\s]+$/, 'Digite um telefone válido'),
  mensagem: yup.string().required('A mensagem é obrigatória'),
});

function ContactUs() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  // 📨 Envio do formulário
  const onSubmit = async (data) => {
    try {
      await api.post('/api/contatos', data);

      toast.success('Mensagem enviada com sucesso! ✅');
      reset();
      navigate('/'); // redireciona para a Home ou outra rota
    } catch (error) {
      console.error('Erro no envio:', error);
      toast.error('Erro ao enviar mensagem. 😥');
    }
  };

  return (
    <div className="contact-container">
      <h1>Fale Conosco</h1>
      <p className="lead">
        Envie sua dúvida, sugestão ou solicitação. Nossa equipe da Farmácia Popular terá prazer em responder o mais rápido possível.
      </p>

      <form className="form-contact" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            {...register('nome')}
            className={errors.nome ? 'input-error' : ''}
          />
          {errors.nome && <p className="error-message">{errors.nome.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            {...register('telefone')}
            className={errors.telefone ? 'input-error' : ''}
          />
          {errors.telefone && <p className="error-message">{errors.telefone.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            rows="5"
            {...register('mensagem')}
            className={errors.mensagem ? 'input-error' : ''}
          ></textarea>
          {errors.mensagem && <p className="error-message">{errors.mensagem.message}</p>}
        </div>

        <button type="submit" className="btn-submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default ContactUs;