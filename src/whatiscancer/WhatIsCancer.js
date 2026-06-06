import React, { useState } from "react";
import "./whatIsCancer.css";
import PageBanner from "../components/PageBanner";

const tabs = [
  {
    title: "What causes cancer?",
questions: [
  {
    q: "Can cancer be inherited?",
    a: "One certain cause of cancer is genetic. The malfunction in the genetic programming can be inherited from parents, but genetic reasons contribute to only 5- 10% of all cancer cases around the world.",
  },
  {
    q: "How do most cancer mutations arise?",
    a: "In most cases, these mutations arise due to errors in cell division caused by environmental exposure or lifestyle factors.",
  },
  {
    q: "What are some common causes of cancer?",
    a: "Some common causes of cancer are: Tobacco and alcohol, Exposure to carcinogens, Obesity, Poor nutrition, Hormones, Sexually transmitted diseases, UV rays of the sun.",
  },
  {
    q: "Can environmental exposure contribute to cancer?",
    a: "In most cases, these mutations arise due to errors in cell division caused by environmental exposure or lifestyle factors.",
  },
  {
    q: "Can cancer be prevented?",
    a: "Most cases of cancer are preventable. In fact, researchers claim 50 % of cancer cases can be prevented by adopting a healthy lifestyle.",
  },
], 

  },
  {
    title: "How cancer spreads",
   questions: [
  {
    q: "What is common in all cancers?",
    a: "In all cancers there is one basic similarity – they occur due to a mutation in the DNA.",
  },
  {
    q: "Is every cancer the same?",
    a: "But each cancer in each patient is different from the other and that makes the treatment and management of cancer so complex.",
  },
  {
    q: "Can cancers behave differently?",
    a: "Cancers may be aggressive or slow in nature. They respond to treatment in different ways.",
  },
  {
    q: "Do all cancers have the same chances of recurrence and survival?",
    a: "Some cancers are more likely to recur than another. For some the fatality rate is high and for some the survival rate is high!",
  },
  {
    q: "How many types of cancer are there?",
    a: "Thus, depending on several such factors cancers are categorized into more than 200 types.",
  },
],
  },
  {
    title: "Metastasis of cancer",
    questions: [
  {
    q: "What is metastatic cancer?",
    a: "Some malignant cancers are aggressive and they have the capability to spread to distant organs of the body, these cancers are called metastatic cancer and the process by which these cells spread out is termed as metastasis.",
  },
  {
    q: "When does metastasis usually occur?",
    a: "Usually, this happens at a much later stage when the cancer grows beyond the site of origin.",
  },
  {
    q: "Why are metastasized cancers difficult to treat?",
    a: "Metastasized cancers are difficult to treat and in most cases of metastasized cancers the doctors target to inhibit the growth and relieve the symptoms.",
  },
  {
    q: "How does cancer spread to other parts of the body?",
    a: "As the cancerous cells continue to grow uncontrollably, some cells may travel to other parts of the body through blood stream or lymphatic system. These cells continue to grow resulting in new tumors. This is called metastasis of cancer.",
  },
  {
    q: "How are metastatic tumors named?",
    a: "Tumors formed in distant sites are also named after the area of origin. E.g. if breast cancer spreads to the lungs then cancer in the lung is called metastatic breast cancer, not lung cancer.",
  },
  {
    q: "Why is metastatic cancer named after the original cancer?",
    a: "This is because the metastatic cancer cells generally look the same as cells of original cancer. In almost all cases, they have similar molecular features and the cells replicate specific chromosome changes.",
  },
  {
    q: "Can treatment help in advanced metastatic cancer?",
    a: "Usually, metastasis occurs at an advanced stage of cancer. In some cases, treatment can prolong life expectancy, but in others, it helps to control the growth of cancer or relieve the symptoms caused by it.",
  },
],
  },
  {
    title: "Categorization of cancers",
questions: [
  {
    q: "How are cancers categorized?",
    a: "Depending on the site of origin, type of cells or nature of the cancer, cancer is categorized into several types.",
  },
  {
    q: "How are most cancers named?",
    a: "Most cancer types are named after the organs or tissues they arise from. For example, lung cancer begins in the cells of the lungs, pancreatic cancer arises from the cells of the pancreas.",
  },
  {
    q: "What is carcinoma?",
    a: "Carcinomas are the most common type of cancers. They begin in the cells of skin or tissues covering the surface of internal organs and glands. Most carcinomas form solid tumors.",
  },
  {
    q: "What is adenocarcinoma?",
    a: "Adenocarcinoma is cancer that originates in the epithelial cells of the body. Cancers of the breast, colon, and prostate are adenocarcinomas.",
  },
  {
    q: "What is basal cell carcinoma?",
    a: "Basal cell carcinoma begins in the basal (base) layer of the epidermis, the outer layer of skin.",
  },
  {
    q: "What is squamous cell carcinoma?",
    a: "Squamous cell carcinoma forms beneath the outer surface of the skin. These cells are also present in the stomach, intestines, lungs, bladder, and kidneys.",
  },
  {
    q: "What is transitional cell carcinoma?",
    a: "Transitional cell carcinoma occurs in the linings of the bladder, ureters, and part of the kidneys and a few other organs.",
  },
  {
    q: "What is sarcoma?",
    a: "Sarcomas begin in the cells that connect or supports the body. They are found in the cells of bone and soft tissues, like muscle, fat, blood vessels, lymph vessels, cartilage, tendons and ligaments.",
  },
  {
    q: "What is leukemia?",
    a: "Leukemia is the cancer of the blood. It forms in the cells of the blood-forming bone marrows. Leukemias do not form solid tumors but they are malignant and dangerous.",
  },
  {
    q: "What are the main types of leukemia?",
    a: "There are four main types of leukemia – acute lymphocytic leukemia, chronic lymphocytic leukemia, acute myeloid leukemia, and chronic myeloid leukemia.",
  },
  {
    q: "What is lymphoma?",
    a: "Lymphoma arises in the lymphatic system, it’s a network of vessels and glands that help fight infection. Lymphomas are of 2 types: Hodgkin Lymphoma and non-Hodgkin Lymphoma.",
  },
  {
    q: "What are germ cell tumors?",
    a: "Germ Cell Tumors – They begin in the cells of sperms or eggs. These tumors can be benign or malignant and can occur at any site.",
  },
  {
    q: "What are neuroendocrine tumors?",
    a: "Neuroendocrine Tumors – These tumors form in the cells that release hormones into the blood.",
  },
  {
    q: "What are carcinoid tumors?",
    a: "Carcinoid Tumors – these are slow-growing tumors usually found in the gastrointestinal system.",
  },
],
  },
  {
    title: "Effects of gene mutation",
    questions: [
  {
    q: "How can a mutation affect a cell?",
    a: "A malicious mutation in the gene can instruct the cell to Grow rapidly, Lose control over cell death, Make mistakes when repairing DNA errors.",
  },
  {
    q: "Are all tumors cancerous?",
    a: "Not all tumors are cancerous and neither all cancers form tumors.",
  },
  {
    q: "What are benign tumors?",
    a: "Tumors that do not spread or invade nearby tissues are referred as benign tumors.",
  },
  {
    q: "Are benign tumors dangerous?",
    a: "They are usually not life-threatening; they do not usually recur after removal and they never spread to other parts of the body.",
  },
  {
    q: "Can benign tumors grow large?",
    a: "It’s a hard mass of cells that can sometimes grow large enough to press against other body parts.",
  },
  {
    q: "What are malignant tumors?",
    a: "However, the malignant or cancerous tumors have the capability to grow and spread to distant organs in the body.",
  },
  {
    q: "Can malignant tumors be life-threatening?",
    a: "They can be aggressive, invasive and life-threatening.",
  },
  {
    q: "Can malignant cancer return after treatment?",
    a: "Malignant cancer cells can reappear in any part of the body even after complete treatment.",
  },
],
  },
  {
    title: "Am I at risk of cancer?",
    questions: [
  {
    q: "What are risk factors for cancer?",
    a: "Several risk factors of cancer are now identified. Scientists have labeled many substances as carcinogens (cancer-causing agents) and many are categorized as probable carcinogens.",
  },
  {
    q: "Does age affect cancer risk?",
    a: "Age – For most cancers, the risk increases with age. However, there are some cancers that are more common in children and adults.",
  },
  {
    q: "Can lifestyle increase cancer risk?",
    a: "Lifestyle – Unhealthy sedentary lifestyle is a major risk factor for cancer.",
  },
  {
    q: "Does family history play a role in cancer?",
    a: "Family history – Genetic mutations can be inherited from parents.",
  },
  {
    q: "Can medical conditions increase cancer risk?",
    a: "Medical conditions – Medical conditions like diabetes, PCOD, can increase cancer risk.",
  },
  {
    q: "Can environmental factors cause cancer?",
    a: "Environment – Carcinogens like asbestos, benzene, passive smoking etc. are risk factors for cancer.",
  },
],
  },
  {
    title: "Treatment of cancer",
questions: [
  {
    q: "How are cancers categorized?",
    a: "Depending on the site of origin, type of cells or nature of the cancer, cancer is categorized into several types.",
  },
  {
    q: "How are most cancers named?",
    a: "Most cancer types are named after the organs or tissues they arise from. For example, lung cancer begins in the cells of the lungs, pancreatic cancer arises from the cells of the pancreas.",
  },
  {
    q: "What is carcinoma?",
    a: "Carcinomas are the most common type of cancers. They begin in the cells of skin or tissues covering the surface of internal organs and glands. Most carcinomas form solid tumors.",
  },
  {
    q: "What is sarcoma?",
    a: "Sarcomas begin in the cells that connect or supports the body. They are found in the cells of bone and soft tissues, like muscle, fat, blood vessels, lymph vessels, cartilage, tendons and ligaments.",
  },
  {
    q: "What is leukemia?",
    a: "Leukemia is the cancer of the blood. It forms in the cells of the blood-forming bone marrows. Leukemias do not form solid tumors but they are malignant and dangerous.",
  },
  {
    q: "What are the main types of leukemia?",
    a: "There are four main types of leukemia – acute lymphocytic leukemia, chronic lymphocytic leukemia, acute myeloid leukemia, and chronic myeloid leukemia.",
  },
  {
    q: "What is lymphoma?",
    a: "Lymphoma arises in the lymphatic system, it’s a network of vessels and glands that help fight infection. Lymphomas are of 2 types: Hodgkin Lymphoma and non-Hodgkin Lymphoma.",
  },
  {
    q: "What are other types of tumors?",
    a: "Germ Cell Tumors – They begin in the cells of sperms or eggs. These tumors can be benign or malignant and can occur at any site. Neuroendocrine Tumors – These tumors form in the cells that release hormones into the blood. Carcinoid Tumors – these are slow-growing tumors usually found in the gastrointestinal system.",
  },
],
 },
  
];



