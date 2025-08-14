
"use client";

import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

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

  const handleView = () => {
    if (typeof window !== 'undefined') {
        window.open(resumeUrl, '_blank');
    }
  }

  return (
    <div className="flex-1 bg-background">
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-headline font-bold text-center mb-8">My Resume</h1>
        <div className="relative flex flex-col items-center justify-center w-full h-[60vh] md:h-[70vh] border rounded-lg overflow-hidden shadow-lg bg-card p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Resume Preview</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
                Your resume is ready to be viewed. Click the button below to open it in a new tab, or download it directly to your device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleView} size="lg">
                    <ExternalLink className="mr-2 h-5 w-5" /> View in New Tab
                </Button>
                <Button onClick={handleDownload} size="lg" variant="secondary">
                    <Download className="mr-2 h-5 w-5" /> Download Resume
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
