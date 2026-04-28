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

  const handleSubmit = () => {
    if (!pdf) return;
    // Handle file submission logic here
    console.log("Submitting file:", pdf);
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center gap-2">
      <div>
        <Input
          className="cursor-pointer p-2 w-[300px] h-10"
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
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};
