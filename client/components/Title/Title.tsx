import { TitleProps } from './Title.props';

export const Title = ({ variant, children }: TitleProps): JSX.Element => {
  switch (variant) {
    case 'h1':
      return (
        <h1 className="text-2xl font-black leading-normal text-neutral-800">
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className="text-2xl font-black leading-normal text-neutral-800">
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="text-normal font-black text-neutral-800">{children}</h3>
      );
    default:
      return <>{children}</>;
  }
};
