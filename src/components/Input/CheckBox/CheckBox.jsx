import React, { forwardRef, useState } from 'react';
import __ from 'lodash';
import classNames from 'classnames';

import styles from './CheckBox.module.scss';

export const CheckBox = forwardRef(function CheckBox(
  { onChange, label, value, readOnly, name, defaultValue },
  ref
) {
  const id = __.uniqueId();

  return (
    <div className={styles.inputWrapper}>
      <input
        id={id}
        type='checkbox'
        onChange={onChange}
        className={classNames(styles.input, styles.visuallyHidden)}
        value={value}
        readOnly={readOnly}
        name={name}
        ref={ref}
        defaultValue={defaultValue}
      />
      <label htmlFor={id} className={classNames(styles.label)}>
        {label}
      </label>
    </div>
  );
});
