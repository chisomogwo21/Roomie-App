import { MessageSquare } from "lucide-react";

interface EmptyStateProps {
  onCreatePost: () => void;
}

export function EmptyState({ onCreatePost }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <div className="w-[80px] h-[80px] bg-[#fef3f2] rounded-full flex items-center justify-center mb-4">
        <MessageSquare className="w-[40px] h-[40px] text-[#fe456a]" />
      </div>
      <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#1f2a37] leading-[24px] mb-2 text-center">
        No posts yet
      </h3>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9da4ae] leading-[20px] mb-6 text-center max-w-[280px]">
        Be the first to start the conversation.
      </p>
      <button
        onClick={onCreatePost}
        className="bg-[#fe456a] text-white px-6 py-3 rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] hover:bg-[#e63d5f] transition-colors"
      >
        Create First Post
      </button>
    </div>
  );
}
