import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { Link } from "react-router-dom";

const Login = () => {
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
    api
      .post("/users/login", data)
      .then((response) => {
        const { accessToken } = response.data;

        localStorage.setItem("@sparm:token", JSON.stringify(accessToken));

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
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit(submitData)}>
            <h4>Bem vindo de volta</h4>
            <p>Faça seu login:</p>
            <input placeholder="Name" {...register("name")} />
            <label>Name</label>
            <input
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            <label>Senha</label>
            <button disabled={!isValid}>Log in</button>
            <Link to="/register">Ainda não é parceiro? Registre aqui!</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
