const cancersData = [
  
//adrenal//
{
  slug: "adrenal-cancer",

  title: "Adrenal Cancer",

  description:
"The adrenal glands are small hormone-producing glands located above each kidney.They help regulate important body functions including metabolism, blood pressure, stress response and growth.",
    
bannerImg: "/banners/adrenal.png",

  overview: {
    intro:
      "Adrenal cancer is a rare type of cancer that develops when abnormal cells in the adrenal glands grow uncontrollably and form a tumor. The adrenal glands sit above each kidney and produce hormones that help regulate several essential processes throughout the body. This cancer may affect one or both adrenal glands and can behave differently depending on the type of tumor involved.",

    description:
      "Because adrenal tumors can sometimes produce excess hormones, people may experience a wide range of symptoms or, in some cases, no symptoms at all. Some adrenal cancers are discovered unexpectedly during imaging tests performed for unrelated medical concerns. While adrenal cancer can be challenging to treat, early detection and appropriate treatment may offer the best chance for successful disease management.",
  },


typesStages: {
    stages: [
      {
        label: "I",
        title: "Stage I",
        text: "The tumor is 5 centimeters or smaller and has not spread outside the adrenal gland."
      },
      {
        label: "II",
        title: "Stage II",
        text: "The tumor is larger than 5 centimeters and has not spread outside the adrenal gland."
      },
      {
        label: "III",
        title: "Stage III",
        text: "Cancer is in the adrenal gland and has spread to nearby tissues or nearby lymph nodes."
      },
      {
        label: "IV",
        title: "Stage IV",
        text: "Cancer has spread to distant areas of the body, such as the lungs or liver."
      }
    ],

    types: [
      {
        img: "/overview/adrenal-acc.png",
        title: "Adrenocortical Carcinoma",
        text: "This is the most common type of adrenal cancer. It forms in the adrenal cortex, the outer layer that makes steroid hormones."
      },
      {
        img: "/overview/adrenal-neuroblastoma.png",
        title: "Neuroblastoma",
        text: "Neuroblastoma forms in nerve cells. About one-third develop in the adrenal medulla and usually affect infants and children under 10."
      },
      {
        img: "/overview/adrenal-pheochromocytoma.png",
        title: "Pheochromocytoma",
        text: "This type starts in the center of the adrenal medulla, usually in cells that produce adrenaline, which helps regulate blood pressure and heart rate."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/genetics.png",
        title: "Inherited Gene Mutation",
        text: "Some people inherit gene mutations from a biological parent, which may increase their risk of adrenal cancer."
      },
      {
        icon: "/icons/density.png",
        title: "Genetic Disorders",
        text: "Some adrenal tumors are linked to genetic disorders, especially in children."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/smoking.png",
        title: "Smoking",
        text: "Smoking is listed as a possible environmental risk factor for adrenal cancer."
      },
      {
        icon: "/icons/diet.png",
        title: "Chemical Exposure",
        text: "Exposure to certain chemicals, including asbestos and radon, may increase risk."
      },
      {
        icon: "/icons/radiation.png",
        title: "Prior Abdominal Radiation",
        text: "Previous radiation therapy to the abdomen may increase the risk of adrenal cancer."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Abdominal Pain",
        text: "Pain in the belly may occur when the tumor grows and presses on nearby organs.",
        img: "/symptoms/adrenal-abdominal.png"
      },
      {
        title: "Back Pain",
        text: "Back pain may happen as the tumor grows or affects nearby tissues.",
        img: "/symptoms/adrenal-back.png"
      },
      {
        title: "Belly Fullness",
        text: "Some people may feel fullness or pressure in the belly.",
        img: "/symptoms/adrenal-fullness.png"
      },
      {
        title: "Muscle Cramps",
        text: "Muscle cramps may occur as part of general adrenal cancer symptoms.",
        img: "/symptoms/adrenal-cramps.png"
      },
      {
        title: "Hormone Changes",
        text: "Extra hormones may cause symptoms such as high blood pressure, low potassium, weight changes, fast heartbeat, anxiety or panic attacks.",
        img: "/symptoms/adrenal-hormone.png"
      },
      {
        title: "Metastatic Symptoms",
        text: "If cancer spreads, symptoms may include nausea, vomiting, bloating, fatigue, fever, confusion or loss of appetite.",
        img: "/symptoms/adrenal-metastatic.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may perform a physical examination and look for signs related to adrenal cancer.",
        img: "/diagnosis/adrenal-exam.png"
      },
      {
        title: "Medical History",
        text: "Your provider may review your medical history, symptoms, risk factors and family history of cancer.",
        img: "/diagnosis/adrenal-history.png"
      },
      {
        title: "Blood Tests",
        text: "Blood tests may help check hormone levels and support the diagnosis.",
        img: "/diagnosis/adrenal-blood.png"
      },
      {
        title: "Urine Tests",
        text: "Urine tests may help detect abnormal hormone activity related to adrenal tumors.",
        img: "/diagnosis/adrenal-urine.png"
      },
      {
        title: "Imaging Tests",
        text: "Imaging tests such as CT or MRI may find adrenal tumors or help check whether cancer has spread.",
        img: "/diagnosis/adrenal-imaging.png"
      }
    ]
  },

    treatment: {
      options: [
        {
          title: "Surgery",
          text: "Surgery is usually recommended when cancer is in the adrenal gland or has spread only to very nearby tissues or lymph nodes.",
          img: "/treatment/adrenal-surgery.png"
      },
      {
        title: "Adrenalectomy",
        text: "Adrenalectomy removes the entire adrenal gland. If only one gland is removed, the other gland usually works properly.",
        img: "/treatment/adrenal-adrenalectomy.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be used after surgery to reduce recurrence risk or to treat areas where cancer has spread.",
        img: "/treatment/adrenal-radiation.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy uses medicines to kill cancer cells and may be used after surgery or when cancer has spread.",
        img: "/treatment/adrenal-chemo.png"
      },
      {
        title: "Mitotane",
        text: "Mitotane is the most common chemotherapy medicine used for cancer in the adrenal glands.",
        img: "/treatment/adrenal-mitotane.png"
      },
      {
        title: "Other Medicines",
        text: "Some medicines may reduce adrenal hormone production or block the effects of hormones released by the tumor.",
        img: "/treatment/adrenal-meds.png"
      }
    ],

    supportiveCare: [
      {
        title: "Hormone Support",
        text: "Helps manage symptoms caused by extra hormone production."
      },
      {
        title: "Symptom Relief",
        text: "Supportive medicines may help ease symptoms but do not shrink or kill cancer cells."
      },
      {
        title: "Follow-up Care",
        text: "Regular monitoring helps check response to treatment and watch for recurrence."
      },
      {
        title: "Emotional Support",
        text: "Support resources can help patients and families manage the emotional impact of diagnosis and treatment."
      }
    ]
  }
},

//anal//
{
  slug: "anal-cancer",

  title: "Anal Cancer",

  description:
  "The anus is the final part of the digestive tract where waste leaves the body. Muscles, nerves and surrounding tissues work together to control bowel movements and help maintain normal digestive function.",
    bannerImg: "/banners/anal.png",


  overview: {
    intro:
      "Anal cancer is a rare type of cancer that forms in the tissues lining the anal canal or the area surrounding the anus. It is often associated with infection from certain high-risk types of the human papillomavirus (HPV). Like many cancers, it begins when abnormal cells grow uncontrollably and form a tumor.",

    description:
      "Some people may not notice symptoms in the early stages, while others may experience changes such as rectal bleeding or alterations in bowel movements. Because these symptoms can resemble those of less serious conditions, diagnosis may sometimes be delayed. However, when anal cancer is detected and treated early, it can often be managed successfully.",
  },


  typesStages: {
    stages: [
      {
        label: "I",
        title: "Stage I",
        text: "The tumor is 2 centimeters or smaller."
      },
      {
        label: "II",
        title: "Stage II",
        text: "The tumor may be larger than 2 centimeters without cancer in the lymph nodes, or 5 centimeters or smaller with spread to nearby lymph nodes."
      },
      {
        label: "III",
        title: "Stage III",
        text: "The tumor may be larger than 5 centimeters, may have spread to nearby organs, or may have spread to nearby lymph nodes."
      },
      {
        label: "IV",
        title: "Stage IV",
        text: "Cancer has spread to distant organs, such as the liver or lungs."
      }
    ],

    types: [
      {
        img: "/overview/anal-scc.png",
        title: "Squamous Cell Carcinoma",
        text: "Most anal cancers are squamous cell carcinomas, which develop from the cells lining the anal canal or nearby skin."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/genetics.png",
        title: "HPV Infection",
        text: "Most anal cancers are linked to high-risk HPV infection."
      },
      {
        icon: "/icons/family.png",
        title: "HIV Infection",
        text: "HIV can weaken the immune system, making it harder for the body to fight viruses like HPV."
      },
      {
        icon: "/icons/density.png",
        title: "Weakened Immune System",
        text: "Conditions or medicines that weaken the immune system may increase the risk of anal cancer."
      },
      {
        icon: "/icons/reproductive.png",
        title: "Genital Cancers",
        text: "Having cancers that affect the genitals, especially vulvar, vaginal or cervical cancer, may increase risk."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/alcohol.png",
        title: "Unprotected Anal Sex",
        text: "Receiving unprotected anal sex may increase risk, and having many sexual partners can increase the chance of HPV exposure."
      },
      {
        icon: "/icons/smoking.png",
        title: "Smoking",
        text: "People who smoke are more likely to develop many types of cancer, including anal cancer."
      },
      {
        icon: "/icons/vaccine.png",
        title: "No HPV Vaccination",
        text: "Not being vaccinated against HPV may increase risk because the vaccine protects against HPV strains linked to cancer."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Rectal Bleeding",
        text: "Rectal bleeding or bloody stools are the most common symptoms of anal cancer.",
        img: "/symptoms/anal-bleeding.png"
      },
      {
        title: "Pain or Fullness",
        text: "Pain or a feeling of fullness may feel like a constant need to pass stool.",
        img: "/symptoms/anal-pain.png"
      },
      {
        title: "Bowel Changes",
        text: "Changes in how often you pass stool or how stools look, such as thinner stools, may occur.",
        img: "/symptoms/anal-bowel.png"
      },
      {
        title: "Lump or Mass",
        text: "A lump or mass may appear at the anal opening.",
        img: "/symptoms/anal-lump.png"
      },
      {
        title: "Itchy Anus",
        text: "Ongoing itching around the anus may be a symptom of anal cancer.",
        img: "/symptoms/anal-itching.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Symptom Review",
        text: "A healthcare provider may ask about symptoms, medical history, sexual activity and HPV vaccination history.",
        img: "/diagnosis/anal-history.png"
      },
      {
        title: "Physical Examination",
        text: "A physical exam may include a digital rectal exam to feel for lumps. Females may also need a pelvic exam.",
        img: "/diagnosis/anal-exam.png"
      },
      {
        title: "Endoscopy Tests",
        text: "Tests such as anoscopy or proctoscopy use a lighted scope to look inside the anus and rectum.",
        img: "/diagnosis/anal-anoscopy.png"
      },
      {
        title: "Imaging Tests",
        text: "CT, MRI or PET scans may help check for tumors or signs that cancer has spread.",
        img: "/diagnosis/anal-scan.png"
      },
      {
        title: "Biopsy",
        text: "Tissue samples from tumors or nearby lymph nodes may be tested in a lab for cancer cells.",
        img: "/diagnosis/anal-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Chemoradiation",
        text: "Most people receive chemotherapy and radiation together. This combination often treats anal cancer without surgery.",
        img: "/treatment/anal-chemorad.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy uses medicines to kill cancer cells and may be combined with radiation or immunotherapy.",
        img: "/treatment/anal-chemo.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy uses powerful X-rays to target tumors.",
        img: "/treatment/anal-radiation.png"
      },
      {
        title: "Surgery",
        text: "Surgery may remove small tumors or treat cancer that comes back or does not respond to chemoradiation.",
        img: "/treatment/anal-surgery.png"
      },
      {
        title: "Immunotherapy",
        text: "For advanced anal cancer, immunotherapy may help the immune system find and fight cancer cells.",
        img: "/treatment/anal-immuno.png"
      },
      {
        title: "Palliative Care",
        text: "Palliative care helps manage symptoms and treatment side effects and may be given alongside cancer treatment.",
        img: "/treatment/anal-palliative.png"
      }
    ],

    supportiveCare: [
      {
        title: "Side Effect Support",
        text: "Providers can help manage body changes caused by chemotherapy and radiation."
      },
      {
        title: "Colostomy Support",
        text: "If surgery requires a colostomy, the care team helps patients adjust to the change."
      },
      {
        title: "Follow-up Care",
        text: "Follow-up visits are important because the tumor may take several months to go away after chemoradiation."
      },
      {
        title: "Emotional Support",
        text: "Support can help patients discuss symptoms, treatment concerns and recovery."
      }
    ]
  }
},
//appendix//

{
  slug: "appendix-cancer",

  title: "Appendix Cancer",

description: 
    "The appendix is a small pouch attached to the large intestine. It is thought to play a role in supporting the immune system and maintaining healthy gut bacteria.",
    bannerImg: "/banners/appen.png",


  overview: {
    intro:
      "Appendix cancer, also known as appendiceal cancer, is a rare type of cancer that begins in the appendix, a small pouch attached to the large intestine. It develops when cells in the appendix change and grow out of control, forming a tumor. There are several types of appendix cancer, which are classified based on the type of cells where the cancer starts.",

    description:
      "Many people with appendix cancer do not experience symptoms in the early stages. In some cases, tumors are discovered during surgery for appendicitis or through imaging tests performed for unrelated medical conditions. Because the disease is uncommon and often develops without noticeable signs, diagnosis may occur unexpectedly. Treatment and outlook depend on the type of tumor, its size and whether it has spread beyond the appendix.",
  },


  typesStages: {
    stages: [
      {
        label: "I-IV",
        title: "Adenocarcinoma Staging",
        text: "Appendiceal adenocarcinomas are staged from one to four using the TNM system, where one is early-stage cancer and four is advanced cancer."
      },
      {
        label: "NET",
        title: "Neuroendocrine Tumor Staging",
        text: "Appendiceal neuroendocrine tumors are staged based on whether surgery can remove them completely and how abnormal the cells look under a microscope."
      }
    ],

    types: [
      {
        img: "/overview/appendix-adeno.png",
        title: "Appendiceal Adenocarcinoma",
        text: "Most appendix cancers are appendiceal adenocarcinomas. These cancers start in glandular tissue that lines organs."
      },
      {
        img: "/overview/appendix-mucinous.png",
        title: "Mucinous Adenocarcinoma",
        text: "This type starts in the appendix lining and releases mucin, a component of mucus. Most do not spread beyond the abdomen."
      },
      {
        img: "/overview/appendix-colonic.png",
        title: "Colonic-Type Adenocarcinoma",
        text: "This type develops near the bottom of the appendix and behaves a lot like colon cancer."
      },
      {
        img: "/overview/appendix-signet.png",
        title: "Signet Ring Cell Adenocarcinoma",
        text: "This rare type can form in the appendix. The cells store large amounts of mucin and look like signet rings under a microscope."
      },
      {
        img: "/overview/appendix-goblet.png",
        title: "Goblet Cell Adenocarcinoma",
        text: "This extremely rare type has features of both adenocarcinoma and neuroendocrine tumors."
      },
      {
        img: "/overview/appendix-net.png",
        title: "Neuroendocrine Tumor",
        text: "Appendiceal neuroendocrine tumors affect cells that receive nervous system signals and release hormones. Most grow slowly."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.png",
        title: "Age",
        text: "Appendix cancer can happen at any age, but it is more likely in people between 40 and 60. Most people diagnosed are in their 50s."
      },
      {
        icon: "/icons/reproductive.png",
        title: "Sex",
        text: "Females are more likely to develop neuroendocrine tumors in the appendix."
      },
      {
        icon: "/icons/density.png",
        title: "Medical History",
        text: "Certain conditions, including atrophic gastritis, pernicious anemia and Zollinger-Ellison syndrome, may increase risk."
      },
      {
        icon: "/icons/family.png",
        title: "Family History of Cancer",
        text: "A recent study suggests some people with appendix cancer may inherit genes that increase cancer risk, but more research is needed."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/smoking.png",
        title: "Smoking or Tobacco Use",
        text: "Smoking or using tobacco products may increase the chance of developing cancers, including appendix cancer."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Appendicitis",
        text: "Appendix cancer may cause appendicitis, which is inflammation or infection of the appendix.",
        img: "/symptoms/appendix-appendicitis.png"
      },
      {
        title: "Bloating",
        text: "Some people may feel fullness or tightness in the belly.",
        img: "/symptoms/appendix-bloating.png"
      },
      {
        title: "Fluid Buildup",
        text: "Fluid may build up in the abdomen, a condition called ascites.",
        img: "/symptoms/appendix-fluid.png"
      },
      {
        title: "Increased Waist Size",
        text: "An increase in waist size may happen when abdominal changes develop.",
        img: "/symptoms/appendix-waist.png"
      },
      {
        title: "Abdominal or Pelvic Pain",
        text: "Pain may occur in the abdomen or pelvis.",
        img: "/symptoms/appendix-pain.png"
      },
      {
        title: "Bowel Changes",
        text: "Changes in bowel habits, including diarrhea, may occur.",
        img: "/symptoms/appendix-bowel.png"
      },
      
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Appendectomy Discovery",
        text: "Diagnosis usually happens after an appendectomy, when the appendix is removed because appendicitis was suspected.",
        img: "/diagnosis/appendix-appendectomy.png"
      },
      {
        title: "Imaging Tests",
        text: "CT scans or MRI scans may show tumors and reveal signs of cancer spread.",
        img: "/diagnosis/appendix-imaging.png"
      },
      {
        title: "Laparoscopy",
        text: "A laparoscope is inserted through a small abdominal cut so a provider can view the appendix and nearby tissues.",
        img: "/diagnosis/appendix-lap.png"
      },
      {
        title: "Biopsy",
        text: "A tissue sample may be tested for cancer cells. If the appendix is difficult to sample, tissue may be taken from a nearby area.",
        img: "/diagnosis/appendix-bio.png"
      },
      {
        title: "Blood Tests",
        text: "If biopsy results are positive, blood tests may check specific protein levels to help understand how advanced the cancer is.",
        img: "/diagnosis/appendix-blood.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Appendectomy",
        text: "Removing the appendix may be enough to treat small tumors less than 1 or 2 centimeters.",
        img: "/treatment/appendix-appendectomy.png"
      },
      {
        title: "Hemicolectomy",
        text: "Larger or more aggressive tumors may need removal of part of the large intestine and nearby lymph nodes.",
        img: "/treatment/appendix-hemi.png"
      },
      {
        title: "Cytoreductive Surgery",
        text: "For cancer that has spread through the abdomen, surgery may remove as much of the tumor as possible.",
        img: "/treatment/appendix-cytoreductive.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may be used when cancer has spread beyond the appendix or when cancer cells may remain after surgery.",
        img: "/treatment/appendix-chemo.png"
      },
      {
        title: "HIPEC",
        text: "HIPEC heats chemotherapy drugs and circulates them inside the abdominal cavity, usually during surgery.",
        img: "/treatment/appendix-hipec.png"
      },
      {
        title: "Targeted Drug Therapy",
        text: "Targeted drug therapy focuses on specific genes or proteins that encourage cancer growth.",
        img: "/treatment/appendix-targeted.png"
      }
    ],

    supportiveCare: [
      {
        title: "Symptom Management",
        text: "Your provider may recommend ways to ease discomfort if symptoms change or worsen."
      },
      {
        title: "Side Effect Support",
        text: "Let your provider know about treatment side effects so they can suggest ways to manage them."
      },
      {
        title: "Palliative Care",
        text: "Palliative care professionals can help manage symptoms and support comfort during illness."
      },
      {
        title: "Emotional Support",
        text: "Support resources can help patients manage the uncertainty of a rare cancer diagnosis."
      }
    ]
  }
},

//astrocytoma//

{
  slug: "astrocytoma",

  title: "Astrocytoma",

  description:
    "Astrocytes are star-shaped cells found in the brain and spinal cord that provide supportive tissue within the central nervous system. They help support, protect and maintain the environment needed for nerve cells to function properly.",

  bannerImg: "/banners/astro.png",

  overview: {
    intro:
      "Astrocytoma is a tumor that develops from astrocytes, a type of glial cell found in the brain and spinal cord. These tumors are among the most common types of gliomas and can occur in different areas of the central nervous system. Astrocytomas vary in their behavior, ranging from slow-growing tumors to more aggressive forms.",

    description:
      "The condition can affect people of different ages and may cause symptoms depending on the tumor’s size and location. Healthcare providers classify astrocytomas into different grades to help determine treatment options and expected growth patterns. Early diagnosis and appropriate treatment can help manage symptoms and improve quality of life.",
  },




  typesStages: {
    stages: [
      {
        label: "I",
        title: "Grade I Astrocytoma",
        text: "These are the mildest astrocytomas and are usually noncancerous. They often grow slowly and may be treated successfully with surgery."
      },
      {
        label: "II",
        title: "Grade II Astrocytoma",
        text: "These tumors are cancerous and may spread into nearby brain tissue. Surgery alone may not always be enough."
      },
      {
        label: "III",
        title: "Grade III Astrocytoma",
        text: "These tumors are more aggressive than Grade II tumors and usually require radiation therapy and chemotherapy after surgery."
      },
      {
        label: "IV",
        title: "Grade IV Astrocytoma",
        text: "These are glioblastomas, the most aggressive astrocytomas. They grow and spread quickly within the brain."
      }
    ],

    types: [
      {
        img: "/overview/astro-pilocytic.png",
        title: "Pilocytic Astrocytoma",
        text: "This is the most common Grade I astrocytoma. It grows slowly, usually does not spread and often develops in the cerebellum."
      },
      {
        img: "/overview/astro-pleomorphic.png",
        title: "Pleomorphic Xanthoastrocytoma",
        text: "This Grade I tumor usually grows slowly, often develops in the temporal lobe and may cause seizures."
      },
      {
        img: "/overview/astro-sega.png",
        title: "Subependymal Giant Cell Astrocytoma",
        text: "This Grade I tumor mainly affects children with tuberous sclerosis and grows inside fluid-filled spaces in the brain."
      },
      {
        img: "/overview/astro-grade2.png",
        title: "Grade II Astrocytoma",
        text: "This cancerous astrocytoma tends to spread into nearby brain tissue, so surgery alone may not always be enough."
      },
      {
        img: "/overview/astro-grade3.png",
        title: "Grade III Astrocytoma",
        text: "This cancerous tumor is more aggressive than Grade II and often develops as progression from a lower-grade tumor."
      },
      {
        img: "/overview/astro-glioblastoma.png",
        title: "Glioblastoma",
        text: "Glioblastoma is a Grade IV astrocytoma. It is the most common and most aggressive form of astrocytoma."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/radiation.png",
        title: "Radiation Exposure",
        text: "Exposure to ionizing radiation, including radiation therapy, may increase the risk of developing astrocytoma."
      },
      {
        icon: "/icons/genetics.png",
        title: "IDH1 Gene Mutation",
        text: "A mutation in the IDH1 gene contributes significantly to the development of low-grade astrocytomas."
      },
      {
        icon: "/icons/family.png",
        title: "Li-Fraumeni Syndrome",
        text: "This inherited condition involves changes in the TP53 gene and may increase the risk of several cancers, including astrocytoma."
      },
      {
        icon: "/icons/density.png",
        title: "Neurofibromatosis Type 1",
        text: "NF1 causes abnormal cell growth and may be linked with early-onset astrocytomas and other nerve-related tumors."
      },
      {
        icon: "/icons/reproductive.png",
        title: "Tuberous Sclerosis",
        text: "This genetic condition can cause tumors throughout the body and is linked with subependymal giant cell astrocytomas."
      },
      {
        icon: "/icons/age.png",
        title: "Turcot Syndrome",
        text: "Turcot syndrome involves gene changes that may cause intestinal polyps and brain or spinal cord tumors."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/none.png",
        title: "No Lifestyle Risk Factors",
        text: "This page does not identify clearly established lifestyle-related risk factors for astrocytoma."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Seizures",
        text: "Seizures may occur when the tumor irritates brain tissue or affects electrical activity in the brain.",
        img: "/symptoms/astro-seizure.png"
      },
      {
        title: "Mental Status Changes",
        text: "Some people may develop confusion, delirium, dementia-like changes or other changes in mental status.",
        img: "/symptoms/astro-mental.png"
      },
      {
        title: "Memory Loss",
        text: "Memory problems may appear when the tumor affects areas of the brain involved in thinking and recall.",
        img: "/symptoms/astro-memory.png"
      },


      {
        title: "Vision Problems",
        text: "Vision changes can occur when the tumor affects brain areas involved in sight.",
        img: "/symptoms/astro-vision.png"
      },
      {
        title: "Speech Problems",
        text: "Trouble speaking or aphasia may develop if the tumor affects language-related brain areas.",
        img: "/symptoms/astro-speech.png"
      },
      {
        title: "Movement Issues",
        text: "Weakness, abnormal reflexes or movement problems may happen when motor areas are affected.",
        img: "/symptoms/astro-movement.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Symptom Review",
        text: "A provider may ask about symptoms and medical history because astrocytoma symptoms can resemble other neurological conditions.",
        img: "/diagnosis/astro-symptoms.png"
      },
      {
        title: "Neurological Exam",
        text: "A neurological exam helps check brain and spinal cord function and may suggest where the problem is located.",
        img: "/diagnosis/astro-neuro.png"
      },
      {
        title: "MRI Scan",
        text: "MRI is the best imaging test for finding and diagnosing astrocytoma.",
        img: "/diagnosis/astro-mri.png"
      },
      {
        title: "CT Scan",
        text: "CT scan may be used if MRI is not possible, such as in people with certain implants.",
        img: "/diagnosis/astro-ct.png"
      },
      {
        title: "Biopsy or Resection",
        text: "If imaging shows an abnormal area, a biopsy or tumor removal may be recommended to confirm the diagnosis.",
        img: "/diagnosis/astro-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "Surgery is usually the first step and may remove as much tumor as safely possible while also providing tissue for testing.",
        img: "/treatment/astro-surgery.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be used after surgery, especially for higher-grade astrocytomas.",
        img: "/treatment/astro-radiation.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may be used to destroy tumor cells or stop them from multiplying.",
        img: "/treatment/astro-chemo.png"
      },
      {
        title: "Temozolomide",
        text: "Temozolomide is a chemotherapy medicine often used as first-line adjuvant treatment for Grade III and Grade IV astrocytomas.",
        img: "/treatment/astro-temozolomide.png"
      },
      {
        title: "Bevacizumab",
        text: "Bevacizumab may be used for recurrent glioblastomas to reduce swelling and help improve symptoms.",
        img: "/treatment/astro-bevacizumab.png"
      },
      {
        title: "Tumor-Treating Fields",
        text: "Tumor-treating fields use a wearable device that creates electrical fields to help delay tumor growth in glioblastoma.",
        img: "/treatment/astro-ttf.png"
      }
    ],

    supportiveCare: [
      {
        title: "Specialist Care",
        text: "Care may involve neurologists, neurosurgeons, radiation oncologists and medical oncologists."
      },
      {
        title: "Symptom Management",
        text: "Support may help reduce seizures, headaches, swelling or neurological symptoms."
      },
      {
        title: "Follow-up Monitoring",
        text: "Regular follow-up helps check whether treatment is working or whether the tumor has returned."
      },
      {
        title: "Emotional Support",
        text: "Supportive care can help patients and families cope with the stress of a brain tumor diagnosis."
      }
    ]
  }
},