const facts = [
  "Cancer is not a death sentence. Improvements in screening, treatment, and supportive care have helped many people live longer and healthier lives after a cancer diagnosis.",

  "Eating sugar does not make cancer grow faster. Although cancer cells use glucose, no studies have shown that consuming sugar causes cancer to worsen or spread.",

  "Cancer is not contagious. You cannot catch cancer from another person through close contact, sharing meals, or everyday interactions.",

  "Cancer surgery and biopsies do not usually cause cancer to spread. Surgeons follow specialized procedures designed to prevent cancer cells from spreading during treatment.",

  "Cell phone use has not been proven to cause cancer. Current evidence reviewed by researchers does not show that cell phones cause brain cancer or other cancers in humans.",

  "Artificial sweeteners have not been proven to cause cancer in people. Most studies examining their use have not shown an increased cancer risk in humans.",

  "Fluoridated drinking water has not been linked to cancer. Multiple scientific reviews have found no evidence of an association between fluoridated water and cancer risk.",

  "Underarm antiperspirants and deodorants have not been shown to cause breast cancer. Research has not found scientific evidence linking their use to breast cancer development.",

  "Cancer is a genetic disease, but most cancers are not inherited. Genetic changes that cause cancer can develop during a person's lifetime due to environmental exposures or errors in cell division."
];

