import { useState, useEffect } from "react";
import { Plus, ArrowLeft, Users, Loader2 } from "lucide-react";
import { PostCard } from "./PostCard";
import { CreatePostModal } from "./CreatePostModal";
import { EmptyState } from "./EmptyState";
import { toast } from "sonner";
import { fetchPosts, createPost, subscribeToPosts, DatabasePost } from "../../lib/posts";

interface CommunityFeedProps {
  onBack?: () => void;
  onViewProfile?: (userId: string) => void;
}

interface CommunityFeedProps {
  onBack?: () => void;
  onViewProfile?: (userId: string) => void;
}

const FILTER_CATEGORIES = [
  "All",
  "Looking for Roommate",
  "Room Available",
  "Relocating",
  "Tips & Advice",
];

export function CommunityFeed({ onBack, onViewProfile }: CommunityFeedProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<DatabasePost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const { data, error } = await fetchPosts();
      if (error) {
        toast.error("Failed to load community posts");
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    }

    loadPosts();

    // Subscribe to real-time updates
    const subscription = subscribeToPosts((newPost) => {
      setPosts((current) => [newPost, ...current]);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleCreatePost = async (newPostData: {
    text: string;
    category: string;
    location: string;
    budget: string;
  }) => {
    try {
      const tags = [
        newPostData.category !== "All" ? newPostData.category : "",
        newPostData.budget ? `Budget ${newPostData.budget}` : "",
      ].filter(Boolean);

      const { error } = await createPost({
        text: newPostData.text,
        category: newPostData.category,
        location: newPostData.location,
        budget: newPostData.budget,
        tags: tags
      });

      if (error) {
        toast.error("Failed to create post: " + error.message);
      } else {
        setIsModalOpen(false);
        toast.success("Post created successfully!");
        // Real-time subscription will handle adding the post to the list
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) =>
          post.tags?.some((tag: string) => tag.includes(activeFilter))
        );

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      {/* Header */}
      <div className="bg-white px-6 pt-8 pb-4 border-b border-[#e5e7eb]">
        <div className="flex items-center gap-4 mb-4">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-[#f3f4f6] rounded-[8px] transition-colors -ml-2"
            >
              <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" />
            </button>
          )}
          <div className="flex-1">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[#1f2a37] leading-[32px]">
              Community
            </h1>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9da4ae] leading-[18px]">
              Connect with roommates in your area
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white px-6 py-3 border-b border-[#e5e7eb] overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-[20px] font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[14px] whitespace-nowrap transition-colors ${
                activeFilter === category
                  ? "bg-[#fe456a] text-white"
                  : "bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e5e7eb]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* City-based location indicator */}
      <div className="bg-white px-6 py-3 border-b border-[#e5e7eb]">
        <div className="flex items-center gap-2">
          <Users className="w-[16px] h-[16px] text-[#9da4ae]" />
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[16px] text-[#6b7280]">
            Posts from <span className="font-semibold text-[#1f2a37]">Kigali</span>
          </p>
        </div>
      </div>

      {/* Feed */}
      <div className="px-6 py-4">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-[32px] h-[32px] animate-spin text-[#fe456a]" />
          </div>
        ) : filteredPosts.length === 0 ? (
          <EmptyState onCreatePost={() => setIsModalOpen(true)} />
        ) : (
          <div className="flex flex-col gap-4 max-w-[600px] mx-auto">
            {filteredPosts.map((post) => (
              <PostCard 
                key={post.id} 
                id={post.id}
                userId={post.user_id} 
                userName={post.profiles?.full_name || "Roomie User"}
                userAvatar={post.profiles?.avatar_url || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"}
                location={post.location || "Kigali"}
                timestamp={new Date(post.created_at).toLocaleDateString()}
                text={post.text}
                tags={post.tags}
                onViewProfile={onViewProfile} 
              />
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-24 right-6 w-[56px] h-[56px] bg-[#fe456a] rounded-full shadow-lg flex items-center justify-center hover:bg-[#e63d5f] transition-colors z-50"
      >
        <Plus className="w-[24px] h-[24px] text-white" />
      </button>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
}
