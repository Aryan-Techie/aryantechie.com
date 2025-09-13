"use client";

import { Row, Text, Button, useToast, SmartLink, Icon, Column } from "@once-ui-system/core";
import { socialSharing } from "@/resources";

interface ShareSectionProps {
  title: string;
  url: string;
}

interface SocialPlatform {
  name: string;
  icon: string;
  label: string;
  generateUrl: (title: string, url: string) => string;
}

const socialPlatforms: Record<string, SocialPlatform> = {
  x: {
    name: "x",
    icon: "twitter",
    label: "X",
    generateUrl: (title, url) => 
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  linkedin: {
    name: "linkedin",
    icon: "linkedin",
    label: "LinkedIn",
    generateUrl: (title, url) => 
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  facebook: {
    name: "facebook",
    icon: "facebook",
    label: "Facebook",
    generateUrl: (title, url) => 
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  pinterest: {
    name: "pinterest",
    icon: "pinterest",
    label: "Pinterest",
    generateUrl: (title, url) => 
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
  },
  whatsapp: {
    name: "whatsapp",
    icon: "whatsapp",
    label: "WhatsApp",
    generateUrl: (title, url) => 
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  reddit: {
    name: "reddit",
    icon: "reddit",
    label: "Reddit",
    generateUrl: (title, url) => 
      `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  telegram: {
    name: "telegram",
    icon: "telegram",
    label: "Telegram",
    generateUrl: (title, url) => 
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  email: {
    name: "email",
    icon: "email",
    label: "Email",
    generateUrl: (title, url) => 
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this post: ${url}`)}`,
  },
};

export function ShareSection({ title, url }: ShareSectionProps) {
  const { addToast } = useToast();

  // Don't render if sharing is disabled
  if (!socialSharing.display) {
    return null;
  }

  const handleCopy = async () => {
    try {
      // Check if clipboard API is available
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        addToast({
          variant: "success",
          message: "Link copied to clipboard",
        });
      } else {
        // Fallback for browsers/devices that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          const successful = document.execCommand('copy');
          if (successful) {
            addToast({
              variant: "success",
              message: "Link copied to clipboard",
            });
          } else {
            throw new Error('execCommand failed');
          }
        } catch (fallbackErr) {
          // Final fallback - show the URL for manual copying
          addToast({
            variant: "success",
            message: `Copy this link: ${url}`,
          });
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Show the URL for manual copying as last resort
      addToast({
        variant: "success",
        message: `Copy this link: ${url}`,
      });
    }
  };

  // Get enabled platforms
  const enabledPlatforms = Object.entries(socialSharing.platforms)
    .filter(([_, enabled]) => enabled && _ !== 'copyLink')
    .map(([platformKey]) => ({ key: platformKey, ...socialPlatforms[platformKey] }))
    .filter(platform => platform.name); // Filter out platforms that don't exist in our definitions

  return (
    <Column fillWidth gap="16" marginTop="32" marginBottom="16" paddingX="s">
      <Text variant="label-default-m" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
        Share this post:
      </Text>
      <Row fillWidth center gap="8" wrap className="share-section-buttons">
        {enabledPlatforms.map((platform) => (
          <SmartLink
            key={platform.key}
            href={platform.generateUrl(title, url)}
            target="_blank"
          >
            <Button variant="secondary" size="s" label={platform.label} onClick={() => platform.generateUrl(title, url)} prefixIcon={platform.icon} />
          </SmartLink>
        ))}

        {socialSharing.platforms.copyLink && (
          <Button
            variant="secondary"
            size="s"
            onClick={handleCopy}
            prefixIcon="openLink"
            label="Copy Link"
          />
        )}
      </Row>
    </Column>
  );
}