//basal caell//
{
  slug: "basal-cell-carcinoma",

  title: "Basal Cell Carcinoma",

  description:
    "Basal cells are microscopic cells found in the lowest part of the epidermis, the outer layer of the skin. They create new skin cells and help replace older cells that naturally reach the skin’s surface and shed away.",
     bannerImg: "/banners/bcc.png",

  overview: {
    intro:
      "Basal cell carcinoma (BCC) is a type of skin cancer that begins in the basal cells of the skin. It typically develops in the epidermis and often appears as a small bump, lesion or patch that gradually grows over time. BCC is the most common type of skin cancer and is most often found on areas of the body that receive frequent sun exposure.",

    description:
      "This cancer usually grows slowly and is often detected as a noticeable change on the skin. While it rarely spreads to other parts of the body, it can continue to grow and damage nearby tissue if left untreated. Early diagnosis and treatment generally lead to very good outcomes and can help prevent further complications.",
  },


  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/bcc-nodular.png",
        title: "Nodular BCC",
        text: "This is the most common type of BCC. It may look like a round pimple with visible blood vessels around it."
      },
      {
        img: "/overview/bcc-superficial.png",
        title: "Superficial Spreading BCC",
        text: "This type causes small, shallow marks that are slightly lighter than the surrounding skin. They often form on the torso, arms or legs."
      },
      {
        img: "/overview/bcc-sclerosing.png",
        title: "Sclerosing BCC",
        text: "Also called morpheaform BCC, this type may look like a scar that slowly expands over time. It is most common on the face."
      },
      {
        img: "/overview/bcc-pigmented.png",
        title: "Pigmented BCC",
        text: "This rare type causes hyperpigmentation, where an area of skin becomes darker than the surrounding skin."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.png",
        title: "Age Over 50",
        text: "Basal cell carcinoma occurs more often in people older than 50."
      },
      {
        icon: "/icons/density.png",
        title: "Fair Skin and Light Eyes",
        text: "People with fair skin and light eyes are more likely to develop BCC."
      },
      {
        icon: "/icons/family.png",
        title: "Previous BCC",
        text: "People who have had BCC once have a higher risk of developing another nonmelanoma skin cancer in the future."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/uv.png",
        title: "UV Exposure",
        text: "Too much exposure to ultraviolet rays from sunlight or tanning beds can damage skin cell DNA and lead to basal cell carcinoma."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Lump or Bump",
        text: "BCC may appear as a lump, bump, pimple, scab or scaly lesion on the skin.",
        img: "/symptoms/bcc-bump.png"
      },
      {
        title: "Shiny or Skin-Colored Growth",
        text: "The growth may look shiny, slightly see-through or close to the color of your normal skin.",
        img: "/symptoms/bcc-shiny.png"
      },
      {
        title: "Color Changes",
        text: "The lesion may appear white to pink, brown to black or black to blue.",
        img: "/symptoms/bcc-color.png"
      },
      {
        title: "Visible Blood Vessels",
        text: "Some lesions may look shinier than nearby skin and may show tiny visible blood vessels.",
        img: "/symptoms/bcc-vessels.png"
      },
      {
        title: "Itching or Pain",
        text: "The affected area may become itchy or painful.",
        img: "/symptoms/bcc-itch.png"
      },
      {
        title: "Bleeding or Oozing",
        text: "The lesion may form an ulcer that oozes clear fluid or bleeds when touched.",
        img: "/symptoms/bcc-bleeding.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Skin Examination",
        text: "A healthcare provider may examine the skin and look closely at the lump, bump or lesion.",
        img: "/diagnosis/bcc-exam.png"
      },
      {
        title: "Medical History",
        text: "Your provider may ask about your symptoms and medical history.",
        img: "/diagnosis/bcc-history.png"
      },
      {
        title: "Skin Biopsy",
        text: "A biopsy removes a small sample of the affected skin so it can be examined under a microscope.",
        img: "/diagnosis/bcc-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Excision",
        text: "A provider may remove the cancerous lesion and a small amount of surrounding healthy skin.",
        img: "/treatment/bcc-exc.png"
      },
      {
        title: "Mohs Surgery",
        text: "Mohs surgery removes one layer of skin at a time and checks each layer until no cancer cells remain.",
        img: "/treatment/bcc-mohs.png"
      },
      {
        title: "Electrodesiccation and Curettage",
        text: "This treatment scrapes the lesion and uses heat to destroy remaining cancer cells.",
        img: "/treatment/bcc-cure.png"
      },
      {
        title: "Cryosurgery",
        text: "Cryosurgery freezes the cancerous lesion to destroy cancer cells.",
        img: "/treatment/bcc-cryo.png"
      },
      {
        title: "Topical Chemotherapy",
        text: "Medicine applied directly to the skin may be used for some cases of basal cell carcinoma.",
        img: "/treatment/bcc-topi.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be used in certain cases when surgery is not the best option.",
        img: "/treatment/bcc-radiation.png"
      }
    ],

    supportiveCare: [
      {
        title: "Skin Monitoring",
        text: "Regular skin checks help detect new or returning lesions early."
      },
      {
        title: "Sun Protection",
        text: "Protecting skin from UV exposure helps lower the chance of future skin cancers."
      },
      {
        title: "Wound Care",
        text: "Proper care after removal helps the skin heal and reduces infection risk."
      },
      {
        title: "Follow-up Care",
        text: "Follow-up visits help monitor treatment results and long-term skin health."
      }
    ]
  }
},

//bileduct cancer//

{
  slug: "bile-duct-cancer",

  title: "Bile Duct Cancer",

  description:
    "Bile ducts are thin tubes that carry bile from the liver to the small intestine. Bile helps break down fats during digestion and plays an important role in processing waste from the body.",

  bannerImg: "/banners/bile.png",

  overview: {
    intro:
      "Bile duct cancer, also known as cholangiocarcinoma, is a rare cancer that begins in the bile ducts. It often develops without causing noticeable symptoms in its early stages and may grow or spread before it is detected. The disease can occur in different parts of the bile duct system, depending on where the abnormal cells begin to grow.",

    description:
      "Because bile duct cancer frequently develops quietly, many people are diagnosed only after symptoms appear or the cancer has progressed. Early detection can be challenging, but timely evaluation and treatment are important for managing the disease. Treatment options depend on factors such as the cancer’s location, extent and overall health of the individual.",
  },


  typesStages: {
    stages: [

  {
    label: "i",
    title: "Staging Systems Vary",
    text: "Staging systems vary depending on the type of cholangiocarcinoma."
  }
    ],

    types: [
      {
        img: "/overview/bile-intrahepatic.png",
        title: "Intrahepatic Cholangiocarcinoma",
        text: "This type forms in the bile ducts inside the liver."
      },
      {
        img: "/overview/bile-perihilar.png",
        title: "Perihilar Cholangiocarcinoma",
        text: "This type starts just outside the liver where smaller bile ducts join to form the common hepatic duct. It is the most common form."
      },
      {
        img: "/overview/bile-distal.png",
        title: "Distal Cholangiocarcinoma",
        text: "This type starts outside the liver in the bile ducts closer to the small intestine."
      },
      {
        img: "/overview/bile-gallbladder.png",
        title: "Gallbladder Cancer",
        text: "This type starts in the gallbladder, which is also made of bile duct cells."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/density.png",
        title: "Primary Sclerosing Cholangitis",
        text: "Scarring in the bile ducts, called primary sclerosing cholangitis, may increase risk."
      },
      {
        icon: "/icons/reproductive.png",
        title: "Bile Duct Stones or Cysts",
        text: "Bile duct stones or cysts may make someone more likely to develop cholangiocarcinoma."
      },
      {
        icon: "/icons/family.png",
        title: "Inflammatory Bowel Disease",
        text: "Inflammatory bowel disease, especially ulcerative colitis, may increase risk."
      },
      {
        icon: "/icons/genetics.png",
        title: "Genetic Conditions",
        text: "Genetic conditions such as Caroli disease, Lynch syndrome and cystic fibrosis may increase risk."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/diet.png",
        title: "Infections",
        text: "Certain infections, including clonorchiasis and hepatitis B or C, may increase risk."
      },
      {
        icon: "/icons/alcohol.png",
        title: "Liver Disease",
        text: "Liver disease, including types related to alcohol use, obesity and diabetes, may increase risk."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Abdominal Pain",
        text: "Pain in the belly may occur when the disease becomes advanced.",
        img: "/symptoms/bile-pain.png"
      },
      {
        title: "Fever",
        text: "Some people may develop fever as a symptom.",
        img: "/symptoms/bile-fever.png"
      },
      {
        title: "Fatigue",
        text: "Tiredness or fatigue may occur with cholangiocarcinoma.",
        img: "/symptoms/bile-fatigue.png"
      },
      {
        title: "Itchy Skin",
        text: "Itchy skin may happen when bile flow is blocked.",
        img: "/symptoms/bile-itching.png"
      },
      {
        title: "Dark Urine or Pale Stools",
        text: "Dark urine or pale stools may appear when bile drainage is affected.",
        img: "/symptoms/bile-urine.png"
      },
      {
        title: "Jaundice",
        text: "Yellowing of the skin or whites of the eyes may be a sign of jaundice.",
        img: "/symptoms/bile-jaundice.png"
      },
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Blood Tests",
        text: "Blood tests may show high enzyme levels or tumor markers such as CA 19-9 or CEA.",
        img: "/diagnosis/bile-blood.png"
      },
      {
        title: "Imaging Tests",
        text: "Imaging tests may include ultrasound, CT scan, MRI and MRCP to help see tumors and bile ducts.",
        img: "/diagnosis/bile-scan.png"
      },
      {
        title: "Endoscopic Ultrasound",
        text: "Endoscopic ultrasound uses a scope with a camera to view the bile ducts more closely.",
        img: "/diagnosis/bile-endo.png"
      },
      {
        title: "ERCP",
        text: "ERCP uses a specialized scope and dye to create X-ray images of the bile ducts and may help drain a blockage.",
        img: "/diagnosis/bile-ercp.png"
      },
      {
        title: "PTC",
        text: "Percutaneous transhepatic cholangiography may place a drain in blocked bile ducts if ERCP is not an option.",
        img: "/diagnosis/bile-ptc.png"
      },
      {
        title: "Biopsy",
        text: "A tissue sample may be tested for cancer cells.",
        img: "/diagnosis/bile-biopsy.png"
      },
    
    ]
  },

  treatment: {
  options: [
    {
      title: "Surgery",
      text: "Surgery is the main treatment for earlier-stage disease when the tumor can be removed safely.",
      img: "/treatment/bile-surgery.png"
    },
    {
      title: "Liver Transplant",
      text: "A liver transplant may be a possible cure for some types of bile duct cancer.",
      img: "/treatment/bile-transplant.png"
    },
    {
      title: "Chemotherapy",
      text: "Chemotherapy sends medicines through the body to destroy cancer cells and may be used after surgery or to shrink tumors.",
      img: "/treatment/bile-chemo.png"
    },
    {
      title: "Radiation Therapy",
      text: "Radiation therapy uses X-rays to kill cancer cells or shrink tumors and may be used with chemotherapy.",
      img: "/treatment/bile-radiation.png"
    },
    {
      title: "Targeted Therapy",
      text: "Targeted therapy may destroy cancer cells with certain gene changes such as FGFR2, HER2 or BRAF.",
      img: "/treatment/bile-targeted.png"
    },
    {
      title: "Immunotherapy",
      text: "Immunotherapy helps the immune system fight cancer cells.",
      img: "/treatment/bile-immuno.png"
    }
  ],

    supportiveCare: [
      {
        title: "Palliative Care",
        text: "Palliative care helps manage physical and emotional challenges during illness."
      },
      {
        title: "Bile Duct Drainage",
        text: "Drainage procedures may help relieve symptoms caused by blocked bile ducts."
      },
      {
        title: "Symptom Relief",
        text: "Supportive care may help manage symptoms and treatment side effects."
      },
      {
        title: "Ongoing Monitoring",
        text: "Your provider will monitor you to ensure you get the treatment you need if cancer returns or progresses."
      }
    ]
  }
},

//bladder cancer//

{
  slug: "bladder-cancer",

  title: "Bladder Cancer",

  description:
    "The bladder is a hollow organ in the urinary system that stores urine before it leaves the body. It works with the kidneys, ureters and urethra to help remove waste and maintain normal urinary function.",

  bannerImg: "/banners/bladder.png",

  overview: {
    intro:
      "Bladder cancer develops when abnormal cells in the lining of the bladder grow uncontrollably and form a tumor. It is one of the most common cancers affecting the urinary system and most often begins in the cells that line the inside of the bladder.",

    description:
      "The condition can occur in different forms depending on how deeply the cancer has grown into the bladder wall. Some cases remain limited to the bladder lining, while others may spread into nearby tissues or other parts of the body. Early detection and appropriate treatment can help improve outcomes and reduce the risk of disease progression.",
  },


  typesStages: {
    stages: [
  {
    label: "0A",
    title: "Stage 0A",
    text: "Cancer is only on the surface of the bladder lining and has not grown into deeper tissues."
  },
  {
    label: "0IS",
    title: "Stage 0is",
    text: "Also called carcinoma in situ, cancer is present in the bladder lining but has not spread into deeper tissues."
  },
  {
    label: "I",
    title: "Stage I",
    text: "Cancer has grown into the connective tissue beneath the bladder lining but has not reached the muscle layer."
  },
  {
    label: "II",
    title: "Stage II",
    text: "Cancer has spread into the muscle layer of the bladder wall."
  },
  {
    label: "III",
    title: "Stage III",
    text: "Cancer has spread beyond the bladder into nearby tissues or organs."
  },
  {
    label: "IV",
    title: "Stage IV",
    text: "Cancer has spread to lymph nodes or distant parts of the body."
  }

    ],

    types: [
      {
        img: "/overview/bladder-trans.png",
        title: "Transitional Cell Carcinoma",
        text: "This is the most common type of bladder cancer. It starts in transitional cells in the inner lining of the bladder wall."
      },
      {
        img: "/overview/bladder-squ.png",
        title: "Squamous Cell Carcinoma",
        text: "This type starts in thin, flat squamous cells and is often linked with long-term bladder inflammation or irritation."
      },
      {
        img: "/overview/bladder-adeno.png",
        title: "Adenocarcinoma",
        text: "This rare type starts in gland cells that line organs, including the bladder."
      },
      {
        img: "/overview/bladder-small.png",
        title: "Small Cell Carcinoma",
        text: "This extremely rare bladder cancer affects only a small number of people."
      },
      {
        img: "/overview/bladder-sarc.png",
        title: "Sarcoma",
        text: "Rarely, soft tissue sarcomas can start in the muscle cells of the bladder."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/radiation.png",
        title: "Radiation Exposure",
        text: "Radiation therapy used to treat cancer may increase the risk of bladder cancer."
      },
      {
        icon: "/icons/reproductive.png",
        title: "Certain Chemotherapy Drugs",
        text: "Some chemotherapy medicines may increase the risk of bladder cancer."
      },
      {
        icon: "/icons/density.png",
        title: "Past Bladder Cancer",
        text: "People who have had bladder cancer before have a higher risk of developing new or recurrent bladder tumors."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/smoking.png",
        title: "Cigarette Smoke",
        text: "Smoking cigarettes more than doubles the risk of bladder cancer. Pipe, cigar and secondhand smoke exposure may also increase risk."
      },
      {
        icon: "/icons/diet.png",
        title: "Chemical Exposure",
        text: "Working with certain chemicals used in dyes, rubber, leather, paint, textiles or hairdressing supplies may increase risk."
      },
      {
        icon: "/icons/bladder.png",
        title: "Frequent Bladder Infections",
        text: "Frequent bladder infections, bladder stones or other urinary tract diseases may increase the risk of squamous cell carcinoma."
      },
      {
        icon: "/icons/med.png",
        title: "Chronic Catheter Use",
        text: "Long-term need for a catheter in the bladder may increase the risk of squamous cell carcinoma."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Blood in Urine",
        text: "Blood in urine is the most common symptom of bladder cancer.",
        img: "/symptoms/bladder-blood.png"
      },
      {
        title: "Painful Urination",
        text: "Pain, burning or stinging may happen when urinating.",
        img: "/symptoms/bladder-pain.png"
      },
      {
        title: "Frequent Urination",
        text: "Needing to urinate many times in a 24-hour period may occur.",
        img: "/symptoms/bladder-freq.png"
      },
      {
        title: "Trouble Urinating",
        text: "The urine flow may start and stop or may not be as strong as usual.",
        img: "/symptoms/bladder-flow.png"
      },
      {
        title: "Persistent Bladder Infections",
        text: "Bladder infections that do not go away after antibiotics should be checked by a healthcare provider.",
        img: "/symptoms/bladder-infec.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Urinalysis",
        text: "Urinalysis checks urine and may help rule out infection.",
        img: "/diagnosis/bladder-uri.png"
      },
      {
        title: "Cystoscopy",
        text: "Cystoscopy uses a lighted tube to view the inside of the bladder and urethra. Providers may also take tissue samples during this test.",
        img: "/diagnosis/bladder-cysto.png"
      },
      {
        title: "TURBT",
        text: "Transurethral resection of bladder tumor removes bladder tumors for additional testing and may also treat tumors before they invade muscle.",
        img: "/diagnosis/bladder-tur.png"
      },
      {
        title: "MRI Scan",
        text: "MRI uses magnets, radio waves and a computer to create detailed bladder images.",
        img: "/diagnosis/bladder-mri.png"
      },
      {
        title: "CT Scan",
        text: "CT scan may check whether cancer has spread outside the bladder.",
        img: "/diagnosis/bladder-ct.png"
      },
      {
        title: "Chest X-ray or Bone Scan",
        text: "These tests may check for signs that bladder cancer has spread to the lungs or bones.",
        img: "/diagnosis/bladder-spr.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "Surgery is a common bladder cancer treatment. Providers choose the surgical option based on the cancer stage.",
        img: "/treatment/bladder-sur.png"
      },
      {
        title: "TURBT",
        text: "TURBT can treat bladder cancer that has not spread by removing the tumor or burning it away.",
        img: "/treatment/bladder-tur.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy uses cancer-killing medicines. Intravesical therapy may deliver medicine directly into the bladder.",
        img: "/treatment/bladder-chemo.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy helps the immune system attack cancer cells and may include BCG or PD-1/PD-L1 inhibitor medicines.",
        img: "/treatment/bladder-imm.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be used as an alternative to bladder removal surgery and may be combined with TURBT and chemotherapy.",
        img: "/treatment/bladder-radia.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy focuses on genetic changes that help cancer cells grow, such as FGFR gene changes.",
        img: "/treatment/bladder-tar.png"
      }
    ],

    supportiveCare: [
      {
        title: "Regular Follow-up",
        text: "Regular checkups are important because bladder cancer often comes back."
      },
      {
        title: "Urinary Diversion Support",
        text: "Some people need support after surgery that changes how urine leaves the body."
      },
      {
        title: "Diet and Fiber Support",
        text: "A heart-healthy, fiber-rich diet may support recovery and help with digestive issues after treatment."
      },
      {
        title: "Exercise and Connection",
        text: "Gentle exercise may help manage stress, and connecting with others may help people cope with recurrence concerns."
      }
    ]
  }
},

//bone cancer//

{
  slug: "bone-cancer",

  title: "Bone Cancer",

  description:
    "Bones provide the body with structure, protect vital organs and work together with muscles to support movement. They also store important minerals and contain bone marrow, which helps produce blood cells.",

  bannerImg: "/banners/bone.png",

  overview: {
    intro:
      "Bone cancer occurs when abnormal cells grow uncontrollably within a bone and form a tumor. While many tumors that affect bones spread from cancers that start elsewhere in the body, primary bone cancer begins directly in the bone itself. Several different types of primary bone cancer can develop depending on the cells involved.",

    description:
      "Bone cancer can affect people of different ages and may develop in various bones throughout the body. Because there are multiple forms of the disease, treatment approaches and outcomes can vary. Early diagnosis and appropriate treatment play an important role in managing the condition and improving quality of life.",
  },


  typesStages: {
    stages: [
      {
        label: "I",
        title: "Stage I",
        text: "The tumor is low-grade and cancer has not spread."
      },
      {
        label: "II",
        title: "Stage II",
        text: "The cancer has not spread, but the tumor is high-grade."
      },
      {
        label: "III",
        title: "Stage III",
        text: "The tumor is high-grade and cancer has spread to other areas within the same bone."
      },
      {
        label: "IV",
        title: "Stage IV",
        text: "Cancer has spread from the bone to other areas of the body, such as the lungs or liver."
      }
    ],

    types: [
      {
        img: "/overview/bone-oste.png",
        title: "Osteosarcoma",
        text: "Osteosarcoma is the most common type of bone cancer. It develops in cells where new bone tissue forms."
      },
      {
        img: "/overview/bone-ew.png",
        title: "Ewing Sarcoma",
        text: "Ewing sarcoma can form in bones and nearby soft tissues. It is most common in children and teenagers."
      },
      {
        img: "/overview/bone-cho.png",
        title: "Chondrosarcoma",
        text: "Chondrosarcoma starts in cartilage, the connective tissue that helps joints and bones move."
      },
      {
        img: "/overview/bone-chord.png",
        title: "Chordoma",
        text: "Chordoma is a rarer type of bone cancer that forms in the spine or base of the skull."
      },
      {
        img: "/overview/bone-fibro.png",
        title: "Fibrosarcoma",
        text: "Fibrosarcoma starts in fibrous connective tissue at the end of bones."
      },
      {
        img: "/overview/bone-gia.png",
        title: "Giant Cell Tumor",
        text: "Giant cell tumors are usually benign, but in rare cases they may become cancerous."
      },
      {
        img: "/overview/bone-ups.png",
        title: "Undifferentiated Pleomorphic Sarcoma",
        text: "This aggressive tumor can start in soft tissue and bone."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/radiation.png",
        title: "Previous Cancer Treatment",
        text: "Radiation therapy and some chemotherapy drugs used for other cancers may increase the risk of bone cancer later."
      },
      {
        icon: "/icons/genetics.png",
        title: "Genetic Factors",
        text: "Some rare inherited genetic disorders, including Li-Fraumeni syndrome, may increase the risk of bone cancer."
      },
      {
        icon: "/icons/density.png",
        title: "Benign Bone Conditions",
        text: "In rare cases, benign bone conditions such as Paget disease of the bone or multiple enchondromas may increase risk."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/none.png",
        title: "No Clear Lifestyle Risk Factors",
        text: "Most people who develop bone cancers do not have any risk factors. This page does not identify clearly established lifestyle-related risk factors."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Bone Pain",
        text: "Bone pain may gradually become more persistent and is often worse at night. It may feel throbbing, aching or stabbing.",
        img: "/symptoms/bone-pain.png"
      },
      {
        title: "Lump",
        text: "A lump may appear in the affected area and may feel hard or soft to the touch.",
        img: "/symptoms/bone-lump.png"
      },
      {
        title: "Swelling",
        text: "Unexplained swelling may develop around the affected area of the bone.",
        img: "/symptoms/bone-swell.png"
      },
      {
        title: "Difficulty Moving",
        text: "Movement may become difficult if swelling is near a joint.",
        img: "/symptoms/bone-movement.png"
      },
      {
        title: "Fatigue",
        text: "Fatigue may occur in people with bone cancer.",
        img: "/symptoms/bone-fatigue.png"
      },
      {
        title: "Fever",
        text: "Fever may occur as one of the signs of bone cancer.",
        img: "/symptoms/bone-fever.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "X-rays",
        text: "Healthcare providers often first use X-rays to view the bones.",
        img: "/diagnosis/bone-xray.png"
      },
      {
        title: "MRI Scan",
        text: "MRI provides detailed images of the areas around the bones and is often needed before treatment.",
        img: "/diagnosis/bone-mri.png"
      },
      {
        title: "CT Scan",
        text: "CT scans provide more detailed images of the bones and nearby areas.",
        img: "/diagnosis/bone-ct.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy removes a small piece of bone tissue so a pathologist can examine it under a microscope.",
        img: "/diagnosis/bone-biopsy.png"
      },
      {
        title: "Tumor Grade",
        text: "Doctors look at how abnormal the cancer cells appear to understand how likely the cancer is to spread.",
        img: "/diagnosis/bone-grade.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "Surgery to remove the cancer is the most common treatment for bone cancers.",
        img: "/treatment/bone-surgery.png"
      },
      {
        title: "Limb-Sparing Surgery",
        text: "This surgery removes the tumor and some healthy tissue around it while keeping the arm or leg intact.",
        img: "/treatment/bone-limb.png"
      },
      {
        title: "Bone Graft Repair",
        text: "Surgeons may repair or rebuild affected bones using real or artificial bone grafts.",
        img: "/treatment/bone-graft.png"
      },
      {
        title: "Limb Removal",
        text: "Sometimes, surgeons need to remove an entire limb and fit the person with an artificial limb after surgery.",
        img: "/treatment/bone-pros.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may shrink tumors before surgery or destroy cancer cells that remain after surgery.",
        img: "/treatment/bone-radiation.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may treat the main cancer, metastases and cancer cells that may be circulating in the body.",
        img: "/treatment/bone-chemo.png"
      }
    ],

    supportiveCare: [
      {
        title: "Rehabilitation",
        text: "Rehabilitation and physical therapy may help people recover after treatment or adjust to a prosthesis."
      },
      {
        title: "Pain Relief",
        text: "Pain related to bone cancer often improves after treatment starts."
      },
      {
        title: "Follow-up Care",
        text: "Follow-up appointments help monitor recovery and detect recurrence early."
      },
      {
        title: "Emotional Support",
        text: "Support groups may help patients manage the emotional impact of diagnosis and treatment."
      }
    ]
  }
},
//brain cancer//

