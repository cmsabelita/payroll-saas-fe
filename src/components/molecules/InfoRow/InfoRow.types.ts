export interface InfoRowProps {
  label: string;
  value: string | number | React.ReactNode;
  /** Fixed width for label column (e.g. "w-32") */
  labelClassName?: string;
  className?: string;
}
