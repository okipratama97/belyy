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

export default function ResizePage() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
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
            onChange={handleUpload}
            className="hidden"
          />
          <ShimmerButton onClick={handleButtonClick} className="w-full">
            Choose File
          </ShimmerButton>
          {image && (
            <div className="mt-4">
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
