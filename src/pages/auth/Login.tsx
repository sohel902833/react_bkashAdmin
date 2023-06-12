import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../feature/auth/authApi";
const Login = () => {
  const [loginAdmin, { isLoading, data }] = useLoginMutation();
  const [email, setEmail] = useState<string>("admin@gmail.com");
  const [password, setPassword] = useState<string>("244739");
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const userScheme = Yup.object({
      email: Yup.string().required("Please enter your email or phone"),
      password: Yup.string().required("Please Enter Your Password"),
    });
    userScheme
      .validate(
        {
          email,
          password,
        },
        { abortEarly: false }
      )
      .then(async (value: any) => {
        setErrors({});
        const user = {
          email,
          password,
        };
        const res: any = await loginAdmin(user);
        if (res?.data?.errors) {
          setErrors(res?.data?.errors);
          return;
        }
        if (res?.data.token) {
          toast.success(res?.data?.message);
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((err: any) => {
        let newError: any = {};
        err.inner?.forEach((item: any) => {
          newError[item.path] = item.message;
        });
        setErrors(newError);
      });
  };

  useEffect(() => {
    console.log("Chage", data);
    if (!isLoading && data && data?.token) {
      console.log("Navigate", data);
      navigate("/");
    }
  }, [isLoading, data]);

  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="card bg-bgprimary shadow-lg w-[450px] p-4 ">
        <h1 className="text-2xl font-semibold mb-4 mt-4">Login</h1>

        <TextInput
          label="Email or phone number"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={errors?.email ? true : false}
          helperText={errors?.email}
          type="text"
          placeholder="boss@gmail.com"
          containerClasses="mb-3"
        />
        <TextInput
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          error={errors?.password ? true : false}
          helperText={errors?.password}
          type="password"
          placeholder="Password"
          containerClasses="mb-4"
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`btn btn-primary ${isLoading ? "loading" : ""}`}
        >
          Login
        </button>
        <br />
      </div>
    </section>
  );
};

export default Login;
