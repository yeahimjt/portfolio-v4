import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  contact: string;
  description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  contact,
  description,
}) => (
  <div>
    <h1>{fullName} has sent you an email!</h1>
    <p>They ask that they contact you at: {contact}</p>
    <p>They wanted to let you know: {description}</p>
  </div>
);
