import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLParagraphElement
  > {
  variant: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}
