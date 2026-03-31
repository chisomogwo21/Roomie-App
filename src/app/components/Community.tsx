import { useState, useEffect, useCallback } from "react";
import { Plus, MessageCircle, Bell, Users, Home, Key, Heart, ArrowRight, Loader2 } from "lucide-react";
import { PostCard } from "./PostCard";
import { CreatePostModal } from "./CreatePostModal";
import { EmptyState } from "./EmptyState";
import { fetchPosts, createPost, subscribeToPosts } from "../../lib/posts";
import { getMatches } from "../../lib/matching";
import { fetchProperties } from "../../lib/properties";
import { toast } from "sonner";

const FILTER_CATEGORIES = [
  "All",
  "Looking for Roommate",
  "Room Available",
  "Relocating",
  "Tips & Advice",
];


interface CommunityProps {
  onOpenMessages?: () => void;
  onOpenNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  hasUnreadMessages?: boolean;
  onStartMatching?: () => void;
  onBrowseHomes?: () => void;
  onCreateListing?: () => void;
}

export function Community({ 
  onOpenMessages, 
  onOpenNotifications,
  hasUnreadNotifications = false,
  hasUnreadMessages = false,
  onStartMatching,
  onBrowseHomes,
  onCreateListing,
}: CommunityProps = {}) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [recommendedProfiles, setRecommendedProfiles] = useState<any[]>([]);
  const [recommendedHomes, setRecommendedHomes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [postsRes, matchesRes, propertiesRes] = await Promise.all([
        fetchPosts(),
        getMatches(),
        fetchProperties()
      ]);

      if (postsRes.data) {
        setPosts(postsRes.data.map(p => ({
          id: p.id,
          userName: p.profiles?.full_name || "Roomie",
          userAvatar: p.profiles?.avatar_url || undefined,
          location: p.location || "Earth",
          timestamp: new Date(p.created_at).toLocaleDateString(),
          text: p.text,
          tags: p.tags || [],
          matchScore: null
        })));
      }

      if (matchesRes) {
        setRecommendedProfiles(matchesRes.slice(0, 5).map(m => ({
          id: m.id,
          name: m.name,
          initial: m.name.charAt(0),
          compatibility: m.matchScore,
          setup: m.bio || "Professional"
        })));
      }

      if (propertiesRes.data) {
        setRecommendedHomes(propertiesRes.data.slice(0, 5).map(p => ({
          id: p.id,
          title: p.title,
          price: `$${p.price}`,
          location: p.location,
          image: p.image_url || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400"
        })));
      }
    } catch (err) {
      console.error("Error loading community data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();

    // Subscribe to new posts
    const subscription = subscribeToPosts((newPost) => {
      setPosts(prev => [{
        id: newPost.id,
        userName: newPost.profiles?.full_name || "Roomie",
        userAvatar: newPost.profiles?.avatar_url || undefined,
        location: newPost.location || "Earth",
        timestamp: "Just now",
        text: newPost.text,
        tags: newPost.tags || [],
        matchScore: null
      }, ...prev]);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [loadData]);

  const handleCreatePost = async (newPost: {
    text: string;
    category: string;
    location: string;
    budget: string;
  }) => {
    try {
      const tags = [
        newPost.category !== "All" ? newPost.category : "",
        newPost.budget ? `Budget ${newPost.budget}` : "",
      ].filter(Boolean);

      const { error } = await createPost({
        text: newPost.text,
        category: newPost.category,
        location: newPost.location,
        budget: newPost.budget,
        tags
      });

      if (error) throw error;
      toast.success("Post created successfully!");
      setIsModalOpen(false);
    } catch (err: any) {
      toast.error(err.message || "Failed to create post");
    }
  };

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) =>
          post.tags.some((tag: string) => tag.includes(activeFilter))
        );

  // Activity stats initialized to zero for production
  const hasIncompleteProfile = false;
  const activeRequests = 0;
  const newMatches = 0;
  const unreadMessageCount = 0;

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      {/* Header */}
      <div className="bg-white px-6 pt-8 pb-4 border-b border-[#e5e7eb]">
        <div className="flex items-start justify-between mb-1">
          <div className="flex-1">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[#1f2a37] leading-[32px] mb-1">
              Home
            </h1>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9da4ae] leading-[18px]">
              Your roommate matching hub
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <button
              onClick={onOpenMessages}
              className="relative p-[8px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
            >
              <MessageCircle className="w-[20px] h-[20px] text-[#1f2a37]" />
              {/* Unread badge */}
              {hasUnreadMessages && (
                <span className="absolute top-[6px] right-[6px] w-[8px] h-[8px] bg-[#fe456a] rounded-full border-2 border-white" />
              )}
            </button>
            <button
              onClick={onOpenNotifications}
              className="relative p-[8px] hover:bg-[#f3f4f6] rounded-[8px] transition-colors"
            >
              <Bell className="w-[20px] h-[20px] text-[#1f2a37]" />
              {/* Unread badge */}
              {hasUnreadNotifications && (
                <span className="absolute top-[6px] right-[6px] w-[8px] h-[8px] bg-[#fe456a] rounded-full border-2 border-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Top Action Section */}
      <div className="bg-white px-6 py-4 border-b border-[#e5e7eb]">
        <div className="flex gap-[12px]">
          {/* Start Matching */}
          <button
            onClick={onStartMatching}
            className="flex-1 bg-gradient-to-br from-[#fe456a] to-[#ff758f] rounded-[12px] p-[16px] flex flex-col items-start hover:shadow-md transition-all"
          >
            <div className="w-[40px] h-[40px] bg-white/20 rounded-[10px] flex items-center justify-center mb-[8px]">
              <Heart className="w-[20px] h-[20px] text-white" />
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-white">
              Start Matching
            </p>
          </button>

          {/* Browse Homes */}
          <button
            onClick={onBrowseHomes}
            className="flex-1 bg-[#f3f4f6] rounded-[12px] p-[16px] flex flex-col items-start hover:bg-[#e5e7eb] transition-colors"
          >
            <div className="w-[40px] h-[40px] bg-white rounded-[10px] flex items-center justify-center mb-[8px]">
              <Home className="w-[20px] h-[20px] text-[#fe456a]" />
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
              Browse Homes
            </p>
          </button>
        </div>

        {/* List a Space */}
        <button
          onClick={onCreateListing}
          className="w-full mt-[12px] bg-[#f3f4f6] rounded-[12px] p-[16px] flex items-center gap-[12px] hover:bg-[#e5e7eb] transition-colors"
        >
          <div className="w-[40px] h-[40px] bg-white rounded-[10px] flex items-center justify-center">
            <Key className="w-[20px] h-[20px] text-[#fe456a]" />
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37]">
            List a Space
          </p>
        </button>
      </div>

      {/* Activity Snapshot */}
      {(activeRequests > 0 || newMatches > 0 || unreadMessageCount > 0) && (
        <div className="bg-white px-6 py-4 border-b border-[#e5e7eb]">
          <div className="flex items-center gap-[16px]">
            {activeRequests > 0 && (
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] bg-[#fef0f3] rounded-[8px] flex items-center justify-center">
                  <Users className="w-[16px] h-[16px] text-[#fe456a]" />
                </div>
                <div>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-[#1f2a37]">
                    {activeRequests}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[11px] leading-[14px] text-[#9da4ae]">
                    Active requests
                  </p>
                </div>
              </div>
            )}

            {newMatches > 0 && (
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] bg-[#fef0f3] rounded-[8px] flex items-center justify-center">
                  <Heart className="w-[16px] h-[16px] text-[#fe456a]" />
                </div>
                <div>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-[#1f2a37]">
                    {newMatches}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[11px] leading-[14px] text-[#9da4ae]">
                    New matches
                  </p>
                </div>
              </div>
            )}

            {unreadMessageCount > 0 && (
              <div className="flex items-center gap-[8px]">
                <div className="w-[32px] h-[32px] bg-[#fef0f3] rounded-[8px] flex items-center justify-center">
                  <MessageCircle className="w-[16px] h-[16px] text-[#fe456a]" />
                </div>
                <div>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-[#1f2a37]">
                    {unreadMessageCount}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[11px] leading-[14px] text-[#9da4ae]">
                    Unread messages
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Smart Guidance */}
      {hasIncompleteProfile && (
        <div className="px-6 py-4">
          <div className="bg-[#fffaeb] border border-[#fdb022]/20 rounded-[12px] p-[16px] flex items-start gap-[12px]">
            <div className="flex-none w-[40px] h-[40px] bg-[#fdb022] rounded-[10px] flex items-center justify-center">
              <Users className="w-[20px] h-[20px] text-white" />
            </div>
            <div className="flex-1">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37] mb-[4px]">
                Complete your lifestyle preferences
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#6b7280]">
                Help us find better matches for you.
              </p>
            </div>
            <button className="flex-none">
              <ArrowRight className="w-[20px] h-[20px] text-[#1f2a37]" />
            </button>
          </div>
        </div>
      )}

      {/* Recommended For You */}
      <div className="px-6 py-4 bg-white border-y border-[#e5e7eb]">
        <div className="flex items-center justify-between mb-[16px]">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37]">
            Recommended for you
          </h2>
          <button className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#fe456a]">
            See all
          </button>
        </div>

        {/* Recommended Profiles */}
        <div className="mb-[16px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#9da4ae] mb-[12px]">
            Compatible roommates
          </p>
          <div className="flex gap-[12px] overflow-x-auto pb-[8px] -mx-6 px-6">
            {recommendedProfiles.map((profile) => (
              <button
                key={profile.id}
                onClick={onStartMatching}
                className="flex-none w-[140px] bg-[#fafafa] rounded-[12px] p-[12px] hover:bg-[#f3f4f6] transition-colors"
              >
                <div className="w-full aspect-square mb-[8px] rounded-[8px] bg-gradient-to-br from-[#fe456a] to-[#ff758f] flex items-center justify-center">
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-white">
                    {profile.initial}
                  </span>
                </div>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[18px] text-[#1f2a37] mb-[4px] truncate">
                  {profile.name}
                </p>
                <div className="flex items-center gap-[4px] mb-[6px]">
                  <Heart className="w-[10px] h-[10px] text-[#fe456a] fill-[#fe456a]" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] leading-[14px] text-[#fe456a]">
                    {profile.compatibility}% match
                  </span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-[#9da4ae] truncate">
                  {profile.setup}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Recommended Homes */}
        <div>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[16px] text-[#9da4ae] mb-[12px]">
            Homes you might like
          </p>
          <div className="flex gap-[12px] overflow-x-auto pb-[8px] -mx-6 px-6">
            {recommendedHomes.map((home) => (
              <button
                key={home.id}
                onClick={onBrowseHomes}
                className="flex-none w-[160px] bg-[#fafafa] rounded-[12px] overflow-hidden hover:bg-[#f3f4f6] transition-colors"
              >
                <img 
                  src={home.image} 
                  alt={home.title}
                  className="w-full h-[100px] object-cover"
                />
                <div className="p-[12px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[18px] text-[#1f2a37] mb-[4px] truncate">
                    {home.title}
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-[#fe456a] mb-[4px]">
                    {home.price}
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-[#9da4ae]">
                      /month
                    </span>
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-[#9da4ae] truncate">
                    {home.location}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Community Feed Title */}
      <div className="px-6 py-4 bg-[#fafafa]">
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] leading-[24px] text-[#1f2a37]">
          Community
        </h2>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px] text-[#9da4ae]">
          See what others are saying
        </p>
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

      {/* Feed */}
      <div className="px-6 py-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-[40px]">
            <Loader2 className="w-[40px] h-[40px] animate-spin text-[#fe456a]" />
            <p className="mt-[16px] text-[14px] text-[#9da4ae]">Loading community feed...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <EmptyState onCreatePost={() => setIsModalOpen(true)} />
        ) : (
          <div className="flex flex-col gap-4 max-w-[600px] mx-auto">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-24 right-6 w-[56px] h-[56px] bg-[#fe456a] rounded-full shadow-lg flex items-center justify-center hover:bg-[#e63d5f] transition-colors"
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