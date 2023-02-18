import React, { useRef, useEffect } from 'react';

const ScrollToBottom = ({ children }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [children]);

  return (
    <div>
      {children}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ScrollToBottom;