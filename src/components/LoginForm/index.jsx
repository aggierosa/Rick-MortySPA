import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sparmapi } from "../../services/api";
import { toast } from "react-toastify";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { Link } from "react-router-dom";
import { Container } from "../../styles/container";
import { ButtonLink } from "../../styles/buttonLink.container";

const Login = ({ auth, setAuth }) => {
  const { handleUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
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
    sparmapi
      .post("/users/login", data)
      .then((response) => {
        const { accessToken } = response.data;

        localStorage.setItem("@sparm:token", JSON.stringify(accessToken));

        setAuth(true);

        handleUserInfo(response.data.user);

        toast.success("Login realizado");
        navigate(`/dashboard`);
      })

      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha inválidos!");
      });
  };

  return (
    <section>
      <Container onSubmit={handleSubmit(submitData)}>
        <h3>Bem vindo de volta</h3>
        <p>Faça seu login:</p>
        <label>Name</label>
        <input placeholder="Name" {...register("name")} />
        <label>Senha</label>
        <input placeholder="Senha" type="password" {...register("password")} />
        <ButtonLink>
          <button>Log in</button>
          <Link to="/register">Ainda não é parceiro? Registre aqui!</Link>
        </ButtonLink>
      </Container>
    </section>
  );
};

export default Login;
