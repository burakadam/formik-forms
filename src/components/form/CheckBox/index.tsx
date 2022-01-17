import { FieldHookConfig, useField } from 'formik';

type Props = {
  [x: string]: any;
  name: string;
};

const Checkbox: React.FC<Props> = ({ name, children, ...rest }) => {
  const [field, meta] = useField({
    ...(rest as FieldHookConfig<any>),
    type: 'checkbox',
  });
  return (
    <div className='form-row'>
      <label className='checkbox-input'>
        <input type='checkbox' {...field} {...rest} />
        {children}
      </label>
      {meta.touched && meta.error?.length! > 0 ? (
        <p className='error'>{meta.error}</p>
      ) : null}
    </div>
  );
};

export default Checkbox;
