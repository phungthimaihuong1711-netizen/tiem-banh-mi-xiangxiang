import React from 'react';
import { X, ExternalLink, Download, Copy, Check } from 'lucide-react';

interface ImageViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(imageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
        {/* Controls Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-slate-200">
          <div className="text-sm font-semibold truncate max-w-md">{title}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs flex items-center gap-1.5 transition-colors"
              title="Sao chép liên kết ảnh"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">Chép link ảnh</span>
            </button>
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs flex items-center gap-1.5 transition-colors"
              title="Mở ảnh gốc trong tab mới"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Mở ảnh gốc</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 flex items-center justify-center shadow-2xl max-h-[80vh]">
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
