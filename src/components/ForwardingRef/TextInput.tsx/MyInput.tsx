import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";

interface Props {
  label: string,
  otherProps?: ReactNode
}

const MyInput = forwardRef<HTMLInputElement, Props>(function MyInput(props, ref) {

  const inputRef = useRef<HTMLInputElement>(null)

  //@ts-ignore
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus()
      },
      scrollIntoView() {
        inputRef.current?.scrollIntoView()
      }
    }
  }, []);

  //@ts-ignore
  const { label, ...otherProps } = props;

  return (
    <label className="flex justify-around item-cetner text-center py-2">
      {label}
      <input className="ml-4 border" {...otherProps} ref={inputRef} />
    </label>
  )
});

export default MyInput;