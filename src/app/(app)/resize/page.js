"use client";

import { useState, useRef } from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import imageCompression from "browser-image-compression";

export default function ResizePage() {
  const [image, setImage] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [originalName, setOriginalName] = useState("");
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) return;

    setOriginalName(imageFile.name);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      setCompressedFile(compressedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = () => {
    if (!compressedFile) return;

    const url = URL.createObjectURL(compressedFile);
    const link = document.createElement("a");
    link.href = url;
    const nameWithoutExt = originalName.replace(/\.[^/.]+$/, "");
    const ext = originalName.split(".").pop();
    link.download = `${nameWithoutExt}_resized.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-white overflow-hidden h-screen w-full">
      <FlickeringGrid
        className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        flickerChance={0.1}
      />
      <Card className="relative z-10 w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-center">Picture Resizer</CardTitle>
          <CardDescription className="text-center">
            Lower your image size without losing quality. Perfect for sharing on
            social media or saving storage space.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <ShimmerButton onClick={handleButtonClick} className="w-full">
            Choose File
          </ShimmerButton>
          {image && (
            <div className="mt-4 space-y-4">
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-auto rounded-md"
              />
              <ShimmerButton onClick={handleDownload} className="w-full">
                Download Resized Image
              </ShimmerButton>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
