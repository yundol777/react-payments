import { useLayoutEffect, useRef } from 'react';

function getFormattedCursorPosition(
  formattedValue: string,
  numberIndex: number,
) {
  if (numberIndex <= 0) {
    return 0;
  }

  let digitCount = 0;

  for (let index = 0; index < formattedValue.length; index += 1) {
    if (/\d/.test(formattedValue[index])) {
      digitCount += 1;
    }

    if (digitCount === numberIndex) {
      return index + 1;
    }
  }

  return formattedValue.length;
}

export default function useFormattedInputCursor(formattedValue: string) {
  const inputRef = useRef<HTMLInputElement>(null);
  const nextCursorNumberIndex = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (nextCursorNumberIndex.current === null) {
      return;
    }

    const cursorPosition = getFormattedCursorPosition(
      formattedValue,
      nextCursorNumberIndex.current,
    );

    inputRef.current?.setSelectionRange(cursorPosition, cursorPosition);
    nextCursorNumberIndex.current = null;
  }, [formattedValue]);

  function rememberCursorPosition(
    inputValue: string,
    cursorPosition: number | null,
  ) {
    const nextCursorPosition = cursorPosition ?? inputValue.length;

    nextCursorNumberIndex.current = inputValue
      .slice(0, nextCursorPosition)
      .replace(/\s/g, '').length;
  }

  return { inputRef, rememberCursorPosition };
}
