interface PostNumberProps {
  number: number;
  style?: 'badge' | 'minimal' | 'outline';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function PostNumber({ 
  number, 
  style = 'badge', 
  position = 'top-left' 
}: PostNumberProps) {
  const getPositionStyles = () => {
    const baseStyles = {
      position: 'absolute' as const,
      zIndex: 10,
    };

    switch (position) {
      case 'top-left':
        return { ...baseStyles, top: '16px', left: '16px' };
      case 'top-right':
        return { ...baseStyles, top: '16px', right: '16px' };
      case 'bottom-left':
        return { ...baseStyles, bottom: '16px', left: '16px' };
      case 'bottom-right':
        return { ...baseStyles, bottom: '16px', right: '16px' };
      default:
        return { ...baseStyles, top: '16px', left: '16px' };
    }
  };

  const getStyleVariant = () => {
    switch (style) {
      case 'badge':
        return {
          backgroundColor: 'var(--brand-strong)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: 'var(--radius-m)',
          fontSize: '12px',
          fontWeight: '500',
        };
      case 'minimal':
        return {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '2px 6px',
          borderRadius: 'var(--radius-s)',
          fontSize: '11px',
          fontWeight: '400',
        };
      case 'outline':
        return {
          backgroundColor: 'rgba(255, 255, 255, 0.23)',
          color: 'var(--brand-strong)',
          border: '1.5px solid var(--brand-strong)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-l)',
          fontSize: '12px',
          fontWeight: '600',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s ease',
        };
      default:
        return {
          backgroundColor: 'var(--brand-strong)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: 'var(--radius-m)',
          fontSize: '12px',
          fontWeight: '500',
        };
    }
  };

  return (
    <div style={{
      ...getPositionStyles(),
      ...getStyleVariant(),
    }}>
      #{number}
    </div>
  );
}
