import React from 'react';

export default ({ input, type, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      {touched && (
        <p className="red-text" style={{ margin: 0 }}>
          {error}
        </p>
      )}
      <input type={type} {...input} />
    </div>
  );
};
