import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './GeneralButton.module.scss';

export const GeneralButton = forwardRef(
  (
    {
      onClick,
      color = 'blue',
      type = 'button',
      isDisabled = false,
      variant = 'contained',
      children,
      className,
      icon,
      width = 'full',
    },
    ref
  ) => {

    return (
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={classNames(
          styles.generalButton,
          {
            [styles[color]]: color,
            [styles[variant]]: variant,
            [styles.disabled]: isDisabled,
            [styles.withIcon]: icon,
            [styles[`width-${width}`]]: width,
          },
          className
        )}
        type={type}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

GeneralButton.displayName = 'GeneralButton';
