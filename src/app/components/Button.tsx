import { tv, VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  base: "px-8 py-4 text-xl rounded-md flex-1 max-w-56 flex justify-center items-center ease-in-out duration-200",
  variants: {
    role: {
      primary:
        "bg-emerald-800 text-white hover:bg-emerald-900 transition-colors",
      secondary:
        "bg-transparent text-emerald-800 outline outline-transparent hover:outline-emerald-800 transition-all",
    },
  },
});

type ButtonVariants = VariantProps<typeof buttonStyles>;

export interface ButtonProps
  extends Omit<ButtonVariants, "role">,
    Required<Pick<ButtonVariants, "role">> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button className={buttonStyles(props)}>{children}</button>;
}
