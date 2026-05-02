import { useState } from "react";
import { ContentSectionfirst } from "./ContentSectionfirst";
import { ContentSectionSecond } from "./ContentSectionSecond";
import { ContentBack } from "./ContentBack";
import { ContentSectionThird } from "./ContentSectionThird";

export const ContentSectionMain = () => {
  const [section, setSection] = useState<number>(1);
  const [email, setEmail] = useState('');
  const handleSection = (section: number) => setSection(section);
  const handleEmail = (email: string) => setEmail(email);
  return (
    <>
      <div className="flex flex-col  min-h-[350px]  justify-between">
        
        {section === 1 && <ContentSectionfirst handleSection={handleSection} />}
        {section === 2 && <ContentSectionSecond email={email} handleEmail={handleEmail} handleSection={handleSection} />}
        {section === 3 && <ContentSectionThird email={email} />}
        {section >1 && <ContentBack handleSection={handleSection} section={section}   />}
      </div>
    </>
  );
};
