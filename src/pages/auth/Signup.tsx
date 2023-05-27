import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import { useSignupMutation } from "../../feature/auth/authApi";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [signupAdmin, { isLoading, data }] = useSignupMutation();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [idNo, setIdNo] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [secretCode, setSecretCode] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const userScheme = Yup.object({
      firstName: Yup.string().required("Please enter your first name"),
      lastName: Yup.string().required("Please enter last name"),
      phone: Yup.string().required("Please enter account/phone number"),
      idNo: Yup.string().required("Please enter your nid no"),
      email: Yup.string()
        .required("Please enter your email")
        .email("Invalid email address"),
      birthdate: Yup.string().required("please enter your birthdate"),
      password: Yup.string().required("Please Enter Your Password"),
      secretCode: Yup.string().required("Please Enter Secret code"),
      confirmPassword: Yup.string()
        .required("Please Confirm Your Password")
        .oneOf([Yup.ref("password")], "Password Doesn't matched"),
    });
    userScheme
      .validate(
        {
          firstName,
          lastName,
          phone,
          idNo,
          email,
          birthdate,
          password,
          confirmPassword,
          secretCode,
        },
        { abortEarly: false }
      )
      .then(async (value: any) => {
        setErrors({});
        const user = {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          secret: secretCode,
          birthdate,
          idNo,
          phone,
        };
        const res: any = await signupAdmin(user);
        if (res?.data?.errors) {
          setErrors(res?.data?.errors);
          return;
        }
        if (res?.data.success) {
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
    if (!isLoading && data && data?.success) {
      navigate("/");
    }
  }, [isLoading, data]);

  return (
    <section className="h-full w-full flex justify-center items-center ">
      <div className="overflow-y-auto card bg-neutral shadow-lg w-[450px] p-4 h-screen  sm:mt-0 md:max-h-[80vh]">
        <h1 className="text-2xl font-semibold mb-4 mt-4">Signup</h1>

        <TextInput
          label="First name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          error={errors?.firstName ? true : false}
          helperText={errors?.firstName}
          type="text"
          placeholder="Jhone.."
          containerClasses="mb-3"
        />
        <TextInput
          label="Last name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          error={errors?.lastName ? true : false}
          helperText={errors?.lastName}
          type="text"
          placeholder="Last Name"
          containerClasses="mb-3"
        />

        <TextInput
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={errors?.email ? true : false}
          helperText={errors?.email}
          type="text"
          placeholder="boss@gmail.com"
          containerClasses="mb-3"
        />
        <TextInput
          label="Birthdate"
          onChange={(e) => setBirthdate(e.target.value)}
          value={birthdate}
          error={errors?.birthdate ? true : false}
          helperText={errors?.birthdate}
          type="date"
          placeholder="Birth date"
          containerClasses="mb-3"
        />
        <TextInput
          label="Nid no"
          onChange={(e) => setIdNo(e.target.value)}
          value={idNo}
          error={errors?.idNo ? true : false}
          helperText={errors?.idNo}
          type="number"
          placeholder="Nid no"
          containerClasses="mb-3"
        />
        <TextInput
          label="Phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          error={errors?.phone ? true : false}
          helperText={errors?.phone}
          type="text"
          placeholder="Phone number"
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
        <TextInput
          label="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          error={errors?.confirmPassword ? true : false}
          helperText={errors?.confirmPassword}
          type="password"
          placeholder="Confirm password"
          containerClasses="mb-4"
        />
        <TextInput
          label="Secret code"
          onChange={(e) => setSecretCode(e.target.value)}
          value={secretCode}
          error={errors?.secretCode ? true : false}
          helperText={errors?.secretCode}
          type="password"
          placeholder="Secret code"
          containerClasses="mb-4"
        />

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`btn btn-primary ${isLoading ? "loading" : ""}`}
        >
          Signup
        </button>
        <br />
      </div>
    </section>
  );
};

export default Signup;
