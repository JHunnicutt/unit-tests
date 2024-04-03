import { tv, VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  variants: {
    role: {
      primary: "bg-blue-500",
      secondary: "bg-gray-500",
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
