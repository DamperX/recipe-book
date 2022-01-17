import { TitleProps } from './Title.props';
import cn from 'classnames';

export const Title = ({
  variant,
  children,
  className,
  ...props
}: TitleProps): JSX.Element => {
  switch (variant) {
    case 'h1':
      return (
        <h1
          {...props}
          className={cn(
            'text-2xl',
            'font-black',
            'leading-normal',
            'text-neutral-800',
            className
          )}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          {...props}
          className={cn(
            'text-2xl',
            'font-black',
            'leading-normal',
            'text-neutral-800',
            className
          )}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          {...props}
          className={cn(
            'text-normal',
            'font-black',
            'text-neutral-800',
            className
          )}
        >
          {children}
        </h3>
      );
    default:
      return <>{children}</>;
  }
};
