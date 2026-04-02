import { useState, useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { Home } from "./components/Home";
import { Loader2 } from "lucide-react";
import { CommunityFeed } from "./components/CommunityFeed";
import { BottomNavigation } from "./components/BottomNavigation";
import { LifestylePreferencesFigma } from "./components/LifestylePreferencesFigma";
import { MyListing } from "./components/MyListing";
import { CreateListing } from "./components/CreateListing";
import { PropertyDetails } from "./components/PropertyDetails";
import { RentalDetails } from "./components/RentalDetails";
import { PublicProfileView } from "./components/PublicProfileView";
import { Explore } from "./components/Explore";
import { Profile } from "./components/Profile";
import { EditProfile } from "./components/EditProfile";
import { OnboardingFlow } from "./components/OnboardingFlow";
import { SignUpScreen } from "./components/SignUpScreen";
import { SelectLocationScreen } from "./components/SelectLocationScreen";
import { MapsScreen } from "./components/MapsScreen";
import { RoommateMatching } from "./components/RoommateMatching";
import { RequestToJoin } from "./components/RequestToJoin";
import { Messages } from "./components/Messages";
import { Notifications } from "./components/Notifications";
import { RequestAccepted } from "./components/RequestAccepted";
import { ChatThread } from "./components/ChatThread";
import { RequestHandlingSettings } from "./components/RequestHandlingSettings";
import { Homepage } from "./components/Homepage";
import { CityListings } from "./components/CityListings";
import { AdminDashboard } from "./components/AdminDashboard";
import { BookingRequest } from "./components/BookingRequest";
import { RequestsInbox } from "./components/RequestsInbox";
import { RequestDetail } from "./components/RequestDetail";
import { About } from "./components/About";
import { ContactSupport } from "./components/ContactSupport";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { Login } from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword";
import { VerifyEmail } from "./components/VerifyEmail";
import { ChangePassword } from "./components/ChangePassword";
import { SuccessReset } from "./components/SuccessReset";
import { Settings as SettingsScreen } from "./components/Settings";
import { Favorites } from "./components/Favorites";
import { RecentViewed } from "./components/RecentViewed";
import type { RequestStatus } from "./components/RequestStatusBadge";
import { signOut, getSession } from "../lib/auth";
import { supabase } from "../lib/supabaseClient";
import { updateRequestStatus, sendBookingRequest } from "../lib/requests";
import { toast } from "sonner";
import type { ListingData } from "./components/CreateListingContext";

export default function App() {
  const [showHomepage, setShowHomepage] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showOnboardingFlow, setShowOnboardingFlow] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showSuccessReset, setShowSuccessReset] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSelectLocation, setShowSelectLocation] = useState(false);
  const [showMaps, setShowMaps] = useState(false);
  const [showCreateListing, setShowCreateListing] = useState(false);
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const [showRentalDetails, setShowRentalDetails] = useState(false);
  const [showPublicProfile, setShowPublicProfile] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showMatching, setShowMatching] = useState(false);
  const [showPreferencesEditor, setShowPreferencesEditor] = useState(false);
  const [showRequestToJoin, setShowRequestToJoin] = useState(false);
  const [showBookingRequest, setShowBookingRequest] = useState(false);
  const [bookingRequestType, setBookingRequestType] = useState<"shared" | "entire">("shared");
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRequestAccepted, setShowRequestAccepted] = useState(false);
  const [showChatThread, setShowChatThread] = useState(false);
  const [showRequestHandlingSettings, setShowRequestHandlingSettings] = useState(false);
  const [currentChatStatus, setCurrentChatStatus] = useState<RequestStatus | undefined>("accepted");
  const [currentChatRecipientId, setCurrentChatRecipientId] = useState<string | undefined>(undefined);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showRequestsInbox, setShowRequestsInbox] = useState(false);
  const [showRequestDetail, setShowRequestDetail] = useState(false);
  const [currentRequestId, setCurrentRequestId] = useState<string>("");
  const [currentRequestType, setCurrentRequestType] = useState<"received" | "sent">("received");
  const [showAbout, setShowAbout] = useState(false);
  const [showContactSupport, setShowContactSupport] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showRecentViewed, setShowRecentViewed] = useState(false);
  
  // Data states
  const [favorites, setFavorites] = useState<ListingData[]>([]);
  const [recentViewed, setRecentViewed] = useState<ListingData[]>([]);
  const [currentListing, setCurrentListing] = useState<ListingData | undefined>(undefined);

  // Demo: Request status state (can be toggled for testing)
  const [demoRequestStatus, setDemoRequestStatus] = useState<RequestStatus | undefined>(undefined);
  
  // Demo: Unread notification and message badges (set to true to show badges)
  const [hasUnreadNotifications] = useState(false);
  const [hasUnreadMessages] = useState(false);
  const [userName, setUserName] = useState("Guest");
  const [userEmail, setUserEmail] = useState("");
  const [_userFullName, setUserFullName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [hasCompletedPreferences, setHasCompletedPreferences] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  
  const [userLocation, setUserLocation] = useState(() => {
    return localStorage.getItem("userLocation") || "Kicukiro, Kigali";
  });

  const handleLocationChange = (loc: string) => {
    setUserLocation(loc);
    localStorage.setItem("userLocation", loc);
  };

  const handleViewProfile = (userId: string) => {
    setSelectedUserId(userId);
    setShowPublicProfile(true);
  };

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = async () => {
      try {
        const { data: { session } } = await getSession();
        
        // Handle password reset recovery link
        const hash = window.location.hash;
        if (hash && hash.includes("type=recovery")) {
          setShowLogin(false);
          setShowSignUp(false);
          setShowForgotPassword(false);
          setShowVerifyEmail(false);
          setShowChangePassword(true);
          return;
        }

        if (session) {
        setShowLogin(false);
        setActiveTab("home");
        
        // Fetch extended profile data from profiles table
        const { getProfile } = await import("../lib/auth");
        const { data: profile } = await getProfile(session.user.id);
        
        let resolvedFullName = "";
        let resolvedEmail = session.user?.email || "";
        let resolvedAvatar = "";

        if (profile) {
          resolvedFullName = profile.full_name || "";
          resolvedAvatar = profile.avatar_url || "";
          resolvedEmail = profile.email || resolvedEmail;
        }

        // Fallback sequence for name
        if (!resolvedFullName) {
          resolvedFullName = session.user?.user_metadata?.full_name || 
                            session.user?.user_metadata?.username || 
                            "";
        }

        // Final fallback: derive from email if no name at all
        if (!resolvedFullName && resolvedEmail) {
          const emailPrefix = resolvedEmail.split("@")[0];
          resolvedFullName = emailPrefix
            .split(/[\._]/)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(" ");
        }

        const firstName = resolvedFullName.split(" ")[0] || "Roomie";
        
        setUserName(firstName);
        setUserFullName(resolvedFullName);
        setUserAvatar(resolvedAvatar || session.user?.user_metadata?.avatar_url || "");
        setUserEmail(resolvedEmail);
      }
    } catch (err) {
      console.error("Initialization error:", err);
    } finally {
      setIsInitializing(false);
    }
    };
    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if ((event === "SIGNED_IN" || event === "TOKEN_REFRESHED") && session) {
        setShowLogin(false);
        setShowSignUp(false);
        setActiveTab("home");
        
        // Fetch extended profile data from profiles table
        const { getProfile } = await import("../lib/auth");
        const { data: profile } = await getProfile(session.user.id);
        
        let resolvedFullName = "";
        let resolvedEmail = session.user?.email || "";
        let resolvedAvatar = "";

        if (profile) {
          resolvedFullName = profile.full_name || "";
          resolvedAvatar = profile.avatar_url || "";
          resolvedEmail = profile.email || resolvedEmail;
        }

        // Fallback sequence for name
        if (!resolvedFullName) {
          resolvedFullName = session.user?.user_metadata?.full_name || 
                            session.user?.user_metadata?.username || 
                            "";
        }

        // Final fallback: derive from email if no name at all
        if (!resolvedFullName && resolvedEmail) {
          const emailPrefix = resolvedEmail.split("@")[0];
          resolvedFullName = emailPrefix
            .split(/[\._]/)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(" ");
        }

        const firstName = resolvedFullName.split(" ")[0] || "Roomie";
        
        setUserName(firstName);
        setUserFullName(resolvedFullName);
        setUserAvatar(resolvedAvatar || session.user?.user_metadata?.avatar_url || "");
        setUserEmail(resolvedEmail);
      } else if (event === "SIGNED_OUT") {
        setShowLogin(true);
        setUserName("Guest");
        setUserFullName("");
        setUserEmail("");
        setUserAvatar("");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const toggleFavorite = (listing: ListingData) => {
    setFavorites(prev => {
      const isFav = prev.some(item => item.rent === listing.rent && item.description === listing.description);
      if (isFav) {
        return prev.filter(item => !(item.rent === listing.rent && item.description === listing.description));
      } else {
        return [...prev, listing];
      }
    });
  };

  const addToRecentViewed = (listing: ListingData) => {
    setRecentViewed(prev => {
      // Remove if already exists to move to top
      const filtered = prev.filter(item => !(item.rent === listing.rent && item.description === listing.description));
      return [listing, ...filtered].slice(0, 10); // Keep last 10
    });
  };

  const handleViewListing = (listing: ListingData) => {
    setCurrentListing(listing);
    addToRecentViewed(listing);
    setShowPropertyDetails(true);
  };

  // If app is still identifying the user, show a loading screen
  if (isInitializing) {
    return (
      <div className="size-full flex flex-col items-center justify-center bg-[#fcfcfd]">
        <Loader2 className="w-[40px] h-[40px] animate-spin text-[#fe456a] mb-4" />
        <p className="text-[#9da4ae] font-['Inter:Medium',sans-serif] text-[14px]">
          Getting everything ready...
        </p>
      </div>
    );
  }

  // If admin dashboard is active, show it (full screen, no navigation)
  if (showAdminDashboard) {
    return <AdminDashboard onExit={() => setShowAdminDashboard(false)} />;
  }

  // If login screen is active, show it
  if (showLogin) {
    return (
      <Login
        onBack={() => {
          // Optional: go back to onboarding if user wants to see it again
          setShowLogin(false);
          setShowOnboardingFlow(true);
        }}
        onSignIn={() => {
          // User successfully signed in, go to home screen
          setShowLogin(false);
          setActiveTab("home");
        }}
        onSignUp={() => {
          // Navigate to sign up
          setShowLogin(false);
          setShowSignUp(true);
        }}
        onForgotPassword={() => {
          console.log("Forgot password clicked");
          // In a real app, navigate to forgot password screen
          setShowLogin(false);
          setShowForgotPassword(true);
        }}
      />
    );
  }

  // If forgot password is active, show it
  if (showForgotPassword) {
    return (
      <ForgotPassword
        onBack={() => {
          setShowForgotPassword(false);
          setShowLogin(true);
        }}
        onContinue={(email) => {
          console.log("Password reset email sent to:", email);
          // showVerifyEmail(true) is optional now since we show a "Check email" state in the component
        }}
      />
    );
  }

  // If verify email is active, show it
  if (showVerifyEmail) {
    return (
      <VerifyEmail
        onBack={() => {
          setShowVerifyEmail(false);
          setShowForgotPassword(true);
        }}
        onVerify={(code) => {
          console.log("Verification code:", code);
          setShowVerifyEmail(false);
          setShowChangePassword(true);
        }}
      />
    );
  }

  // If change password is active, show it
  if (showChangePassword) {
    return (
      <ChangePassword
        onBack={() => {
          setShowChangePassword(false);
          setShowVerifyEmail(true);
        }}
        onChangePassword={() => {
          console.log("New password set");
          setShowChangePassword(false);
          setShowSuccessReset(true);
        }}
      />
    );
  }

  // If success reset is active, show it
  if (showSuccessReset) {
    return (
      <SuccessReset
        onContinue={() => {
          setShowSuccessReset(false);
          setShowLogin(true);
        }}
      />
    );
  }

  // If booking request is active, show it
  if (showBookingRequest) {
    return (
      <BookingRequest
        onBack={() => setShowBookingRequest(false)}
        listingType={bookingRequestType}
        listingId={currentListing?.id || ""}
        recipientId={currentListing?.user_id || ""}
        listingData={currentListing as any}
        onSendRequest={() => {
          setShowBookingRequest(false);
          // Show a success message or navigate to RequestToJoin with pending status
          setDemoRequestStatus("pending");
          setShowRequestToJoin(true);
        }}
      />
    );
  }

  // If request detail is active, show it
  if (showRequestDetail) {
    return (
      <RequestDetail
        onBack={() => {
          setShowRequestDetail(false);
          setShowRequestsInbox(true);
        }}
        requestType={currentRequestType}
        requestId={currentRequestId}
        onAccept={async () => {
          try {
            const { error } = await updateRequestStatus(currentRequestId, "accepted");
            if (error) throw error;
            toast.success("Request accepted!");
            setShowRequestDetail(false);
            setShowRequestsInbox(true);
          } catch (err: any) {
            toast.error(err.message || "Failed to accept request.");
          }
        }}
        onDecline={async () => {
          try {
            const { error } = await updateRequestStatus(currentRequestId, "declined");
            if (error) throw error;
            toast.success("Request declined.");
            setShowRequestDetail(false);
            setShowRequestsInbox(true);
          } catch (err: any) {
            toast.error(err.message || "Failed to decline request.");
          }
        }}
        onStartChat={() => {
          setShowRequestDetail(false);
          setCurrentChatStatus("accepted");
          setCurrentChatRecipientId(currentRequestId);
          setShowChatThread(true);
        }}
      />
    );
  }

  // If requests inbox is active, show it
  if (showRequestsInbox) {
    return (
      <RequestsInbox
        onBack={() => setShowRequestsInbox(false)}
        onOpenRequestDetail={(requestId, type) => {
          setCurrentRequestId(requestId);
          setCurrentRequestType(type);
          setShowRequestsInbox(false);
          setShowRequestDetail(true);
        }}
        onStartChat={(requestId) => {
          console.log("Start chat for request:", requestId);
          setShowRequestsInbox(false);
          setCurrentChatStatus("accepted");
          setCurrentChatRecipientId(requestId);
          setShowChatThread(true);
        }}
        onAcceptRequest={async (requestId) => {
          try {
            const { error } = await updateRequestStatus(requestId, "accepted");
            if (error) throw error;
            toast.success("Request accepted!");
          } catch (err: any) {
            toast.error(err.message || "Failed to accept request.");
          }
        }}
        onDeclineRequest={async (requestId) => {
          try {
            const { error } = await updateRequestStatus(requestId, "declined");
            if (error) throw error;
            toast.success("Request declined.");
          } catch (err: any) {
            toast.error(err.message || "Failed to decline request.");
          }
        }}
      />
    );
  }

  // If about is active, show it
  if (showAbout) {
    return (
      <About
        onBack={() => setShowAbout(false)}
        onContactSupport={() => {
          setShowAbout(false);
          setShowContactSupport(true);
        }}
        onPrivacyPolicy={() => {
          setShowAbout(false);
          setShowPrivacyPolicy(true);
        }}
        onTermsOfService={() => {
          setShowAbout(false);
          setShowTermsOfService(true);
        }}
      />
    );
  }

  // If contact support is active, show it
  if (showContactSupport) {
    return <ContactSupport onBack={() => {
      setShowContactSupport(false);
      setShowAbout(true);
    }} />;
  }

  // If privacy policy is active, show it
  if (showPrivacyPolicy) {
    return <PrivacyPolicy onBack={() => {
      setShowPrivacyPolicy(false);
      setShowAbout(true);
    }} />;
  }

  // If terms of service is active, show it
  if (showTermsOfService) {
    return <TermsOfService onBack={() => {
      setShowTermsOfService(false);
      setShowAbout(true);
    }} />;
  }

  // If edit profile is active, show it
  if (showEditProfile) {
    return (
      <>
        <EditProfile 
          onBack={() => setShowEditProfile(false)} 
          userAvatar={userAvatar}
          onAvatarUpdate={(url) => setUserAvatar(url)}
        />
        <Toaster />
      </>
    );
  }

  // If settings is active, show it
  if (showSettings) {
    return (
      <SettingsScreen
        onBack={() => setShowSettings(false)}
        onEditProfile={() => {
          setShowSettings(false);
          setShowEditProfile(true);
        }}
        onChangePassword={() => {
          setShowSettings(false);
          setShowChangePassword(true);
        }}
        onRequestHandling={() => {
          setShowSettings(false);
          setShowRequestHandlingSettings(true);
        }}
        onLifestylePreferences={() => {
          setShowSettings(false);
          setShowPreferencesEditor(true);
        }}
        onAbout={() => {
          setShowSettings(false);
          setShowAbout(true);
        }}
      />
    );
  }

  // If favorites is active, show it
  if (showFavorites) {
    return (
      <Favorites
        onBack={() => setShowFavorites(false)}
        favorites={favorites}
        onViewListing={handleViewListing}
      />
    );
  }

  // If recent viewed is active, show it
  if (showRecentViewed) {
    return (
      <RecentViewed
        onBack={() => setShowRecentViewed(false)}
        recentListings={recentViewed}
        onViewListing={handleViewListing}
      />
    );
  }

  // If request handling settings is active, show it
  if (showRequestHandlingSettings) {
    return <RequestHandlingSettings onBack={() => setShowRequestHandlingSettings(false)} />;
  }

  // If city listings is active, show it
  if (selectedCity) {
    return (
      <CityListings
        cityName={selectedCity}
        onBack={() => setSelectedCity(null)}
        onViewListing={(listingType) => {
          setSelectedCity(null);
          if (listingType === "shared") {
            setShowPropertyDetails(true);
          } else {
            setShowRentalDetails(true);
          }
        }}
      />
    );
  }

  // If chat thread is active, show it
  if (showChatThread) {
    return (
      <ChatThread
        onBack={() => setShowChatThread(false)}
        requestStatus={currentChatStatus}
        recipientId={currentChatRecipientId}
      />
    );
  }

  // If request accepted screen is active, show it
  if (showRequestAccepted) {
    return (
      <RequestAccepted
        onStartChat={() => {
          setShowRequestAccepted(false);
          setShowChatThread(true);
        }}
      />
    );
  }

  // If notifications is active, show it
  if (showNotifications) {
    return (
      <Notifications
        onBack={() => setShowNotifications(false)}
        onNotificationClick={(notification) => {
          setShowNotifications(false);
          
          // Navigate based on notification type
          switch (notification.type) {
            case "new_request":
              // Open request page with pending status (for listing owner to review)
              setDemoRequestStatus("pending");
              setShowRequestToJoin(true);
              break;
              
            case "request_accepted":
              // Open request accepted confirmation screen, then chat
              setShowRequestAccepted(true);
              break;
              
            case "request_declined":
              // Open request page showing declined status
              setDemoRequestStatus("declined");
              setShowRequestToJoin(true);
              break;
              
            case "new_message":
              // Open chat screen directly
              setCurrentChatStatus("accepted");
              // Assuming clicking notification opens a chat with whoever triggered it. 
              // Set a placeholder recipientId until notifications inject real userIds.
          setCurrentChatRecipientId("");
              setShowChatThread(true);
              break;
              
            case "new_match":
              // Open property details or explore screen
              setShowPropertyDetails(true);
              break;
              
            case "system":
              // Open appropriate system screen (e.g., profile for "complete profile")
              setActiveTab("profile");
              break;
          }
        }}
      />
    );
  }

  // If messages is active, show it
  if (showMessages) {
    return (
      <Messages
        onBack={() => setShowMessages(false)}
        onOpenChat={(messageId, status) => {
          setCurrentChatStatus(status);
          setCurrentChatRecipientId(messageId);
          setShowMessages(false);
          setShowChatThread(true);
        }}
      />
    );
  }

  // If request to join is active, show it
  if (showRequestToJoin) {
    return (
      <RequestToJoin
        onBack={() => setShowRequestToJoin(false)}
        requestStatus={demoRequestStatus}
        onStartChat={() => {
          setShowRequestToJoin(false);
          setShowRequestAccepted(true);
        }}
        onFindOtherHomes={() => {
          setShowRequestToJoin(false);
          setActiveTab("explore");
        }}
      />
    );
  }

  // If public profile is active, show it
  if (showPublicProfile) {
    // For demo purposes: if the user is in the matching pool (1, 2, or 3), show as 'matched'
    // to match the user's second screenshot requirement.
    const isMatched = selectedUserId ? ["1", "2", "3"].includes(selectedUserId) : false;

    return (
      <PublicProfileView
        onBack={() => {
          setShowPublicProfile(false);
          setSelectedUserId(null);
        }}
        userId={selectedUserId || undefined}
        connectionStatus={isMatched ? "matched" : "not-connected"}
        onChat={() => {
          setShowPublicProfile(false);
          setCurrentChatStatus("accepted");
          setCurrentChatRecipientId(selectedUserId || "");
          setShowChatThread(true);
        }}
        onSendRequest={async () => {
          if (!selectedUserId) return;
          try {
            const { error } = await sendBookingRequest({
              listingId: "", // Empty for profile connection
              recipientId: selectedUserId,
              moveInDate: new Date().toISOString().split('T')[0],
              lengthOfStay: "Connection Request",
              budgetConfirmed: true,
              introMessage: `Hello! I'd like to connect regarding accommodation.`
            });
            if (error) throw error;
            toast.success("Connection request sent!");
            setShowPublicProfile(false);
          } catch (err: any) {
            toast.error(err.message || "Failed to send request.");
          }
        }}
      />
    );
  }

  // If preferences editor is active, show it
  if (showPreferencesEditor) {
    return <LifestylePreferencesFigma onBack={() => setShowPreferencesEditor(false)} onComplete={() => setShowPreferencesEditor(false)} />;
  }

  // If matching is active, show it
  if (showMatching) {
    return (
      <RoommateMatching 
        onBack={() => setShowMatching(false)} 
        onViewProfile={handleViewProfile} 
        onStartChat={(userId) => {
          setShowMatching(false);
          setCurrentChatStatus("accepted");
          setCurrentChatRecipientId(userId);
          setShowChatThread(true);
        }}
      />
    );
  }



  // If rental details is active, show it
  if (showRentalDetails) {
    return (
      <RentalDetails
        onBack={() => setShowRentalDetails(false)}
        onRentNow={() => {
          setShowRentalDetails(false);
          setBookingRequestType("entire");
          setShowBookingRequest(true);
        }}
      />
    );
  }

  // If property details is active, show it
  if (showPropertyDetails) {
    const isFav = currentListing ? favorites.some(item => item.rent === currentListing.rent && item.description === currentListing.description) : false;
    
    return (
      <PropertyDetails 
        onBack={() => setShowPropertyDetails(false)} 
        listing={currentListing}
        isFavorited={isFav}
        onToggleFavorite={toggleFavorite}
        onRequestToJoin={() => {
          setShowPropertyDetails(false);
          // Determine listing type - for demo, using "shared" as default
          setBookingRequestType("shared");
          setShowBookingRequest(true);
        }}
        onViewProfile={handleViewProfile}
      />
    );
  }

  // If create listing is active, show it
  if (showCreateListing) {
    return <CreateListing onBack={() => setShowCreateListing(false)} />;
  }

  // If onboarding is active, show it
  if (showOnboarding) {
    return <LifestylePreferencesFigma onBack={() => setShowOnboarding(false)} onComplete={() => {
      setShowOnboarding(false);
      // User has completed onboarding, go to home screen
      setActiveTab("home");
    }} />;
  }

  // If onboarding flow is active, show it
  if (showOnboardingFlow) {
    return (
      <OnboardingFlow
        onComplete={() => {
          setShowOnboardingFlow(false);
          setShowSignUp(true);
        }}
        onSkip={() => {
          setShowOnboardingFlow(false);
          setShowSignUp(true);
        }}
      />
    );
  }

  // If sign up is active, show it
  if (showSignUp) {
    return (
      <SignUpScreen
        onBack={() => {
          setShowSignUp(false);
          setShowOnboardingFlow(true);
        }}
        onSignUp={() => {
          setShowSignUp(false);
          setShowSelectLocation(true);
        }}
        onSignIn={() => {
          // Navigate to login screen
          setShowSignUp(false);
          setShowLogin(true);
        }}
      />
    );
  }

  // If select location is active, show it
  if (showSelectLocation) {
    return (
      <SelectLocationScreen
        onSkip={() => {
          setShowSelectLocation(false);
          setShowOnboarding(true); // Show lifestyle preferences
        }}
        onUseCurrentLocation={() => {
          console.log("Use current location");
          setShowSelectLocation(false);
          setShowOnboarding(true); // Show lifestyle preferences
        }}
        onSelectManually={() => {
          setShowSelectLocation(false);
          setShowMaps(true);
        }}
      />
    );
  }

  // If maps is active, show it
  if (showMaps) {
    return (
      <MapsScreen
        onBack={() => {
          setShowMaps(false);
          setShowSelectLocation(true);
        }}
        onChooseLocation={() => {
          console.log("Location chosen");
          setShowMaps(false);
          setShowOnboarding(true); // Show lifestyle preferences
        }}
      />
    );
  }

  // Show homepage on first load
  if (showHomepage) {
    return (
      <Homepage
        onStartMatching={() => {
          setShowHomepage(false);
          setShowMatching(true);
        }}
        onBrowseHomes={() => {
          setShowHomepage(false);
          setActiveTab("explore");
        }}
      />
    );
  }

  return (
    <div className="size-full flex flex-col bg-[#fafafa]">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === "home" && (
          <Home
            userName={userName}
            currentLocation={userLocation}
            onLocationChange={handleLocationChange}
            hasCompletedPreferences={hasCompletedPreferences}
            onOpenMessages={() => setShowMessages(true)}
            onOpenNotifications={() => setShowNotifications(true)}
            hasUnreadNotifications={hasUnreadNotifications}
            hasUnreadMessages={hasUnreadMessages}
            onStartMatching={() => setShowMatching(true)}
            onBrowseHomes={() => setActiveTab("explore")}
            onCompletePreferences={() => {
              setHasCompletedPreferences(true);
              setShowOnboarding(true);
            }}
          />
        )}
        {activeTab === "community" && (
          <CommunityFeed onViewProfile={handleViewProfile} />
        )}
        {activeTab === "explore" && (
          <Explore 
            onViewListing={() => setShowPropertyDetails(true)}
            onViewProfile={() => setShowMatching(true)}
            onSelectCity={(cityName) => {
              // For demo: selecting a city opens the property details page
              // In a real app, this would navigate to a city-specific listings page
              console.log("Selected city:", cityName);
              setSelectedCity(cityName);
            }}
          />
        )}
        {activeTab === "my-listing" && (
          <MyListing onCreateListing={() => setShowCreateListing(true)} />
        )}
        {activeTab === "profile" && (
          <Profile
            userName={userName}
            userEmail={userEmail}
            userAvatar={userAvatar}
            onStartMatching={() => setShowMatching(true)}
            onEditLifestylePreferences={() => setShowPreferencesEditor(true)}
            onRequestHandlingSettings={() => setShowRequestHandlingSettings(true)}
            onBookingRequests={() => setShowRequestsInbox(true)}
            onAbout={() => setShowAbout(true)}
            onEditProfile={() => setShowEditProfile(true)}
            onListSpace={() => setShowCreateListing(true)}
            onMyListing={() => setActiveTab("my-listing")}
            onSettings={() => setShowSettings(true)}
            onFavorite={() => setShowFavorites(true)}
            onRecentViewed={() => setShowRecentViewed(true)}
            onSignOut={async () => {
              try {
                // Sign out from Supabase
                await signOut();
              } catch (err) {
                console.error("Sign out error:", err);
              } finally {
                // Guaranteed cleanup and redirect
                setShowLogin(true);
                setUserName("Guest");
                setUserFullName("");
                setUserEmail("");
                setUserAvatar("");
                setActiveTab("home");
              }
            }}
          />
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}