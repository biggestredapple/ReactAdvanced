import { forwardRef, ReactNode } from "react";

interface Props {
  label: string,
  otherProps?: ReactNode
}

const MyInput = forwardRef<HTMLInputElement, Props>(function MyInput(props, ref) {
  //@ts-ignore
  const { label, ...otherProps } = props;

  return (
    <label className="flex justify-around item-cetner text-center py-2">
      {label}
      <input className="ml-4 border" {...otherProps} ref={ref} />
    </label>
  )
});

export default MyInput;