
import React from "react"

const Newsletter = props => (
<div className="newsletter flex flex-col justify-center items-center py-12">
<div className="container flex flex-col justify-center items-center">
    <div className="newsletter-headline flex items-center">
      <svg className="mr-4" width="53" height="36" viewBox="0 0 53 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.7106 18.2685L52.3636 29.4285V6.63721L34.7106 18.2685Z" fill="white"/>
        <path d="M0 6.63721V29.4285L17.6531 18.2685L0 6.63721Z" fill="white"/>
        <path d="M49.0908 0H3.27269C1.6396 0 0.343599 1.21745 0.0981445 2.78509L26.1818 19.9702L52.2654 2.78509C52.0199 1.21745 50.7239 0 49.0908 0Z" fill="white"/>
        <path d="M31.7127 20.2452L27.0818 23.2954C26.8069 23.4754 26.496 23.5638 26.1818 23.5638C25.8676 23.5638 25.5567 23.4754 25.2818 23.2954L20.6509 20.2419L0.104736 33.2379C0.356736 34.7925 1.64619 36.0001 3.27273 36.0001H49.0909C50.7174 36.0001 52.0069 34.7925 52.2589 33.2379L31.7127 20.2452Z" fill="white"/>
      </svg>
      <h4 className="m0">Sign up & stay connected</h4>
    </div>
    <div className="newsletter-content items-center mt-4">
      <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
      <form class="form flex items-center">
        <input type="email" class="form__field" placeholder="Enter Your Email Address" />
        <button type="button" class="btn btn--secondary">Send</button>
      </form>
    </div>
  </div>
</div>
);

export default Newsletter