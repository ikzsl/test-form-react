import React, { forwardRef, useState } from 'react';
import __ from 'lodash';
import classNames from 'classnames';

import styles from './CheckBox.module.scss';

export const CheckBox = forwardRef(function GeneralInput(
  { onChange, label, value, readOnly, name, defaultValue },
  ref
) {
  const id = __.uniqueId();
  const [isInputInFocus, setInputFocus] = useState(false);

  const onFocusHandler = () => {
    setInputFocus(true);
  };

  const handleBlur = (e) => {
    if (e.target.value.length === 0) {
      setInputFocus(false);
    }
  };

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          type='checkbox'
          onChange={onChange}
          onFocus={onFocusHandler}
          onBlur={(e) => {
            handleBlur(e);
          }}
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
    </>
  );
});
