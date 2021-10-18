export default function TextInput({
  labelDescripition = 'Descrição do Label:',
  inputValue = 'Valor do Input',
  onInputChange = null,
  id = 'id_do_input_text',
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescripition}
      </label>
      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}