'use client';

import { ChangeEventHandler, useCallback, useState } from 'react';

type UseInputReturn = [value: string, onChange: ChangeEventHandler<HTMLInputElement>];

export const useInput = (initialValue: string): UseInputReturn => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);

  return [value, onChange];
};
