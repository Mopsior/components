export const getPlatform = () => {
    const platform = navigator.platform.toLowerCase()
    const userAgent = navigator.userAgent.toLowerCase()
  
    if (platform.includes('mac') || userAgent.includes('macintosh')) {
      return 'mac'
    }
    
    if (platform.includes('win') || userAgent.includes('windows')) {
      return 'windows'
    }
    
    return 'other'
  }