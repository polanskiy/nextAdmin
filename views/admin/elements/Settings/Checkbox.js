import React from 'react';

const Checkbox = ({
  data, setData, label, part,
}) => {
  const handlePublic = (e) => {
    const { checked } = e.target;
    setData(checked);
  };
  console.log('data', data);
  let isChecked = data;
  if (isChecked !== true && data !== false) {
    if (data === 'repeat') {
      isChecked = true;
    } else {
      isChecked = false;
    }
  }
  console.log('isChecked', isChecked);
  return (
    <div className="adminSettingSmall" style={{ display: part ? 'flex' : 'block' }}>
      <p className={part ? 'adminSettingCheckbox' : 'adminElTitle'}>
        {label}
        :
      </p>
      <div className="adminElBody">
        <input type="checkbox" onChange={handlePublic} defaultChecked={isChecked} />
      </div>
    </div>
  );
};

export default Checkbox;
