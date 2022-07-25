import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

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
    api
      .post("/users", newData)
      .then((response) => {
        toast.success("Registrado com sucesso!");
        navigate("/users/login");
      })

      .catch((_) => {
        toast.error("Ops, algo deu errado!");
      });
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit(submitData)}>
            <p>Faça seu cadastro</p>
            <input placeholder="Nome" {...register("name")} />
            <label>Nome</label>
            <input
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            <label>Senha</label>
            <input
              placeholder="Confirmar Senha"
              type="password"
              {...register("password_confirm")}
            />
            <label>Confirmar Senha:</label>
            <button disabled={!isValid}>Log in</button>
            <Link to="/users/login">Já tem uma conta? Entre aqui</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
