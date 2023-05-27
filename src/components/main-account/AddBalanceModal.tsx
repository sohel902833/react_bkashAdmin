import { useState } from "react";
import { useAddBalanceToMainAccountMutation } from "../../feature/admin-transection/adminTransectionApi";
import TextInput from "../TextInput";
import Modal from "../util/Modal";
import { toast } from "react-toastify";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const AddBalanceModal: React.FC<Props> = ({ open, setOpen }) => {
  const [addBalanceToMainAccount, { isLoading, data }] =
    useAddBalanceToMainAccountMutation();
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
        const res: any = await addBalanceToMainAccount({
          amount: Number(amount),
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
    <Modal open={open} setOpen={setOpen} title="Add Balance">
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

export default AddBalanceModal;
