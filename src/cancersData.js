const cancersData = [
//adrenal//
{
  slug: "adrenal-cancer",
  title: "Adrenal Cancer",
  description: "Adrenal cancer is a rare neuroendocrine tumor that develops when cells in the adrenal glands change and grow out of control. The adrenal glands sit above the kidneys and make hormones that help keep the body functioning properly.",

  overview: {
    intro: "Adrenal cancer can develop in one or both adrenal glands. Some people have symptoms because the tumor presses on nearby organs, while others have symptoms related to extra hormones released by the tumor. Early detection and treatment may improve outcomes.",
    cards: [
      {
        img: "/overview/adrenal-glands.png",
        title: "Adrenal Glands",
        text: "You have two adrenal glands, one above each kidney. These glands make hormones that send signals to different organs and support healthy body function."
      },
      {
        img: "/overview/adrenal-rare-net.png",
        title: "Rare Neuroendocrine Tumor",
        text: "Adrenal cancer is a rare neuroendocrine tumor that forms when adrenal gland cells mutate and grow out of control."
      },
      {
        img: "/overview/adrenal-one-both.png",
        title: "One or Both Glands",
        text: "Adrenal cancer can affect one adrenal gland or, less commonly, both adrenal glands."
      },
      {
        img: "/overview/adrenal-hormones.png",
        title: "Hormone-Related Symptoms",
        text: "Some adrenal tumors release extra hormones, which may cause symptoms such as high blood pressure, weight changes or excess hair growth."
      },
      {
        img: "/overview/adrenal-curable.png",
        title: "Early Treatment Outlook",
        text: "Adrenal cancer can be difficult to cure, but cure may be possible when it is found early and removed before it spreads."
      }
    ]
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
]

export default cancersData;