{
  slug: "brain-cancer",

  title: "Brain Cancer",

  description:
    "The brain is the control center of the body, responsible for processing information, regulating movement and coordinating essential functions. Different areas of the brain work together to support thinking, memory, emotions, sensation and communication.",

  bannerImg: "/banners/brain.png",

  overview: {
    intro:
      "Brain cancer occurs when abnormal cells grow uncontrollably within the brain and form a tumor. These tumors can develop from cells within the brain itself or spread to the brain from cancer that began elsewhere in the body. Brain tumors vary widely in their type, location and rate of growth.",

    description:
      "Because the brain controls many important functions, symptoms and treatment options often depend on where the tumor is located and how large it becomes. Some tumors grow slowly, while others may be more aggressive. Early diagnosis and specialized treatment can help manage the condition and improve quality of life.",
  },


  typesStages: {
    stages: [
  {
    label: "I",
    title: "Grade I",
    text: "These tumors grow slowly, are usually noncancerous and may often be cured with surgery."
  },
  {
    label: "II",
    title: "Grade II",
    text: "These tumors grow more slowly but may return after treatment and can sometimes become higher-grade tumors."
  },
  {
    label: "III",
    title: "Grade III",
    text: "These tumors are cancerous, grow more quickly and often require additional treatment beyond surgery."
  },
  {
    label: "IV",
    title: "Grade IV",
    text: "These are the most aggressive brain tumors and tend to grow and spread rapidly within the brain."
  }
],

    types: [
      {
        img: "/overview/brain-b1.png",
        title: "Chordomas",
        text: "These slow-growing tumors usually begin at the base of the skull or the lower part of the spine and are mostly benign."
      },
      {
        img: "/overview/brain-b2.png",
        title: "Craniopharyngiomas",
        text: "These tumors usually arise near the pituitary gland and may be difficult to remove because of their location."
      },
      {
        img: "/overview/brain-b3.png",
        title: "Meningiomas",
        text: "Meningiomas are the most common type of primary brain tumor and usually develop slowly in the tissues that protect the brain and spinal cord."
      },
      {
        img: "/overview/brain-b4.png",
        title: "Pituitary Adenomas",
        text: "These tumors form in the pituitary gland and may release excess pituitary hormones."
      },
      {
        img: "/overview/brain-b5.png",
        title: "Schwannomas",
        text: "These common benign brain tumors in adults develop from Schwann cells in cranial nerves or the peripheral nervous system."
      },
      {
        img: "/overview/brain-b6.png",
        title: "Astrocytoma",
        text: "Astrocytomas are gliomas that form in star-shaped glial cells called astrocytes and often occur in the cerebrum."
      },
      {
        img: "/overview/brain-b7.png",
        title: "Ependymomas",
        text: "These tumors often occur near the ventricles in the brain and develop from ependymal cells."
      },
      {
        img: "/overview/brain-b8.png",
        title: "Glioblastoma",
        text: "Glioblastomas form in astrocytes and are the fastest-growing astrocytomas."
      },
      {
        img: "/overview/brain-b9.png",
        title: "Oligodendroglioma",
        text: "These uncommon tumors begin in cells that make myelin, the protective layer around nerves in the brain."
      },
      {
        img: "/overview/brain-b10.png",
        title: "Medulloblastoma",
        text: "Medulloblastoma is a fast-growing cancerous brain tumor that forms at the base of the skull and is the most common cancerous brain tumor in children."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/genetics.png",
        title: "Gene Changes",
        text: "Brain tumors develop when certain genes in brain cells are damaged and no longer work properly."
      },
      {
        icon: "/icons/family.png",
        title: "Inherited Syndromes",
        text: "Rare inherited genetic syndromes, including NF1, NF2, Turcot syndrome, Gorlin syndrome, tuberous sclerosis complex and Li-Fraumeni syndrome, are linked with brain tumors."
      },
      {
        icon: "/icons/family.png",
        title: "Family History",
        text: "Only about 5% to 10% of people with brain tumors have a family history of a brain tumor."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/radiation.png",
        title: "Radiation Exposure",
        text: "Exposure to large amounts of radiation from X-rays or previous cancer treatment may contribute to gene damage linked with brain tumors."
      },
      {
        icon: "/icons/smoking.png",
        title: "Smoking",
        text: "Avoiding environmental hazards such as smoking may help reduce the risk of developing a brain tumor."
      }
    ]
  },

symptoms: {
  items: [
    {
      title: "Headaches",
      text: "Headaches may be more severe in the morning or may wake someone up at night.",
      img: "/symptoms/brain-headache.png"
    },
    {
      title: "Seizures",
      text: "Seizures may occur as a sign of a brain tumor.",
      img: "/symptoms/brain-seizure.png"
    },
    {
      title: "Thinking or Speech Problems",
      text: "A person may have difficulty thinking, speaking or understanding language.",
      img: "/symptoms/brain-speech.png"
    },
    {
      title: "Vision Issues",
      text: "Vision problems may occur when a tumor affects areas involved in sight.",
      img: "/symptoms/brain-vision.png"
    },
    {
      title: "Weakness or Paralysis",
      text: "Weakness or paralysis may affect one part or one side of the body.",
      img: "/symptoms/brain-weakness.png"
    },
    {
      title: "Balance Problems",
      text: "Balance problems or dizziness may happen depending on tumor location.",
      img: "/symptoms/brain-balance.png"
    }
  ]
}
,
  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may perform a physical exam and ask about symptoms, health conditions, medications, surgeries and family history.",
        img: "/diagnosis/brain-exam.png"
      },
      {
        title: "Neurological Exam",
        text: "A neurological exam checks changes in balance, coordination, mental status, hearing, vision and reflexes.",
        img: "/diagnosis/brain-neuro.png"
      },
      {
        title: "MRI or CT Scan",
        text: "Brain MRI is usually the best imaging test for identifying brain tumors, while CT scan may be used when MRI is not possible.",
        img: "/diagnosis/brain-scan.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy removes a tumor sample so specialists can identify the tumor type and whether it is cancerous.",
        img: "/diagnosis/brain-biopsy.png"
      },
      {
        title: "Spinal Tap",
        text: "A spinal tap may be used when providers suspect the tumor has invaded the tissue layers covering the brain.",
        img: "/diagnosis/brain-tap.png"
      },
      {
        title: "Specialized Tests",
        text: "Specialized tests may check blood or cerebrospinal fluid for tumor markers or gene abnormalities linked with certain tumors.",
        img: "/diagnosis/brain-tests.png"
      }
    ]
  },

 treatment: {
  options: [
    {
      title: "Brain Surgery",
      text: "When possible, neurosurgeons remove the tumor while working carefully to protect functional areas of the brain.",
      img: "/treatment/brain-surgery.png"
    },
    {
      title: "Radiation Therapy",
      text: "Radiation therapy uses high doses of X-rays to destroy brain tumor cells or shrink the tumor.",
      img: "/treatment/brain-radiation.png"
    },
    {
      title: "Chemotherapy",
      text: "Chemotherapy uses anticancer medicines to kill cancer cells in the brain and throughout the body.",
      img: "/treatment/brain-chemo.png"
    },
    {
      title: "Immunotherapy",
      text: "Immunotherapy uses the body’s immune system to fight cancer more effectively.",
      img: "/treatment/brain-immuno.png"
    },
    {
      title: "Targeted Therapy",
      text: "Targeted therapy uses medicines that focus on specific features in cancer cells while limiting harm to healthy cells.",
      img: "/treatment/brain-targeted.png"
    },
    {
      title: "Watchful Waiting",
      text: "For very small tumors that are not causing symptoms, providers may recommend close monitoring with regular testing.",
      img: "/treatment/brain-watchful.png"
    }
  ],

    supportiveCare: [
      {
        title: "Shunts",
        text: "A shunt may help drain excess cerebrospinal fluid if a tumor increases pressure inside the skull."
      },
      {
        title: "Pressure-Reducing Medicines",
        text: "Medicines such as mannitol and corticosteroids may help reduce swelling and pressure around the tumor."
      },
      {
        title: "Palliative Care",
        text: "Palliative care provides symptom relief, comfort and support for people living with serious illness."
      },
      {
        title: "Regular Monitoring",
        text: "People with brain tumors need ongoing follow-up to monitor symptoms, treatment response and possible recurrence."
      }
    ]
  }
},
//burkitt lymphoma//

{
  slug: "burkitt-lymphoma",

  title: "Burkitt Lymphoma",

  description:
    "The lymphatic system is a network of vessels, tissues and organs that helps protect the body from infections and disease. It carries lymph fluid throughout the body and plays an important role in supporting the immune system.",

  bannerImg: "/banners/burkitt.png",

  overview: {
    intro:
      "Burkitt lymphoma is a rare and fast-growing form of non-Hodgkin lymphoma that develops in B lymphocytes, a type of white blood cell. It can affect various parts of the body, including lymph nodes, bone marrow, the digestive system and other organs. Because it grows rapidly, the condition often requires prompt medical attention after diagnosis.",

    description:
      "Although Burkitt lymphoma is an aggressive cancer, it can respond well to treatment when identified and managed early. Symptoms and disease progression can vary depending on the areas of the body involved. Treatment typically begins soon after diagnosis to help control the disease and improve outcomes.",
  },


  typesStages: {
    stages: [
      {
        label: "I",
        title: "Stage I",
        text: "One area or lymph node is affected."
      },
      {
        label: "II",
        title: "Stage II",
        text: "Cancer is in two or more areas on the same side of the diaphragm."
      },
      {
        label: "III",
        title: "Stage III",
        text: "Cancer is on both sides of the diaphragm."
      },
      {
        label: "IV",
        title: "Stage IV",
        text: "Cancer has spread outside the lymph system, such as to the liver, lungs or bone marrow."
      }
    ],

    types: [
      {
        img: "/overview/burkitt-endemic.png",
        title: "Endemic Burkitt Lymphoma",
        text: "This type is most common in parts of Africa and is linked to Epstein-Barr virus."
      },
      {
        img: "/overview/burkitt-sporadic.png",
        title: "Sporadic Burkitt Lymphoma",
        text: "This type is common in the United States, especially in children."
      },
      {
        img: "/overview/burkitt-immunodeficiency.png",
        title: "Immunodeficiency-Related",
        text: "This type affects people with weakened immune systems, including people with HIV/AIDS."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/genetics.png",
        title: "MYC Gene Changes",
        text: "Burkitt lymphoma is linked to changes in a gene called MYC, which helps control cell growth."
      },
      {
        icon: "/icons/density.png",
        title: "Gene Translocation",
        text: "A genetic glitch called translocation can make the MYC gene overactive."
      },
      {
        icon: "/icons/family.png",
        title: "Epstein-Barr Virus",
        text: "Some people with Epstein-Barr virus also have Burkitt lymphoma, but not everyone with EBV develops it."
      },
      {
        icon: "/icons/reproductive.png",
        title: "Weakened Immune System",
        text: "Immunodeficiency-related Burkitt lymphoma affects people with weakened immune systems, such as people with HIV/AIDS."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/none.png",
        title: "No Lifestyle Risk Factors",
        text: "This page does not identify clearly established lifestyle-related risk factors for Burkitt lymphoma."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Belly Pain",
        text: "Belly pain may appear suddenly and can be accompanied by nausea or vomiting.",
        img: "/symptoms/burkitt-belly.png"
      },
      {
        title: "Nausea or Vomiting",
        text: "Nausea or vomiting may occur as part of the sudden symptom pattern.",
        img: "/symptoms/burkitt-nausea.png"
      },
      {
        title: "Fever",
        text: "Fever may develop along with other symptoms.",
        img: "/symptoms/burkitt-fever.png"
      },
      {
        title: "Tiredness and Night Sweats",
        text: "Tiredness and night sweats may occur with Burkitt lymphoma.",
        img: "/symptoms/burkitt-tiredness.png"
      },
      {
        title: "Loss of Appetite and Weight Loss",
        text: "Loss of appetite and unintended weight loss may happen.",
        img: "/symptoms/burkitt-weight.png"
      },
      {
        title: "Swollen Lymph Nodes",
        text: "Swollen lymph nodes may be a symptom of Burkitt lymphoma.",
        img: "/symptoms/burkitt-nodes.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Lymph Node Biopsy",
        text: "A healthcare provider may start diagnosis with a lymph node biopsy.",
        img: "/diagnosis/burkitt-biopsy.png"
      },
      {
        title: "CT Scan",
        text: "A CT scan may look for tumors in the chest, belly or pelvis.",
        img: "/diagnosis/burkitt-ct.png"
      },
      {
        title: "PET Scan",
        text: "A PET scan highlights areas with cancer.",
        img: "/diagnosis/burkitt-pet.png"
      },
      {
        title: "Bone Marrow Biopsy",
        text: "A bone marrow biopsy checks whether cancer is in the marrow.",
        img: "/diagnosis/burkitt-marrow.png"
      },
      {
        title: "Spinal Tap",
        text: "A spinal tap, also called lumbar puncture, looks for cancer cells in spinal fluid.",
        img: "/diagnosis/burkitt-spinal.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Chemotherapy",
        text: "Chemotherapy is the main treatment and is often intensive and started right away.",
        img: "/treatment/burkitt-chemo.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy helps the immune system find and attack cancer.",
        img: "/treatment/burkitt-immuno.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy is sometimes used with chemotherapy, mostly for adults.",
        img: "/treatment/burkitt-radiation.png"
      },
      {
        title: "Stem Cell Transplant",
        text: "A stem cell transplant may help if cancer returns after treatment.",
        img: "/treatment/burkitt-transplant.png"
      },
      {
        title: "Surgery",
        text: "Surgery is used in rare cases, such as when a tumor blocks the intestines.",
        img: "/treatment/burkitt-surgery.png"
      }
    ],

    supportiveCare: [
      {
        title: "Regular Follow-up",
        text: "Follow-up appointments may include blood tests and CT scans to monitor health."
      },
      {
        title: "Rest and Recovery",
        text: "Treatment can be difficult, and rest can help during recovery."
      },
      {
        title: "Nutrition Support",
        text: "A dietitian can help patients stay strong during treatment."
      },
      {
        title: "Emotional Support",
        text: "Support from others and child life specialists can help patients and families cope."
      }
    ]
  }
},
// cervical cancer//
{
  slug: "cervical-cancer",

  title: "Cervical Cancer",

  description:
    "The cervix is the lower part of the uterus that connects the uterus to the vagina. It plays an important role in the female reproductive system by allowing menstrual flow to leave the body and providing a passage between the uterus and vagina.",

  bannerImg: "/banners/cervical.png",

  overview: {
    intro:
      "Cervical cancer develops in the cells of the cervix when abnormal changes cause cells to grow uncontrollably. Most cervical cancers are linked to long-term infection with certain types of human papillomavirus (HPV), a common virus that can affect the reproductive tract. The disease often develops gradually over time, beginning with precancerous changes in cervical cells.",

    description:
      "In its early stages, cervical cancer may not cause noticeable symptoms, which is why regular screening plays an important role in detecting abnormal cell changes before cancer develops. When identified early, cervical cancer is often highly treatable. Advances in screening, vaccination and treatment have helped improve prevention and outcomes for many people.",
  },


  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/reproductive.svg",
        title: "DES Exposure",
        text: "People whose mothers took DES between 1938 and 1971 may have a higher risk of cervical cancer."
      },
      {
        icon: "/icons/family.svg",
        title: "Family History",
        text: "Cervical cancer may have a genetic component."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/screening.svg",
        title: "Screening History",
        text: "People who haven’t had Pap tests at regular intervals are more likely to get cervical cancer."
      },
      {
        icon: "/icons/genetics.svg",
        title: "HPV Infection",
        text: "Certain types of HPV cause cervical cancer. Lowering HPV risk can also lower cervical cancer risk."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Sexual History",
        text: "Having sex before age 18 or having many sexual partners may increase the risk of HPV infection."
      },
      {
        icon: "/icons/smoking.svg",
        title: "Smoking",
        text: "Smoking cigarettes increases the risk of cervical cancer."
      },
      {
        icon: "/icons/density.svg",
        title: "HIV Infection",
        text: "People with HIV have a higher-than-average risk of developing cervical cancer."
      },
      {
        icon: "/icons/immunity.svg",
        title: "Weakened Immune System",
        text: "A weak immune system makes it harder for the body to fight infections."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Watery or Bloody Discharge",
        text: "Vaginal discharge may be watery or bloody, may be heavy and may have a foul odor.",
        img: "/symptoms/cervical-discharge.png"
      },
      {
        title: "Abnormal Vaginal Bleeding",
        text: "Bleeding may occur after sex, between menstrual periods or after menopause.",
        img: "/symptoms/cervical-bleeding.png"
      },
      {
        title: "Pain During Sex",
        text: "Pain during sex may occur as a warning sign of cervical cancer.",
        img: "/symptoms/cervical-pain-sex.png"
      },
      {
        title: "Painful Urination",
        text: "If cancer spreads to nearby tissues, urination may become difficult or painful and may include blood in urine.",
        img: "/symptoms/cervical-urination.png"
      },
      {
        title: "Bowel Symptoms",
        text: "Diarrhea, pain or bleeding from the rectum when pooping may occur if cancer spreads nearby.",
        img: "/symptoms/cervical-bowel.png"
      },
      {
        title: "Fatigue and Weight Loss",
        text: "Fatigue, loss of weight and loss of appetite may occur.",
        img: "/symptoms/cervical-fatigue.png"
      },
      {
        title: "Backache or Leg Swelling",
        text: "A dull backache or swelling in the legs may occur when cancer has spread.",
        img: "/symptoms/cervical-back-leg.png"
      },
      {
        title: "Pelvic or Abdominal Pain",
        text: "Pain in the pelvis or abdomen may occur.",
        img: "/symptoms/cervical-pelvic.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Pap Test",
        text: "A Pap test checks cells from the cervix under a microscope to look for precancerous or irregular cells.",
        img: "/diagnosis/cervical-pap.png"
      },
      {
        title: "HPV Test",
        text: "An HPV test checks cervical cells for HPV strains most likely to cause cancer.",
        img: "/diagnosis/cervical-hpv.png"
      },
      {
        title: "Colposcopy",
        text: "Colposcopy uses magnification to help a provider look closely at cervical cells.",
        img: "/diagnosis/cervical-colposcopy.png"
      },
      {
        title: "Punch Biopsy",
        text: "A punch biopsy uses a cutting tool to remove a sample of suspicious cervical tissue.",
        img: "/diagnosis/cervical-punch.png"
      },
      {
        title: "Endocervical Curettage",
        text: "This test scrapes the lining of the cervix with a spoon-shaped tool called a curette.",
        img: "/diagnosis/cervical-curettage.png"
      },
      {
        title: "LEEP",
        text: "LEEP uses an electrical wire loop to remove abnormal cervical tissue.",
        img: "/diagnosis/cervical-leep.png"
      },
      {
        title: "Cone Biopsy",
        text: "Cone biopsy removes a larger cone-shaped piece of tissue from the cervix.",
        img: "/diagnosis/cervical-cone.png"
      },
      {
        title: "Spread Tests",
        text: "If cancer is confirmed, tests such as blood and urine tests, X-rays, CT scans and MRI may check whether it has spread.",
        img: "/diagnosis/cervical-spread.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Radiation Therapy",
        text: "Radiation therapy uses energy beams to kill cancer cells on the cervix.",
        img: "/treatment/cervical-radiation.png"
      },
      {
        title: "External Beam Radiation",
        text: "External beam radiation therapy aims high-powered radiation at cancer from a machine outside the body.",
        img: "/treatment/cervical-ebrt.png"
      },
      {
        title: "Brachytherapy",
        text: "Brachytherapy places radiation in or near the cancer.",
        img: "/treatment/cervical-brachy.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy uses medicines taken by mouth or injected into veins to kill cancer cells throughout the body.",
        img: "/treatment/cervical-chemo.png"
      },
      {
        title: "Laser Surgery",
        text: "Laser surgery uses a laser beam to burn off cancer cells.",
        img: "/treatment/cervical-laser.png"
      },
      {
        title: "Cryosurgery",
        text: "Cryosurgery freezes and destroys cancer cells.",
        img: "/treatment/cervical-cryo.png"
      },
      {
        title: "Hysterectomy",
        text: "Hysterectomy removes the uterus and cervix.",
        img: "/treatment/cervical-hysterectomy.png"
      },
      {
        title: "Trachelectomy",
        text: "Trachelectomy removes the cervix and upper vagina but not the uterus.",
        img: "/treatment/cervical-trachelectomy.png"
      },
      {
        title: "Pelvic Exenteration",
        text: "Pelvic exenteration is a larger surgery that may remove the bladder, vagina, rectum and part of the colon depending on spread.",
        img: "/treatment/cervical-exenteration.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy destroys specific cancer cells by targeting proteins that help them grow and spread.",
        img: "/treatment/cervical-targeted.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy helps the immune system recognize and destroy cancer cells.",
        img: "/treatment/cervical-immuno.png"
      }
    ],

    supportiveCare: [
      {
        title: "Side Effect Support",
        text: "Treatment side effects such as nausea, vomiting, fatigue and sexual dysfunction may need supportive care."
      },
      {
        title: "Fertility Support",
        text: "Some treatments may affect pregnancy or fertility, so patients should discuss future family plans with their provider."
      },
      {
        title: "Regular Monitoring",
        text: "After treatment, providers monitor closely to check that cancer does not come back."
      },
      {
        title: "Emotional Support",
        text: "Support groups, counseling and conversations with loved ones may help during diagnosis and treatment."
      }
    ]
  }
},

//breast cancer//

