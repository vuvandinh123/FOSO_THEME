import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function Container({ children, className }: Props) {
  return (
    <div className={`max-w-7xl md:px-0  relative mx-auto ${className}`}>
      {children}
    </div>
  );
}