const terms = [
  {
    title: "Benign",
    text: "A benign tumor is a non-cancerous growth that does not spread to nearby tissues or other parts of the body. However, some benign tumors may still require medical attention depending on their size and location.",
  },

  {
    title: "Malignant",
    text: "A malignant tumor is cancerous and can grow aggressively, invade nearby tissues and spread to different parts of the body through blood or lymphatic systems.",
  },

  {
    title: "Cancer",
    text: "Cancer occurs when abnormal cells in the body grow uncontrollably and disrupt the normal functioning of healthy tissues and organs.",
  },

  {
    title: "Metastasized",
    text: "Metastasized cancer refers to cancer that has spread from its original location to distant organs or tissues in the body.",
  },

  {
    title: "Biopsy",
    text: "A biopsy is a medical procedure in which a small sample of tissue or cells is removed and examined to detect cancerous or abnormal changes.",
  },

  {
    title: "Chemotherapy",
    text: "Chemotherapy is a cancer treatment that uses powerful drugs to destroy or slow the growth of cancer cells in the body.",
  },

  {
    title: "Oncologist",
    text: "An oncologist is a doctor who specializes in diagnosing, treating and managing cancer and related conditions.",
  },

  {
    title: "Radiation Therapy",
    text: "Radiation therapy uses high-energy radiation or x-rays to target and destroy cancer cells while minimizing damage to healthy tissues.",
  },

  {
    title: "Remission",
    text: "Remission means that the signs and symptoms of cancer have reduced significantly or temporarily disappeared after treatment.",
  },

];