{
  slug: "breast-cancer",

  title: "Breast Cancer",

  description:
    "Breasts contain milk-producing glands called lobules and ducts that carry milk to the nipple. Along with fatty and connective tissues, these structures support breastfeeding and play an important role in the reproductive system.",

  bannerImg: "/banners/breast.png",

  overview: {
    intro:
      "Breast cancer develops when cells in the breast change and multiply uncontrollably, forming a tumor. It is one of the most common cancers affecting women, although men can also develop the disease. Breast cancer may begin in different parts of the breast, including the milk ducts or milk-producing lobules, and can vary in how it grows and spreads.",

    description:
      "Healthcare providers classify breast cancer into different types and subtypes to guide treatment decisions. Some breast cancers remain confined to their original location, while others can spread into nearby tissues or other parts of the body. Early detection through screening and timely treatment can help improve outcomes and increase treatment options.",
  },


typesStages: {

  stages: [
        { label: "0", title: "Stage 0", text: "Abnormal cells found in the ducts or lobules. Non-invasive." },
        { label: "I", title: "Stage I", text: "Cancer is small (2 cm or less) and hasn't spread to lymph nodes." },
        { label: "II", title: "Stage II", text: "Cancer is larger than 2 cm or has spread to nearby lymph nodes." },
        { label: "III", title: "Stage III", text: "Cancer has spread to more lymph nodes or nearby tissues." },
        { label: "IV", title: "Stage IV", text: "Cancer has spread to distant parts of the body such as bones, lungs, liver or brain." }
      ],

  types: [
    { 
      img: "/overview/type1.png", 
      title: "Ductal Carcinoma In Situ (DCIS)", 
      text: "A non-invasive condition where abnormal cells are confined to the milk ducts. Because it has not spread into surrounding tissue, it is highly treatable when caught early." 
    },
    { 
      img: "/overview/type2.png", 
      title: "Invasive Ductal Carcinoma (IDC)", 
      text: "The most common form of breast cancer. It begins in the milk ducts and spreads into the nearby breast tissue, with the potential to reach other parts of the body." 
    },
    { 
      img: "/overview/type3.png", 
      title: "Invasive Lobular Carcinoma (ILC)", 
      text: "This cancer originates in the milk-producing glands (lobules). It is distinct because it often spreads to other body areas and may require a specialized diagnostic approach." 
    },
    { 
      img: "/overview/type4.png", 
      title: "Triple-Negative Breast Cancer", 
      text: "This type tests negative for estrogen, progesterone, and HER2 receptors. It is known to grow faster than other types and requires a highly focused, personalized treatment plan." 
    },
    { 
      img: "/overview/type5.png", 
      title: "Inflammatory Breast Cancer", 
      text: "A rare and aggressive form that blocks lymph vessels in the skin. Instead of a lump, it often causes the breast to appear swollen, red, and warm to the touch." 
    }
  ],
    
    },

riskFactorsData: {
  uncontrollable: [
    { icon: "/icons/age.png", title: "Advancing Age", text: "The risk of developing breast cancer increases as you get older. Most cases are diagnosed in individuals over the age of 50." },
    { icon: "/icons/genetics.png", title: "Genetic Mutations", text: "Inherited mutations in genes like BRCA1 and BRCA2 significantly increase the risk. These are responsible for about 5-10% of all breast cancer cases." },
    { icon: "/icons/family.png", title: "Family History", text: "Having a first-degree relative—mother, sister, or daughter—who has been diagnosed with breast cancer increases your own risk profile." },
    { icon: "/icons/reproductive.png", title: "Reproductive History", text: "Starting menstruation before age 12 or entering menopause after 55 exposes breast tissue to hormones for a longer duration." },
    { icon: "/icons/density.png", title: "Dense Breast Tissue", text: "Women with dense breast tissue have more glandular and fibrous tissue than fatty tissue, which can also make tumors harder to detect on mammograms." }
  ],
  lifestyle: [
    { icon: "/icons/smoking.png", title: "Smoking", text: "Tobacco use has been linked to an increased risk of breast cancer, particularly in women who began smoking before their first pregnancy." },
    { icon: "/icons/alcohol.png", title: "Alcohol Consumption", text: "Regular alcohol consumption is linked to a dose-dependent increase in risk. Even small amounts can potentially elevate estrogen levels." },
    { icon: "/icons/overweight.png", title: "Overweight & Obesity", text: "Being overweight, especially after menopause, increases risk as fat tissue produces extra estrogen, which can fuel cancer cell growth." },
    { icon: "/icons/inactive.png", title: "Physical Inactivity", text: "Leading a sedentary lifestyle is associated with a higher risk. Regular exercise helps regulate hormones and improves immune function." },
    { icon: "/icons/junk.png", title: "Unhealthy Diet", text: "A diet high in processed meats, saturated fats, and sugars, while low in fruits and vegetables, may contribute to overall systemic inflammation." }
  ]
},
symptoms: {
  items: [
    {
      title: "New Lump in the Breast",
      text: "A painless lump or thickening in the breast or underarm area is one of the most common signs of breast cancer.",
      img: "/symptoms/s1.png"
    },
    {
      title: "Changes in Breast Size or Shape",
      text: "Any unusual change in the appearance, contour, or size of the breast should be evaluated by a healthcare professional.",
      img: "/symptoms/s2.png"
    },
    {
      title: "Nipple Discharge",
      text: "Unexpected nipple discharge, especially if bloody or occurring without squeezing, may require medical attention.",
      img: "/symptoms/s3.png"
    },
    {
      title: "Skin Changes",
      text: "Dimpling, puckering, redness, scaling, or thickening of the breast skin can sometimes indicate underlying breast cancer.",
      img: "/symptoms/s4.png"
    },
    {
      title: "Nipple Changes",
      text: "A nipple turning inward or developing persistent irritation, crusting, or pain should not be ignored.",
      img: "/symptoms/s5.png"
    },
    {
      title: "Persistent Breast Pain",
      text: "Although breast pain is often not cancer-related, persistent unexplained discomfort should be assessed by a doctor.",
      img: "/symptoms/s6.png"
    }
  ]
},
    diagnosis: {
  items: [
    {
      title: "Mammogram",
      text: "An X-ray of the breast that can detect changes or abnormal areas, even before they can be felt.",
      img: "/diagnosis/d1.png"
    },
    {
      title: "Ultrasound",
      text: "Uses sound waves to create images of the breast. Often used to evaluate lumps found during a physical exam or mammogram.",
      img: "/diagnosis/d2.png"
    },
    {
      title: "MRI (Breast MRI)",
      text: "A detailed imaging test that uses magnets and radio waves. Recommended for high-risk women or when other tests are unclear.",
      img: "/diagnosis/d3.png"
    },
    {
      title: "Biopsy",
      text: "A small sample of breast tissue is removed and examined under a microscope to check for cancer cells. This confirms a diagnosis.",
      img: "/diagnosis/d4.png"
    },
    {
      title: "Clinical Breast Exam",
      text: "A physical examination of the breasts by a healthcare professional to check for lumps or other changes.",
      img: "/diagnosis/d5.png"
    },
    {
      title: "Other Tests (if needed)",
      text: "Tests like PET scan, CT scan, or blood tests may be recommended to understand the extent of cancer in certain cases.",
      img: "/diagnosis/d6.png"
    }
  ]
    },
   treatment: {
  options: [
    {
      title: "Surgery",
      text: "Removal of the tumor or the entire breast, depending on the stage and type of breast cancer.",
      img: "/treatment/t1.png"
    },
    {
      title: "Radiation Therapy",
      text: "High-energy rays are used to kill cancer cells and reduce the risk of cancer returning.",
      img: "/treatment/t2.png"
    },
    {
      title: "Chemotherapy",
      text: "Medicines that kill fast-growing cancer cells or stop them from growing further.",
      img: "/treatment/t3.png"
    },
    {
      title: "Hormone Therapy",
      text: "Blocks hormones that fuel certain types of breast cancer or reduces hormone levels.",
      img: "/treatment/t4.png"
    },
    {
      title: "Targeted Therapy",
      text: "Drugs that target specific molecules in cancer cells to stop their growth with fewer side effects.",
      img: "/treatment/t5.png"
    },
    {
      title: "Immunotherapy",
      text: "Helps the immune system recognize and attack cancer cells more effectively.",
      img: "/treatment/t6.png"
    }
  ],

  supportiveCare: [
    {
      title: "Pain Management",
      text: "Relief from pain and other symptoms for better quality of life."
    },
    {
      title: "Nutrition Support",
      text: "Proper nutrition to maintain strength and support recovery."
    },
    {
      title: "Emotional Support",
      text: "Counseling and support groups for emotional well-being."
    },
    {
      title: "Rehabilitation",
      text: "Physical therapy and exercises to improve strength and mobility."
    }
  ]
}
},


// chondrosarcoma //
{
  slug: "chondrosarcoma",

  title: "Chondrosarcoma",

  description:
    "Cartilage is a strong, flexible connective tissue that cushions joints and helps bones move smoothly against one another. It is found throughout the body, including the joints, rib cage, nose and other structures that require support and flexibility.",

  bannerImg: "/cancers/chondro.webp",

  overview: {
    intro:
      "Chondrosarcoma is a rare type of bone cancer that begins in cartilage cells. It is one of the most common forms of primary bone cancer in adults and can develop in areas where cartilage is normally present, such as the pelvis, ribs, shoulders and long bones. The disease includes several subtypes that can vary in how quickly they grow and spread.",

    description:
      "Many chondrosarcomas grow slowly, while others may behave more aggressively. Because the condition often develops gradually, symptoms may not appear until the tumor becomes larger. Treatment depends on factors such as the tumor’s location, grade and subtype, with surgery being the most common treatment approach. Early evaluation can help guide appropriate treatment and management decisions.",
  },

  typesStages: {
    stages: [
      {
        label: "I",
        title: "Grade I",
        text: "Low-grade tumors grow the slowest and are very unlikely to spread."
      },
      {
        label: "II",
        title: "Grade II",
        text: "Intermediate-grade tumors are slightly more likely to spread."
      },
      {
        label: "III",
        title: "Grade III",
        text: "High-grade tumors are the most likely to grow and spread."
      }
    ],

    types: [
      {
        img: "/overview/chondro-conventional.png",
        title: "Conventional Chondrosarcoma",
        text: "This is the most common type and accounts for more than 85% of all chondrosarcomas. It grows slowly and is less likely to spread."
      },
      {
        img: "/overview/chondro-dediff.png",
        title: "Dedifferentiated Chondrosarcoma",
        text: "This fast-growing type usually develops in the upper arm bone, thigh bone or pelvis and may spread quickly."
      },
      {
        img: "/overview/chondro-clear.png",
        title: "Clear Cell Chondrosarcoma",
        text: "This type is usually found near a joint in the arm or leg. It tends to grow slowly and rarely spreads."
      },
      {
        img: "/overview/chondro-mesenchymal.png",
        title: "Mesenchymal Chondrosarcoma",
        text: "This type often develops in the spine, ribs or jaw. It may grow quickly, spread more often and return after treatment."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/genetics.svg",
        title: "Li-Fraumeni Syndrome",
        text: "People with Li-Fraumeni syndrome are more likely to develop cancerous tumors, including chondrosarcoma."
      },
      {
        icon: "/icons/density.svg",
        title: "Maffucci Syndrome and Ollier’s Disease",
        text: "These disorders can cause benign tumors in cartilage, bone and skin."
      },
      {
        icon: "/icons/family.svg",
        title: "Hereditary Multiple Osteochondromas",
        text: "This condition causes multiple benign bone tumors that may disrupt bone growth."
      },
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "Chondrosarcoma can happen at any age, but it is more common in people ages 40 to 75. Most people receive a diagnosis around age 51."
      }
    ],

    lifestyle: [
      {
        icon: "",
        title: "No Lifestyle Risk Factors",
        text: "This page does not identify clearly established lifestyle-related risk factors for chondrosarcoma."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Bone Pain",
        text: "Bone pain may come and go and often becomes worse at night.",
        img: "/symptoms/chondro-pain.png"
      },
      {
        title: "Fatigue",
        text: "Fatigue may occur with chondrosarcoma.",
        img: "/symptoms/chondro-fatigue.png"
      },
      {
        title: "Swollen Spot or Lump",
        text: "A swollen area or lump may appear on a bone, such as on the arm, leg or ribs.",
        img: "/symptoms/chondro-lump.png"
      },
      {
        title: "Unintentional Weight Loss",
        text: "Unintentional weight loss may occur as one of the symptoms.",
        img: "/symptoms/chondro-weight.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may ask about symptoms and perform a physical examination.",
        img: "/diagnosis/chondro-exam.png"
      },
      {
        title: "Imaging Tests",
        text: "Imaging tests may include a bone scan, CT scan, MRI, PET scan or X-ray.",
        img: "/diagnosis/chondro-imaging.png"
      },
      {
        title: "Biopsy",
        text: "A provider may remove tissue from a suspicious lump or remove the entire lump so a pathologist can check for cancer cells.",
        img: "/diagnosis/chondro-biopsy.png"
      },
      {
        title: "Tumor Type",
        text: "If cancer cells are found, the pathologist identifies the tumor type.",
        img: "/diagnosis/chondro-type.png"
      },
      {
        title: "Tumor Grade",
        text: "The pathologist also establishes the tumor grade, which helps show how fast the tumor may grow and spread.",
        img: "/diagnosis/chondro-grade.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "The most common treatment is surgery to remove cancerous cartilage and bone.",
        img: "/treatment/chondro-surgery.png"
      },
      {
        title: "Curettage",
        text: "During curettage, the provider scrapes tumor tissue from the bone and replaces missing bone with bone graft material.",
        img: "/treatment/chondro-curettage.png"
      },
      {
        title: "Limb-Sparing Surgery",
        text: "This surgery removes the tumor and nearby bone and muscle, followed by reconstruction to replace missing bone and tissue.",
        img: "/treatment/chondro-limb-sparing.png"
      },
      {
        title: "Amputation",
        text: "Amputation may be recommended in some cases, but it is rare.",
        img: "/treatment/chondro-amputation.png"
      },
      {
        title: "Physical Therapy",
        text: "Physical therapy helps build strength, balance and mobility after treatment.",
        img: "/treatment/chondro-therapy.png"
      },
      {
        title: "Chemotherapy or Radiation",
        text: "Dedifferentiated or mesenchymal chondrosarcoma may need chemotherapy or radiation therapy before or after surgery.",
        img: "/treatment/chondro-chemo-radiation.png"
      }
    ],

    supportiveCare: [
      {
        title: "Rehabilitation",
        text: "Rehabilitation can help patients adjust after surgery and rebuild strength and mobility."
      },
      {
        title: "Prosthetic Support",
        text: "Some people may need support while adjusting to a prosthetic limb."
      },
      {
        title: "Mental Health Support",
        text: "Mental health therapy may help patients cope with body changes and daily life adjustments."
      },
      {
        title: "Follow-up Care",
        text: "Patients should ask their provider what body changes may signal that cancer has returned."
      }
    ]
  }
},

// colon cancer //

{
  slug: "colon-cancer",

  title: "Colon Cancer",

  description:
    "The colon is a part of the large intestine that helps absorb water and nutrients from digested food. It also processes and stores waste before it is eliminated from the body.",

  bannerImg: "/cancers/colon-cancer.webp",

  overview: {
    intro:
      "Colon cancer develops when abnormal cells in the colon grow uncontrollably and form a tumor. Most colon cancers begin as polyps, which are growths that develop on the inner lining of the colon. While many polyps remain harmless, some can gradually become cancerous over time.",

    description:
      "Colon cancer is one of the most common cancers and often develops without noticeable symptoms in its early stages. Regular screening can help detect polyps before they become cancerous and identify cancer at an earlier stage. Early diagnosis and treatment can improve outcomes and provide more treatment options.",
  },


  typesStages: {
    stages: [
      {
        label: "0",
        title: "Stage 0",
        text: "This stage refers to abnormal or precancerous cells in colon polyps."
      },
      {
        label: "I",
        title: "Stage I",
        text: "There is a cancerous polyp in the colon wall."
      },
      {
        label: "II",
        title: "Stage II",
        text: "Cancer has spread through most of the colon wall or into the wall’s outer layer."
      },
      {
        label: "III",
        title: "Stage III",
        text: "Cancer has spread to the colon wall, lymph nodes or the outer layer of the colon."
      },
      {
        label: "IV",
        title: "Stage IV",
        text: "Cancer has spread to distant areas of the body, such as the liver, lungs or ovaries."
      }
    ],

    types: [
      {
        title: "No Specific Types Listed",
        text: "This page does not present a separate types section for colon cancer."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age 50 or Older",
        text: "Most people with colon cancer are older than 50, although cases in younger people are increasing."
      },
      {
        icon: "/icons/family.svg",
        title: "Family History",
        text: "Risk may be higher if close biological relatives have had large colon polyps or colorectal cancer."
      },
      {
        icon: "/icons/density.svg",
        title: "Many Colon Polyps",
        text: "In general, having more colon polyps increases the chance that one or more may become cancerous."
      },
      {
        icon: "/icons/genetics.svg",
        title: "Inherited Conditions",
        text: "Inherited conditions such as Lynch syndrome and familial adenomatous polyposis may lead to colon cancer."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/weight.svg",
        title: "Overweight or Obesity",
        text: "Having a BMI higher than 25 may play a role in colon cancer risk."
      },
      {
        icon: "/icons/smoking.svg",
        title: "Smoking",
        text: "Smoking cigarettes may increase the risk of colon cancer."
      },
      {
        icon: "/icons/alcohol.svg",
        title: "Alcohol Use",
        text: "Regular alcohol use, even light to moderate drinking, may increase risk."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Abdominal Pain",
        text: "Belly pain that does not go away may be a symptom of colon cancer.",
        img: "/symptoms/colon-pain.png"
      },
      {
        title: "Bloated Stomach",
        text: "A bloated stomach may occur when colon cancer causes digestive changes.",
        img: "/symptoms/colon-bloating.png"
      },
      {
        title: "Blood in Stool",
        text: "Blood on or in stool can be a warning sign and should be checked by a healthcare provider.",
        img: "/symptoms/colon-blood.png"
      },
      {
        title: "Constipation or Diarrhea",
        text: "Changes such as constipation or diarrhea may occur and should be checked if they last more than a few days.",
        img: "/symptoms/colon-bowel.png"
      },
      {
        title: "Incomplete Emptying",
        text: "Some people may feel like there is still stool in the bowel after using the bathroom.",
        img: "/symptoms/colon-incomplete.png"
      },
      {
        title: "Tiredness or Weakness",
        text: "Feeling tired or weak may happen with colon cancer.",
        img: "/symptoms/colon-tired.png"
      },
      {
        title: "Unexplained Weight Loss",
        text: "Losing weight without trying may be a symptom that needs medical attention.",
        img: "/symptoms/colon-weight.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Symptom Review",
        text: "A healthcare provider may ask what symptoms feel like and when they first appeared.",
        img: "/diagnosis/colon-symptoms.png"
      },
      {
        title: "Physical Examination",
        text: "A provider may feel the belly for masses or enlarged organs and may do a digital rectal exam.",
        img: "/diagnosis/colon-exam.png"
      },
      {
        title: "Blood Tests",
        text: "Blood tests may include a complete blood count, complete metabolic panel or CEA assay.",
        img: "/diagnosis/colon-blood.png"
      },
      {
        title: "Imaging Tests",
        text: "Imaging tests may include CT scans, MRI, PET scans or abdominal ultrasounds.",
        img: "/diagnosis/colon-imaging.png"
      },
      {
        title: "Diagnostic Colonoscopy",
        text: "A diagnostic colonoscopy may be done if symptoms are present or other tests detect cancer.",
        img: "/diagnosis/colon-colonoscopy.png"
      },
      {
        title: "Tissue Testing",
        text: "During colonoscopy, a small tissue sample may be removed and examined under a microscope.",
        img: "/diagnosis/colon-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Polypectomy",
        text: "This procedure removes precancerous or cancerous polyps from the colon.",
        img: "/treatment/colon-polypectomy.png"
      },
      {
        title: "Colectomy",
        text: "A surgeon removes the cancerous section of the colon.",
        img: "/treatment/colon-colectomy.png"
      },
      {
        title: "Multivisceral Resection",
        text: "This complex surgery removes the tumor along with nearby organs or structures affected by cancer.",
        img: "/treatment/colon-resection.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may be given before or after surgery as part of treatment.",
        img: "/treatment/colon-chemo.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be used before or after surgery depending on the treatment plan.",
        img: "/treatment/colon-radiation.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy may be used as an additional treatment before or after surgery.",
        img: "/treatment/colon-targeted.png"
      }
    ],

    supportiveCare: [
      {
        title: "Screening Follow-up",
        text: "Regular screening can help detect colon polyps or cancer early."
      },
      {
        title: "Nutrition Support",
        text: "Eating well with lean protein, vegetables and whole grains may support overall health."
      },
      {
        title: "Risk Reduction",
        text: "Stopping smoking, avoiding alcohol and maintaining a healthy weight may help reduce risk."
      },
      {
        title: "Care Team Support",
        text: "Your cancer care team can explain recommendations and support you throughout diagnosis and treatment."
      }
    ]
  }
},

//duadenal cancer//

{
  slug: "duodenal-cancer",

  title: "Duodenal Cancer",

  description:
    "The duodenum is the first part of the small intestine and plays an important role in digestion. It receives partially digested food from the stomach and helps break it down further using digestive juices from the pancreas and liver.",

  bannerImg: "/cancers/duodenal-cancer.webp",

  overview: {
    intro:
      "Duodenal cancer is a rare cancer that begins in the duodenum, the first section of the small intestine. It develops when abnormal cells grow uncontrollably within the lining of the duodenum and form a tumor. Because the duodenum is part of the digestive tract, the disease can affect how food moves and is processed in the body.",

    description:
      "This cancer is uncommon and may not cause noticeable symptoms in its early stages. As the disease progresses, symptoms can develop depending on the tumor’s size and location. Early diagnosis can be challenging, but timely evaluation and treatment are important for managing the disease and improving outcomes.",
  },


  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/duodenum-adenocarcinoma.png",
        title: "Adenocarcinoma",
        text: "Adenocarcinoma is the most common type of duodenal cancer and starts in glandular cells that line the intestine."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "",
        title: "Risk Factors Not Listed",
        text: "This page does not provide a dedicated section describing specific risk factors for duodenal cancer."
      }
    ],

    lifestyle: [
      {
        icon: "",
        title: "Information Not Available",
        text: "Lifestyle-related risk factors are not specifically discussed on this page."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Abdominal Pain",
        text: "Pain in the abdomen may occur as the tumor grows.",
        img: "/symptoms/duodenal-pain.png"
      },
      {
        title: "Nausea",
        text: "People with duodenal cancer may experience nausea.",
        img: "/symptoms/duodenal-nausea.png"
      },
      {
        title: "Constipation",
        text: "Constipation may develop when the tumor affects digestion.",
        img: "/symptoms/duodenal-constipation.png"
      },
      {
        title: "Vomiting",
        text: "Vomiting may occur if the tumor interferes with food passing through the intestine.",
        img: "/symptoms/duodenal-vomiting.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may begin with a physical examination and review of symptoms.",
        img: "/diagnosis/duodenal-exam.png"
      },
      {
        title: "Imaging Tests",
        text: "Imaging tests may help identify the location and size of a tumor.",
        img: "/diagnosis/duodenal-imaging.png"
      },
      {
        title: "Endoscopy",
        text: "Endoscopy allows providers to examine the inside of the digestive tract more closely.",
        img: "/diagnosis/duodenal-endoscopy.png"
      },
      {
        title: "Biopsy",
        text: "A tissue sample may be removed and examined to confirm the diagnosis.",
        img: "/diagnosis/duodenal-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "Surgery is commonly used to remove the cancer when possible.",
        img: "/treatment/duodenal-surgery.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may be used depending on how advanced the cancer is.",
        img: "/treatment/duodenal-chemo.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be included in treatment plans for some patients.",
        img: "/treatment/duodenal-radiation.png"
      }
    ],

    supportiveCare: [
      {
        title: "Nutrition Support",
        text: "Nutrition support may help people manage digestive symptoms and maintain strength."
      },
      {
        title: "Symptom Management",
        text: "Treatment can help manage symptoms related to digestion and bowel function."
      },
      {
        title: "Follow-up Care",
        text: "Regular follow-up helps monitor recovery and response to treatment."
      },
      {
        title: "Emotional Support",
        text: "Support resources may help patients and families cope with diagnosis and treatment."
      }
    ]
  }
},

//endometrial cancer//

{
  slug: "endometrial-cancer",

  title: "Endometrial Cancer",

  description:
    "The endometrium is the inner lining of the uterus that thickens and sheds during the menstrual cycle. It plays an important role in reproduction by providing the environment where a fertilized egg can implant and grow.",

  bannerImg: "/cancers/endometrial-cancer.webp",

  overview: {
    intro:
      "Endometrial cancer develops in the endometrium, the inner lining of the uterus. It is the most common type of uterine cancer and occurs when cells in the endometrium grow uncontrollably and form a tumor. Healthcare providers often use the terms uterine cancer and endometrial cancer interchangeably because most uterine cancers begin in the endometrium.",

    description:
      "This cancer most commonly affects people after menopause, although it can occur earlier in some cases. Abnormal vaginal bleeding is often one of the earliest signs, which may help lead to diagnosis before the cancer spreads. When detected early, treatment can be highly effective and may offer a strong chance of successful outcomes.",
  },


  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/endometrial-type.png",
        title: "Endometrial Cancer",
        text: "Endometrial cancer starts in the endometrium, the inner lining of the uterus."
      },
      {
        img: "/overview/endometrial-sarcoma.png",
        title: "Uterine Sarcoma",
        text: "Uterine sarcoma is another type of uterine cancer that develops in the muscle wall or connective tissue of the uterus."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "Endometrial cancer is more common in people who have gone through menopause."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Early or Late Menstruation History",
        text: "Starting periods before age 12 or going through menopause later may increase risk because of longer estrogen exposure."
      },
      {
        icon: "/icons/genetics.svg",
        title: "Lynch Syndrome",
        text: "Lynch syndrome is an inherited condition that increases the risk of several cancers, including endometrial cancer."
      },
      {
        icon: "/icons/density.svg",
        title: "Never Being Pregnant",
        text: "People who have never been pregnant may have a higher risk of endometrial cancer."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/weight.svg",
        title: "Obesity",
        text: "Obesity can increase estrogen levels and raise the risk of endometrial cancer."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Hormone Therapy",
        text: "Taking estrogen without progesterone after menopause may increase risk."
      },
      {
        icon: "/icons/diet.svg",
        title: "High-Fat Diet",
        text: "A high-fat diet may increase the risk of endometrial cancer."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Bleeding After Menopause",
        text: "Vaginal bleeding after menopause is a common symptom and should be checked by a healthcare provider.",
        img: "/symptoms/endometrial-postmenopause.png"
      },
      {
        title: "Bleeding Between Periods",
        text: "Bleeding between menstrual periods may be a warning sign.",
        img: "/symptoms/endometrial-between-periods.png"
      },
      {
        title: "Heavy or Long Periods",
        text: "Periods that are heavier or longer than usual may occur.",
        img: "/symptoms/endometrial-heavy-periods.png"
      },
      {
        title: "Watery or Blood-Tinged Discharge",
        text: "A watery or blood-tinged vaginal discharge may be present.",
        img: "/symptoms/endometrial-discharge.png"
      },
      {
        title: "Pelvic Pain",
        text: "Pain in the pelvis may occur in some people.",
        img: "/symptoms/endometrial-pelvic-pain.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Pelvic Exam",
        text: "A healthcare provider may perform a pelvic exam to check the uterus, vagina and nearby structures.",
        img: "/diagnosis/endometrial-pelvic-exam.png"
      },
      {
        title: "Transvaginal Ultrasound",
        text: "This ultrasound uses a wand placed in the vagina to look at the uterus and measure the endometrium.",
        img: "/diagnosis/endometrial-ultrasound.png"
      },
      {
        title: "Endometrial Biopsy",
        text: "A small sample of tissue from the uterine lining may be removed and checked for cancer cells.",
        img: "/diagnosis/endometrial-biopsy.png"
      },
      {
        title: "Hysteroscopy",
        text: "A thin lighted tube may be used to look inside the uterus.",
        img: "/diagnosis/endometrial-hysteroscopy.png"
      },
      {
        title: "Dilation and Curettage",
        text: "This procedure removes tissue from the uterine lining so it can be examined in a lab.",
        img: "/diagnosis/endometrial-dc.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "Surgery is the most common treatment for endometrial cancer.",
        img: "/treatment/endometrial-surgery.png"
      },
      {
        title: "Hysterectomy",
        text: "A hysterectomy removes the uterus and is commonly used to treat endometrial cancer.",
        img: "/treatment/endometrial-hysterectomy.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy uses targeted energy to destroy cancer cells.",
        img: "/treatment/endometrial-radiation.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy uses medicines to kill cancer cells.",
        img: "/treatment/endometrial-chemo.png"
      },
      {
        title: "Hormone Therapy",
        text: "Hormone therapy may slow the growth of some endometrial cancers.",
        img: "/treatment/endometrial-hormone.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy helps the immune system recognize and attack cancer cells.",
        img: "/treatment/endometrial-immuno.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy uses medicines that target specific cancer cell features.",
        img: "/treatment/endometrial-targeted.png"
      }
    ],

    supportiveCare: [
      {
        title: "Follow-up Care",
        text: "Regular follow-up helps monitor recovery and check whether cancer has returned."
      },
      {
        title: "Side Effect Support",
        text: "Your care team can help manage side effects from treatment."
      },
      {
        title: "Fertility Discussion",
        text: "Some treatments affect the ability to become pregnant, so fertility concerns should be discussed before treatment."
      },
      {
        title: "Emotional Support",
        text: "Support groups and counseling can help patients cope with diagnosis and treatment."
      }
    ]
  }
},

