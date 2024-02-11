'use client';

import { ChangeEventHandler, useCallback, useState } from 'react';

type UseInputReturn = [value: string, onChange: ChangeEventHandler<HTMLTextAreaElement>];

export const useTextarea = (initialValue: string): UseInputReturn => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value), []);

  return [value, onChange];
};
