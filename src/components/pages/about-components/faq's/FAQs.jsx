import React, { useState } from "react";
import { AccBox } from "../accBox/AccBox";
import { H2 } from "../../../common/headings/h2/H2";

const FAQs = () => {
  return (
    <>
      <div className='pb-[160px] max-mobile:w-[375px] max-tablet:mx-auto max-mobile:text-center'>
        <H2 style={"text-center"}>FAQ's</H2>
        <AccBox
          items={[
            {
              title: "How do I download the app?",
              content:
                "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
            },
            {
              title: "Can I find a nearby Scoots?",
              content: "Content for section 2...",
            },
            {
              title: "Can I find a nearby Scoots?",
              content:
                " To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.2",
            },
          ]}
        />
        <AccBox
          items={[
            {
              title: "Should I wear a helmet?",
              content:
                "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
            },
            {
              title: "How about the rules & regulations?",
              content:
                "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and .",
            },
            {
              title: "What if I damage my Scoot?",
              content:
                "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We lou to be as safe as possible while Scooting.",
            },
          ]}
        />
      </div>
    </>
  );
};

export default FAQs;
