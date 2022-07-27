import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sparmapi } from "../../services/api";
import { Container } from "../../styles/container";
import { ButtonLink } from "../../styles/buttonLink.container";

const Register = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const submitData = (data) => {
    delete data.password_confirm;
    const newData = {
      ...data,
    };
    sparmapi
      .post("/users", newData)
      .then((response) => {
        toast.success("Registrado com sucesso!");
        navigate("/");
      })

      .catch((_) => {
        toast.error("Ops, algo deu errado!");
      });
  };

  return (
    <section>
      <Container onSubmit={handleSubmit(submitData)}>
        <h3>Faça seu cadastro</h3>
        <label>Nome</label>
        <input placeholder="Nome" {...register("name")} />
        <label>Senha</label>
        <input placeholder="Senha" type="password" {...register("password")} />
        <label>Confirmar Senha:</label>
        <input
          placeholder="Confirmar Senha"
          type="password"
          {...register("password_confirm")}
        />

        <ButtonLink>
          <button disabled={!isValid}>Registrar</button>
          <Link to="/">Já tem uma conta? Entre aqui</Link>
        </ButtonLink>
      </Container>
    </section>
  );
};

export default Register;
