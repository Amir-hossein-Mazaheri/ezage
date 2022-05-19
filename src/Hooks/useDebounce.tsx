import { debounce } from "lodash";
import { useCallback, useEffect, useMemo } from "react";

interface UseDebounceOptions {
  delay?: number;
}

type UseDebounce = (
  callback: (...args: unknown[]) => unknown,
  dependencies: unknown[],
  options?: UseDebounceOptions
) => unknown;

const useDebounce: UseDebounce = (callback, dependencies, options) => {
  const memoizedCallback = useCallback(callback, [...dependencies, callback]);

  const debouncedCallback = useMemo(
    () => debounce(memoizedCallback, "delay" in options ? options.delay : 500),
    [memoizedCallback, options]
  );

  useEffect(() => {
    debouncedCallback();

    return () => {
      debouncedCallback.cancel();
    };
  }, [debouncedCallback]);

  return [debouncedCallback, memoizedCallback];
};

export default useDebounce;
