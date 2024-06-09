import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary" />
    </div>
  );
}
