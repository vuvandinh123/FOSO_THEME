"use client";
import React, { useState } from "react";

const reactions = [
  { id: 1, label: "Hữu ích", emoji: "👍", color: "border-green-500", count: 1 },
  {
    id: 2,
    label: "Yêu thích",
    emoji: "💚",
    color: "border-green-400",
    count: 2,
  },
  { id: 3, label: "Thú vị", emoji: "🤩", color: "border-purple-500", count: 0 },
  {
    id: 4,
    label: "Bất ngờ",
    emoji: "😲",
    color: "border-yellow-500",
    count: 1,
  },
  {
    id: 5,
    label: "Nhàm chán",
    emoji: "🤦",
    color: "border-gray-400",
    count: 0,
  },
  { id: 6, label: "Tức giận", emoji: "😡", color: "border-red-500", count: 0 },
];

const FeedbackReaction: React.FC = () => {
  const [selectedReaction, setSelectedReaction] = useState<number | null>(null);

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg text-center">
      <h3 className="text-lg font-semibold text-gray-800">
        Bạn thấy bài viết như thế nào?
      </h3>
      <p className="text-gray-500 text-sm mt-1">
        {reactions.reduce((sum, r) => sum + r.count, 0)} phản hồi
      </p>

      <div className="flex flex-wrap justify-center md:justify-between items-center mt-4 gap-3">
        {reactions.map((reaction) => (
          <button
            key={reaction.id}
            onClick={() => setSelectedReaction(reaction.id)}
            className={`flex flex-col items-center px-3 py-2 rounded-lg  ${
              selectedReaction === reaction.id
                ? reaction.color + " border-2"
                : "border-gray-300"
            } transition-all`}
          >
            <span className="text-2xl">{reaction.emoji}</span>
            <span className="text-sm font-semibold text-gray-800">
              {reaction.count}
            </span>
            <span className="text-xs text-gray-500">{reaction.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackReaction;
