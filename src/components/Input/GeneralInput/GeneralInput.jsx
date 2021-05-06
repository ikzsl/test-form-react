import React, { forwardRef, useState } from 'react';
import __ from 'lodash';
import classNames from 'classnames';

import styles from './GeneralInput.module.scss';

export const GeneralInput = forwardRef(function GeneralInput(
  {
    onChange,
    label,
    type = 'text',
    value,
    marginBottom = 'default',
    width = 'auto',
    name,
    isValue,
    withDefaultValue,
    defaultValue,
    autoComplete,
    onFilled,
  },
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

  const onAnimationStart = (e) => {
    const isAutoFilled = e.animationName === styles.onAutoFillStart;
    if (isAutoFilled) {
      setInputFocus(true);
      onFilled && onFilled();
    }
  };

  return (
    <div
      className={classNames(
        styles.generalInput,
        { [styles[`marginBottom-${marginBottom}`]]: marginBottom },
        { [styles[`width-${width}`]]: width }
      )}
    >
      <label
        htmlFor={id}
        className={classNames(styles.label, {
          [styles.labelTop]: Boolean(isInputInFocus || value || isValue || withDefaultValue),
        })}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          type={type}
          onChange={onChange}
          onFocus={onFocusHandler}
          onBlur={(e) => {
            handleBlur(e);
          }}
          className={classNames(styles.input)}
          value={value}
          name={name}
          ref={ref}
          defaultValue={defaultValue}
          onAnimationStart={onAnimationStart}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
});
