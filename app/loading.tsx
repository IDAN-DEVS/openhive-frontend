import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-6 border-t-primary" />
    </div>
  );
}