//esophageal cancer//
{
  slug: "esophageal-cancer",

  title: "Esophageal Cancer",

  description:
    "The esophagus is a muscular tube that carries food and liquids from the throat to the stomach. It plays an essential role in the digestive system by moving swallowed food toward the stomach for further digestion.",

  bannerImg: "/cancers/esophageal-cancer.webp",

  overview: {
    intro:
      "Esophageal cancer develops when abnormal cells in the lining of the esophagus grow uncontrollably and form a tumor. The disease can occur in different types depending on the cells involved and may develop anywhere along the length of the esophagus. It often begins in the inner lining before potentially growing into deeper layers of tissue.",

    description:
      "In its early stages, esophageal cancer may not cause noticeable symptoms, which can make early detection difficult. As the cancer grows, it may affect the normal passage of food through the esophagus. Early diagnosis and appropriate treatment are important for managing the disease and improving outcomes.",
  },


  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed Stage I-IV information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/esophageal-adeno.png",
        title: "Adenocarcinoma",
        text: "This is the most common type of esophageal cancer in the United States. It develops in tissue that makes mucus and usually affects the lower esophagus."
      },
      {
        img: "/overview/esophageal-squamous.png",
        title: "Squamous Cell Carcinoma",
        text: "This type begins in the squamous cells that line the esophagus and usually affects the upper and middle parts."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "Esophageal cancer typically affects people aged 60 and older."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Sex",
        text: "Males are more likely to develop esophageal cancer."
      },
      {
        icon: "/icons/density.svg",
        title: "Race",
        text: "Race may affect risk for specific types. Black and Asian people are more likely to have squamous cell esophageal cancer, while white people typically have adenocarcinoma."
      },
      {
        icon: "/icons/acid-reflux.svg",
        title: "Barrett’s Esophagus and Acid Reflux",
        text: "Barrett’s esophagus and chronic acid reflux may increase risk."
      },
      {
        icon: "/icons/heartburn.svg",
        title: "Chronic Heartburn",
        text: "Long-term heartburn may increase the chance of developing esophageal cancer."
      },
      {
        icon: "/icons/genetics.svg",
        title: "Inherited Disorders",
        text: "Certain inherited disorders, such as achalasia, may increase risk."
      },
      {
        icon: "/icons/head-neck.svg",
        title: "Head and Neck Cancer History",
        text: "A history of head and neck cancer may increase risk."
      },
      {
        icon: "/icons/hpv.svg",
        title: "HPV",
        text: "Human papillomavirus is listed as a medical condition linked with increased risk."
      },
      {
        icon: "/icons/weight.svg",
        title: "Overweight or Obesity",
        text: "Being overweight or having obesity may increase the risk of esophageal cancer."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/alcohol.svg",
        title: "Alcohol Use",
        text: "Long-term or heavy use of alcohol may increase risk."
      },
      {
        icon: "/icons/smoking.svg",
        title: "Tobacco Use",
        text: "Tobacco use, including smokeless tobacco, may increase the risk of esophageal cancer."
      },
      {
        icon: "/icons/chemical.svg",
        title: "Chemical Exposure",
        text: "Long-term exposure to substances such as dry-cleaning solvents, mineral spirits, paint and varnishes may increase risk."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Difficulty Swallowing",
        text: "Difficulty swallowing is often the first symptom people notice.",
        img: "/symptoms/esophageal-swallowing.png"
      },
      {
        title: "Heartburn",
        text: "Heartburn may be a symptom, especially if it is new or getting worse.",
        img: "/symptoms/esophageal-heartburn.png"
      },
      {
        title: "Weight Loss",
        text: "Unintentional weight loss may occur.",
        img: "/symptoms/esophageal-weight.png"
      },
      {
        title: "Chest Pain",
        text: "Chest pain may develop as the tumor grows.",
        img: "/symptoms/esophageal-chest.png"
      },
      {
        title: "Persistent Cough",
        text: "A chronic cough that does not go away may be a symptom.",
        img: "/symptoms/esophageal-cough.png"
      },
      {
        title: "Hoarseness",
        text: "Hoarseness that does not go away may occur.",
        img: "/symptoms/esophageal-hoarseness.png"
      },
      {
        title: "Throat or Back Pain",
        text: "Pain may occur in the throat, behind the breastbone or between the shoulder blades.",
        img: "/symptoms/esophageal-pain.png"
      },
      {
        title: "Vomiting or Coughing Blood",
        text: "Vomiting blood or coughing up blood may occur.",
        img: "/symptoms/esophageal-blood.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may do a physical exam and ask about symptoms and medical history.",
        img: "/diagnosis/esophageal-exam.png"
      },
      {
        title: "Barium Swallow",
        text: "A barium swallow may help check for tumors in the esophagus.",
        img: "/diagnosis/esophageal-barium.png"
      },
      {
        title: "CT Scan",
        text: "A CT scan may look for cancer in the chest and abdomen.",
        img: "/diagnosis/esophageal-ct.png"
      },
      {
        title: "Upper Endoscopy",
        text: "Upper endoscopy lets providers look inside the esophagus and may include endoscopic ultrasound.",
        img: "/diagnosis/esophageal-endoscopy.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy removes a small piece of tissue to check for cancer. It may be done during upper endoscopy.",
        img: "/diagnosis/esophageal-biopsy.png"
      },
      {
        title: "Tumor Grade",
        text: "Providers may grade tumors by checking whether tumor cells look and act like healthy cells.",
        img: "/diagnosis/esophageal-grade.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Esophagectomy",
        text: "This surgery removes some or most of the esophagus and surrounding tissue. It is used for early-stage cancer.",
        img: "/treatment/esophageal-esophagectomy.png"
      },
      {
        title: "Multivisceral Resection",
        text: "This complex surgery treats cancer that has grown into nearby organs by removing the tumor and affected surrounding structures.",
        img: "/treatment/esophageal-resection.png"
      },
      {
        title: "Endoscopic Submucosal Dissection",
        text: "ESD is a minimally invasive procedure to remove precancerous or cancerous polyps or very small tumors.",
        img: "/treatment/esophageal-esd.png"
      },
      {
        title: "Endoscopic Mucosal Resection",
        text: "EMR removes tumors in the mucous lining of the esophagus.",
        img: "/treatment/esophageal-emr.png"
      },
      {
        title: "Endoscopic Laser Therapy",
        text: "This treatment uses a laser to destroy cancerous tissue in the esophagus and may help when a tumor blocks swallowing.",
        img: "/treatment/esophageal-laser.png"
      },
      {
        title: "Photodynamic Therapy",
        text: "PDT uses lasers to activate medication that causes chemical reactions to kill cancer cells.",
        img: "/treatment/esophageal-pdt.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation may shrink a tumor before surgery, remove remaining cancer cells after surgery or ease symptoms if cancer has spread.",
        img: "/treatment/esophageal-radiation.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may be used with radiation before or after surgery, or when cancer has spread.",
        img: "/treatment/esophageal-chemo.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy may treat cancer cells that carry certain proteins or genes that help them grow.",
        img: "/treatment/esophageal-targeted.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy targets the immune system’s response to cancer cells and may be used before or after surgery or when surgery is not an option.",
        img: "/treatment/esophageal-immuno.png"
      }
    ],

    supportiveCare: [
      {
        title: "Cancer Rehabilitation",
        text: "Cancer rehabilitation supports patients before, during and after treatment."
      },
      {
        title: "Palliative Care",
        text: "Palliative care helps manage symptoms, treatment side effects, comfort and emotional support."
      },
      {
        title: "Cancer Survivorship",
        text: "Cancer survivorship helps people live as long as possible with the best possible quality of life."
      },
      {
        title: "Regular Follow-up",
        text: "Follow-up may include physical exams, blood tests, imaging tests and endoscopy after treatment."
      }
    ]
  }
},

//ewing sarcoma//
{
  slug: "ewing-sarcoma",

  title: "Ewing Sarcoma",

  description:
    "Bones provide structure, support movement and help protect vital organs throughout the body. Bone marrow inside certain bones also plays an important role in producing blood cells.",

  bannerImg: "/cancers/ewings-sarcoma.webp",

  overview: {
    intro:
      "Ewing sarcoma is a rare cancer that usually develops in bones or the soft tissues surrounding bones. It most often affects children, teenagers and young adults, although it can occur at any age. The disease begins when cells grow uncontrollably and form a tumor, most commonly in the pelvis, legs, ribs or arms.",

    description:
      "Because Ewing sarcoma is an uncommon cancer, diagnosis often requires specialized testing to confirm the condition. The cancer can grow and spread to other parts of the body if not treated. However, advances in treatment have improved outcomes, and early diagnosis plays an important role in managing the disease effectively.",
  },


  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/ewing-bone-type.png",
        title: "Ewing Sarcoma of Bone",
        text: "This is the most common type of Ewing sarcoma."
      },
      {
        img: "/overview/ewing-extraosseous.png",
        title: "Extraosseous Ewing Tumor",
        text: "This type affects the soft tissues around bones, including muscles, tendons and ligaments."
      },
      {
        img: "/overview/ewing-ppnet.png",
        title: "Peripheral Primitive Neuroectodermal Tumor",
        text: "This type can start in bone or soft tissue."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "Anyone can develop Ewing sarcoma, but it most often affects people ages 10 to 20."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Sex",
        text: "Ewing sarcoma is slightly more common in males than females."
      },
      {
        icon: "/icons/density.svg",
        title: "Race",
        text: "The condition is more likely to affect people who are white than people who are Asian American or Black."
      }
    ],

    lifestyle: [
      {
        icon: "",
        title: "No Lifestyle Risk Factors",
        text: "This page does not identify clearly established lifestyle-related risk factors for Ewing sarcoma."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Bone Pain",
        text: "Bone pain may come and go and may become worse at night.",
        img: "/symptoms/ewing-bone-pain.png"
      },
      {
        title: "Swelling Around Bone",
        text: "Swelling may develop in the tissue around bones and may hurt when touched.",
        img: "/symptoms/ewing-swelling.png"
      },
      {
        title: "Lumps Near Skin",
        text: "Lumps near the surface of the skin may feel warm and soft to the touch.",
        img: "/symptoms/ewing-lump.png"
      },
      {
        title: "Fever",
        text: "A fever that does not go away may occur.",
        img: "/symptoms/ewing-fever.png"
      },
      {
        title: "Broken Bones",
        text: "Bones may break without an injury.",
        img: "/symptoms/ewing-fracture.png"
      },
      {
        title: "Fatigue and Weight Loss",
        text: "Fatigue and unexpected weight loss may occur if Ewing sarcoma spreads.",
        img: "/symptoms/ewing-fatigue.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may do a physical exam, feel for lumps or bumps and ask about symptoms.",
        img: "/diagnosis/ewing-exam.png"
      },
      {
        title: "Imaging Tests",
        text: "Imaging tests help providers look closely at bones and soft tissues. Tests may include CT, MRI, PET and bone scans.",
        img: "/diagnosis/ewing-imaging.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy collects tissue samples for a pathologist to examine under a microscope.",
        img: "/diagnosis/ewing-biopsy.png"
      },
      {
        title: "Needle Biopsy",
        text: "A needle biopsy may be used to collect tissue from the tumor area.",
        img: "/diagnosis/ewing-needle.png"
      },
      {
        title: "Bone Marrow Aspiration",
        text: "Bone marrow aspiration may be done as part of the diagnostic process.",
        img: "/diagnosis/ewing-marrow.png"
      },
      {
        title: "Blood Tests",
        text: "Blood tests may show if cancer is spreading and may include CBC with differential, CMP and LDH.",
        img: "/diagnosis/ewing-blood.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Chemotherapy",
        text: "Chemotherapy is a common first treatment for Ewing sarcoma.",
        img: "/treatment/ewing-chemo.png"
      },
      {
        title: "Surgery",
        text: "Surgery may be done after chemotherapy to remove the tumor.",
        img: "/treatment/ewing-surgery.png"
      },
      {
        title: "More Chemotherapy",
        text: "Additional chemotherapy may be given after surgery.",
        img: "/treatment/ewing-more-chemo.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be used after surgery or as another treatment option.",
        img: "/treatment/ewing-radiation.png"
      },
      {
        title: "Autologous Stem Cell Transplant",
        text: "An autologous stem cell transplant may be an option if cancer is not in the bone marrow.",
        img: "/treatment/ewing-transplant.png"
      },
      {
        title: "Clinical Trial",
        text: "A provider may recommend considering a clinical trial that studies new treatment approaches.",
        img: "/treatment/ewing-trial.png"
      }
    ],

    supportiveCare: [
      {
        title: "Side Effect Support",
        text: "Contact the care team if treatment side effects are more severe than expected."
      },
      {
        title: "Pain Management",
        text: "Persistent or worsening pain should be discussed with the cancer care team."
      },
      {
        title: "Late Effects Monitoring",
        text: "Children may need monitoring for late effects involving growth, organs, learning, fertility and mental health."
      },
      {
        title: "Child Life Support",
        text: "Child life specialists can support children and families during diagnosis and treatment."
      }
    ]
  }
},
//eye cancer//
{
  slug: "eye-cancer",
  title: "Eye Cancer",
  description: "Eye cancer happens when cells in or around the eye grow out of control and form a tumor. Eye cancer may begin in the eye itself or spread to the eye from cancer that started elsewhere in the body.",

  overview: {
    intro: "Eye cancer is uncommon and can affect different parts of the eye. Some eye cancers begin in the eye, while others spread there from another part of the body. Early detection and treatment can help preserve vision and control the disease.",
    cards: [
      {
        img: "/overview/eye-primary.png",
        title: "Primary Eye Cancer",
        text: "Primary eye cancer begins in the tissues of the eye."
      },
      {
        img: "/overview/eye-secondary.png",
        title: "Secondary Eye Cancer",
        text: "Secondary eye cancer happens when cancer spreads to the eye from another part of the body."
      },
      {
        img: "/overview/eye-rare.png",
        title: "Rare Cancer",
        text: "Eye cancer is uncommon compared with many other types of cancer."
      },
      {
        img: "/overview/eye-vision.png",
        title: "Vision Impact",
        text: "Eye cancer may affect vision depending on the tumor’s location and size."
      },
      {
        img: "/overview/eye-treatment.png",
        title: "Many Treatment Options",
        text: "Treatment may include surgery, radiation therapy, laser treatments and medicines."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/eye-melanoma.png",
        title: "Uveal Melanoma",
        text: "Uveal melanoma is the most common type of eye cancer in adults."
      },
      {
        img: "/overview/eye-retinoblastoma.png",
        title: "Retinoblastoma",
        text: "Retinoblastoma is the most common eye cancer in children."
      },
      {
        img: "/overview/eye-lymphoma.png",
        title: "Intraocular Lymphoma",
        text: "This rare eye cancer develops in lymphocytes within the eye."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/reproductive.svg",
        title: "Light Eye Color",
        text: "People with blue, green or gray eyes may have a higher risk of uveal melanoma."
      },
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "Some eye cancers are more common in older adults, while retinoblastoma mainly affects children."
      },
      {
        icon: "/icons/genetics.svg",
        title: "Inherited Gene Changes",
        text: "Certain inherited genetic conditions may increase the risk of developing eye cancer."
      },
      {
        icon: "/icons/density.svg",
        title: "Fair Skin",
        text: "People with fair skin may have a higher risk of some eye cancers."
      }
    ],

    lifestyle: [
      {
        icon: "",
        title: "Current Understanding",
        text: "This page does not identify clearly established lifestyle-related risk factors for eye cancer."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Blurred Vision",
        text: "Vision may become blurry or less clear.",
        img: "/symptoms/eye-blurred.png"
      },
      {
        title: "Vision Changes",
        text: "People may notice changes in how they see objects or light.",
        img: "/symptoms/eye-vision-change.png"
      },
      {
        title: "Floaters",
        text: "Floaters may appear as spots, squiggles or shapes drifting across vision.",
        img: "/symptoms/eye-floaters.png"
      },
      {
        title: "Flashes of Light",
        text: "Some people notice flashes of light in their field of vision.",
        img: "/symptoms/eye-flashes.png"
      },
      {
        title: "Dark Spot in Vision",
        text: "A growing dark area may appear within the visual field.",
        img: "/symptoms/eye-dark-spot.png"
      },
      {
        title: "Bulging Eye",
        text: "An eye may appear to bulge outward in some cases.",
        img: "/symptoms/eye-bulging.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Eye Examination",
        text: "An ophthalmologist may perform a detailed eye examination to look for abnormalities.",
        img: "/diagnosis/eye-exam.png"
      },
      {
        title: "Dilated Eye Exam",
        text: "Eye drops may be used to enlarge the pupil so the inside of the eye can be examined.",
        img: "/diagnosis/eye-dilated.png"
      },
      {
        title: "Ultrasound",
        text: "Ultrasound can help providers evaluate the size and location of a tumor.",
        img: "/diagnosis/eye-ultrasound.png"
      },
      {
        title: "Imaging Tests",
        text: "CT scans or MRI scans may provide additional information about the tumor.",
        img: "/diagnosis/eye-imaging.png"
      },
      {
        title: "Biopsy",
        text: "In some situations, a tissue sample may be collected and examined.",
        img: "/diagnosis/eye-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may destroy cancer cells while preserving as much vision as possible.",
        img: "/treatment/eye-radiation.png"
      },
      {
        title: "Laser Therapy",
        text: "Laser treatments may be used for certain eye tumors.",
        img: "/treatment/eye-laser.png"
      },
      {
        title: "Surgery",
        text: "Surgery may remove the tumor or affected eye structures depending on the situation.",
        img: "/treatment/eye-surgery.png"
      },
      {
        title: "Enucleation",
        text: "Enucleation is surgery to remove the eye when other treatments are not suitable.",
        img: "/treatment/eye-enucleation.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may be used for some eye cancers, especially certain childhood cancers.",
        img: "/treatment/eye-chemo.png"
      }
    ],

    supportiveCare: [
      {
        title: "Vision Rehabilitation",
        text: "Vision rehabilitation may help people adapt to vision changes after treatment."
      },
      {
        title: "Artificial Eye Support",
        text: "People who have an eye removed may receive a prosthetic eye."
      },
      {
        title: "Regular Monitoring",
        text: "Follow-up appointments help detect recurrence or treatment-related changes."
      },
      {
        title: "Emotional Support",
        text: "Support resources may help patients adjust to diagnosis and vision-related changes."
      }
    ]
  }
},

//fallopian tube cancer//

{
  slug: "fallopian-tube-cancer",
  title: "Fallopian Tube Cancer",
  description: "Fallopian tube cancer is a rare gynecological cancer that affects the ducts that carry eggs from the ovaries to the uterus. It is often linked with epithelial tissue and may spread quickly before symptoms appear.",

  overview: {
    intro: "Fallopian tube cancer forms in the fallopian tubes, the ducts that carry eggs from the ovaries to the uterus. Most cases start in epithelial tissue and behave similarly to ovarian cancer and primary peritoneal cancer. It is often diagnosed after it has spread because early symptoms can be difficult to notice.",
    cards: [
      {
        img: "/overview/fallopian-tubes.png",
        title: "Fallopian Tubes",
        text: "Fallopian tubes are ducts that carry eggs from the ovaries to the uterus."
      },
      {
        img: "/overview/fallopian-rare.png",
        title: "Rare Gynecological Cancer",
        text: "Fallopian tube cancer is rare and affects the female reproductive system."
      },
      {
        img: "/overview/fallopian-epithelial.png",
        title: "Epithelial Tissue",
        text: "Most fallopian tube cancers start in epithelial tissue and act like ovarian cancer and primary peritoneal cancer."
      },
      {
        img: "/overview/fallopian-fast.png",
        title: "Fast Spreading",
        text: "Most fallopian tube and ovarian tumors are high-grade serous tumors, which means they can spread fast."
      },
      {
        img: "/overview/fallopian-early.png",
        title: "Early Treatment",
        text: "Fallopian tube cancer may be curable if treated early, when surgery can remove all cancer cells."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "I",
        title: "Stage I",
        text: "Cancer affects one fallopian tube or both."
      },
      {
        label: "II",
        title: "Stage II",
        text: "Cancer affects one fallopian tube or both and nearby tissues in the pelvis."
      },
      {
        label: "III",
        title: "Stage III",
        text: "Cancer has spread outside the pelvis to lymph nodes or nearby organs."
      },
      {
        label: "IV",
        title: "Stage IV",
        text: "Cancer has spread to the liver or distant organs such as the lungs or brain."
      }
    ],

    types: [
      {
        img: "/overview/fallopian-serous.png",
        title: "High-Grade Serous Tumor",
        text: "Most fallopian tube and ovarian tumors are high-grade serous tumors, which can spread quickly."
      },
      {
        img: "/overview/fallopian-sarcoma.png",
        title: "Sarcoma",
        text: "Some fallopian tube cancers start in connective tissue and are sarcomas."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "More than half of people with fallopian tube cancer or ovarian cancer are over 63."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Ethnicity",
        text: "People living in North America or those of Northern European or Ashkenazi Jewish descent are more likely to get fallopian tube cancer."
      },
      {
        icon: "/icons/family.svg",
        title: "Family History",
        text: "Risk is greater if a first-degree biological relative has had breast cancer, ovarian cancer or fallopian tube cancer."
      },
      {
        icon: "/icons/genetics.svg",
        title: "BRCA Gene Mutation",
        text: "Changes to the BRCA gene increase the risk of fallopian tube cancer."
      },
      {
        icon: "/icons/density.svg",
        title: "Inherited Conditions",
        text: "Inherited conditions such as Lynch syndrome and Peutz-Jeghers syndrome increase fallopian tube cancer risk."
      },
      {
        icon: "/icons/endometriosis.svg",
        title: "Endometriosis",
        text: "Endometriosis is also listed as a risk factor."
      },
      {
        icon: "/icons/pregnancy.svg",
        title: "Pregnancy History",
        text: "Risk may be higher if you’ve never been pregnant or had your first full-term pregnancy after age 35."
      },
      {
        icon: "/icons/menstrual.svg",
        title: "Menstrual Cycle History",
        text: "Getting your first period before age 12 or going through menopause after age 51 are risk factors."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/weight.svg",
        title: "Obesity",
        text: "Having a BMI above 30 may increase risk, especially if obesity was present during early adulthood."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Pelvic Pain or Mass",
        text: "Pelvic pain or a pelvic mass may occur.",
        img: "/symptoms/fallopian-pelvic.png"
      },
      {
        title: "Abdominal Pain or Bloating",
        text: "Abdominal pain, swelling or bloating may be a symptom.",
        img: "/symptoms/fallopian-bloating.png"
      },
      {
        title: "Appetite Changes",
        text: "Loss of appetite, feeling full quickly or nausea may occur.",
        img: "/symptoms/fallopian-appetite.png"
      },
      {
        title: "Bowel Changes",
        text: "Changes in pooping habits, such as constipation or diarrhea, may happen.",
        img: "/symptoms/fallopian-bowel.png"
      },
      {
        title: "Frequent Urination",
        text: "Peeing more often may be a symptom.",
        img: "/symptoms/fallopian-urination.png"
      },
      {
        title: "Abnormal Bleeding",
        text: "Abnormal periods or bleeding after menopause may occur.",
        img: "/symptoms/fallopian-bleeding.png"
      },
      {
        title: "Vaginal Discharge",
        text: "Watery or bloody vaginal discharge may be a warning sign.",
        img: "/symptoms/fallopian-discharge.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Pelvic Exam",
        text: "A provider may first notice a lump or mass during a routine pelvic exam.",
        img: "/diagnosis/fallopian-pelvic-exam.png"
      },
      {
        title: "CA-125 Blood Test",
        text: "A CA-125 blood test measures cancer antigen 125, which may be higher in some people with fallopian tube cancer.",
        img: "/diagnosis/fallopian-ca125.png"
      },
      {
        title: "Imaging Tests",
        text: "Imaging tests may include transvaginal ultrasound, CT scan, MRI or PET scan to look at the fallopian tubes and ovaries.",
        img: "/diagnosis/fallopian-imaging.png"
      },
      {
        title: "Exploratory Surgery",
        text: "Surgery lets providers directly examine organs and remove suspicious tissue for testing.",
        img: "/diagnosis/fallopian-surgery.png"
      },
      {
        title: "Paracentesis",
        text: "Paracentesis collects fluid that has built up in the abdomen so it can be tested.",
        img: "/diagnosis/fallopian-paracentesis.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy removes a tissue sample from a tumor for testing, sometimes with ultrasound or CT scan guidance.",
        img: "/diagnosis/fallopian-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "Surgery is often the first stage of treatment and may also help diagnose fallopian tube cancer.",
        img: "/treatment/fallopian-surgery.png"
      },
      {
        title: "Hysterectomy",
        text: "Most people have surgery to remove the uterus.",
        img: "/treatment/fallopian-hysterectomy.png"
      },
      {
        title: "Salpingectomy",
        text: "Surgery usually removes both fallopian tubes.",
        img: "/treatment/fallopian-salpingectomy.png"
      },
      {
        title: "Oophorectomy",
        text: "Surgery often removes the ovaries along with the fallopian tubes.",
        img: "/treatment/fallopian-oophorectomy.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may shrink the tumor before surgery or destroy cancer cells that remain after surgery."
      },
      {
        title: "HIPEC",
        text: "Heated intraoperative peritoneal chemotherapy may be given during surgery for concentrated treatment in the abdomen.",
        img: "/treatment/fallopian-hipec.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy may be recommended if you have a BRCA genetic mutation.",
        img: "/treatment/fallopian-targeted.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy may be considered if cancer cells have a specific genetic mutation such as Lynch syndrome.",
        img: "/treatment/fallopian-immuno.png"
      },
      {
        title: "Clinical Trials",
        text: "A provider may recommend a clinical trial to try promising new cancer treatments.",
        img: "/treatment/fallopian-trial.png"
      },
      {
        title: "Palliative Care",
        text: "Palliative care can help manage cancer symptoms and treatment side effects.",
        img: "/treatment/fallopian-palliative.png"
      }
    ],

    supportiveCare: [
      {
        title: "Regular Follow-up",
        text: "Regular checkups are important, especially within the first five years, to check for recurrent cancer."
      },
      {
        title: "Lifelong Monitoring",
        text: "People treated for advanced cancer may need lifelong checkups."
      },
      {
        title: "Side Effect Support",
        text: "Providers can help manage lasting side effects after treatment."
      },
      {
        title: "Support Resources",
        text: "Support groups and care resources may help people living with a cancer diagnosis."
      }
    ]
  }
},

