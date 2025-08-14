
"use client";

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ResumeViewerProps {
    resumeUrl: string;
    fileName: string;
}

export function ResumeViewer({ resumeUrl, fileName }: ResumeViewerProps) {
  const handleDownload = () => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex-1 bg-background">
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-headline font-bold text-center mb-8">My Resume</h1>
        <div className="relative w-full h-[80vh] md:h-[100vh] border rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`${resumeUrl}#toolbar=0`}
            title="Resume"
            width="100%"
            height="100%"
            className="border-0"
          />
        </div>
        <div className="flex justify-center mt-8">
          <Button onClick={handleDownload} size="lg">
            <Download className="mr-2 h-5 w-5" /> Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
