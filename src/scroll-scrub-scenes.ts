import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#0289E3",
  background: "#011F43",
  ink: "#FFFFFF",
  muted: "#D8EAF7",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "fiber-journey",
    label: "BTL Internet",
    kicker: "সহজ সংযোগ, প্রতিদিন",
    title: "ইন্টারনেট, আপনার কাছেই",
    body: "দ্রুত ও নির্ভরযোগ্য ফাইবার সংযোগ, ঘর থেকে ব্যবসা পর্যন্ত।",
    tags: ["Home", "Business", "Fiber", "Reseller"],
    clip: "/assets/world/scene-01.mp4",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    poster: "/assets/world/scene-01-poster.png",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    align: "left",
    scroll: 2.8,
    linger: 0.18,
    objectPosition: "50% 50%",
    mobileObjectPosition: "58% 50%",
  },
];
