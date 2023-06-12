import { useState } from "react";
import TextInput from "../TextInput";
import Modal from "../util/Modal";
import { toast } from "react-toastify";
import { useAddBalanceToUserAccountMutation } from "../../feature/user/userApi";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  email: string;
}
const AddBalanceToUserAccountModal: React.FC<Props> = ({
  open,
  setOpen,
  email,
}) => {
  const [addBalanceToUserAccount, { isLoading, data }] =
    useAddBalanceToUserAccountMutation();
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState<any>({});
  const handleSubmit = async () => {
    try {
      if (!amount) {
        setErrors({
          amount: "Please enter some amount to add",
        });
      } else {
        setErrors({});
        const res: any = await addBalanceToUserAccount({
          amount,
          email,
        });
        if (res?.data?.success) {
          toast.success(res?.data?.message);
          setAmount("");
          setOpen(false);
        } else {
          const message = res?.error?.data?.message
            ? res?.error?.data?.message
            : res?.data?.message;
          toast.error(message);
        }
      }
    } catch (err) {}
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Add balance to user account">
      <h2 className="my-3">{email}</h2>
      <TextInput
        label="Amount"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        type="number"
        placeholder="Amount"
        containerClasses="mb-4"
        error={errors?.amount ? true : false}
        helperText={errors?.amount}
      />
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`btn btn-primary ${isLoading ? "loading" : ""}`}
        >
          Add
        </button>
      </div>
    </Modal>
  );
};

export default AddBalanceToUserAccountModal;