function WhatIsCancer() {
  const [active, setActive] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="wic-page">
      <PageBanner
  image="/whatiscancer/whatiscancerbanner.png"
  title={
    <>
      What is <br />
      Cancer?
    </>
  }
  description=""
  alt="What is Cancer"
/>

      <section className="simple-section">
        <div className="wic-container">
          <h2>Understand Cancer in Simple Steps</h2>

          <p className="section-sub">
            Cancer is complex, but understanding the basics can help you fight
            it better.
          </p>

          <div className="steps-grid">

  <div className="step-card">
    <div className="step-icon">
      <img src="/whatiscancer/cancer_begins.png" alt="" />
    </div>

    <h3>How Cancer Begins</h3>

    <p>
      Normal cells grow and divide to form new cells.
      Changes or mutations can turn some cells abnormal
      and lead to cancer.
    </p>
  </div>

  <div className="step-card">
    <div className="step-icon">
      <img src="/whatiscancer/cancer_spread.png" alt="" />
    </div>

    <h3>How Cancer Spreads</h3>

    <p>
      Cancer cells can invade nearby tissues and spread
      through the blood or lymph to other parts of the body.
    </p>
  </div>

  <div className="step-card">
    <div className="step-icon">
      <img src="/whatiscancer/cancer_detection.png" alt="" />
    </div>

    <h3>Why Early Detection Matters</h3>

    <p>
      Finding cancer early, when it is small and localized,
      increases the chances of successful treatment.
    </p>
  </div>

</div>
        </div>
      </section>

      <section className="learn-section">
        <div className="wic-container">
          <h2>Learn More About Cancer</h2>

          <p className="section-sub">
            Explore the key aspects of cancer and how it affects the body.
          </p>

          <div className="learn-layout">
            <div className="left-tabs">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={active === index ? "active-tab" : ""}
                  onClick={() => {
                    setActive(index);
                    setOpenQuestion(null);
                  }}
                >
                  <span className="tab-icon">✣</span>
                  <span>{tab.title}</span>
                  <b>›</b>
                </button>
              ))}
            </div>

            <div className="right-content topic-card">
              <div className="topic-card-head">
                <div>
                  <h3>{tabs[active].title}</h3>
                  <p>{tabs[active].content}</p>
                </div>
              </div>

              <div className="topic-questions">
                {tabs[active].questions.map((item, index) => (
                  <div className="question-box" key={index}>
                    <button
                      className="question-title"
                      onClick={() =>
                        setOpenQuestion(openQuestion === index ? null : index)
                      }
                    >
                      <span>{item.q}</span>
                      <b>{openQuestion === index ? "−" : "+"}</b>
                    </button>

                    {openQuestion === index && (
                      <p className="question-answer">{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-section">
        <div className="wic-container">
          <h2>Facts About Cancer</h2>
          <div className="blue-line"></div>

<div className="facts-grid">
  {facts.map((fact, index) => (
    <div className="fact-card" key={index}>
      <div className="fact-image">
        <img src={`/facts/fact-${index + 1}.png`} alt="" />
      </div>

      <div className="fact-content">
        <p>{fact}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="terms-section">
        <div className="wic-container">
          <h2>Common Cancer Terms</h2>

          <p className="section-sub">
            Familiarize yourself with important terms used in cancer care.
          </p>

          <div className="terms-grid">
  {terms.map((term, index) => (
    <div className="term-card" key={index}>
      <div className="term-image">
        <img src={`/terms/term-${index + 1}.png`} alt="" />
      </div>

      <div className="term-content">
        <h3>{term.title}</h3>

        <p>{term.text}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
<section className="journey-section">

  <div className="wic-container">

    <div className="journey-box">

      <h2>Continue Your Journey</h2>

      <p className="section-sub">
        Learn how to reduce risk and detect cancer early.
      </p>

      <div className="journey-grid">

        {/* CARD 1 */}

        <div className="journey-card">

          <div className="journey-icon">
            <img
              src="/whatiscancer/prevention_img.png"
              alt=""
            />
          </div>

          <div>
            <h3>Prevention</h3>

            <p>
              Learn how to reduce your risk of cancer.
            </p>
          </div>

          <span>›</span>

        </div>

        {/* CARD 2 */}

        <div className="journey-card">

          <div className="journey-icon">
            <img
              src="/whatiscancer/disgnosis_img.png"
              alt=""
            />
          </div>

          <div>
            <h3>Early Diagnosis</h3>

            <p>
              Know the signs, symptoms and screening
              options.
            </p>
          </div>

          <span>›</span>

        </div>

      </div>

    </div>

  </div>

</section>
    </div>
  );
}

export default WhatIsCancer;