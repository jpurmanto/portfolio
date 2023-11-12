"use client";

interface Props {
  fields: FormField[];
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function FormFields({ fields, formData, setFormData }: Props) {
  return fields.map((fieldItem) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {fieldItem.label}
      </label>
      <input
        placeholder={fieldItem.placeholder}
        type={fieldItem.type}
        name={fieldItem.name}
        id={fieldItem.name}
        value={formData[fieldItem.name]}
        onChange={(e) => {
          setFormData({
            ...formData,
            [fieldItem.name]: e.target.value,
          });
        }}
        className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
      />
    </div>
  ));
}
