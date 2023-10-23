"use client";

import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

export default function DefaultStickyBanner() {
  return (
    <Banner>
      <div className="sticky top-18 left-0 z-50 flex justify-between w-full p-4 shadow-md bg-blue-400 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-white dark:text-gray-400">
            <MdAnnouncement />
            <span>Try clicking a photo and turn sound on!</span>
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent px-0"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
