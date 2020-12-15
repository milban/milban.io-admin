import { useEffect, useState } from 'react';

interface UseInput {
  (value?: string): {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    setValue: (value: string) => void;
  };
}

const useInput: UseInput = (value = '') => {
  const [_value, setValue] = useState<string>('');

  const _setValue = (value: string) => {
    setValue(value);
  };

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    _setValue(value);
  }, [value]);

  return { value: _value, onChange, setValue: _setValue };
};

export default useInput;
