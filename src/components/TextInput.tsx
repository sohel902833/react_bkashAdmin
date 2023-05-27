interface Props {
  value: string;
  onChange: (e: any) => void;
  error?: boolean;
  helperText?: string;
  label: string;
  type: string;
  placeholder: string;
  containerClasses?: string;
}
const TextInput: React.FC<Props> = ({
  value,
  onChange,
  error,
  helperText,
  label,
  type = "text",
  placeholder = "",
  containerClasses = "",
}) => {
  return (
    <div className={`form-control w-full ${containerClasses}`}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full "
        value={value}
        onChange={onChange}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{helperText}</span>
        </label>
      )}
    </div>
  );
};

export default TextInput;
