import { useEffect, useState } from 'react';

interface UseInput {
  (value?: string | undefined): {
    value: string | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    setValue: (value: string) => void;
  };
}

const useInput: UseInput = (value = undefined) => {
  const [_value, setValue] = useState<string | undefined>(undefined);

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
