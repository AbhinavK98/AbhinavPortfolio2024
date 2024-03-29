import React, { useEffect } from 'react'
 
const BotPress = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "botId": "baa554d6-5cd4-4086-84a1-dfff591cf964",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "baa554d6-5cd4-4086-84a1-dfff591cf964",
        "webhookId": "5311a184-3830-4895-8ee7-bf75263c5e58",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "MES BOT",
        "frontendVersion": "v1",
        "theme": "prism",
        "themeColor": "#2563eb"
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default BotPress
