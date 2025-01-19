import clsx from 'clsx';
import { ComponentType, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export type ContainerProps = {
  children?: ReactNode;
  className?: string;
  component?: ComponentType | keyof HTMLElementTagNameMap;
};

export const Container: FC<ContainerProps> = (props) => {
  const { children, className, component: Component = 'div' } = props;

  return (
    <Component className={clsx(className, styles['container-root'])}>
      {children}
    </Component>
  );
};
