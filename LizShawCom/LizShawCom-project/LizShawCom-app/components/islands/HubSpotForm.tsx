import React, { useEffect } from 'react';

interface Props {
  /** ID of the element used in the target selector */
  targetId: string;
  /** Form ID in HubSpot */
  formId: string;
  /** Form ID in HubSpot */
  portalId: string;
}

const HubSpotForm = ({ formId, portalId, targetId }: Props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId, // 2068068
          formId, //c8c5c76b-cba2-4435-a7f5-161828626576'
          target: `#${targetId}`,
        });
      }
    });
  }, []);
  return <div id={targetId} />;
};

export default HubSpotForm;
