"use client";

import { Row, Text, Icon, useToast } from "@once-ui-system/core";

interface CopyLinkButtonProps {
  url: string;
}

export function CopyLinkButton({ url }: CopyLinkButtonProps) {
  const { addToast } = useToast();

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

  return (
    <Row 
      gap="8" 
      vertical="center" 
      padding="12" 
      radius="m" 
      border="neutral-alpha-weak"
      background="surface"
      style={{ 
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      className="copy-link-button"
      onClick={handleCopy}
    >
      <Icon name="openLink" size="s" onBackground="neutral-strong" />
      <Text variant="body-default-s" onBackground="neutral-strong">Copy Link</Text>
    </Row>
  );
}
