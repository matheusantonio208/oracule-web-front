import Prism from 'prismjs';
import React, { useEffect, useRef } from 'react';

export const PrismCode = (props) => {
  const ref = useRef();

  const highlight = () => {
    if (ref && ref.current) {
      Prism.highlightElement(ref.current);
    }
  };

  useEffect(() => {
    highlight();
  }, []);

  const { code, language } = props;
  return (
    <React.Fragment>
      <pre className="line-numbers">
        <code ref={ref} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </React.Fragment>
  );
};
