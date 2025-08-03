"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          AI-Powered Peer Review Assistant
        </h2>
        <p className="text-muted-foreground">
          Upload a PDF to start your intelligent peer review
        </p>
      </div>

      <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
          id="pdf-upload"
        />
        <label
          htmlFor="pdf-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <Upload className="w-12 h-12 mb-4 text-muted-foreground" />
          <p className="text-lg font-medium mb-2">
            Drop your PDF here or click to upload
          </p>
          <p className="text-sm text-muted-foreground">
            Only PDF files are supported
          </p>
        </label>
        
        {file && (
          <div className="mt-4 p-4 bg-secondary rounded-md">
            <p className="text-sm">Selected: {file.name}</p>
          </div>
        )}
      </div>

      {file && (
        <div className="mt-6 text-center">
          <button
            onClick={() => window.location.href = `/review?file=${encodeURIComponent(file.name)}`}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Start Review
          </button>
        </div>
      )}
    </div>
  );
}
