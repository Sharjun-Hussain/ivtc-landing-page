"use client";

import React, { useState } from "react";
import { PlayCircle, Image as ImageIcon } from "lucide-react";

export default function CourseMediaGallery({ media = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!media || media.length === 0) {
    return (
      <div className="w-full aspect-video bg-slate-100 dark:bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-slate-200 dark:border-white/10">
        <ImageIcon className="text-slate-300 dark:text-slate-600" size={48} />
      </div>
    );
  }

  const activeMedia = media[activeIndex];

  return (
    <div className="space-y-4">
      {/* Main Viewer */}
      <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-900 border-4 border-white dark:border-white/5 shadow-2xl">
        {activeMedia.type === "video" ? (
          <iframe
            src={activeMedia.url}
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img
            src={activeMedia.url}
            alt="Course media"
            className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
          />
        )}
      </div>

      {/* Thumbnail Selector */}
      {media.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
          {media.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative flex-shrink-0 w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer snap-center ${
                activeIndex === idx
                  ? "border-blue-500 opacity-100 scale-105"
                  : "border-transparent opacity-60 hover:opacity-100 dark:border-white/10"
              }`}
            >
              {item.type === "video" ? (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                  <PlayCircle className="text-white opacity-50" size={24} />
                </div>
              ) : (
                <img src={item.url} className="w-full h-full object-cover" alt="thumbnail" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