//gallbladder cancer//

{
  slug: "gallbladder-cancer",
  title: "Gallbladder Cancer",
  description: "Gallbladder cancer is a rare cancer that develops in the tissues of the gallbladder. It often does not cause symptoms in its early stages and is frequently discovered after it has spread beyond the gallbladder.",

  overview: {
    intro: "The gallbladder is a small organ located beneath the liver that stores bile. Gallbladder cancer is uncommon and often difficult to detect early because symptoms may not appear until the disease is advanced. Treatment may include surgery, chemotherapy and radiation therapy." 
,
    cards: [
      {
        img: "/overview/gallbladder-organ.png",
        title: "Gallbladder",
        text: "The gallbladder is a small organ beneath the liver that stores bile used in digestion."
      },
      {
        img: "/overview/gallbladder-rare.png",
        title: "Rare Cancer",
        text: "Gallbladder cancer is an uncommon form of cancer."
      },
      {
        img: "/overview/gallbladder-silent.png",
        title: "Few Early Symptoms",
        text: "Many people do not notice symptoms until the cancer has grown or spread."
      },
      {
        img: "/overview/gallbladder-spread.png",
        title: "Often Found Late",
        text: "Most cases are diagnosed after the cancer has spread beyond the gallbladder."
      },
      {
        img: "/overview/gallbladder-treatment.png",
        title: "Treatment Options",
        text: "Treatment may include surgery, chemotherapy and radiation therapy."
      }
    ]
  },

  typesStages: {
    stages: [
  {
    label: "0",
    title: "Stage 0",
    text: "Cancer is only in the innermost layer of the gallbladder."
  },
  {
    label: "I",
    title: "Stage I",
    text: "Cancer has spread beyond the inner layer into the muscle layer of the gallbladder wall."
  },
  {
    label: "II",
    title: "Stage II",
    text: "Cancer has spread through the muscle layer into the connective tissue layer of the gallbladder wall."
  },
  {
    label: "III",
    title: "Stage III",
    text: "Cancer has spread outside the gallbladder to nearby organs, blood vessels, lymph nodes or surrounding tissues."
  },
  {
    label: "IV",
    title: "Stage IV",
    text: "Cancer has spread to distant organs or distant parts of the body."
  }
],

    types: [
      {
        img: "/overview/gallbladder-adenocarcinoma.png",
        title: "Adenocarcinoma",
        text: "Most gallbladder cancers begin in gland-like cells that line the gallbladder."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/gallstones.svg",
        title: "Gallstones",
        text: "Gallstones are the most common risk factor associated with gallbladder cancer."
      },
      {
        icon: "/icons/inflammation.svg",
        title: "Gallbladder Inflammation",
        text: "Long-term inflammation of the gallbladder may increase risk."
      },
      {
        icon: "/icons/age.svg",
        title: "Older Age",
        text: "Gallbladder cancer is more common in older adults."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Sex",
        text: "Gallbladder cancer occurs more often in women than men."
      },
      {
        icon: "/icons/density.svg",
        title: "Gallbladder Polyps",
        text: "Certain gallbladder polyps may increase the risk of cancer."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/weight.svg",
        title: "Obesity",
        text: "Obesity is associated with an increased risk of gallbladder cancer."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Abdominal Pain",
        text: "Pain in the upper right side of the abdomen may occur.",
        img: "/symptoms/gallbladder-pain.png"
      },
      {
        title: "Abdominal Bloating",
        text: "Some people develop abdominal swelling or bloating.",
        img: "/symptoms/gallbladder-bloating.png"
      },
      {
        title: "Nausea and Vomiting",
        text: "Nausea and vomiting may occur as the disease progresses.",
        img: "/symptoms/gallbladder-nausea.png"
      },
      {
        title: "Jaundice",
        text: "Yellowing of the skin and eyes may develop when bile ducts become blocked.",
        img: "/symptoms/gallbladder-jaundice.png"
      },
      {
        title: "Fever",
        text: "Some people may develop a fever.",
        img: "/symptoms/gallbladder-fever.png"
      },
      {
        title: "Lumps in the Abdomen",
        text: "A healthcare provider may be able to feel a mass in the abdomen.",
        img: "/symptoms/gallbladder-mass.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A provider may perform a physical examination and review symptoms and medical history.",
        img: "/diagnosis/gallbladder-exam.png"
      },
      {
        title: "Blood Tests",
        text: "Blood tests may help evaluate liver function and look for signs of disease.",
        img: "/diagnosis/gallbladder-blood.png"
      },
      {
        title: "Ultrasound",
        text: "Ultrasound imaging may help identify abnormalities in the gallbladder.",
        img: "/diagnosis/gallbladder-ultrasound.png"
      },
      {
        title: "CT Scan",
        text: "CT scans may help determine the size and spread of the cancer.",
        img: "/diagnosis/gallbladder-ct.png"
      },
      {
        title: "MRI",
        text: "MRI may provide detailed images of the gallbladder and nearby structures.",
        img: "/diagnosis/gallbladder-mri.png"
      },
      {
        title: "Biopsy",
        text: "A tissue sample may be examined to confirm the diagnosis.",
        img: "/diagnosis/gallbladder-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "Surgery may remove the gallbladder and surrounding tissue when the cancer can be removed completely.",
        img: "/treatment/gallbladder-surgery.png"
      },
      {
        title: "Cholecystectomy",
        text: "A cholecystectomy removes the gallbladder.",
        img: "/treatment/gallbladder-cholecystectomy.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may be used before or after surgery, or when surgery is not possible.",
        img: "/treatment/gallbladder-chemo.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be used to destroy cancer cells or help control symptoms.",
        img: "/treatment/gallbladder-radiation.png"
      }
    ],

    supportiveCare: [
      {
        title: "Symptom Management",
        text: "Supportive care can help manage pain, jaundice and digestive symptoms."
      },
      {
        title: "Nutrition Support",
        text: "Nutritional guidance may help maintain strength during treatment."
      },
      {
        title: "Palliative Care",
        text: "Palliative care focuses on comfort and quality of life."
      },
      {
        title: "Follow-up Care",
        text: "Regular follow-up helps monitor treatment response and recurrence."
      }
    ]
  }
},

//gastric cancer//

{
  slug: "gastric-cancer",
  title: "Gastric Cancer",
  description: "Gastric cancer can refer to cancer that develops in the stomach. Hereditary diffuse gastric cancer is a genetic cancer syndrome that raises the lifetime risk of diffuse gastric cancer and, in women, lobular breast cancer.",

  overview: {
    intro: "Hereditary diffuse gastric cancer syndrome is passed down through family lines. It is usually linked to a mutated CDH1 gene, which affects how the body controls cell growth. Diffuse gastric cancer spreads through the stomach lining in small clusters instead of forming one solid tumor.",
    cards: [
      {
        img: "/overview/gastric-syndrome.png",
        title: "Inherited Cancer Syndrome",
        text: "Hereditary diffuse gastric cancer is a familial cancer syndrome that can be passed from a biological parent to a child."
      },
      {
        img: "/overview/gastric-cdh1.png",
        title: "CDH1 Gene Mutation",
        text: "The syndrome is usually linked to a mutation in the CDH1 gene, a tumor suppressor gene that helps keep cancer growth in check."
      },
      {
        img: "/overview/gastric-diffuse.png",
        title: "Diffuse Growth Pattern",
        text: "Diffuse gastric cancer spreads in small clusters throughout the stomach lining instead of forming a solid tumor."
      },
      {
        img: "/overview/gastric-lining.png",
        title: "Stomach Lining Changes",
        text: "As it grows, diffuse gastric cancer thickens and hardens the stomach lining and can spread into deeper layers."
      },
      {
        img: "/overview/gastric-breast-risk.png",
        title: "Linked Breast Cancer Risk",
        text: "Women who inherit this syndrome also have an increased risk of developing lobular breast cancer."
      },
      {
        img: "/overview/gastric-detection.png",
        title: "Hard to Detect Early",
        text: "Diffuse gastric cancer may not appear on routine imaging and often does not cause symptoms until advanced stages."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/gastric-diffuse-type.png",
        title: "Diffuse Gastric Cancer",
        text: "This type of stomach cancer spreads widely through the stomach lining in small cell clusters and may thicken the stomach wall."
      },
      {
        img: "/overview/gastric-lobular-breast.png",
        title: "Lobular Breast Cancer",
        text: "Women with hereditary diffuse gastric cancer syndrome have an increased risk of lobular breast cancer."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/genetics.svg",
        title: "Inherited Gene Mutation",
        text: "HDGC happens when a person inherits a mutated tumor-suppressing gene from a biological parent."
      },
      {
        icon: "/icons/density.svg",
        title: "CDH1 Mutation",
        text: "The CDH1 gene mutation is currently associated with about 40% of hereditary diffuse gastric cancer cases."
      },
      {
        icon: "/icons/family.svg",
        title: "Family Pattern",
        text: "A person may still be diagnosed without a CDH1 mutation if the family shows a strong pattern of diffuse gastric cancer."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Autosomal Dominant Inheritance",
        text: "If one biological parent has the mutation, there is a 50% chance they can pass it to a biological child."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/smoking.svg",
        title: "Smoking",
        text: "Smoking is listed as an environmental risk factor for developing stomach cancer."
      },
      {
        icon: "/icons/alcohol.svg",
        title: "Heavy Alcohol Use",
        text: "Heavy alcohol use is listed as an environmental risk factor for stomach cancer."
      },
      {
        icon: "/icons/diet.svg",
        title: "Red Meat Consumption",
        text: "Red meat consumption is listed among environmental risk factors for stomach cancer."
      },
      {
        icon: "/icons/infection.svg",
        title: "H. pylori Infection",
        text: "H. pylori infection is listed as an environmental risk factor for stomach cancer."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Stomach Pain",
        text: "Stomach pain may occur, especially in the upper left abdomen.",
        img: "/symptoms/gastric-pain.png"
      },
      {
        title: "Bloated Stomach",
        text: "A bloated stomach may be a symptom of diffuse gastric cancer.",
        img: "/symptoms/gastric-bloating.png"
      },
      {
        title: "Nausea and Vomiting",
        text: "Nausea and vomiting may occur.",
        img: "/symptoms/gastric-nausea.png"
      },
      {
        title: "Loss of Appetite",
        text: "People may experience loss of appetite.",
        img: "/symptoms/gastric-appetite.png"
      },
      {
        title: "Weight Loss",
        text: "Unexplained weight loss may develop.",
        img: "/symptoms/gastric-weight.png"
      },
      {
        title: "Fatigue",
        text: "Fatigue may occur as the disease progresses.",
        img: "/symptoms/gastric-fatigue.png"
      },
      {
        title: "Difficulty Swallowing",
        text: "Difficulty swallowing may be a symptom.",
        img: "/symptoms/gastric-swallowing.png"
      },
      {
        title: "Blood in Stool",
        text: "Blood in stool may occur.",
        img: "/symptoms/gastric-stool-blood.png"
      },
      {
        title: "Vomiting Blood",
        text: "Some people may vomit blood.",
        img: "/symptoms/gastric-vomit-blood.png"
      },
      {
        title: "Jaundice",
        text: "A yellow tint to the eyes and skin may occur.",
        img: "/symptoms/gastric-jaundice.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Risk Review",
        text: "A provider may calculate risk based on family history or genetic testing results.",
        img: "/diagnosis/gastric-risk-review.png"
      },
      {
        title: "Genetic Testing",
        text: "Genetic testing uses a blood sample to look for mutations linked with known genetic diseases."
      },
      {
        title: "Upper Endoscopy",
        text: "Upper endoscopy allows a provider to closely examine the stomach lining and collect tissue samples.",
        img: "/diagnosis/gastric-endoscopy.png"
      },
      {
        title: "Tissue Sampling",
        text: "Diffuse gastric cancer can be difficult to detect, so providers may take tissue samples during endoscopy.",
        img: "/diagnosis/gastric-tissue.png"
      },
      {
        title: "Breast MRI",
        text: "A breast MRI may be recommended to look for lobular breast cancer because it may not always show on a regular mammogram.",
        img: "/diagnosis/gastric-breast-mri.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy checks tissue under a microscope to confirm whether cancer is present.",
        img: "/diagnosis/gastric-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Regular Screening",
        text: "People with the syndrome but no cancer may need regular cancer screening tests.",
        img: "/treatment/gastric-screening.png"
      },
      {
        title: "Preventive Surgery",
        text: "Preventive surgery may be discussed for people with a confirmed CDH1 mutation.",
        img: "/treatment/gastric-preventive.png"
      },
      {
        title: "Total Gastrectomy",
        text: "For HDGC, providers often recommend total gastrectomy, which removes the whole stomach.",
        img: "/treatment/gastric-gastrectomy.png"
      },
      {
        title: "Digestive Reconstruction",
        text: "During total gastrectomy, the surgeon connects the esophagus directly to the small intestine.",
        img: "/treatment/gastric-reconstruction.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be used as an adjuvant therapy after surgery.",
        img: "/treatment/gastric-radiation.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may be used as an adjuvant therapy after surgery.",
        img: "/treatment/gastric-chemo.png"
      },
      {
        title: "Breast Cancer Treatment",
        text: "If lobular breast cancer develops, treatment usually begins with breast cancer surgery followed by adjuvant therapy.",
        img: "/treatment/gastric-breast-treatment.png"
      }
    ],

    supportiveCare: [
      {
        title: "Nutrition Support",
        text: "After total gastrectomy, nutrition support and supplements may help manage malabsorption and malnutrition."
      },
      {
        title: "Dumping Syndrome Support",
        text: "Changing eating habits may help symptoms such as nausea, diarrhea and low blood sugar after stomach removal."
      },
      {
        title: "Genetic Counseling",
        text: "Genetic counseling can help people understand the risk of passing HDGC to biological children."
      },
      {
        title: "Family Planning Support",
        text: "Selective IVF may be discussed for people who want to reduce the chance of passing on the CDH1 mutation."
      }
    ]
  }
},

//gastrointestinal stromal tumor (GIST)//
{
  slug: "gastrointestinal-stromal-tumor",
  title: "Gastrointestinal Stromal Tumor",
  description: "Gastrointestinal stromal tumors, or GISTs, are rare cancerous tumors that develop in the digestive system. They may not cause symptoms, but when symptoms appear, they can include belly pain, blood in stool and vomiting blood.",

  overview: {
    intro: "GISTs are rare cancerous tumors in the gastrointestinal tract. They are a type of soft tissue sarcoma and develop in cells called interstitial cells of Cajal, which are found in the walls of digestive organs. These tumors usually form in the stomach or small intestine.",
    cards: [
      {
        img: "/overview/gist-gi-tract.png",
        title: "Digestive System Tumor",
        text: "GISTs develop in the gastrointestinal tract, which is part of the digestive system."
      },
      {
        img: "/overview/gist-sarcoma.png",
        title: "Soft Tissue Sarcoma",
        text: "GIST is a type of soft tissue sarcoma."
      },
      {
        img: "/overview/gist-cajal.png",
        title: "Interstitial Cells of Cajal",
        text: "These tumors develop in cells called interstitial cells of Cajal, found in the walls of GI tract organs."
      },
      {
        img: "/overview/gist-stomach.png",
        title: "Common Locations",
        text: "GISTs typically form in the stomach or small intestine."
      },
      {
        img: "/overview/gist-silent.png",
        title: "May Not Cause Symptoms",
        text: "Small GISTs may not cause symptoms and may be found during tests or surgery for another reason."
      },
      {
        img: "/overview/gist-recurrence.png",
        title: "Can Come Back",
        text: "Treatment can ease symptoms and sometimes cure GIST, but these tumors may come back."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/gist-tumor.png",
        title: "Gastrointestinal Stromal Tumor",
        text: "This page describes GIST as a rare cancerous tumor of the digestive system and does not present separate GIST subtypes."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/genetics.svg",
        title: "KIT Gene Change",
        text: "GIST usually happens when the KIT gene changes, causing cells in the GI tract to multiply and form tumors."
      },
      {
        icon: "/icons/density.svg",
        title: "Carney-Stratakis Syndrome",
        text: "This rare inherited condition may increase the risk of developing a GIST."
      },
      {
        icon: "/icons/family.svg",
        title: "Familial GIST Syndrome",
        text: "Rarely, abnormal KIT genes may be passed from parent to child, increasing the chance of developing GISTs."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Neurofibromatosis Type 1",
        text: "Neurofibromatosis type 1 can cause certain cells to multiply and form tumors, and it may increase GIST risk."
      }
    ],

    lifestyle: [
      {
        icon: "",
        title: "No Lifestyle Risk Factors",
        text: "This page does not identify clearly established lifestyle-related risk factors for GIST."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Belly Pain",
        text: "Abdominal or belly pain may occur when a GIST causes symptoms.",
        img: "/symptoms/gist-belly-pain.png"
      },
      {
        title: "Blood in Stool",
        text: "Blood in stool may be a symptom of a gastrointestinal stromal tumor.",
        img: "/symptoms/gist-blood-stool.png"
      },
      {
        title: "Constipation",
        text: "Constipation may occur in some people with GIST.",
        img: "/symptoms/gist-constipation.png"
      },
      {
        title: "Fatigue",
        text: "Fatigue may develop as part of the symptom pattern.",
        img: "/symptoms/gist-fatigue.png"
      },
      {
        title: "Unintentional Weight Loss",
        text: "Losing weight without trying may be a symptom.",
        img: "/symptoms/gist-weight-loss.png"
      },
      {
        title: "Loss of Appetite",
        text: "Some people may experience reduced appetite.",
        img: "/symptoms/gist-appetite.png"
      },
      {
        title: "Vomiting Blood",
        text: "Vomiting blood may occur when a GIST causes bleeding in the digestive tract.",
        img: "/symptoms/gist-vomit-blood.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Symptom Review",
        text: "A healthcare provider may ask about symptoms and how long they have been present.",
        img: "/diagnosis/gist-symptoms.png"
      },
      {
        title: "Physical Examination",
        text: "A physical exam may be done as part of the diagnostic process.",
        img: "/diagnosis/gist-exam.png"
      },
      {
        title: "Upper Endoscopy",
        text: "Upper endoscopy may help providers examine the digestive tract.",
        img: "/diagnosis/gist-endoscopy.png"
      },
      {
        title: "CT Scan",
        text: "A CT scan may be used to evaluate the tumor.",
        img: "/diagnosis/gist-ct.png"
      },
      {
        title: "PET Scan",
        text: "A PET scan may be used during diagnosis.",
        img: "/diagnosis/gist-pet.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy collects tissue samples that a pathologist examines under a microscope.",
        img: "/diagnosis/gist-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "Surgery to remove the tumor is the most common treatment for GIST.",
        img: "/treatment/gist-surgery.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy may be used along with surgery to treat GIST.",
        img: "/treatment/gist-targeted.png"
      },
      {
        title: "Pre-Surgery Targeted Therapy",
        text: "Targeted therapy may be given before surgery to shrink a large tumor.",
        img: "/treatment/gist-pre-targeted.png"
      },
      {
        title: "Small Tumor Treatment",
        text: "Surgery may be the only treatment needed for small tumors.",
        img: "/treatment/gist-small-tumor.png"
      }
    ],

    supportiveCare: [
      {
        title: "Follow-up Appointments",
        text: "Follow-up visits every three to six months may help look for signs of a new GIST."
      },
      {
        title: "CT Monitoring",
        text: "CT scans of the liver and pelvis may be used during follow-up."
      },
      {
        title: "MRI or PET Monitoring",
        text: "MRI scans or PET scans may also be used to check for recurrence."
      },
      {
        title: "Care Team Support",
        text: "The healthcare team can answer questions and provide support during treatment and follow-up."
      }
    ]
  }
},
//germ cell tumor//
{
  slug: "germ-cell-tumor",
  title: "Germ Cell Tumor",
  description: "Germ cell tumors are growths that start from cells that normally develop into eggs or sperm. They may be benign or cancerous and most often affect children, teens and young adults.",

  overview: {
    intro: "Germ cell tumors usually start in reproductive organs such as the ovaries or testicles. Less commonly, they can form in areas outside the reproductive organs, including the belly, chest, back, tailbone and brain.",
    cards: [
      {
        img: "/overview/gct-germ-cells.png",
        title: "Germ Cells",
        text: "Germ cells are reproductive cells that normally grow into eggs or sperm."
      },
      {
        img: "/overview/gct-reproductive.png",
        title: "Common Starting Sites",
        text: "Germ cell tumors most often form in the ovaries or testicles."
      },
      {
        img: "/overview/gct-extragonadal.png",
        title: "Extragonadal Tumors",
        text: "Sometimes, germ cell tumors form outside the reproductive organs, such as in the belly, chest, back, tailbone or brain."
      },
      {
        img: "/overview/gct-age.png",
        title: "Common Age Group",
        text: "Germ cell tumors most commonly affect children, teens and young adults."
      },
      {
        img: "/overview/gct-benign-malignant.png",
        title: "Benign or Cancerous",
        text: "A germ cell tumor may be benign, meaning noncancerous, or malignant, meaning cancerous."
      },
      {
        img: "/overview/gct-treatable.png",
        title: "Treatment Outlook",
        text: "Most germ cell tumors are treatable, but outlook depends on the tumor type, location, spread and response to treatment."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/gct-seminoma.png",
        title: "Seminomas and Non-Seminomas",
        text: "These germ cell tumors can cause testicular cancer. Seminomas often grow and spread slowly, while non-seminomas grow larger and spread more quickly."
      },
      {
        img: "/overview/gct-choriocarcinoma.png",
        title: "Choriocarcinoma",
        text: "Choriocarcinomas are rare cancerous tumors most often found in the uterus and may spread to other body areas."
      },
      {
        img: "/overview/gct-germinoma.png",
        title: "Germinoma",
        text: "Germinomas are cancerous tumors that most commonly form in the brain and spinal cord, but may also form in the ovaries or testicles."
      },
      {
        img: "/overview/gct-embryonal.png",
        title: "Embryonal Cell Carcinoma",
        text: "Embryonal cell carcinomas are rare cancerous tumors and are often mixed with other tumor types."
      },
      {
        img: "/overview/gct-polyembryoma.png",
        title: "Polyembryoma",
        text: "Polyembryomas are fast-growing cancerous tumors often mixed with other germ cell tumor types."
      },
      {
        img: "/overview/gct-teratoma.png",
        title: "Teratoma",
        text: "Teratomas contain tissue such as teeth, hair, muscle or bone and may be benign or cancerous."
      },
      {
        img: "/overview/gct-yolk-sac.png",
        title: "Yolk Sac Tumor",
        text: "Yolk sac tumors are cancerous tumors made of cells similar to those in a developing embryo."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age Group",
        text: "Germ cell tumors are most common in children under 4, teens and young adults."
      },
      {
        icon: "/icons/family.svg",
        title: "Family History",
        text: "Risk may be higher if someone in your family has had a germ cell tumor."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Undescended Testicles",
        text: "Untreated undescended testicles may increase the chance of developing a germ cell tumor."
      },
      {
        icon: "/icons/genetics.svg",
        title: "Turner Syndrome",
        text: "Turner syndrome is listed as a risk factor for germ cell tumors."
      },
      {
        icon: "/icons/density.svg",
        title: "Klinefelter Syndrome",
        text: "Klinefelter syndrome is listed as a risk factor for germ cell tumors."
      }
    ],

    lifestyle: [
      {
        icon: "",
        title: "No Lifestyle Risk Factors",
        text: "This page does not identify clearly established lifestyle-related risk factors for germ cell tumors."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Pelvic, Belly or Groin Pain",
        text: "Discomfort or pain may occur in the pelvis, belly or groin depending on the tumor location.",
        img: "/symptoms/gct-pelvic-pain.png"
      },
      {
        title: "Swollen Belly",
        text: "A swollen belly may develop when the tumor grows or creates pressure.",
        img: "/symptoms/gct-swollen-belly.png"
      },
      {
        title: "Irregular Vaginal Bleeding",
        text: "Irregular vaginal bleeding may occur with some germ cell tumors.",
        img: "/symptoms/gct-bleeding.png"
      },
      {
        title: "Nausea",
        text: "Nausea may occur as one of the possible symptoms.",
        img: "/symptoms/gct-nausea.png"
      },
      {
        title: "Testicle Lump or Shape Change",
        text: "A solid firm lump in a testicle, with or without pain, or an unusually shaped testicle may be a symptom.",
        img: "/symptoms/gct-testicle-lump.png"
      },
      {
        title: "Scrotum Pain or Heaviness",
        text: "Pain or heaviness in the scrotum may occur.",
        img: "/symptoms/gct-scrotum.png"
      },
    
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may perform a physical exam and ask about symptoms.",
        img: "/diagnosis/gct-exam.png"
      },
      {
        title: "Blood Tests",
        text: "Blood tests may check enzymes, proteins or hormones, including hCG, AFP and LDH.",
        img: "/diagnosis/gct-blood.png"
      },
      {
        title: "CT, MRI or Ultrasound",
        text: "These imaging tests show pictures inside the body and are often early steps in diagnosis.",
        img: "/diagnosis/gct-imaging.png"
      },
      {
        title: "PET Scan",
        text: "A PET scan may show whether cancer has spread.",
        img: "/diagnosis/gct-pet.png"
      },
      {
        title: "Bone Scan",
        text: "A bone scan may show whether a tumor is affecting the bones.",
        img: "/diagnosis/gct-bone-scan.png"
      },
      {
        title: "Biopsy",
        text: "During a biopsy, tissue is removed from the tumor and sent to a lab for testing.",
        img: "/diagnosis/gct-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Surgery",
        text: "Many germ cell tumors can be cured with surgery to remove the tumor or affected reproductive organ tissue.",
        img: "/treatment/gct-surgery.png"
      },
      {
        title: "Ovarian Surgery",
        text: "A provider may remove the tumor from the affected ovary or remove the ovary and fallopian tube.",
        img: "/treatment/gct-ovarian-surgery.png"
      },
      {
        title: "Testicular Surgery",
        text: "With testicular cancer, the provider removes the testicle that contains the tumor during diagnosis.",
        img: "/treatment/gct-testicular-surgery.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy uses medicines to destroy cancer cells or stop them from dividing.",
        img: "/treatment/gct-chemo.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy uses high-energy X-rays to destroy cancer cells, and some germ cell tumors respond best to this treatment.",
        img: "/treatment/gct-radiation.png"
      }
    ],

    supportiveCare: [
      {
        title: "Prompt Evaluation",
        text: "Talk to a provider if you or your child has symptoms of a germ cell tumor."
      },
      {
        title: "Treatment Planning",
        text: "Treatment depends on age, tumor type, location, spread and response to treatment."
      },
      {
        title: "Follow-up Care",
        text: "Providers may recommend follow-up based on the tumor type and treatment response."
      },
      {
        title: "Emotional Support",
        text: "Support can help patients and families manage concerns during diagnosis and treatment."
      }
    ]
  }
},

