"use client";
import { Input } from "../../src/components/ui/input";
import { Button } from "../../src/components/ui/button";
import { useRef, useState } from "react";
export const DashBoard = () => {
  const fileRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const DesktopClick = () => {
    fileRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPdf(file);
    //
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <Input
          className="h-30"
          placeholder="Enter text..."
          value={pdf ? pdf.name : ""}
          onClick={DesktopClick}
          readOnly
        />
        <input
          ref={fileRef}
          onChange={handleFileChange}
          type="file"
          accept={".pdf, .docx"}
          className="hidden"
        />
      </div>
      <div>
        <Button>submit</Button>
      </div>
    </div>
  );
};
