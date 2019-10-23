import React from 'react';

const Checkbox = ({ data, setData, label }) => {
  const handlePublic = (e) => {
    const { checked } = e.target;
    setData(checked);
  };

  return (
    <label className="adminArticleSettingsCheckbox">
      <span>
        {label}
:
      </span>
      <input type="checkbox" onChange={handlePublic} defaultChecked={data} />
    </label>
  );
};

export default Checkbox;
