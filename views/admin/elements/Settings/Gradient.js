import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import gradientParser from 'gradient-parser';
import useToggle from '../../../../utils/useToggle';

const Gradient = ({ data, setData }) => {
  const initialData = {
    type: 'linear-gradient',
    orientation: 'to bottom',
    color: 'rgba(255,255,255, 1)',
    nextColor: 'rgba(255,255,255, 1)',
    gradient: 'linear-gradient(to bottom, rgba(255,255,255, 1), rgba(255,255,255, 1))',
  };
  const [isOpen, setIsOpen] = useToggle(false);
  const [dataGradient, setDataGradient] = useState(initialData);
  const {
    type, orientation, color, nextColor,
  } = dataGradient;
  const { background } = data.text;

  const handleGradient = (newBg) => {
    setData({ data: { ...data, text: { ...data.text, background: newBg } } });
  };

  const setColors = () => {
    if (background && background.indexOf('gradient') !== -1) {
      const { colorStops, orientation: newOrient, type: newType } = gradientParser.parse(background)[0];
      const colorOne = colorStops[0].value;
      const colorTwo = colorStops[1].value;
      const newColor = `rgba(${colorOne[0]}, ${colorOne[1]}, ${colorOne[2]}, ${colorOne[3]})`;
      const newNextColor = `rgba(${colorTwo[0]}, ${colorTwo[1]}, ${colorTwo[2]}, ${colorTwo[3]})`;
      setDataGradient({
        ...dataGradient, color: newColor, nextColor: newNextColor, orientation: `to ${newOrient.value}`, type: newType,
      });
    }
  };

  useEffect(() => {
    setColors(background);
  }, [background]);

  const handleColor = (colors) => {
    const {
      r, g, b, a,
    } = colors.rgb;
    const newColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    const gradient = `${type}(${orientation}, ${newColor}, ${nextColor})`;
    handleGradient(gradient);
    setDataGradient({ ...dataGradient, color: newColor, gradient });
  };

  const handleNextColor = (colors) => {
    const {
      r, g, b, a,
    } = colors.rgb;

    const newNextColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    const gradient = `${type}(${orientation}, ${color}, ${newNextColor})`;
    handleGradient(gradient);
    setDataGradient({ ...dataGradient, nextColor: newNextColor, gradient });
  };

  const handleOrientation = (e) => {
    if (e.target.dataset.name) {
      const newOrient = e.target.dataset.name;
      const gradient = `${type}(${newOrient}, ${color}, ${nextColor})`;
      handleGradient(gradient);
      setDataGradient({ ...dataGradient, orientation: newOrient });
    }
  };

  const handleReverse = (e) => {
    e.stopPropagation();
    const gradient = `${type}(${orientation}, ${nextColor}, ${color})`;
    handleGradient(gradient);
  };

  return (
    <label className="adminSettingsGradient">
      <span>Цвет Фона:</span>
      <div className="pickerBox">
        <div className="colorBtn" onClick={() => setIsOpen()} style={{ background }} />
        {isOpen
            && (
            <div className="gradientBox">
              <div className="closeBox" onClick={(e) => { e.stopPropagation(); setIsOpen(); }} />
              <div className="gradientColorBox">
                <div>
                  <p>Направление:</p>
                  <ul onClick={handleOrientation}>
                    <div className="gradientBtn" style={{ background: orientation === 'to bottom' ? '#098B8C' : 'gray' }} data-name="to bottom">Вниз</div>
                    <div className="gradientBtn" style={{ background: orientation === 'to right' ? '#098B8C' : 'gray' }} data-name="to right">Вправо</div>
                    <div className="gradientBtn" style={{ background: orientation === 'to right bottom' ? '#098B8C' : 'gray' }} data-name="to right bottom">Под углом</div>
                    <div className="gradientBtn" style={{ background: '#098B8C' }} onClick={handleReverse}>Наоборот</div>
                  </ul>
                </div>
                <div className="gradientSmallBox">
                  <p>Цвет 1:</p>
                  <SketchPicker onChange={handleColor} color={color} />
                </div>
                <div className="gradientSmallBox">
                  <p>Цвет 2:</p>
                  <SketchPicker onChange={handleNextColor} color={nextColor} />
                </div>
              </div>
            </div>
            )}
      </div>
    </label>
  );
};

export default Gradient;
