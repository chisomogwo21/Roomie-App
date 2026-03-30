import { Heart, MessageCircle, Bookmark, MapPin, Send } from "lucide-react";
import { useState } from "react";

interface Comment {
  id: string;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: string;
}

interface PostCardProps {
  id: string;
  userName: string;
  userAvatar: string;
  location: string;
  timestamp: string;
  text: string;
  tags?: string[];
  matchScore?: "high" | "medium" | null;
}

export function PostCard({
  userName,
  userAvatar,
  location,
  timestamp,
  text,
  tags = [],
  matchScore = null,
}: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      userName: "You",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      text: newComment,
      timestamp: "Just now",
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  const getMatchBadge = () => {
    if (matchScore === "high") {
      return {
        text: "High Match 🔥",
        bgColor: "bg-[#fef3f2]",
        textColor: "text-[#fe456a]",
        borderColor: "border-[#fecdd3]",
      };
    }
    if (matchScore === "medium") {
      return {
        text: "Good Match ✨",
        bgColor: "bg-[#fffaeb]",
        textColor: "text-[#f59e0b]",
        borderColor: "border-[#fde68a]",
      };
    }
    return null;
  };

  const matchBadge = getMatchBadge();

  return (
    <div className="bg-white rounded-[12px] p-4 border border-[#e5e7eb] shadow-sm relative">
      {/* Match Badge */}
      {matchBadge && (
        <div
          className={`absolute top-3 right-3 ${matchBadge.bgColor} ${matchBadge.textColor} px-[10px] py-[4px] rounded-[16px] border ${matchBadge.borderColor} font-['Inter:Semi_Bold',sans-serif] font-semibold text-[10px] leading-[14px]`}
        >
          {matchBadge.text}
        </div>
      )}

      {/* User Info */}
      <div className="flex items-start gap-3 mb-3">
        <img
          src={userAvatar}
          alt={userName}
          className="w-[44px] h-[44px] rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#1f2a37] leading-[18px]">
            {userName}
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin className="w-[12px] h-[12px] text-[#9da4ae]" />
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] text-[#9da4ae] leading-[14px]">
              {location}
            </p>
          </div>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] text-[#9da4ae] leading-[14px]">
          {timestamp}
        </p>
      </div>

      {/* Post Text */}
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#1f2a37] leading-[20px] mb-3">
        {text}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#fef3f2] px-[10px] py-[4px] rounded-[16px] font-['Inter:Medium',sans-serif] font-medium text-[10px] text-[#fe456a] leading-[14px]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Interaction Buttons */}
      <div className="flex items-center gap-4 pt-3 border-t border-[#e5e7eb]">
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center gap-1.5 transition-colors"
        >
          <Heart
            className={`w-[18px] h-[18px] transition-colors ${
              liked ? "fill-[#fe456a] text-[#fe456a]" : "text-[#9da4ae]"
            }`}
          />
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#9da4ae] leading-[14px]">
            Like
          </span>
        </button>
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1.5 transition-colors hover:bg-[#f3f4f6] px-2 py-1 rounded-[8px] -ml-2"
        >
          <MessageCircle className={`w-[18px] h-[18px] transition-colors ${showComments ? 'text-[#fe456a] fill-[#fe456a]' : 'text-[#9da4ae]'}`} />
          <span className={`font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[14px] ${showComments ? 'text-[#fe456a]' : 'text-[#9da4ae]'}`}>
            Comment {comments.length > 0 && `(${comments.length})`}
          </span>
        </button>
        <button
          onClick={() => setSaved(!saved)}
          className="flex items-center gap-1.5 ml-auto transition-colors hover:bg-[#f3f4f6] px-2 py-1 rounded-[8px] -mr-2"
        >
          <Bookmark
            className={`w-[18px] h-[18px] transition-colors ${
              saved ? "fill-[#fe456a] text-[#fe456a]" : "text-[#9da4ae]"
            }`}
          />
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#9da4ae] leading-[14px]">
            Save
          </span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
          {/* Existing Comments */}
          {comments.length > 0 && (
            <div className="flex flex-col gap-3 mb-4 max-h-[200px] overflow-y-auto">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-2">
                  <img
                    src={comment.userAvatar}
                    alt={comment.userName}
                    className="w-[28px] h-[28px] rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 bg-[#f9fafb] p-2.5 rounded-[12px] rounded-tl-none">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#1f2a37]">
                        {comment.userName}
                      </span>
                      <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#9da4ae]">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#374151] leading-[18px]">
                      {comment.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Comment Input */}
          <form onSubmit={handleAddComment} className="flex items-end gap-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="You"
              className="w-[32px] h-[32px] rounded-full object-cover mb-1"
            />
            <div className="flex-1 relative">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full bg-[#f3f4f6] text-[#1f2a37] text-[13px] placeholder-[#9da4ae] rounded-[20px] px-4 py-2.5 outline-none border border-transparent focus:border-[#d2d6db] focus:bg-white transition-all pr-10"
              />
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-[#e5e7eb] text-[#fe456a] disabled:text-[#d2d6db] transition-colors"
              >
                <Send className="w-[16px] h-[16px]" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}