//hairy cell leukemia//

{
  slug: "hairy-cell-leukemia",
  title: "Hairy Cell Leukemia",
  description: "Hairy cell leukemia is a rare, slow-growing leukemia. It happens when abnormal B lymphocytes multiply and build up in the bone marrow, lymph nodes, liver and spleen.",

  overview: {
    intro: "Hairy cell leukemia is a rare blood cancer that develops when the bone marrow makes too many abnormal B-cells. These cells can collect in the bone marrow, lymph nodes, liver and spleen. The disease grows slowly and may not cause symptoms for many years.",
    cards: [
      {
        img: "/overview/hcl-rare.png",
        title: "Rare Leukemia",
        text: "Hairy cell leukemia is a rare type of leukemia that grows slowly."
      },
      {
        img: "/overview/hcl-bcells.png",
        title: "Abnormal B-Cells",
        text: "It happens when the bone marrow makes too many abnormal B-cells, a type of white blood cell."
      },
      {
        img: "/overview/hcl-build-up.png",
        title: "Cell Buildup",
        text: "These abnormal cells can build up in the bone marrow, lymph nodes, liver and spleen."
      },
      {
        img: "/overview/hcl-hairy-cells.png",
        title: "Hair-Like Appearance",
        text: "The name comes from how the cells look under a microscope, with tiny hair-like projections."
      },
      {
        img: "/overview/hcl-slow.png",
        title: "Slow-Growing Disease",
        text: "Hairy cell leukemia grows slowly and may not cause symptoms for many years."
      },
      {
        img: "/overview/hcl-remission.png",
        title: "Long-Term Remission",
        text: "There is no cure, but treatment can often put the disease into remission for years."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/hcl-leukemia.png",
        title: "Hairy Cell Leukemia",
        text: "This page describes hairy cell leukemia as a rare, slow-growing blood cancer and does not present separate subtypes."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/genetics.svg",
        title: "BRAF Gene Change",
        text: "Research shows that most people with hairy cell leukemia have a change affecting the BRAF gene, which helps control cell growth."
      },
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "This disease often affects people ages 40 to 70, with many people diagnosed around age 58."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Sex",
        text: "Hairy cell leukemia affects males more than females."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/chemical.svg",
        title: "Agent Orange Exposure",
        text: "Researchers think exposure to Agent Orange may cause hairy cell leukemia and other types of leukemia."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Fatigue",
        text: "Low red blood cell levels can make you feel tired all the time.",
        img: "/symptoms/hcl-fatigue.png"
      },
      {
        title: "Fever and Frequent Infections",
        text: "Low white blood cell levels may lead to serious infections that cause fevers.",
        img: "/symptoms/hcl-fever.png"
      },
      {
        title: "Lower Left Side Pain",
        text: "Abnormal cells may make the spleen swell, causing pain on the lower left side and a feeling of fullness.",
        img: "/symptoms/hcl-left-pain.png"
      },
      {
        title: "Lower Right Side Pain",
        text: "Cells may build up in the liver, causing swelling and pain on the lower right side.",
        img: "/symptoms/hcl-right-pain.png"
      },
      {
        title: "Shortness of Breath",
        text: "Shortness of breath may happen because of anemia from low red blood cell levels.",
        img: "/symptoms/hcl-breath.png"
      },
      {
        title: "Swollen Lymph Nodes",
        text: "Abnormal cells in lymph nodes may cause lumps in the neck, underarms or stomach.",
        img: "/symptoms/hcl-nodes.png"
      },
      {
        title: "Bruising or Bleeding Easily",
        text: "Low platelet levels may lead to easy bruising, nosebleeds or bleeding from cuts.",
        img: "/symptoms/hcl-bleeding.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Medical History",
        text: "A healthcare provider may ask when symptoms started, review medical history and ask about frequent infections.",
        img: "/diagnosis/hcl-history.png"
      },
      {
        title: "Physical Examination",
        text: "A provider may check lymph nodes, spleen and liver for signs of swelling.",
        img: "/diagnosis/hcl-exam.png"
      },
      {
        title: "CBC With Differential",
        text: "This blood test measures red blood cells, white blood cells and platelets, and identifies different white blood cell types.",
        img: "/diagnosis/hcl-cbc.png"
      },
      {
        title: "Peripheral Blood Smear",
        text: "This test looks for abnormal blood cells under a microscope.",
        img: "/diagnosis/hcl-smear.png"
      },
      {
        title: "Bone Marrow Biopsy",
        text: "A bone marrow biopsy checks for abnormal cells in the bone marrow.",
        img: "/diagnosis/hcl-marrow.png"
      },
      {
        title: "CT Scan or Abdominal Ultrasound",
        text: "These imaging tests may evaluate the size of the spleen, liver and lymph nodes.",
        img: "/diagnosis/hcl-imaging.png"
      },
      {
        title: "Flow Cytometry",
        text: "Flow cytometry identifies physical or chemical changes in cells.",
        img: "/diagnosis/hcl-flow.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Active Surveillance",
        text: "If there are no symptoms, treatment may be delayed while the care team monitors health every three to six months.",
        img: "/treatment/hcl-surveillance.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy is the most common treatment and may include medicines such as cladribine or pentostatin.",
        img: "/treatment/hcl-chemo.png"
      },
      {
        title: "Cladribine",
        text: "Cladribine is one chemotherapy medicine used to treat hairy cell leukemia.",
        img: "/treatment/hcl-cladribine.png"
      },
      {
        title: "Pentostatin",
        text: "Pentostatin is another chemotherapy medicine used for hairy cell leukemia.",
        img: "/treatment/hcl-pentostatin.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy may include rituximab or recombinant interferon alfa-2b.",
        img: "/treatment/hcl-immunotherapy.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy may include antibody drug conjugates such as rituximab.",
        img: "/treatment/hcl-targeted.png"
      },
      {
        title: "Splenectomy",
        text: "Surgery to remove the spleen may be used if anticancer medicines are not effective and abnormal cells make the spleen swell.",
        img: "/treatment/hcl-splenectomy.png"
      }
    ],

    supportiveCare: [
      {
        title: "Infection Protection",
        text: "Hairy cell leukemia can weaken the immune system, so it is important to reduce infection risk."
      },
      {
        title: "Healthy Eating",
        text: "Fruits, vegetables, lean proteins and whole grains can support the immune system."
      },
      {
        title: "Daily Activity",
        text: "Regular activity can support overall health, including immune health."
      },
      {
        title: "Sleep and Vaccines",
        text: "Getting enough sleep and staying up to date on vaccines can help protect against infections."
      }
    ]
  }
},

//head and neck cancers//

{
  slug: "head-and-neck-cancer",
  title: "Head and Neck Cancer",
  description: "Head and neck cancers are complex cancers because they affect areas involved in speaking, swallowing and other important functions. Cleveland Clinic provides specialized diagnosis and treatment for these cancers.",

  overview: {
    intro: "Head and neck cancers can be challenging because of the complex anatomy of this area. Treatment may affect speech and swallowing, so care from specialists who diagnose and treat head and neck cancers is important.",
    cards: [
      {
        img: "/overview/head-neck-complex.png",
        title: "Complex Anatomy",
        text: "Head and neck cancers can be challenging because this area includes structures involved in speaking, swallowing and breathing."
      },
      {
        img: "/overview/head-neck-expert-care.png",
        title: "Specialist Care",
        text: "Cleveland Clinic’s head and neck cancer specialists diagnose and treat even complex cases."
      },
      {
        img: "/overview/head-neck-team.png",
        title: "Team-Based Care",
        text: "Care may involve otolaryngologists, head and neck surgeons, radiation oncologists, medical oncologists, geneticists and pathologists."
      },
      {
        img: "/overview/head-neck-imaging.png",
        title: "Advanced Diagnosis",
        text: "Enhanced imaging protocols help specialists find head and neck cancers earlier, when they are more treatable."
      },
      {
        img: "/overview/head-neck-function.png",
        title: "Speech and Swallowing Support",
        text: "After treatment, patients may need support to restore or preserve the ability to speak and swallow."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed stage-by-stage information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/head-neck-hypopharyngeal.png",
        title: "Hypopharyngeal Cancer",
        text: "Cleveland Clinic lists hypopharyngeal cancer among the head and neck cancers it treats."
      },
      {
        img: "/overview/head-neck-laryngeal.png",
        title: "Laryngeal Cancer",
        text: "Cleveland Clinic lists laryngeal cancer among the head and neck cancers it treats."
      },
      {
        img: "/overview/head-neck-nasopharyngeal.png",
        title: "Nasopharyngeal Cancer",
        text: "Cleveland Clinic lists nasopharyngeal cancer among the head and neck cancers it treats."
      },
      {
        img: "/overview/head-neck-oral.png",
        title: "Oral Cancer",
        text: "Cleveland Clinic lists oral cancer among the head and neck cancers it treats."
      },
      {
        img: "/overview/head-neck-oropharyngeal.png",
        title: "Oropharyngeal Cancer",
        text: "Cleveland Clinic lists oropharyngeal cancer among the head and neck cancers it treats."
      },
      {
        img: "/overview/head-neck-salivary.png",
        title: "Salivary Gland Cancer",
        text: "Cleveland Clinic lists salivary gland cancer among the head and neck cancers it treats."
      },
      {
        img: "/overview/head-neck-sinonasal.png",
        title: "Sinonasal Tumors",
        text: "Cleveland Clinic lists sinonasal tumors among the head and neck cancers it treats."
      },
      {
        img: "/overview/head-neck-thyroid.png",
        title: "Thyroid Cancer",
        text: "Cleveland Clinic also treats thyroid cancer when thyroid nodules in the neck are cancerous."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "",
        title: "Information Not Presented",
        text: "This page does not provide a dedicated section describing specific risk factors for head and neck cancer."
      }
    ],

    lifestyle: [
      {
        icon: "",
        title: "Information Not Presented",
        text: "This page does not identify lifestyle-related risk factors for head and neck cancer."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Information Not Presented",
        text: "This page does not provide a dedicated symptoms section for head and neck cancer.",
        img: "/symptoms/head-neck-info.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Thorough Examination",
        text: "Cleveland Clinic begins diagnosis with a thorough examination and may complete a full cancer work-up quickly.",
        img: "/diagnosis/head-neck-exam.png"
      },
      {
        title: "Flexible Endoscopy",
        text: "A thin, flexible tube with a light and camera may be used to view the nose or throat.",
        img: "/diagnosis/head-neck-endoscopy.png"
      },
      {
        title: "Laryngoscopy",
        text: "Specialists may examine the throat with laryngoscopy.",
        img: "/diagnosis/head-neck-laryngoscopy.png"
      },
      {
        title: "Imaging Tests",
        text: "Imaging tests may include CT scan, MRI, PET scan and ultrasound.",
        img: "/diagnosis/head-neck-imaging.png"
      },
      {
        title: "Endoscopic Biopsy",
        text: "Specialists may remove tissue samples during endoscopy.",
        img: "/diagnosis/head-neck-endoscopic-biopsy.png"
      },
      {
        title: "Incisional Biopsy",
        text: "An incisional biopsy uses a scalpel to remove a small amount of suspicious tissue.",
        img: "/diagnosis/head-neck-incisional-biopsy.png"
      },
      {
        title: "Fine Needle Aspiration",
        text: "Ultrasound-guided fine needle aspiration collects cells and fluid with a needle.",
        img: "/diagnosis/head-neck-fna.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Minimally Invasive Surgery",
        text: "When appropriate, specialists use laser surgery and robotic-assisted surgery to remove cancer with fewer side effects.",
        img: "/treatment/head-neck-minimally-invasive.png"
      },
      {
        title: "Radiation Therapy",
        text: "Precise radiation therapies are used to treat head and neck cancer while helping protect nearby tissue.",
        img: "/treatment/head-neck-radiation.png"
      },
      {
        title: "VMAT",
        text: "Volumetric modulated arc therapy is a type of IMRT used to target tumors while helping maintain speech and swallowing ability.",
        img: "/treatment/head-neck-vmat.png"
      },
      {
        title: "Reconstructive Surgery",
        text: "Microvascular reconstruction may rebuild the jaw, throat or tongue using tissue from another part of the body.",
        img: "/treatment/head-neck-reconstruction.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy is one systemic therapy used for head and neck cancers.",
        img: "/treatment/head-neck-chemo.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy is one of the systemic therapies Cleveland Clinic uses for head and neck cancers.",
        img: "/treatment/head-neck-immunotherapy.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy is one systemic treatment option used for head and neck tumor cells.",
        img: "/treatment/head-neck-targeted.png"
      }
    ],

    supportiveCare: [
      {
        title: "Palliative and Supportive Care",
        text: "Supportive care helps address quality-of-life concerns during and after treatment."
      },
      {
        title: "Nutrition Support",
        text: "Cancer nutritionists may help patients manage nutrition needs during treatment."
      },
      {
        title: "Speech Therapy",
        text: "Speech therapy may help patients restore or preserve speech and swallowing ability."
      },
      {
        title: "Patient Navigation",
        text: "A dedicated patient navigator helps guide patients through diagnosis, treatment and support resources."
      }
    ]
  }
},

//hodgkin-lymphoma//

{
  slug: "hodgkin-lymphoma",
  title: "Hodgkin Lymphoma",
  description: "Hodgkin lymphoma is a group of blood cancers that start in lymphocytes, which are white blood cells in the lymphatic system. It often begins in lymph nodes in the neck or chest and is considered one of the most curable cancers.",

  overview: {
    intro: "Hodgkin lymphoma develops when genes inside B lymphocytes change during a person’s lifetime. These abnormal cells often start in lymph nodes in the neck or chest cavity and may spread through the lymphatic system. Treatment can often eliminate signs and symptoms, but the condition may come back.",
    cards: [
      {
        img: "/overview/hodgkin-blood.png",
        title: "Blood Cancer",
        text: "Hodgkin lymphoma is a group of blood cancers that develop in the lymphatic system."
      },
      {
        img: "/overview/hodgkin-lymphocytes.png",
        title: "Lymphocyte Cancer",
        text: "This cancer affects lymphocytes, important white blood cells in the immune system."
      },
      {
        img: "/overview/hodgkin-bcells.png",
        title: "B-Cell Changes",
        text: "Hodgkin lymphoma forms when genes inside B lymphocytes mutate during a person’s lifetime."
      },
      {
        img: "/overview/hodgkin-nodes.png",
        title: "Common Starting Sites",
        text: "It typically starts in lymph nodes in the neck or chest cavity."
      },
      {
        img: "/overview/hodgkin-curable.png",
        title: "Highly Treatable",
        text: "Healthcare providers consider Hodgkin lymphoma a treatable and highly curable cancer."
      },
      {
        img: "/overview/hodgkin-recurrence.png",
        title: "Can Come Back",
        text: "Treatment often removes signs and symptoms, but Hodgkin lymphoma can sometimes recur."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "I",
        title: "Stage I",
        text: "Cancer cells are in one lymph node area or lymphoid organ, or in one area of a single organ outside the lymph system."
      },
      {
        label: "II",
        title: "Stage II",
        text: "Cancer cells are in two or more lymph node groups on the same side of the diaphragm."
      },
      {
        label: "III",
        title: "Stage III",
        text: "Lymph node areas on both sides of the diaphragm contain lymphoma cells, or cancer is in lymph nodes above the diaphragm and in the spleen."
      },
      {
        label: "IV",
        title: "Stage IV",
        text: "Lymphoma is in at least one organ outside the lymph system, such as the liver, lung or bone marrow."
      }
    ],

    types: [
      {
        img: "/overview/hodgkin-nodular-sclerosis.png",
        title: "Nodular Sclerosis Hodgkin Lymphoma",
        text: "This is the most common classic Hodgkin lymphoma subtype. It often affects young adults and usually affects lymph nodes in the central chest."
      },
      {
        img: "/overview/hodgkin-mixed-cellularity.png",
        title: "Mixed Cellularity Hodgkin Lymphoma",
        text: "This classic subtype typically affects people in their 60s and sometimes develops in the abdomen."
      },
      {
        img: "/overview/hodgkin-lymphocyte-rich.png",
        title: "Lymphocyte-Rich Classic Hodgkin Lymphoma",
        text: "This subtype affects about 6% of people with Hodgkin lymphoma and is more common in males."
      },
      {
        img: "/overview/hodgkin-lymphocyte-depleted.png",
        title: "Lymphocyte-Depleted Hodgkin Lymphoma",
        text: "This subtype affects about 1% of people with Hodgkin lymphoma and is most common in people older than 60 and people with HIV/AIDS."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "Risk is higher in people between 20 and 39 years old and in people older than 65."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Sex",
        text: "Males are more likely to develop Hodgkin lymphoma, except for nodular sclerosis, which is more common in females."
      },
      {
        icon: "/icons/family.svg",
        title: "Family Medical History",
        text: "Risk is slightly higher if biological siblings or parents have had Hodgkin lymphoma."
      },
      {
        icon: "/icons/density.svg",
        title: "Organ Transplant",
        text: "People who have had an organ transplant take medicines that suppress the immune system, which can increase lymphoma risk."
      },
      {
        icon: "/icons/virus.svg",
        title: "Certain Viruses",
        text: "HIV, human T-lymphotropic virus type 1 and Epstein-Barr virus may increase the risk of Hodgkin lymphoma."
      }
    ],

    lifestyle: [
      {
        icon: "",
        title: "No Lifestyle Risk Factors",
        text: "This page does not identify clearly established lifestyle-related risk factors for Hodgkin lymphoma."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Swollen Lymph Nodes",
        text: "The most common first sign is painless swollen lymph nodes in the neck, underarm or groin.",
        img: "/symptoms/hodgkin-swollen-nodes.png"
      },
      {
        title: "Persistent Fatigue",
        text: "Fatigue means feeling much more tired than usual for at least several days.",
        img: "/symptoms/hodgkin-fatigue.png"
      },
      {
        title: "Unexplained Fever",
        text: "A fever that stays high or lasts longer than expected may be a symptom.",
        img: "/symptoms/hodgkin-fever.png"
      },
      {
        title: "Drenching Night Sweats",
        text: "Night sweats may be so intense that they soak sheets and clothes.",
        img: "/symptoms/hodgkin-night-sweats.png"
      },
      {
        title: "Unexplained Weight Loss",
        text: "Losing 10% or more of total body weight over six months without trying is considered unexplained weight loss.",
        img: "/symptoms/hodgkin-weight-loss.png"
      },
      {
        title: "Itchy Skin",
        text: "Some people have very itchy skin, including after drinking alcohol or taking a bath.",
        img: "/symptoms/hodgkin-itching.png"
      },
      {
        title: "Abdominal Pain or Swelling",
        text: "Belly pain or swelling may occur depending on where lymphoma cells are located.",
        img: "/symptoms/hodgkin-abdominal.png"
      },
      {
        title: "Chest Pain",
        text: "Chest pain may happen when Hodgkin lymphoma affects lung tissue or lymph nodes inside the chest.",
        img: "/symptoms/hodgkin-chest-pain.png"
      },
      {
        title: "Shortness of Breath",
        text: "Shortness of breath may happen if lymphoma affects the lungs or causes a large mass in the chest.",
        img: "/symptoms/hodgkin-breath.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may examine swollen lymph nodes and ask about symptoms such as fever or unexplained weight loss.",
        img: "/diagnosis/hodgkin-exam.png"
      },
      {
        title: "Blood Tests",
        text: "Blood tests help show overall health and may detect signs of cancer.",
        img: "/diagnosis/hodgkin-blood.png"
      },
      {
        title: "CBC",
        text: "A complete blood count can show low blood cell counts that may suggest lymphoma in the blood or bone marrow.",
        img: "/diagnosis/hodgkin-cbc.png"
      },
      {
        title: "Blood Chemistry and ESR",
        text: "Blood chemistry checks organ function, while ESR measures inflammation that may be seen in Hodgkin lymphoma.",
        img: "/diagnosis/hodgkin-chemistry-esr.png"
      },
      {
        title: "Imaging Tests",
        text: "Imaging may include chest X-ray, CT scan, PET scan, MRI or ultrasound depending on cancer location and pregnancy status.",
        img: "/diagnosis/hodgkin-imaging.png"
      },
      {
        title: "Lymph Node Biopsy",
        text: "A lymph node biopsy is usually used to diagnose Hodgkin lymphoma and look for Reed-Sternberg cells.",
        img: "/diagnosis/hodgkin-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Chemotherapy",
        text: "Chemotherapy uses one or more medicines to kill cancer cells or keep them from multiplying.",
        img: "/treatment/hodgkin-chemo.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy uses high-powered energy beams to kill cancer cells in affected lymph nodes or areas of spread.",
        img: "/treatment/hodgkin-radiation.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy boosts the immune system so it can better identify and destroy cancer cells.",
        img: "/treatment/hodgkin-immunotherapy.png"
      },
      {
        title: "Checkpoint Inhibitors",
        text: "Checkpoint inhibitors are an important immunotherapy treatment for Hodgkin lymphoma.",
        img: "/treatment/hodgkin-checkpoint.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy uses medicines or other substances to attack cancer cells, including antibody-drug conjugates.",
        img: "/treatment/hodgkin-targeted.png"
      },
      {
        title: "Stem Cell Transplant",
        text: "Chemotherapy with stem cell transplantation may be used when Hodgkin lymphoma comes back or does not respond to treatment.",
        img: "/treatment/hodgkin-transplant.png"
      }
    ],

    supportiveCare: [
      {
        title: "Rest",
        text: "Cancer and treatment can cause extreme fatigue, so rest is important when the body needs it."
      },
      {
        title: "Nutritious Meals",
        text: "Balanced meals can help support the immune system and overall health during care."
      },
      {
        title: "Stress Management",
        text: "Concerns about recurrence can feel stressful, and talking with a provider may help."
      },
      {
        title: "Exercise",
        text: "Regular activity can support the immune system, help manage stress and combat fatigue."
      }
    ]
  }
},

//inflammatory breast cancer//

{
  slug: "inflammatory-breast-cancer",
  title: "Inflammatory Breast Cancer",
  description: "Inflammatory breast cancer is a rare, fast-growing breast cancer that causes breast inflammation and skin changes. It spreads quickly and needs treatment right away.",

  overview: {
    intro: "Inflammatory breast cancer happens when cancer cells block lymph vessels in the breast skin. This causes swelling, redness and skin changes that may look like an infection. It is aggressive and can spread quickly.",
    cards: [
      {
        img: "/overview/ibc-rare.png",
        title: "Rare Breast Cancer",
        text: "Inflammatory breast cancer is a rare type of breast cancer."
      },
      {
        img: "/overview/ibc-fast.png",
        title: "Fast-Growing",
        text: "This cancer grows and spreads quickly, so immediate treatment is important."
      },
      {
        img: "/overview/ibc-lymph.png",
        title: "Blocked Lymph Vessels",
        text: "Cancer cells block lymph vessels in the breast skin, causing swelling and inflammation."
      },
      {
        img: "/overview/ibc-no-lump.png",
        title: "Often No Lump",
        text: "Unlike many breast cancers, inflammatory breast cancer may not cause a noticeable breast lump."
      },
      {
        img: "/overview/ibc-infection-like.png",
        title: "May Look Like Infection",
        text: "Symptoms can look like mastitis or another breast infection, which can make diagnosis harder."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/ibc-type.png",
        title: "Inflammatory Breast Cancer",
        text: "This page describes inflammatory breast cancer as a rare, aggressive form of breast cancer and does not present separate subtypes."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/reproductive.svg",
        title: "Sex",
        text: "Inflammatory breast cancer can affect anyone, but it is more common in women and people assigned female at birth."
      },
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "People diagnosed with inflammatory breast cancer are often younger than people diagnosed with other breast cancers."
      },
      {
        icon: "/icons/density.svg",
        title: "Race",
        text: "Black women are more likely to develop inflammatory breast cancer than white women."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/weight.svg",
        title: "Obesity",
        text: "Obesity may increase the risk of inflammatory breast cancer."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Breast Swelling",
        text: "The breast may become swollen or enlarged.",
        img: "/symptoms/ibc-swelling.png"
      },
      {
        title: "Red or Purple Skin",
        text: "The breast skin may look red, pink or purple.",
        img: "/symptoms/ibc-redness.png"
      },
      {
        title: "Warm Breast",
        text: "The breast may feel warm to the touch.",
        img: "/symptoms/ibc-warmth.png"
      },
      {
        title: "Dimpled Skin",
        text: "The breast skin may look thick, ridged or dimpled like an orange peel.",
        img: "/symptoms/ibc-dimpled.png"
      },
      {
        title: "Breast Tenderness or Pain",
        text: "The breast may feel painful, tender or heavy.",
        img: "/symptoms/ibc-pain.png"
      },
      {
        title: "Inverted Nipple",
        text: "The nipple may flatten or turn inward.",
        img: "/symptoms/ibc-nipple.png"
      },
      {
        title: "Swollen Lymph Nodes",
        text: "Lymph nodes near the collarbone or under the arm may become swollen.",
        img: "/symptoms/ibc-nodes.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may examine the breast and ask about symptoms.",
        img: "/diagnosis/ibc-exam.png"
      },
      {
        title: "Mammogram",
        text: "A mammogram may be used to look for breast changes.",
        img: "/diagnosis/ibc-mammogram.png"
      },
      {
        title: "Breast Ultrasound",
        text: "Ultrasound may help providers evaluate breast tissue and nearby lymph nodes.",
        img: "/diagnosis/ibc-ultrasound.png"
      },
      {
        title: "Breast MRI",
        text: "MRI may help show the extent of disease in the breast.",
        img: "/diagnosis/ibc-mri.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy removes tissue so it can be checked for cancer cells.",
        img: "/diagnosis/ibc-biopsy.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Chemotherapy",
        text: "Treatment usually begins with chemotherapy to shrink the cancer before surgery.",
        img: "/treatment/ibc-chemo.png"
      },
      {
        title: "Surgery",
        text: "Surgery may remove the affected breast after chemotherapy.",
        img: "/treatment/ibc-surgery.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy is often given after surgery to destroy remaining cancer cells.",
        img: "/treatment/ibc-radiation.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy may be used when cancer cells have certain features, such as HER2 proteins.",
        img: "/treatment/ibc-targeted.png"
      },
      {
        title: "Hormone Therapy",
        text: "Hormone therapy may be used if the cancer has hormone receptors.",
        img: "/treatment/ibc-hormone.png"
      }
    ],

    supportiveCare: [
      {
        title: "Prompt Care",
        text: "Symptoms that appear suddenly or do not improve should be checked quickly."
      },
      {
        title: "Treatment Planning",
        text: "Care usually involves several treatments used in a planned order."
      },
      {
        title: "Follow-up Care",
        text: "Follow-up visits help monitor treatment response and recovery."
      },
      {
        title: "Emotional Support",
        text: "Support services can help patients cope with diagnosis and treatment."
      }
    ]
  }
},

