import { FieldHookConfig, useField } from 'formik';

type Props = {
  [x: string]: any;
  label: string;
};

const TextInput: React.FC<Props> = ({ label, ...rest }) => {
  const [field, meta] = useField(rest as FieldHookConfig<any>);

  return (
    <div className='form-row'>
      <label htmlFor={rest.id!}>{label}</label>
      <input className='text-input' {...field} {...rest} />
      {meta.touched && meta.error?.length! > 0 ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
