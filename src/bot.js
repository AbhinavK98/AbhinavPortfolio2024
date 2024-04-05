import React, { useEffect } from 'react'
 
const BotPress = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Composer’s Corner  A space where musical magic happens. Tune in for a blend of classic and modern melodies crafted by our talented composer.  Have a melody to share? Let’s create a masterpiece together.",
      "botConversationDescription": "Your go-to digital companion for all things query-able. Whether it's the mysteries of the cosmos or the intricacies of code, QueryPal is here to enlighten you with answers. No question too big, no query too small—QueryPal has got it all!  **Curiosity piqued?** Just type away and experience the magic of instant knowledge at your fingertips.",
      "botId": "baa554d6-5cd4-4086-84a1-dfff591cf964",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "baa554d6-5cd4-4086-84a1-dfff591cf964",
      "webhookId": "5311a184-3830-4895-8ee7-bf75263c5e58",
      "lazySocket": true,
      "themeName": "prism",
      "botName": "QueryPal",
      "avatarUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/927c26e2-e416-4b5b-9e35-cce3e7ea0bf5/dfeg6dn-ba8cd5cf-ff33-4bbb-8136-4272e47297c9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkyN2MyNmUyLWU0MTYtNGI1Yi05ZTM1LWNjZTNlN2VhMGJmNVwvZGZlZzZkbi1iYThjZDVjZi1mZjMzLTRiYmItODEzNi00MjcyZTQ3Mjk3YzkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ruX6OOIihIVeNMBaVFq2GiVm--Ssjgt4wFDWZZ8JCAs",
      "phoneNumber": "8240169006",
      "termsConditions": " By using QueryPal, you agree to these terms. You must be 13+ to use this bot and not use it for illegal activities. We own the content but you can use it according to these terms. We respect your privacy and won't share your information. We're not liable for damages from using this bot. These terms are subject to change and governed by [Jurisdiction] law.",
      "privacyPolicy": "**QueryPal Privacy Policy**  **1. Introduction** This policy outlines how QueryPal collects, uses, and protects your information.  **2. Data Collection** We collect data to improve our service. This may include usage data and any questions you ask.  **3. Data Use** We use your data to provide answers and improve",
      "emailAddress": "abhinavshaindilya94@gmail.com",
      "website": "https://abhinav-kumar.netlify.app",
      "stylesheet": "https://webchat-styler-css.botpress.app/prod/e483f900-3cc7-471a-b178-0f9668a0a86f/v88771/style.css",
      "frontendVersion": "v1",
      "showBotInfoPage": true,
      "enableConversationDeletion": true,
      "theme": "prism",
      "themeColor": "#2563eb"
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default BotPress;