//KAPOSI SARCOMA//

{
  slug: "kaposi-sarcoma",
  title: "Kaposi Sarcoma",
  description: "Kaposi sarcoma is a rare type of soft tissue sarcoma. It causes cancerous lesions on the skin, mucus membranes and sometimes in internal organs, and is more likely in people with HHV-8 and a weakened immune system.",

  overview: {
    intro: "Kaposi sarcoma creates patches of abnormal tissue that may appear on the skin, inside the mouth, nose or anus, or in organs such as the lungs, liver and belly. Healthcare providers can treat Kaposi sarcoma, but it may come back after treatment.",
    cards: [
      {
        img: "/overview/kaposi-soft-tissue.png",
        title: "Soft Tissue Sarcoma",
        text: "Kaposi sarcoma is a rare type of soft tissue sarcoma."
      },
      {
        img: "/overview/kaposi-lesions.png",
        title: "Cancerous Lesions",
        text: "It causes lesions that may form on the skin or on mucus membranes inside areas such as the mouth, nose and anus."
      },
      {
        img: "/overview/kaposi-organs.png",
        title: "Internal Organ Involvement",
        text: "Kaposi sarcoma tumors may also develop in the lining of internal organs such as the liver, belly and lungs."
      },
      {
        img: "/overview/kaposi-hhv8.png",
        title: "HHV-8 Link",
        text: "Kaposi sarcoma can develop in people who carry human herpesvirus 8 and have a weakened immune system."
      },
      {
        img: "/overview/kaposi-rare.png",
        title: "Rare Disease",
        text: "Kaposi sarcoma is rare, with fewer than 5,000 people living with it in the United States."
      },
      {
        img: "/overview/kaposi-recur.png",
        title: "Can Come Back",
        text: "Treatment can help, but Kaposi sarcoma may recur after treatment."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "-",
        title: "No Stages",
        text: "Detailed staging information is not presented on this page."
      }
    ],

    types: [
      {
        img: "/overview/kaposi-epidemic.png",
        title: "Epidemic KS",
        text: "This is related to AIDS/HIV and is the most common type of Kaposi sarcoma in the United States."
      },
      {
        img: "/overview/kaposi-classic.png",
        title: "Classic KS",
        text: "This type mostly affects males over 60 who are of Mediterranean, Southwest Asian, Eastern European or Ashkenazi Jewish descent."
      },
      {
        img: "/overview/kaposi-endemic.png",
        title: "Endemic KS",
        text: "This type affects people living near the African equator and is usually diagnosed at a younger age than classic KS."
      },
      {
        img: "/overview/kaposi-acquired.png",
        title: "Acquired KS",
        text: "This type can occur in people who carry HHV-8 and take immunosuppressants after an organ or bone marrow transplant."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "Kaposi sarcoma mostly affects people between ages 40 and 70."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Sex",
        text: "Males are more likely to develop Kaposi sarcoma."
      },
      {
        icon: "/icons/density.svg",
        title: "Ethnicity",
        text: "Risk is higher in people of Mediterranean, Southwest Asian, Eastern European or Ashkenazi Jewish descent."
      },
      {
        icon: "/icons/location.svg",
        title: "Location",
        text: "People living near the equator in Africa have a higher risk for endemic Kaposi sarcoma."
      },
      {
        icon: "/icons/immunity.svg",
        title: "Immune Deficiency",
        text: "Kaposi sarcoma is more likely in people with weakened immune systems, including people taking immunosuppressants or living with HIV/AIDS."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/reproductive.svg",
        title: "Unprotected Sex",
        text: "Having unprotected sex can increase the risk of contracting HHV-8 and HIV, which can increase Kaposi sarcoma risk."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Abnormal Skin Spots",
        text: "Kaposi sarcoma may cause abnormal smooth or bumpy spots on the skin in one or more areas.",
        img: "/symptoms/kaposi-skin-spots.png"
      },
      {
        title: "Belly Pain or Blood in Stool",
        text: "Lesions in the belly may cause belly pain or blood in stool.",
        img: "/symptoms/kaposi-belly.png"
      },
      {
        title: "Digestive Symptoms",
        text: "Lesions in the digestive system may cause constipation, diarrhea or vomiting.",
        img: "/symptoms/kaposi-digestive.png"
      },
      {
        title: "Coughing Blood or Breathing Difficulty",
        text: "Lesions in the lungs may cause coughing up blood or difficulty breathing.",
        img: "/symptoms/kaposi-lung.png"
      },
      {
        title: "Lymphedema",
        text: "Lymphedema may happen when lesions block a lymph node.",
        img: "/symptoms/kaposi-lymphedema.png"
      },
      {
        title: "Mouth Pain",
        text: "Lesions in the mouth may cause pain while eating.",
        img: "/symptoms/kaposi-mouth-pain.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may check the skin for lesions and ask about symptoms and health history.",
        img: "/diagnosis/kaposi-exam.png"
      },
      {
        title: "Biopsy",
        text: "A small tissue sample may be removed and sent to a pathologist for testing.",
        img: "/diagnosis/kaposi-biopsy.png"
      },
      {
        title: "Bronchoscopy",
        text: "Bronchoscopy helps providers look for Kaposi sarcoma in the windpipe and airways that lead to the lungs.",
        img: "/diagnosis/kaposi-bronchoscopy.png"
      },
      {
        title: "Chest X-ray or CT Scan",
        text: "Chest imaging may be used to look for Kaposi sarcoma lesions in the lungs.",
        img: "/diagnosis/kaposi-chest-imaging.png"
      },
      {
        title: "Endoscopy",
        text: "Endoscopy may help providers look inside the stomach or intestines for lesions.",
        img: "/diagnosis/kaposi-endoscopy.png"
      },
      {
        title: "Immunohistochemistry",
        text: "This lab test looks for LANA-1, a protein linked with HHV-8, and helps distinguish Kaposi sarcoma from similar lesions.",
        img: "/diagnosis/kaposi-immunohistochemistry.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Antiretroviral Therapy",
        text: "Antiretroviral therapy may be part of treatment, especially for Kaposi sarcoma related to HIV/AIDS.",
        img: "/treatment/kaposi-antiretroviral.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy may be used as part of a personalized treatment plan.",
        img: "/treatment/kaposi-chemo.png"
      },
      {
        title: "Cryotherapy",
        text: "Cryotherapy may be used to treat some Kaposi sarcoma lesions.",
        img: "/treatment/kaposi-cryotherapy.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be included depending on the type, number and location of lesions.",
        img: "/treatment/kaposi-radiation.png"
      },
      {
        title: "Surgery",
        text: "Surgery may be used in selected cases as part of treatment.",
        img: "/treatment/kaposi-surgery.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy may be used as part of treatment for Kaposi sarcoma.",
        img: "/treatment/kaposi-targeted.png"
      }
    ],

    supportiveCare: [
      {
        title: "Regular Follow-up",
        text: "Kaposi sarcoma can come back after treatment, so regular follow-ups help monitor for new cancer."
      },
      {
        title: "Immune System Support",
        text: "Maintaining a healthy immune system is important for people with Kaposi sarcoma."
      },
      {
        title: "Healthy Habits",
        text: "Nutritious food, enough sleep, stress management, quitting smoking, vaccines and handwashing can support immune health."
      },
      {
        title: "Support Community",
        text: "A local or online support community may help patients process emotions and make health decisions."
      }
    ]
  }
},

//kidny cancer //

{
  slug: "kidney-cancer",
  title: "Kidney Cancer",
  description: "Kidney cancer, also called renal cancer, develops when cancerous cells multiply and form tumors in the kidneys. Symptoms may include blood in urine and pain in the back or side.",

  overview: {
    intro: "Kidney cancer happens when cancer cells form tumors in the kidneys. The kidneys filter blood, balance fluids and remove waste from the body. The most common form is renal cell carcinoma, and treatment depends on the type and stage of cancer.",
    cards: [
      {
        img: "/overview/kidney-organ.png",
        title: "Kidneys",
        text: "The kidneys filter blood, balance fluids in the body and remove waste."
      },
      {
        img: "/overview/kidney-tumor.png",
        title: "Tumor Formation",
        text: "Kidney cancer forms when cancer cells multiply and create tumors in the kidneys."
      },
      {
        img: "/overview/kidney-rcc.png",
        title: "Most Common Type",
        text: "Renal cell carcinoma is the most common type of kidney cancer."
      },
      {
        img: "/overview/kidney-spread.png",
        title: "Possible Spread",
        text: "Kidney cancer may spread to nearby tissue, lymph nodes, adrenal glands, major veins or distant organs."
      },
      {
        img: "/overview/kidney-curable.png",
        title: "Often Curable Early",
        text: "Kidney cancer is often curable, especially before it spreads outside the kidney."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "I",
        title: "Stage I",
        text: "The tumor is only in the kidney and measures about 3 inches, or 7 centimeters."
      },
      {
        label: "II",
        title: "Stage II",
        text: "The tumor is larger than 3 inches but has not spread outside the kidney."
      },
      {
        label: "III",
        title: "Stage III",
        text: "The tumor is in one of the major veins, the adrenal glands or the tissue around the kidney and adrenal glands."
      },
      {
        label: "IV",
        title: "Stage IV",
        text: "The tumor is in the adrenal gland or nearby tissue and may have spread to the bones, liver or lungs."
      }
    ],

    types: [
      {
        img: "/overview/kidney-rcc-type.png",
        title: "Renal Cell Carcinoma",
        text: "This type develops in the cells that line tiny tubes in the kidneys. It accounts for most kidney cancer cases."
      },
      {
        img: "/overview/kidney-transitional.png",
        title: "Transitional Cell Carcinoma",
        text: "This type usually begins where the ureter connects to the kidney, but it can also start in the ureter or bladder."
      },
      {
        img: "/overview/kidney-sarcoma.png",
        title: "Renal Sarcoma",
        text: "This cancer begins in the connective tissue of the kidneys and is the least common form."
      },
      {
        img: "/overview/kidney-wilms.png",
        title: "Wilm’s Tumor",
        text: "This type typically affects children."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "Kidney cancer typically affects people ages 65 to 74."
      },
      {
        icon: "/icons/density.svg",
        title: "Dialysis Use",
        text: "Long-term dialysis use to support kidney function may increase risk."
      },
      {
        icon: "/icons/family.svg",
        title: "Family Medical History",
        text: "Having family members with kidney cancer may increase risk."
      },
      {
        icon: "/icons/genetics.svg",
        title: "Inherited Disorders",
        text: "Inherited disorders such as von Hippel-Lindau disease and tuberous sclerosis syndrome can cause tumors that affect the kidneys."
      },
      {
        icon: "/icons/pressure.svg",
        title: "High Blood Pressure",
        text: "High blood pressure can damage the kidneys and is listed as a risk factor."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/weight.svg",
        title: "Obesity",
        text: "Having obesity, defined as a BMI of 30 or more, may increase risk."
      },
      {
        icon: "/icons/smoking.svg",
        title: "Smoking",
        text: "Smoking increases the risk of renal cell carcinoma."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Blood in Urine",
        text: "Blood in urine may be a symptom of kidney cancer.",
        img: "/symptoms/kidney-blood-urine.png"
      },
      {
        title: "Fatigue",
        text: "Fatigue may occur with kidney cancer.",
        img: "/symptoms/kidney-fatigue.png"
      },
      {
        title: "Recurring Fever",
        text: "A fever that comes back may be a symptom.",
        img: "/symptoms/kidney-fever.png"
      },
      {
        title: "Loss of Appetite",
        text: "Loss of appetite may occur.",
        img: "/symptoms/kidney-appetite.png"
      },
      {
        title: "Side Lump or Mass",
        text: "A lump or mass may appear on the side of the body between the ribs and hip.",
        img: "/symptoms/kidney-lump.png"
      },
      {
        title: "Side or Back Pain",
        text: "Pain may occur in the sides or the back of the belly.",
        img: "/symptoms/kidney-pain.png"
      },
      {
        title: "Weight Loss",
        text: "Unexplained weight loss may occur.",
        img: "/symptoms/kidney-weight-loss.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider may perform a physical exam and ask about symptoms and how long they have been present.",
        img: "/diagnosis/kidney-exam.png"
      },
      {
        title: "Blood Tests",
        text: "Blood tests may include CBC and BMP to check blood cell levels, kidney function and chemical changes.",
        img: "/diagnosis/kidney-blood.png"
      },
      {
        title: "Imaging Tests",
        text: "CT scan, MRI and ultrasound can help detect tumors in the kidneys.",
        img: "/diagnosis/kidney-imaging.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy needle may collect a small kidney tissue sample so a pathologist can check it for cancer.",
        img: "/diagnosis/kidney-biopsy.png"
      },
      {
        title: "Cancer Staging",
        text: "If tests show kidney cancer, an oncologist uses test results and other information to plan treatment and determine the cancer stage.",
        img: "/diagnosis/kidney-staging.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Active Surveillance",
        text: "For smaller tumors or when there are no symptoms, the care team may monitor the kidneys every three to six months."
      },
      {
        title: "Partial Nephrectomy",
        text: "This surgery removes the part of the kidney that contains the tumor.",
        img: "/treatment/kidney-partial-nephrectomy.png"
      },
      {
        title: "Radical Nephrectomy",
        text: "This surgery removes the kidney and some nearby tissue, and may also remove nearby lymph nodes.",
        img: "/treatment/kidney-radical-nephrectomy.png"
      },
      {
        title: "Multivisceral Resection",
        text: "This complex surgery may remove the tumor and nearby affected organs or structures when cancer has grown into them.",
        img: "/treatment/kidney-resection.png"
      },
      {
        title: "Cryoablation",
        text: "Cryoablation uses cold gas delivered through a needle to freeze and destroy cancer cells.",
        img: "/treatment/kidney-cryoablation.png"
      },
      {
        title: "Radiofrequency Ablation",
        text: "Radiofrequency ablation uses an electric current through a needle placed in the kidney to kill cancer cells.",
        img: "/treatment/kidney-rfa.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy boosts the immune system so the body can recognize and destroy cancer cells more effectively.",
        img: "/treatment/kidney-immunotherapy.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy blocks characteristics that help cancer cells thrive, including growth signals that feed cancer.",
        img: "/treatment/kidney-targeted.png"
      },
      {
        title: "Radiation Therapy",
        text: "Radiation therapy may be used when there is only one kidney or when surgery is not an option. It can also help with kidney cancer pain.",
        img: "/treatment/kidney-radiation.png"
      }
    ],

    supportiveCare: [
      {
        title: "Cancer Rehabilitation",
        text: "Cancer rehabilitation may include physical therapy before or after treatment."
      },
      {
        title: "Palliative Care",
        text: "Palliative care focuses on symptom relief along with social and spiritual support."
      },
      {
        title: "Recovery Support",
        text: "Recovery time depends on the treatment, and surgery recovery may take several weeks."
      },
      {
        title: "Follow-up Care",
        text: "Follow-up helps monitor recovery, recurrence risk and next steps after treatment."
      },
          ]
  }
},

//laryngeal cancer//

   {
  slug: "laryngeal-cancer",
  title: "Laryngeal Cancer",
  description: "Laryngeal cancer is cancer of the larynx, or voice box. Symptoms may include voice changes, hoarseness, sore throat or a cough that does not go away.",

  overview: {
    intro: "Laryngeal cancer affects the larynx, the part of the throat that helps with speaking, breathing and swallowing. It may form in the supraglottis, glottis or subglottis. Treatment may include radiation therapy, chemotherapy, immunotherapy, targeted therapy or surgery.",
    cards: [
      {
        img: "/overview/laryngeal-voicebox.png",
        title: "Voice Box Cancer",
        text: "Laryngeal cancer affects the larynx, also called the voice box."
      },
      {
        img: "/overview/laryngeal-function.png",
        title: "Speaking and Swallowing",
        text: "The larynx helps you speak, breathe and swallow, and contains the vocal cords."
      },
      {
        img: "/overview/laryngeal-growth.png",
        title: "Uncontrolled Cell Growth",
        text: "Cancer happens when malignant cells multiply, invade tissues and damage the body."
      },
      {
        img: "/overview/laryngeal-parts.png",
        title: "Three Main Areas",
        text: "Laryngeal cancer may form in the supraglottis, glottis or subglottis."
      },
      {
        img: "/overview/laryngeal-voice-change.png",
        title: "Voice Changes",
        text: "Hoarseness or voice changes that do not improve after two weeks should be checked."
      }
    ]
  },

  typesStages: {
    stages: [
      {
        label: "0-2",
        title: "Early Laryngeal Cancer",
        text: "In stages 0, 1 and 2, the tumor is small and cancer has not spread beyond the larynx."
      },
      {
        label: "3-4",
        title: "Advanced Laryngeal Cancer",
        text: "In stages 3 and 4, the tumor is larger and may affect the vocal cords, lymph nodes or other body areas."
      }
    ],

    types: [
      {
        img: "/overview/laryngeal-supraglottis.png",
        title: "Supraglottis",
        text: "More than one in three laryngeal cancers start in the upper part of the larynx."
      },
      {
        img: "/overview/laryngeal-glottis.png",
        title: "Glottis",
        text: "More than half of laryngeal cancers start in the glottis, the middle part where the vocal cords are."
      },
      {
        img: "/overview/laryngeal-subglottis.png",
        title: "Subglottis",
        text: "About 5% of laryngeal cancers start in the lower part of the larynx."
      }
    ]
  },

  riskFactorsData: {
    uncontrollable: [
      {
        icon: "/icons/age.svg",
        title: "Age",
        text: "Laryngeal cancer happens more often in people age 55 and older."
      },
      {
        icon: "/icons/reproductive.svg",
        title: "Sex",
        text: "Men are about five times more likely to develop laryngeal cancer."
      },
      {
        icon: "/icons/family.svg",
        title: "History of Head and Neck Cancer",
        text: "About 1 in 4 people who have had head and neck cancer will get it again."
      },
      {
        icon: "/icons/virus.svg",
        title: "HPV Infection",
        text: "Some forms of human papillomavirus can cause laryngeal cancer."
      }
    ],

    lifestyle: [
      {
        icon: "/icons/smoking.svg",
        title: "Tobacco Use",
        text: "Smoking or using other tobacco products greatly increases the risk of laryngeal cancer."
      },
      {
        icon: "/icons/alcohol.svg",
        title: "Alcohol Use",
        text: "Drinking alcohol, especially more than one drink daily, raises risk. Using alcohol and tobacco together increases risk even more."
      },
      {
        icon: "/icons/chemical.svg",
        title: "Workplace Exposure",
        text: "Exposure to substances such as sulfuric acid mist, wood dust, nickel, asbestos or manufacturing mustard gas may increase risk."
      }
    ]
  },

  symptoms: {
    items: [
      {
        title: "Sore Throat or Cough",
        text: "A sore throat or cough that does not improve may be a symptom.",
        img: "/symptoms/laryngeal-sore-throat.png"
      },
      {
        title: "Voice Changes",
        text: "Voice changes, such as hoarseness, that do not improve after two weeks should be checked.",
        img: "/symptoms/laryngeal-hoarseness.png"
      },
      {
        title: "Painful Swallowing",
        text: "Pain or other difficulty when swallowing may occur.",
        img: "/symptoms/laryngeal-swallowing.png"
      },
      {
        title: "Neck or Throat Lump",
        text: "A lump in the neck or throat may be a warning sign.",
        img: "/symptoms/laryngeal-lump.png"
      },
      {
        title: "Trouble Making Voice Sounds",
        text: "Difficulty making voice sounds, also called dysphonia, may occur.",
        img: "/symptoms/laryngeal-dysphonia.png"
      },
      {
        title: "Ear Pain",
        text: "Ear pain may occur with laryngeal cancer.",
        img: "/symptoms/laryngeal-ear-pain.png"
      },
      {
        title: "Trouble Breathing",
        text: "Trouble breathing or noisy high-pitched breathing needs urgent medical attention.",
        img: "/symptoms/laryngeal-breathing.png"
      },
      {
        title: "Coughing Blood",
        text: "Coughing up blood may occur and should be checked right away.",
        img: "/symptoms/laryngeal-blood.png"
      }
    ]
  },

  diagnosis: {
    items: [
      {
        title: "Physical Examination",
        text: "A healthcare provider will ask about symptoms and medical history, then examine the throat and neck.",
        img: "/diagnosis/laryngeal-exam.png"
      },
      {
        title: "Imaging Scans",
        text: "CT or MRI scans can show the tumor’s size and location, while chest X-ray can check whether cancer has spread to the lungs.",
        img: "/diagnosis/laryngeal-imaging.png"
      },
      {
        title: "Laryngoscopy",
        text: "During laryngoscopy, a provider uses a thin, lighted tube to examine the larynx.",
        img: "/diagnosis/laryngeal-laryngoscopy.png"
      },
      {
        title: "PET Scan",
        text: "A PET scan uses a small safe dose of radioactive substance to highlight areas with cancer cells.",
        img: "/diagnosis/laryngeal-pet.png"
      },
      {
        title: "Biopsy",
        text: "A biopsy removes a small piece of abnormal tissue from the larynx so a pathologist can examine it under a microscope.",
        img: "/diagnosis/laryngeal-biopsy.png"
      },
      {
        title: "Protein Marker Testing",
        text: "The biopsy sample may be checked for protein markers because some treatments only work on cancer cells with specific markers.",
        img: "/diagnosis/laryngeal-marker.png"
      }
    ]
  },

  treatment: {
    options: [
      {
        title: "Radiation Therapy",
        text: "Radiation therapy uses high-energy beams to kill cancer cells while targeting the tumor and limiting damage to nearby healthy tissue.",
        img: "/treatment/laryngeal-radiation.png"
      },
      {
        title: "Chemotherapy",
        text: "Chemotherapy uses medicines to kill or slow the growth of cancer cells.",
        img: "/treatment/laryngeal-chemo.png"
      },
      {
        title: "Immunotherapy",
        text: "Immunotherapy uses the immune system to help fight cancer.",
        img: "/treatment/laryngeal-immunotherapy.png"
      },
      {
        title: "Targeted Therapy",
        text: "Targeted therapy focuses on cancer cells with specific proteins and helps prevent them from multiplying.",
        img: "/treatment/laryngeal-targeted.png"
      },
      {
        title: "Surgery",
        text: "For early laryngeal cancer, surgery may remove the tumor while preserving the larynx. Advanced cancer may need laryngectomy.",
        img: "/treatment/laryngeal-surgery.png"
      },
      {
        title: "Cordectomy",
        text: "Cordectomy removes part or all of a vocal cord, usually through the mouth.",
        img: "/treatment/laryngeal-cordectomy.png"
      },
      {
        title: "Partial Laryngectomy",
        text: "Partial laryngectomy removes part of the larynx so the person can keep the ability to talk.",
        img: "/treatment/laryngeal-partial.png"
      },
      {
        title: "Total Laryngectomy",
        text: "Total laryngectomy removes the entire larynx through the neck.",
        img: "/treatment/laryngeal-total.png"
      },
      {
        title: "Laser Surgery",
        text: "Laser surgery removes a tumor using a laser beam.",
        img: "/treatment/laryngeal-laser.png"
      }
    ],

    supportiveCare: [
      {
        title: "Pain and Swallowing Support",
        text: "After treatment, providers may help treat pain, swallowing problems or mucositis."
      },
      {
        title: "Diet Support",
        text: "Providers may discuss diet to make sure eating and swallowing are manageable."
      },
      {
        title: "Physical Therapy",
        text: "Physical therapy may help with scarring in the neck or trouble opening the mouth."
      },
      {
        title: "Speech Therapy",
        text: "A speech therapist can help after treatment, especially if surgery changes the way a person speaks."
      }
    ]
  }
},

];

export default cancersData;