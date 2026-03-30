import { X, Loader2 } from "lucide-react";
import { useState } from "react";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: {
    text: string;
    category: string;
    location: string;
    budget: string;
  }) => Promise<void> | void;
}

export function CreatePostModal({
  isOpen,
  onClose,
  onSubmit,
}: CreatePostModalProps) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = [
    "All",
    "Looking for Roommate",
    "Room Available",
    "Relocating",
    "Tips & Advice",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit({ text, category, location, budget });
      setText("");
      setCategory("All");
      setLocation("");
      setBudget("");
      onClose();
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[16px] w-full max-w-[400px] p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#1f2a37] leading-[24px]">
            Create Post
          </h3>
          <button
            onClick={onClose}
            className="w-[32px] h-[32px] rounded-full hover:bg-[#f3f4f6] flex items-center justify-center transition-colors"
          >
            <X className="w-[20px] h-[20px] text-[#9da4ae]" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Text Input */}
          <div className="mb-4">
            <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#1f2a37] leading-[14px] block mb-2">
              What's on your mind?
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts, ask a question, or post about a room..."
              className="w-full h-[100px] p-3 border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#1f2a37] resize-none focus:outline-none focus:border-[#fe456a]"
              required
            />
          </div>

          {/* Category Selector */}
          <div className="mb-4">
            <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#1f2a37] leading-[14px] block mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#1f2a37] leading-[14px] block mb-2">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Kicukiro, Kigali"
              className="w-full p-3 border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a]"
              required
            />
          </div>

          {/* Budget */}
          <div className="mb-6">
            <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#1f2a37] leading-[14px] block mb-2">
              Budget (Optional)
            </label>
            <input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g., $120/month"
              className="w-full p-3 border border-[#e5e7eb] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#1f2a37] focus:outline-none focus:border-[#fe456a]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !text || !location}
            className="w-full bg-[#fe456a] text-white rounded-[8px] py-3 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] hover:bg-[#e63d5f] transition-colors disabled:bg-[#f3f4f6] disabled:text-[#9da4ae] flex items-center justify-center gap-[8px]"
          >
            {loading ? <Loader2 className="w-[20px] h-[20px] animate-spin" /> : "Post"}
          </button>
        </form>
      </div>
    </div>
  );
}
