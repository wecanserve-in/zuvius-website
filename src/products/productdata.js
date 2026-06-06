export const productCategories = [
  {
    id: "oncoace",
    name: "OncoAce",
    title: "ONCOACE",
    color: "blue",
    description:
      "Zuvius offers a robust portfolio of anti-cancer products including tablets, capsules and injections.",
    bannerImage: "/oncoacebanner.png",
    brochureImage: "/oncoace.png",
  },
  {
    id: "nutrazeutica",
    name: "Nutrazeutica",
    title: "NUTRAZEUTICA",
    color: "green",
    description:
      "Specialized nutraceuticals and phytochemicals designed to support recommended dietary requirements.",
    bannerImage: "/nutrabanner.png",
    brochureImage: "/nutra.png",
  },
 
];

export const products = [
  {
  id: 1,
  category: "oncoace",
  categoryName: "OncoAce",

  slug: "cytraz",

  name: "Cytraz",
  subtitle: "Cytarabine Injection 100/500 mg",

  type: "Injection",

  image: "/products1/CYTRAZ-1000 1.png",

  images: [
    "/products1/CYTRAZ-1000 1.png",
    "/products1/CYTRAZ-1000 2.png",
    "/products1/CYTRAZ-1000 3.png",
   
  ],

  strength: "100/500/1000 mg",

  packSize: "Vial",

  drugClass: "Antineoplastic Drug, Antimetabolite",

  description:
    "Cytarabine Injection is an antineoplastic agent provided as a sterile solution for intravenous, intrathecal, or subcutaneous administration. Cytarabine is a crystalline powder that is white to off-white, odorless, highly soluble in water, and slightly soluble in alcohol and chloroform.",

  indication:
    "Cytarabine Injection in combination with other approved anti-cancer drugs is indicated for remission induction in acute non-lymphocytic leukemia in adults and pediatric patients. It is also useful in the treatment of acute lymphocytic leukemia and the blast phase of chronic myelocytic leukemia. Intrathecal administration is indicated in the prophylaxis and treatment of meningeal leukemia.",

  clinicalEfficacy:
    "Standard induction chemotherapy based on cytarabine and anthracyclines helps 60–80% of younger adult patients achieve complete remission. High-dose cytarabine regimens have shown superior outcomes in preventing relapses and are widely adopted as standard post-remission chemotherapy in AML treatment.",

  safetyInformation:
    "Cytarabine is not recommended during pregnancy or breastfeeding due to potential fetal harm and serious adverse reactions in infants. Effective contraception is advised during treatment and for up to 6 months after therapy. Use with caution in patients with kidney or liver disease and monitor under medical supervision.",

  dosage:
    "In induction therapy of acute non-lymphocytic leukemia, the usual dose in combination with other anti-cancer drugs is 100 mg/m²/day by continuous intravenous infusion (Days 1–7) or 100 mg/m² intravenously every 12 hours (Days 1–7).",

  storage:
    "Store as directed on product label.",

  coldStorage: "No",
},
{
  id: 2,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zuvitrex",
  name: "Zuvitrex",
  subtitle: "Methotrexate Injection",
  type: "Injection",

  image: "/products/zuvitrex50-1.png",

  images: [
    "/products/zuvitrex50-1.png",
    "/products/zuvitrex50-2.png",
    "/products/zuvitrex50-3.png",
    "/products/zuvitrex500-1.png",
    "/products/zuvitrex500-2.png",
    "/products/zuvitrex500-3.png",
  ],

  strength: "50/500/1000 mg",
  packSize: "Vial",
  drugClass: "Antineoplastic Drug, Antimetabolite",

  dosage: `
• For intravenous use only. Not for intrathecal use.

• Verify the concentration prior to preparation and administration to avoid overdosage.

• Verify pregnancy status in females of reproductive potential before starting Methotrexate Injection.

• See full prescribing information about monitoring and concomitant therapies for intermediate- and high-dose regimens.

• Acute Lymphoblastic Leukemia:
The recommended dosage of Methotrexate Injection varies from 10 mg/m² to 5000 mg/m² intravenously as part of a combination chemotherapy regimen.

• Non-Hodgkin Lymphoma:
The recommended dosage of Methotrexate Injection varies from 1000 mg/m² to 8000 mg/m² intravenously.

• Osteosarcoma:
The recommended dosage of Methotrexate Injection is typically 12 grams/m² (maximum: 20 grams per dose) as an intravenous infusion over 4 hours followed by leucovorin rescue in accordance with high-dose therapy protocols.
`,

  coldStorage: "No",

  description: `
Methotrexate is a folate derivative that inhibits several enzymes responsible for nucleotide synthesis. This inhibition leads to suppression of inflammation as well as prevention of cell division.

Because of these effects, Methotrexate is often used to treat inflammation caused by arthritis or to control cell division in neoplastic diseases such as breast cancer and non-Hodgkin's lymphoma.
`,

  indication: `
Methotrexate Injection is a folate analog metabolic inhibitor indicated for the treatment of:

• Adult and pediatric patients with acute lymphoblastic leukemia as part of a combination chemotherapy regimen.

• Adult and pediatric patients with non-Hodgkin lymphoma.

• Adult and pediatric patients with osteosarcoma as part of a combination chemotherapy regimen.

• Limitations of Use:
Methotrexate Injection is not indicated for non-oncology diseases.
`,

  clinicalEfficacy: `
In a Canadian double-blind randomized trial, 18 patients with active rheumatoid arthritis (RA) were treated with 12.5 mg oral Methotrexate and 17 patients with 50 mg parenteral gold for 6 months.

The patients improved significantly but there was no major advantage observed for gold therapy.

In another Canadian trial, 20 patients were treated with 10 mg oral Methotrexate and 50 mg aurothiomalate respectively, demonstrating significant clinical improvement.
`,

  safetyInformation: `
Pregnancy:
Methotrexate should be avoided during pregnancy, especially during the first trimester. Adequate contraceptive measures should be advised if either partner is undergoing Methotrexate treatment.

Breastfeeding:
Mothers receiving Methotrexate should refrain from breastfeeding due to potential harm to the nursing infant.

Fertility:
Methotrexate may lead to suppression of ovarian function, with reports of amenorrhea following therapy. In males, azoospermia has been observed after receiving Methotrexate, typically after cumulative doses exceeding a certain threshold. Some recovery of spermatogenesis has been noted in patients post-treatment.

Teratogenicity:
Similar to other cytotoxic agents, Methotrexate carries a potential risk of teratogenic effects.
`,
},

{
  id: 3,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zyrolbine",
  name: "Zyrolbine",
  subtitle: "Vinorelbine Injection",
  type: "Injection",

  image: "/products/zyrolbine/zyrolbine10-1.jpeg",

  images: [
    "/products/zyrolbine/zyrolbine10-1.jpeg",
    "/products/zyrolbine/zyrolbine10-2.jpeg",
    "/products/zyrolbine/zyrolbine10-3.jpeg",
  ],

  strength: "10/50 mg",
  packSize: "Vial",
  drugClass: "Antineoplastic Drug, Antimetabolite",

  dosage: `
Vinorelbine injection is an antineoplastic drug classified as an antimetabolite. It is available in a strength of 10 mg per vial.

The usual dosage for the treatment of non-small cell lung cancer (NSCLC) is 25–30 mg/m², administered intravenously once weekly.

The injection is typically diluted in 50 mL of normal saline and given over 6–10 minutes.

The dose and frequency may be adjusted based on the patient's response and tolerance to the treatment.

Vinorelbine should be stored under cold conditions, and the specific protocol provided by an oncologist or healthcare professional must be followed to ensure safe and effective use.
`,

  coldStorage: "Yes",

  description: `
Vinorelbine injection is an antineoplastic agent that belongs to the class of antimetabolites.

It is available as a sterile solution for intravenous administration.

Vinorelbine is a semi-synthetic vinca alkaloid, derived from the leaves of the periwinkle plant (Vinca rosea).

It is a clear, colorless to pale yellow solution.
`,

  indication: `
Vinorelbine injection is indicated for the treatment of non-small cell lung cancer (NSCLC).

It is used as a single agent or in combination with other chemotherapeutic agents.

Vinorelbine has also demonstrated efficacy in the treatment of metastatic breast cancer and may be used in other cancers as determined by a healthcare professional.
`,

  clinicalEfficacy: `
Metronomic oral vinorelbine monotherapy shows promising results for patients with stage IIIB/IV and advanced non-small cell lung cancer (NSCLC).

• Overall Response Rate (ORR): 12% (95% CI 5-20)

• Disease Control Rate (DCR): 48% (95% CI 38-59)

• Median Progression-Free Survival (PFS): 3.46 months (95% CI 2.49-4.43)

• Overall Survival (OS): 8.22 months (95% CI 7.21-9.24)

The treatment has an acceptable safety profile, with 16% (95% CI 10-22) of patients experiencing grade 3/4 adverse events (AEs), primarily neutropenia at 9% (95% CI 2-20) and leukopenia at 8% (95% CI 1-19).

This therapy is particularly beneficial for untreated elderly patients due to its convenience, lower cost, and manageable toxicity.
`,

  safetyInformation: `
Pregnancy:
Vinorelbine is classified as a pregnancy category D drug, indicating positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience.

Pregnant women should avoid vinorelbine unless the potential benefits justify the potential risks to the fetus.

Breastfeeding:
Vinorelbine should not be administered to breastfeeding mothers. The potential for serious adverse reactions in nursing infants from vinorelbine is high.

Fertility:
Vinorelbine may impair fertility in both men and women. Women may experience suppression of ovarian function leading to amenorrhea, while men may experience azoospermia.

Some recovery of fertility may occur post-treatment, but this is not guaranteed.

Teratogenicity:
Like other cytotoxic agents, vinorelbine carries a risk of teratogenic effects. Exposure during pregnancy can result in fetal harm including congenital anomalies and fetal death.

Special Precautions:

• Tell your doctor and pharmacist if you are allergic to vinorelbine or any other medications.

• Inform your doctor about prescription drugs, vitamins, nutritional supplements, and herbal products you are taking.

• Tell your doctor if you have liver disease.

• Use effective birth control during and after treatment.

• Do not breastfeed during treatment and for 9 days after the final dose.

• Vinorelbine may cause constipation. Consult your doctor regarding diet and preventive medications.
`,
},
{
  id: 4,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zostin",
  name: "Zostin",
  subtitle: "Amifostine Injection",
  type: "Injection",

  image: "/products/zostin/zostin500-1.jpeg",

  images: [
    "/products/zostin/zostin500-1.jpeg",
    "/products/zostin/zostin500-2.jpeg",
    "/products/zostin/zostin500-3.jpeg",
  ],

  strength: "500 mg",
  packSize: "Vial",
  drugClass: "Cytoprotective agents",

  dosage: `
The usual adult dose for Amifostine to reduce the risk of kidney damage associated with cisplatin chemotherapy is 910 mg/m² administered as a 15-minute intravenous infusion, starting 30 minutes before chemotherapy.

For reducing dry mouth (xerostomia) caused by radiation therapy in patients with head and neck cancer, the recommended dose is 200 mg/m² administered as a 3-minute intravenous infusion, starting 15–30 minutes before radiation therapy.
`,

  coldStorage: "Vial",

  description: `
Amifostine 500 mg injection is a cytoprotective agent used primarily to reduce the risk of kidney damage in patients receiving cisplatin for advanced ovarian cancer and to reduce dry mouth caused by radiation therapy in patients with head and neck cancer.

The usual dosage involves a single dose of 910 mg/m² administered as a 15-minute intravenous infusion, starting 30 minutes before chemotherapy or radiation therapy.

Amifostine is a prodrug that, upon dephosphorylation by alkaline phosphatase, becomes an active free thiol metabolite which can scavenge free radicals and detoxify reactive metabolites of cisplatin.

Amifostine is effective in protecting normal tissues without reducing the anti-tumor efficacy of chemotherapy or radiation therapy.

Clinical studies have demonstrated its ability to significantly reduce renal toxicity and xerostomia, enhancing the quality of life for patients undergoing these treatments.
`,

  indication: `
Amifostine is indicated for reducing the risk of nephrotoxicity associated with repeated administration of cisplatin in patients with advanced ovarian cancer.

It is also used to reduce the incidence of moderate to severe xerostomia in patients undergoing postoperative radiation treatment for head and neck cancer.
`,

  clinicalEfficacy: `
Patients aged 18 or older with untreated Stage III/IV SCCHN received radiotherapy (70–72 Gy), weekly paclitaxel, and carboplatin for 6 weeks, along with 500 mg subcutaneous amifostine before radiotherapy.

In a study of 20 evaluable patients (median age 55):

• Grade 2 xerostomia was 42% at 12 months and 29% at 18 months.

• No Grade ≥3 xerostomia was observed.

• Grade ≥3 mucositis occurred in 30% of patients, resolving in a median of 12.5 weeks.

• One-year survival rate was 95%.

• Two-year survival rate was 71%.

• All patients had Grade 2 weight loss.

• 35% had Grade ≤2 nausea/vomiting.

• No severe amifostine-related adverse events were observed.

Subcutaneous amifostine was well tolerated, showing lower nausea/vomiting rates compared to intravenous amifostine, with similar xerostomia and mucositis rates.
`,

  safetyInformation: `
Pregnancy:
Amifostine is classified as pregnancy category C. Animal studies have shown adverse effects on the fetus, and there are no adequate studies in pregnant women. It should be used during pregnancy only if the potential benefit justifies the potential risk to the fetus.

Breast-feeding:
It is unknown if amifostine is excreted in human milk. Due to the potential for serious adverse reactions in nursing infants, a decision should be made to discontinue breastfeeding or discontinue the drug, considering the importance of the drug to the mother.

Fertility:
No specific studies on fertility impairment have been conducted with amifostine, but based on its mechanism of action, it could potentially affect fertility.

Teratogenicity:
Animal studies have shown that amifostine may cause fetal harm when administered to a pregnant woman. Women of childbearing potential should be advised to avoid becoming pregnant while receiving amifostine.
`,

  specialPrecautions: `
• Tell your doctor and pharmacist if you are allergic to amifostine, any other medications, or any ingredients in amifostine injection.

• Inform your doctor and pharmacist about all prescription and nonprescription medications, vitamins, nutritional supplements, and herbal products you are taking or plan to take.

• Be sure to mention medications for high blood pressure. Your doctor will tell you to stop taking your blood pressure medicine 24 hours before receiving amifostine injection.

• Inform your doctor if you have or have ever had heart disease, an irregular heartbeat, heart failure, stroke, or ministroke.

• Inform your doctor if you are pregnant, planning pregnancy, or breast-feeding.

• Do not breast-feed during treatment with amifostine.
`,
},

{
  id: 5,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "auset",
  name: "Auset",
  subtitle: "Azacitidine Injection",
  type: "Injection",

  image: "/products/auset200-1.png",

  images: [
    "/products/auset200-1.png",
    "/products/auset200-2.png",
    "/products/auset200-3.png",
    "/products/auset300-1.png",
    "/products/auset300-2.png",
    "/products/auset300-3.png"
  ],

  strength: "100 mg",
  packSize: "Vial",
  drugClass: "Demethylation Agents",

  dosage: `
The recommended starting dose for the first treatment cycle, for all patients regardless of baseline hematology values, is Azacitidine for injection 75 mg/m² daily for 7 days to be administered by subcutaneous (SC) injection or intravenous (IV) infusion.

Premedicate for nausea and vomiting.

Repeat cycles every 4 weeks.

After 2 cycles, may increase dose to 100 mg/m² if no beneficial effect is seen and no toxicity other than nausea and vomiting has occurred.

Patients should be treated for a minimum of 4 to 6 cycles. Complete or partial response may require additional treatment cycles.

Continue treatment as long as the patient continues to benefit.

Monitor patients for hematologic response and for renal toxicity; delay or reduce dosage as appropriate.
`,

  coldStorage: "No",

  description: `
Azacitidine is a pyrimidine nucleoside analogue used to treat certain subtypes of myelodysplastic syndrome.

Azacitidine is a pyrimidine nucleoside analogue with anti-neoplastic activity. It differs from cytosine by the presence of nitrogen in the C5-position, which is key in its hypomethylating activity.
`,

  indication: `
Azacitidine for injection is a nucleoside metabolic inhibitor indicated for the treatment of patients with the following FAB myelodysplastic syndrome (MDS) subtypes:

• Refractory anemia (RA)

• Refractory anemia with ringed sideroblasts (RARS) if accompanied by neutropenia or thrombocytopenia or requiring transfusions

• Refractory anemia with excess blasts (RAEB)

• Refractory anemia with excess blasts in transformation (RAEB-T)

• Chronic myelomonocytic leukemia (CMMoL)
`,

  clinicalEfficacy: `
A clinical study compared the overall survival (OS) of azacitidine to conventional care regimens (CCR) in elderly patients with low bone marrow blast count acute myeloid leukemia (AML).

At a median follow-up of 20.1 months:

• Patients treated with azacitidine had a median OS of 24.5 months.

• Patients on CCR had a median OS of 16.0 months.

• Hazard ratio = 0.47; P = 0.005.

• The 2-year OS rates were 50% for azacitidine and 16% for CCR (P = 0.001).

• Significantly higher survival was observed in patients unfit for intensive chemotherapy (P = 0.0003).

Additionally, Garcia-Manero et al. (2016) investigated the efficacy and safety of extended dosing schedules of azacitidine in patients with lower-risk myelodysplastic syndromes (MDS).

The study focused on overall response rates, including complete or partial remission and transfusion independence.

• Overall response rates were 36% for the 14-day dosing schedule.

• Overall response rates were 41% for the 21-day dosing schedule.

• Red blood cell transfusion independence rates were 31% and 38%, respectively.

The study concluded that extended dosing schedules of oral azacitidine could provide effective long-term treatment for lower-risk MDS patients.
`,

  safetyInformation: `
Pregnancy:
Azacitidine is classified as a pregnancy category D drug. It can cause fetal harm when administered to a pregnant woman.

Adequate contraceptive precautions should be advised for both male and female patients receiving azacitidine.

The use of azacitidine should be avoided during pregnancy, especially during the first trimester.

Breastfeeding:
It is recommended that breastfeeding be discontinued during treatment with azacitidine due to the potential for serious adverse reactions in nursing infants.

Fertility:
Azacitidine may impair fertility in both men and women.

Women of reproductive potential should use effective contraception during treatment with azacitidine.

Men should consider sperm preservation prior to treatment with azacitidine, as azoospermia has been observed with this therapy.

Teratogenicity:
Like other cytotoxic agents, azacitidine is potentially teratogenic and can cause fetal harm if used during pregnancy.

Pregnancy testing and effective contraception are recommended during treatment with azacitidine to prevent pregnancy-related risks.
`,

  specialPrecautions: `
• Tell your doctor and pharmacist if you are allergic to azacitidine, mannitol (Osmitrol, Resectisol), or any other medications.

• Inform your doctor and pharmacist about all prescription and nonprescription medications, vitamins, nutritional supplements, and herbal products you are taking or plan to take.

• Tell your doctor if you have a liver tumor.

• Inform your doctor if you have or have ever had liver or kidney disease.

• Tell your doctor if you are pregnant or planning to become pregnant, or if you plan to father a child.

• Use effective birth control during treatment with azacitidine.

• Do not breastfeed while using azacitidine.

• Inform your doctor or dentist if you are having surgery, including dental surgery.
`,
},
{
  id: 6,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "bendaz",
  name: "Bendaz",
  subtitle: "Bendamustine Injection",
  type: "Injection",

  image: "/products/bendaz100-1.png",

  images: [
    "/products/bendaz100-1.png",
    "/products/bendaz100-2.png",
    "/products/bendaz100-3.png",
  ],

  strength: "100 mg",
  packSize: "Vial",
  drugClass: "Alkylating agents",

  dosage: `
Bendamustine hydrochloride is available in two formulations, a solution (Bendamustine Injection) and a lyophilized powder (Bendamustine for Injection).

For CLL:
100 mg/m² infused intravenously over 30 minutes on Days 1 and 2 of a 28-day cycle, up to 6 cycles.

For NHL:
120 mg/m² infused intravenously over 60 minutes on Days 1 and 2 of a 21-day cycle, up to 8 cycles.
`,

  coldStorage: "No",

  description: `
Bendamustine is a nitrogen mustard drug indicated for use in the treatment of chronic lymphocytic leukemia (CLL) and indolent B-cell non-Hodgkin lymphoma (NHL) that has progressed during or within six months of treatment with rituximab or a rituximab-containing regimen.

Bendamustine is a bifunctional mechlorethamine derivative capable of forming electrophilic alkyl groups that covalently bond to other molecules.
`,

  indication: `
Bendamustine Hydrochloride for Injection is an alkylating drug indicated for treatment of patients with:

• Chronic lymphocytic leukemia (CLL). Efficacy relative to first line therapies other than chlorambucil has not been established.

• Indolent B-cell non-Hodgkin lymphoma (NHL) that has progressed during or within six months of treatment with rituximab or a rituximab-containing regimen.
`,

  clinicalEfficacy: `
Bendamustine has demonstrated significant efficacy across multiple studies in various hematologic malignancies.

In patients with rituximab-refractory, indolent B-cell non-Hodgkin lymphoma (NHL), a Phase III study showed:

• Superior overall response rates (68% vs 39%)

• Longer median progression-free survival (21.7 vs 9.3 months)

• Prolonged remission duration (18.9 vs 6.1 months) compared to chlorambucil.

Another study in rituximab-refractory NHL reported:

• Overall response rate of 84% with bendamustine monotherapy

• 29% complete response rate

• Median progression-free survival of 9.7 months.

Bendamustine has also shown efficacy in multiple myeloma (MM) and has approvals in Europe for MM, NHL, chronic lymphocytic leukemia (CLL), breast cancer, and Hodgkin lymphoma.

Primary dose-limiting toxicity was hematologic.
`,

  safetyInformation: `
Pregnancy:
The use of bendamustine should be avoided during pregnancy, particularly during the first trimester.

Breastfeeding:
It is not recommended to breastfeed during treatment with bendamustine due to the potential for serious adverse reactions in nursing infants.

Fertility:
Bendamustine may impair fertility in both men and women. Women of childbearing potential should use effective contraception during treatment with bendamustine.

Men should consider sperm preservation before starting bendamustine therapy, as it may lead to temporary or permanent infertility.

Teratogenicity:
Pregnancy testing and effective contraception are recommended during and for at least six months after treatment with bendamustine to minimize the risk of fetal exposure.
`,

  specialPrecautions: `
• Myelosuppression: Delay or reduce dose and restart treatment based on ANC and platelet count recovery.

• Infections: Monitor for fever and other signs of infection or reactivation of infections and treat promptly.

• Progressive multifocal leukoencephalopathy (PML): Monitor for neurological, cognitive, or behavioral symptoms suggestive of PML.

• Anaphylaxis and Infusion Reactions: Severe and anaphylactic reactions have occurred.

• Tumor Lysis Syndrome: May lead to acute renal failure and death.

• Skin Reactions: Severe skin reactions including SJS, DRESS and TEN have been reported.

• Hepatotoxicity: Monitor liver chemistry tests prior to and during treatment.

• Other Malignancies: Pre-malignant and malignant diseases have been reported.

• Extravasation Injury: Take precautions to avoid extravasation during infusion.

• Embryo-Fetal Toxicity: Can cause fetal harm. Advise females of reproductive potential to use effective contraception.
`,
},

{
  id: 7,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "bartek",
  name: "Bartek",
  subtitle: "Busulfan Injection",
  type: "Injection",

  image: "/products/bartek/bartek60-1.jpeg",

  images: [
    "/products/bartek/bartek60-1.jpeg",
    "/products/bartek/bartek60-2.jpeg",
    "/products/bartek/bartek60-3.jpeg",
  ],

  strength: "60 mg",
  packSize: "Vial",
  drugClass: "Alkylating agents",

  dosage: `
• Pre-medicate with anticonvulsants (e.g. benzodiazepines, phenytoin, valproic acid or levetiracetam) and antiemetic.

• Dilute and administer as intravenous infusion. Do not administer as intravenous push or bolus.

• Recommended adult dose: 0.8 mg per kg of ideal body weight or actual body weight, whichever is lower, administered intravenously via a central venous catheter as a two-hour infusion every six hours for four consecutive days for a total of 16 doses.
`,

  coldStorage: "No",

  description: `
Busulfan is a methanesulfonate ester that is butane-1,4-diol in which the hydrogens of the hydroxy groups are replaced by methanesulfonyl groups.

An alkylating antineoplastic agent, it is used for the treatment of chronic myeloid leukemia although it has been largely replaced by newer drugs.

It is also used as an insect sterilant.

Busulfan has roles as an insect sterilant, antineoplastic agent, teratogenic agent, carcinogenic agent, and alkylating agent.

It is functionally related to a butane-1,4-diol.
`,

  indication: `
Busulfan injection is indicated for use in combination with cyclophosphamide as a conditioning regimen prior to allogeneic hematopoietic progenitor cell transplantation for chronic myelogenous leukemia.
`,

  clinicalEfficacy: `
The study involved 61 patients receiving Busulfan Injection as part of a conditioning regimen for allogeneic hematopoietic stem cell transplantation, primarily targeting various high-risk hematologic malignancies.

Patients received a specific Busulfan regimen followed by cyclophosphamide before stem cell infusion.

All patients achieved myeloablation, and most successfully engrafted within a median of 13 days post-transplant.

Despite a significant portion experiencing disease relapse, a majority remained disease-free at follow-up, though mortality rates were notable, particularly within the first 100 days post-transplant.
`,

  safetyInformation: `
Pregnancy:
Busulfan therapy should be avoided during pregnancy, particularly during the first trimester.

Breastfeeding:
Busulfan is excreted in human milk. Breastfeeding should be discontinued during treatment with busulfan due to the potential for serious adverse reactions in nursing infants.

Fertility:
Busulfan may impair fertility in both men and women. Women of reproductive potential should use effective contraception during treatment with busulfan.

Men should consider sperm preservation prior to treatment with busulfan, as it can lead to infertility and azoospermia.

Teratogenicity:
Busulfan is known to be teratogenic and can cause fetal harm if used during pregnancy.
`,

  specialPrecautions: `
• Inform your doctor and pharmacist if you are allergic to busulfan or any ingredients in busulfan tablets.

• Tell your doctor and pharmacist about all prescription and nonprescription medications, vitamins, nutritional supplements, and herbal products you are taking or plan to take.

• Inform your doctor if you have previously undergone radiation therapy or treatment with chemotherapy medications.

• Inform your doctor if you have a history of seizures or head injury.

• Busulfan may affect the menstrual cycle in women and halt sperm production in men.

• Women who are pregnant or breastfeeding should inform their doctors before starting busulfan.

• Reliable contraception should be used during treatment.

• Contact your doctor immediately if pregnancy occurs while taking busulfan.
`,
},
{
  id: 8,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "glioz",
  name: "Glioz",
  subtitle: "Carmustine Injection",
  type: "Injection",

  image: "/products/glioz/glioz100-1.jpeg",

  images: [
    "/products/glioz/glioz100-1.jpeg",
    "/products/glioz/glioz100-2.jpeg",
    "/products/glioz/glioz100-3.jpeg",
  ],

  strength: "100 mg",
  packSize: "Vial",
  drugClass: "Antineoplastic Agent",

  dosage: `
• Recommended Dose:
Glioz is recommended at 150-200 mg/m² intravenously every 6 weeks, either as a single dose or divided over two consecutive days (75-100 mg/m² per day).

• Adjust doses when used with other myelosuppressive drugs or in patients with depleted bone marrow reserve.

• Subsequent doses should be based on hematologic response to the previous dose.

• Blood counts should be monitored weekly.

• Repeat courses should be delayed until:
- platelets are above 100,000/mm³
- leukocytes above 4,000/mm³

• Hematologic toxicity is cumulative and delayed.

• Repeat courses should not be given sooner than every 6 weeks.

• Ensure an adequate number of neutrophils are present before administering repeat courses.
`,

  coldStorage: "No",

  description: `
Carmustine, a nitrosourea used in treating certain neoplastic diseases, is chemically 1,3-bis (2-chloroethyl)-1-nitrosourea.

It exists as sterile lyophilized pale yellow flakes or mass, with a molecular weight of 214.06.

Carmustine is highly soluble in alcohol and lipids but poorly soluble in water.

It is administered intravenously after reconstitution and is available in 100 mg single-dose vials of lyophilized material, with a co-packaged sterile diluent of Dehydrated Alcohol Injection, USP, for constitution.
`,

  indication: `
Carmustine is indicated for palliative therapy either as a single agent or in combination with other approved chemotherapeutic agents for treatment of:

• Brain tumors including:
- glioblastoma
- brainstem glioma
- medulloblastoma
- astrocytoma
- ependymoma
- metastatic brain tumors

• Multiple myeloma in combination with prednisone

• Hodgkin’s Disease as secondary therapy

• Non-Hodgkin’s lymphomas as secondary therapy
`,

  clinicalEfficacy: `
Several studies including randomized controlled trials and observational studies evaluated BCNU-wafers versus placebo as adjuvant therapy for newly diagnosed high-grade glioma in adults.

The trials included a total of 193 patients who received BCNU-wafers.

Primary endpoint analysis focused on survival and demonstrated:
• Potential median survival benefit of 2.3 months with BCNU-wafers
• HR 0.77
• 95% CI 0.57-1.03
• p = 0.08

Long-term follow-up indicated a survival advantage with BCNU-wafers.

No significant difference was observed in progression-free survival.

Subgroup analysis for grade IV tumors also did not show statistically significant survival benefit:
• HR 0.82
• 95% CI 0.55-1.11
• p = 0.20

Overall, BCNU-wafers showed promise in extending survival, though further research is needed.
`,

  safetyInformation: `
Pregnancy:
Use of carmustine should be avoided during pregnancy, particularly during the first trimester.

Breastfeeding:
Carmustine is excreted in human milk and breastfeeding should be discontinued during treatment.

Fertility:
Carmustine may impair fertility.

Women should use effective contraception during treatment.

Men should consider sperm preservation before treatment due to possible azoospermia.

Teratogenicity:
Carmustine is considered potentially teratogenic similar to other cytotoxic agents.
`,

  specialPrecautions: `
• Tell your doctor and pharmacist if you are allergic to carmustine or any ingredients in the injection.

• Inform your doctor about all prescription and nonprescription medications, vitamins, and supplements.

• Be sure to mention:
- cimetidine (Tagamet)
- phenytoin (Dilantin)

• Tell your doctor if you have or have ever had kidney or liver disease.

• Inform your doctor if you are pregnant, planning pregnancy, or breast-feeding.

• Carmustine may harm the fetus.
`,
},
{
  id: 9,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "cladiraaz",
  name: "Cladiraaz-10",
  subtitle: "Cladribine Injection",
  type: "Injection",

  image: "/products/cladiraaz/cladiraaz10-1.jpeg",

  images: [
    "/products/cladiraaz/cladiraaz10-1.jpeg",
    "/products/cladiraaz/cladiraaz10-2.jpeg",
    "/products/cladiraaz/cladiraaz10-3.jpeg",
  ],

  strength: "10 mg",
  packSize: "Vial",
  drugClass: "Antineoplastic Agent",

  dosage: `
The recommended dose and schedule of cladribine injection for active Hairy Cell Leukemia is as a single course given by continuous infusion for seven consecutive days at a dose of 0.09 mg/kg/day.

Deviations from this dosage regimen are not advised.

If the patient does not respond to the initial course of cladribine injection for Hairy Cell Leukemia, it is unlikely that they will benefit from additional courses.

Specific risk factors predisposing to increased toxicity from cladribine injection have not been defined.

In view of the known toxicities of agents of this class, it would be prudent to proceed carefully in patients with known or suspected renal insufficiency or severe bone marrow impairment of any etiology.
`,

  coldStorage: "Yes",

  description: `
Cladribine Injection, USP (also commonly known as 2-chloro-2’-deoxy-ß-D-adenosine) is a synthetic antineoplastic agent for continuous intravenous infusion.

It is a clear, colorless, sterile, preservative-free, isotonic solution.

Cladribine injection, USP is available in single-dose vials containing 10 mg (1 mg/mL) of cladribine, a chlorinated purine nucleoside analog.

Each milliliter of cladribine injection, USP contains 1 mg of the active ingredient and 9 mg (0.15 mEq) of sodium chloride as an inactive ingredient.

The solution has a pH range of 5.5 to 8.0.

Phosphoric acid and/or dibasic sodium phosphate may have been added to adjust the pH to 6.3 ± 0.3.

The chemical name for cladribine is 2-chloro-6-amino-9-(2-deoxy-ß-D-erythropentofuranosyl) purine.
`,

  indication: `
Cladribine Injection, USP is indicated for the treatment of active Hairy Cell Leukemia as defined by clinically significant anemia, neutropenia, thrombocytopenia or disease-related symptoms.
`,

  clinicalEfficacy: `
Cladribine is used to treat the relapsing forms of multiple sclerosis (MS), including relapsing-remitting disease and active secondary progressive disease, in patients who have been previously treated with other medicines that did not work well.
`,

  safetyInformation: `
Cladribine injection should be administered under the supervision of a qualified physician experienced in the use of antineoplastic therapy.

Suppression of bone marrow function should be anticipated. This is usually reversible and appears to be dose dependent.

Serious neurological toxicity including irreversible paraparesis and quadraparesis has been reported in patients who received cladribine injection by continuous infusion at high doses.

Neurologic toxicity appears to demonstrate a dose relationship; however, severe neurological toxicity has been reported rarely following treatment with standard cladribine dosing regimens.

Acute nephrotoxicity has been observed with high doses of cladribine injection, especially when given concomitantly with other nephrotoxic agents or therapies.
`,

  specialPrecautions: `
Cladribine injection is a potent antineoplastic agent with potentially significant toxic side effects.

It should be administered only under the supervision of a physician experienced with the use of cancer chemotherapeutic agents.

Patients undergoing therapy should be closely observed for signs of hematologic and non-hematologic toxicity.

Periodic assessment of peripheral blood counts, particularly during the first four to eight weeks post treatment, is recommended to detect the development of anemia, neutropenia and thrombocytopenia and for early detection of potential sequelae such as infection or bleeding.

Monitoring of renal and hepatic function is also recommended.
`,
},
{
  id: 10,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "decitaz",
  name: "Decitaz-50 mg",
  subtitle: "Decitabine Injection",
  type: "Injection",

  image: "/products/decitaz/decitaz-1.jpeg",

  images: [
    "/products/decitaz/decitaz-1.jpeg",
    "/products/decitaz/decitaz-2.jpeg",
    "/products/decitaz/decitaz-3.jpeg",
  ],

  strength: "50 mg",
  packSize: "Vial",
  drugClass: "Hypomethylation Agents",

  dosage: `
Pre-Medications and Baseline Testing:
• Consider pre-medicating for nausea with antiemetics.
• Conduct baseline laboratory testing:
- complete blood count (CBC) with platelets
- serum hepatic panel
- serum creatinine

Three Day Regimen:
Administer decitabine for Injection at a dose of 15 mg/m² by continuous intravenous infusion over 3 hours repeated every 8 hours for 3 days.

Repeat cycles every 6 weeks upon hematologic recovery for a minimum of 4 cycles.

Five Day Regimen:
Administer decitabine for Injection at a dose of 20 mg/m² by continuous intravenous infusion over 1 hour daily for 5 days.

Repeat cycles every 4 weeks upon hematologic recovery for a minimum of 4 cycles.

Patients with Renal or Severe Hepatic Impairment:
Consider potential risks and benefits before initiating treatment.

Dosage Modifications for Adverse Reactions:
• Delay and reduce dose for hematologic toxicity.
• Monitor renal and hepatic toxicity carefully.

Preparation and Administration:
• Reconstitute with 10 mL Sterile Water for Injection.
• Final concentration after reconstitution is 5 mg/mL.
• Dilute with 0.9% Sodium Chloride Injection or 5% Dextrose Injection prior to administration.
• Store diluted solution at 2°C to 8°C for up to 4 hours if delayed administration is needed.
`,

  coldStorage: "Yes",

  description: `
Decitabine is a nucleoside metabolic inhibitor.

Decitabine for Injection contains decitabine (5-aza-2'-deoxycytidine), an analogue of the natural nucleoside 2'-deoxycytidine.

Decitabine is a fine, white to almost white powder with molecular formula C8H12N4O4 and molecular weight 228.21 gm/mol.

Its chemical name is 4-amino-1-(2-deoxy-β-D-erythro-pentofuranosyl)-1,3,5-triazin-2(1H)-one.

Decitabine is slightly soluble in ethanol/water, methanol/water and methanol; sparingly soluble in water and soluble in dimethyl sulfoxide (DMSO).

Decitabine for Injection is supplied as a sterile, white to almost white lyophilized powder in a clear colorless glass single-dose vial.
`,

  indication: `
Decitabine for injection is indicated for treatment of adult patients with myelodysplastic syndromes (MDS) including:

• Previously treated and untreated
• De novo and secondary MDS
• Refractory anemia
• Refractory anemia with ringed sideroblasts
• Refractory anemia with excess blasts
• Refractory anemia with excess blasts in transformation
• Chronic myelomonocytic leukemia

Applicable for intermediate-1, intermediate-2 and high-risk International Prognostic Scoring System groups.
`,

  clinicalEfficacy: `
Decitabine exerts antineoplastic effects after phosphorylation and direct incorporation into DNA and inhibition of DNA methyl transferase, causing hypomethylation of DNA and cellular differentiation or apoptosis.

Decitabine inhibits DNA methylation in vitro at concentrations that do not cause major suppression of DNA synthesis.

Decitabine-induced hypomethylation in neoplastic cells may restore normal function to genes critical for control of cellular differentiation and proliferation.

In rapidly dividing cells, cytotoxicity may also be attributed to formation of covalent adducts between DNA methyl transferase and decitabine incorporated into DNA.

Regarding toxicity and efficacy:
• thrombocytopenia: 40%
• febrile neutropenia: 38%
• neutropenia: 37%
• anemia: 36%
• fatigue: 15%

Treatment-associated infections:
• pneumonia: 25%
• sepsis: 9%

30-day mortality: 7%
60-day mortality: 17%
`,

  safetyInformation: `
Embryo-Fetal Toxicity:
Based on findings from human data, animal studies and mechanism of action, decitabine can cause fetal harm when administered to a pregnant woman.

Preclinical studies in mice and rats demonstrated:
• embryo-fetal lethality
• developmental malformations

Females of reproductive potential should use effective contraception during treatment and for 6 months following the last dose.

Males with female partners of reproductive potential should use effective contraception during treatment and for 3 months following the last dose.
`,

  specialPrecautions: `
• Decitabine is a cytotoxic drug and special handling/disposal procedures should be followed.

• Delay subsequent treatment for:
- serum creatinine ≥ 2 mg/dL
- ALT or bilirubin ≥ 2× ULN
- active or uncontrolled infection

• Monitor CBC, platelets, hepatic panel and renal function regularly.

• Monitor for severe myelosuppression and infections.

• Use caution in patients with renal or hepatic impairment.

• Pregnancy should be avoided during treatment.
`,
},
{
  id: 11,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "cabaxzel",
  name: "Cabaxzel",
  subtitle: "Cabazitaxel Injection",
  type: "Injection",

  image: "/products/cabaxzel/cabaxzel60-1.jpeg",

  images: [
    "/products/cabaxzel/cabaxzel60-1.jpeg",
    "/products/cabaxzel/cabaxzel60-2.jpeg",
    "/products/cabaxzel/cabaxzel60-3.jpeg",
  ],

  strength: "60 mg",
  packSize: "Vial",
  drugClass: "Antineoplastic agents (Microtubule Inhibitors)",

  dosage: `
• Cabazitaxel Injection 20 mg/m² administered every three weeks as a one-hour intravenous infusion in combination with oral prednisone 10 mg administered daily throughout Cabazitaxel Injection treatment.

• A dose of 25 mg/m² can be used in select patients at the discretion of the treating healthcare provider.

• Cabazitaxel Injection must be added to the infusion solution prior to administration.

• To avoid medication errors, do not combine the two-vial formulation (injection and diluent) with the one vial formulation.

• Withdraw the prescribed dose from Cabazitaxel Injection (10 mg/mL) vial and dilute into 0.9% Sodium Chloride Injection, USP or 5% Dextrose Injection, USP to prepare final infusion solution.

• Polyvinyl chloride (PVC) or polyurethane equipment should not be used.

• Premedication Regimen: Administer intravenously 30 minutes before each dose of Cabazitaxel Injection:
- Antihistamine: dexchlorpheniramine 5 mg or diphenhydramine 25 mg or equivalent antihistamine
- Corticosteroid: dexamethasone 8 mg or equivalent steroid
- H2 antagonist

• Antiemetic prophylaxis, oral or intravenous, is recommended as needed.
`,

  coldStorage: "No",

  description: `
Cabazitaxel is a tetracyclic diterpenoid that is 10-deacetylbaccatin III having O-methyl groups attached at positions 7 and 10 as well as an O-(2R,3S)-3-[(tert-butoxycarbonyl)amino]-2-hydroxy-3-phenylpropanoyl group attached at position 13.

Cabazitaxel acts as a microtubule inhibitor, binds tubulin and promotes microtubule assembly and simultaneously inhibits disassembly.

It has a role as an antineoplastic agent and a microtubule-stabilising agent.

It is functionally related to a 10-deacetylbaccatin III.
`,

  indication: `
Cabazitaxel Injection is a microtubule inhibitor indicated in combination with prednisone for treatment of patients with metastatic castration-resistant prostate cancer previously treated with a docetaxel-containing treatment regimen.
`,

  clinicalEfficacy: `
Clinical efficacy of Cabazitaxel injection has been demonstrated in several studies, highlighting its effectiveness in treating advanced prostate cancer.

In a pivotal Phase III trial, patients receiving Cabazitaxel showed significantly improved overall survival compared to those receiving standard therapy.

Hazard ratio = 0.70; 95% CI, 0.59–0.83; P < 0.001.

This survival benefit was observed despite the patients having previously received docetaxel-based therapy.

Additionally, Cabazitaxel was associated with higher rates of prostate-specific antigen (PSA) response and improved pain control compared to the control arm.

These findings underscore Cabazitaxel's role as a valuable treatment option for patients with advanced prostate cancer who have progressed on prior chemotherapy.
`,

  safetyInformation: `
Pregnancy:
Cabazitaxel is contraindicated during pregnancy due to its potential for causing fetal harm.

Breastfeeding:
It is not recommended to breastfeed during treatment with cabazitaxel, as it may cause serious adverse reactions in nursing infants.

Fertility:
Cabazitaxel may impair fertility. Women of reproductive potential should use effective contraception during and after treatment with cabazitaxel.

Men should consider sperm preservation before starting cabazitaxel therapy, as this treatment may cause reversible infertility.

Teratogenicity:
Like other cytotoxic agents, cabazitaxel is potentially teratogenic and can cause fetal harm.
`,

  specialPrecautions: `
• Tell your doctor and pharmacist if you are allergic to cabazitaxel injection, any other medications, polysorbate 80, or any of the other ingredients in cabazitaxel injection. Ask your pharmacist for a list of the ingredients.

• Tell your doctor and pharmacist what prescription and nonprescription medications, vitamins, and nutritional supplements you are taking or plan to take. Your doctor may need to change the doses of your medications or monitor you carefully for side effects.

• The following nonprescription or herbal products may interact with cabazitaxel injection: aspirin or other nonsteroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen (Advil, Motrin) and naproxen (Aleve, Naprosyn), or St. John's wort.

• Be sure to let your doctor and pharmacist know that you are taking these medications before you start receiving cabazitaxel injection.

• Do not start any of these medications while receiving cabazitaxel injection without discussing with your healthcare provider.

• Tell your doctor if you have or have ever had liver disease. Your doctor may probably tell you not to receive cabazitaxel injection.

• Tell your doctor if you have or have ever had kidney disease, anemia, bleeding ulcers, or lung problems.

• Tell your doctor if you have ever been treated with radiation therapy to your pelvis.

• Cabazitaxel injection is for use only in men.

• If your female partner is not pregnant but could become pregnant, you and your partner must use birth control during treatment and for 4 months after the final dose.

• If your partner becomes pregnant while you are receiving cabazitaxel injection, call your doctor. Cabazitaxel injection may harm the fetus.

• This medication may decrease fertility in men.

• If you are having surgery, including dental surgery, tell the doctor or dentist that you are receiving cabazitaxel injection.
`,
},

{
  id: 12,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zugarlix",
  name: "Zugarlix",
  subtitle: "Degarelix Injection",
  type: "Injection",

  image: "/products/zugarlix/zugarlix80-1.jpeg",

  images: [
    "/products/zugarlix/zugarlix80-1.jpeg",
    "/products/zugarlix/zugarlix80-2.jpeg",
    "/products/zugarlix/zugarlix80-3.jpeg",
    "/products/zugarlix/zugarlix120-1.jpeg",
    "/products/zugarlix/zugarlix120-2.jpeg",
    "/products/zugarlix/zugarlix120-3.jpeg",
  ],

  strength: "80/120 mg",
  packSize: "Vial",
  drugClass: "Gonadotropin-releasing hormone (GnRH) receptor antagonists",

  dosage: `
• Degarelix injection is for subcutaneous administration only and is not to be administered intravenously.

• Treatment is started with a dose of 240 mg given as two injections of 120 mg each.

• The starting dose is followed by maintenance doses of 80 mg administered as a single injection every 28 days.
`,

  coldStorage: "Yes",

  description: `
Degarelix is used for the treatment of advanced prostate cancer.

Degarelix is a synthetic peptide derivative drug which binds to gonadotropin-releasing hormone (GnRH) receptors in the pituitary gland and blocks interaction with GnRH.

This antagonism reduces luteinising hormone (LH) and follicle-stimulating hormone (FSH), which ultimately causes testosterone suppression.

Reduction in testosterone is important in treating men with advanced prostate cancer.

Chemically, it is a synthetic linear decapeptide amide with seven unnatural amino acids, five of which are D-amino acids.
`,

  indication: `
Degarelix is a GnRH receptor antagonist indicated for treatment of patients with advanced prostate cancer.
`,

  clinicalEfficacy: `
This study evaluated the efficacy and safety of degarelix, a new GnRH antagonist, compared to leuprolide in achieving and maintaining testosterone suppression in prostate cancer patients over one year.

A total of 610 patients were randomized to receive either degarelix, 240 mg starting dose then 80 mg or 160 mg monthly, or leuprolide 7.5 mg monthly.

Degarelix achieved testosterone levels ≤0.5 ng/mL in 97.2% and 98.3% of patients in its two dosing regimens, respectively, compared to 96.4% with leuprolide.

It also suppressed testosterone and PSA levels significantly faster than leuprolide, with median PSA levels lower at 14 and 28 days (P < 0.001).

Side effects were similar between groups, although degarelix had more injection-site reactions but fewer urinary tract infections, arthralgia, and chills.

Degarelix offers effective and rapid androgen deprivation without needing antiandrogen supplements to prevent clinical flare.
`,

  safetyInformation: `
Pregnancy:
Degarelix is contraindicated in pregnancy due to its potential to cause fetal harm.

Adequate contraceptive measures should be used by both male and female patients receiving degarelix.

Women of childbearing potential should undergo pregnancy testing prior to starting treatment with degarelix.

If pregnancy occurs during degarelix therapy, patients should be advised of the potential risk to the fetus.

Breastfeeding:
It is not known whether degarelix is excreted in human milk.

Breastfeeding should be discontinued during treatment with degarelix.

Fertility:
Degarelix may impair fertility.

Men should consider sperm preservation prior to initiating treatment with degarelix, as reversible suppression of spermatogenesis has been observed.

Recovery of spermatogenesis after discontinuation of degarelix treatment varies and may not occur in all patients.

Teratogenicity:
Degarelix may have the potential to cause fetal harm if administered during pregnancy.

Contraception is recommended during treatment and for a period after discontinuation to minimize the risk of pregnancy-related adverse effects.
`,

  specialPrecautions: `
• Tell your doctor and pharmacist if you are allergic to degarelix injection, any other medications, or any of the ingredients in degarelix injection. Ask your pharmacist or check the patient information for a list of the ingredients.

• Tell your doctor and pharmacist what prescription and nonprescription medications, vitamins, nutritional supplements, and herbal products you are taking or plan to take. Your doctor may need to change the doses of your medications or monitor you carefully for side effects.

• Tell your doctor if you or anyone in your family has or has ever had osteoporosis.

• Tell your doctor if you have or have ever had long QT syndrome, high or low blood levels of calcium, potassium, magnesium, or sodium, high blood pressure, heart disease, liver disease, or kidney disease.

• Degarelix injection is intended only for use in adult men.

• Degarelix is not intended for use in women, especially if they are or may become pregnant.

• Degarelix injection may harm the fetus.

• If you receive degarelix injection while pregnant, call your doctor immediately.

• If you are breastfeeding, talk to your doctor before you receive degarelix injection.

• This medication may decrease fertility in men and women. Talk to your doctor about the risks of receiving degarelix injection.
`,
},
{
  id: 46,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zuvidox",
  name: "Zuvidox",
  subtitle: "Doxorubicin Inj 10 mg / 50 mg",
  type: "Injection",

  image: "/products/zuvidox10-1.png",

  images: [
    "/products/zuvidox10-1.png",
    "/products/zuvidox10-2.png",
    "/products/zuvidox10-3.png",
    "/products/zuvidox50-1.png",
    "/products/zuvidox50-2.png",
    "/products/zuvidox50-3.png",
  ],

  strength: "10 mg / 50 mg",
  packSize: "1 Vial",
  drugClass: "Anthracyclines and Related Substances",

  dosage: `
The most commonly used dosage schedule is 60-70 mg/m² as a single intravenous administration at 21-day intervals.

A lower dose may be required in patients with inadequate marrow reserves.

An alternative dosage schedule of 20 mg/m² weekly has been reported to produce a lower incidence of congestive heart failure.

Doxorubicin dosage should be reduced if the bilirubin is elevated as follows:

• Serum bilirubin 1.3 to 3.0 mg/dL: give ½ normal dose
• Bilirubin > 3.0 mg/dL: give ¼ normal dose

Reconstitution

Zuvidox 10 and 50 vials should be reconstituted with 5 mL and 25 mL respectively, of Sodium Chloride Injection, USP/IP (0.9%), to give a final concentration of 2 mg/mL of doxorubicin hydrochloride.

Bacteriostatic diluents are not recommended.

After adding the diluent, the vial should be shaken and the contents allowed to dissolve.

The reconstituted solution is stable for:

• 7 days at room temperature and under normal room light
• 15 days under refrigeration (2°C-8°C / 36°F-46°F)

It should be protected from exposure to sunlight, and any unused solution should be discarded.
`,

  coldStorage: "No",

  description: `
Doxorubicin is a cytotoxic anthracycline antibiotic isolated from cultures of Streptomyces peucetius var. Caesisus.

Doxorubicin consists of a naphthacenequinone nucleus linked through a glycosidic bond at ring atom 7 to an amino sugar, daunosamine.

Chemically, doxorubicin hydrochloride is:

(8S, 10S)-10-[(3-amino-2,3,6-trideoxy-α-L-lyxo-hexopyranosyl)-oxy]-8-glycology]-7,8,9,10-tetrahydro-6,8,11-trihydroxy-1-methoxy-5,12-naphthacenedione hydrochloride [25316-40-9]
`,

  indication: `
Doxorubicin is indicated in the treatment of:

• Acute leukaemia
• Soft tissue sarcomas
• Bone sarcomas
• Breast cancer
• Ovarian cancer
• Hodgkin's lymphoma
• Non-Hodgkin's lymphoma
• Small cell lung cancer
• Gastric carcinoma
• Bladder carcinoma
`,

  clinicalEfficacy: `
Doxorubicin was encapsulated in canine erythrocytes, treated with 0.32% glutaraldehyde, and administered at a dosage equivalent to 30 mg of free doxorubicin/m² of body surface area to dogs with a diagnosis of lymphosarcoma.

Compared with administration of free doxorubicin, this method of drug delivery substantially reduced peak plasma concentration and prolonged higher plasma concentration of doxorubicin.

As such, this method was comparable to continuous IV infusion.

Previous studies have indicated this method’s potential for reduction in toxic side effects, particularly cardiotoxicosis, while allowing higher total doses of doxorubicin to be administered.

In this study, doxorubicin encapsulated in glutaraldehyde-treated erythrocytes induced a triphasic exponential decay of doxorubicin from plasma, the highest relative contribution to the total area of the curve being the terminal phase.

The treatment was effective in inducing complete and partial remissions of lymphosarcoma, with minimal acute toxicosis and no evidence of cardiotoxicosis.

However, substantial, unanticipated, chronic, nonregenerative myelosuppression developed and was most strikingly expressed as profound thrombocytopenia.

Efforts to ameliorate or circumvent this toxic effect will be required prior to further consideration of this doxorubicin delivery system for treatment of systemic neoplasia.
`,

  safetyInformation: `
Special attention must be given to the cardiac toxicity exhibited by doxorubicin.

Although uncommon, acute left ventricular failure has occurred, particularly in patients who have received a total dosage of the drug exceeding the currently recommended limit of 550 g/m².

The limit appears to be lower in patients who received radiotherapy to the mediastinal area or concomitant therapy with other potentially cardiotoxic agents such as cyclophosphamide.

The total dose of doxorubicin administered to the individual patients should also be taken into account.

Previous or concomitant therapy with related compounds such as daunorubicin.

Congestive heart failure and/or cardiomyopathy may be encountered several weeks after discontinuation of doxorubicin therapy.

Cardiac failure is often not favourably affected by presently known medical or physical therapy for cardiac support.

Early clinical diagnosis of drug-induced heart failure appears to be essential for successful treatment with digitalis.

Diuretics, a low-salt diet, and bed rest.

Severe cardiac toxicity may occur precipitously without antecedent ECG changes.

A baseline ECG and ECGs performed prior to each dose or course after a 300 mg/m cumulative dose has been given are suggested.

Transient ECG changes consisting of T-wave flattening, ST depression and arrhythmias lasting up to two weeks after a dose or course of doxorubicin are presently not considered indications for suspension of doxorubicin therapy.

Doxorubicin cardiomyopathy has been reported to be associated with a persistent reduction in the voltage of the QRS wave, a prolongation of the systolic time interval and a reduction of the ejection fraction as determined by echocardiography or radionuclide angiography.

None of these tests have yet been confirmed to consistently identify those individual patients that are approaching their maximally tolerated cumulative dose of doxorubicin.

If test results indicate a change in cardiac function associated with doxorubicin, the benefit of continued therapy must be carefully evaluated against the risk of producing irreversible cardiac damage.

Acute life-threatening arrhythmias have been reported to occur during or within a few hours after doxorubicin administration.

There is a high incidence of bone marrow depression, primarily of leukocytes, requiring careful hematologic monitoring with the recommended dose schedule.

Leukopenia is usually transient, reaching its nadir at 10-14 days after treatment, with recovery usually occurring by the 21st day.

White blood cell counts as low as 1,000/mm³ are to be expected during treatment with appropriate doses of doxorubicin.

Red blood cell and platelet levels should also be monitored since they may also be depressed.

Haematologic toxicity may require dose reduction or suspension or delay of doxorubicin therapy.

Persistent severe myelosuppression may result in superinfection or hemorrhage.

Toxicity to recommended doses of doxorubicin is enhanced by hepatic impairment.

Prior to the individual dosing evaluation of hepatic function, it is recommended to use conventional clinical laboratory tests, such as:

• SGOT
• SGPT
• Alkaline phosphatase
• Bilirubin

Necrotizing colitis manifested by typhlitis (caecal inflammation), bloody stools and severe and sometimes fatal infection have been associated with a combination of doxorubicin given IV push daily for 3 days and cytarabine by continuous infusion daily for 7 or more days.

On intravenous administration of doxorubicin, extravasation may occur with or without an accompanying stinging or burning sensation and even if blood returns well on aspiration of the infusion needle.

If any signs or symptoms of extravasation have occurred, the injection or infusion should be immediately terminated and restarted in another vein.

Because of the progressive nature of extravasation reactions, the area of injection should be frequently examined and plastic surgery consultation obtained.

Early wide exclusion of the involved area should be considered.

Initiating treatment with doxorubicin requires close observation of the patient and extensive laboratory monitoring.

It is recommended, therefore, that patients be hospitalised at least during the first phase of treatment.

Like other cytotoxic drugs, doxorubicin may induce hyperuricemia secondary to rapid lysis of neoplastic cells.

The clinician should monitor the patient’s blood uric acid level and be prepared to use supportive and pharmacologic measures as might be necessary to control this problem.

Doxorubicin imparts coloration to the urine 1-2 days after administration and patients should be advised to expect this during active therapy.

Use During Pregnancy And Lactation

Doxorubicin can cause fetal harm when administered to a pregnant woman.

Doxorubicin was teratogenic and embryotoxic at doses of 0.8 mg/kg/day and greater (about 1/13 the recommended human dose on a body surface basis) when administered during the period of organogenesis in rats.

Teratogenicity and embryotoxicity were also seen using discrete periods of treatment.

The most susceptible was 6 to 9 days gestation period at doses of 1.25 mg/kg/day and greater.

Characteristic malformations included:

• Esophageal atresia
• Intestinal atresia
• Tracheo-oesophageal features
• Hypoplasia of the urinary bladder
• Cardiovascular anomalies

Doxorubicin was embryotoxic (increase in embryofetal deaths) and abortifacient at 0.4 mg/kg/day (about 1/14 the recommended human dose on a body surface basis).
`,

  specialPrecautions: `
Tell your doctor right away if you have:

• Chest pain
• Decreased urine output
• Irregular heartbeat
• Trouble breathing
• Rapid weight gain
• Swelling of your hands, ankles, or feet

This medicine may increase risk of new cancers, such as:

• Acute myelogenous leukemia (AML)
• Myelodysplastic syndrome (MDS)
`,
},
{
  id: 14,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zubilin",
  name: "Zubilin",
  subtitle: "Eribulin Mesylate Injection",
  type: "Injection",

  image: "/products/zubilin/zubilin088-1.jpeg",

  images: [
    "/products/zubilin/zubilin088-1.jpeg",
    "/products/zubilin/zubilin088-2.jpeg",
    "/products/zubilin/zubilin088-3.jpeg",
    "/products/zubilin/zubilin2-1.jpeg",
    "/products/zubilin/zubilin2-2.jpeg",
    "/products/zubilin/zubilin2-3.jpeg",
  ],

  strength: "0.88/2 mg",
  packSize: "Vial",
  drugClass: "Microtubule Dynamics Inhibitors Chemotherapeutic Agent",

  dosage: `
• Administer 1.4 mg/m² intravenously over 2 to 5 minutes on Days 1 and 8 of a 21-day cycle.

• Reduce dose in patients with hepatic impairment or with moderate or severe renal impairment.

• Do not mix with other drugs or administer with dextrose-containing solutions.
`,

  coldStorage: "No",

  description: `
Eribulin is a microtubule inhibitor indicated for the treatment of patients with metastatic breast cancer who have previously received at least two chemotherapeutic regimens for the treatment of metastatic disease.

Eribulin was isolated from the marine sponge Halichondria okadai.

Eribulin is also being investigated for use in the treatment of advanced solid tumors.
`,

  indication: `
Zubilin injection is a microtubule inhibitor indicated for the treatment of patients with:

• Metastatic breast cancer who have previously received at least two chemotherapeutic regimens for treatment of metastatic disease.

• Prior therapy should have included an anthracycline and a taxane in either the adjuvant or metastatic setting.

• Unresectable or metastatic liposarcoma who have received a prior anthracycline-containing regimen.
`,

  clinicalEfficacy: `
This postmarketing surveillance study utilized real-world clinical data to analyze neutropenic profiles in patients with recurrent or metastatic breast cancer treated with eribulin.

Data from 401 patients, including 5199 neutrophil count measurements, were analyzed using a mechanistic pharmacodynamic model to understand changes in neutrophil counts and investigate factors affecting neutropenia severity.

The analysis revealed that low serum albumin levels and low baseline neutrophil counts were linked to severe neutropenia.

Virtual simulations predicted the probability of Grade ≥3 neutropenia to be:
• 69% for standard treatment
• 27% for biweekly regimen
• 27% for triweekly regimen

The mean transit time was estimated at 104.5 hours, the neutrophil proliferation rate constant at 0.0377 h−1, the neutrophil elimination rate constant at 0.0295 h−1, and the linear coefficient of drug effect at 0.0413 mL/ng.

This study offers valuable insights into the safe use and potential risk factors of eribulin in real-world clinical settings.
`,

  safetyInformation: `
Pregnancy:
Eribulin mesylate is classified as a pregnancy category D drug and may cause fetal harm when administered during pregnancy.

Women of reproductive potential should use effective contraception during treatment.

The use of eribulin mesylate should be avoided during pregnancy, particularly during the first trimester.

Breastfeeding:
It is not recommended to breastfeed during treatment with eribulin mesylate due to the potential for serious adverse reactions in nursing infants.

Fertility:
Eribulin mesylate may impair fertility in both men and women.

Women should use effective contraception during treatment and for at least 2 weeks after the last dose.

Men should consider sperm preservation prior to treatment.

Teratogenicity:
Similar to other cytotoxic agents, eribulin mesylate is potentially teratogenic.

Pregnancy testing and effective contraception are recommended during treatment to minimize fetal exposure risk.
`,

  specialPrecautions: `
• Tell your doctor and pharmacist if you are allergic to eribulin, any other medications, or any ingredients in eribulin injection.

• Tell your doctor and pharmacist what prescription and nonprescription medications, vitamins, nutritional supplements, and herbal products you are taking or plan to take.

• Medicines including amiodarone, clarithromycin, disopyramide, dofetilide, dronedarone, erythromycin, ibutilide, chlorpromazine, haloperidol, methadone, moxifloxacin, pimozide, procainamide, quinidine, and sotalol may interact with eribulin.

• Your doctor may need to change doses or monitor side effects carefully.

• Tell your doctor if you have or have ever had long QT syndrome, slow heartbeat, low potassium or magnesium levels, heart disease, liver disease, or kidney disease.

• Tell your doctor if you are pregnant, planning pregnancy, or breastfeeding.

• Use birth control during treatment with eribulin injection.

• If you are having surgery, including dental surgery, tell the doctor or dentist that you are receiving eribulin injection.
`,
},
{
  id: 15,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "yakira",
  name: "Yakira",
  subtitle: "Fludarabine Phosphate Injection",
  type: "Injection",

  image: "/products/yakira/yakira50-1.jpeg",

  images: [
    "/products/yakira/yakira50-1.jpeg",
    "/products/yakira/yakira50-2.jpeg",
    "/products/yakira/yakira50-3.jpeg",
  ],

  strength: "50 mg",
  packSize: "Vial",
  drugClass: "Purine Analogs Antineoplastic Agent",

  dosage: `
• Administer 1.4 mg/m² intravenously over 2 to 5 minutes on Days 1 and 8 of a 21-day cycle.

• Reduce dose in patients with hepatic impairment or with moderate or severe renal impairment.

• Do not mix with other drugs or administer with dextrose-containing solutions.
`,

  coldStorage: "No",

  description: `
Fludarabine is a chemotherapy drug used in the treatment of chronic lymphocytic leukemia.

It acts at DNA polymerase alpha, ribonucleotide reductase and DNA primase, resulting in the inhibition of DNA synthesis and destruction of cancer cells.
`,

  indication: `
Fludarabine Phosphate Injection is a nucleotide metabolic inhibitor indicated for:

• Treatment of adult patients with B-cell chronic lymphocytic leukemia (CLL) who have not responded to or whose disease has progressed during treatment with at least one standard alkylating-agent containing regimen.

• Benefit in treatment-naïve or non-refractory CLL patients is not established.
`,

  clinicalEfficacy: `
This prospective, multicenter, open-label phase II clinical trial evaluated the safety, efficacy, and quality of life of oral fludarabine phosphate in patients with previously untreated B-cell chronic lymphocytic leukemia, comparing it to historical data from the intravenous formulation.

Eighty-one patients received 40 mg/m²/d of oral fludarabine phosphate for 5 days every 4 weeks for six to eight cycles.

The overall response rate was:
• 71.6% by International Workshop criteria
  - Complete remission: 37.0%
  - Partial remission: 34.6%

• 80.2% by National Cancer Institute criteria
  - Complete remission: 12.3%
  - Partial remission: 67.9%

Median time to progression was 841 days.

Grade 3/4 myelosuppression was the most frequent toxicity:
• Granulocytopenia: 32.1%
• Anemia: 9.9%
• Thrombocytopenia: 4.9%

Gastrointestinal toxicity was more common with the oral formulation but was generally mild to moderate.

Statistically significant improvements in emotional and insomnia quality-of-life scores were observed.

The study concluded that oral fludarabine phosphate is clinically effective, well tolerated, and has a similar efficacy and safety profile to the IV formulation with potential quality-of-life benefits.
`,

  safetyInformation: `
Pregnancy:
Fludarabine phosphate is classified as a pregnancy category D drug and can cause fetal harm when administered during pregnancy.

Women of childbearing potential should avoid becoming pregnant during treatment.

Breastfeeding:
Breastfeeding should be discontinued during treatment due to the potential for serious adverse reactions in nursing infants.

Fertility:
Fludarabine phosphate may cause infertility in both men and women.

Women should use effective contraception during treatment and for at least 6 months after the last dose.

Men should consider sperm preservation prior to treatment.

Teratogenicity:
Fludarabine phosphate is potentially teratogenic and can cause fetal harm if used during pregnancy.

Effective contraception should be used during treatment and for a recommended period after therapy.
`,

  specialPrecautions: `
• Tell your doctor and pharmacist if you are allergic to fludarabine, any other medications, or ingredients in fludarabine injection.

• Inform your doctor about prescription medicines, nonprescription medicines, vitamins, nutritional supplements, and herbal products you are taking.

• Cytarabine may interact with fludarabine.

• Tell your doctor if you have or have ever had kidney disease.

• Inform your doctor about previous chemotherapy or radiation therapy treatments.

• Fludarabine injection may interfere with menstrual cycles in women and may stop sperm production in men.

• Do not plan pregnancy while receiving treatment or for at least 6 months after therapy.

• Use reliable birth control during treatment.

• Fludarabine injection may harm the fetus.

• Tell your doctor before surgery or dental procedures that you are receiving fludarabine injection.

• Fludarabine injection may cause tiredness, weakness, confusion, agitation, seizures, and vision changes.

• Avoid driving or operating machinery until you know how the medication affects you.

• Consult your doctor before receiving vaccinations during treatment.

• Serious reactions may occur during blood transfusion while receiving or after receiving fludarabine treatment.
`,
},

{
  id: 16,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "idaz",
  name: "Idaz",
  subtitle: "Idarubicin Hydrochloride Injection",
  type: "Injection",

  image: "/products/idaz/idaz5-1.jpeg",

  images: [
    "/products/idaz/idaz5-1.jpeg",
    "/products/idaz/idaz5-2.jpeg",
    "/products/idaz/idaz5-3.jpeg",
    "/products/idaz/idaz10-1.jpeg",
    "/products/idaz/idaz10-2.jpeg",
    "/products/idaz/idaz10-3.jpeg",
  ],

  strength: "5/10 mg",
  packSize: "Vial",
  drugClass: "Anthracycline Antineoplastic Agent",

  dosage: `
• IDAMYCIN PFS Injection 12 mg/m² daily for 3 days by slow (10 to 15 min) intravenous injection in combination with cytarabine.

• Cytarabine may be given as:
  - 100 mg/m² daily by continuous infusion for 7 days
  OR
  - Cytarabine 25 mg/m² intravenous bolus followed by cytarabine 200 mg/m² daily for 5 days continuous infusion.

• In patients with unequivocal evidence of leukemia after the first induction course, a second course may be administered.

• Administration of the second course should be delayed in patients who experience severe mucositis until recovery has occurred.

• A dose reduction of 25% is recommended in such patients.

• In patients with hepatic and/or renal impairment, dose reduction should be considered.

• IDAMYCIN PFS should not be administered if bilirubin level exceeds 5 mg%.
`,

  coldStorage: "No",

  description: `
An orally administered anthracycline antineoplastic.

The compound has shown activity against breast cancer, lymphomas, and leukemias together with the potential for reduced cardiac toxicity.
`,

  indication: `
Idarubicin Hydrochloride Injection in combination with other approved antileukemic drugs is indicated for treatment of acute myeloid leukemia (AML) in adults.

This includes French-American-British (FAB) classifications M1 through M7.
`,

  clinicalEfficacy: `
Four prospective randomized studies compared the efficacy and safety of idarubicin (IDR) versus daunorubicin (DNR) combined with cytarabine as induction therapy in previously untreated adult AML patients.

Results showed significantly higher complete remission rates for IDR in two of the three U.S. studies and longer overall survival in two U.S. studies.

MSKCC Study:
• 78% remission for IDR vs. 58% for DNR
• Median survival: 508 vs. 435 days (p < 0.05)

SEG Study:
• 69% vs. 55% remission
• Survival: 328 vs. 277 days

U.S. Multicenter Study:
• 67% vs. 58% remission
• Survival: 393 vs. 281 days (p < 0.05)

Italian GIMEMA Study:
• Similar remission rates:
  - 40% IDR
  - 39% DNR
• Lower survival for IDR:
  - 87 vs. 169 days

IDR showed higher mucositis and longer aplasia duration during consolidation with higher transfusion needs in two studies.

The studies suggest IDR's potential advantage in remission and survival but note increased toxicity and no proven benefit from intensive maintenance therapy.
`,

  safetyInformation: `
Pregnancy:
Idarubicin HCl can cause fetal harm when administered during pregnancy.

Women of childbearing potential should avoid becoming pregnant during treatment.

Breastfeeding:
Idarubicin HCl is excreted in human milk.

Breastfeeding should be discontinued during treatment due to potential serious adverse reactions in nursing infants.

Fertility:
Idarubicin HCl may cause suppression of ovarian function in women leading to amenorrhea.

In men, treatment may cause azoospermia.

Teratogenicity:
Idarubicin HCl is potentially teratogenic and can cause fetal harm if used during pregnancy.

Effective contraception is recommended during treatment.
`,

  specialPrecautions: `
• Tell your doctor and pharmacist if you are allergic to idarubicin, any other medications, or ingredients in idarubicin injection.

• Inform your doctor about all prescription medicines, nonprescription medicines, vitamins, nutritional supplements, and herbal products you are taking.

• Your doctor may need to adjust medicine doses or monitor side effects carefully.

• Tell your doctor if you have previously received radiation therapy.

• Inform your doctor if you have:
  - heart disease
  - infection
  - blood-clotting problems
  - anemia

• Tell your doctor if you are pregnant, planning pregnancy, or breastfeeding.

• You should not become pregnant or breastfeed while receiving idarubicin injection.

• If pregnancy occurs during treatment, contact your doctor immediately as idarubicin may harm the fetus.
`,
},
// {
//   id: 17,
//   category: "oncoace",
//   categoryName: "OncoAce",
//   slug: "zoplide",
//   name: "Zoplide",
//   subtitle: "Leuprolide Acetate",
//   type: "Injection",

//   image: "/products/zoplide/zoplide375-1.jpeg",

//   images: [
//     "/products/zoplide/zoplide375-1.jpeg",
//     "/products/zoplide/zoplide375-2.jpeg",
//     "/products/zoplide/zoplide375-3.jpeg",
//     "/products/zoplide/zoplide1125-1.jpeg",
//     "/products/zoplide/zoplide1125-2.jpeg",
//     "/products/zoplide/zoplide1125-3.jpeg",
//     "/products/zoplide/zoplide2250-1.jpeg",
//     "/products/zoplide/zoplide2250-2.jpeg",
//     "/products/zoplide/zoplide2250-3.jpeg",
//   ],

//   strength: "3.75/11.25/22.50 mg",
//   packSize: "Vial",
//   drugClass: "Gonadotropin-releasing hormone (GnRH) agonists",

//   dosage: `
// • The recommended dose is 1 mg (0.2 mL or 20 unit mark) administered as a single daily subcutaneous injection.

// • As with other drugs administered chronically by subcutaneous injection, the injection site should be varied periodically.

// • Each 0.2 mL contains:
//   - 1 mg leuprolide acetate
//   - sodium chloride for tonicity adjustment
//   - 1.8 mg benzyl alcohol as preservative
//   - water for injection

// • The pH may have been adjusted with sodium hydroxide and/or acetic acid.
// `,

//   coldStorage: "No",

//   description: `
// Leuprolide acetate is a synthetic nonapeptide analog of naturally occurring gonadotropin releasing hormone (GnRH or LH-RH).

// The analog possesses greater potency than the natural hormone.

// The chemical name is:
// 5-oxo-L-prolyl-L-histidyl-L-tryptophyl-L-seryl-L-tyrosyl-D-leucyl-L-leucyl-L-arginyl-N-ethyl-L-prolinamide acetate (salt).
// `,

//   indication: `
// Leuprolide acetate is indicated in the palliative treatment of advanced prostatic cancer.
// `,

//   clinicalEfficacy: `
// In a clinical study comparing leuprolide acetate injection with DES in patients with metastatic prostate cancer, adverse reactions were assessed.

// Common adverse events included:
// • Hot flashes:
//   - 55% with injection
//   - 12% with DES

// • Gynecomastia:
//   - 63% vs. 7%

// • Decreased libido:
//   - 11% vs. 7%

// Bone pain occurred in:
// • 5% of injection patients
// • 2% with DES

// Other reported adverse reactions included:
// • Cardiovascular issues like ECG changes/ischemia
// • Gastrointestinal symptoms such as nausea/vomiting
// • Urinary tract issues like hematuria

// Overall, injection was associated with a higher incidence of hot flashes and gynecomastia but showed comparable rates of bone pain and other systemic effects compared to DES in this trial.
// `,

//   safetyInformation: `
// Pregnancy:
// Leuprolide acetate can cause fetal harm when administered to pregnant women and should not be used during pregnancy.

// Breastfeeding:
// It is not known whether leuprolide acetate is excreted in human milk.

// Breastfeeding should be discontinued during treatment due to the potential for serious adverse reactions in nursing infants.

// Fertility:
// Leuprolide acetate may cause reversible suppression of reproductive function.

// In females:
// • Amenorrhea and suppression of ovarian function have been reported.
// • Regular menstrual cycles may not resume immediately after discontinuation.

// In males:
// • Suppression of spermatogenesis leading to azoospermia or oligospermia has been observed.

// Teratogenicity:
// Leuprolide acetate has the potential to cause fetal harm and is contraindicated during pregnancy.

// Women of childbearing potential should use effective contraception during treatment.
// `,

//   specialPrecautions: `
// • Tell your doctor and pharmacist if you are allergic to leuprolide, goserelin, histrelin, nafarelin, triptorelin, any other medications, or ingredients in leuprolide injection.

// • Inform your doctor about prescription medicines, nonprescription medicines, vitamins, nutritional supplements, and herbal products you are taking.

// • Tell your doctor if you or anyone in your family has osteoporosis.

// • Inform your doctor if you have a history of:
//   - alcohol use
//   - tobacco use
//   - depression
//   - seizures
//   - brain tumors
//   - spinal cancer spread
//   - diabetes
//   - urinary obstruction
//   - blood in urine
//   - prolonged QT interval
//   - cerebrovascular disease
//   - heart disease
//   - stroke
//   - hyperlipidemia
//   - low potassium, calcium, or magnesium

// • Leuprolide should not be used in women who are pregnant, may become pregnant, or are breastfeeding.

// • A pregnancy test may be required before starting treatment.

// • Use reliable nonhormonal birth control during treatment.

// • Leuprolide injection may impair fertility in men.

// • Some patients may experience:
//   - worsening mood
//   - anxiety
//   - emotional difficulty
//   - psychiatric illness

// • Report any new or worsening symptoms immediately.
// `,
// },

{
  id: 18,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "mitozan",
  name: "Mitozan",
  subtitle: "Mitoxantrone",
  type: "Injection",

  image: "/products/mitozan/mitozan20-1.jpeg",

  images: [
    "/products/mitozan/mitozan20-1.jpeg",
    "/products/mitozan/mitozan20-2.jpeg",
    "/products/mitozan/mitozan20-3.jpeg",
  ],

  strength: "20 mg",
  packSize: "Vial",
  drugClass: "Type II topoisomerase inhibitor",

  dosage: `
• The recommended dosage is 12 mg/m² given as a short intravenous infusion lasting approximately 5 to 15 minutes every 3 months.

• Prior to administration of the initial dose and all subsequent doses, left ventricular ejection fraction (LVEF) should be evaluated using echocardiogram or MUGA scans.

• LVEF assessments are advised if congestive heart failure signs or symptoms appear during treatment.

• Mitoxantrone should not be administered to multiple sclerosis patients with:
  - LVEF <50%
  - clinically significant reduction in LVEF
  - cumulative lifetime dose exceeding 140 mg/m²

• Regular complete blood counts including platelets should be monitored before each course.

• Mitoxantrone is generally not recommended for patients with neutrophil counts below 1500 cells/mm³.

• Liver function tests should be assessed prior to each course.

• Women of childbearing potential should undergo pregnancy testing before each dose regardless of contraceptive use.
`,

  coldStorage: "No",

  description: `
Mitoxantrone injection is used alone or together with other medicines to treat advanced prostate cancer and acute nonlymphocytic leukemia (ANLL).

It belongs to the group of medicines known as antineoplastics or cancer medicines.

Mitoxantrone is also used to treat some forms of multiple sclerosis (MS).

This medicine will not cure MS, but it may extend the time between relapses.
`,

  indication: `
Mitoxantrone Injection is used to reduce neurologic disability and/or frequency of clinical relapses in:
• Secondary progressive multiple sclerosis
• Progressive relapsing multiple sclerosis
• Worsening relapsing-remitting multiple sclerosis

It is also indicated:
• In combination with corticosteroids for advanced hormone-refractory prostate cancer-related pain
• In combination with other approved drugs for initial therapy of acute nonlymphocytic leukemia (ANLL) in adults.
`,

  clinicalEfficacy: `
Mitoxantrone's efficacy and safety were assessed in 23 Indian patients with multiple sclerosis (MS) and neuromyelitis optica (NMO) in an open-label study.

Significant reductions in annual relapse rates were noted:
• After one year:
  - from 0.879 to 0.091
  - P=0.003

• After two years:
  - from 1.024 to 0.155
  - P=0.0054

EDSS scores improved significantly after two years:
• from 5.3 to 2.4
• P=0.001

Adverse events included:
• manageable leucopenia in four patients
• reversible cardiac ejection fraction decrease in one patient

Therapy was discontinued in three cases.

Mitoxantrone showed promise as an initial therapy in reducing clinical exacerbations and disability progression for MS and NMO patients with an acceptable safety profile.
`,

  safetyInformation: `
Pregnancy:
Mitoxantrone has the potential to cause fetal harm when administered during pregnancy.

Use should be avoided during pregnancy, particularly during the first trimester.

Breastfeeding:
Breastfeeding should be discontinued during and after treatment due to potential serious adverse reactions in nursing infants.

Fertility:
Mitoxantrone may impair fertility in both men and women.

Women should use effective contraception during and for at least six months after treatment.

Men should consider sperm preservation prior to treatment.

Teratogenicity:
Mitoxantrone is known to be teratogenic and can cause fetal harm if used during pregnancy.

Pregnancy testing and effective contraception are recommended during treatment.
`,

  specialPrecautions: `
• Tell your doctor and pharmacist if you are allergic to mitoxantrone injection, sulfites, or any other ingredients.

• Inform your doctor about prescription medicines, nonprescription medicines, vitamins, nutritional supplements, and herbal products you are taking.

• Your doctor may need to adjust medicine doses or monitor side effects carefully.

• Tell your doctor if you have or have ever had:
  - blood-clotting problems
  - anemia
  - liver disease

• Tell your doctor if you are pregnant or planning pregnancy.

• Do not become pregnant while using mitoxantrone injection.

• Use effective birth control during treatment.

• If pregnancy occurs during treatment, contact your doctor immediately.

• Do not breastfeed while using mitoxantrone injection.

• Inform your doctor before surgery or dental procedures.

• Mitoxantrone injection is dark blue in color and may:
  - temporarily turn the whites of eyes slightly blue
  - change urine color to blue-green for about 24 hours after dosing.
`,
},
{
  id: 19,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zopecan",
  name: "Zopecan",
  subtitle: "Topotecan Hydrochloride Injection",
  type: "Injection",

  image: "/products/zopecan/zopecan4-1.jpeg",

  images: [
    "/products/zopecan/zopecan4-1.jpeg",
    "/products/zopecan/zopecan4-2.jpeg",
    "/products/zopecan/zopecan4-3.jpeg",
  ],

  strength: "4 mg",
  packSize: "Vial",
  drugClass: "Antineoplastic agents: plant alkaloids and other natural products",

  dosage: `
• Recommended dosage for Small Cell Lung Cancer:
  - 1.5 mg/m² by intravenous infusion over 30 minutes daily
  - for 5 consecutive days
  - starting on Day 1 of a 21-day cycle

• Dosage adjustments for adverse reactions:
  - Reduce dose to 1.25 mg/m²/day for neutrophil counts less than 500/mm³
  - or administer granulocyte-colony stimulating factor (G-CSF) starting no sooner than 24 hours after the last dose
  - Reduce dose if platelet counts are less than 25,000/mm³ during previous cycle

• Dosage for renal impairment:
  - Reduce dose to 0.75 mg/m²/day for creatinine clearance of 20 to 39 mL/min

• Preparation and administration:
  - Withdraw appropriate volume from vial and discard unused portion
  - Dilute in minimum 50 mL of 0.9% Sodium Chloride Injection or 5% Dextrose Injection
  - Infuse diluted injection over 30 minutes

• Store diluted injection at 20°C to 25°C for no more than 24 hours.
`,

  coldStorage: "No",

  description: `
Topotecan is a semi-synthetic derivative of camptothecin and a topoisomerase inhibitor.

The chemical name for topotecan hydrochloride is:
(S)-10-[(dimethylamino)methyl]-4-ethyl-4,9-dihydroxy-1H-pyrano[3',4':6,7]indolizino[1,2-b]quinoline-3,14-(4H,12H)-dione 1.25 hydrochloride.

It has the molecular formula:
C23H23N3O5∙xHCl (x=1.25)

Molecular weight:
467.02

It is soluble in water and melts with decomposition at 213°C to 218°C.

Topotecan Injection for intravenous use is supplied as a sterile, non-pyrogenic, clear yellow to yellow-green solution in single-dose vials.
`,

  indication: `
Topotecan Injection is indicated for treatment of patients with small cell lung cancer (SCLC) with platinum-sensitive disease who progressed at least 60 days after initiation of first-line chemotherapy.
`,

  clinicalEfficacy: `
Topotecan injection is used to treat patients with metastatic ovarian cancer after other treatments have failed.

It is also used to treat a certain type of lung cancer called small cell lung cancer.

Clinical studies have demonstrated effectiveness in platinum-sensitive small cell lung cancer patients and in metastatic ovarian cancer management.
`,

  safetyInformation: `
• Verify dosage using body surface area.

• Do not exceed a single dose of 4 mg intravenously.

• Topotecan can cause severe myelosuppression.

• Administer first cycle only to patients with:
  - neutrophil counts ≥ 1,500/mm³
  - platelet counts ≥ 100,000/mm³

• Monitor blood cell counts regularly during therapy.
`,

  specialPrecautions: `
• Topotecan can cause severe myelosuppression.

• Topotecan can cause fatal typhlitis (neutropenic enterocolitis).

• Consider possibility of typhlitis in patients presenting with:
  - fever
  - neutropenia
  - abdominal pain

• Follow proper handling and disposal procedures while preparing cytotoxic drugs.

• Visually inspect solution for particulate matter or discoloration before administration.

• Discard if discoloration or particulate matter is observed.
`,
},

{
  id: 20,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "azath",
  name: "Azath",
  subtitle: "Azathioprine Tablet 50/100 mg",
  type: "Tablet",

  image: "/products/azath50-1.png",

  images: [
    "/products/azath50-1.png",
    "/products/azath50-2.png",
    "/products/azath50-3.png",
  ],

  strength: "50/100 mg",
  packSize: "Tablet",
  drugClass: "Antineoplastic and Immunosuppressive agents",

  dosage: `
Renal Homotransplantation:
• Initial dose:
  - 3 to 5 mg/kg daily
  - beginning at time of transplant

• Azathioprine is usually given as a single daily dose.

• Dose reduction to maintenance levels of 1 to 3 mg/kg daily is usually possible.

Rheumatoid Arthritis:
• Initial dose:
  - approximately 1.0 mg/kg (50 to 100 mg)

• May be given:
  - as single dose
  - or twice daily schedule

• Dose may be increased beginning at 6 to 8 weeks if response is unsatisfactory.

• Maximum dose:
  - 2.5 mg/kg per day

Use in Renal Dysfunction:
• Patients with renal dysfunction may require lower doses due to delayed clearance.
`,

  coldStorage: "No",

  description: `
Azathioprine is an immunosuppressive antimetabolite available in tablet form for oral administration.

Each scored tablet contains:
• 25 mg
• 50 mg
• 75 mg
• 100 mg azathioprine

Inactive ingredients include:
• croscarmellose sodium
• lactose monohydrate
• magnesium stearate
• maize starch
• povidone K30

Azathioprine is chemically:
6-[(1-methyl-4-nitro-1H-imidazol-5-yl)thio]-1H-purine.

It is an imidazolyl derivative of 6-mercaptopurine and many of its biological effects are similar to those of the parent compound.
`,

  indication: `
Azathioprine is indicated:
• As an adjunct for prevention of rejection in renal homotransplantation
• For management of active rheumatoid arthritis to reduce signs and symptoms

Renal Homotransplantation:
• Used as adjunct therapy for prevention of rejection in kidney transplantation.

Rheumatoid Arthritis:
• Used for treatment of active rheumatoid arthritis (RA).

• Aspirin, NSAIDs, and low-dose glucocorticoids may be continued during therapy.
`,

  clinicalEfficacy: `
Azathioprine is used to prevent rejection of transplanted kidneys.

It belongs to the group of medicines known as immunosuppressive agents.

Azathioprine lowers the body's natural immunity in transplant patients to prevent rejection of the new kidney.

It is also used to relieve joint pain and swelling in patients with active rheumatoid arthritis.
`,

  safetyInformation: `
• Chronic immunosuppression with azathioprine increases risk of malignancy in humans.

• Reports of malignancy include:
  - post-transplant lymphoma
  - hepatosplenic T-cell lymphoma (HSTCL)

• Physicians should be familiar with:
  - malignancy risk
  - mutagenic potential
  - hematologic toxicities

• Patients should be informed about the malignancy risks associated with azathioprine therapy.
`,

  specialPrecautions: `
• Gastrointestinal hypersensitivity reactions characterized by severe nausea and vomiting have been reported.

• Symptoms may also include:
  - diarrhea
  - rash
  - fever
  - malaise
  - myalgias
  - elevated liver enzymes
  - hypotension

• Gastrointestinal toxicity most often develops within the first several weeks of therapy.

• Symptoms are generally reversible upon discontinuation.

• Reactions may recur rapidly after re-challenge with azathioprine.

• Careful monitoring is recommended during treatment.
`,
},
{
  id: 21,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zuberi",
  name: "Zuberi",
  subtitle: "Chlorambucil Tablets 2/5 mg",
  type: "Tablet",

  image: "/products/zuberi/zuberi2-1.jpeg",

  images: [
    "/products/zuberi/zuberi2-1.jpeg",
    "/products/zuberi/zuberi2-2.jpeg",
    "/products/zuberi/zuberi2-3.jpeg",
    "/products/zuberi/zuberi5-1.jpeg",
    "/products/zuberi/zuberi5-2.jpeg",
    "/products/zuberi/zuberi5-3.jpeg",
  ],

  strength: "2 mg / 5 mg",
  packSize: "1 x 30 Tabs",
  drugClass: "Alkylating agents",

  dosage: `
The usual oral dosage is 0.1 to 0.2 mg/kg body weight daily for 3 to 6 weeks as required.

This usually amounts to 4 to 10 mg per day for the average patient.

The entire daily dose may be given at one time.

These dosages are for initiation of therapy or for short courses of treatment.

The dosage must be carefully adjusted according to the response of the patient and must be reduced as soon as there is an abrupt fall in the white blood cell count.

Patients with Hodgkin’s disease usually require 0.2 mg/kg daily, whereas patients with other lymphomas or chronic lymphocytic leukemia usually require only 0.1 mg/kg daily.

When lymphocytic infiltration of the bone marrow is present, or when the bone marrow is hypoplastic, the daily dose should not exceed 0.1 mg/kg.

Alternate schedules for treatment of chronic lymphocytic leukemia employing intermittent, biweekly, or once-monthly pulse doses of chlorambucil have also been reported.

Intermittent schedules begin with an initial single dose of 0.4 mg/kg.

Subsequent doses are modified to produce mild hematologic toxicity.
`,

  coldStorage: "No",

  description: `
Chlorambucil is a bifunctional alkylating agent of the nitrogen mustard type.

It has been found active against selected human neoplastic diseases.

Chlorambucil is chemically known as:
4-[bis(2-chlorethyl)amino] benzenebutanoic acid.

Chlorambucil hydrolyzes in water and has a pKa of 5.8.
`,

  indication: `
Chlorambucil is indicated in treatment of:

• Chronic lymphatic (lymphocytic) leukemia
• Malignant lymphomas including lymphosarcoma
• Giant follicular lymphoma
• Hodgkin’s disease

It is not curative in these disorders but may produce clinically useful palliation.
`,

  clinicalEfficacy: `
Chlorambucil was administered orally in doses ranging from 5 to 30 mg daily for five to seven weeks.

Thirty patients were treated for lymphocytic leukemias and various lymphomas.

In chronic lymphocytic leukemia:
• Some patients obtained normalization of hemoglobin level and white blood cell count
• Differential count improved significantly
• Hepatosplenomegaly and lymph node enlargement disappeared in several patients

Results in lymphocytic lymphosarcoma and Hodgkin's disease were less encouraging.

In studied dosages, chlorambucil was practically without side-effects.
`,

  safetyInformation: `
Pregnancy:
• Adequate contraceptive precautions should be advised when either partner is receiving chlorambucil.
• Use should be avoided during pregnancy, especially during the first trimester.

Breast-feeding:
• Mothers receiving chlorambucil should not breastfeed.

Fertility:
• Chlorambucil may cause suppression of ovarian function and amenorrhoea.
• Azoospermia has also been observed following therapy.

Teratogenicity:
• Chlorambucil is potentially teratogenic.
`,

  specialPrecautions: `
• Chlorambucil can make patients more likely to get infections or worsen current infections.

• Avoid contact with people who have contagious infections.

• Patients should not breastfeed while using this medicine.

• Blood counts should be monitored regularly during treatment.

• Dose adjustments should be made carefully depending on hematologic response.
`,
},

{
  id: 22,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "osirus",
  name: "Osirus",
  subtitle: "Everolimus Tablets 5/10 mg",
  type: "Tablet",

  image: "/products/osirus/osirus5-1.jpeg",

  images: [
    "/products/osirus/osirus5-1.jpeg",
    "/products/osirus/osirus5-2.jpeg",
    "/products/osirus/osirus5-3.jpeg",
    "/products/osirus/osirus10-1.jpeg",
    "/products/osirus/osirus10-2.jpeg",
    "/products/osirus/osirus10-3.jpeg",
  ],

  strength: "5/10 mg",
  packSize: "1 x 10 Tabs",
  drugClass: "Kinase inhibitors",

  dosage: `
The recommended dose is 10 mg everolimus once daily.

Treatment should continue as long as clinical benefit is observed or until unacceptable toxicity occurs.

Hepatic impairment:

• Mild hepatic impairment:
  - Recommended dose is 7.5 mg daily

• Moderate hepatic impairment:
  - Recommended dose is 5 mg daily

• Severe hepatic impairment:
  - Everolimus is recommended only if benefit outweighs risk
  - Dose should not exceed 2.5 mg daily
`,

  coldStorage: "No",

  description: `
Everolimus is a macrolide immunosuppressant.

Chemical name:
(1R, 9S, 12S, 15R, 16E, 18R, 19R, 21R, 23S, 24E, 26E, 28E, 30S, 32S, 35R)-1,18-dihydroxy-12-{(1R)-2-[(1S,3R,4R)-4-(2-hydroxyethoxy)-3-methoxycyclohexyl]-1-methylethyl}-19,30-dimethoxy-15,17,21,23,29,35-hexamethyl-11,36-dioxa-4-aza-tricyclo[30.3.1.0 4,9] hexatriaconta-16,24,26,28-tetraene-2,3,10,14,20-pentaone.

Molecular formula:
C53H83NO14

Molecular weight:
958.25 g/mol

Everolimus tablets are supplied for oral administration.
`,

  indication: `
1. Prophylaxis of Organ Rejection in Kidney Transplantation:
Everolimus is indicated for prophylaxis of organ rejection in adult kidney transplant patients at low-moderate immunologic risk.

2. Prophylaxis of Organ Rejection in Liver Transplantation:
Everolimus is indicated for prophylaxis of allograft rejection in adult liver transplant patients.

3. Limitations of Use:
Safety and efficacy have not been established in:
• Kidney transplant patients at high immunologic risk
• Recipients of organs other than kidney and liver
• Pediatric patients below 18 years
`,

  clinicalEfficacy: `
Treatment with everolimus prolongs progression-free survival relative to placebo in patients with metastatic renal cell carcinoma that progressed on other targeted therapies.

Oral everolimus is absorbed rapidly and reaches peak concentration after 1.3 to 1.8 hours.

Steady state is reached within 7 days.

Steady-state peak and trough concentrations and area under curve (AUC) are proportional to dosage.
`,

  safetyInformation: `
Malignancies and Serious Infections:
• Increased susceptibility to infection and development of malignancies such as lymphoma and skin cancer may result from immunosuppression.

Kidney Graft Thrombosis:
• Increased risk of kidney arterial and venous thrombosis may occur, especially within first 30 days after transplantation.

Nephrotoxicity:
• Increased nephrotoxicity can occur with standard doses of cyclosporine in combination with everolimus.
• Reduced cyclosporine doses are recommended.

Mortality in Heart Transplantation:
• Increased mortality associated with serious infections has been observed in heart transplant patients.
• Use in heart transplantation is not recommended.
`,

  specialPrecautions: `
• Patients should be aware of increased risk of infection with everolimus.

• Hypersensitivity reactions may occur including:
  - anaphylaxis
  - dyspnoea
  - flushing
  - chest pain
  - angioedema

• Patients who develop radiological changes suggestive of non-infectious pneumonitis and have few or no symptoms may continue therapy without dose adjustment.

• Therapeutic drug monitoring is recommended during therapy.
`,
},
{
  id: 23,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "lapiz",
  name: "Lapiz",
  subtitle: "Lapatinib Tablets 250 mg",
  type: "Tablet",

  image: "/products/lapiz/lapiz250-1.jpeg",

  images: [
    "/products/lapiz/lapiz250-1.jpeg",
    "/products/lapiz/lapiz250-2.jpeg",
    "/products/lapiz/lapiz250-3.jpeg",
  ],

  strength: "250 mg",
  packSize: "1 x 10 Tabs",
  drugClass: "Tyrosine kinase inhibitors",

  dosage: `
For advanced or metastatic breast cancer with capecitabine:

• Adults:
  - 1250 mg or 5 tablets taken together as a single dose once daily for 21 days.
  - Doctor may advise repeating the 21-day cycle.

• Children:
  - Use and dose must be determined by the physician.

For metastatic breast cancer with letrozole:

• Adults:
  - 1500 mg or 6 tablets taken together as a single dose once daily.

• Children:
  - Use and dose must be determined by the physician.
`,

  coldStorage: "No",

  description: `
Lapatinib is a small molecule and a member of the 4-anilinoquinazoline class of kinase inhibitors.

It is present as the ditosylate salt.

Chemical name:
N-(3 chloro-4-[(3-fluorophenyl)methyl]oxy}phenyl)-6-[5-({[2-(methylsulfonyl)ethyl]amino}methyl)-2-furanyl]-4-quinazolinamine bis(4-methylbenzenesulfonate).

Molecular formula:
C29H26ClFN4O4S (C7H8O3S)2

Molecular weight:
925.48 g/mol

Lapatinib is a yellow solid.

Its solubility in water is 0.007 mg/mL and in 0.1N HCl is 0.001 mg/mL at 25°C.

Each 250 mg lapatinib film coated tablet contains 398 mg lapatinib ditosylate equivalent to 250 mg lapatinib free base.
`,

  indication: `
Lapatinib is a kinase inhibitor indicated in combination with:

• Capecitabine for treatment of patients with advanced or metastatic breast cancer whose tumors overexpress HER2 and who have received prior therapy including:
  - anthracycline
  - taxane
  - trastuzumab

Limitations of Use:
Patients should have disease progression on trastuzumab prior to initiation of treatment with lapatinib in combination with capecitabine.

• Letrozole for treatment of postmenopausal women with hormone receptor-positive metastatic breast cancer that overexpresses the HER2 receptor and for whom hormonal therapy is indicated.
`,

  clinicalEfficacy: `
There have been significant advances in the treatment of HER2 positive breast cancer over the last decade.

Lapatinib is a small molecule tyrosine kinase inhibitor and is the second HER2 targeted agent approved in HER2 positive metastatic breast cancer.

It is used:
• In combination with capecitabine in second line treatment
• In combination with letrozole for hormone receptor positive disease
`,

  safetyInformation: `
The most common adverse reactions during therapy with lapatinib include:

• Gastrointestinal events:
  - diarrhoea
  - nausea
  - vomiting

• Rash

• Palmar-plantar erythrodysesthesia (PPE), especially when administered with capecitabine.

Diarrhoea was the most common adverse reaction resulting in discontinuation of treatment.
`,

  specialPrecautions: `
• Cardiac toxicity:
  - Lapatinib has not been evaluated in patients with symptomatic cardiac failure.

• Interstitial lung disease and pneumonitis:
  - Lapatinib has been associated with pulmonary toxicity including interstitial lung disease and pneumonitis.

• Hepatotoxicity:
  - Hepatotoxicity has occurred and may rarely be fatal.

• Diarrhoea:
  - Severe diarrhoea has been reported during treatment.
`,
},

{
  id: 24,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "nilotaz",
  name: "Nilotaz",
  subtitle: "Nilotinib Capsules 150/200 mg",
  type: "Capsule",

  image: "/products/nilotaz200-1.png",

  images: [
    "/products/nilotaz200-1.png",
    "/products/nilotaz200-3.png",
    "/products/nilotaz200-2.png",
   
  ],

  strength: "150/200 mg",
  packSize: "1 x 7",
  drugClass: "Antineoplastic agents, BCR-ABL tyrosine kinase inhibitors",

  dosage: `
Dose nilotinib capsules twice daily at approximately 12-hour intervals on an empty stomach.

No food should be consumed:
• At least 2 hours before dose
• At least 1 hour after dose

Capsules should be swallowed whole with water.

For patients unable to swallow capsules:
• Contents may be dispersed in 1 teaspoon of applesauce.
• Mixture should be taken immediately within 15 minutes.

Dosage in Adult Patients with Newly Diagnosed Ph+ CML-CP:
• Recommended dosage is 300 mg orally twice daily.

Dosage in Adult Patients with Resistant or Intolerant Ph+ CML-CP and CML-AP:
• Recommended dosage is 400 mg orally twice daily.
`,

  coldStorage: "No",

  description: `
Nilotinib drug substance is supplied in the form of monohydrochloride monohydrate.

It is a white to slightly yellowish or slightly greenish-yellow powder.

Molecular formula:
C28H22F3N7O•HCl•H2O

Molecular weight:
584 g/mol

Corresponding nilotinib base molecular weight:
529 g/mol

The solubility of nilotinib in aqueous solutions decreases with increasing pH.

Chemical name:
4-methyl-N-[3-(4-methyl-1H-imidazol-1-yl)-5-(trifluoromethyl)phenyl]-3-[[4-(3-pyridinyl)-2-pyrimidinyl]amino]-benzamide monohydrochloride monohydrate.
`,

  indication: `
1. Adult and Pediatric Patients With Newly Diagnosed Ph+ CML-CP:
Indicated for treatment of adult and pediatric patients greater than or equal to 1 year of age with newly diagnosed Philadelphia chromosome positive chronic myeloid leukemia in chronic phase.

2. Adult Patients With Resistant or Intolerant Ph+ CML-CP and CML-AP:
Indicated for treatment of adult patients with chronic phase and accelerated phase Philadelphia chromosome positive chronic myelogenous leukemia resistant or intolerant to prior therapy including imatinib.

3. Pediatric Patients With Resistant or Intolerant Ph+ CML-CP and CML-AP:
Indicated for pediatric patients greater than or equal to 1 year of age with resistance or intolerance to prior tyrosine-kinase inhibitor therapy.
`,

  clinicalEfficacy: `
Nilotinib is used in treatment of blood cancer known as chronic myeloid leukemia.

It is used in patients whose disease could not be treated with other medications for leukemia or who cannot take these medicines because of side effects.
`,

  safetyInformation: `
• Nilotinib prolongs the QT interval.

• Monitor:
  - hypokalemia
  - hypomagnesemia
  - ECG changes

• ECGs should be obtained:
  - at baseline
  - seven days after initiation
  - periodically thereafter
  - after dose adjustments

• Sudden deaths have been reported in patients receiving nilotinib.

• Avoid use in patients with:
  - hypokalemia
  - hypomagnesemia
  - long QT syndrome

• Avoid concomitant use with:
  - drugs known to prolong QT interval
  - strong CYP3A4 inhibitors

• Avoid food 2 hours before and 1 hour after taking the dose.
`,

  specialPrecautions: `
1. Myelosuppression:
• Treatment may cause:
  - thrombocytopenia
  - neutropenia
  - anemia

• CBC monitoring should be performed every 2 weeks for first 2 months and monthly thereafter.

2. QT Prolongation:
• QT prolongation can lead to torsade de pointes which may result in:
  - syncope
  - seizure
  - death

• ECG monitoring is required.

3. Cardiac and Arterial Vascular Occlusive Events:
• Cardiovascular and arterial vascular occlusive events have been reported during therapy.
`,
},
{
  id: 25,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zomacta",
  name: "Zomacta",
  subtitle: "Eltrombopag Olamine Tablet 25/50 mg",
  type: "Tablet",

  image: "/products1/zomacta25-1.png",

  images: [
    "/products1/zomacta25-1.png",
    "/products1/zomacta25-2.png",
    "/products1/zomacta25-3.png",
    "/products1/Zomacta50-1.png",
    "/products1/zomacta50-2.png",
    "/products1/zomacta50-3.png",
  ],

  strength: "25/50 mg",
  packSize: "Tablet",
  drugClass: "Antihemorrhagics, other systemic hemostatics",

  dosage: `
Eltrombopag treatment should be initiated and supervised by a physician experienced in haematological diseases or chronic hepatitis C management.

Dose requirements must be individualized based on platelet counts.

Objective of treatment:
• To achieve and maintain platelet count ≥50,000/µL
• Not to normalize platelet counts

Immune (primary) thrombocytopenia:

Adults and paediatric population aged 6 to 17 years:
• Recommended starting dose:
  - 50 mg once daily

• For East-/Southeast-Asian ancestry:
  - Initiate at reduced dose of 25 mg once daily

Paediatric population aged 1 to 5 years:
• Recommended starting dose:
  - 25 mg once daily

Platelet counts generally:
• Increase within 1 to 2 weeks after starting therapy
• Decrease within 1 to 2 weeks after discontinuation
`,

  coldStorage: "No",

  description: `
Eltrombopag tablets contain eltrombopag olamine, a small molecule thrombopoietin (TPO) receptor agonist for oral administration.

Eltrombopag olamine is a biphenyl hydrazone.

Chemical name:
3'-{(2Z)-2-[1-(3,4-dimethylphenyl)-3-methyl-5-oxo-1,5-dihydro-4H-pyrazol-4-ylidene]hydrazino}-2'-hydroxy-3-biphenylcarboxylic acid - 2-aminoethanol (1:2)

Molecular formula:
C25H22N4O4 • 2(C2H7NO)

Molecular weight:
• 564.65 g/mol for eltrombopag olamine
• 442.5 g/mol for eltrombopag free acid

Eltrombopag olamine is practically insoluble in aqueous buffer across a pH range of 1 to 7.4 and is sparingly soluble in water.
`,

  indication: `
1. Treatment of Thrombocytopenia in Patients With Persistent or Chronic Immune Thrombocytopenia:
Indicated for treatment of thrombocytopenia in adult and pediatric patients 1 year and older with persistent or chronic immune thrombocytopenia (ITP) who have had insufficient response to:
• corticosteroids
• immunoglobulins
• splenectomy

2. Treatment of Thrombocytopenia in Patients With Hepatitis C Infection:
Indicated for thrombocytopenia in patients with chronic hepatitis C to allow initiation and maintenance of interferon-based therapy.

3. Treatment of Severe Aplastic Anemia:
• Indicated in combination with standard immunosuppressive therapy for first-line treatment
• Also indicated in patients with insufficient response to immunosuppressive therapy

Limitations of Use:
• Not indicated for treatment of myelodysplastic syndromes (MDS)
• Safety and efficacy not established with direct-acting antiviral agents used without interferon
`,

  clinicalEfficacy: `
Eltrombopag is used to treat low platelet levels in adults and children at least 1 year old with chronic immune thrombocytopenia after other treatments stopped working or did not work.

Eltrombopag is also used to treat low platelet levels in adults with chronic hepatitis C before and during interferon therapy.

It is also used together with other medicines as starting treatment for severe aplastic anemia in adults and children at least 2 years old.

Eltrombopag is also used in adults to treat severe aplastic anemia after other treatments did not work or stopped working.
`,

  safetyInformation: `
• In patients with chronic hepatitis C, eltrombopag in combination with interferon and ribavirin may increase risk of hepatic decompensation.

• Eltrombopag may increase risk of severe and potentially life-threatening hepatotoxicity.

• Hepatic function should be monitored regularly.

• Discontinue dosing if recommended by physician.
`,

  specialPrecautions: `
1. Hepatic Decompensation in Patients with Chronic Hepatitis C:
• Ascites and encephalopathy occurred more frequently in patients receiving eltrombopag plus antivirals.

• Patients with:
  - albumin levels <3.5 g/dL
  - MELD score ≥10
  had greater risk for hepatic decompensation.

• Discontinue eltrombopag if antiviral therapy is discontinued.

2. Hepatotoxicity:
• Eltrombopag may increase risk of severe and potentially life-threatening hepatotoxicity.

• Drug-induced liver injury has been reported during clinical trials.
`,
},

{
  id: 26,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zalcocib",
  name: "Zalcocib",
  subtitle: "Palbociclib Capsule 75/100/125 mg",
  type: "Capsule",

  image: "/products/zalcocib100-1.png",

  images: [
    "/products/zalcocib100-1.png",
    "/products/zalcocib100-2.png",
    "/products/zalcocib100-3.png",
    "/products/zalcocib125-1.png",
    "/products/zalcocib125-2.png",
    "/products/zalcocib125-3.png",
    
  ],

  strength: "75/100/125 mg",
  packSize: "Capsule",
  drugClass: "Antineoplastic agents, protein kinase inhibitors",

  dosage: `
Recommended dose:
• 125 mg once daily for 21 consecutive days
• Followed by 7 days off treatment
• This forms a complete 28-day cycle

Treatment should continue:
• As long as patient derives clinical benefit
• Until unacceptable toxicity occurs

When coadministered with palbociclib:
• Aromatase inhibitor should be administered according to recommended schedule

For pre/perimenopausal women:
• Combination therapy with palbociclib plus aromatase inhibitor should always be combined with an LHRH agonist.
`,

  coldStorage: "No",

  description: `
Palbociclib capsules for oral administration contain:
• 125 mg
• 100 mg
• 75 mg palbociclib

Palbociclib is a kinase inhibitor.

Molecular formula:
C24H29N7O2

Molecular weight:
447.54 daltons

Chemical name:
6-acetyl-8-cyclopentyl-5-methyl-2-{[5-(piperazin-1-yl)pyridin-2-yl]amino}pyrido[2,3-d]pyrimidin-7(8H)-one

Palbociclib is a yellow to orange powder.

At or below pH 4, palbociclib behaves as a high-solubility compound.

Above pH 4, the solubility reduces significantly.
`,

  indication: `
Palbociclib is indicated for treatment of adult patients with hormone receptor (HR)-positive, HER2-negative advanced or metastatic breast cancer in combination with:

• An aromatase inhibitor as initial endocrine-based therapy

OR

• Fulvestrant in patients with disease progression following endocrine therapy.
`,

  clinicalEfficacy: `
Palbociclib is an oral medicine used to treat specific types of breast cancer in adults.

It is used in combination with:
• Aromatase inhibitors
• Fulvestrant

Palbociclib is a targeted therapy which blocks CDK4 and CDK6 enzymes important for cell division.

Blocking these proteins helps slow down cancer cell growth.
`,

  safetyInformation: `
• Based on mechanism of action, palbociclib can cause fetal harm.

• Females of reproductive potential should use effective contraception:
  - during treatment
  - for at least 3 weeks after last dose

• Palbociclib may impair fertility in males.

• Has potential to cause genotoxicity.
`,

  specialPrecautions: `
1. Neutropenia:
• Most frequently reported adverse reaction in PALOMA-2 and PALOMA-3 studies.

• Grade ≥3 decrease in neutrophil counts reported in:
  - 66% of patients receiving palbociclib plus letrozole
  - 66% receiving palbociclib plus fulvestrant

• Median duration of Grade ≥3 neutropenia was 7 days.

2. Interstitial Lung Disease (ILD)/Pneumonitis:
• Severe, life-threatening or fatal ILD/pneumonitis can occur during treatment.

3. Embryo-Fetal Toxicity:
• Palbociclib can cause fetal harm when administered during pregnancy.

• Effective contraception is advised during therapy and for at least 3 weeks after final dose.
`,
},
{
  id: 27,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "pomaloz",
  name: "Pomaloz",
  subtitle: "Pomalidomide Capsule 1/2 mg",
  type: "Capsule",

  image: "/products1/pomaloz2-1.png",

  images: [
    "/products1/pomaloz2-1.png",
    "/products1/pomaloz2-2.png",
    "/products1/pomaloz2-3.png",

  ],

  strength: "1/2 mg",
  packSize: "Capsule",
  drugClass: "Immunosuppressants, Other immunosuppressants",

  dosage: `
2.1 Pregnancy Testing Prior to Administration:
• Females of reproductive potential must have negative pregnancy testing before initiating treatment.
• Appropriate contraception methods must be used.

2.2 Recommended Dosage for Multiple Myeloma:
• Recommended dose:
  - 4 mg once daily orally
  - With or without food
  - On Days 1 through 21 of each 28-day cycle

• Continue treatment until:
  - disease progression
  - unacceptable toxicity

• Pomalidomide should be given in combination with dexamethasone.

2.3 Recommended Dosage for Kaposi Sarcoma:
• Recommended dose:
  - 5 mg once daily orally
  - With or without food
  - On Days 1 through 21 of each 28-day cycle

• Continue until:
  - disease progression
  - unacceptable toxicity

• Continue HAART in patients with AIDS-related Kaposi sarcoma.

2.4 Dosage Modifications for Hematologic Adverse Reactions:
• Initiate a new cycle in multiple myeloma patients when:
  - neutrophil count is at least 500 per mcL
  - platelet count is at least 50,000 per mcL
`,

  coldStorage: "No",

  description: `
Pomalidomide is a thalidomide analog.

Chemical name:
(RS)-4-Amino-2-(2,6-dioxo-piperidin-3-yl)-isoindoline-1,3-dione

Empirical formula:
C13H11N3O4

Molecular weight:
273.24

Pomalidomide is a yellow solid powder.

It has:
• limited to low solubility into organic solvents
• low solubility in all pH solutions (about 0.01 mg/mL)

Pomalidomide has a chiral carbon atom which exists as a racemic mixture of the R(+) and S(-) enantiomers.
`,

  indication: `
1. Multiple Myeloma:
Pomalidomide in combination with dexamethasone is indicated for adult patients with multiple myeloma who have received at least two prior therapies including:
• lenalidomide
• a proteasome inhibitor

Patients should have demonstrated disease progression on or within 60 days of completion of the last therapy.

2. Kaposi Sarcoma:
Pomalidomide is indicated for treatment of:
• Adult patients with AIDS-related Kaposi sarcoma after failure of highly active antiretroviral therapy (HAART)
• Kaposi sarcoma in adult patients who are HIV-negative

This indication is approved under accelerated approval based on overall response rate.
`,

  clinicalEfficacy: `
Pomalidomide is used to treat multiple myeloma, a cancer resulting from a progressive blood disease.

It is generally used after at least two other medications have been tried without success.

Pomalidomide is also used to treat AIDS-related Kaposi sarcoma when other medications did not work or stopped working.

It can also be used to treat Kaposi Sarcoma in HIV-negative adults.

Pomalidomide is available only from a certified pharmacy under a special program requiring patient registration and compliance with birth control measures.
`,

  safetyInformation: `
• Pomalidomide is contraindicated in pregnancy.

• It is a thalidomide analogue and may cause:
  - severe birth defects
  - embryo-fetal death

• Females of reproductive potential must:
  - obtain 2 negative pregnancy tests before starting therapy
  - use 2 forms of contraception
  - or continuously abstain from heterosexual intercourse

• Contraception should continue during treatment and for 4 weeks after stopping treatment.
`,

  specialPrecautions: `
1. Embryo-Fetal Toxicity:
• Pomalidomide is contraindicated during pregnancy.

• Females of reproductive potential must avoid pregnancy:
  - for at least 4 weeks before therapy
  - during therapy
  - during dose interruptions
  - for at least 4 weeks after completing therapy

Males:
• Pomalidomide is present in semen.
• Males must use latex or synthetic condoms during sexual contact with females of reproductive potential while taking therapy and for up to 4 weeks after discontinuation.
• Male patients must not donate sperm.

2. Venous and Arterial Thromboembolism:
• Venous thromboembolic events observed:
  - deep venous thrombosis
  - pulmonary embolism

• Arterial thromboembolic events observed:
  - myocardial infarction
  - stroke

• Thromboembolic events occurred in patients treated with pomalidomide and dexamethasone during clinical trials.
`,
},
{
  id: 28,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "anastroz",
  name: "Anastroz",
  subtitle: "Anastrozole Tab",
  type: "Tablet",

  image: "/products/anastroz1-1.png",

  images: [
    "/products/anastroz1-1.png",
    "/products/anastroz1-2.png",
    
  ],

  strength: "1 mg",
  packSize: "1 x 10",
  drugClass: "Enzyme inhibitors",

  dosage: `
The dose of Anastrozole is one 1 mg tablet taken once a day. For patients with advanced breast cancer. Anastrozole should be continued until tumor progression.

For adjuvant treatment of early breast cancer in postmenopausal women, the optimal duration of therapy is unknown. In the ATAC trial Anastrozole was administered for five years.

PATIENTS WITH HEPATIC IMPAIRMENT

Hepatic metabolism accounts for approximately 85% of Anastrozole elimination. Although clearance of Anastrozole was decreased in patient with cirrhosis due to alcohol abuse, plasma Anastrozole concentrations stayed in the usual range seen in patients without liver disease. Therefore, no changes in dose are recommrnded for patients with mild – to – moderate hepatic impairment, although patients should be monitored for side effects. Anastrozole has not been studied in patients with severe hepatic impairment.

PATIENTS WITH RENAL IMPAIRMENT

No changes in dose are necessary for patients with renal impairment.

USE IN THE ELDERLY

No dosage adjustment is necessary.
`,

  coldStorage: "No",

  description: `
Anastrozole tablets for oral administration contain 1 mg of anastrozole, a non-steroidal aromatase inhibitor. It is chemically described as 1,3-Benzenediacetonitrile, a, a, a’, a’-tetramethyl-5-(1H-1,2,4-triazol-1-ylmethyl). Its molecular formula is C17H19N5.

Anastrozole is an off-white powder with a molecular weight of 293.4. Anastrozole has moderate aqueous solubility (0.5 mg/mL at 25°C); solubility is independent of pH in the physiological range. Anastrozole is freely soluble in methanol, acetone, ethanol, and tetrahydrofuran, and very soluble in acetonitrile.

Each tablet contains as inactive ingredients: lactose, magnesium stearate, hydroxypropylmethylcellulose, polyethylene glycol, povidone, sodium starch glycolate, and titanium dioxide.
`,

  indication: `
Indication:

Anastrozole is indicated for adjuvant treatment of postmenopausal women with hormone receptor positive early breast cancer.

Anastrozole is indicated for the first – line treatment of postmenopausal women with hormone receptor positive or hormone receptor unknown locally advanced or metastatic breast cancer.

Anastrozole is indicated for the treatment of advanced breast cancer in postmenopausal women with dieases progression following tamoxifen therapy. Patients with ER-negative disease and paitents who did not respond to previous tamoxifen therapy rarely responded to Anastrozole.

Usage:

Anastrozole is used to treat early hormone receptor-positive breast cancer. It is also used for first-line treatment of hormone receptor-positive or hormone receptor-unknown advanced or metastatic (cancer that has spread) breast cancer.
`,

  clinicalEfficacy: `
Advanced breast cancer

First-line therapy in postmenopausal women with advanced breast cancer

Two double-blind, controlled clinical studies of similar design (Study 1033IL/0030 and Study 1033IL/0027) were conducted to assess the efficacy of Anastroz compared with tamoxifen as first-line therapy for hormone receptor-positive or hormone receptor-unknown locally advanced or metastatic breast cancer in postmenopausal women. A total of 1,021 patients were randomised to receive 1 mg of Anastroz once daily or 20 mg of tamoxifen once daily. The primary endpoints for both trials were time to tumour progression, objective tumour response rate, and safety

Second-line therapy in postmenopausal women with advanced breast cancer

Anastroz was studied in two controlled clinical trials (Study 0004 and Study 0005) in postmenopausal women with advanced breast cancer who had disease progression following tamoxifen therapy for either advanced or early breast cancer. A total of 764 patients were randomised to receive either a single daily dose of 1 mg or 10 mg of Anastroz or megestrol acetate 40 mg four times a day. Time to progression and objective response rates were the primary efficacy variables. The rate of prolonged (more than 24 weeks) stable disease, the rate of progression, and survival were also calculated. In both studies there were no significant differences between treatment arms with respect to any of the efficacy parameters.

Adjuvant treatment of early invasive breast cancer for hormone receptor-positive patients

In a large phase III study conducted in 9,366 postmenopausal women with operable breast cancer treated for 5 years (see below), Anastroz was shown to be statistically superior to tamoxifen in disease-free survival. A greater magnitude of benefit was observed for disease-free survival in favour of Anastroz versus tamoxifen for the prospectively defined hormone receptor-positive population

Adjuvant treatment of early invasive breast cancer for hormone receptor-positive patients being treated with adjuvant tamoxifen

In a phase III trial (Austrian Breast and Colorectal Cancer Study Group [ABCSG] 8) conducted in 2,579 postmenopausal women with hormone receptor-positive early breast cancer who had received surgery with or without radiotherapy and no chemotherapy (see below), switching to Anastroz after 2 years adjuvant treatment with tamoxifen was statistically superior in disease-free survival when compared to remaining on tamoxifen, after a median follow-up of 24 months.

Bone mineral density (BMD)

In the phase III/IV study (Study of Anastrozole with the Bisphosphonate Risedronate [SABRE]), 234 postmenopausal women with hormone receptor-positive early breast cancer scheduled for treatment with Anastroz 1 mg/day were stratified to low, moderate and high risk groups according to their existing risk of fragility fracture. The primary efficacy parameter was the analysis of lumbar spine bone mass density using DEXA scanning. All patients received treatment with vitamin D and calcium. Patients in the low risk group received Anastroz alone (N=42), those in the moderate group were randomised to Anastroz plus risedronate 35 mg once a week (N=77) or Anastroz plus placebo (N=77) and those in the high risk group received Anastroz plus risedronate 35 mg once a week (N=38). The primary endpoint was change from baseline in lumbar spine bone mass density at 12 months.
`,

  safetyInformation: `
Anastrozole may cause or worsen osteoporosis. It can decrease the density of your bones and increase the chance of broken bones and fractures. Talk to your doctor about the risks of taking this medication and to find out what you can do to decrease these risks.

Anastrozole may cause other side effects.
`,

  specialPrecautions: ``,
},
{
  id: 29,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "bicalutaz",
  name: "Bicalutaz",
  subtitle: "Bicalutamide Tab",
  type: "Tablet",

  image: "/products/bicalutaz50-1.png",

  images: [
    "/products/bicalutaz50-1.png",
    "/products/bicalutaz50-2.png",
    "/products/bicalutaz50-3.png",
    
  ],

  strength: "50 mg / 150 mg",
  packSize: "1 x 10",
  drugClass: "Antineoplastics, Antiandrogen",

  dosage: `
Recommended Dose And Schedule

The recommended dose for Bicalutaz therapy in combination with an LHRH analog is one 50 mg tablet once daily (morning or evening), with or without food. It is recommended that Bicalutaz be taken at the same time each day.

Treatment with Bicalutaz should be started at the same time as treatment with an LHRH analog.

If a dose of Bicalutaz is missed, take the next dose at the scheduled time. Do not take the missed dose and do not double the next dose.

Dosage Adjustment In Renal Impairment

No dosage adjustment is necessary for patients with renal impairment.

Dosage Adjustment In Hepatic Impairment

No dosage adjustment is necessary for patients with mild to moderate hepatic impairment.

In patients with severe liver impairment (n=4), although there was a 76% increase in the half-life (5.9 and 10.4 days for normal and impaired patients, respectively) of the active enantiomer of bicalutamide, no dosage adjustment is necessary.
`,

  coldStorage: "No",

  description: `
Bicalutamide tablets contain 50 mg of bicalutamide, a non-steroidal androgen receptor inhibitor with no other known endocrine activity.

The chemical name is propanamide, N [4 cyano-3-(trifluoromethyl)phenyl]-3-[(4-fluorophenyl)sulfonyl]-2-hydroxy-2-methyl-, (+-).

Bicalutamide has a molecular weight of 430.37.

The pKa’ is approximately 12.

Bicalutamide is a fine white to off-white powder which is practically insoluble in water at 37°C (5 mg per 1000 mL), slightly soluble in chloroform and absolute ethanol, sparingly soluble in methanol, and soluble in acetone and tetrahydrofuran.

Bicalutamide is a racemate with its antiandrogenic activity being almost exclusively exhibited by the R-enantiomer of bicalutamide; the S-enantiomer is essentially inactive.

The inactive ingredients of Bicalutamide tablets are lactose, magnesium stearate, hypromellose, polyethylene glycol, polyvidone, sodium starch glycollate, and titanium dioxide.
`,

  indication: `
Bicalutamide is indicated in combination with a luteinizing hormone-releasing hormone (LHRH) agonist for the treatment of Stage D2 metastatic carcinoma of the prostate.
`,

  clinicalEfficacy: `
A 50-mg daily dose of bicalutamide is sufficient when given in combination with an agent, such as a LHRH-A, that lowers serum testosterone, but higher doses of bicalutamide may be needed when the drug is given as monotherapy.

Bicalutamide, 50-mg daily, is a logical first choice for antiandrogen therapy when used in combination with an LHRH-A for the treatment of patients with advanced prostate cancer.

Bicalutamide 150-mg daily is considered an effective monotherapy for use in patients with locally advanced disease.

Additional clinical trials are currently in progress to further evaluate bicalutamide as a monotherapy for advanced prostate cancer and to assess its value as adjuvant or first-line therapy for early-stage prostate cancer.
`,

  safetyInformation: `
Bicalutamide is a potent antiandrogen and a mixed function oxidase enzyme inducer in animals.

Target organ changes, including tumour induction, in animals, are related to these activities.

Atrophy of seminiferous tubules of the testes is a predicted class effect with antiandrogens and has been observed for all species examined.

Reversal of testicular atrophy occurred 4 months after the completion of dosing in a 6-month rat study (at doses of approximately 1.5 times human therapeutic concentrations at the recommended dose of 50 mg).

No recovery was observed at 24 weeks after the completion of dosing in a 12-month rat study (at doses of approximately 2 times human concentrations at the recommended human dose of 50 mg).

Following 12-months of repeated dosing in dogs (at doses of approximately 7 times human therapeutic concentrations at the recommended human dose of 50 mg), the incidence of testicular atrophy was the same in dosed and control dogs after a 6 month recovery period.

In a fertility study (at doses of approximately 1.5 times human therapeutic concentrations at the recommended human dose of 50 mg), male rats had an increased time to successful mating immediately after 11 weeks of dosing; reversal was observed after 7 weeks off-dose.
`,

  specialPrecautions: `
Before taking bicalutamide, tell your doctor or pharmacist if you are allergic to it; or if you have any other allergies.

This product may contain inactive ingredients, which can cause allergic reactions or other problems. Talk to your pharmacist for more details.

Before using this medication, tell your doctor or pharmacist your medical history, especially of:
• liver disease
• diabetes
• heart disease

This drug may make you dizzy or drowsy.

Alcohol or marijuana (cannabis) can make you more dizzy or drowsy.

Do not drive, use machinery, or do anything that needs alertness until you can do it safely.

Limit alcoholic beverages.

Talk to your doctor if you are using marijuana (cannabis).

This medication may make you more sensitive to the sun.

Limit your time in the sun.

Avoid tanning booths and sunlamps.

Use sunscreen and wear protective clothing when outdoors.

Tell your doctor right away if you get sunburned or have skin blisters/redness.

Before having surgery, tell your doctor or dentist about all the products you use (including prescription drugs, nonprescription drugs, and herbal products).
`,
},
{
  id: 30,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "capetaz",
  name: "Capetaz",
  subtitle: "Capecitabine Tab 500 mg",
  type: "Tablet",

  image: "/products/capetaz500-1.png",

  images: [
    "/products/capetaz500-1.png",
    "/products/capetaz500-2.png",
    
  ],

  strength: "500 mg",
  packSize: "1 x 10",
  drugClass: "Cytostatic (antimetabolite)",

  dosage: `
The recommended dose of Capecitabine is 2500 mg/m² administered orally daily with food for 2 weeks followed by a 1 week rest period given as 3 week cycles.

The Capecitabine daily dose should be given orally in two divided doses (approximately 12 hours apart) at the end of a meal.

Capecitabine tablets should be swallowed with water.

Capecitabine Dose Calculation According to Body Surface Area

Dose level 225 mg/m²/day

Surface Area (m²) | Total Daily Dose (mg) | 150 mg Tablets | 500 mg Tablets

≤ 1.24 | 3000 | 0 | 3

1.25 - 1.36 | 3300 | 1 | 3

1.37 - 1.51 | 3600 | 2 | 3

1.52 - 1.64 | 4000 | 0 | 4

1.65 - 1.76 | 4300 | 1 | 4

1.77 - 1.91 | 4600 | 2 | 4

1.92 - 2.04 | 5000 | 0 | 5

2.05 - 2.17 | 5300 | 1 | 5

≥ 2.18 | 5600 | 2 | 5

*Total daily dose divided by 2 to allow equal morning and evening doses.

Dose Modification Guidelines:

Patients should be carefully monitored for toxicity.

Toxicity due to Capecitabine administration may be managed by symptomatic treatment, dose interruptions and adjustment of Capecitabine dose.

Once dose has been reduced it should not be increased at a later time.

Recommended Dose Modifications

Grade 1:
• Maintain dose level
• Maintain dose level for next cycle

Grade 2:
• 1st appearance – Interrupt until resolved to grade 0-1 → 100%
• 2nd appearance – Interrupt until resolved to grade 0-1 → 75%
• 3rd appearance – Interrupt until resolved to grade 0-1 → 50%
• 4th appearance – Discontinue treatment permanently

Grade 3:
• 1st appearance – Interrupt until resolved to grade 0-1 → 75%
• 2nd appearance – Interrupt until resolved to grade 0-1 → 50%
• 3rd appearance – Discontinue treatment permanently

Grade 4:
• 1st appearance – Discontinue permanently or if physician deems it to be in the patient’s best interest to continue, interrupt until resolved to grade 0-1 → 50%

Adjustment of Starting Dose In Special Populations

Hepatic Impairment:

In patient with mild to moderate hepatic dysfunction due to liver metastases, no starting dose adjustment is necessary however, patients should be carefully monitored.

Patients with severe hepatic dysfunction have not been studied.

Renal Impairment:

Insufficient data are available in patients with renal impairment to provide a dosage recommendation.

Geriatric Population:

The elderly may be pharmacodynamically more sensitive to the toxic effects of 5-FU and therefore physicians should exercise caution in monitoring the effects of Capecitabine in the elderly.

Insufficient data are available to provide a dosage recommendation.
`,

  coldStorage: "No",

  description: `
CAPETAZ 500 tablets containing Capecitabine 500 mg are peach colored capsule shaped film coated tablets.

Capecitabine is a fluoropyrimidine carbamate with antineoplastic activity.

It is an orally administered systemic prodrug of 5’-deoxy-5-fluorouridine (5’-DFUR) which is converted to 5-fluorouracil.

The chemical name for Capecitabine is 5’-deoxy-5-fluoro-N-[(pentyloxy) carbonyl]-cytidine and has a molecular weight of 359.35.
`,

  indication: `
Capecitabine is indicated for the treatment of patients with metastatic breast cancer resistant to both paclitaxel and an anthracycline-containing chemotherapy regimen or resistant to paclitaxel and for whom further anthracycline therapy is not indicated.

• For the adjuvant treatment of patients following surgery of stage III (Dukes’ stage C) colon cancer.

• For the treatment of metastatic colorectal cancer.

• For first-line treatment of advanced gastric cancer in combination with a platinum based regimen.

• In combination with docetaxel for the treatment of patients with locally advanced or metastatic breast cancer after failure of cytotoxic chemotherapy.

Previous therapy should have included an anthracycline.
`,

  clinicalEfficacy: `
Enzymes convert capecitabine to 5-fluorouracil (5-FU) in vivo.

Both normal and tumor cells metabolize 5-FU to 5-fluoro-2′-deoxyuridine monophosphate (FdUMP) and 5-fluorouridine triphosphate (FUTP).

These metabolites cause cell injury by two different mechanisms.

First, FdUMP and the folate cofactor, N5-10-methylenetetrahydrofolate, bind to thymidylate synthase (TS) to form a covalently bound ternary complex.

This binding inhibits the formation of thymidylate from 2′-deoxyuridylate.

Thymidylate is the necessary precursor of thymidine triphosphate, which is essential for the synthesis of DNA, so that a deficiency of this compound can inhibit cell division.

Second, nuclear transcriptional enzymes can mistakenly incorporate FUTP in place of uridine triphosphate (UTP) during the synthesis of RNA.

This metabolic error can interfere with RNA processing and protein synthesis.
`,

  safetyInformation: `
In repeat-dose toxicity studies, daily oral administration of capecitabine to cynomolgus monkeys and mice produced toxic effects on the gastrointestinal, lymphoid and haemopoietic systems, typical for fluoropyrimidines.

These toxicities were reversible.

Skin toxicity, characterised by degenerative/regressive changes, was observed with capecitabine.

Capecitabine was devoid of hepatic and CNS toxicities.

Cardiovascular toxicity (e.g. PR- and QT-interval prolongation) was detectable in cynomolgus monkeys after intravenous administration (100 mg/kg) but not after repeated oral dosing (1379 mg/m²/day).

A two-year mouse carcinogenicity study produced no evidence of carcinogenicity by capecitabine.

During standard fertility studies, impairment of fertility was observed in female mice receiving capecitabine; however, this effect was reversible after a drug-free period.

In addition, during a 13-week study, atrophic and degenerative changes occurred in the reproductive organs of male mice; however, these effects were reversible after a drug-free period.

In embryotoxicity and teratogenicity studies in mice, dose-related increases in foetal resorption and teratogenicity were observed.

In monkeys, abortion and embryolethality were observed at high doses, but there was no evidence of teratogenicity.

Capecitabine was not mutagenic in vitro to bacteria (Ames test) or mammalian cells (Chinese hamster V79/HPRT gene mutation assay).

However, similar to other nucleoside analogues (i.e. 5-FU), capecitabine was clastogenic in human lymphocytes (in vitro) and a positive trend occurred in mouse bone marrow micronucleus tests (in vivo).
`,

  specialPrecautions: `
A physician experienced in the use of cancer chemotherapeutic agents should monitor patients receiving therapy with Capecitabine.

Most adverse events are reversible and do not need to result in discontinuation, although doses may need to be withheld or reduced.

Hand-and-Foot Syndrome:

Hand-and-foot syndrome (palmar-plantar erythrodysesthesia or chemotherapy-induced acral erythema) may occur.

Administration of Capecitabine should be interrupted until the event resolves or decreases in intensity to grade 1.

Following grade 3 hand-and-foot syndrome, subsequent doses of Capecitabine should be decreased.

Cardiac:

There has been cardiotoxicity associated with fluorinated pyrimidine therapy, including:
• myocardial infarction
• angina
• dysrhythmias
• cardiogenic shock
• sudden death
• electrocardiograph changes

These adverse events may be more common in patients with a prior history of coronary artery disease.

Hepatic Insufficiency:

Patients with mild to moderate hepatic dysfunction due to liver metastases should be carefully monitored when Capecitabine is administered.

The effect of severe hepatic dysfunction on the disposition of Capecitabine is not known.

Hyperbilirubinemia:

If drug-related grade 2-4 elevations in bilirubin occur, administration of Capecitabine should be immediately interrupted until the hyperbilirubinemia resolves or decreases in intensity to grade 1.

Renal Insufficiency:

There is little experience in patients with renal impairment.

Physicians should exercise caution when Capecitabine is administered.

Haematologic:

Capecitabine can lead to:
• neutropenia
• thrombocytopenia
• decreases in hemoglobin

Carcinogenesis and Mutagenesis:

Long-term studies in animals to evaluate the carcinogenic potential of Capecitabine have not been conducted.

Capecitabine has not been shown to be mutagenic in vitro or in vivo.

Impairment of Fertility:

Capecitabine causes a decrease in fertility by disturbing the estrus.

In male mice, Capecitabine causes degenerative changes in the testes, including decreases in the number of spermatocytes and spermatids.

Nursing Women:

It is not known whether the drug is excreted in human milk.

Because many drugs are excreted in human milk and because of the potential for serious adverse reactions in nursing infants, it is recommended that nursing be discontinued when receiving Capecitabine therapy.

Pediatric Use:

The safety and effectiveness of Capecitabine in persons <18 years of age have not been established.

Geriatric Use:

Patients ≥80 years old may experience a greater incidence of gastrointestinal grade 3 or 4 adverse events.

Physicians should pay particular attention to monitoring the adverse effects of Capecitabine in the elderly.

Drug-Food Interaction:

Since current safety and efficacy data are based upon administration of Capecitabine with food, it is recommended that Capecitabine be administered with food.
`,
},
{
  id: 31,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "enzumide",
  name: "Enzumide",
  subtitle: "Enzalutamide Cap 40 mg",
  type: "Capsule",

  image: "/products/enzumide40-1.png",

  images: [
    "/products/enzumide40-1.png",
    "/products/enzumide40-2.png",
   
  ],

  strength: "40 mg",
  packSize: "1 x 28",
  drugClass: "Antineoplastic",

  dosage: `
Recommended Dosage

The recommended dosage of Enzumide is 160 mg administered orally once daily with or without food.

Swallow capsules or tablets whole.

Do not chew, dissolve, or open the capsules.

Do not cut, crush, or chew the tablets.

Dosage Modifications For Adverse Reactions

If a patient experiences a grade 3 or an intolerable adverse reaction, withhold Enzumide for one week or until symptoms improve to grade 2 or less and then resume at the same or a reduced dose (120 mg or 80 mg) if warranted.

Dosage Modifications for Drug Interactions

Strong CYP2C8 Inhibitors

Avoid the coadministration of strong CYP2C8 inhibitors.

If the coadministration of a strong CYP2C8 inhibitor cannot be avoided, reduce the Enzumide dosage to 80 mg once daily.

If the coadministration of the strong inhibitor is discontinued, increase the Enzumide dosage to the dosage used prior to initiation of the strong CYP2C8 inhibitor.

Strong CYP3A4 Inducers

Avoid the coadministration of strong CYP3A4 inducers.

If the coadministration of a strong CYP3A4 inducer cannot be avoided, increase the Enzumide dosage from 160 mg to 240 mg orally once daily.

If the coadministration of the strong CYP3A4 inducer is discontinued, decrease the Enzumide dosage to the dosage used prior to initiation of the strong CYP3A4 inducer.

Important Administration Instructions

Patients receiving Enzumide should also receive a gonadotropin-releasing hormone (GnRH) analogue concurrently or should have had bilateral orchiectomy.
`,

  coldStorage: "No",

  description: `
Enzalutamide is an androgen receptor inhibitor.

The chemical name is 4-{3-[4-cyano-3-(trifluoromethyl)phenyl]-5,5-dimethyl-4-oxo-2-sulfanylideneimidazolidin-1-yl}-2-fluoro-N-methylbenzamide.

The molecular weight is 464.44 and the molecular formula is C₂₁H₁₆F₄N₄O₂S.

Enzalutamide is a white crystalline non-hygroscopic solid.

It is practically insoluble in water.

Enzumide is provided as liquid-filled soft gelatin capsules for oral administration.

Each capsule contains 40 mg of enzalutamide as a solution in caprylocaproyl polyoxylglycerides.

The inactive ingredients are caprylocaproyl polyoxylglycerides, butylated hydroxyanisole, butylated hydroxytoluene, gelatin, sorbitol sorbitan solution, glycerin, purified water, titanium dioxide, and black iron oxide.
`,

  indication: `
Indicated for the treatment of patients with:

• Castration-resistant prostate cancer (CRPC)

• Metastatic castration-sensitive prostate cancer (mCSPC)

Usage:

Enzalutamide is used to treat prostate cancer that has spread to other parts of the body in men and who have been helped by certain medical and surgical treatments that decrease testosterone levels.
`,

  clinicalEfficacy: `
The efficacy and safety of enzalutamide in patients with metastatic castration resistant prostate cancer who had received docetaxel and were using a gonadotropin-releasing hormone (GnRH) analogue.

Enzalutamide was shown to be an effective and well-tolerated therapeutic option in patients with metastatic castration-resistant prostate cancer.
`,

  safetyInformation: `
Safety of enzalutamide in patients with metastatic castration resistant prostate cancer who had received docetaxel and were using a gonadotropin-releasing hormone (GnRH) analogue.

Enzalutamide was shown to be an effective and well-tolerated therapeutic option in patients with metastatic castration-resistant prostate cancer.
`,

  specialPrecautions: `
Before taking enzalutamide, tell your doctor or pharmacist if you are allergic to it; or if you have any other allergies.

This product may contain inactive ingredients, which can cause allergic reactions or other problems.

Talk to your pharmacist for more details.

Before using this medication, tell your doctor or pharmacist your medical history, especially of:

• High blood pressure
• Seizures
• Risk factors for having seizures (such as brain injury, stroke, or brain tumour)
• Heart disease (such as angina/chest pain or heart attack)
• Diabetes
• High cholesterol or fats (triglycerides) in your blood
• Falls
• Broken bones

Since this medication may rarely cause seizures in some people, ask your doctor if you should avoid activities where a sudden loss of consciousness may cause serious harm to you or others.

This drug may make you dizzy.

Alcohol or marijuana (cannabis) can make you more dizzy.

Do not drive, use machinery, or do anything that needs alertness until you can do it safely.

Limit alcoholic beverages.

Talk to your doctor if you are using marijuana (cannabis).

Before having surgery, tell your doctor or dentist about all the products you use (including prescription drugs, nonprescription drugs, and herbal products).

Since this drug can be absorbed through the skin and lungs and may harm an unborn baby, women who are pregnant or who may become pregnant should not handle this medication or breathe the dust from the capsules or tablets.

This medication should not be used in women, especially during pregnancy or breast-feeding.

It may harm an unborn or breast-feeding baby.

Consult your doctor for more details.

Men who have a pregnant partner must use a condom during sexual activity during enzalutamide treatment and for 3 months after treatment has stopped.

Men with a female partner of childbearing age who is not pregnant should use a condom and another form of birth control during enzalutamide treatment and for 3 months after treatment has stopped.

Ask your doctor for more details.

If your partner becomes pregnant or thinks she may be pregnant, tell the doctor right away.

Consult your pharmacist or physician.
`,
},
{
  id: 32,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "erlonon",
  name: "Erlonon",
  subtitle: "Erlotinib Tab",
  type: "Tablet",

  image: "/products/erlonon100-1.png",

  images: [
    "/products/erlonon100-1.png",
    "/products/erlonon100-2.png",
    "/products/erlonon100-3.png",
    "/products/erlonon150-1.png",
    "/products/erlonon150-2.png",
    
  ],

  strength: "100 mg / 150 mg",
  packSize: "1 x 10",
  drugClass: "Antineoplastic agent protein kinase inhibitor",

  dosage: `
Selection of Patients with Metastatic NSCLC

Select patients for the treatment of metastatic NSCLC with Erlonon based on the presence of EGFR exon 19 deletions or exon 21 (L858R) substitution mutations in tumor or plasma specimens.

If these mutations are not detected in a plasma specimen, test tumor tissue if available.

Recommended Dose – NSCLC

The recommended daily dose of Erlonon for NSCLC is 150 mg taken on an empty stomach, i.e., at least one hour before or two hours after the ingestion of food.

Treatment should continue until disease progression or unacceptable toxicity occurs.

Recommended Dose – Pancreatic Cancer

The recommended daily dose of Erlonon for pancreatic cancer is 100 mg taken once daily in combination with gemcitabine.

Take Erlonon on an empty stomach, i.e., at least one hour before or two hours after the ingestion of food.

Treatment should continue until disease progression or unacceptable toxicity occurs.
`,

  coldStorage: "No",

  description: `
Erlotinib is an inhibitor of the epidermal growth factor receptor (EGFR) tyrosine kinase that is used in the treatment of non-small cell lung cancer, pancreatic cancer and several other types of cancer.

It is typically marketed under the trade name Tarceva.

Erlotinib binds to the epidermal growth factor receptor (EGFR) tyrosine kinase in a reversible fashion at the adenosine triphosphate (ATP) binding site of the receptor.

Recent studies demonstrate that erlotinib is also a potent inhibitor of JAK2V617F, which is a mutant form of tyrosine kinase JAK2 found in most patients with polycythaemia vera (PV) and a substantial proportion of patients with idiopathic myelofibrosis or essential thrombocythemia.

This finding introduces the potential use of erlotinib in the treatment of JAK2V617F-positive PV and other myeloproliferative disorders.
`,

  indication: `
Erlotinib is indicated for:

• The treatment of metastatic non-small cell lung cancer (NSCLC) with tumors showing epidermal growth factor receptor (EGFR) exon 19 deletions or exon 21 (L858R) substitution mutations.

• In combination with first-line treatment for patients diagnosed with locally advanced, unresectable or metastatic pancreatic cancer.

Usage:

Erlotinib is used to treat certain types of non-small cell lung cancer that has spread to nearby tissues or to other parts of the body in patients who have already been treated with at least one other chemotherapy medication and have not gotten better.
`,

  clinicalEfficacy: `
Efficacy of erlotinib have not been established for patients with NSCLC whose tumors show other EGFR mutations.

Additionally it is not recommended for use in combination with platinum-based chemotherapy.
`,

  safetyInformation: `
The safety of erlotinib have not been established for patients with NSCLC whose tumors show other EGFR mutations.

Additionally it is not recommended for use in combination with platinum-based chemotherapy.
`,

  specialPrecautions: `
When considering the use of Erlotinib as a first-line or maintenance treatment for locally advanced or metastatic NSCLC, it is important that the EGFR mutation status of the patient is determined prior to initiation of therapy.

A validated, robust, and sensitive test for the detection of EGFR mutations should be performed using tumour tissue or circulating free DNA (cfDNA) obtained from plasma, in accordance with local clinical practice.

If a plasma-based cfDNA test yields a negative result, tissue-based testing should be considered whenever feasible due to the possibility of false-negative plasma results.

Smokers

Current smokers should be strongly advised to discontinue smoking, as smoking may significantly reduce plasma concentrations of Erlotinib and potentially decrease therapeutic efficacy.

Interstitial Lung Disease (ILD)

Cases of interstitial lung disease-like events, including fatalities, have been reported in patients receiving Erlotinib.

Patients presenting with acute onset or worsening of unexplained pulmonary symptoms such as dyspnoea, cough, and fever should be promptly evaluated.

Erlotinib therapy should be interrupted pending diagnostic assessment, and permanently discontinued if ILD is confirmed.

Hepatic Impairment

Erlotinib is eliminated primarily through hepatic metabolism.

Severe hepatic toxicity, including hepatic failure and hepatorenal syndrome, has been reported.

Periodic monitoring of liver function tests is recommended, particularly in patients with pre-existing liver disease or concomitant hepatotoxic medications.

Gastrointestinal Perforation

Gastrointestinal perforation has been reported infrequently and may occur more commonly in patients receiving concomitant anti-angiogenic agents, corticosteroids, NSAIDs, and/or taxane-based chemotherapy, or with a prior history of peptic ulceration or diverticular disease.

Erlotinib should be permanently discontinued in patients who develop gastrointestinal perforation.

Ocular Disorders

Cases of keratitis, corneal ulceration, and abnormal eyelash growth have been observed.

Patients presenting with acute or worsening eye symptoms such as pain, redness, blurred vision, or excessive tearing should undergo prompt ophthalmologic evaluation.
`,
},
{
  id: 33,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "exemestaz",
  name: "Exemestaz",
  subtitle: "Exemestane Tab 25 mg",
  type: "Tablet",

  image: "/products/exemestaz25-1.png",

  images: [
    "/products/exemestaz25-1.png",
    "/products/exemestaz25-2.png",
    "/products/exemestaz25-3.png",
  ],

  strength: "25 mg",
  packSize: "1 x 30",
  drugClass: "Antineoplastics, Aromatase Inhibitors",

  dosage: `
Recommended Dose

The recommended dose of Exemestaz in early and advanced breast cancer is one 25 mg tablet once daily after a meal.

• Adjuvant treatment of postmenopausal women with oestrogen-receptor-positive early breast cancer who have received two to three years of tamoxifen and are switched to AROMASIN for completion of a total of five consecutive years of adjuvant hormonal therapy.

• The treatment of advanced breast cancer in postmenopausal women whose disease has progressed following tamoxifen therapy.

Dose Modifications

Concomitant use of strong CYP 3A4 inducers decreases exemestane exposure.

For patients receiving AROMASIN with a strong CYP 3A4 inducer such as rifampicin or phenytoin, the recommended dose of AROMASIN is 50 mg once daily after a meal.
`,

  coldStorage: "No",

  description: `
Tablets for oral administration contain 25 mg of exemestane, an irreversible, steroidal aromatase inactivator.

Exemestane is chemically described as 6-methylenandrosta-1,4-diene-3,17-dione.

Its molecular formula is C₂₀H₂₄O.

The active ingredient is a white to slightly yellow crystalline powder with a molecular weight of 296.41.

Exemestane is freely soluble in N,N-dimethylformamide, soluble in methanol, and practically insoluble in water.

Each Tablet contains the following inactive ingredients:

• Mannitol
• Crospovidone
• Polysorbate 80
• Hypromellose
• Colloidal silicon dioxide
• Microcrystalline cellulose
• Sodium starch glycolate
• Magnesium stearate
• Simethicone
• Polyethylene glycol 6000
• Sucrose
• Magnesium carbonate
• Titanium dioxide
• Methylparaben
• Polyvinyl alcohol
`,

  indication: `
Adjuvant Treatment of Early Breast Cancer in Postmenopausal Women

Exemestane is indicated for the adjuvant treatment of postmenopausal women with oestrogen receptor-positive early breast cancer who have received two to three years of tamoxifen therapy and are switched to Exemestane for completion of a total of five consecutive years of adjuvant hormonal therapy.

Advanced Breast Cancer in Postmenopausal Women

Exemestane is indicated for the treatment of advanced breast cancer in postmenopausal women whose disease has progressed following anti-estrogen therapy, including tamoxifen.

Usage

Exemestane is used to treat early and advanced breast cancer in women who have already stopped menstruating (postmenopausal).

It is usually used in women who have already received a cancer medication called tamoxifen.

Many breast cancer tumors grow in response to estrogen.

Exemestane is also sometimes used to treat a certain type of breast cancer in women who have not yet experienced menopause.

Talk to your doctor about the risks of using this medication for your condition.
`,

  clinicalEfficacy: `
Aromatase inhibitors and inactivators are playing an increasing greater role in breast cancer treatment.

Exemestane, a highly specific, steroidal aromatase inactivator, is the newest agent in this class.

The drug is highly specific, and inhibits the in vivo conversion of androstenedione to oestrone (aromatization) by a mean of 97.9%.

Exemestane has shown good efficacy and tolerability in multiple clinical trials among patients with metastatic breast cancer who have failed one or more previous hormonal therapies.

Exemestane 25 mg/day slows disease progression and reduces tumour-related signs and symptoms and the drug exhibits a partial lack of cross-resistance with the non-steroidal aromatase inhibitors.

Response rates to exemestane of 14% to 29% were observed, including patients with visceral metastases, who have historically proved difficult to treat.

In a large phase III trial, exemestane was found to be superior to megestrol acetate with respect to time to progression and overall survival.

In addition, exemestane is currently under investigation as first-line therapy in metastatic disease and in sequence with tamoxifen in the adjuvant setting.

Adverse events include low-grade hot flashes, nausea, and fatigue—mostly of mild to moderate intensity—and treatment-related discontinuations are rare.

In conclusion, exemestane represents a novel and interesting drug for the treatment of advanced breast cancer, with exciting prospects for use in adjuvant therapy and, potentially, breast cancer prevention.
`,

  safetyInformation: `
• Read the label carefully before use.

• Keep out of the reach of children.
`,

  specialPrecautions: `
Reductions In Bone Mineral Density (BMD)

Reductions in bone mineral density (BMD) over time are seen with exemestane use.

Concomitant use of bisphosphonates, vitamin D supplementation, and calcium was not allowed.

During adjuvant treatment with exemestane, women with osteoporosis or at risk of osteoporosis should have their bone mineral density formally assessed by bone densitometry at the commencement of treatment.

Monitor patients for bone mineral density loss and treat as appropriate.

Vitamin D Assessment

Routine assessment of 25-hydroxy vitamin D levels prior to the start of aromatase inhibitor treatment should be performed due to the high prevalence of vitamin D deficiency in women with early breast cancer (EBC).

Women with vitamin D deficiency should receive supplementation with vitamin D.

Administration With Estrogen-Containing Agent

Should not be coadministered with systemic estrogen-containing agents, as these could interfere with its pharmacologic action.
`,
},
{
  id: 34,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "lenvitib",
  name: "Lenvitib",
  subtitle: "Lenvatinib Cap",
  type: "Capsule",

  image: "/products/lenvitib4-1.png",

  images: [
    "/products/lenvitib4-1.png",
    "/products/lenvitib4-2.png",
    "/products/lenvitib4-3.png",
    "/products/lenvitin10-1.png",
    "/products/lenvitin10-2.png",
    "/products/lenvitin10-3.png",
  ],

  strength: "4 mg / 10 mg",
  packSize: "1 x 10",
  drugClass: "Antineoplastics, VEGF Inhibitor",

  dosage: `
Important Dosage Information

Reduce the dose for certain patients with renal or hepatic impairment.

Take Lenvatinib once daily, with or without food, at the same time each day.

If a dose is missed and cannot be taken within 12 hours, skip that dose and take the next dose at the usual time of administration.

Recommended Dosage For Differentiated Thyroid Cancer (DTC)

The recommended dosage of Lenvatinib is 24 mg orally once daily until disease progression or until unacceptable toxicity.

Recommended Dosage For Renal Cell Carcinoma (RCC)

First-Line Treatment Of Patients With Advanced RCC

The recommended dosage of LENVIMA is 20 mg orally once daily in combination with pembrolizumab 200 mg administered as an intravenous infusion over 30 minutes every 3 weeks until disease progression or until unacceptable toxicity or for up to 2 years.

After completing 2 years of combination therapy, LENVIMA may be administered as a single agent until disease progression or until unacceptable toxicity.

Previously Treated RCC

The recommended dosage of Lenvatinib is 18 mg in combination with 5 mg everolimus orally once daily until disease progression or until unacceptable toxicity.

Refer to the everolimus prescribing information for recommended everolimus dosing information.
`,

  coldStorage: "No",

  description: `
A kinase inhibitor is the mesylate salt of lenvatinib.

Its chemical name is 4-[3-chloro-4-(N’-cyclopropylureido)phenoxy]-7-methoxyquinoline-6-carboxamide methanesulfonate.

The molecular formula is C₂₁H₁₉ClN₄O₄ • CH₄O₃S, and the molecular weight of the mesylate salt is 522.96.

Lenvatinib mesylate is a white to pale reddish yellow powder.

It is slightly soluble in water and practically insoluble in ethanol (dehydrated).

The dissociation constant (pKa value) of lenvatinib mesylate is 5.05 at 25°C.

The partition coefficient (log P value) is 3.3.

Lenvitib capsules for oral administration contain 4 mg or 10 mg of lenvatinib, equivalent to 4.90 mg or 12.25 mg of lenvatinib mesylate, respectively.

The following are inactive ingredients:

• Calcium Carbonate, USP
• Mannitol, USP
• Microcrystalline Cellulose, NF
• Hydroxypropyl Cellulose, NF
• Low-substituted Hydroxypropyl Cellulose, NF
• Talc, USP

The hypromellose capsule shell contains titanium dioxide, ferric oxide yellow, and ferric oxide red.

The printing ink contains shellac, black iron oxide, potassium hydroxide, and propylene glycol.
`,

  indication: `
Differentiated Thyroid Cancer

Lenvatinib is indicated for the treatment of patients with locally recurrent or metastatic, progressive, radioactive iodine-refractory differentiated thyroid cancer (DTC).

Renal Cell Carcinoma

Lenvatinib in combination with pembrolizumab is indicated for the first-line treatment of adult patients with advanced renal cell carcinoma (RCC).

Lenvatinib in combination with everolimus is indicated for the treatment of adult patients with advanced RCC following one prior anti-angiogenic therapy.

Usage

Lenvatinib is used to treat progressive, differentiated thyroid cancer that can no longer be treated with radioactive iodine and has already spread to different parts of the body.
`,

  clinicalEfficacy: `
The main efficacy outcome measure was progression-free survival (PFS) as determined by blinded independent radiologic review using Response Evaluation Criteria in Solid Tumours (RECIST).

Secondary efficacy outcome measures included overall response rate and overall survival.

Patients in the placebo arm could opt to receive lenvatinib treatment at the time of confirmed disease progression.

The clinical efficacy and safety of lenvatinib have been evaluated in an international, multicenter, open-label, randomised phase 3 study (REFLECT) in patients with unresectable hepatocellular carcinoma (HCC).

The efficacy of lenvatinib in combination with pembrolizumab was investigated in Study 309, a randomised, multicentre, open-label, active-controlled study conducted in patients with advanced EC who had been previously treated with at least one prior platinum-based chemotherapy regimen in any setting, including in the neoadjuvant and adjuvant settings.
`,

  safetyInformation: `
Do not take Lenvatinib if:

• You are allergic to Lenvatinib or any of the other ingredients of this medicine.

• You are breast-feeding during treatment with Lenvatinib.
`,

  specialPrecautions: `
Hypertension

Hypertension occurred in 73% of patients in SELECT (DTC) receiving LENVIMA 24 mg orally once daily and in 45% of patients in REFLECT (HCC) receiving LENVIMA 8 mg or 12 mg orally once daily.

The median time to onset of new or worsening hypertension was 16 days in SELECT and 26 days in REFLECT.

Grade 3 hypertension occurred in 44% of patients in SELECT and in 24% in REFLECT.

Grade 4 hypertension occurred <1% in SELECT, and Grade 4 hypertension was not reported in REFLECT.

Cardiac Dysfunction

Serious and fatal cardiac dysfunction can occur with LENVIMA.

Across clinical trials in 799 patients with DTC, RCC or HCC, Grade 3 or higher cardiac dysfunction (including cardiomyopathy, left or right ventricular dysfunction, congestive heart failure, cardiac failure, ventricular hypokinesia, or decrease in left or right ventricular ejection fraction of more than 20% from baseline) occurred in 3% of LENVIMA-treated patients.

Monitor patients for clinical symptoms or signs of cardiac dysfunction.

Withhold and resume at a reduced dose upon recovery or permanently discontinue LENVIMA based on severity.
`,
},
{
  id: 35,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "melphalaz",
  name: "Melphalaz",
  subtitle: "Melphalan Inj 50 mg",
  type: "Injection",

  image: "/products/melphalaz5-1.png",

  images: [
    "/products/melphalaz5-1.png",
    "/products/melphalaz5-2.png",
    "/products/melphalaz5-3.png",
  ],

  strength: "50 mg",
  packSize: "1 Vial",
  drugClass: "Antineoplastics, Alkylating",

  dosage: `
The usual IV dose is 16 mg/m².

Dosage reduction of up to 50% should be considered in patients with renal insufficiency (BUN ≥ 30 mg/dL).

The drug is administered as a single infusion over 15 to 20 minutes.

Melphalan is administered at 2-week intervals for 4 doses, then, after adequate recovery from toxicity, at 4-week intervals.

Available evidence suggests about one third to one half of the patients with multiple myeloma show a favorable response to the drug.

Experience with oral melphalan suggests that repeated courses should be given since improvement may continue slowly over many months, and the maximum benefit may be missed if treatment is abandoned prematurely.

Dose adjustment on the basis of blood cell counts at the nadir and day of treatment should be considered.

Administration Precautions

As with other toxic compounds, caution should be exercised in handling and preparing the solution of melphalan hydrochloride.

Skin reactions associated with accidental exposure may occur.

The use of gloves is recommended.

If the solution of melphalan hydrochloride contacts the skin or mucosa, immediately wash the skin or mucosa thoroughly with soap and water.

Procedures for proper handling and disposal of anticancer drugs should be considered.

Several guidelines on this subject have been published.

There is no general agreement that all of the procedures recommended in the guidelines are necessary or appropriate.

Parenteral drug products should be visually inspected for particulate matter and discoloration prior to administration whenever solution and container permit.

If either occurs, do not use this product.

Care should be taken to avoid possible extravasation of melphalan and in cases of poor peripheral venous access, consideration should be given to use of a central venous line.

Preparation for Administration/Stability

1. Melphalan Hydrochloride for Injection must be reconstituted by rapidly injecting 10 mL of the supplied diluent directly into the vial of lyophilized powder using a sterile needle (20-gauge or larger needle diameter) and syringe.

Immediately shake vial vigorously until a clear solution is obtained.

This provides a 5 mg/mL solution of melphalan.

Rapid addition of the diluent followed by immediate vigorous shaking is important for proper dissolution.

2. Immediately dilute the dose to be administered in 0.9% Sodium Chloride Injection, USP, to a concentration not greater than 0.45 mg/mL.

3. Administer the diluted product over a minimum of 15 minutes.

4. Complete administration within 60 minutes of reconstitution.

The time between reconstitution/dilution and administration of Melphalan Hydrochloride for Injection should be kept to a minimum because reconstituted and diluted solutions of Melphalan Hydrochloride for Injection are unstable.

Over as short a time as 30 minutes, a citrate derivative of melphalan has been detected in reconstituted material from the reaction of Melphalan Hydrochloride with Sterile Diluent for Melphalan Hydrochloride for Injection.

Upon further dilution with saline, nearly 1% label strength of melphalan hydrolyzes every 10 minutes.

A precipitate forms if the reconstituted solution is stored at 5°C.

DO NOT REFRIGERATE THE RECONSTITUTED PRODUCT.

Discard unused portion.
`,

  coldStorage: "Yes",

  description: `
Melphalan, also known as L-phenylalanine mustard, phenylalanine mustard, L-PAM, or L-sarcolysin, is a phenylalanine derivative of nitrogen mustard.

Melphalan is a bifunctional alkylating agent that is active against selected human neoplastic diseases.

It is known chemically as 4-[bis(2-chloroethyl)amino]-L-phenylalanine.

The molecular formula is C₁₃H₁₈Cl₂N₂O₂ and the molecular weight is 305.20.

Melphalan is the active L-isomer of the compound and was first synthesised in 1953 by Bergel and Stock.

The D-isomer, known as "medphalan", is less active against certain animal tumors, and the dose needed to produce effects on chromosomes is larger than that required with the L-isomer.

The racemic (DL) form is known as "merphalan" or "sarcolysin".

Melphalan is practically insoluble in water and has a pKa1 of approximately 2.5.

Melphalan hydrochloride for injection is supplied as a sterile, nonpyrogenic, freeze-dried powder.
`,

  indication: `
Melphalan Hydrochloride for Injection is indicated for the palliative treatment of patients with multiple myeloma for whom oral therapy is not appropriate.
`,

  clinicalEfficacy: `
High-dose Melphalan followed by autologous stem cell transplantation (ASCT) remains a standard conditioning regimen for patients with multiple myeloma (MM).

Conventional melphalan formulations are associated with limited solubility and stability and require propylene glycol as a co-solvent, which may contribute to metabolic and renal toxicities.

A novel propylene glycol-free melphalan formulation utilizing Captisol® technology demonstrated improved solubility and stability while maintaining bioequivalence to conventional melphalan formulations.

In a Phase IIb, open-label, multicenter study involving 61 patients with multiple myeloma undergoing ASCT, high-dose Melphalan (200 mg/m² administered as two doses of 100 mg/m²) demonstrated effective myeloablation and successful engraftment in all patients.

Median neutrophil and platelet engraftment times were 12 and 13 days, respectively, with treatment-related mortality of 0% at Day 100 post-transplant.

The overall response rate was 100%, including complete response rates of 21% and partial response rates of 79%.

The incidence of severe mucositis and stomatitis was low, with no Grade 4 mucositis reported.

These findings confirm the efficacy and acceptable safety profile of high-dose Melphalan as a conditioning regimen prior to ASCT in patients with multiple myeloma.
`,

  safetyInformation: `
Melphalan should be used with extreme caution in patients whose bone marrow reserve may have been compromised by prior irradiation or chemotherapy or whose marrow function is recovering from previous cytotoxic therapy.

Dose reduction should be considered in patients with renal insufficiency receiving IV melphalan.

Administration of live vaccines to immunocompromised patients should be avoided.
`,

  specialPrecautions: `
Information for Patients

Patients should be informed that the major acute toxicities of melphalan are related to:

• Bone marrow suppression
• Hypersensitivity reactions
• Gastrointestinal toxicity
• Pulmonary toxicity

The major long-term toxicities are related to infertility and secondary malignancies.

Patients should never be allowed to take the drug without close medical supervision and should be advised to consult their physicians if they experience:

• Skin rash
• Signs or symptoms of vasculitis
• Bleeding
• Fever
• Persistent cough
• Nausea
• Vomiting
• Amenorrhoea
• Weight loss
• Unusual lumps/masses

Women of childbearing potential should be advised to avoid becoming pregnant.

Laboratory Tests

Periodic complete blood counts with differentials should be performed during the course of treatment with melphalan.

At least one determination should be obtained prior to each dose.

Patients should be observed closely for consequences of bone marrow suppression, which include severe infections, bleeding, and symptomatic anaemia.

Nursing Mothers

It is not known whether this drug is excreted in human milk.

IV melphalan should not be given to nursing mothers.

Pediatric Use

The safety and effectiveness in paediatric patients have not been established.

Geriatric Use

Clinical studies of Melphalan Hydrochloride for Injection did not include sufficient numbers of subjects aged 65 and over to determine whether they respond differently from younger subjects.

Other reported clinical experience has not identified differences in responses between the elderly and younger patients.

In general, dose selection for an elderly patient should be cautious, usually starting at the low end of the dosing range, reflecting the greater frequency of decreased hepatic, renal, or cardiac function and of concomitant disease or other drug therapy.

Drug Interactions

The development of severe renal failure has been reported in patients treated with a single dose of IV melphalan followed by standard oral doses of cyclosporine.

Cisplatin may affect melphalan kinetics by inducing renal dysfunction and subsequently altering melphalan clearance.

IV melphalan may also reduce the threshold for BCNU lung toxicity.

When nalidixic acid and IV melphalan are given simultaneously, the incidence of severe haemorrhagic necrotic enterocolitis has been reported to increase in paediatric patients.
`,
},
{
  id: 36,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "mercaptaz",
  name: "Mercaptaz",
  subtitle: "Mercaptopurine Tab 50 mg",
  type: "Tablet",

  image: "/products/mercaptaz50-1.png",

  images: [
    "/products/mercaptaz50-1.png",
    "/products/mercaptaz50-2.png",
    "/products/mercaptaz50-3.png",
  ],

  strength: "50 mg",
  packSize: "1 x 10",
  drugClass: "Purine Antagonists",

  dosage: `
For adults and children the usual dose is 2.5 mg/kg bodyweight per day, or 50 to 75 mg/m² body surface area per day, but the dose and duration of administration depend on the nature and dosage of other cytotoxic agents given in conjunction with 6-mercaptopurine.
`,

  coldStorage: "No",

  description: `
It is a medication used for cancer and autoimmune diseases.

Specifically it is used to treat:

• Acute lymphocytic leukemia
• Acute promyelocytic leukemia
• Crohn’s disease
• Ulcerative colitis
`,

  indication: `
6-mercaptopurine is indicated for the treatment of acute leukaemia in adults, adolescents and children.

It may be utilised in:

• Acute lymphoblastic leukaemia (ALL)

• Acute promyelocytic leukaemia (APL) / Acute myeloid leukaemia M3 (AML M3)
`,

  clinicalEfficacy: `
6-Mercaptopurine (6-MP) has confirmed short and long term efficacy in the treatment of IBD.

However, the relation between its metabolism, efficacy, and side effects is not well understood.

To assay 6-MP metabolites and to correlate levels with drug compliance, disease activity, and adverse effects of treatment.

6-mercaptopurine has been shown to produce good clinical and hematologic remissions in fifteen out of forty-five children with acute leukaemia.

Another ten showed partial remissions and clinical improvement.
`,

  safetyInformation: `
Genotoxicity

6-mercaptopurine, in common with other antimetabolites, is mutagenic and causes chromosomal aberrations in vitro and in vivo in mice and rats.

Carcinogenicity

Given its genotoxic potential, 6-mercaptopurine is potentially carcinogenic.

Teratogenicity

6-mercaptopurine causes embryo lethality and severe teratogenic effects in the mouse, rat, hamster and rabbit at doses that are non-toxic to the mother.

In all species, the degree of embryotoxicity and the type of malformations are dependent on the dose and stage of the gestation at the time of administration.
`,

  specialPrecautions: `
It is recommended that 6-mercaptopurine tablets should be handled following the prevailing local recommendations and/or regulations for the handling and disposal of cytotoxic agents.

Mercaptopurine contact with skin or mucous membranes must be avoided.

Women who are pregnant, planning to be or breast-feeding should not handle Mercaptopurine.
`,
},
{
  id: 37,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "myeloma",
  name: "Myeloma",
  subtitle: "Lenalidomide Cap",
  type: "Capsule",

  image: "/products/myeloma5-1.png",

  images: [
    "/products/myeloma5-1.png",
    "/products/myeloma5-2.png",
    "/products/myeloma5-3.png",
    "/products/myeloma10-1.png",
    "/products/myeloma10-2.png",
    "/products/myeloma10-3.png",
    "/products/myeloma25-1.png",
    "/products/myeloma25-2.png",
    "/products/myeloma25-3.png",
  ],

  strength: "5 mg / 10 mg / 25 mg",
  packSize: "1 x 10",
  drugClass: "Other Immunosuppressants",

  dosage: `
Recommended Dosage For Multiple Myeloma

Lenalidomide Cap Combination Therapy

The recommended starting dose of Myeloma is 25 mg orally once daily on Days 1-21 of repeated 28-day cycles in combination with dexamethasone.

For patients greater than 75 years old, the starting dose of dexamethasone may be reduced.

Treatment should be continued until disease progression or unacceptable toxicity.

In patients who are not eligible for auto-HSCT, treatment should continue until disease progression or unacceptable toxicity.

For patients who are auto-HSCT-eligible, hematopoietic stem cell mobilization should occur within 4 cycles of a Lenalidomide Cap-containing therapy.

Dose Adjustments for Hematologic Toxicities During MM Treatment

Dose modification guidelines are recommended to manage Grade 3 or 4 neutropenia or thrombocytopenia or other Grade 3 or 4 toxicity judged to be related to the Lenalidomide Cap.

Following auto-HSCT, initiate Lenalidomide Cap maintenance therapy after adequate haematologic recovery (ANC at least 1000/mcL and/or platelet counts at least 75,000/mcL).

The recommended starting dose of Lenalidomide Cap is 10 mg once daily continuously (Days 1-28 of repeated 28-day cycles) until disease progression or unacceptable toxicity.

After 3 cycles of maintenance therapy, the dose can be increased to 15 mg once daily if tolerated.

Recommended Dosage For Myelodysplastic Syndromes

The recommended starting dose is 10 mg daily.

Treatment is continued or modified based upon clinical and laboratory findings.

Continue treatment until disease progression or unacceptable toxicity.

Dose Adjustments For Hematologic Toxicities During MDS Treatment

Patients who are dosed initially at 10 mg and who experience thrombocytopenia should have their dosage adjusted accordingly.

Recommended Dosage For Mantle Cell Lymphoma

The recommended starting dose of Lenalidomide Cap is 25 mg/day orally on Days 1-21 of repeated 28-day cycles for relapsed or refractory mantle cell lymphoma.

Treatment should be continued until disease progression or unacceptable toxicity.

Treatment is continued, modified or discontinued based upon clinical and laboratory findings.

Dosage For Follicular Lymphoma Or Marginal Zone Lymphoma

The recommended starting dose is 20 mg orally once daily on Days 1-21 of repeated 28-day cycles for up to 12 cycles of treatment in combination with a rituximab product.

For dose adjustments due to toxicity with rituximab, refer to the product prescribing information.

Modifications For Non-Hematologic Adverse Reactions

For non-haematologic Grade 3/4 toxicities judged to be related to Lenalidomide, hold treatment and restart at the physician’s discretion at the next lower dose level when toxicity has resolved to Grade 2 or below.
`,

  coldStorage: "No",

  description: `
A thalidomide analogue is an immunomodulatory agent with antiangiogenic and antineoplastic properties.

The chemical name is 3-(4-amino-1-oxo 1,3-dihydro-2H-isoindol-2-yl) piperidine-2,6-dione.

The empirical formula for lenalidomide is C13H13N3O3, and the gram molecular weight is 259.3.

Lenalidomide is an off-white to pale-yellow solid powder.

It is soluble in organic solvent/water mixtures, and buffered aqueous solvents.

Lenalidomide is more soluble in organic solvents and low pH solutions.

Solubility was significantly lower in less acidic buffers, ranging from about 0.4 to 0.5 mg/ml.

Lenalidomide has an asymmetric carbon atom and can exist as the optically active forms S(-) and R(+), and is produced as a racemic mixture with a net optical rotation of zero.
`,

  indication: `
Multiple Myeloma

Lenalidomide in combination with dexamethasone is indicated for the treatment of adult patients with multiple myeloma (MM).

Lenalidomide is indicated as maintenance therapy in adult patients with MM following autologous hematopoietic stem cell transplantation (auto-HSCT).

Myelodysplastic Syndromes

Lenalidomide is indicated for the treatment of adult patients with transfusion-dependent anemia due to low- or intermediate-1-risk myelodysplastic syndromes (MDS) associated with a deletion 5q cytogenetic abnormality with or without additional cytogenetic abnormalities.

Mantle Cell Lymphoma

Lenalidomide is indicated for the treatment of adult patients with mantle cell lymphoma (MCL) whose disease has relapsed or progressed after two prior therapies, one of which included bortezomib.

Follicular Lymphoma

Lenalidomide in combination with a rituximab product is indicated for the treatment of adult patients with previously treated follicular lymphoma (FL).

Marginal Zone Lymphoma

Lenalidomide in combination with a rituximab product is indicated for the treatment of adult patients with previously treated marginal zone lymphoma (MZL).

Usage

Lenalidomide is used to treat various types of cancers.

It works by slowing or stopping the growth of cancer cells.

It is also used to treat anemia in patients with certain blood/bone marrow disorders (myelodysplastic syndromes-MDS).

Lenalidomide may lessen the need for blood transfusions.
`,

  clinicalEfficacy: `
The efficacy and safety of Myeloma-10 maintenance was assessed in two phase 3 multicentre, randomised, double-blind 2-arm, parallel group, placebo-controlled studies.

The primary efficacy endpoint in the study was progression free survival (PFS).

In total 523 patients were enrolled into the study, with 263 patients randomised to RVd and 260 patients randomised to Rd.

The demographics and disease-related baseline characteristics of the patients were well balanced between arms.

The safety and efficacy of Myeloma-10 was assessed in a phase 3, multicentre, randomised, open-label, 3-arm study (MM-020).

The primary efficacy endpoint in the study was progression-free survival (PFS).

In total 1623 patients were enrolled into the study, with 535 patients randomised to Rd, 541 patients randomised to Rd18 and 547 patients randomised to MPT.

The demographics and disease-related baseline characteristics of the patients were well balanced in all 3 arms.

In general, study subjects had advanced-stage disease.

Of the total study population:

• 41% had ISS stage III
• 9% had severe renal insufficiency (creatinine clearance <30 mL/min)

The median age was 73 years.

The safety and efficacy of Myeloma-10 was assessed in a phase 3 multicentre, randomised double blind 3 arm study (MM-015) of patients who were 65 years or older and had a serum creatinine <2.5 mg/dL.

The primary efficacy endpoint in the study was progression free survival (PFS).

In total 459 patients were enrolled into the study:

• 152 patients randomised to MPR+R
• 153 patients randomised to MPR+p
• 154 patients randomised to MPp+p
`,

  safetyInformation: `
• If you are pregnant, think you may be pregnant or are planning to become pregnant, as Myeloma is expected to be harmful to an unborn child.

• If you are able to become pregnant, unless you follow all the necessary measures to prevent pregnancy.

• If you are able to become pregnant, your doctor will record with each prescription that the necessary measures have been taken and provide you with this confirmation.
`,

  specialPrecautions: `
It is very important that your doctor check your progress closely at regular visits to see if the medicine is working properly and to allow for a change in the dose.

Blood and urine tests may be needed to check for any unwanted effects.

Women should take the necessary precautions to avoid pregnancy while using lenalidomide.

Begin 2 forms of reliable contraception 4 weeks before starting lenalidomide.

Continue contraceptive measures during treatment and for at least 4 weeks after the last dose.

Routine pregnancy tests are necessary with this medicine.

Call your doctor for emergency contraception information if you think you are pregnant.

Men, even those who have had a vasectomy, must prevent pregnancy in their sexual partners during treatment with this medicine and for at least 4 weeks after the last dose.

Do not donate sperm while using this medicine.

Call your doctor for emergency contraception information if you think your sexual partner may be pregnant.

Do not donate blood during treatment and for at least 4 weeks after the last dose.

This medicine lowers the number of some types of blood cells in your body.

Because of this, you may bleed or get infections more easily.

To help with these problems:

• Avoid being near people who are sick or have infections.
• Wash your hands often.
• Stay away from rough sports or other situations where you could be bruised, cut, or injured.
• Brush and floss your teeth gently.
• Be careful when using sharp objects, including razors and fingernail clippers.

This medicine may increase your risk of having blood clots.
`,
},
{
  id: 39,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "pptinib",
  name: "PPTINIB",
  subtitle: "Dasatinib Tab",
  type: "Tablet",

  image: "/products/pptinib50-1.png",

  images: [
    "/products/pptinib50-1.png",
    "/products/pptinib50-2.png",
    "/products/pptinib50-3.png",
    "/products/pptinib70-1.png",
    "/products/pptinib70-2.png",
    "/products/pptinib70-3.png",
  
  ],

  strength: "20 mg / 50 mg / 70 mg",
  packSize: "1 x 60",
  drugClass: "Antineoplastic Agents, Protein Kinase Inhibitors",

  dosage: `
Dosage Of PPTINIB Tab In Adult Patients

The recommended starting dosage of PPTINIB for chronic phase CML in adults is 100 mg administered orally once daily.

The recommended starting dosage of PPTINIB for accelerated phase CML, myeloid or lymphoid blast phase CML, or Ph+ ALL in adults is 140 mg administered orally once daily.

Tablets should not be crushed, cut, or chewed; they should be swallowed whole.

PPTINIB can be taken with or without a meal, either in the morning or in the evening.

Dosage Of PPTINIB Tab In Pediatric Patients

The recommended dose should be administered orally once daily with or without food.

Recalculate the dose every 3 months based on changes in body weight, or more often if necessary.

Do not crush, cut or chew tablets.

Swallow tablets whole.

The exposure in patients receiving a crushed tablet is lower than in those swallowing an intact tablet.
`,

  coldStorage: "No",

  description: `
PPTINIB (dasatinib) is a kinase inhibitor.

The chemical name for dasatinib is:

N-(2-chloro-6-methylphenyl)-2-[[6-[4-(2-hydroxyethyl)-1-piperazinyl]-2-methyl-4-pyrimidinyl]amino]-5-thiazolecarboxamide, monohydrate.

The molecular formula is C₂₂H₂₆ClN₇O₂S • H₂O, which corresponds to a formula weight of 506.02 (monohydrate).

The anhydrous free base has a molecular weight of 488.01.

Dasatinib has the following chemical structure.

PPTINIB is a white to off-white powder.

The drug substance is insoluble in water and slightly soluble in ethanol and methanol.

PPTINIB tablets are white to off-white, biconvex, film-coated tablets containing dasatinib, with the following inactive ingredients:

• Lactose monohydrate
• Microcrystalline cellulose
• Croscarmellose sodium
• Hydroxypropyl cellulose
• Magnesium stearate

The tablet coating consists of:

• Hypromellose
• Titanium dioxide
• Polyethylene glycol
`,

  indication: `
Dasatinib is indicated for the treatment of adult patients with:

• Ph+ acute lymphoblastic leukaemia (ALL) with resistance or intolerance to prior therapy.

Dasatinib is indicated for the treatment of paediatric patients with:

• Newly diagnosed Ph+ ALL in combination with chemotherapy.

• Newly diagnosed adults with Philadelphia chromosome-positive (Ph+) chronic myeloid leukemia (CML) in chronic phase.

• Adults with chronic, accelerated, or myeloid or lymphoid blast phase Ph+ CML with resistance or intolerance to prior therapy including imatinib.

• Adults with Philadelphia chromosome-positive acute lymphoblastic leukemia (Ph+ ALL) with resistance or intolerance to prior therapy.
`,

  clinicalEfficacy: `
Clinical Efficacy And Safety

In the Phase I study, haematologic and cytogenetic responses were observed in Ph+ ALL in the first 84 patients treated and followed for up to 27 months.

Responses were durable across Ph+ ALL.

The efficacy of dasatinib is based on haematological and cytogenetic response rates.

Durability of response and estimated survival rates provide additional evidence of dasatinib clinical benefit.

A total of 2,712 patients were evaluated in clinical studies.

Of these:

• 23% were 65 years of age or older
• 5% were 75 years of age or older

Ph+ ALL

An open-label, single-arm, multicentre study was conducted in patients with Ph+ ALL who were resistant or intolerant to prior imatinib therapy.

In addition, 46 patients with Ph+ ALL received dasatinib 70 mg twice daily (44 resistant and 2 intolerant to imatinib).

The median time from diagnosis to start of treatment was 18 months.

Median duration of treatment on dasatinib was 3 months with 7% of patients treated for more than 24 months.

The rate of major molecular response (all 25 treated patients with a CCyR) was 52% at 24 months.

Major haematologic responses (MaHR) were achieved quickly (within 55 days for patients with Ph+ ALL).

Phase III Clinical Studies In Patients With Ph+ ALL Who Were Resistant Or Intolerant To Imatinib

Two randomised, open-label studies were conducted to evaluate the efficacy of dasatinib administered once daily compared with dasatinib administered twice daily.

Results are based on a minimum of 2 years and 7 years follow-up after the start of dasatinib therapy.

Study 2

In the study in Ph+ ALL, the primary endpoint was MaHR.

A total of 611 patients were randomised to either the dasatinib 140 mg once daily or 70 mg twice daily group.

Median duration of treatment was approximately 6 months (range 0.03–31 months).

The once daily schedule demonstrated comparable efficacy (non-inferiority) to the twice daily schedule on the primary efficacy endpoint (difference in MaHR 0.8%; 95% confidence interval [-7.1% – 8.7%]).

The 140 mg once daily regimen demonstrated improved safety and tolerability.
`,

  safetyInformation: `
The non-clinical safety profile of dasatinib was assessed in a battery of in vitro and in vivo studies in mice, rats, monkeys, and rabbits.

The primary toxicities occurred in the gastrointestinal, haematopoietic, and lymphoid systems.

Gastrointestinal toxicity was dose-limiting in rats and monkeys, as the intestine was a consistent target organ.

In rats, minimal to mild decreases in erythrocyte parameters were accompanied by bone marrow changes.

Similar changes occurred in monkeys at a lower incidence.

Lymphoid toxicity in rats consisted of lymphoid depletion of the lymph nodes, spleen, and thymus, and decreased lymphoid organ weights.

Changes in the gastrointestinal, haematopoietic and lymphoid systems were reversible following cessation of treatment.

Renal changes in monkeys treated for up to 9 months were limited to an increase in background kidney mineralisation.

Cutaneous haemorrhage was observed in an acute, single-dose oral study in monkeys but was not observed in repeat-dose studies in either monkeys or rats.

In rats, dasatinib inhibited platelet aggregation in vitro and prolonged cuticle bleeding time in vivo, but did not invoke spontaneous haemorrhage.

Dasatinib activity in vitro in hERG and Purkinje fibre assays suggested a potential for prolongation of cardiac ventricular repolarisation (QT interval).

However, in an in vivo single-dose study in conscious telemetered monkeys, there were no changes in QT interval or ECG wave form.

Dasatinib was not mutagenic in in vitro bacterial cell assays (Ames test) and was not genotoxic in an in vivo rat micronucleus study.

Dasatinib was clastogenic in vitro to dividing Chinese Hamster Ovary (CHO) cells.

Dasatinib did not affect male or female fertility in a conventional rat fertility and early embryonic development study but induced embryolethality at dose levels approximating human clinical exposures.

In embryofoetal development studies, dasatinib likewise induced embryolethality with associated decreases in litter size in rats, as well as foetal skeletal alterations in both rats and rabbits.

Dasatinib is a selective reproductive toxicant from implantation through the completion of organogenesis.

In mice, dasatinib induced immunosuppression, which was dose-related and effectively managed by dose reduction and/or changes in dosing schedule.

Dasatinib had phototoxic potential in vitro.

Dasatinib was considered non-phototoxic in vivo after a single oral administration to female hairless mice at exposures up to 3-fold the human exposure following administration of the recommended therapeutic dose.

In a two-year carcinogenicity study, rats were administered oral doses of dasatinib at 0.3, 1, and 3 mg/kg/day.

A statistically significant increase in the combined incidence of squamous cell carcinomas and papillomas in the uterus and cervix of high-dose females and of prostate adenoma in low-dose males was noted.

The relevance of these findings in humans is not known.
`,

  specialPrecautions: `
• Myelosuppression: Severe thrombocytopenia, neutropenia, and anemia may occur and require dose interruption or reduction. Monitor complete blood counts regularly.

• Bleeding Related Events: CNS and gastrointestinal hemorrhages, including fatalities, have occurred. Severe hemorrhage may require treatment interruptions and transfusions. Use Dasatinib with caution in patients requiring medications that inhibit platelet function or anticoagulants.

• Fluid Retention: Dasatinib is associated with fluid retention, sometimes severe, including ascites, edema, and pleural and pericardial effusions. Manage with appropriate supportive care measures.

• QT Prolongation: Use Dasatinib with caution in patients who have or may develop prolongation of the QT interval.

• Congestive Heart Failure, Left Ventricular Dysfunction and Myocardial Infarction: Monitor patients for signs or symptoms consistent with cardiac dysfunction and treat appropriately.

• Fetal harm may occur when administered to a pregnant woman. Women should be advised of the potential hazard to the fetus and to avoid becoming pregnant.
`,
},
{
  id: 40,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "temoloz",
  name: "Temoloz",
  subtitle: "Temozolamide Cap",
  type: "Capsule",

  image: "/products/temoloz100-1.png",

  images: [
    "/products/temoloz100-1.png",
    "/products/temoloz100-2.png",
    "/products/temoloz100-3.png",
   
  ],

  strength: "20 mg / 100 mg / 250 mg",
  packSize: "1 x 5",
  drugClass: "Alkylating Agents",

  dosage: `
Dosage of TEMOLOZ Capsules must be adjusted according to nadir neutrophil and platelet counts in the previous cycle and the neutrophil and platelet counts at the time of initiating the next cycle.

Patients With Newly Diagnosed High-Grade Glioma

Concomitant Phase:

TEMOLOZ is administered orally at 75 mg/m² daily for 42 days concomitant with focal radiotherapy (60 Gy administered in 30 fractions) followed by maintenance TEMOLOZ for 6 cycles.

Focal RT includes the tumor bed or resection site with a 2-3 cm margin.

No dose reductions are recommended during the concomitant phase; however, dose interruptions or discontinuation may occur based on toxicity.

The TEMOLOZ dose should be continued throughout the 42-day concomitant period up to 49 days if all of the following conditions are met:

• Absolute neutrophil count > 1.5 x 10²/L
• Platelet count > 100 x 10²/L
• Common toxicity criteria (CTC) non-haematological toxicity < Grade 1 (except for alopecia, nausea and vomiting)

Maintenance Phase Cycle 1:

Four weeks after completing the TEMOLOZ + RT phase, TEMOLOZ is administered for an additional 6 cycles of maintenance treatment.

Dosage in Cycle 1 (maintenance) is 150 mg/m² once daily for 5 days followed by 23 days without treatment.

Cycles 2-6:

At the start of Cycle 2, the dose is escalated to 200 mg/m² if:

• The CTC non-haematologic toxicity for Cycle 1 is Grade <2 (except for alopecia, nausea and vomiting)
• Absolute neutrophil count (ANC) is >1.5 x 10²/L
• Platelet count is >100 x 10²/L

The dose remains at 200 mg/m² per day for the first 5 days of each subsequent cycle except if toxicity occurs.

If the dose was not escalated at Cycle 2, escalation should not be done in subsequent cycles.

Dose Reduction During Maintenance Treatment

Table 1: Temozolomide Dose Levels For Maintenance Treatment

Dose Level -1
Dose: 100 mg/m²/day
Remarks: Reduction for prior toxicity

Dose Level 0
Dose: 150 mg/m²/day
Remarks: Dose during Cycle 1

Dose Level 1
Dose: 200 mg/m²/day
Remarks: Dose during Cycles 2–6 in absence of toxicity

Table 2: Dose Reduction Or Discontinuation Criteria

Absolute Neutrophil Count (ANC)
• <1.0 × 10⁹/L → Reduce TMZ by 1 dose level

Platelet Count
• <50 × 10⁹/L → Reduce TMZ by 1 dose level

Non-Hematological Toxicity*
• CTC Grade 3 → Reduce TMZ by 1 dose level
• CTC Grade 4 → Discontinue TMZ

*Except alopecia, nausea, and vomiting.

Note:
Temozolomide should be discontinued if dose reduction below 100 mg/m² is required or if the same Grade 3 non-haematological toxicity recurs after dose reduction.

If ANC is >1.5 × 10⁹/L and platelet count is >100 × 10⁹/L at the start of the next cycle, the dose may be increased to 200 mg/m²/day for 5 consecutive days every 28 days.

Complete blood counts should be monitored during therapy.

Treatment may continue until disease progression; however, the optimal duration of therapy remains unknown.

Handling And Disposal

Temozolomide is a cytotoxic anticancer agent.

Capsules should not be opened or crushed.

In case of accidental exposure to capsule contents, precautions should be taken to avoid inhalation or contact with skin or mucous membranes.

Appropriate procedures for handling and disposal of anticancer drugs should be followed according to institutional guidelines.

Administration Of TEMOLOZ

Patients should take each dose with a full glass of water at the same time each day.

Taking the medication on an empty stomach or at bedtime may help ease nausea.

If patients are also taking antinausea or other medications to relieve the side effects associated with TEMOLOZ, they should be advised to take these medications 30 minutes before they take TEMOLOZ.

Patients should not open or split the capsules.

If capsules are accidentally opened or damaged, rigorous precautions should be taken with the capsule contents to avoid inhalation or contact with the skin or mucous membranes.

The medication should be kept away from children and pets.

The TEMOLOZ capsules should be swallowed whole and NEVER CHEWED.
`,

  coldStorage: "No",

  description: `
Temozolomide capsules for oral administration contain Temozolomide, an imidazotetrazine derivative.

The chemical name of Temozolomide is:

3,4-dihydro-3-methyl-4-oxoimidazo[5,1-d]-as-tetrazine-8-carboxamide.
`,

  indication: `
TEMOLOZ (Temozolomide) Capsules are indicated for the treatment of adult patients with newly diagnosed glioblastoma multiforme concomitantly with radiotherapy and then as maintenance treatment.

TEMOLOZ Capsules are indicated for the treatment of adult patients with refractory anaplastic astrocytoma, i.e., patients who have experienced disease progression on a drug regimen containing nitrosourea and procarbazine.
`,

  clinicalEfficacy: `
• Adult patients with newly diagnosed glioblastoma multiforme concomitantly with radiotherapy (RT) and subsequently as monotherapy treatment.

• Children from the age of three years, adolescents and adult patients with malignant glioma, such as glioblastoma multiforme or anaplastic astrocytoma, showing recurrence or progression after standard therapy.
`,

  safetyInformation: `
Patients With Severe Hepatic Or Renal Impairment

Caution should be exercised when TEMOLOZ capsules are administered to patients with severe hepatic or renal impairment.

Geriatrics

Caution should be exercised when treating elderly patients.

In newly diagnosed patients with glioblastoma multiforme the adverse event profile was similar in younger patients (<65 years) versus older patients (>65 years).

Laboratory Tests

For the concomitant treatment phase with RT, a complete blood count should be obtained weekly.

For the 28-day treatment cycles, a complete blood count should be obtained on Day 22 (21 days after the first dose).

Blood counts should be performed weekly until recovery if the ANC falls below 1.5 x 10⁹/L and the platelet count falls below 100 x 10⁹/L.

Carcinogenesis, Mutagenesis, And Impairment Of Fertility

Standard carcinogenicity studies were not conducted with temozolomide.

In rats treated with 200 mg/m² temozolomide on 5 consecutive days every 28 days for 3 cycles, mammary carcinomas were found.

Temozolomide was mutagenic in vitro in bacteria (Ames assay) and clastogenic in mammalian cells (human peripheral blood lymphocyte assays).

Reproductive function studies have not been conducted with temozolomide.

However, multicycle toxicology studies in rats and dogs have demonstrated testicular toxicity (syncytial cells/immature sperm and testicular atrophy).

Nursing Mothers

It is not known whether this drug is excreted in human milk.

Because many drugs are excreted in human milk and because of the potential for serious adverse reactions in nursing infants from TEMOLOZ Capsules, patients receiving TEMOLOZ should discontinue nursing.

Pediatric Use

TEMOLOZ effectiveness in children has not been demonstrated.

The TEMOLOZ toxicity profile in children is similar to adults.
`,

  specialPrecautions: `
Elderly Patients (>70 Years Of Age)

Elderly patients appear to be at increased risk of neutropenia and thrombocytopenia compared with younger patients.

Therefore, special care should be taken when TMZ is administered in elderly patients.

Female Patients

Women of childbearing potential have to use effective contraception to avoid pregnancy while they are receiving TMZ, and for at least 6 months following completion of treatment.

Male Patients

Men being treated with TMZ should be advised not to father a child for at least 3 months after receiving the last dose and to seek advice on cryoconservation of sperm prior to treatment.
`,
},
{
  id: 41,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zabiteron",
  name: "Zabiteron",
  subtitle: "Abiraterone Acetate Tab",
  type: "Tablet",

  image: "/products/zabiteron250-1.png",

  images: [
    "/products/zabiteron250-1.png",
    "/products/zabiteron250-2.png",
    "/products/zabiteron250-3.png",
    "/products/zabiteron500-1.png",
    "/products/zabiteron500-2.png"
  ],

  strength: "250 mg",
  packSize: "1 x 120",
  drugClass: "Endocrine Therapy",

  dosage: `
Recommended Dosage

The recommended dose of Abiraterone Acetate is 1,000 mg (four 250 mg tablets) administered orally once daily in combination with prednisone 5 mg administered orally twice daily.

Administration

Abiraterone Acetate must be taken on an empty stomach.

No food should be consumed for at least two hours before the dose of Abiraterone Acetate is taken and for at least one hour after the dose of Abiraterone Acetate is taken.

The tablets should be swallowed whole with water.

Do not crush or chew tablets.

Dose Modifications

Hepatic Impairment

• In patients with mild hepatic impairment (Child-Pugh Class A): No dose modification.

• In patients with moderate hepatic impairment (Child-Pugh Class B): Use with caution in patients with hepatic impairment. Dose should be reduced to 250 mg PO once daily.

• In patients with severe hepatic impairment (Child-Pugh Class C): Should be avoided.

• For patients who develop increases in liver enzymes above 5 times the upper limit of normal (ULN) or total bilirubin >3 times ULN during treatment, abiraterone therapy should be interrupted, and only restarted at a dose of 500 mg once these values have fallen to acceptable levels (baselines or no more than half the increased values above).

• If hepatotoxicity recurs at the reduced dose of 500 mg daily, treatment with Abiraterone should be discontinued.

• If patients develop increases in enzymes 20 times the ULN at any time while on therapy, abiraterone should be stopped permanently.

• In patients who develop severe hepatotoxicity: Abiraterone should be discontinued.

Renal Impairment

• No dosage modifications are necessary.

Clinical Studies

Abiraterone has been adequately studied for its efficacy in different settings, such as patients with metastatic castration-resistant prostate cancer (CRPC) that has progressed on androgen deprivation therapy, patients with metastatic CRPC who had not received prior chemotherapy, as well as patients with metastatic high-risk Castration Sensitive Prostate cancer (CSPC).

The results of several phase III clinical trials demonstrated Abiraterone to significantly prolong the overall survival and progression free survival along with a high PSA response rate as compared to placebo.

Monitoring Parameters

• Monitor patients for hypertension, hypokalaemia and fluid retention at least once a month.

• Monitor for symptoms and signs of adrenocortical insufficiency, particularly if patients are withdrawn from prednisone, have prednisone dose reductions or experience unusual stress.

• Monitor LFTs – serum transaminases (ALT and AST) and serum bilirubin levels prior to starting treatment with Abiraterone, every two weeks for the first three months of treatment and monthly thereafter.

• Monitor Prostate-specific antigen (PSA).
`,

  coldStorage: "No",

  description: `
Abiraterone acetate, the active ingredient, is the acetyl ester of abiraterone.

Abiraterone is an inhibitor of CYP17 (17α-hydroxylase/C17,20-lyase).

Each tablet contains 250 mg of abiraterone acetate.

Abiraterone acetate is designated chemically as (3β)17-(3-pyridinyl) androsta-5,16-dien-3-yl acetate.

Abiraterone acetate is a micronised (smaller particle size), white to off-white, non-hygroscopic, crystalline powder.

Its molecular formula is C₂₆H₃₃NO₂, and it has a molecular weight of 391.55.

Abiraterone acetate is a lipophilic compound with an octanol-water partition coefficient of 5.12 (Log P) and is practically insoluble in water.

The pKa of the aromatic nitrogen is 5.19.

Inactive ingredients in the tablets are:

• Lactose monohydrate
• Microcrystalline cellulose
• Croscarmellose sodium
• Sodium lauryl sulfate
• Sodium stearyl fumarate
• Butylated hydroxyanisole
• Butylated hydroxytoluene
`,

  indication: `
A CYP17 inhibitor, Abiraterone in combination with prednisone is indicated for the treatment of patients with:

• Metastatic castration-resistant prostate cancer (CRPC)

• Metastatic high-risk castration-sensitive prostate cancer (CSPC)

Usage

Abiraterone is used in combination with prednisone to treat a certain type of prostate cancer that has spread to other parts of the body.

Abiraterone is in a class of medications called androgen biosynthesis inhibitors.

It works by decreasing the amount of certain hormones in the body.
`,

  clinicalEfficacy: `
The pooled analysis reported abiraterone acetate showed significant efficacy in high-risk prostate cancer patients, including:

• Overall survival (OS) [HR 0.66, 95% confidence interval (CI), 0.61–0.73, P < 0.001]

• Time to prostate-specific antigen (PSA) progression (HR 0.45, 95% CI, 0.34–0.59, P < 0.001)

• Progression-free survival (PFS) according to radiographic evidence (HR 0.55, 95% CI, 0.45–0.68, P < 0.001)

• PSA response rate (RR 2.49, 95% CI, 1.47–4.22, P < 0.001)

A subgroup analysis was carried out due to the significant heterogeneity between the studies.

The incidence of:

• Arthralgia (RR 1.19)
• Hypokalaemia (RR 2.47)
• Cardiac disorder (RR 1.48)
• Hypertension (RR 1.57)

in the abiraterone acetate group was moderately higher than the control group.
`,

  safetyInformation: `
Hypertension, Hypokalaemia and Fluid Retention

Due to mineralocorticoid excess, abiraterone acetate may cause hypertension, hypokalaemia, and fluid retention as a consequence of increased mineralocorticoid levels resulting from CYP17 inhibition.

Adrenocortical Insufficiency

Adrenocortical insufficiency was reported in patients receiving Abiraterone acetate in combination with prednisone, following interruption of daily steroids and/or with concurrent infection or stress.

Use caution and monitor for symptoms and signs of adrenocortical insufficiency, particularly if patients are withdrawn from prednisone, have prednisone dose reductions, or experience unusual stress.

Hepatotoxicity

In the two randomized clinical trials, grade 3 or 4 ALT or AST increases (at least 5× ULN) were reported in 4% of patients who received Abiraterone acetate, typically during the first 3 months after starting treatment.

Patients whose baseline ALT or AST were elevated were more likely to experience liver test elevation than those beginning with normal values.

Treatment discontinuation due to liver enzyme increases occurred in 1% of patients taking Abiraterone acetate.

No deaths clearly related to Abiraterone acetate were reported due to hepatotoxicity events.

• Abiraterone acetate inhibits the enzyme CYP17, which can result in mineralocorticoid excess, very often leading to hypertension, hypokalemia, and fluid retention or oedema; patients should be monitored at least monthly for these effects and treated appropriately.

• Use with a glucocorticoid can reduce the incidence and severity of these adverse effects.

• Adrenocortical insufficiency has been reported in those treated with abiraterone acetate plus prednisone or prednisolone and patients should be monitored for manifestations of this, particularly after withdrawal from the corticosteroid.

• Caution is needed when treating patients with heart failure, recent myocardial infarction, ventricular arrhythmia, or with any underlying medical conditions which are likely to be adversely affected by mineralocorticoid effects.

• Cardiac disorders are common with abiraterone acetate and include cardiac failure, chest pain, angina pectoris, arrhythmias, atrial fibrillation and tachycardia.

• Hepatotoxicity can occur, and treatment may need to be stopped or the dose adjusted.

• Serum transaminases and bilirubin levels should be measured before starting treatment, then every two weeks for the first three months and monthly thereafter.

• Abiraterone Acetate should not be taken with food and no food should be consumed for at least two hours before the dose of Abiraterone Acetate is taken and for at least one hour after the dose of Abiraterone Acetate is taken.

• Taking Abiraterone Acetate with food causes increased exposure and this may result in adverse reactions.
`,

  specialPrecautions: `
Pregnancy Category

Abiraterone Acetate can cause fetal harm when administered to a pregnant woman based on its mechanism of action and findings in animals.

While there are no adequate and well-controlled studies with Abiraterone Acetate in pregnant women and Abiraterone Acetate is not indicated for use in women, it is important to know that maternal use of a CYP17 inhibitor could affect development of the fetus.

Abiraterone acetate caused developmental toxicity in pregnant rats at exposures that were lower than in patients receiving the recommended dose.

Nursing Mothers

Abiraterone Acetate is not indicated for use in women.

It is not known if abiraterone acetate is secreted in human milk.

Because many drugs are secreted in human milk, and because of the potential for serious adverse reactions in nursing infants from Abiraterone Acetate, caution is necessary for use of this drug in nursing mothers.

Pediatric Use

Safety and effectiveness of Abiraterone Acetate in pediatric patients have not been established.

Geriatric Use

Of the total number of patients receiving Abiraterone Acetate in Phase 3 trials, 73% of patients were 65 years and over and 30% were 75 years and over.

No overall differences in safety or effectiveness were observed between these elderly patients and younger patients.

Other reported clinical experience has not identified differences in responses between the elderly and younger patients, but greater sensitivity of some older individuals cannot be ruled out.
`,
},
{
  id: 42,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zimitib",
  name: "Zimitib",
  subtitle: "Imatinib Cap 100 mg",
  type: "Capsule",

  image: "/products/zimitib100-1.png",

  images: [
    "/products/zimitib100-1.png",
    "/products/zimitib100-2.png",
    "/products/zimitib100-3.png",
    "/products/zimitib400-1.png",
    "/products/zimitib400-2.png",
  ],

  strength: "100 mg",
  packSize: "1 x 10",
  drugClass: "Protein-Tyrosine Kinase Inhibitor",

  dosage: `
The prescribed dose should be administered orally, with a meal and a large glass of water.

Doses of 400 mg or 600 mg should be administered once daily, whereas a dose of 800 mg should be administered as 400 mg twice a day.

Treatment may be continued as long as there is no evidence of progressive disease or unacceptable toxicity.

Adult Patients with Ph+ CML CP, AP and BC

The recommended dose of Zimitib is 400 mg/day for adult patients in chronic phase CML and 600 mg/day for adult patients in accelerated phase or blast crisis.

In CML, a dose increase from 400 mg to 600 mg in adult patients with chronic phase disease, or from 600 mg to 800 mg (given as 400 mg twice daily) in adult patients in accelerated phase or blast crisis may be considered in the absence of severe adverse drug reaction and severe non-leukemia related neutropenia or thrombocytopenia in the following circumstances:

• Disease progression (at any time)
• Failure to achieve a satisfactory hematologic response after at least 3 months of treatment
• Failure to achieve a cytogenetic response after 6-12 months of treatment
• Loss of a previously achieved hematologic or cytogenetic response

Pediatric Patients with Ph+ CML

The recommended dose of Zimitib for children with newly diagnosed Ph+ CML is 340 mg/m²/day (not to exceed 600 mg).

The recommended Zimitib dose is 260 mg/m²/day for children with Ph+ chronic phase CML recurrent after stem cell transplant or who are resistant to interferon-alpha therapy.

Ph+ ALL

The recommended dose of Zimitib is 600 mg/day for adult patients with relapsed/refractory Ph+ ALL.

Kit+ Gastrointestinal Stromal Tumors (GIST)

The recommended dose of Zimitib is 400 mg/day or 600 mg/day for adult patients with unresectable and/or metastatic malignant GIST.

Dose Modification Guidelines

Concomitant Strong CYP3A4 Inducers

The use of concomitant strong CYP3A4 inducers should be avoided (e.g. dexamethasone, phenytoin, carbamazepine, rifampin, rifabutin, rifapentine, phenobarbital).

If patients must be co-administered a strong CYP3A4 inducer, based on pharmacokinetic studies, the dosage of Zimitib should be increased by at least 50%, and clinical response should be carefully monitored.

Hepatic Impairment

Patients with mild and moderate hepatic impairment do not require a dose adjustment and should be treated as per the recommended dose.

A 25% decrease in the recommended dose should be used for patients with severe hepatic impairment.

Dose Adjustment for Hepatotoxicity and Non-Hematologic Adverse Reactions

If elevations in bilirubin >3× institutional upper limit of normal (IULN) or in liver transaminases >5× IULN occur, Zimitib should be withheld until bilirubin levels have returned to <1.5 × IULN and transaminase levels to <2.5 × IULN.

In adults treatment with Zimitib may then be continued at a reduced daily dose:

• 400 mg to 300 mg
• 600 mg to 400 mg
• 800 mg to 600 mg

In children, daily doses can be reduced under the same circumstances from 340 mg/m²/day to 260 mg/m²/day or from 260 mg/m²/day to 200 mg/m²/day, respectively.

If a severe non-hematologic adverse reaction develops (such as severe hepatotoxicity or severe fluid retention), Zimitib should be withheld until the event has resolved.

Thereafter, treatment can be resumed as appropriate depending on the initial severity of the event.
`,

  coldStorage: "No",

  description: `
Imatinib is a small molecule kinase inhibitor.

Gleevec film-coated tablets contain imatinib mesylate equivalent to 100 mg or 400 mg of imatinib free base.

Imatinib mesylate is designated chemically as:

4-[(4-Methyl-1-piperazinyl)methyl]-N-[4-methyl-3-[[4-(3-pyridinyl)-2-pyrimidinyl]amino]-phenyl]benzamide methanesulfonate.

Imatinib mesylate is a white to off-white to brownish or yellowish tinged crystalline powder.

Its molecular formula is C₂₉H₃₁N₇O • CH₄SO₃ and its molecular weight is 589.7.

Imatinib mesylate is soluble in aqueous buffers less than or equal to pH 5.5 but is very slightly soluble to insoluble in neutral/alkaline aqueous buffers.

In non-aqueous solvents, the drug substance is freely soluble to very slightly soluble in dimethyl sulfoxide, methanol, and ethanol, but is insoluble in n-octanol, acetone, and acetonitrile.
`,

  indication: `
Patients with Philadelphia chromosome positive chronic myeloid leukemia in blast crisis, accelerated phase, or in chronic phase after failure of interferon-alpha therapy.

Pediatric patients with Ph+ CML in chronic phase.

Adult patients with relapsed or refractory Philadelphia chromosome positive acute lymphoblastic leukemia (Ph+ Acute Lymphoblastic Leukemia (ALL)).

Patients with Kit (CD117) positive unresectable and/or metastatic malignant gastrointestinal stromal tumors (Kit+ Gastrointestinal Stromal Tumors (GIST)).
`,

  clinicalEfficacy: `
With imatinib, the management of chronic myeloid leukemia (CML) has changed considerably.

Tyrosine kinase inhibitors (TKIs) are the mainstay of CML treatment; however, the high financial burden of TKIs can be problematic for both the patients and health care systems.

After the emergence of generics, reimbursement policies of many countries have changed, and generics offered an alternative treatment option for CML patients.

There are many papers published on the use of generics in CML patients with conflicting results regarding both efficacy and safety.

In this paper, we systematically reviewed the current literature on generic imatinib use in CML, and 36 papers were evaluated.

Both in vitro and in vivo studies of generic imatinib showed comparable results with branded imatinib in terms of bioequivalence and bioavailability.

In most studies, generics were comparable with the original molecule in terms of efficacy and safety, both in newly diagnosed patients and after switching from Gleevec.

Some generic studies showed contradictory findings regarding efficacy and toxicity, and these differences can be attributed to some factors including the use of different generics in different countries.

Both in hypothetical models and in real life, introduction of generic imatinib caused significant reduction in health care costs.

In conclusion, generics are not inferior to original imatinib in terms of efficacy with an acceptable toxicity profile.

Notwithstanding the generally favorable efficacy and safety of generics worldwide to date, we most probably still need more time to draw firmer conclusions on the longer-term outcomes of generics.
`,

  safetyInformation: `
• Read the label carefully before use.

• Keep out of the reach of children.
`,

  specialPrecautions: `
Pregnancy

Pregnancy Category D:

Women of childbearing potential should be advised to avoid becoming pregnant while taking Zimitib.

If the patient becomes pregnant while taking this drug, the patient should be apprised of the potential hazard to the fetus.

Fluid Retention and Edema

Zimitib is often associated with edema and occasionally serious fluid retention.

Patients should be weighed and monitored regularly for signs and symptoms of fluid retention.

An unexpected rapid weight gain should be carefully investigated and appropriate treatment provided.

The probability of edema was increased with higher Zimitib dose and age >65 years in the CML patients.

Severe superficial edema and severe fluid retention (pleural effusion, pulmonary edema and ascites) were reported in 1% - 6% of patients taking Zimitib for GIST.

Hematologic Toxicity

Treatment with Zimitib is associated with anemia, neutropenia, and thrombocytopenia.

Complete blood counts should be performed weekly for the first month, biweekly for the second month, and periodically thereafter as clinically indicated (for example, every 2-3 months).

In CML, the occurrence of these cytopenias is dependent on the stage of disease and is more frequent in patients with accelerated phase CML or blast crisis than in patients with chronic phase CML.

In pediatric CML patients the most frequent toxicities observed were grade 3 or 4 cytopenias including neutropenia, thrombocytopenia and anemia.

These generally occur within the first several months of therapy.

Severe Congestive Heart Failure and Left Ventricular Dysfunction

Severe congestive heart failure and left ventricular dysfunction have occasionally been reported in patients taking Zimitib.

Most of the patients with reported cardiac reactions have had other co-morbidities and risk factors, including advanced age and previous medical history of cardiac disease.

Hepatotoxicity

Hepatotoxicity, occasionally severe, may occur with Zimitib.

Liver function (transaminases, bilirubin, and alkaline phosphatase) should be monitored before initiation of treatment and monthly or as clinically indicated.

Laboratory abnormalities should be managed with interruption and/or dose reduction of the treatment with Zimitib.

Haemorrhage

In CML patients 1.8% of patients had Grade 3/4 hemorrhage.

In GIST patients, seven patients (5%), four in the 600 mg dose group and three in the 400 mg dose group, had a total of eight reactions of CTC Grade 3/4 gastrointestinal (GI) bleeds (3 patients), intra-tumoral bleeds (3 patients) or both (1 patient).

Gastrointestinal tumor sites may have been the source of GI bleeds.

Gastrointestinal Disorders

Zimitib is sometimes associated with GI irritation.

Zimitib should be taken with food and a large glass of water to minimize this problem.

There have been rare reports, including fatalities, of gastrointestinal perforation.

In patients with hypereosinophilic syndrome and cardiac involvement, cases of cardiogenic shock/left ventricular dysfunction have been associated with the initiation of imatinib therapy.

The condition was reported to be reversible with the administration of systemic steroids, circulatory support measures and temporary withholding imatinib.

Dermatologic Toxicities

Bullous dermatologic reactions, including erythema multiforme and Stevens–Johnson syndrome, have been reported with use of Zimitib.

Carcinogenesis, Mutagenesis, Impairment of Fertility

Human studies on male patients receiving Zimitib and its effect on male fertility and spermatogenesis have not been performed.

Male patients concerned about their fertility on Zimitib treatment should consult with their physician.

Nursing Mothers

It is not known whether imatinib mesylate or its metabolites are excreted in human milk.

A decision should be made whether to discontinue nursing or to discontinue the drug, taking into account the importance of the drug to the mother.

Pediatric Use

Zimitib safety and efficacy have been demonstrated in children with newly diagnosed Ph+ chronic phase CML and in children with Ph+ chronic phase CML with recurrence after stem-cell transplantation or resistance to interferon-alpha therapy.

Geriatric Use

No difference was observed in the safety profile in patients older than 65 years as compared to younger patients, with the exception of a higher frequency of edema.

The efficacy of Zimitib was similar in older and younger patients.

Hepatic Impairment

The effect of hepatic impairment on the pharmacokinetics of both imatinib and its major metabolite, CGP74588, was assessed in 84 cancer patients with varying degrees of hepatic impairment at Imatinib doses ranging from 100-800 mg.

Exposure to both imatinib and CGP74588 was comparable between each of the mildly and moderately hepatically-impaired groups and the normal group.

Patients with severe hepatic impairment tend to have higher exposure to both imatinib and its metabolite than patients with normal hepatic function.

At steady state the mean Cmax/dose and AUC/dose for imatinib increased by about 63% and 45% respectively, in patients with severe hepatic impairment compared to patients with normal hepatic function.

The mean Cmax/dose and AUC/dose for CGP74588 increased by about 56% and 55%, respectively, in patients with severe hepatic impairment compared to patients with normal hepatic function.

Renal Impairment

No clinical studies were conducted with Zimitib in patients with decreased renal function (studies excluded patients with serum creatinine concentration more than 2 times the upper limit of the normal range).
`,
},
{
  id: 43,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zixib",
  name: "Zixib",
  subtitle: "Axitinib Tab",
  type: "Tablet",

  image: "/products/zixib1-1.png",

  images: [
    "/products/zixib1-1.png",
    "/products/zixib1-2.png",
    "/products/zixib5-1.png",
    "/products/zixib5-2.png",
    "/products/zixib5-3.png",
   
  ],

  strength: "1 mg / 5 mg",
  packSize: "1 x 14",
  drugClass: "Antineoplastics, Tyrosine Kinase Inhibitor",

  dosage: `
Recommended Dosing

First-Line Advanced RCC

The recommended dose of AXITINIB is 5 mg orally taken twice daily (12 hours apart) with or without food in combination with avelumab 800 mg administered as an intravenous infusion over 60 minutes every 2 weeks until disease progression or unacceptable toxicity.

When AXITINIB is used in combination with avelumab, dose escalation of AXITINIB above the initial 5 mg dose may be considered at intervals of two weeks or longer.

The recommended dose of AXITINIB is 5 mg orally twice daily (12 hours apart) with or without food in combination with pembrolizumab 200 mg every 3 weeks or 400 mg every 6 weeks administered as an intravenous infusion over 30 minutes until disease progression or unacceptable toxicity.

When AXITINIB is used in combination with pembrolizumab, dose escalation of AXITINIB above the initial 5 mg dose may be considered at intervals of six weeks or longer.

Second-Line Advanced RCC

When AXITINIB is used as a single agent, the recommended starting oral dose is 5 mg twice daily.

Administer AXITINIB doses approximately 12 hours apart with or without food.

Important Administration Instructions

Advise patients to swallow AXITINIB whole with a full glass of water.

If the patient vomits or misses a dose, an additional dose should not be taken.

Advise the patient to take the next prescribed dose at the usual time.
`,

  coldStorage: "No",

  description: `
Axitinib is a kinase inhibitor.

Axitinib has the chemical name:

N-methyl-2-[3-((E)-2-pyridin-2-yl-vinyl)-1H-indazol-6-ylsulfanyl]-benzamide.

The molecular formula is C₂₂H₁₈N₄OS, and the molecular weight is 386.47 Daltons.

Axitinib is a white to light-yellow powder with a pKa of 4.8.

The solubility of axitinib in aqueous media over the range pH 1.1 to pH 7.8 is in excess of 0.2 μg/mL.

The partition coefficient (n-octanol/water) is 3.5.
`,

  indication: `
First-Line Advanced Renal Cell Carcinoma

Axitinib in combination with avelumab is indicated for the first-line treatment of patients with advanced renal cell carcinoma (RCC).

Axitinib in combination with pembrolizumab is indicated for the first-line treatment of patients with advanced renal cell carcinoma.

Second-Line Advanced Renal Cell Carcinoma

Axitinib as a single agent is indicated for the treatment of advanced renal cell carcinoma (RCC) after failure of one prior systemic therapy.
`,

  clinicalEfficacy: `
The safety and efficacy of axitinib were evaluated in a randomised, open-label, multicentre Phase 3 study.

Patients (N = 723) with advanced RCC whose disease had progressed on or after treatment with one prior systemic therapy, including sunitinib-, bevacizumab-, temsirolimus-, or cytokine-containing regimens, were randomised (1:1) to receive axitinib (N = 361) or sorafenib (N = 362).

The primary endpoint, progression-free survival (PFS), was assessed using a blinded independent central review.

Secondary endpoints included objective response rate (ORR) and overall survival (OS).

Of the patients enrolled in this study, 389 patients (53.8%) had received one prior sunitinib-based therapy, 251 patients (34.7%) had received one prior cytokine-based therapy (interleukin-2 or interferon-alpha), 59 patients (8.2%) had received one prior bevacizumab-based therapy, and 24 patients (3.3%) had received one prior temsirolimus-based therapy.

The baseline demographic and disease characteristics were similar between the axitinib and sorafenib groups with regard to age, gender, race, Eastern Cooperative Oncology Group (ECOG) performance status, geographic region, and prior treatment.

In the overall patient population and the two main subgroups (prior sunitinib treatment and prior cytokine treatment), there was a statistically significant advantage for axitinib over sorafenib for the primary endpoint of PFS.

The magnitude of the median PFS effect was different in the subgroups by prior therapy.

Two of the subgroups were too small to give reliable results (prior temsirolimus treatment or prior bevacizumab treatment).

There were no statistically significant differences between the arms in OS in the overall population or in the subgroups by prior therapy.
`,

  safetyInformation: `
Major toxicity findings in mice and dogs following repeated dosing for up to 9 months were the gastrointestinal, haematopoietic, reproductive, skeletal and dental systems, with No Observed Adverse Effect Levels (NOAEL) approximately equivalent to or below expected human exposure at the recommended clinical starting dose (based on AUC levels).

Carcinogenicity

Carcinogenicity studies have not been performed with axitinib.

Genotoxicity

Axitinib was not mutagenic or clastogenic in conventional genotoxicity assays in vitro.

A significant increase in polyploidy was observed in vitro at concentrations > 0.22 µg/mL, and an elevation in micronucleated polychromatic erythrocytes was observed in vivo with a no-observed-effect level (NOEL) 69-fold the expected human exposure.

Genotoxicity findings are not considered clinically relevant at exposure levels observed in humans.

Reproduction Toxicity

Axitinib-related findings in the testes and epididymis included decreased organ weight, atrophy or degeneration, decreased numbers of germinal cells, hypospermia or abnormal sperm forms, and reduced sperm density and count.

These findings were observed in mice at exposure levels approximately 12-fold the expected human exposure and in dogs at exposure levels below the expected human exposure.

There was no effect on mating or fertility in male mice at exposure levels approximately 57-fold the expected human exposure.

Findings in females included signs of delayed sexual maturity, reduced or absent corpora lutea, decreased uterine weights and uterine atrophy at exposures approximately equivalent to the expected human exposure.

Reduced fertility and embryonic viability were observed in female mice at all doses tested, with exposure levels at the lowest dose approximately 10-fold the expected human exposure.

Pregnant mice exposed to axitinib showed an increased occurrence of cleft palate malformations and skeletal variations, including delayed ossification, at exposure levels below the expected human exposure.

Perinatal and postnatal developmental toxicity studies have not been conducted.

Toxicity Findings In Immature Animals

Reversible physeal dysplasia was observed in mice and dogs given axitinib for at least 1 month at exposure levels approximately six-fold higher than the expected human exposure.

Partially reversible dental caries were observed in mice treated for more than 1 month at exposure levels similar to the expected human exposure.

Other toxicities of potential concern to paediatric patients have not been evaluated in juvenile animals.
`,

  specialPrecautions: `
Hypertension And Hypertensive Crisis

In a controlled clinical study with Axitinib for the treatment of patients with RCC, hypertension was reported in 145/359 patients (40%) receiving Axitinib and 103/355 patients (29%) receiving sorafenib.

Grade 3/4 hypertension was observed in 56/359 patients (16%) receiving Axitinib and 39/355 patients (11%) receiving sorafenib.

A hypertensive crisis was reported in 2/359 patients (<1%) receiving Axitinib and none of the patients receiving sorafenib.

The median onset time for hypertension (systolic blood pressure >150 mmHg or diastolic blood pressure >100 mmHg) was within the first month of the start of Axitinib treatment, and blood pressure increases have been observed as early as 4 days after starting Axitinib.

Blood pressure should be well-controlled prior to initiating Axitinib.

Patients should be monitored for hypertension and treated as needed with standard anti-hypertensive therapy.

Arterial Thromboembolic Events

In clinical trials, arterial thromboembolic events have been reported, including deaths.

Events reported included:

• Transient ischaemic attack
• Cerebrovascular accident
• Myocardial infarction
• Retinal artery occlusion

Use Axitinib with caution in patients who are at risk for, or who have a history of, these events.

Venous Thromboembolic Events

In clinical trials, venous thromboembolic events have been reported, including deaths.

Events reported included:

• Pulmonary embolism
• Deep vein thrombosis
• Retinal vein occlusion
• Retinal vein thrombosis

Use Axitinib with caution in patients who are at risk for, or who have a history of, these events.

Hemorrhage

Hemorrhagic events were reported in clinical studies.

Grade 3/4 haemorrhagic events included:

• Cerebral haemorrhage
• Haematuria
• Haemoptysis
• Lower gastrointestinal haemorrhage
• Melena

If any bleeding requires medical intervention, temporarily interrupt the Axitinib dose.

Cardiac Failure

Monitor for signs or symptoms of cardiac failure throughout treatment with Axitinib.

Management of cardiac failure may require permanent discontinuation of Axitinib.

Gastrointestinal Perforation And Fistula Formation

Gastrointestinal perforation and fistula formation have been reported.

Monitor for symptoms of gastrointestinal perforation or fistula periodically throughout treatment with Axitinib.

Thyroid Dysfunction

Monitor thyroid function before the initiation of, and periodically throughout, treatment with Axitinib.

Treat hypothyroidism and hyperthyroidism according to standard medical practice to maintain a euthyroid state.

Risk Of Impaired Wound Healing

Impaired wound healing can occur in patients who receive drugs that inhibit the vascular endothelial growth factor (VEGF) signalling pathway.

Withhold Axitinib for at least 2 days prior to elective surgery.

Do not administer for at least 2 weeks following major surgery and until adequate wound healing occurs.

Reversible Posterior Leukoencephalopathy Syndrome

RPLS is a neurological disorder which can present with:

• Headache
• Seizure
• Lethargy
• Confusion
• Blindness
• Other visual and neurological disturbances

Magnetic resonance imaging is necessary to confirm the diagnosis of RPLS.

Discontinue Axitinib in patients developing RPLS.

Proteinuria

Monitoring for proteinuria before initiation of, and periodically throughout, treatment with Axitinib is recommended.

For patients who develop moderate-to-severe proteinuria, reduce the dose or temporarily interrupt Axitinib treatment.
`,
},
{
  id: 44,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zupanib",
  name: "Zupanib",
  subtitle: "Pazopanib Tab",
  type: "Tablet",

  image: "/products/zupanib200-1.png",

  images: [
    "/products/zupanib200-1.png",
    "/products/zupanib200-2.png",
    "/products/zupanib200-3.png",
    
  ],

  strength: "200 mg / 400 mg",
  packSize: "1 x 30",
  drugClass: "Tyrosine Kinase Inhibitors",

  dosage: `
Recommended Dosage

The recommended dosage of Zupanib is 200 mg / 400 mg orally once daily without food (at least 1 hour before or 2 hours after a meal) until disease progression or unacceptable toxicity.

The dosage should be modified for hepatic impairment and in patients taking certain concomitant drugs.

Swallow tablets whole.

Do not crush tablets due to the potential for increased rate of absorption, which may affect systemic exposure.

If a dose is missed, it should not be taken if it is <12 hours until the next dose.
`,

  coldStorage: "No",

  description: `
Zupanib Tab (pazopanib) is a tyrosine kinase inhibitor (TKI).

Pazopanib is presented as the hydrochloride salt, with the chemical name:

5-[[4-[(2,3-dimethyl-2H-indazol-6-yl)methylamino]-2-pyrimidinyl]amino]-2-methylbenzenesulfonamide monohydrochloride.

It has the molecular formula C₂₁H₂₃N₇O₂S•HCl and a molecular weight of 473.99.

Pazopanib hydrochloride is a white to slightly yellow solid.

It is very slightly soluble at pH 1 and practically insoluble above pH 4 in aqueous media.

Tablets of Zupanib Tab are for oral administration.

Each 200-mg tablet contains 216.7 mg of pazopanib hydrochloride, equivalent to 200 mg of pazopanib free base.
`,

  indication: `
Renal Cell Carcinoma

Zupanib is indicated for the treatment of adults with advanced renal cell carcinoma (RCC).

Soft Tissue Sarcoma

Zupanib is indicated for the treatment of adults with advanced soft tissue sarcoma (STS) who have received prior chemotherapy.

Limitations Of Use

The efficacy of Zupanib for the treatment of patients with adipocytic STS or gastrointestinal stromal tumors has not been demonstrated.

Usage

Pazopanib is a cancer medicine that is used to treat patients with kidney cancer (advanced renal cell carcinoma).

It is also used to treat advanced soft tissue sarcoma (STS) in patients who have received other cancer treatments.
`,

  clinicalEfficacy: `
Pazopanib is a multi-tyrosine kinase inhibitor of:

• Vascular endothelial growth factor receptor (VEGFR)-1
• VEGFR-2
• VEGFR-3
• Platelet-derived growth factor receptor (PDGFR)-α and -β
• Fibroblast growth factor receptor (FGFR)-1 and -3
• Cytokine receptor (Kit)
• Interleukin-2 receptor-inducible T-cell kinase (Itk)
• Lymphocyte-specific protein tyrosine kinase (Lck)
• Transmembrane glycoprotein receptor tyrosine kinase (c-Fms)

In vitro, pazopanib inhibited ligand-induced autophosphorylation of VEGFR-2, Kit, and PDGFR-β receptors.

In vivo, pazopanib inhibited VEGF-induced VEGFR-2 phosphorylation in mouse lungs, angiogenesis in a mouse model, and the growth of some human tumor xenografts in mice.
`,

  safetyInformation: `
If you are allergic to pazopanib or any of the other ingredients.

Tell your doctor if you have or have ever had liver disease.

If you experience any of the following symptoms, call your doctor immediately:

• Yellowing of the skin or eyes
• Dark urine
• Extreme tiredness
• Nausea
• Vomiting
• Loss of appetite
• Pain in the upper right part of the stomach
• Unusual bleeding or bruising
`,

  specialPrecautions: `
Before taking Pazopanib, inform your doctor:

• If you have heart disease, including irregular heartbeat, angina, or high blood pressure.

• If you have liver disease or abnormal liver function tests, as severe hepatotoxicity may occur during treatment.

• If you have a history of heart failure, heart attack, or other significant cardiovascular disorders.

• If you have previously experienced a collapsed lung (pneumothorax).

• If you have bleeding disorders, blood clots, or narrowing/blockage of arteries.

• If you have gastrointestinal disorders, including perforation (hole in the stomach or intestine) or fistula formation.

• If you have thyroid dysfunction, as hypothyroidism may occur during treatment.

• If you have impaired kidney function or kidney disease.

• If you have or have had an aneurysm (enlargement and weakening of a blood vessel wall) or are at risk of arterial dissection.

• If you are scheduled for surgery, as Pazopanib may impair wound healing and treatment interruption may be required.

• If you develop symptoms such as severe headache, chest pain, shortness of breath, abdominal pain, or sudden swelling, seek immediate medical attention.

Regular monitoring of liver function, blood pressure, thyroid function, and cardiac status is recommended during Pazopanib therapy.
`,
},
{
  id: 45,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zutam",
  name: "Zutam",
  subtitle: "Tamoxifen Tab 20 mg",
  type: "Tablet",

  image: "/products/zutam20-1.png",

  images: [
    "/products/zutam20-1.png",
    "/products/zutam20-2.png",
    "/products/zutam20-3.png",
  ],

  strength: "20 mg",
  packSize: "1 x 10",
  drugClass: "Antiestrogens",

  dosage: `
Tamoxifen is administered orally.

Breast Cancer

Adjuvant Therapy

When Tamoxifen is used alone as an adjunct to surgery and radiation therapy in the treatment of breast cancer, the usual dosage of the drug is 20-40 mg daily.

Dosages exceeding 20 mg daily should be given in divided doses (morning and evening).

There is no evidence that higher dosages are necessary.

The optimum duration of adjuvant Tamoxifen therapy has not been established, but therapy for about 5 years is more effective than shorter courses of therapy.

Longer therapy (i.e., beyond 5 years) with Tamoxifen is not recommended for routine use in women with node-negative breast cancer.

When Tamoxifen is use in combination with chemotherapy as an adjunct to surgery in the treatment of breast cancer in postmenopausal women or in women 50 years of age or older who have positive axillary lymph nodes, the usual dosage of the drug is 10 mg twice daily.

The optimum duration of adjuvant Tamoxifen therapy has not been established.

Metastatic Breast Cancer

For the treatment of metastatic breast cancer in women, the usual dosage of Tamoxifen is 20-40 mg daily.

Dosages exceeding 20 mg daily should be given in divided doses (morning and evening).

Because there does not appear to be any significant difference in response rates with the two dosages, most clinicians believe that 20 mg daily usually should be used initially.

If an objective response to the drug occurs, it usually is evident within 4-10 weeks; however, several months of therapy may be required before an objective response occurs in patients with bone metastases.

Reduction In The Incidence Of Breast Cancer In Women At High Risk

For reduction in the incidence of breast cancer in women at high risk, the recommended dosage of Tamoxifen is 20 mg daily.

Because of negative findings and a lack of additional benefit associated with more prolonged therapy with the drug as an adjuvant in the treatment of breast cancer, a 5-year duration of Tamoxifen therapy currently is being recommended for the prevention of breast cancer in women at high risk of the disease.

Male Breast Cancer

For the treatment of advanced (metastatic) breast cancer in men, the usual dosage of Tamoxifen is 20-40 mg daily.

Dosages exceeding 20 mg daily should be given in divided doses (morning and evening).

When Tamoxifen alone or in combination with radiation therapy was used as an adjunct to surgery in the treatment of breast cancer in men, a Tamoxifen dosage of 20 mg daily was used, usually for 1-2 years.

The optimum duration of adjuvant Tamoxifen therapy has not been established; however, since adjuvant therapy of about 5 years appears to be more effective than shorter courses of therapy in women with breast cancer, some clinicians suggest the same prolonged Tamoxifen course for male patients.

Other Uses

To stimulate ovulation, 5-40 mg of Tamoxifen has been administered twice daily for 4 days.
`,

  coldStorage: "No",

  description: `
Tamoxifen, a nonsteroidal antiestrogen, is a triphenylethylene derivative with both estrogen antagonist on breast tissue and in the CNS and as an estrogen agonist on endometrium, bone and lipids.

Tamoxifen and at least several of its metabolites compete with estradiol for binding to cytyplasmic estrogen receptors in tissues such as breast, uterus, vagina, anterior pituitary, and tumors containing high concentrations of estrogen receptors.
`,

  indication: `
Tamoxifen is used alone as an adjunct to surgery and radiation therapy for the treatment of breast cancer in women with negative axilliary lymph nodes and in postmenopausal women with positive axillary lymph nodes.

Adjuvant Tamoxifen therapy reduces the occurrence of contralateral breast cancer in premenopausal or postmenopausal women with breast cancer.

Tamoxifen has been used to stimulate ovulation in appropriately selected anovulatory women desiring pregnancy, especially in those with oligomenorrhoea or amenorrhoea who were previously receiving oral contraceptives.

Limited data also suggest that an occasional patient with a malignant carcinoid tumour and carcinoid syndrome may have a beneficial response to Tamoxifen.
`,

  clinicalEfficacy: `
Tamoxifen therapy prolongs disease-free survival and reduces mortality in premenopausal, postmenopausal, node-positive, and node-negative patients.

Positive objective responses are more frequent in patients with estrogen receptor-positive tumors.

The role of tamoxifen in combination with chemotherapy needs to be further clarified with respect to the optimal regimen, sequential vs concomitant therapy, and appropriate patient selection.

While the optimum duration of tamoxifen therapy has not yet been established, tamoxifen remains a major therapeutic agent in the medical management of breast cancer.
`,

  safetyInformation: `
Pregnancy

Women who are pregnant or who plan to become pregnant should not use Tamoxifen to reduce the risk of breast cancer.

Nursing Mother

It is not known if Tamoxifen is distributed into milk.

Because of the potential for serious adverse reactions to Tamoxifen in nursing infants, a decision should be made whether to discontinue nursing or the drug, taking into account the importance of the drug to the woman.

Pediatric Use

Safety and efficacy of Tamoxifen in pediatric patients have not been established.
`,

  specialPrecautions: `
Do not breastfeed while using tamoxifen, and for at least 3 months after your last dose.

This medicine is not approved for use by anyone younger than 18 years old.
`,
},
{
  id: 46,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zuviphos",
  name: "Zuviphos",
  subtitle: "Cyclophosphamide 50 mg",
  type: "Tablet",

  image: "/products/zuviphos50-1.png",

  images: [
    "/products/zuviphos50-1.png",
    "/products/zuviphos50-2.png",
    "/products/zuviphos50-3.png",
  ],

  strength: "50 mg",
  packSize: "1 x 10",
  drugClass: "Antineoplastic",

  dosage: `
Dosage Forms and Strengths

Powder for injection 50 mg

Dosage Considerations – Should be Given as Follows:

Malignant Diseases

Adult and Pediatric

Intravenous (IV) (intermittent therapy):
40-50 mg/kg (400-1800 mg/m²) divided over 2-5 days; may be repeated at intervals of 2-4 weeks.

IV (continuous daily therapy):
60-120 mg/m²/day (1-2.5 mg/kg/day).

Oral (intermittent therapy):
400-1000 mg/m² divided over 4-5 days.

Oral (continuous daily therapy):
50-100 mg/m²/day or 1-5 mg/kg/day.

Nephrotic Syndrome

2-3 mg/kg/day for up to 12 weeks when corticosteroids unsuccessful.

Non-Hodgkin Lymphoma

600-1500 mg/m² intravenously (IV) with other antineoplastics (part of CHOP regimen); dose intensification possible.

Breast Cancer

600 mg/m² intravenously (IV) with other antineoplastics; dose intensification possible.

Systemic Lupus Erythematosus, Pediatric

500-750 mg/m² intravenously (IV) monthly; not to exceed 1 g/m².

Juvenile Idiopathic Arthritis/Vasculitis (Off-label)

10 mg/kg intravenously (IV) every 2 weeks.

Lupus Nephritis (Off-Label)

Induction therapy for lupus nephritis (American College of Rheumatology Guidelines 2012)

Low-dose:
500 mg intravenously (IV) every 2 weeks for 6 doses plus corticosteroids, then maintenance with mycophenolate mofetil or azathioprine.

High-dose:
500-1000 mg/m² IV monthly for 6 doses plus corticosteroids.

Dosing Modifications

Hepatic impairment:
Give 75% of normal dose if transaminase levels are greater than 3 times upper limit of normal (ULN) or bilirubin is 3.1-5 mg/dL.

Renal impairment:
CrCl less than 10 mL/minute, give 75% of normal dose.

CrCl greater than 10 mL/minute, give full dose.
`,

  coldStorage: "No",

  description: `
Zuviphos (cyclophosphamide) is a synthetic antineoplastic drug chemically related to the nitrogen mustards.

The chemical name for cyclophosphamide is 2-[bis(2-chloroethyl)amino]tetrahydro-2H-1,3,2-oxazaphosphorine 2-oxide monohydrate.

Cyclophosphamide has a molecular formula of C₇H₁₅Cl₂N₂O₂P • H₂O and a molecular weight of 279.1.

Cyclophosphamide is soluble in water, saline, or ethanol.

Cyclophosphamide Tablets, USP are for oral use and contain 25 mg or 50 mg cyclophosphamide (anhydrous).

Inactive ingredients in Cyclophosphamide Tablets are:

• Acacia
• FD&C Blue No. 1
• D&C Yellow No. 10 Aluminium Lake
• Lactose
• Magnesium Stearate
• Starch
• Stearic Acid
• Talc
`,

  indication: `
Malignant Diseases

Cyclophosphamide is indicated for the treatment of:

• Malignant lymphomas (Stages III and IV of the Ann Arbor staging system)
• Hodgkin disease
• Lymphocytic lymphoma (nodular or diffuse)
• Mixed-cell type lymphoma
• Histiocytic lymphoma
• Burkitt’s lymphoma
• Multiple myeloma
• Chronic lymphocytic leukemia
• Chronic granulocytic leukemia (usually ineffective in acute blastic crisis)
• Acute myelogenous leukemia
• Monocytic leukemia
• Acute lymphoblastic (stem-cell) leukemia
• Mycosis fungoides (advanced disease)
• Neuroblastoma (disseminated disease)
• Adenocarcinoma of the ovary
• Retinoblastoma
• Carcinoma of the breast

Cyclophosphamide, although effective alone in susceptible malignancies, is more frequently used concurrently or sequentially with other antineoplastic drugs.

Minimal Change Nephrotic Syndrome In Pediatric Patients

Cyclophosphamide is indicated for the treatment of biopsy proven minimal change nephrotic syndrome in pediatric patients who failed to adequately respond to or are unable to tolerate adrenocorticosteroid therapy.

Limitations Of Use

The safety and effectiveness for the treatment of nephrotic syndrome in adults or other renal disease has not been established.
`,

  clinicalEfficacy: `
Cyclophosphamide has been demonstrated to have a cytostatic effect in many tumour types.

The active metabolites of cyclophosphamide are alkylating agents which transfer alkyl groups to DNA during the process of cell division, thus preventing normal synthesis of DNA.

Cyclophosphamide is well absorbed following an oral dose with a mean half-life of 4-8 hours for both oral and parenteral administration.

It is an inactive prodrug with alkylating metabolites produced by hepatic metabolism, reaching peak levels 4-6 hours after an IV injection.

Hepatic enzymes may be induced.

The parent compound binds poorly to plasma protein but the active metabolites are significantly protein-bound.

The drug is widely distributed, crosses the blood-brain barrier and the placental barrier and is found in ascites.

The metabolites are excreted renally.
`,

  safetyInformation: `
Cyclophosphamide can cause myelosuppression (leukopenia, neutropenia, thrombocytopenia and anaemia), bone marrow failure, and severe immunosuppression, which may lead to serious and sometimes fatal infections, including sepsis and septic shock.

Latent infections can be reactivated.

Cyclophosphamide should not be administered to patients with neutrophils ≤ 1,500/mm³ and platelets < 50,000/mm³.

Cyclophosphamide treatment may not be indicated or should be interrupted or the dose reduced in patients who have or who develop a serious infection.

Cyclophosphamide should be used with caution, if at all, in patients with active urinary tract infections.
`,

  specialPrecautions: `
Inform patients of the possibility of myelosuppression, immunosuppression, and infections.

Explain the need for routine blood cell counts.

Instruct patients to monitor their temperature frequently and immediately report any occurrence of fever.

Advise the patient to report urinary symptoms (patients should report if their urine has turned a pink or red color) and the need for increasing fluid intake and frequent voiding.

Advise patients to contact a health care professional immediately for any of the following:

• New onset or worsening shortness of breath
• Cough
• Swelling of the ankles/legs
• Palpitations
• Weight gain of more than 5 pounds in 24 hours
• Dizziness
• Loss of consciousness

Warn patients of the possibility of developing non-infectious pneumonitis.

Advise patients to report promptly any new or worsening respiratory symptoms.
`,
},
{
  id: 47,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zuvisor",
  name: "Zuvisor",
  subtitle: "Sorafenib Tab 200 mg",
  type: "Tablet",

  image: "/products/zuvisor 1.png",

  images: [
    "/products/zuvisor 1.png",
    "/products/zuvisor 2.png",
    "/products/zuvisor 3.png",
  ],

  strength: "200 mg",
  packSize: "1 x 30 / 1 x 120",
  drugClass: "Antineoplastic Agents, Protein Kinase Inhibitors",

  dosage: `
The recommended dose of Sorafenib in adults is 400 mg sorafenib (two tablets of 200 mg) twice daily (equivalent to a total daily dose of 800 mg) given at least 1 hour before or 2 hours after food.

Treatment is continued until no clinical benefit is seen or until unacceptable toxicity occurs.

Doses are reduced to 400 mg once daily if toxicity occurs; further reduction to a single dose of 400 mg every other day may be necessary.

Dose Adjustments

Management of suspected adverse drug reactions may require temporary interruption or dose reduction of sorafenib therapy.

When dose reduction is necessary during the treatment of hepatocellular carcinoma (HCC) and advanced renal cell carcinoma (RCC), Sorafenib dose should be reduced to two tablets of 200 mg sorafenib once daily.

When dose reduction is necessary during the treatment of differentiated thyroid carcinoma (DTC), Sorafenib dose should be reduced to 600 mg sorafenib daily in divided doses (two tablets of 200 mg and one tablet of 200 mg twelve hours apart).

If additional dose reduction is necessary, Sorafenib may be reduced to 400 mg sorafenib daily in divided doses (two tablets of 200 mg twelve hours apart), and if necessary, further reduced to one tablet of 200 mg once daily.

After the improvement of non-hematological adverse reactions, the dose of Sorafenib may be increased.

Pediatric Population

The safety and efficacy of Sorafenib in children and adolescents aged <18 years have not yet been established.

No data are available.

Elderly Population

No dose adjustment is required in the elderly (patients above 65 years of age).

Renal Impairment

No dose adjustment is required in patients with mild, moderate, or severe renal impairment.

No data is available in patients requiring dialysis.

The monitoring of fluid balance and electrolytes in patients at risk of renal dysfunction is advised.

Renal Impairment | Creatinine Clearance (CC) | Recommended Starting Dose

Mild:
Between 59 to 40 mL/min → 400 mg twice daily

Moderate:
Between 39 and 20 mL/min → 200 mg twice daily

Severe:
Less than 20 mL/min → The dose could not be defined due to low patient numbers enrolled in this cohort

Patients on Hemodialysis:
200 mg daily

Hepatic Impairment

Sorafenib is mainly metabolized in the liver.

Hepatic impairment might reduce exposure to Sorafenib.

No dose adjustment is required in patients with Child-Pugh A or B (mild to moderate) hepatic impairment.

No data is available on patients with Child-Pugh C (severe) hepatic impairment.

However, a study involving patients with varying degrees of hepatic impairment recommended the following empirical starting doses of oral sorafenib, based on tolerability and the development of dose-limiting toxicity.

Hepatic Dysfunction | Bilirubin Levels | Recommended Starting Dose

Mild:
Between ULN and 1.5X ULN and/or AST > ULN → 400 mg twice daily

Moderate:
Between 1.5 and 3X ULN, any value of AST → 200 mg twice daily

Severe:
Over 3X ULN, any value of AST → Patients unable to tolerate even 200 mg every third day

(ULN: Upper Limit of Normal)

Method Of Administration

For oral use.

It is recommended that sorafenib be administered without food or with a low or moderate fat meal.

If the patient intends to have a high-fat meal, sorafenib tablets should be taken at least 1 hour before or 2 hours after the meal.

The tablets should be swallowed with a glass of water.
`,

  coldStorage: "No",

  description: `
ZUVISOR is Sorafenib tablets for oral use.

It is a multikinase inhibitor targeting several serine/threonine and receptor tyrosine kinases and is the tosylate salt of sorafenib.

Sorafenib tosylate has the chemical name:

4-(4-{3-[4-Chloro-3-(trifluoromethyl)phenyl] ureido}phenoxy)-N2-methylpyridine-2-carboxamide 4-methyl benzenesulfonate.
`,

  indication: `
Sorafenib is indicated for the treatment of:

• Hepatocellular carcinoma

• Advanced renal cell carcinoma who have failed prior interferon-alpha or interleukin-2-based therapy or are considered unsuitable for such therapy

• Progressive, locally advanced or metastatic, differentiated (papillary/follicular/Hürthle cell) thyroid carcinoma, refractory to radioactive iodine

Usage:

Sorafenib is used to treat late-stage kidney cancer (advanced renal cell carcinoma), liver cancer (hepatocellular carcinoma) that cannot be treated by surgery, and differentiated thyroid cancer that has come back or spread to other parts of your body.

Sorafenib is an antineoplastic (cancer) agent.
`,

  clinicalEfficacy: `
Sorafenib is a kinase inhibitor that decreases tumor cell proliferation in vitro.

Sorafenib was shown to inhibit multiple intracellular (c-CRAF, BRAF and mutant BRAF) and cell surface kinases (KIT, FLT-3, RET, RET/PTC, VEGFR-1, VEGFR-2, VEGFR-3, and PDGFR-ß).

Several of these kinases are thought to be involved in tumor cell signaling, angiogenesis and apoptosis.

Sorafenib inhibited tumor growth of HCC, RCC, and DTC human tumor xenografts in immunocompromised mice.

Reductions in tumor angiogenesis were seen in models of HCC and RCC upon sorafenib treatment, and increases in tumor apoptosis were observed in models of HCC, RCC, and DTC.
`,

  safetyInformation: `
Sorafenib may cause a condition that affects the heart rhythm (QT prolongation).

QT prolongation can rarely cause serious (rarely fatal) fast/irregular heartbeat and other symptoms (such as severe dizziness, fainting) that need medical attention right away.
`,

  specialPrecautions: `
Dermatological Toxicities

Hand foot skin reaction (palmar-plantar erythrodysaesthesia) and rash represent the most common adverse drug reactions with sorafenib.

Rash and hand foot skin reaction are usually graded as CTC (Common Toxicity Criteria) Grade 1 and 2 and generally appear during the first six weeks of treatment with sorafenib.

Management of dermatological toxicities may include topical therapies for symptomatic relief, temporary treatment interruption and/or dose modification of sorafenib, or in severe or persistent cases, permanent discontinuation of sorafenib.

Hypertension

An increased incidence of arterial hypertension was observed in sorafenib-treated patients.

Hypertension was usually mild to moderate, occurred early in the course of treatment, and was amenable to management with standard antihypertensive therapy.

Blood pressure should be monitored regularly and treated, if required, in accordance with standard medical practice.

In cases of severe or persistent hypertension, or hypertensive crisis despite institution of antihypertensive therapy, permanent discontinuation of sorafenib should be considered.

Aneurysms And Artery Dissections

The use of VEGF pathway inhibitors in patients with or without hypertension may promote the formation of aneurysms and/or artery dissections.

Before initiating Sorafenib, this risk should be carefully considered in patients with risk factors such as hypertension or history of aneurysm.

Hypoglycaemia

Decreases in blood glucose, in some cases clinically symptomatic and requiring hospitalization due to loss of consciousness, have been reported during sorafenib treatment.

In case of symptomatic hypoglycaemia, sorafenib should be temporarily interrupted.

Blood glucose levels in diabetic patients should be checked regularly in order to assess if anti-diabetic medicinal product dosage needs to be adjusted.

Haemorrhage

An increased risk of bleeding may occur following sorafenib administration.

If any bleeding event necessitates medical intervention, it is recommended that permanent discontinuation of sorafenib should be considered.

Cardiac Ischaemia And/Or Infarction

Temporary or permanent discontinuation of sorafenib should be considered in patients who develop cardiac ischaemia and/or infarction.

QT Interval Prolongation

Sorafenib has been shown to prolong the QT/QTc interval, which may lead to an increased risk for ventricular arrhythmias.

Use sorafenib with caution in patients who have, or may develop prolongation of QTc, such as patients with a congenital long QT syndrome, patients treated with a high cumulative dose of anthracycline therapy, patients taking certain anti-arrhythmic medicines or other medicinal products that lead to QT prolongation, and those with electrolyte disturbances such as hypokalaemia, hypocalcaemia, or hypomagnesaemia.

When using sorafenib in these patients, periodic monitoring with on-treatment electrocardiograms and electrolytes (magnesium, potassium and calcium) should be considered.

Gastrointestinal Perforation

Gastrointestinal perforation is an uncommon event and has been reported in less than 1% of patients taking sorafenib.

In some cases, this was not associated with an apparent intra-abdominal tumour.

Sorafenib therapy should be discontinued.

Hepatic Impairment

No data is available on patients with Child Pugh C (severe) hepatic impairment.

Since sorafenib is mainly eliminated via the hepatic route exposure might be increased in patients with severe hepatic impairment.

Warfarin Co-administration

Infrequent bleeding events or elevations in the International Normalised Ratio (INR) have been reported in some patients taking warfarin while on sorafenib therapy.

Patients taking concomitant warfarin or phenprocoumon should be monitored regularly for changes in prothrombin time, INR or clinical bleeding episodes.

Wound Healing Complications

No formal studies on the effect of sorafenib on wound healing have been conducted.

Temporary interruption of sorafenib therapy is recommended for precautionary reasons in patients undergoing major surgical procedures.

There is limited clinical experience regarding the timing of re-initiation of therapy following major surgical intervention.

Therefore, the decision to resume sorafenib therapy following a major surgical intervention should be based on clinical judgement of adequate wound healing.

Elderly Population

Cases of renal failure have been reported.

Monitoring of renal function should be considered.
`,
},
{
  id: 48,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zuvitop",
  name: "Zuvitop",
  subtitle: "Etoposide Cap 50 mg",
  type: "Capsule",

  image: "/products1/ZUVITOP-50 1.png",

  images: [
    "/products1/ZUVITOP-50 1.png",
    "/products1/ZUVITOP-50 2.png",
    "/products1/ZUVITOP-50 3.png",
  ],

  strength: "50 mg",
  packSize: "1 x 8",
  drugClass: "Cytostatics",

  dosage: `
Etoposide Capsules

In small cell lung cancer, the recommended dose of Zuvitop-50 capsules is two times the IV dose rounded to the nearest 50 mg (i.e., two times 35 mg/m²/day for 4 days to 50 mg/m²/day for 5 days).

For one courses of therapy, the normal adult dose in 175-200mg of Zuvitop-50 daily for 5 consecutive days orally, followed by a recession (withdrawal) interval of 3 weeks.

Therapy can be repeated if necessary.

The dose can be increased or reduced.

The dosage by either route should be modified to take into account the myelosuppressive effects of other drugs in the combination or the effects of prior radiation therapy or chemotherapy.

Chemotherapy courses are repeated at 3- to 4-week intervals after adequate recovery from any toxicity.

The dosage should be modified to take into account the myelosuppressive effects of other drugs in the combination or the effects of prior X-ray therapy or chemotherapy which may have compromised bone marrow reserve.

Administration Precautions

To minimize the risk of dermal exposure, always wear impervious gloves when handling blister packs of individually labelled blisters containing etoposide capsules.

This includes all handling activities in clinical settings, pharmacies, storerooms, and home healthcare settings, including during unpacking and inspection, transport within a facility, and dose preparation and administration.

Stability

Etoposide capsules must be stored under refrigeration 2° – 8° C (36° – 46° F).

The capsules are stable for 24 months under such refrigeration conditions.
`,

  coldStorage: "No",

  description: `
Etoposide (also commonly known as VP-16) is a semisynthetic derivative of podophyllotoxin used in the treatment of certain neoplastic diseases.

It is 4′-demethylepipodophyllotoxin 9-[4,6-O-(R)-ethylidene-β-D-glucopyranoside].

It is very soluble in methanol and chloroform, slightly soluble in ethanol, and sparingly soluble in water and ether.

It is made more miscible with water by means of organic solvents.

It has a molecular weight of 588.56 and a molecular formula of C29H32O13.

Etoposide is administered orally.

Etoposide is available as 50 mg pink capsules.

Each liquid-filled, soft gelatin capsule contains 50 mg of etoposide in a vehicle consisting of citric acid, glycerin, purified water, and polyethylene glycol 400.

The soft gelatin capsules contain gelatin, glycerin, sorbitol, purified water, and parabens (ethyl and propyl) with the following dye system:

• Iron oxide (red)
• Titanium dioxide

The capsules are printed with edible ink.
`,

  indication: `
Zuvitop-50 capsules are indicated in the management of the following neoplasms:

• Small Cell Lung Cancer

• Malignant Lymphomas

Usage:

Etoposide is used to treat certain forms of lung cancer (such as small cell lung cancer).

Etoposide works by slowing the growth of cancer cells.
`,

  clinicalEfficacy: `
Etoposide is a specific antitumor drug that clinical and basic research has demonstrated to be effective in treating SCLC, malignant lymphoma, and ovarian cancer.

Zuvitop has been shown to cause metaphase arrest in chick fibroblasts.

Its main effect, however, appears to be at the G2 portion of the cell cycle in mammalian cells.

Two different dose-dependent responses are seen.

At high concentrations (10 µg/mL or more), lysis of cells entering mitosis is observed.


At low concentrations (0.3-10 µg/mL), cells are inhibited from entering prophase.

It does not interfere with microtubular assembly.

The predominant macromolecular effect of etoposide appears to be the induction of DNA strand breaks by an interaction with DNA topoisomerase II or the formation of free radicals.
`,

  safetyInformation: `
• Read the label carefully before use.

• Keep out the reach of children.
`,

  specialPrecautions: `
General

In all instances where the use of VePesid (etoposide) is considered for chemotherapy, the physician must evaluate the need and usefulness of the drug against the risk of adverse reactions.

Most such adverse reactions are reversible if detected early.

If severe reactions occur, the drug should be reduced in dosage or discontinued, and appropriate corrective measures should be taken according to the clinical judgement of the physician.

Reinstitution of VePesid (etoposide) therapy should be carried out with caution and with adequate consideration of the further need for the drug and alertness as to possible recurrence of toxicity.

Patients with low serum albumin may be at an increased risk for etoposide associated toxicities.

Carcinogenesis, Mutagenesis, Impairment of Fertility

Etoposide has been shown to be mutagenic in the Ames assay.

Treatment of Swiss-Albino mice with 1.5 mg/kg I.P. of VePesid (etoposide) on day 7 of gestation increased the incidence of intrauterine death and fetal malformations as well as significantly decreased the average fetal body weight.

Maternal weight gain was not affected.

Irreversible testicular atrophy was present in rats treated with etoposide intravenously for 30 days at 0.5 mg/kg/day (about 1/16th of the human dose on an mg/m² basis).
`,
},
{
  id: 49,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zuvitrex-tab",
  name: "Zuvitrex Tab",
  subtitle: "Methotrexate Tab",
  type: "Tablet",

  image: "/products/zuvitrex2.5-1.png",

  images: [
    "/products/zuvitrex2.5-1.png",
    "/products/zuvitrex2.5-2.png",
    "/products/zuvitrex2.5-3.png",
    "/products/zuvitrex7.5-1.png",
    "/products/zuvitrex7.5-2.png",
    "/products/zuvitrex7.5-3.png",
    
  ],

  strength: "2.5 mg / 5 mg / 7.5 mg / 10 mg",
  packSize: "1 x 10",
  drugClass: "Other Immunosuppressive Agents",

  dosage: `
The dose of methotrexate to be given, the frequency of dosing, the total dose and the combination with other cytostatic drugs and/or folinic acid are subject to frequent modification as our knowledge improves.

Methotrexate should be only applied by Physician’s experience in the area.

Head and Neck Cancer:

Methotrexate at a dose of 40mg/m² body surface area is given at weekly intervals, until progression.

This dosage is used without folinic acid therapy.

Trophoblastic Tumours:

The treatment of trophoblastic tumors has to be strictly supervised by as assigned committee of exports.

In patients with non-metastatic and low risk metastatic trophoblastic tumors a methotrexate dose of 15 to 30 mg daily is administered orally or intramuscularly for 5 days.

A repeat course may be given after a period of one or more weeks.

Three to five courses are usually employed.

Patients with high risk trophoblastic tumours are often treated with a combination therapy, including 300 mg methotrexate/m² body surface followed by folinic acid therapy.

The therapy has to be evaluated on the basis of hCG (Human Chornic gonadotropin) plasma concentrations.

Leukaemia:

Methotrexate is used as part of the maintenance therapy, in acute lymphoblastic leukemia at a dose of 15-30 mg/m² orally, intramuscularly or intravenously once a week.

Psoriasis:

The treatment of psoriasis in women should start immediately following a menstrual period.

Once week prior initiation of methotrexate therapy a test dose of 5-10 mg is given parenterally to detect idiosyncratic reactions of the patients.

In adults weekly dosage schedule of 10-25 mg orally intramuscularly or intravenously is used.

In most patients an improvement occurs usually within 4 week and an optimal results is reached in 2-3 months.

Discontinuation of the methotrexate treatment gives relapse symptoms within 2 weeks to 6 months.

After optional clinical result has been reached the dose should be reduced to the lowest possible with the longest intermediate time span possible.

Conventional topical therapy should be restarted as soon as possible.

Rheumatoid Arthritis:

A single test dose of methotrexate may be given prior to initiation of therapy to detect possible sensitivity to adverse effect to the drugs.

A weekly regimen is used.

The recommended starting dosage schedule is either:

a) Single oral dosage of 7.5 mg once weekly

or

b) An oral dose of 2.5 mg at 12 hours intervals for three dosages given as a course once weekly.

Although an upward gradual modification in either the single or divided dosage schedule may be done for optimisation of response, the total dosage usually should not exceed beyond 20 mg per week so as to avoid severe toxicity particularly bone marrow suppression associated with.

After the optimum response is achieved the dose in each schedule should be preferably reduced to the lowest possible effective dose.

The response, which is apparent by between 3-6 weeks may continue for three months or more.

The optimal duration of therapy is not known.

However limited response for at least 2 years with continued therapy.

On discontinuation of therapy arthritis usually worsens within a span of 3-6 weeks.

For Intrathecal Use:

Leukemia Meningeal

Only preservative free methotrexate diluted with preservative free 0.9% Sodium Chloride Injection USP or other suitable medium to a concentration of 1 mg/ml should be used for intrathecal administration.

For the treatment of meningeal leukemia, intrathecal methotrexate may be administered at intervals of 2 to 5 days.

Caution should be exercised as intrathecal methotrexate administered at intervals of less than once week may increase subacute toxicity.

Intrathecal methotrexate should be given until the cell count of the CSF returns to normal, and then one additional dose.

Intrathecal methotrexate adds significantly to the systemic methotrexate drug level, therefore concurrent systemic antileukemic therapy should be appropriately adjusted.

Dose Modifications:

If the number of leukocytes is 2500-35000/mm³ and/or the number of thrombocytes is 75000-125000, it is preferred to discontinue the treatment for one week.

If the blood count has shown a recovery, the treatment can be continued.

If the blood count is not recovered, a dose reduction can be applied.

Methotrexate should not be given to patients with a creatinine clearance less than 60 ml/min.

Therapy with high dose methotrexate should be postponed in case of liver toxicity.

Route Of Administration:

For intramuscular, intravenous and intrathecal use.
`,

  coldStorage: "No",

  description: `
Methotrexate (formerly amethopterin) is an antimetabolite used in the treatment of certain neoplastic diseases, severe psoriasis, and adult rheumatoid arthritis.

Chemically methotrexate is N-[4-[[(2,4-diamino-6-pteridinyl)methyl]methylamino] benzoyl]-L-glutamic acid.

Methotrexate Tablets USP for oral administration are available in a packaging system.

Methotrexate Tablets USP Dose Pack for therapy with a weekly dosing schedule of 5 mg, 7.5 mg, 10 mg, 12.5 mg, 15 mg, 17.5 mg and 20 mg.

Methotrexate Tablets USP contain an amount of methotrexate sodium equivalent to 2.5 mg of methotrexate and the following inactive ingredients:

• Lactose
• Magnesium Stearate
• Pregelatinized Starch
`,

  indication: `
Methotrexate is indicated in the treatment of choriocarcinoma, chorioadenomadestruens and molahydatidosa.

In molar hydatidosis primary therapy consists of the evacuation of the uterus.

Methotrexate is used in prophylactic therapy.

In the treatment of low-risk trophoblastic tumors, methotrexate is used as a single agent.

It is indicated in Psoriasis and Rheumatoid arthritis.

In the treatment of high-risk trophoblastic tumors methotrexate is applied as a part of the multidrug regimen.

Methotrexate is used in a normal dose or high dose as a single agent or as part of a multidrug regimen in the treatment of:

• Acute lymphoblastic leukemia (CNS Leukemia and maintenance therapy)
• Osteosarcoma
• Hodgkin’s lymphoma
• Burkitt lymphoma
• Advanced cancer of the head and the neck
• Invasive tumors of the bladder
• Advanced stages of mycosis fungoides
`,

  clinicalEfficacy: `
Methotrexate is a well-established antimetabolite and antifolate agent with proven efficacy across a broad range of malignancies.

By inhibiting dihydrofolate reductase (DHFR), Methotrexate disrupts DNA synthesis, repair, and cellular replication, particularly in rapidly proliferating cells.

Clinical studies and decades of therapeutic use have demonstrated the effectiveness of Methotrexate in the treatment of acute lymphoblastic leukemia (ALL), non-Hodgkin lymphoma, osteosarcoma, gestational trophoblastic neoplasia, and various solid tumors.

High-dose Methotrexate with leucovorin rescue has significantly improved survival outcomes in patients with osteosarcoma and is an integral component of curative treatment regimens for pediatric and adult ALL.

Methotrexate also plays a critical role in central nervous system (CNS) prophylaxis and treatment due to its ability to achieve therapeutic concentrations within the cerebrospinal fluid when administered intrathecally or at high doses.

Its established efficacy, predictable pharmacology, and versatility have made Methotrexate a cornerstone of modern oncology treatment protocols worldwide.
`,

  safetyInformation: `
Methotrexate may increase the risk of problems with your liver or lungs, especially if you take a high dose.

However, your doctor will monitor you very closely while you’re taking methotrexate.

Any concerns or problems will be found during routine check-ups.
`,

  specialPrecautions: `
During methotrexate therapy and until at least three months after treatment with methotrexate, contraceptive precautions should be taken by female as well as male patients.

While in general a low dose of methotrexate is applied in the treatment of psoriasis, as compared to the doses used in antineoplastic therapy, intoxication and death may occur.

Patients should be fully informed on the risks of methotrexate therapy and should be instructed to report any manifestation of toxicity immediately.

The simultaneous use of methotrexate and other potentially hepatotoxic drugs or alcohol should be avoided.

Non-steroidal anti inflammatory drugs should not be administrated prior to or concomitantly with the high doses of methotrexate.

NSAIDs with high dose methotrexate therapy has been reported to elevate and prolong serum methotrexate levels, resulting in deaths from severe hematologic and gastrointestinal toxicity.

Oral antibiotics such as tetracycline, chloramphenicol and non-absorbable broad-spectrum antibiotics may increase intestinal absorption of methotrexate or interfere with the enterohepatic circulation by inhibiting bowel flora and suppressing metabolism of the drug by bacteria.
`,
},
{
  id: 50,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "dactinoz",
  name: "Dactinoz",
  subtitle: "Dactinomycin Inj 0.5 mg",
  type: "Injection",

  image: "/products1/DACTINOZ-0.5 1.png",

  images: [
    "/products1/DACTINOZ-0.5 1.png",
    "/products1/DACTINOZ-0.5 2.png",
    "/products1/DACTINOZ-0.5 3.png",
  ],

  strength: "0.5 mg",
  packSize: "1 Vial",
  drugClass: "Cytotoxic Agents",

  dosage: `
The dosage of Dactinomycin for Injection varies depending on the tolerance of the patient, the size and location of the neoplasm, and the use of other forms of therapy.

It may be necessary to decrease the usual dosages suggested below when additional chemotherapy or radiation therapy is used concomitantly or has been used previously.

The dosage for Dactinomycin is calculated in micrograms (mcg).

The dose intensity per 2-week cycle for adults or children should not exceed:

• 15 mcg/kg/day

or

• 400-600 mcg intravenously for five days

Calculation of the dosage for obese or edematous patients should be performed on the basis of surface area in an effort to more closely relate dosage to lean body mass.

A wide variety of single-agent and combination chemotherapy regimens with Dactinomycin may be employed.

Because chemotherapeutic regimens are constantly changing, dosing and administration should be performed under the direct supervision of physicians familiar with current oncologic practices and new advances in therapy.

The suggested regimens are based upon a review of current literature concerning therapy with Dactinomycin and are on a per-cycle basis.
`,

  coldStorage: "No",

  description: `
Dactinomycin is one of the actinomycins, a group of antibiotics produced by various species of Streptomyces.

Dactinomycin is the principal component of the mixture of actinomycins produced by Streptomyces parvullus.

The empirical formula is C62H86N12O16.

Dactinomycin for Injection 0.5 mg is a yellow to orange colored lyophilized cake or discontinuous powder, aggregates of free flowing powder in 3 ml vials.
`,

  indication: `
Dactinomycin for Injection, as part of a combination chemotherapy and/or multi-modality treatment regimen, is indicated for the treatment of:

• Wilms’ tumor
• Childhood rhabdomyosarcoma
• Ewing’s sarcoma
• Metastatic, nonseminomatous testicular cancer

Dactinomycin is indicated as a single agent, or as part of a combination chemotherapy regimen for the treatment of:

• Gestational trophoblastic neoplasia

Dactinomycin, as a component of regional perfusion, is indicated for the palliative and/or adjunctive treatment of:

• Locally recurrent solid malignancies
• Locoregional solid malignancies
`,

  clinicalEfficacy: `
Mechanism Of Action

COSMEGEN is a cytotoxic actinomycin that binds DNA and inhibits RNA synthesis.

The cytotoxic activity of dactinomycin has been demonstrated in animal models of different human cancers.

Pharmacodynamics

Dactinomycin exposure-response relationships and the time course of pharmacodynamic response are unknown.
`,

  safetyInformation: `
General

Veno-occlusive disease (primarily hepatic) may result in a fatality, particularly in children younger than 48 months.

Carcinogenesis, Mutagenesis, Impairment Of Fertility

Dactinomycin has been shown to be mutagenic in a number of test systems in vitro and in vivo including:

• Human fibroblasts
• Human leukocytes
• HeLa cells

DNA damage and cytogenetic effects have been demonstrated in the mouse and the rat.

Adequate fertility studies have not been reported, although reports suggest an increased incidence of infertility following treatment with other antineoplastic agents.

Nursing Mothers

It is not known whether this drug is excreted in human milk.

Because many drugs are excreted in human milk and because of the potential for serious adverse reactions in nursing infants from Dactinomycin, a decision should be made to discontinue nursing and/or the drug, taking into account the importance of the drug to the mother.

The greater frequency of toxic effects of Dactinomycin in infants suggests that this drug should be administered to infants only over the age of 6 to 12 months.

Geriatric Use

Clinical studies of Dactinomycin did not include sufficient numbers of subjects aged 65 and over to determine whether they respond differently from younger subjects.

Other reported clinical experience has not identified differences in responses between the elderly and younger patients.
`,

  specialPrecautions: `
Check with your doctor right away if you have:

• Diarrhoea
• Nausea
• Vomiting
• Sores or white patches on your lips, mouth, or throat

while receiving this medicine.

If Dactinomycin accidentally seeps out of the vein into which it is injected, it may severely damage some tissues and cause scarring.
`,
},
// {
//   id: 51,
//   category: "oncoace",
//   categoryName: "OncoAce",
//   slug: "exemestaz",
//   name: "Exemestaz",
//   subtitle: "Exemestane Tab 25 mg",
//   type: "Tablet",

//   image: "/products1/EMYTAXEL-300 1.png",

//   images: [
//     "/products1/EMYTAXEL-300 1.png",
//     "/products1/EMYTAXEL-300 2.png",
//     "/products1/EMYTAXEL-300 3.png",
//   ],

//   strength: "25 mg",
//   packSize: "1 x 30",
//   drugClass: "Antineoplastics, Aromatase Inhibitors",

//   dosage: `
// Recommended Dose

// The recommended dose of Exemestaz in early and advanced breast cancer is one 25 mg tablet once daily after a meal.

// • Adjuvant treatment of postmenopausal women with oestrogen-receptor-positive early breast cancer who have received two to three years of tamoxifen and are switched to AROMASIN for completion of a total of five consecutive years of adjuvant hormonal therapy.

// • The treatment of advanced breast cancer in postmenopausal women whose disease has progressed following tamoxifen therapy.

// Dose Modifications

// Concomitant use of strong CYP 3A4 inducers decreases exemestane exposure.

// For patients receiving AROMASIN with a strong CYP 3A4 inducer such as rifampicin or phenytoin, the recommended dose of AROMASIN is 50 mg once daily after a meal.
// `,

//   coldStorage: "No",

//   description: `
// Tablets for oral administration contain 25 mg of exemestane, an irreversible, steroidal aromatase inactivator.

// Exemestane is chemically described as 6-methylenandrosta-1,4-diene-3,17-dione.

// Its molecular formula is C₂₀H₂₄O.

// The active ingredient is a white to slightly yellow crystalline powder with a molecular weight of 296.41.

// Exemestane is freely soluble in N,N-dimethylformamide, soluble in methanol, and practically insoluble in water.

// Each tablet contains the following inactive ingredients:

// • Mannitol
// • Crospovidone
// • Polysorbate 80
// • Hypromellose
// • Colloidal silicon dioxide
// • Microcrystalline cellulose
// • Sodium starch glycolate
// • Magnesium stearate
// • Simethicone
// • Polyethylene glycol 6000
// • Sucrose
// • Magnesium carbonate
// • Titanium dioxide
// • Methylparaben
// • Polyvinyl alcohol
// `,

//   indication: `
// Adjuvant Treatment Of Early Breast Cancer In Postmenopausal Women

// Exemestane is indicated for the adjuvant treatment of postmenopausal women with oestrogen receptor-positive early breast cancer who have received two to three years of tamoxifen therapy and are switched to Exemestane for completion of a total of five consecutive years of adjuvant hormonal therapy.

// Advanced Breast Cancer In Postmenopausal Women

// Exemestane is indicated for the treatment of advanced breast cancer in postmenopausal women whose disease has progressed following anti-estrogen therapy, including tamoxifen.

// Usage

// Exemestane is used to treat early and advanced breast cancer in women who have already stopped menstruating (postmenopausal).

// It is usually used in women who have already received a cancer medication called tamoxifen.

// Many breast cancer tumors grow in response to estrogen.

// Exemestane is also sometimes used to treat a certain type of breast cancer in women who have not yet experienced menopause.

// Talk to your doctor about the risks of using this medication for your condition.
// `,

//   clinicalEfficacy: `
// Aromatase inhibitors and inactivators are playing an increasing greater role in breast cancer treatment.

// Exemestane, a highly specific, steroidal aromatase inactivator, is the newest agent in this class.

// The drug is highly specific, and inhibits the in vivo conversion of androstenedione to oestrone (aromatization) by a mean of 97.9%.

// Exemestane has shown good efficacy and tolerability in multiple clinical trials among patients with metastatic breast cancer who have failed one or more previous hormonal therapies.

// Exemestane 25 mg/day slows disease progression and reduces tumour-related signs and symptoms and the drug exhibits a partial lack of cross-resistance with the non-steroidal aromatase inhibitors.

// Response rates to exemestane of 14% to 29% were observed, including patients with visceral metastases, who have historically proved difficult to treat.

// In a large phase III trial, exemestane was found to be superior to megestrol acetate with respect to time to progression and overall survival.

// In addition, exemestane is currently under investigation as first-line therapy in metastatic disease and in sequence with tamoxifen in the adjuvant setting.

// Adverse events include low-grade hot flashes, nausea, and fatigue—mostly of mild to moderate intensity—and treatment-related discontinuations are rare.

// In conclusion, exemestane represents a novel and interesting drug for the treatment of advanced breast cancer, with exciting prospects for use in adjuvant therapy and, potentially, breast cancer prevention.
// `,

//   safetyInformation: `
// • Read the label carefully before use.

// • Keep out of the reach of children.
// `,

//   specialPrecautions: `
// Reductions In Bone Mineral Density (BMD)

// Reductions in bone mineral density (BMD) over time are seen with exemestane use.

// During adjuvant treatment with exemestane, women with osteoporosis or at risk of osteoporosis should have their bone mineral density formally assessed by bone densitometry at the commencement of treatment.

// Monitor patients for bone mineral density loss and treat as appropriate.

// Vitamin D Assessment

// Routine assessment of 25-hydroxy vitamin D levels prior to the start of aromatase inhibitor treatment should be performed due to the high prevalence of vitamin D deficiency in women with early breast cancer (EBC).

// Women with vitamin D deficiency should receive supplementation with vitamin D.

// Administration With Estrogen-Containing Agent

// Should not be coadministered with systemic estrogen-containing agents, as these could interfere with its pharmacologic action.
// `,
// },
{
  id: 52,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zaxol",
  name: "Zaxol",
  subtitle: "Paclitaxel Inj",
  type: "Injection",

  image: "/products1/ZAXOL-30 1.png",

  images: [
    "/products1/ZAXOL-30 1.png",
    "/products1/ZAAXOL-30 2.png",
    "/products1/ZAXOL-30 3.png",
    
  ],

  strength: "30 mg / 100 mg / 260 mg / 300 mg",
  packSize: "1 Vial",
  drugClass: "Antineoplastic Agent / Taxanes",

  dosage: `
All patients should be pre-medicated prior to ZAXOL administration in order to minimize severe hypersensitivity reactions.

Such pre-medication may consist of:

• Dexamethasone 20 mg orally approximately 12 and 6 hours before ZAXOL
• Diphenhydramine (or its equivalent) 50 mg IV 30 to 60 minutes prior to ZAXOL
• Cimetidine (300 mg) or Ranitidine (50 mg) IV 30 to 60 minutes before ZAXOL

ZAXOL at a dose of 175 mg/m² administered intravenously over 3 hours every three weeks has been shown to be effective in patients with metastatic carcinoma of the ovary or breast who have failed standard therapy.

A single course of ZAXOL should not be repeated until:

• Neutrophil count is at least 1500 cells/mm²
• Platelet count is at least 100,000 cells/mm²

A patient who experiences severe neutropenia (neutrophil <500 cells/mm²) or severe peripheral neutropenia during ZAXOL therapy should have the dosage reduced by 20% for subsequent courses of ZAXOL.

Preparation For Intravenous Administration

ZAXOL for injection must be diluted prior to infusion.

ZAXOL should be diluted in:

• 0.9% Sodium Chloride Injection
• 5% Dextrose Injection
• 5% Dextrose and 0.9% Sodium Chloride Injection
• 5% Dextrose in Ringer’s Injection

to a final concentration of 0.3 to 1.2 mg/ml.

The solutions are physically and chemically stable for up to 27 hours at ambient temperature (15–30°C).

Upon preparation solution may show haziness, which is attributed to the formulation vehicle.

No significant loss in potency has been noted following simulated delivery of the solution through I.V. tubing containing an in-line (0.22 micron) filter.

Data collected for the presence of the extractable plasticizer DEHP (di(2-ethylhexyl) phthalate) show that levels increase with time and concentration when dilutions are prepared in PVC containers.

Consequently the use of plasticised PVC containers and administration sets are not recommended.

ZAXOL solution should be prepared and stored in:

• Glass containers
• Polypropylene containers
• Polyolefin containers

Non-PVC containing administration sets, such as those which are polyethylene-lined, should be used.
`,

  coldStorage: "No",

  description: `
Paclitaxel is a natural product with antitumor activity.

Paclitaxel is obtained via a semisynthetic process from Taxus baccata.

The chemical name for paclitaxel is:

5β,20-Epoxy-1,2α,4,7β,10β,13α-hexahydroxytax-11-en-9-one 4,10-diacetate 2-benzoate 13-ester with (2R,3S)-N-benzoyl-3-phenylisoserine.

Paclitaxel is a white to off-white crystalline powder with the empirical formula C47H51NO14 and a molecular weight of 853.9.

It is highly lipophilic, insoluble in water, and melts at around 216-217°C.
`,

  indication: `
ZAXOL (Paclitaxel) is indicated for the treatment of:

• Metastatic carcinoma of the ovary after failure of standard therapy
• Metastatic carcinoma of the breast after failure of standard therapy

The standard therapy means an anthracycline-containing regimen for ovarian cancer unless clinically contraindicated.

Usage:

As directed by the Oncologist.
`,

  clinicalEfficacy: `
Paclitaxel is an antimicrotubule agent that promotes the assembly of microtubules from tubulin dimers and stabilises microtubules by preventing depolymerisation.

This stability inhibits the normal dynamic reorganisation of the microtubule network, which is essential for vital interphase and mitotic cellular functions.

In addition, paclitaxel induces abnormal arrays or bundles of microtubules throughout the cell cycle and multiple asters of microtubules during mitosis.

Paclitaxel helps in improving bone metastasis of lung cancer and has an important significance in clinical treatment of bone metastasis of lung cancer.
`,

  safetyInformation: `
• Read the label carefully before use.

• Store in a cool and dry place, away from sunlight.

• Keep out of the reach of children.
`,

  specialPrecautions: `
During Paclitaxel therapy, continuous cardiac monitoring should be performed in patients with a previous history of conduction abnormalities since cardiac adverse effects (i.e. myocardial infarction, symptoms of congestive heart failure) have been reported in patients receiving Paclitaxel.

Paclitaxel produces severe dose-limiting bone marrow depression.

Therefore regular blood counts should be performed on patients receiving Paclitaxel, and dosage should not be repeated until:

• Neutrophil count is greater than 1,500 cells/mm²
• Platelet count is at least 100,000 cells/mm²

Interactions With Other Drugs

Concurrent use of radiation therapy with Paclitaxel should be avoided because of additive bone marrow depression.

Pretreatment with Cisplatin may reduce the clearance of Paclitaxel resulting in increased toxicity, especially increased myelosuppression.

Hence, when the two drugs are given in combination, Paclitaxel should be given first.

The metabolism of Paclitaxel is catalyzed by CYP2C8 and CYP3A4.

In the absence of drug interaction data, caution should be exercised when administering Paclitaxel concomitantly with known substrates or inhibitors of cytochrome P450 isoenzymes CYP2C8 and CYP3A4.

Paclitaxel should be given with caution to those patients who are on Ketoconazole therapy due to the inhibition of Paclitaxel metabolism by Ketoconazole leading to drug accumulation.
`,
},
{
  id: 53,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zedaunor",
  name: "Zedaunor",
  subtitle: "Daunorubicin Inj 20 mg",
  type: "Injection",

  image: "/products1/ZEDAUNOR-20 1.png",

  images: [
    "/products1/ZEDAUNOR-20 1.png",
    "/products1/ZEDAUNOR-20 2.png",
    "/products1/ZEDAUNOR-20 3.png",
  ],

  strength: "20 mg",
  packSize: "1 Vial",
  drugClass: "Anthracyclines",

  dosage: `
Parenteral drug products should be inspected visually for particulate matter prior to administration, whenever solution and container permit.

In order to eradicate the leukemic cells and induce a complete remission, a profound suppression of the bone marrow is usually required.

Evaluation of both the peripheral blood and bone marrow is mandatory in the formulation of appropriate treatment plans.

It is recommended that the dosage of Cerubidine (daunorubicin) be reduced in instances of hepatic or renal impairment.

For example, using serum bilirubin and serum creatinine as indicators of liver and kidney function.
`,

  coldStorage: "No",

  description: `
Daunorubicin is also used with other chemotherapy drugs to treat a certain type of acute lymphocytic leukemia (ALL; a type of cancer of the white blood cells).

Daunorubicin is in a class of medications called anthracyclines.

It works by slowing or stopping the growth of cancer cells in your body.
`,

  indication: `
Daunorubicin comes as a solution (liquid) or as a powder to be mixed with liquid to be injected intravenously (into a vein) by a doctor or nurse in a medical facility along with other chemotherapy medications.

When daunorubicin is used to treat AML, it is usually injected once a day on certain days of your treatment period.

When daunorubicin is used to treat ALL, it is usually injected once a week.

The length of treatment depends on:

• The types of drugs you are taking
• How well your body responds to them
• The type of cancer you have
`,
  
  clinicalEfficacy: `
To ascertain the efficacy and safety of daunorubicin combined with cytarabine comparing with idarubicin combined with cytarabine as a standard induction therapy for acute myeloid leukemia by a meta-analysis.
`,

  safetyInformation: `
To ascertain the efficacy and safety of daunorubicin combined with cytarabine comparing with idarubicin combined with cytarabine as a standard induction therapy for acute myeloid leukemia by a meta-analysis.
`,

  specialPrecautions: `
Before using daunorubicin, tell your doctor or pharmacist if you are allergic to it, to other anthracyclines (such as doxorubicin), or if you have any other allergies.

This product may contain inactive ingredients, which can cause allergic reactions or other problems.
`,
},
{
  id: 54,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zetabin",
  name: "Zetabin",
  subtitle: "Gemcitabine Inj",
  type: "Injection",

  image: "/products1/ZENTABIN-RTU 1.png",

  images: [
    "/products1/ZENTABIN-RTU 1.png",
    "/products1/ZENTABIN-RTU 2.png",
    "/products1/ZENTABIN-RTU 3.png",
    
  ],

  strength: "200 mg / 1 gm / 1.4 gm",
  packSize: "1 Vial",
  drugClass: "Anthracyclines and Related Substances",

  dosage: `
Pancreatic Adenocarcinoma

Adults:

I.V. 1,000 mg/m² once weekly for 7 weeks, followed by 1 week of rest.

Dosage Adjustment:

Based on degree of hematologic toxicity.

If marrow suppression is detected, modify gemcitabine dosage as follows:

• Absolute granulocyte count (AGC) is at least 1,000 × 10⁶/L and platelet count is at least 100,000 × 10⁶/L, give 100% of full dose.

• AGC is 500 to 999 × 10⁶/L or platelet count is 50,000 to 99,999 × 10⁶/L, give 75% of full dose.

• AGC is less than 500 × 10⁶/L or platelet count is less than 50,000 × 10⁶/L, hold dose.

Subsequent Cycles

Give the same dose once weekly for 3 consecutive weeks, followed by 1 week of rest.

After at least 7 doses (1 cycle), the dose may be increased to 1,250 mg/m² once weekly for 3 weeks, followed by 1 week of rest, if the following criteria are met:

• Nonhematologic toxicity is no greater than WHO Grade 1
• Platelet nadirs are greater than 100,000 × 10⁶/L
• AGC nadir is more than 1,500 × 10⁶/L

If patient still meets the above criteria after receiving 3 doses of the higher regimen, the gemcitabine dose may be increased to 1,500 mg/m² I.V. once weekly for 3 weeks, followed by 1 week of rest.

NSCLC

Adults

I.V. in combination with cisplatin, gemcitabine 1,000 mg/m² on Days 1, 8 and 15 of each 28-day cycle.

Alternatively, gemcitabine 1,250 mg/m² may be given I.V. on Days 1 and 8 of a 21-day cycle.

Dosage Adjustment

Reduce or delay the gemcitabine dose in patients with neutropenia or thrombocytopenia on the day of treatment.

• AGC is 500 to 999 × 10⁶/L or platelet count is 50,000 to 99,999 × 10⁶/L, give 75% of the prior dose.

• AGC is less than 500 × 10⁶/L or platelet count is less than 50,000 × 10⁶/L, hold dose.

For Grade 3 or 4 nonhematologic toxicity, hold gemcitabine or reduce the dose by 50%.

Dosage reduction is not required for severe alopecia or nausea and vomiting.

Dosage reduction may be necessary in renal or hepatic function impairment.

Use additional caution in these patients.

Ovarian Cancer

Adults

I.V. 1,000 mg/m² over 30 minutes on Days 1 and 8 of each 21-day cycle in combination with carboplatin.

Monitor prior to each dose with a CBC, including differential counts.

Prior to each cycle, the AGC should be at least 1,500 × 10⁶/L and the platelet count should be at least 100,000 × 10⁶/L.

Dosage Adjustment

Based on granulocyte and platelet counts on Day 8 of therapy.

If marrow suppression is detected:

• AGC is 1,000 to 1,499 × 10⁶/L and/or platelet count is 75,000 to 99,999 × 10⁶/L, give 50% of full dose.

• AGC is less than 1,000 × 10⁶/L and/or platelet count is less than 75,000 × 10⁶/L, hold dose.

For severe nonhematologic toxicity, except nausea/vomiting, hold therapy or decrease dose by 50%.

Subsequent Cycles

Reduce the gemcitabine dose to 800 mg/m² on Days 1 and 8 if any of the following hematologic toxicities are present:

• AGC less than 500 × 10⁶/L for more than 5 days
• AGC less than 100 × 10⁶/L for more than 3 days
• Febrile neutropenia
• Platelet count less than 25,000 × 10⁶/L
• Cycle delay of more than 1 week because of toxicity

If any of the above recur after the initial dose reduction, for the subsequent cycle give gemcitabine 800 mg/m² on Day 1 only.

Breast Cancer

Adults

I.V. 1,250 mg/m² over 30 minutes on Days 1 and 8 of each 21-day cycle in combination with paclitaxel.

Monitor prior to each dose with a CBC, including differential.

Prior to each cycle, AGC should be at least 1,500 × 10⁶/L and platelet count should be at least 100,000 × 10⁶/L.

Dosage Adjustment

Based on granulocyte and platelet counts on Day 8 of therapy.

• AGC is 1,000 to 1,199 × 10⁶/L or platelet count is 50,000 to 75,000 × 10⁶/L, give 75% of full dose.

• AGC is 700 to 999 × 10⁶/L and platelet count is less than 50,000 × 10⁶/L, give 50% of full dose.

• AGC is less than 700 × 10⁶/L, hold gemcitabine.

For severe nonhematologic toxicity, except alopecia and nausea/vomiting, hold therapy or decrease dose by 50%.

General Advice

• Reconstitute with preservative-free Sodium Chloride 0.9%.

• Reconstituted solution may be administered directly or further diluted with Sodium Chloride 0.9% to a final gemcitabine concentration of at least 0.1 mg/mL.

• Administer by I.V. infusion over 30 minutes.

• Prolonging infusion past 60 minutes increases the risk of myelosuppression.

• Reconstituted gemcitabine is a clear, colorless to light straw-colored solution.

• Do not administer if particulate matter or discoloration is found.
`,

  coldStorage: "No",

  description: `
Gemcitabine is a nucleoside metabolic inhibitor and antineoplastic agent belonging to the pyrimidine analogue class.

It exhibits potent antitumor activity by inhibiting DNA synthesis, leading to apoptosis of rapidly dividing cells.

Gemcitabine is active against a broad range of solid tumors and is widely used in the treatment of:

• Pancreatic cancer
• Non-small cell lung cancer
• Breast cancer
• Ovarian cancer
• Bladder cancer
`,
  
  indication: `
First-line treatment of locally advanced or metastatic pancreatic adenocarcinoma in patients previously treated with 5-fluorouracil.

First-line treatment of locally advanced or metastatic non-small cell lung cancer (NSCLC).

Treatment of advanced ovarian cancer that has relapsed at least 6 months after completion of platinum-based therapy.

First-line treatment of metastatic breast cancer after failure of prior anthracycline-containing adjuvant chemotherapy, unless anthracyclines are clinically contraindicated.

Unlabelled Uses

• Biliary cancer
• Bladder cancer
• Relapsed or refractory testicular cancer
• Squamous cell carcinoma of the head and neck

Usage:

Reconstitute with Sodium Chloride Injection I.P. and shake gently to make a clear solution.
`,

  clinicalEfficacy: `
Gemcitabine kills cells undergoing DNA synthesis and blocks the progression of cells through the G1/S-phase boundary.

Gemcitabine is metabolized by nucleoside kinases to diphosphate (dFdCDP) and triphosphate (dFdCTP) nucleosides.

It works by slowing or stopping the growth of cancer cells in your body.
`,

  safetyInformation: `
• Read the label carefully before use.

• Do not exceed the recommended dose.
`,

  specialPrecautions: `
Monitor prior to each dose with a CBC, including differential and platelet count.

Perform laboratory evaluation of renal and hepatic function (including serum creatinine, potassium, calcium and magnesium) prior to starting therapy and periodically thereafter.

Pregnancy Category D.

Lactation: Undetermined.

Children: Safety and efficacy not established.

Renal Function:

Haemolytic uraemic syndrome and renal failure have been reported.

Renal failure leading to death or requiring dialysis, despite discontinuing therapy, has been reported.

Use with caution in patients with pre-existing renal function impairment.

Hepatic Function:

Serious hepatotoxicity, including liver failure and death, has been reported.

Use with caution in patients with pre-existing hepatic function impairment.

Hematology:

Myelosuppression, including anemia, leukopenia and thrombocytopenia, is usually the dose-limiting adverse reaction for therapy.

Pulmonary toxicity has been reported.

In case of severe toxicity, discontinue therapy immediately and institute supportive measures.
`,
},
{
  id: 55,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zepirubin",
  name: "Zepirubin",
  subtitle: "Epirubicin Inj",
  type: "Injection",

  image: "/products1/ZEPIRUBIN-10 1.png",

  images: [
    "/products1/ZEPIRUBIN-10 1.png",
    "/products1/ZEPIRUBIN-10 2.png",
    "/products1/ZEPIRUBIN -10 3.png",
    "/products1/ZEPIRUBIN-50 1.png",
    "/products1/ZEPIRUBIN-50 2.png",
    "/products1/ZEPIRUBIN-50 3.png",
   
  ],

  strength: "10 mg / 50 mg / 100 mg",
  packSize: "1 Vial",
  drugClass: "Anthracyclines and Related Substances",

  dosage: `
When Epirubicin is used as a single agent, the recommended dosage in adults is 60-90 mg/m² body area.

The drug should be injected intravenously over 3-5 minutes and depending on the patient's haematological status, the dose should be repeated at 21 day intervals.

Lower doses (60-75 mg/m²) are recommended for patients whose bone marrow function has already been impaired by:

• Previous chemotherapy
• Previous radiotherapy
• Advanced age
• Neoplastic bone marrow infiltration

The total dose per cycle may be divided over 2-3 successive days.

When the drug is used in combination with other antitumor agents, the doses need to be adequately reduced.

Since the major route of elimination of Epirubicin is the hepatobiliary system, the dosage should be reduced in patients with impaired liver function in order to avoid an increase of overall toxicity.

Moderate liver impairment:

• Bilirubin: 1.4-3 mg/100 ml
• BSP retention: 9-15%

Requires a 50% reduction of dose.

Severe liver impairment:

• Bilirubin >3 mg/100 ml
• BSP retention >15%

Necessitates further dose reduction.

Directions For Administration

Epirubicin should be administered by intravenous injection.

It is not active when given orally and should not be injected intramuscularly or intrathecally.

It is advisable to give the drug via the tubing of a freely running IV saline infusion after checking that the needle is well placed in the vein.

This method minimizes the risk of drug extravasation and ensures that the vein is flushed with saline after administration.

Extravasation of Epirubicin during injection may give rise to severe tissue lesions, even necrosis.

Venous sclerosis may result from injection into the same vein repeatedly.

Epirubicin should not be mixed with heparin due to chemical incompatibility, which may lead to precipitation when the drugs are in certain proportions.

Epirubicin can be used in combination with other antitumor agents, but it is not recommended that it be mixed with these drugs in the same syringe.

Preparation Of Infusion Solution

Zepirubin 10 mg should be reconstituted to 5 ml by adding Sterile Water for Injection I.P. and used within 24 hours after preparation.

Zepirubin 50 mg should be reconstituted to 25 ml by adding Sterile Water for Injection I.P. and used within 24 hours after preparation.

Intravenous administration of Epirubicin HCl should be performed with caution.

It is recommended that Epirubicin HCl be administered into the tubing of a freely flowing intravenous infusion (0.9% Sodium Chloride or 5% Glucose solution) over a period of 3-5 minutes.

The technique is intended to minimize the risk of thrombosis or perivenous extravasation.

A direct push injection is not recommended due to the risk of extravasation despite adequate blood return upon needle aspiration.

Venous sclerosis may result from injection into small vessels or repeated injection into the same vein.

Besides the above regimens, several other protocols have been discussed in different published articles.
`,

  coldStorage: "No",

  description: `
Epirubicin is an anthracycline cytotoxic agent and forms a complex with DNA by intercalation of its planar rings between nucleotide base pairs, with consequent inhibition of nucleic acid (DNA & RNA) and protein synthesis.

Such intercalation triggers DNA cleavage by topoisomerase II, resulting in cytocidal activity.

Epirubicin also inhibits DNA helicase activity, preventing the enzymatic separation of double-stranded DNA and interfering with replication and transcription.

Epirubicin is also involved in oxidation/reduction reactions by generating cytotoxic free radicals.

Epirubicin is an anthracycline cytotoxic agent and forms a complex with DNA by intercalation of its planar rings between nucleotide base pairs, with consequent inhibition of nucleic acid (DNA & RNA) and protein synthesis.

Such intercalation triggers DNA cleavage by topoisomerase II, resulting in cytocidal activity.

Epirubicin also inhibits DNA helicase activity, preventing the enzymatic separation of double-stranded DNA and interfering with replication and transcription.

Epirubicin is also involved in oxidation/reduction reactions by generating cytotoxic free radicals.
`,

  indication: `
Epirubicin HCl Injection is indicated as a component of adjuvant therapy in patients with evidence of axillary node tumor involvement following resection of primary breast cancer.

Renal Function

Serum creatinine should be assessed before and during therapy.

Dosage adjustment is necessary in patients with serum creatinine >5 mg/dL.

Patients undergoing dialysis have not been studied.

Tumor Lysis Syndrome

As with other cytotoxic agents, Epirubicin HCl may induce hyperuricemia as a consequence of extensive purine catabolism that accompanies drug-induced rapid lysis of highly chemosensitive neoplastic cells (tumor lysis syndrome).

Other metabolic abnormalities may also occur.

While not generally a problem in patients with breast cancer, physicians should consider the potential for tumor lysis syndrome in potentially susceptible patients and should consider monitoring:

• Serum uric acid
• Potassium
• Calcium
• Phosphate
• Creatinine

immediately after initial chemotherapy administration.

Hydration, urine alkalinization and prophylaxis with allopurinol to prevent hyperuricemia may minimize potential complications of tumor lysis syndrome.
`,

  clinicalEfficacy: `
Epirubicin has been extensively investigated in patients with breast cancer and has been found to be a highly effective agent, both for the treatment of patients with metastatic disease and as an adjuvant therapy.
`,

  safetyInformation: `
General

Epirubicin HCl injection is administered by intravenous infusion.

Venous sclerosis may result from an injection into a small vessel or from repeated injections into the same vein.

Extravasation of Epirubicin during the infusion may cause local pain, severe tissue lesions and necrosis.

It is recommended that Epirubicin HCl be slowly administered into the tubing of a freely running intravenous infusion.

If possible, veins over joints or in extremities with compromised venous or lymphatic drainage should be avoided.

The dose should be administered over 3-5 minutes.

A burning or stinging sensation may be indicative of perivenous infiltration and the infusion should be immediately terminated and restarted in another vein.

Perivenous infiltration may occur without causing pain.

Facial flushing as well as local erythematous streaking along the vein may be indicative of excessively rapid administration.

It may precede local phlebitis or thrombophlebitis.

Patients administered the 120 mg/m² regimen of Epirubicin HCl as a component of combination chemotherapy should also receive prophylactic antibiotic therapy with trimethoprim-sulfamethoxazole.

Laboratory Tests

Blood counts, including absolute neutrophil counts, and liver function should be assessed before and during each cycle of therapy with Epirubicin.

Repeated evaluations of LVEF should be performed during therapy.

There are known interactions between Epirubicin HCl and laboratory tests.

Carcinogenesis, Mutagenesis And Impairment Of Fertility

Treatment-related acute myelogenous leukemia has been reported in women treated with Epirubicin-based adjuvant chemotherapy regimens.

Conventional long-term animal studies to evaluate carcinogenic potential are not available.

Epirubicin HCl could induce chromosomal damage in human spermatozoa due to its genotoxic potential.

Men undergoing treatment with Epirubicin HCl should use effective contraceptive methods.

Epirubicin HCl may cause irreversible amenorrhoea (premature menopause) in premenopausal women.

Pregnancy Category D

Epirubicin HCl may cause fetal harm when administered to a pregnant woman.

Administration of 0.8 mg/kg/day intravenously of Epirubicin to rats during days 5-15 of gestation was embryotoxic and caused fetal harm.

Administration of 2 mg/kg/day intravenously of Epirubicin to rats on days 9 and 10 of gestation was embryotoxic, retarded fetal growth, decreased placental weight and was teratogenic causing numerous external, visceral and skeletal malformations.

Administration of intravenous Epirubicin to rabbits at doses up to 0.2 mg/kg/day during days 6 to 18 of gestation was not embryotoxic, but maternally toxic doses increased abortion and delayed ossification.
`,

  specialPrecautions: `
This medicine may increase your risk of developing blood clots.

If you have:

• Chest pain
• Trouble breathing
• Pain, redness or swelling in your arms or legs

while using this medicine, call your doctor right away.

This medicine may turn your urine red for 1 or 2 days after your treatment.
`,
},
{
  id: 56,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zinotecan",
  name: "Zinotecan",
  subtitle: "Irinotecan Inj",
  type: "Injection",

  image: "/products1/ZINOTECAN 1.png",

  images: [
    "/products1/ZINOTECAN 1.png",
    "/products1/ZINOTECAN 2.png",
    "/products1/ZINOTECAN 3.png",

  ],

  strength: "40 mg / 100 mg",
  packSize: "1 Vial",
  drugClass: "Antineoplastic and Immunomodulating Agents",

  dosage: `
Colorectal Cancer Combination Regimen 1

• ZINOTECAN 125 mg/m² intravenous infusion over 90 minutes on Days 1, 8, 15 and 22

with

• Leucovorin (LV) 20 mg/m² intravenous bolus infusion on Days 1, 8, 15 and 22

followed by

• 5-Fluorouracil (5-FU) intravenous bolus infusion on Days 1, 8, 15 and 22

every 6 weeks.

Colorectal Cancer Combination Regimen 2

• ZINOTECAN 180 mg/m² intravenous infusion over 90 minutes on Days 1, 15 and 29

with

• Leucovorin (LV) 200 mg/m² intravenous infusion over 2 hours on Days 1, 2, 15, 16, 29 and 30

followed by

• 5-FU 400 mg/m² intravenous bolus infusion on Days 1, 2, 15, 16, 29 and 30

and

• 5-FU 600 mg/m² intravenous infusion over 22 hours on Days 1, 2, 15, 16, 29 and 30.

Colorectal Cancer Single-Agent Regimen 1

• ZINOTECAN 125 mg/m² intravenous infusion over 90 minutes on Days 1, 8, 15 and 22

followed by

• A 2-week rest period.

Colorectal Cancer Single-Agent Regimen 2

• ZINOTECAN 350 mg/m² intravenous infusion over 90 minutes on Day 1 every 3 weeks.
`,

  coldStorage: "No",

  description: `
A light yellow-coloured solution, free from visible particles.

Irinotecan is used alone or in combination with other medications to treat colon or rectal cancer (cancer that begins in the large intestine).

Irinotecan is in a class of antineoplastic medications.

It works by stopping the growth of cancer cells.

The molecular formula of irinotecan hydrochloride is:

C₃₃H₃₈N₄O₆.HCl.3H₂O

Its molecular weight is 677.18 g/mol.
`,

  indication: `
ZINOTECAN Injection is indicated as a component of first-line therapy in combination with 5-fluorouracil and leucovorin for patients with metastatic carcinoma of the colon or rectum.

Irinotecan is also indicated for patients with metastatic carcinoma of the colon or rectum whose disease has recurred or progressed following initial fluorouracil-based therapy.
`,

  clinicalEfficacy: `
Patients should be carefully monitored for toxicity, and doses of irinotecan should be modified as necessary to accommodate individual patient tolerance to treatment.

Recommended Dose Modifications For Single-Agent Schedules

All dose modifications should be based on the worst preceding toxicity.

A new cycle of therapy should not begin until the toxicity has recovered to NCI Grade 1 or less.

Treatment may be delayed 1 to 2 weeks to allow for recovery from treatment-related toxicity.

If the patient has not recovered, consideration should be given to discontinuing this combination therapy.

Provided intolerable toxicity does not develop, treatment with additional cycles of irinotecan may be continued indefinitely as long as patients continue to experience clinical benefit.

Dosage In Patients With Reduced UGT1A1 Activity

When administered in combination with other agents, or as a single agent, a reduction in the starting dose by at least one level of irinotecan should be considered for patients known to be homozygous for the UGT1A1*28 allele.

However, the precise dose reduction in this patient population is not known, and subsequent dose modifications should be considered based on individual patient tolerance to treatment.
`,

  safetyInformation: `
• Read the label carefully before use.

• Keep out of the reach of children.
`,

  specialPrecautions: `
ZINOTECAN Injection is administered by intravenous infusion.

Care should be taken to avoid extravasation, and the infusion site should be monitored for signs of inflammation.

Should extravasation occur, flushing the site with sterile water and application of ice are recommended.

Premedication With Antiemetics

Irinotecan is emetogenic.

It is recommended that patients receive premedication with antiemetic agents.

In clinical studies of the weekly dosage schedule, the majority of patients received:

• Dexamethasone 10 mg
• A 5-HT₃ blocker such as ondansetron or granisetron

Antiemetic agents should be given on the day of treatment, starting at least 30 minutes before administration of irinotecan.

Treatment Of Cholinergic Symptoms

Prophylactic or therapeutic administration of 0.25 to 1 mg of intravenous or subcutaneous atropine should be considered (unless clinically contraindicated) in patients experiencing:

• Rhinitis
• Increased salivation
• Miosis
• Lacrimation
• Diaphoresis
• Flushing
• Abdominal cramping
• Diarrhoea occurring during or shortly after infusion

These symptoms are expected to occur more frequently with higher irinotecan doses.

Immunosuppressant Effects / Increased Susceptibility To Infections

Administration of live or live-attenuated vaccines in patients immunocompromised by chemotherapeutic agents, including irinotecan, may result in serious or fatal infections.

Avoid vaccination with a live vaccine in patients receiving irinotecan.

Killed or inactivated vaccines may be administered; however, the response to such vaccines may be diminished.

Patients At Particular Risk

In patients receiving irinotecan/5-FU/LV or 5-FU/LV in clinical trials, higher rates of:

• Hospitalisation
• Neutropenic fever
• Thromboembolism
• First-cycle treatment discontinuation
• Early deaths

were observed in patients with a baseline performance status of 2.

Patients who had previously received pelvic/abdominal radiation and elderly patients with comorbid conditions should be closely monitored.

The use of irinotecan in patients with significant hepatic dysfunction has not been established.

Patients with bilirubin elevation or Gilbert’s syndrome may be at greater risk of myelosuppression.

Drug Interactions

Known drug interactions occur with:

• Ketoconazole
• Enzyme-inducing anticonvulsants
• St John’s Wort

Irinotecan commonly causes:

• Neutropenia
• Leucopenia
• Anaemia

any of which may be severe.

Patients must not be treated with irinotecan until resolution of bowel obstruction.

Patients with hereditary fructose intolerance should not receive irinotecan because this product contains sorbitol.

Information For Patients

Patients and caregivers should be informed of expected toxic effects, especially:

• Nausea
• Vomiting
• Abdominal cramping
• Diarrhoea
• Infection

Patients should keep loperamide readily available and begin treatment for late diarrhoea at the first episode of poorly formed or loose stools.

Patients should immediately contact their physician if any of the following occur:

• Diarrhoea for the first time during treatment
• Black or bloody stools
• Symptoms of dehydration
• Inability to take fluids due to nausea or vomiting
• Inability to control diarrhoea within 24 hours
• Fever or signs of infection

Patients should be warned about possible dizziness or visual disturbances within 24 hours following irinotecan administration and advised not to drive or operate machinery if these symptoms occur.

Patients should also be alerted to the possibility of alopecia.

Laboratory Tests

Careful monitoring of:

• White blood cell count with differential
• Haemoglobin
• Platelet count

is recommended before each dose of irinotecan.

UGT1A1 Testing

A laboratory test is available to determine UGT1A1 status.

Testing can detect:

• UGT1A1 6/6 genotype
• UGT1A1 6/7 genotype
• UGT1A1 7/7 genotype
`,
},
{
  id: 57,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zoldric",
  name: "Zoldric",
  subtitle: "Zoledronic Acid",
  type: "Injection",

  image: "/products1/ZOLDRIC-4 1.png",

  images: [
    "/products1/ZOLDRIC-4 1.png",
    "/products1/ZOLDRIC-4 2.png",
    "/products1/ZOLDRIC-4 3.png",
  ],

  strength: "4 mg",
  packSize: "1 Vial",
  drugClass: "Bisphosphonate Derivatives, Calcium Metabolism Modifiers",

  dosage: `
Vials of Zoledronic concentrate for infusion contain overfill, allowing for the withdrawal of 5 mL of concentrate (equivalent to 4 mg of zoledronic acid).

This concentrate should immediately be diluted in 100 mL of sterile 0.9% sodium chloride, USP, or 5% dextrose injection, USP, following proper aseptic technique, and administered to the patient by infusion.

Do not store undiluted concentrate in a syringe to avoid inadvertent injection.

To prepare reduced doses for patients with baseline CrCl less than or equal to 60 mL/min, withdraw the specified volume of the zoledronic concentrate from the vial for the dose required.

The withdrawn concentrate must be diluted in 100 mL of sterile 0.9% sodium chloride, USP, or 5% dextrose injection, USP.

If not used immediately after dilution with infusion media, for microbiological integrity, the solution should be refrigerated at 2°C–8°C (36°F–46°F).

The refrigerated solution should then be equilibrated to room temperature prior to administration.

The total time between dilution, storage in the refrigerator, and end of administration must not exceed 24 hours.

Due to the risk of clinically significant deterioration in renal function, which may progress to renal failure:

• Single doses of Zoledronic should not exceed 4 mg
• Duration of infusion should be no less than 15 minutes

In the trials and in postmarketing experience, renal deterioration, progression to renal failure and dialysis have occurred in patients, including those treated with the approved dose of 4 mg infused over 15 minutes.

There have been instances of this occurring after the initial Zoledronic dose.
`,

  coldStorage: "Yes",

  description: `
Zoledronic acid is a bisphosphonic acid which is an inhibitor of osteoclastic bone resorption.

Zoledronic acid is designated chemically as:

(1-Hydroxy-2-imidazol-1-yl-phosphonoethyl) phosphonic acid monohydrate.

Zoledronic acid is a white crystalline powder.

Its molecular formula is:

C₅H₁₀N₂O₇P₂•H₂O

Its molar mass is 290.1 g/mol.

Zoledronic acid is highly soluble in 0.1N sodium hydroxide solution, sparingly soluble in water and 0.1N hydrochloric acid, and practically insoluble in organic solvents.

The pH of a 0.7% solution of zoledronic acid in water is approximately 2.0.

Zoledronic acid is available in 100 mL bottles as a sterile liquid ready-to-use solution for intravenous infusion and in 5 mL vials as a sterile liquid concentrate solution for intravenous infusion.
`,

  indication: `
Hypercalcemia Of Malignancy

Zoledronic is indicated for the treatment of hypercalcemia of malignancy defined as an albumin-corrected calcium (cCa) of greater than or equal to 12 mg/dL [3.0 mmol/L] using the formula:

cCa in mg/dL = Ca in mg/dL + 0.8 (4.0 g/dL - patient albumin [g/dL])

Multiple Myeloma And Bone Metastases Of Solid Tumors

Zoledronic is indicated for the treatment of patients with multiple myeloma and patients with documented bone metastases from solid tumors, in conjunction with standard antineoplastic therapy.

Prostate cancer should have progressed after treatment with at least one hormonal therapy.

Important Limitation Of Use

The safety and efficacy of Zoledronic in the treatment of hypercalcemia associated with hyperparathyroidism or with other non-tumour-related conditions have not been established.
`,

  clinicalEfficacy: `
Osteoporosis is a significant cause of morbidity and mortality in the elderly and an important public health issue.

Bisphosphonates are the primary treatment options for osteoporosis.

The oral administration of bisphosphonates may result in poor patient compliance and thence reduced treatment efficacy.

Intravenously administered bisphosphonates may therefore show better treatment efficacy.

A meta-analysis was carried out to evaluate the efficacy of zoledronic acid treatment for osteoporosis in both men and women with either vertebral or non-vertebral fracture.

Results:

A significant reduction in the incidence of both vertebral and nonvertebral fracture was observed following ZOL treatment.

• Vertebral fractures: RR 0.24 (95% CI 0.15 to 0.40)
• Nonvertebral fractures: RR 0.76 (95% CI 0.67 to 0.86)

Bone mineral density (BMD) was also seen to be increased after ZOL treatment.

Conclusion:

Zoledronic acid was effective in reducing the incidence of vertebral fractures as well as nonvertebral fractures, including hip fractures.

A significant increase in bone mineral density (BMD) was also observed in patients administered ZOL as compared to placebo.
`,

  safetyInformation: `
Patients should be informed of the importance of:

• Good dental hygiene
• Routine dental care
• Regular dental check-ups

Patients should be advised to immediately tell their doctor about any oral symptoms such as:

• Loosening of a tooth
• Pain
• Swelling
• Non-healing sores
• Oral discharge

during treatment with Zoledronic.

Zoledronic should not be given if the patient is pregnant, plans to become pregnant, or is breastfeeding.
`,

  specialPrecautions: `
Patients With Asthma

While not observed in clinical trials with Zoledronic, there have been reports of bronchoconstriction in aspirin-sensitive patients receiving bisphosphonates.

Hepatic Impairment

Only limited clinical data are available for the use of Zoledronic to treat hypercalcemia of malignancy in patients with hepatic insufficiency.

These data are not adequate to provide guidance on dosage selection or how to safely use Zoledronic in these patients.

Use In Pregnancy

Bisphosphonates, such as Zoledronic, are incorporated into the bone matrix, from where they are gradually released over periods of weeks to years.

There may be a risk of foetal harm (e.g., skeletal and other abnormalities) if a woman becomes pregnant after completing a course of bisphosphonate therapy.

Zoledronic may cause foetal harm when administered to a pregnant woman.

In reproductive studies in pregnant rats, subcutaneous doses equivalent to 2.4 or 4.8 times the human systemic exposure resulted in:

• Pre-implantation losses
• Post-implantation losses
• Decreases in viable foetuses
• Foetal skeletal malformations
• Foetal visceral malformations
• Foetal external malformations

There are no adequate and well-controlled studies in pregnant women.

If this drug is used during pregnancy, or if the patient becomes pregnant while taking this drug, the patient should be apprised of the potential hazard to a foetus.
`,
},
{
  id: 58,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zolon",
  name: "Zolon",
  subtitle: "Oxaliplatin Inj",
  type: "Injection",

  image: "/products1/ZOLON-50 1.png",

  images: [
    "/products1/ZOLON-50 1.png",
    "/products1/ZOLON-50 2.png",
    "/products1/ZOLON-50 3.png",
    
  ],

  strength: "50 mg / 100 mg / 150 mg",
  packSize: "1 Vial",
  drugClass: "Other Antineoplastic Agents, Platinum Compounds",

  dosage: `
Colorectal Cancer In Adults

As Single Agent

When used alone, the recommended dose of oxaliplatin is 130 mg/m² as a continuous intravenous infusion over 2 to 6 hours.

The dose may be repeated at an interval of 3 weeks.

In Combination Therapy

IV: On Day 1:

• Administer oxaliplatin 85 mg/m² concurrently with leucovorin 200 mg/m² (in separate containers using a Y line) by IV infusion over 2 hours.

• Then administer fluorouracil 400 mg/m² by IV injection over 2 to 4 minutes.

• Followed by fluorouracil 500 mg/m² by IV infusion over 22 hours.

On Day 2:

• Administer leucovorin 200 mg/m² by IV infusion over 2 hours.

• Then administer fluorouracil 400 mg/m² by IV injection over 2 to 4 minutes.

• Followed by fluorouracil 600 mg/m² by IV infusion over 22 hours.

Repeat regimen at intervals of 2 weeks.

Dosage Adjustment In Toxicity

Peripheral Neuropathy

• Administer oxaliplatin over 6 hours.
• No adjustment required for fluorouracil and leucovorin.

Persistent Grade 2 Neurosensory Effect

• Reduce oxaliplatin dose by 25% (i.e., 65 mg/m²).
• No adjustment required for fluorouracil and leucovorin.

In Patients Who Recover From:

• Grade 3 or 4 GI toxicity
• Grade 4 neutropenia
• Grade 3 or 4 thrombocytopenia

Dose Modifications:

• Reduce oxaliplatin dose by 25% (i.e., 65 mg/m²).
• Reduce fluorouracil dose by 20% (i.e., to 300 mg/m² by IV injection over 2 to 4 minutes and 500 mg/m² by IV infusion over 22 hours).

Renal Impairment

In patients with impaired renal function, observe caution.

Monitoring Parameters

Assess the patients for:

• Differential WBC count
• Haemoglobin
• Platelet count
• ALT
• AST
• Bilirubin
• Creatinine levels

before each oxaliplatin cycle.
`,

  coldStorage: "No",

  description: `
Oxaliplatin, a cell cycle-phase-nonspecific antineoplastic drug, belongs to a new class of platinum agent that contains a platinum atom complexed with oxalate and diaminocyclohexane (DACH).

Chemically, oxaliplatin is:

trans-I-diaminocyclohexane oxalatoplatinum

or

cis-(oxalate(trans-1,2-diaminocyclohexane)platinum(II))

The empirical formula of oxaliplatin is:

C₈H₁₄N₂O₄Pt

The molecular weight of Oxaliplatin is 397.30.

Oxaliplatin is slightly soluble in water and methanol and insoluble in ethanol.
`,

  indication: `
Oxaliplatin is indicated in the treatment of metastatic colorectal cancers after failure of treatment with fluoropyrimidines, alone by monochemotherapy or along with fluoropyrimidines.

Usage:

As directed by the oncologist.
`,

  clinicalEfficacy: `
The 18% objective response rate obtained with first-line therapy confirms that the activity of single-agent oxaliplatin is comparable to other anticancer therapies considered active against colorectal cancer.

Oxaliplatin undergoes nonenzymatic conversion in physiologic solutions to active derivatives via displacement of the labile oxalate ligand.

Several transient reactive species are formed, including monoaquo and diaquo DACH platinum, which covalently bind with macromolecules.

Both inter- and intrastrand Pt-DNA crosslinks are formed.

Crosslinks are formed between:

• The N7 positions of two adjacent guanines (GG)
• Adjacent adenine-guanines (AG)
• Guanines separated by an intervening nucleotide (GNG)

These crosslinks inhibit DNA replication and transcription.

Cytotoxicity is cell-cycle non-specific.
`,

  safetyInformation: `
• Read the label carefully before use.

• Store in a cool and dry place below 25°C and protect from light.

• Do not freeze.

• Keep out of the reach of children.
`,

  specialPrecautions: `
Oxaliplatin should not be mixed with any other medication, and it should not be administered simultaneously by the same infusion line.

Caution is recommended while administering oxaliplatin to patients with known hypersensitivity to other platinum agents.

It is not known whether oxaliplatin is excreted in human milk or not.

Caution should be exercised when oxaliplatin is administered to a nursing woman, as many drugs are excreted in human milk.

Inspect the solution visually for particulate matter and discoloration prior to administration.
`,
},
{
  id: 59,
  category: "nutrazeutica",
  categoryName: "Nutrazeutica",
  slug: "glutox-t",
  name: "Glutox T",
  subtitle: "Glutamine",
  type: "Sachet",

  image: "/nutra/GlutoxT-1.png",

  images: [
    "/nutra/GlutoxT-1.png",
    "/nutra/GlutoxT-2.png",
    "/nutra/GlutoxT-3.png",
    
  ],

  strength: "15 gm / 20 gm",
  packSize: "1 x 10",
  drugClass: "Amino Acid",

  dosage: `
Empty the powder from the sachet into glass.

Add 100 ml of water.

Stir well until the powder is evenly dispersed in the water and drink immediately.
`,

  coldStorage: "No",

  description: `
Glutox-T is off white coloured powder.

Glutamine is the most abundant amino acid found in the body.

It’s made in the muscles and transferred by the blood into different organ systems.

Glutamine is a building block for making proteins in the body.

It’s also needed to make other amino acids and glucose.

Glutamine supplements might help gut function, immune function, and other processes, especially in times of stress when the body uses more glutamine.
`,

  indication: `
• Improves Gastrointestinal and Immune Health.

• Can Help Treat Leaky Gut and Ulcers.

• Supports Brain Health.

• May Improve IBS Symptoms and Diarrhoea.

• Promotes Muscle Growth and Decreases Muscle Wasting.

• May Improve Athletic Performance and Recovery from Endurance Exercise.

• Supports Metabolic and Heart Health.

Usage:

1 Sachet daily or as directed by a healthcare professional.
`,

  clinicalEfficacy: `
Glutamine is an amino acid produced by the body and found in food.

It supports your body’s immune and digestive systems.

L-glutamine is used to make proteins and perform other functions.

Glutamine is an important molecule for the immune system and intestinal health.
`,

  safetyInformation: `
The product is required to be stored out of reach of children.

Not to exceed the stated recommended daily usage.
`,

  specialPrecautions: `
This contains Sucralose, not recommended for children.
`,
},
{
  id: 60,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "afatinz",
  name: "Afatinz",
  subtitle: "Afatinib Tab",
  type: "Tablet",

  image: "/products2/AFATNIZ-30 1.png",

  images: [
    "/products2/AFATNIZ-30 1.png",
    "/products2/AFATNIZ-30 2.png",
    "/products2/AFATNIZ-30 3.png",
    "/products2/AFATNIZ-40 1.png",
    "/products2/AFATNIZ-40 2.png",
    "/products2/AFATNIZ-40 3.png",
   
  ],

  strength: "20 mg / 30 mg / 40 mg",
  packSize: "1 x 28",
  drugClass: "Antineoplastics, Tyrosine Kinase Inhibitor; EGFR Inhibitor",

  dosage: `
The recommended dosage of AFATINIB is 40 mg orally once daily until disease progression or no longer tolerated by the patient.

Take AFATINIB at least 1 hour before or 2 hours after a meal.

Do not take a missed dose within 12 hours of the next dose.

The recommended dosage of AFATINIB in patients with pre-existing severe renal impairment (estimated glomerular filtration rate [eGFR] 15 to 29 mL/min/1.73 m²) is 30 mg orally once daily.

Reduce AFATINIB daily dose by 10 mg if not tolerated for patients who require therapy with a P-glycoprotein (P-gp) inhibitor.

Resume the previous dose after discontinuation of the P-gp inhibitor as tolerated.

Increase AFATINIB daily dose by 10 mg as tolerated for patients who require chronic therapy with a P-gp inducer.

Resume the previous dose 2 to 3 days after discontinuation of the P-gp inducer.
`,

  coldStorage: "No",

  description: `
Afatinib tablets contain afatinib, a tyrosine kinase inhibitor which is a 4-anilinoquinazoline.

Afatinib is presented as the dimaleate salt, with the chemical name:

2-butenamide,N-[4-[(3-chloro-4-fluorophenyl)amino]7-[[(3S)-tetrahydro-3-furanyl]oxy]-6-quinazolinyl]-4-(dimethylamino)-,(2E)-, (2Z)-2-butenedioate (1:2).

Afatinib dimaleate is a white to brownish yellow powder, water soluble and hygroscopic, with an empirical formula of C32H33ClFN5O11, and a molecular weight of 718.1 g/mol.

Afatinib tablets for oral administration are available in 40 mg, 30 mg, or 20 mg of afatinib (equivalent to 59.12 mg, 44.34 mg, or 29.56 mg afatinib dimaleate, respectively).
`,

  indication: `
EGFR Mutation-Positive, Metastatic Non-Small Cell Lung Cancer

AFATINIB is indicated for the first-line treatment of patients with metastatic non-small cell lung cancer (NSCLC) whose tumors have non-resistant epidermal growth factor receptor (EGFR) mutations as detected by an FDA-approved test.

Limitations Of Use

The safety and efficacy of AFATINIB have not been established in patients whose tumors have resistant EGFR mutations.

Previously Treated, Metastatic Squamous NSCLC

AFATINIB is indicated for the treatment of patients with metastatic squamous NSCLC progressing after platinum-based chemotherapy.
`,

  clinicalEfficacy: `
Because clinical trials are conducted under widely varying conditions, adverse reaction rates observed in the clinical trials of a drug cannot be directly compared to rates in the clinical trials of another drug and may not reflect the rates observed in practice.

The data in the Warnings and Precautions section reflect exposure to AFATINIB for clinically significant adverse reactions in 4257 patients enrolled in LUX-Lung 3 (n=229) and LUX-Lung 8 (n=392), and 3636 patients with cancer enrolled in 42 studies of AFATINIB administered alone or in combination with other anti-neoplastic drugs at AFATINIB doses ranging from 10-70 mg daily or at doses 10-160 mg in other regimens.

The mean exposure was 5.5 months.

The population included patients with various cancers, the most common of which were NSCLC, breast, colorectal, brain, and head and neck.

The data described below reflect exposure to AFATINIB as a single agent in LUX-Lung 3, a randomized, active-controlled trial conducted in patients with EGFR mutation-positive, metastatic NSCLC, and in LUX-Lung 8, a randomized, active-controlled trial in patients with metastatic squamous NSCLC progressing after platinum-based chemotherapy.
`,

  safetyInformation: `
Limit your time in the sun.

AFATINIB can make your skin sensitive to sunlight.

You could get or have worsening rash or acne.

You could get a severe sunburn.

Use sunscreen and wear a hat and clothes that cover your skin if you have to be in sunlight during treatment with AFATINIB.

Keep AFATINIB and all medicines out of the reach of children.
`,

  specialPrecautions: `
Diarrhea

Advise patients that diarrhea occurs in nearly all patients who receive AFATINIB.

Inform patients that diarrhea may result in dehydration and renal impairment if not treated.

Advise patients to notify their physician if diarrhea develops and to seek medical attention promptly for severe or persistent diarrhea.

Bullous And Exfoliative Skin Disorders

Advise patients to minimize sun exposure with protective clothing and use of sunscreen while taking AFATINIB.

Interstitial Lung Disease

Advise patients to immediately report any new or worsening lung symptoms, or any combination of the following symptoms:

• Trouble breathing or shortness of breath
• Cough
• Fever

Hepatic Toxicity

Advise patients that they will need to undergo liver function monitoring periodically.

Advise patients to immediately report any symptoms of a liver problem:

• Skin or the whites of eyes turn yellow
• Urine turns dark or brown (tea colored)
• Pain on the right side of stomach
• Bleeds or bruises more easily than normal
• Lethargy

Gastrointestinal Perforation

Advise patients that AFATINIB can increase the risk of gastrointestinal perforation and to seek immediate medical attention for severe abdominal pain.

Keratitis

Advise patients to immediately report eye problems:

• Eye pain
• Swelling
• Redness
• Blurred vision
• Other vision changes

Left Ventricular Dysfunction

Advise patients to contact a healthcare professional immediately for any of the following:

• New onset or worsening shortness of breath
• Exercise intolerance
• Cough
• Fatigue
• Swelling of the ankles/legs
• Palpitations
• Sudden weight gain

Lactation

Advise women not to breastfeed during treatment with AFATINIB and for 2 weeks after the last dose of AFATINIB.

Infertility

Advise females and males of reproductive potential of the potential for reduced fertility from AFATINIB.
`,
},
{
  id: 61,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "cazonib",
  name: "Cazonib",
  subtitle: "Cabozantinib Tab",
  type: "Tablet",

  image: "/products2/CAZONIB-20 1.png",

  images: [
    "/products2/CAZONIB-20 1.png",
    "/products2/CAZONIB-20 2.png",
    "/products2/CAZONIB-20 3.png",
    "/products2/CAZONIB-40 1.png",
    "/products2/CAZONIB-40 2.png",
    "/products2/CAZONIB-40 3.png",
   
  ],

  strength: "20 mg / 40 mg / 60 mg",
  packSize: "1 x 30",
  drugClass: "Tyrosine Kinase Inhibitors",

  dosage: `
Stop treatment with Cabozantinib at least 3 weeks prior to scheduled surgery, including dental surgery.

Do not substitute Cabozantinib tablets with cabozantinib capsules.

Swallow Cabozantinib tablets whole.

Do not crush CABOMETYX tablets.

Do not take a missed dose within 12 hours of the next dose.

Modify the Cabozantinib dose for patients taking drugs known to strongly induce or inhibit CYP3A4 and for patients with moderate hepatic impairment.
`,

  coldStorage: "No",

  description: `
Cabozantinib Tab is the (S)-malate salt of cabozantinib, a kinase inhibitor.

Cabozantinib (S)-malate is described chemically as:

N-(4-(6,7-dimethoxyquinolin-4-yloxy)phenyl)-N’-(4fluorophenyl) cyclopropane-1,1-dicarboxamide, (2S)-hydroxybutanedioate.

The molecular formula is:

C28H24FN3O5·C4H6O5

and the molecular weight is 635.6 Daltons as malate salt.

Cabozantinib (S)-malate salt is a white to off-white solid that is practically insoluble in aqueous media.

Cabozantinib tablets for oral use are supplied as film-coated tablets containing 20 mg, 40 mg, or 60 mg of cabozantinib, which is equivalent to 25 mg, 51 mg, or 76 mg of cabozantinib (S)-malate, respectively.
`,

  indication: `
Renal Cell Carcinoma

Cabozantinib is indicated for the treatment of patients with advanced renal cell carcinoma (RCC).

Cabozantinib, in combination with nivolumab, is indicated for the first-line treatment of patients with advanced RCC.

Hepatocellular Carcinoma

Cabozantinib is indicated for the treatment of patients with hepatocellular carcinoma (HCC) who have been previously treated with sorafenib.

Differentiated Thyroid Cancer

Cabozantinib is indicated for the treatment of adult and pediatric patients 12 years of age and older with locally advanced or metastatic differentiated thyroid cancer (DTC) that has progressed following prior VEGFR-targeted therapy and who are radioactive iodine-refractory or ineligible.
`,

  clinicalEfficacy: `
As a single agent in 409 patients with RCC enrolled in randomized, active-controlled trials (CABOSUN, METEOR), 467 patients with HCC enrolled in a randomized, placebo-controlled trial (CELESTIAL), and 125 patients with DTC enrolled in a randomized, placebo-controlled trial (COSMIC-311), and in combination with nivolumab 240 mg/m² every 2 weeks in 320 patients with RCC enrolled in a randomized, active-controlled trial (CHECKMATE-9ER).

Because clinical trials are conducted under widely varying conditions, adverse reaction rates observed in the clinical trials of a drug cannot be directly compared to rates in the clinical trials of another drug and may not reflect the rates observed in practice.
`,

  safetyInformation: `
Instruct patients to contact their healthcare provider to seek immediate medical attention for signs or symptoms of unusual severe bleeding or haemorrhage.

Advise patients that gastrointestinal disorders such as diarrhea, nausea, vomiting, and constipation may develop during Cabozantinib treatment and to seek immediate medical attention if they experience persistent or severe abdominal pain because cases of gastrointestinal perforation and fistula have been reported in patients taking Cabozantinib.

Advise females of reproductive potential of the potential risk to a fetus.

Advise females to inform their healthcare provider of a known or suspected pregnancy.

Advise women not to breastfeed during treatment with Cabozantinib and for 4 months following the last dose.

Advise patients to contact their healthcare provider for signs or symptoms of proteinuria.
`,

  specialPrecautions: `
Do not administer Cabozantinib to patients who have a recent history of hemorrhage, including:

• Hemoptysis
• Hematemesis
• Melena

Discontinue Cabozantinib in patients who experience:

• A Grade 4 fistula
• A gastrointestinal perforation

Discontinue Cabozantinib in patients who develop:

• Acute myocardial infarction
• Serious arterial thromboembolic events
• Serious venous thromboembolic events requiring medical intervention

Do not initiate Cabozantinib in patients with uncontrolled hypertension.

Monitor blood pressure regularly during Cabozantinib treatment.

Monitor and manage patients using antidiarrheals as indicated.

Withhold Cabozantinib until improvement to Grade 1, then resume Cabozantinib at a reduced dose.
`,
},
{
  id: 62,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zucarb",
  name: "Zucarb",
  subtitle: "Carboplatin Inj",
  type: "Injection",

  image: "/products2/ZUCARB-150 1.png",

  images: [
    "/products2/ZUCARB-150 1.png",
    "/products2/ZUCARB-150 2.png",
    "/products2/ZUCARB-150 3.png",
    "/products2/ZUCARB-450 1.png",
    "/products2/ZUCARB-450 2.png",
    "/products2/ZUCARB-450 3.png",
  ],

  strength: "150 mg / 450 mg",
  packSize: "1 Vial",
  drugClass: "Antineoplastic Agents, Platinum Compounds",

  dosage: `
Aluminum reacts with carboplatin causing precipitate formation and loss of potency, therefore, needles or intravenous sets containing aluminum parts that may come in contact with the drug must not be used for the preparation or administration of Carboplatin Injection.

Single Agent Therapy:

Carboplatin Injection, as a single agent, has been shown to be effective in patients with recurrent ovarian carcinoma at a dosage of 360 mg/m² IV on day 1 every 4 weeks (alternatively see Formula Dosing); in general, however, single intermittent courses of carboplatin injection should not be repeated until the neutrophil count is at least 2,000 and the platelet count is at least 100,000.

Combination Therapy with Cyclophosphamide:

In the chemotherapy of advanced ovarian cancer, an effective combination for previously untreated patients consists of the following:

Carboplatin Injection – 300 mg/m² IV on day 1 every four weeks for six cycles (alternatively see Formula Dosing).

Cyclophosphamide – 600 mg/m² IV on day 1 every four weeks for six cycles.

For directions regarding the use and administration of cyclophosphamide, please refer to its package insert.

Intermittent courses of carboplatin injection in combination with cyclophosphamide should not be repeated until the neutrophil count is at least 2000 and the platelet count is at least 10,000.

Dose Adjustment Recommendations:

Pretreatment platelet count and performance status are important prognostic factors for severity of myelosuppression in previously treated patients.

The suggested dose adjustments for single agent or combination therapy shown in the table below are modified from controlled trials in previously treated and untreated patients with ovarian carcinoma.

Blood counts were done weekly, and the recommendations are based on the lowest post-treatment platelet or neutrophil value.

Platelets | Neutrophils | Adjusted Dose (From Prior Course)

>100,000 | >2000 | 125%

50-100,000 | 500-2000 | No Adjustment

<50,000 | <500 | 75%

Percentages apply to Carboplatin Injection as a single agent or to both Carboplatin Injection and cyclophosphamide in combination.

In the controlled studies, dosages were also adjusted at a lower level (50% to 60%) for severe myelosuppression.

Escalations above 125% were not recommended for these studies.

Carboplatin Injection is usually administered by an infusion lasting 15 minutes or longer.

No pre- or post-treatment hydration or forced diuresis is required.

Patients with Impaired Kidney Function:

Patients with creatinine clearance values below 60mL/min are at increased risk of severe bone marrow suppression.

In renally-impaired patients who received single-agent Carboplatin Injection therapy, the incidence of severe leukopenia, neutropenia, or thrombocytopenia has been about 25% when the dosage modifications in the table below have been used.

Baseline Creatinine Clearance | Recommended Dose on Day 1

41 – 59 mL/min | 250 mg/m²

16 – 40 mL/min | 200 mg/m²

The data available for patients with severely impaired kidney function (creatinine clearance below 15 mL/min) are too limited to permit a recommendation for treatment.

These dosing recommendations apply to the initial course of treatment.

Subsequent dosages should be adjusted according to the patient’s tolerance based on the degree of bone marrow suppression.

Formula Dosing:

Another approach for determining the initial dose of carboplatin injection is the use of mathematical formulae, which are based on a patient’s pre-existing renal function or renal function and desired platelet nadir.

Renal excretion is the major route of elimination for carboplatin.

The use of dosing formulae, as compared to empirical dose calculation based on body surface area, allows compensation for patient variations in pretreatment renal function that might result in either underdosing (in patients with above-average renal function) or overdosing (in patients with impaired renal function).

A simple formula for calculating dosage, based upon a patient’s glomerular filtration rate (GFR in mL/min) and Carboplatin injection target area under the concentration versus time curve (AUC in mg/mL min), has been proposed by Calvert.

In these studies, GFR was measured by ⁵¹Cr-EDTA clearance.

CALVERT FORMULA FOR CARBOPLATIN DOSING

Total Dose (mg) = (target AUC) × (GFR + 25)

Note:

With the Calvert formula, the total dose of Carboplatin Injection is calculated in mg, not mg/m².

The target AUC of 4-6 mg/mL min using single-agent carboplatin injection appears to provide the most appropriate dose range in previously treated patients.

This study also showed a trend between the AUC of single-agent carboplatin injection administered to previously treated patients and the likelihood of developing toxicity.

% Actual Toxicity in Previously Treated Patients

AUC (mg/mL min) | Gr 3 or Gr 4 Thrombocytopenia | Gr 3 or Gr 4 Leukopenia

4 to 5 | 16% | 13%

6 to 7 | 33% | 34%

Geriatric Dosing:

Because renal function is often decreased in elderly patients, formula dosing of Carboplatin Injection based on estimates of GFR should be used in elderly patients to provide predictable plasma Carboplatin Injection AUCs and thereby minimize the risk of toxicity.

PREPARATION OF INTRAVENOUS SOLUTIONS

Carboplatin Injection 10 mg/mL is supplied as a Ready To Use (RTU) sterile solution in 5 ml, 15 ml, 45 ml or 60 ml vials.

The total content of carboplatin per vial is described in following table:

Vial Strength | Diluent Volume

50 mg | 5 ml

150 mg | 15 ml

450 mg | 45 ml

600 mg | 60 ml

Carboplatin Injection can be further diluted to concentrations as low as 0.5 mg/ml with 5% Dextrose in Water (D5W) or 0.9% Sodium Chloride Injection, USP.

When further diluted, Carboplatin Injection solutions are stable for 8 hours at room temperature (25ºC).

Since no antibacterial preservative is contained in the formulation, it is recommended that Carboplatin Injection solutions be discarded 8 hours after dilution.

Parenteral drug products should be inspected visually for particulate matter and discolouration prior to administration.
`,

  coldStorage: "No",

  description: `
Carboplatin injection is supplied as a sterile, aqueous solution available in 50mg/5ml, 150mg/15ml, 450mg/45ml or 600mg/60ml multi-dose vials containing 10mg/ml of carboplatin for administration by intravenous infusion.

Each ml contains 10 mg carboplatin and Water for Injection, USP.

Carboplatin is a platinum coordination compound that is used as a cancer chemotherapeutic agent.

The chemical name for carboplatin is platinum, diammine [1,1-cyclobutane-dicarboxylato (2-)-0,0']-(SP-4-2).
`,

  indication: `
Initial Treatment of Advanced Ovarian Carcinoma:

Carboplatin injection is indicated for the initial treatment of advanced ovarian carcinoma in established combination with other approved chemotherapeutic agents.

One established combination regimen consists of carboplatin injection and cyclophosphamide and has demonstrated equivalent overall survival between the two groups.

There is limited statistical power to demonstrate equivalence in overall pathologic complete response rates and long-term survival (≥ 3 years) because of the small number of patients with these outcomes.

The small number of patients with residual tumor < 2 cm after initial surgery also limits the statistical power to demonstrate equivalence in this subgroup.

Secondary Treatment of Advanced Ovarian Carcinoma:

Carboplatin injection is indicated for the palliative treatment of patients with ovarian carcinoma recurrent after prior chemotherapy, including patients who have been previously treated with cisplatin.

Within the group of patients previously treated with cisplatin, those who have developed progressive disease while receiving cisplatin therapy may have a decreased response rate.

Carboplatin injection should not be employed in patients with severe bone marrow depression or significant bleeding.
`,

  clinicalEfficacy: `
Carboplatin injection as a single agent has been shown to be effective in patients with recurrent ovarian carcinoma at a dosage of 360 mg/m² IV on day 1 every 4 weeks.
`,

  safetyInformation: `
General:

Needles or intravenous administration sets containing aluminum parts that may come in contact with carboplatin should not be used for the preparation or administration of the drug.

Aluminum can react with carboplatin causing precipitate formation and loss of potency.
`,

  specialPrecautions: `
Check with your doctor immediately if you notice:

• Any unusual bleeding or bruising
• Black, tarry stools
• Blood in urine
• Blood in stools
• Pinpoint red spots on your skin

Be careful when using a regular toothbrush, dental floss, or toothpick.
`,
},
{
  id: 63,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zutinib",
  name: "Zutinib",
  subtitle: "Sunitinib Cap",
  type: "Capsule",

  image: "/products2/ZUTINIB-12.5 1.png",

  images: [
    "/products2/ZUTINIB-12.5 1.png",
    "/products2/ZUTINIB-12.5 2.png",
    "/products2/ZUTINIB-12.5 3.png",
    "/products2/ZUTINIB-50 1.png",
    "/products2/ZUTINIB-50 2.png",
    "/products2/ZUTINIB-50 3.png",
   
  ],

  strength: "12.5 mg / 25 mg / 50 mg",
  packSize: "1 x 28",
  drugClass: "Antineoplastics, Tyrosine Kinase Inhibitor; VEGF Inhibitor",

  dosage: `
Recommended Dose For GIST And Advanced RCC

The recommended dose of Zutinib for gastrointestinal stromal tumor (GIST) and advanced renal cell carcinoma (RCC) is one 50 mg oral dose taken once daily, on a schedule of 4 weeks on treatment followed by 2 weeks off (Schedule 4/2).

Zutinib may be taken with or without food.

Recommended Dose For Adjuvant Treatment Of RCC

The recommended dose of Zutinib for the adjuvant treatment of RCC is 50 mg taken orally once daily, on a schedule of 4 weeks on treatment followed by 2 weeks off (Schedule 4/2), for nine 6-week cycles.

Zutinib may be taken with or without food.

Recommended Dose For pNET

The recommended dose of Zutinib for pancreatic neuroendocrine tumors (pNET) is 37.5 mg taken orally once daily continuously without a scheduled off-treatment period.

Zutinib may be taken with or without food.
`,

  coldStorage: "Yes",

  description: `
Zutinib, an oral multi-kinase inhibitor, is the malate salt of sunitinib.

Sunitinib malate is described chemically as:

Butanedioic acid, hydroxy-, (2S)-, a compound with N-[2-(diethylamino)ethyl]-5-[(Z)-(5-fluoro-1,2-dihydro-2-oxo-3H-indol-3-ylidine)methyl]-2,4-dimethyl-1H-pyrrole-3-carboxamide (1:1).

The molecular formula is:

C₂₂H₂₇FN₄O₂ • C₄H₆O₅

and the molecular weight is 532.6 Daltons.

Sunitinib malate is a yellow to orange powder with a pKa of 8.95.

The solubility of sunitinib malate in aqueous media over the range pH 1.2 to pH 6.8 is in excess of 25 mg/mL.

The log of the distribution coefficient (octanol/water) at pH 7 is 5.2.
`,

  indication: `
Gastrointestinal Stromal Tumor (GIST)

Zutinib is indicated for the treatment of gastrointestinal stromal tumor after disease progression on or intolerance to imatinib mesylate.

Advanced Renal Cell Carcinoma (RCC)

Zutinib is indicated for the treatment of advanced renal cell carcinoma.

Adjuvant Treatment Of Renal Cell Carcinoma (RCC)

Zutinib is indicated for the adjuvant treatment of adult patients at high risk of recurrent RCC following nephrectomy.

Advanced Pancreatic Neuroendocrine Tumors (pNET)

Zutinib is indicated for the treatment of progressive, well-differentiated pancreatic neuroendocrine tumors in patients with unresectable, locally advanced or metastatic disease.
`,

  clinicalEfficacy: `
Sunitinib is a small molecule that inhibits multiple receptor tyrosine kinases (RTKs), some of which are implicated in tumor growth, pathologic angiogenesis, and metastatic progression of cancer.

Sunitinib was evaluated for its inhibitory activity against a variety of kinases (>80 kinases) and was identified as an inhibitor of:

• Platelet-derived growth factor receptors
• Vascular endothelial growth factor receptors
• Stem cell factor receptor (KIT)
• Fms-like tyrosine kinase-3 (FLT3)
• Colony stimulating factor receptor Type 1 (CSF-1R)
• Glial cell-line derived neurotrophic factor receptor (RET)

Sunitinib inhibition of the activity of these RTKs has been demonstrated in biochemical and cellular assays, and inhibition of function has been demonstrated in cell proliferation assays.
`,

  safetyInformation: `
• Read the label carefully before use.

• Keep out of the reach of children.

• Do not exceed the recommended dose.
`,

  specialPrecautions: `
Hepatotoxicity

Zutinib can cause severe hepatotoxicity, resulting in liver failure or death.

Liver failure occurred at an incidence of <1% in clinical trials.

Liver failure signs include:

• Jaundice
• Elevated transaminases
• Hyperbilirubinaemia in conjunction with encephalopathy
• Coagulopathy
• Renal failure

Monitor liver function tests:

• Alanine aminotransferase (ALT)
• Aspartate aminotransferase (AST)
• Bilirubin

before initiation of treatment, during each cycle of treatment, and as clinically indicated.

Interrupt Zutinib for grade 3 or 4 drug-related hepatic adverse reactions and discontinue if there is no resolution.

Do not restart Zutinib if patients subsequently experience severe changes in liver function tests or have other signs and symptoms of liver failure.

Cardiovascular Events

Discontinue Zutinib in the presence of clinical manifestations of congestive heart failure (CHF).

Interrupt Zutinib and/or reduce the dose in patients without clinical evidence of CHF who have an ejection fraction of >20% but <50% below baseline or below the lower limit of normal if baseline ejection fraction is not obtained.

Embryo-Fetal Toxicity

Advise females to inform their healthcare provider if they are pregnant or become pregnant.

Inform female patients of the risk to a fetus and potential loss of the pregnancy.

Lactation

Advise lactating women not to breastfeed during treatment with Zutinib and for at least 4 weeks after the last dose.

Infertility

Advise patients that male and female fertility may be compromised by treatment with Zutinib.
`,
},
{
  id: 64,
  category: "nutrazeutica",
  categoryName: "Nutrazeutica",
  slug: "sst-tabs",
  name: "SST Tabs",
  subtitle: "Saliva Stimulating Tab 200 mg",
  type: "Tablet",

  image: "/nutra/SST-1.png",

  images: [
    "/nutra/SST-1.png",
    "/nutra/SST-2.png",
    "/nutra/SST-3.png",
    "/nutra/SST-4.png"
  ],

  strength: "200 mg",
  packSize: "1 x 30 / 1 x 60",
  drugClass: "Cholinergic Agonists",

  dosage: `
Keep 2 tablets in the mouth, one either side.

3-5 times or as required or as suggested by qualified health professionals.

SST tablets help in the secretion of saliva through taste buds when secretion is impaired but when functioning gland tissues are still present.
`,

  coldStorage: "Yes",

  description: `
SST Tablet is Orange coloured uncoated tablet.

The tablet works through the taste buds to stimulate the salivary glands.

SST is formulated to support the natural protection of teeth given by saliva so that no damage occurs to the teeth with repeated used of the tablets.
`,

  indication: `
• Pleasant Taste

• Stimulates Flow of natural Saliva

• Relieves Dryness of Mouth

• Disrupts Bacterial cells

• Reduce bacterial Adhesion to adhere to each other & to the teeth

• SST Reduces Production of Acid

• Proven to be the Most Effective poly Alcohol at reducing Tooth Decay

• Prevented Fraction for Dental Caries: Xylitol Superior to Sorbitol (58.66% VC. 20.01%)

• Recommended the supplement that effectively fulfills the nutritional demands when nutrition is adequate.

• After Surgery

• After Chemotherapy

Usage:

Place 1 or 2 tabs in cheeks, one on either side.

Suck them.

3 to 5 times a day or as directed by your doctor.
`,

  clinicalEfficacy: `
SST is used for the stimulation of saliva production when secretion is impaired and potentially functioning gland tissue is still present.

The tablet works through the taste buds to stimulate the salivary glands.
`,

  safetyInformation: `
• Read the label carefully before use.

• Store in a cool and dry place, away from sunlight.

• Keep out of the reach of children.

• Do not exceed the recommended dose.
`,

  specialPrecautions: `
To be taken orally.
`,
},
{
  id: 65,
  category: "nutrazeutica",
  categoryName: "Nutrazeutica",
  slug: "calciboon-zm",
  name: "Calciboon ZM",
  subtitle: "Calcium Citrate Malate 250 mg",
  type: "Tablet",

  image: "/nutra/Calciboon-1.png",

  images: [
    "/nutra/Calciboon-1.png/products/calciboon-zm/calciboon-zm250-1.jpeg",
    "/nutra/Calciboon-2.png",
  ],

  strength: "250 mg",
  packSize: "1 x 30",
  drugClass: "Water-soluble Calcium Supplement",

  dosage: `
Calciboon ZM is to be taken orally with or without food.

Tablets should not be chewed or crushed.

It should be swallowed with water or milk.

It’s better if the dose is taken at a fixed time each day.

The following doses have been studied in scientific research:

BY MOUTH (Oral):

For preventing low calcium levels:

1-2 grams elemental calcium daily is typically used.

Sometimes it is taken with 800 IU of vitamin D.

For preventing weak bones (osteoporosis) caused by corticosteroid use:

Divided daily doses of 0.5-1 gram of elemental calcium daily.

For prevention of weak bones (osteoporosis):

Most experts recommend taking 1000-1200 mg of calcium daily to prevent osteoporosis and broken bones.

For increasing fetal bone density in pregnant women with low dietary calcium intake:

300-2000 mg/day, taken during the second and third trimesters.

For high cholesterol:

800 mg daily for up to 2 years.

Calcium 1200 mg taken in 2-3 divided doses daily, alone or in combination with vitamin D 400 IU daily, has also been used in conjunction with a low-fat or calorie-restricted diet for up to 15 weeks.

For preventing high blood pressure during pregnancy (pre-eclampsia):

1-2 grams of elemental calcium daily as calcium carbonate.

For high blood pressure:

Up to 0.4-2 grams daily for up to 4 years.

For preventing tooth loss in elderly people:

500 mg of calcium along with 700 IU of vitamin D daily for 3 years.

For weight loss:

Calcium 800-1200 mg daily with or without a calorie-restricted diet has been used.

In some cases, calcium is taken in combination with 400 IU of vitamin D.
`,

  coldStorage: "No",

  description: `
CALCIBOON ZM tablets is a fortified calcium supplement containing calcium citrate malate with Vitamin D3 (veg source), Zinc, and Magnesium.

Calcium Citrate contains 21% of elemental calcium.

Calcium plays an important role in the body.

It is necessary for the normal functioning of nerves, cells, muscles, and bone.

If there is not enough calcium in the blood, then the body will take calcium from bones, thereby weakening bones.

Vitamin D helps the body absorb calcium.

Having the right amounts of Vitamin D, and Calcium is important for building and keeping strong bones.

Zinc helps the immune system and metabolism to function properly.

Zinc is also important to wound healing and the sense of taste and smell.

Magnesium is an important mineral, playing a role in over 300 enzyme reactions in the human body.

Its many functions include helping with muscle and nerve function, regulating blood pressure, and supporting the immune system.

Taken together, and in the right dosages, magnesium and zinc work to each other’s advantage.

Magnesium helps your body regulate its zinc levels, while zinc enables it to absorb magnesium more efficiently—it will only hinder absorption when taken in abnormally high doses (around 142 mg of zinc per day).

Calcium, magnesium, and zinc may improve several aspects of health, such as bone strength, mood, immunity, blood sugar regulation, and sleep quality.
`,

  indication: `
This combination is useful to prevent or treat low blood calcium levels in people who do not get enough calcium from their diets.

It may be used to treat conditions caused by low calcium levels such as:

• Bone loss (osteoporosis)
• Weak bones (osteomalacia / rickets)
• Decreased activity of the parathyroid gland (hypoparathyroidism)
• A certain muscle disease (latent tetany)

It may also be used in certain patients to make sure they are getting enough calcium including:

• Pregnant women
• Lactating mothers
• Postmenopausal women

Also useful in people taking certain medications such as:

• Phenytoin
• Phenobarbital
• Prednisone

Usage:

1 Serving Daily or as directed by the Healthcare Professional.
`,

  clinicalEfficacy: `
Calcium is used to prevent or treat low blood calcium levels in people who do not get enough calcium from their diets.

Calcium is important for growth and development of bones.

Vitamin D3 that is used in the absorption of calcium in the blood.

Vitamin D3 helps in processing of essential minerals in the body like Calcium and phosphorus.

Lack of Vitamin D3 results in bone weakening, bone pain, and skin diseases.

Calciboon is a nutritional supplement which can be taken by people who have low levels of calcium in their blood.

Calciboon is used in elderly people to keep bones healthy and strong, and is even effective in Chronic arthritis and Osteoporosis.
`,

  safetyInformation: `
The product is required to be stored out of reach of children.

Not to exceed the stated recommended daily usage.
`,

  specialPrecautions: `
Before taking a calcium supplement, tell your doctor or pharmacist if you have any allergies.

This product should not be used if you have certain medical conditions.

Before using this product, consult your doctor or pharmacist if you have high calcium levels (hypercalcemia).

If you have any of the following health problems, consult your doctor or pharmacist before using this product:

• Kidney disease
• Kidney stones
• Little or no stomach acid (achlorhydria)
• Heart disease
• Disease of the pancreas
• A certain lung disease (sarcoidosis)
• Difficulty absorbing nutrition from food (malabsorption syndrome)

Use in Pregnancy and Lactation

Calcium needs vary by age—even during pregnancy.

The American College of Obstetricians and Gynaecologists (ACOG) recommends that pregnant and breastfeeding moms aged 19 and over consume 1,000mg of calcium each day.
`,
},
{
  id: 66,
  category: "nutrazeutica",
  categoryName: "Nutrazeutica",
  slug: "zurcumin",
  name: "Zurcumin",
  subtitle: "Curcumin 500 mg",
  type: "Tablet",

  image: "/nutra/Zurcumin-1.png",

  images: [
    "/nutra/Zurcumin-1.png",
    "/nutra/Zurcumin-12.png",
    "/nutra/Zurcumin-13.png",
  ],

  strength: "500 mg",
  packSize: "1 x 10",
  drugClass: "Antibacterial, Anti-inflammatory, Hypoglycemic, Antioxidant, Wound-healing, and Antimicrobial Activities",

  dosage: `
One tablet twice a day or as directed by the dietitian.
`,

  coldStorage: "No",

  description: `
ZURCUMIN is a combination of Curcumin, Moringa, Lycopene and Piperine, available as tablets for oral use.

Derived from the rhizome of herb Curcuma longa, Curcumin is a hydrophobic polyphenol with multiple biological & pharmacological activities.

Moringa is highly nutritious, rich in healthy antioxidants and bioactive plant compounds found from Moringa oleifera plant.

Lycopene is a powerful antioxidant that can protect and repair the body from damage caused by a multiple diseases.

Piperine enhances Curcumin bioavailability by up to 2000%, maximizing its absorption and therapeutic potential.

Composed of powerful antioxidants and other bioactive agents, ZURCUMIN is recommended for improved health benefits in critically ill persons and even cancer patients.

It can also be taken by healthy individuals for overall wellbeing.
`,

  indication: `
Curcumin supplements are most commonly useful in:

● Patients undergoing Radiation & Chemotherapy

● TB patients

● Asthmatics

● Patients recovering from Cancer

● Adults for healthy living

Curcumin

● Established as powerful anti-oxidant with anticancer properties

Moringa

● Highly nutritious profile : 4 times the Vitamin A of carrots, 7 times the Vitamin C of oranges, 4 times the Calcium of milk, 3 times the Potassium of bananas, ¾ the iron of Spinach, and 2 times the Protein of yogurt

Lycopene

● Well known powerful antioxidant

Piperine

● Enhanced bioavailability with addition of Piperine

Usage:

1 serving daily or as directed by the healthcare professional.
`,

  clinicalEfficacy: `
Curcumin can help in the management of oxidative and inflammatory conditions, metabolic syndrome, arthritis, anxiety, and hyperlipidaemia.

It may also help in the management of exercise-induced inflammation and muscle soreness, thus enhancing recovery and subsequent performance in active people.
`,

  safetyInformation: `
Not to exceed the stated recommended daily usage.

The product is required to be stored out of reach of children.
`,

  specialPrecautions: `
It can cause nausea and diarrhoea, especially in high doses or after long-term use.

It might also pose a risk of ulcers in high doses.

As a topical treatment, it can cause skin irritation.

Caution is advised when turmeric is taken by people known to have gallstones; consult your health care provider first.

Pregnant women should not use curcumin supplements.

Talk to a doctor before using curcumin supplements regularly if you have any medical conditions, including:

• Gallbladder disease
• Kidney disease
• Bleeding disorders
• Diabetes
• Immunity problems

Since turmeric can potentially increase bleeding, stop taking it at least two weeks before any surgery.
`,
},
{
  id: 67,
  category: "nutrazeutica",
  categoryName: "Nutrazeutica",
  slug: "zuvipro",
  name: "Zuvipro 40% (Vanilla)",
  subtitle: "Protein Supplement 200 gm",
  type: "Powder",

  image: "/nutra/Zuvipro40vanilla-1.png",

  images: [
    "/nutra/Zuvipro40vanilla-1.png",
    "/nutra/Zuvipro40vanilla-2.png",
    "/nutra/Zuvipro40vanilla-3.png",
    "/nutra/Zuvipro40vanilla-4.png"
  ],

  strength: "200 gm",
  packSize: "1 Pack",
  drugClass: "Dietary Supplements",

  dosage: `
Take 1 or 2 levelled scoops (1 scoop twice a day or 2 scoops once a day) of Zuvipro in a cup.

Add a little warm milk and make a smooth paste.

Add milk while stirring briskly to fill the cup.

You may add sugar if needed.
`,

  coldStorage: "Yes",

  description: `
Of-white-colouredd powder.

Zuvipro Powder is important for new muscle formation and quick recovery post-workout and to get a sustained release of protein all day long.

They are a high-quality protein source which is easily absorbed and provides all essential amino acids required to boost muscle protein synthesis and develop lean body mass.
`,

  indication: `
• Zuvipro is a complete protein, containing all the 20 amino acids, including the 9 essential amino acids, which help develop muscles.

• Multivitamins maintains overall health, helps metabolism, tissue growth and repair, digestion, immunity and cardiovascular health.

• Magnesium helps in bone mineralization, as well as protein synthesis.

• Zinc helps in facilitating wound healing and is cardioprotective.

• Calcium is essential mineral that helps maintain bone health and neuro-muscular impulses and also aids blood clotting.

• Lycopene is natural antioxidant and antiproliferative.

Usage:

1 scoop twice a day or 2 scoops once a day.
`,

  clinicalEfficacy: `
Nutraceuticals may be used to improve health, delay the ageing process, prevent chronic diseases, increase life expectancy, or support the structure or function of the body.

Zuvipro improves the nutrient content of the diet and also has effects on the immune system.

People commonly use Zuvipro for improving athletic performance and increasing strength.
`,

  safetyInformation: `
Read the label carefully before use.

Store in a cool and dry place, away from sunlight.

Keep out of the reach of children.

A dietary nutritional supplement not for medicinal use.

Do not exceed the recommended dose.
`,

  specialPrecautions: `
High doses can cause some side effects such as:

• Increased bowel movements
• Acne
• Nausea
• Thirst
• Bloating
• Reduced appetite
• Tiredness
• Headache

Pregnancy and breast-feeding:

There isn’t enough reliable information to know if whey protein is safe to use when pregnant or breast-feeding.

Stay on the safe side and avoid use.

Children:

Whey protein is likely safe for children when used in amounts commonly found in food or when included in infant formulas.

Milk allergy:

If you are allergic to cow’s milk, avoid using whey protein.
`,
},
{
  id: 68,
  category: "nutrazeutica",
  categoryName: "Nutrazeutica",
  slug: "zuvipro-60",
  name: "Zuvipro 60% (Vanilla )",
  subtitle: "Protein Supplement 200 g / 1 kg",
  type: "Powder",

  image: "/nutra/ZUVIPRODvanilla60-1kg-1.png",

  images: [
    "/nutra/ZUVIPRODvanilla60-1kg-1.png",
    "/nutra/ZUVIPRODvanilla60-1kg-2.png",
    "/nutra/ZUVIPRODvanilla60-1kg-3.png",
    "/nutra/ZUVIPRODvanilla60-1kg-4.png",
    "/nutra/ZUVIPRODvanilla60-1kg-5.png",
    "/nutra/ZUVIPRODvanilla60-200gm-1.png",
    "/nutra/ZUVIPRODvanilla60-200gm-2.png",
    "/nutra/ZUVIPRODvanilla60-200gm-3.png",
    "/nutra/ZUVIPRODvanilla60-200gm-4.png",
  ],

  strength: "200 g / 1 kg",
  packSize: "1 Pack",
  drugClass: "Dietary Supplements",

  dosage: `
Take 1 or 2 levelled scoops (1 scoop twice a day or 2 scoops once a day) of Zuvipro in a cup.

Add a little warm milk and make a smooth paste.

Add milk while stirring briskly to fill the cup.

You may add sugar if needed.
`,

  coldStorage: "Yes",

  description: `
Off-white coloured powder.
`,

  indication: `
● Zuvipro is a complete protein, containing all the 20 amino acids, including the 9 essential amino acids, which help develop muscles.

● Multivitamins maintains overall health, helps metabolism, tissue growth and repair, digestion, immunity and cardiovascular health.

● Magnesium helps in bone mineralization, as well as protein synthesis.

● Zinc helps in facilitating wound healing and is cardioprotective.

● Calcium is essential mineral that helps maintain bone health and neuro-muscular impulses and also aids blood clotting.

● Lycopene is natural antioxidant and antiproliferative.

Usage:

1 scoop twice a day or 2 scoops once a day.
`,

  clinicalEfficacy: `
Zuvipro Powder is important for new muscle formation and quick recovery post-workout and to get a sustained release of protein all day long.

They are a high-quality protein source which is easily absorbed and provides all essential amino acids required to boost muscle protein synthesis and develop lean body mass.
`,

  safetyInformation: `
Not to exceed the stated recommended daily usage.

The product is required to be stored out of reach of children.
`,

  specialPrecautions: `
High doses can cause some side effects such as:

• Increased bowel movements
• Acne
• Nausea
• Thirst
• Bloating
• Reduced appetite
• Tiredness
• Headache

Pregnancy and breast-feeding:

There isn’t enough reliable information to know if whey protein is safe to use when pregnant or breast-feeding.

Stay on the safe side and avoid use.

Children:

Whey protein is likely safe for children when used in amounts commonly found in food or when included in infant formulas.

Milk allergy:

If you are allergic to cow’s milk, avoid using whey protein.
`,
},
{
  id: 69,
  category: "nutrazeutica",
  categoryName: "Nutrazeutica",
  slug: "zuvipro-d",
  name: "Zuvipro D (Strawberry/Vanilla)",
  subtitle: "Protein Supplement for Diabetics 200 gm",
  type: "Powder",

  image: "/nutra/Zuviprodstrawberry-1.png",
  images: [
    "/nutra/Zuviprodstrawberry-1.png",
    "/nutra/Zuviprodstrawberry-2.png",
    "/nutra/Zuviprodstrawberry-3.png",
  ],

  strength: "200 gm",
  packSize: "1 Pack",
  drugClass: "Dietary Supplements",

  dosage: `
Take 1 or 2 levelled scoops (1 scoop twice a day or 2 scoops once a day) of Zuvipro D in a cup.

Add a little warm milk and make a smooth paste.

Add milk while stirring briskly to fill the cup.

You may add sugar if needed.
`,

  coldStorage: "Yes",

  description: `
Zuvipro-D is an off-white coloured powder.

It is a protein supplement for special nutritional need during diabetes.

It provides the right nutrition for managing blood sugar levels.
`,

  indication: `
Protein powders in general are low in carbohydrates.

These usually do not contain more than 12 g of carbohydrates per serving.

Usage:

1 scoop twice a day or 2 scoops once a day.
`,

  clinicalEfficacy: `
Zuvipro-D improves the nutrient content of the diet and also has effects on the immune system of the diabetic patients.

Nutraceuticals may be used to improve health, delay the ageing process, prevent chronic diseases, increase life expectancy, or support the structure or function of the body.
`,

  safetyInformation: `
Read the label carefully before use.

Store in a cool and dry place, away from sunlight.

Keep out of the reach of children.

A dietary nutritional supplement not for medicinal use.

Do not exceed the recommended dose.
`,

  specialPrecautions: `
There are a number of risks for people with diabetes when using protein powder.

Apart from sugar, many protein powders contain other ingredients that may not be healthful, such as:

• Artificial sweeteners

• Artificial colors and flavorings
`,
},
{
  id: 70,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "antifol",
  name: "Antifol",
  subtitle: "Pemetrexed Inj 100 mg / 500 mg",
  type: "Injection",

  image: "/products3/antifol-1.png",

  images: [
    "/products3/antifol-1.png",
    "/products3/antifol-2.png",
    "/products3/antifol-3.png",
    "/products3/antifol100-1.png",
    "/products3/antifol100-2.png",
    "/products3/antifol100-3.png",
  ],

  strength: "100 mg / 500 mg",
  packSize: "1 Vial",
  drugClass: "Folic Acid Analogues",

  dosage: `
Combination Use with Cisplatin for Nonsqamous Non-Small Cell Lung Cancer or Malignant Pleural Mesothelioma

The recommended dose of Pemetrexed is 500 mg/m² infused over 2 hours beginning approximately 30 minutes after the end of the cycle.

The recommended dose of cisplatin is 75 mg/m² infused over 2 hours beginning approximately 30 minutes after the end of Pemetrexed administration.

Single-Agent Use as Maintenance Following First-Line Therapy, or as a Second-Line Therapy

The recommended dose of Pemetrexed is 500 mg/m² administered as an intravenous infusion over 10 minutes on Day 1 of each 21-day cycle.

Premedication Regimen and Concurrent Medications

Vitamin Supplementation

Folic acid 400 mcg to 1000 mcg orally to be initiated once daily, beginning 7 days before the first dose of Pemetrexed.

Continue folic acid during the full course of therapy and for 21 days after the last dose of Pemetrexed.

Vitamin B12 1 mg intramuscularly 1 week prior to the first dose of Pemetrexed and every 3 cycles thereafter to be administered.

Subsequent vitamin B12 injections may be given the same day as treatment with Pemetrexed.

Corticosteroids

Administer dexamethasone 4 mg by mouth twice daily the day before, the day of, and the day after Pemetrexed administration.

Laboratory Monitoring and Dose Reduction/Discontinuation Recommendations

Monitoring:

Complete blood cell counts, including platelet counts, should be performed on all patients receiving Pemetrexed.

Patients should be monitored for nadir and recovery, which were tested in the clinical study before each dose and on days 8 and 15 of each cycle.

Patients should not begin a new cycle of treatment unless:

• ANC is ≥ 1500 cells/mm³
• Platelet count is ≥ 100,000 cells/mm³
• Creatinine clearance is ≥ 45 mL/min

Periodic chemistry tests should be performed to evaluate renal and hepatic function.

Dose Reduction Recommendations

Dose adjustments at the start of a subsequent cycle should be based on nadir hematologic counts or maximum nonhematologic toxicity from the preceding cycle of therapy.

Treatment may be delayed to allow sufficient time for recovery.

Upon recovery, patients should be retreated according to the following guidelines:

Hematologic Toxicities

• Nadir ANC < 500/mm³ and nadir platelets ≥ 50,000/mm³:
  - 75% of previous dose (Pemetrexed and Cisplatin)

• Nadir platelets < 50,000/mm³ without bleeding regardless of nadir ANC:
  - 75% of previous dose (Pemetrexed and Cisplatin)

• Nadir platelets < 50,000/mm³ with bleeding regardless of nadir ANC:
  - 50% of previous dose (Pemetrexed and Cisplatin)

Nonhematologic Toxicities

• Any Grade 3 or 4 toxicities except mucositis:
  - 75% of previous dose of Pemetrexed
  - 75% of previous dose of Cisplatin

• Any diarrhea requiring hospitalization (irrespective of Grade) or Grade 3 or 4 diarrhea:
  - 75% of previous dose of Pemetrexed
  - 75% of previous dose of Cisplatin

• Grade 3 or 4 mucositis:
  - 50% of previous dose of Pemetrexed
  - 100% of previous dose of Cisplatin

Neurotoxicity

CTC Grade 0-1:
• 100% of previous dose of Pemetrexed
• 100% of previous dose of Cisplatin

CTC Grade 2:
• 100% of previous dose of Pemetrexed
• 50% of previous dose of Cisplatin

Discontinuation Recommendation

Pemetrexed therapy should be discontinued if a patient experiences any hematologic or nonhematologic Grade 3 or 4 toxicity after 2 dose reductions or immediately if Grade 3 or 4 neurotoxicity is observed.

Renal Impaired Patients

In clinical studies, patients with creatinine clearance ≥ 45 mL/min required no dose adjustments other than those recommended for all patients.

Insufficient numbers of patients with creatinine clearance below 45 mL/min have been treated to make dosage recommendations for this group of patients.

Therefore, Pemetrexed should not be administered to patients whose creatinine clearance is < 45 mL/min using the standard Cockcroft and Gault formula or GFR measured by Tc99m-DTPA serum clearance method.

(weight in kg) × (140-age)

Males:
(72) × serum creatinine (mg/100 ml)

Females:
Estimated creatinine clearance for males × 0.85

Caution should be exercised when administering Pemetrexed concurrently with NSAIDs to patients whose creatinine clearance is < 80 mL/min.
`,

  coldStorage: "No",

  description: `
Pemetrexed is a folate metabolic inhibitor belonging to the class of antifolate antineoplastic agents.

It disrupts folate-dependent metabolic processes essential for cell replication by inhibiting multiple folate-dependent enzymes involved in the biosynthesis of thymidine and purine nucleotides.

Pemetrexed is available as a sterile lyophilized powder for intravenous infusion.

Strengths available:

• 100 mg
• 500 mg
`,

  indication: `
Pemetrexed is indicated for:

• Nonsquamous Non-Small Cell Lung Cancer (NSCLC)

• Malignant Pleural Mesothelioma

It is used:

• In combination with Cisplatin for the treatment of malignant pleural mesothelioma

• In combination therapy for nonsquamous NSCLC

• As maintenance therapy following first-line treatment

• As second-line therapy in eligible patients
`,

  clinicalEfficacy: `
Pemetrexed has demonstrated efficacy in patients with nonsquamous non-small cell lung cancer and malignant pleural mesothelioma.

It is widely used as a folate antimetabolite that inhibits tumor cell replication by disrupting DNA and RNA synthesis pathways.

Clinical studies have demonstrated its utility both as a maintenance therapy and as part of combination regimens with Cisplatin.
`,

  safetyInformation: `
Patients receiving Pemetrexed should undergo regular monitoring of:

• Complete blood counts
• Platelet counts
• Renal function
• Hepatic function

Vitamin supplementation with:

• Folic Acid
• Vitamin B12

is required to reduce treatment-related toxicity.

Patients should not begin a new treatment cycle unless:

• ANC is ≥ 1500 cells/mm³
• Platelet count is ≥ 100,000 cells/mm³
• Creatinine clearance is ≥ 45 mL/min
`,

  specialPrecautions: `
USE IN SPECIFIC POPULATIONS

Pregnancy – Teratogenic Effects – Pregnancy Category D

Embryotoxicity was characterized by increased embryo-fetal deaths and reduced litter size.

If Pemetrexed is used during pregnancy, or if the patient becomes pregnant while taking this drug, the patient should be apprised of the potential hazard to the fetus.

Nursing Mothers

It is not known whether Pemetrexed or its metabolites are excreted in human milk.

Because many drugs are excreted in human milk, and because of the potential for serious adverse reactions in nursing infants from Pemetrexed, a decision should be made to discontinue nursing or discontinue the drug, taking into account the importance of the drug for the mother.

Pediatric Use

The efficacy of Pemetrexed in pediatric patients has not been demonstrated.

The most common toxicities reported were:

• Leukopenia
• Neutropenia / Granulocytopenia
• Anemia
• Thrombocytopenia
• Lymphopenia
• Increased ALT/AST
• Fatigue
• Nausea

Geriatric Use

Pemetrexed is known to be substantially excreted by the kidney, and the risk of adverse reactions may be greater in patients with impaired renal function.

Renal function monitoring is recommended with the administration of Pemetrexed.

No dose reductions other than those recommended for all patients are necessary for patients 65 years of age or older.

Patients with Hepatic Impairment

There was no effect of elevated AST, ALT, or total bilirubin on the pharmacokinetics of Pemetrexed.
`,
},
{
  id: 71,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "aprepet-z-combi-pack",
  name: "Aprepet-Z Combi Pack",
  subtitle: "Aprepitant Combi Pack Cap 125/80 mg",
  type: "Capsule",

  image: "/products3/aprepet-z-1.png",

  images: [
    "/products3/aprepet-z-1.png",
    "/products3/aprepet-z-2.png",
  ],

  strength: "125/80 mg",
  packSize: "1 x 3",
  drugClass: "Antiemetics",

  dosage: `
Aprepitant is given for 3 days as part of a regimen that includes a corticosteroid and a 5-HT3 antagonist.

The recommended dose of aprepitant is:

• 125 mg orally 1 hour prior to chemotherapy treatment (Day 1)

• 80 mg once daily in the morning on Days 2 and 3.
`,

  coldStorage: "No",

  description: `
Aprepitant is a substance P/neurokinin 1 (NK1) receptor antagonist, chemically described as:

5-[[(2R,3S)-2-[(1r)-1-[3,5-BIS (TRIFLUOROMETHYL) PHENYL] ETHOXY]-3-(4-fluorophenyl)-4-morpholinyl] methyl]-1,2-dihydro-3H-1,2,4-triazol-3-one.

Its empirical formula is:

C23H21F7N4O3

Aprepitant is a white to off-white crystalline solid, with a molecular weight of 534.43.

It is practically insoluble in water.

Aprepitant is sparingly soluble in ethanol and isopropyl alcohol.
`,

  indication: `
Aprepitant, for the treatment of adult patients with chemotherapy induced nausea and vomiting.
`,

  clinicalEfficacy: `
Aprepitant is a selective high-affinity antagonist of human substance P/neurokinin 1 (NK1) receptors.

Aprepitant has little or no affinity for:

• Serotonin (5-HT₃) receptors
• Dopamine receptors
• Corticosteroid receptors

the targets of existing therapies for chemotherapy-induced nausea and vomiting (CINV) and postoperative nausea and vomiting (PONV).

Aprepitant has been shown in animal models to inhibit emesis induced by cytotoxic chemotherapeutic agents, such as cisplatin, via central actions.

Animal and human Positron Emission Tomography (PET) studies with aprepitant have shown that it crosses the blood brain barrier and occupies brain NK1 receptors.

Animal and human studies show that aprepitant augments the antiemetic activity of:

• The 5-HT₃ receptor antagonist ondansetron
• The corticosteroid dexamethasone

and inhibits both the acute and delayed phases of cisplatin-induced emesis.
`,

  safetyInformation: `
Keep out of reach of children.
`,

  specialPrecautions: `
• Do not take aprepitant if you are allergic to aprepitant, any other medications, or any of the ingredients in aprepitant capsules or oral suspension.

• Do not take aprepitant if you are taking pimozide (Orap).

• Inform your doctor about all prescription and nonprescription medications, vitamins, nutritional supplements, and herbal products you are taking or plan to take.

Be sure to mention any of the following:

• Anticoagulants ("blood thinners") such as warfarin (Coumadin, Jantoven)

• Antifungals such as itraconazole (Onmel, Sporanox) and ketoconazole

• Benzodiazepines such as alprazolam (Xanax), diazepam (Valium), midazolam, and triazolam (Halcion)

• Cancer chemotherapy medications such as ifosfamide (Ifex), irinotecan (Camptosar), vinblastine, and vincristine (Marqibo Kit)

• Carbamazepine (Equetro, Tegretol, Teril)

• Clarithromycin (Biaxin, in Prevpac)

• Diltiazem (Cardizem, Cartia, Tiazac)

• HIV protease inhibitors such as nelfinavir (Viracept) and ritonavir (Norvir)

• Hormonal contraceptives (birth control pills, patches, rings, and injections)

• Nefazodone

• Oral steroids such as dexamethasone and methylprednisolone (Medrol)

• Phenytoin (Dilantin, Phenytek)

• Rifampin (Rifadin, Rimactane, in Rifamate, in Rifater)

• Troleandomycin (TAO; no longer available in U.S.)

• Inform your doctor if you have or have ever had liver disease.

• Inform your doctor if you are pregnant, plan to become pregnant, or are breastfeeding.

• If you are taking or receiving hormonal contraceptives (birth control pills, patches, rings, implants, or injections) during treatment with aprepitant, you should also use an additional method of birth control to avoid pregnancy during treatment with aprepitant and for one month after your final dose.
`,
},
{
  id: 72,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "aspraginaz",
  name: "Aspraginaz",
  subtitle: "L-Asparaginase Inj 5000 IU / 10000 IU",
  type: "Injection",

  image: "/products/aspraginaz/aspraginaz5000-1.jpeg",

  images: [
    "/products/aspraginaz/aspraginaz5000-1.jpeg",
    "/products/aspraginaz/aspraginaz5000-2.jpeg",
    "/products/aspraginaz/aspraginaz5000-3.jpeg",
    "/products/aspraginaz/aspraginaz10000-1.jpeg",
    "/products/aspraginaz/aspraginaz10000-2.jpeg",
    "/products/aspraginaz/aspraginaz10000-3.jpeg",
  ],

  strength: "5000 IU / 10000 IU",
  packSize: "1 Vial",
  drugClass: "Antineoplastic Agents",

  dosage: `
The recommended dose of Aspraginaz is 5,000/10000 International Units/m² intramuscularly (IM) or intravenously (IV) three times a week.

Parenteral drug products should be inspected visually for particulate matter, cloudiness or discoloration prior to administration, whenever solution and container permit.

If any of these are present, discard the solution.
`,

  coldStorage: "Yes",

  description: `
Aspraginaz (asparaginase) contains the enzyme L-asparagine amidohydrolase, type EC-2, derived from Escherichia coli.

Aspraginaz activity is expressed in terms of International Units according to the recommendation of the International Union of Biochemistry.

One International Unit of asparaginase is defined as that amount of enzyme required to generate 1 μmol of ammonia per minute at pH 7.3 and 37°C.

The specific activity of Aspraginaz is at least 225 International Units per milligram of protein.

Aspraginaz is provided as a sterile, white lyophilized plug or powder.
`,

  indication: `
Aspraginaz is indicated as a component of a multi-agent chemotherapeutic regimen for the treatment of patients with acute lymphoblastic leukemia (ALL).
`,

  clinicalEfficacy: `
The mechanism of action of Aspraginaz is thought to be based on selective killing of leukemic cells due to depletion of plasma asparagine.

Some leukemic cells are unable to synthesize asparagine due to a lack of asparagine synthetase and are dependent on an exogenous source of asparagine for survival.

Depletion of asparagine, which results from treatment with the enzyme L-asparaginase, kills the leukemic cells.

Normal cells, however, are less affected by the depletion due to their ability to synthesize asparagine.
`,

  safetyInformation: `
The mechanism of action of Aspraginaz is thought to be based on selective killing of leukemic cells due to depletion of plasma asparagine.

Some leukemic cells are unable to synthesize asparagine due to a lack of asparagine synthetase and are dependent on an exogenous source of asparagine for survival.

Depletion of asparagine, which results from treatment with the enzyme L-asparaginase, kills the leukemic cells.

Normal cells, however, are less affected by the depletion due to their ability to synthesize asparagine.
`,

  specialPrecautions: `
Anaphylaxis and Serious Allergic Reactions

Serious allergic reactions can occur in patients receiving Aspraginaz.

The risk of serious allergic reactions is higher in patients with prior exposure to Aspraginaz or other Escherichia coli-derived L-asparaginases.

Observe patients for one hour after administration of Aspraginaz in a setting with resuscitation equipment and other agents necessary to treat anaphylaxis, for example:

• Epinephrine
• Oxygen
• Intravenous steroids
• Antihistamines

Discontinue Aspraginaz in patients with serious allergic reactions.

Thrombosis

Serious thrombotic events, including sagittal sinus thrombosis can occur in patients receiving Aspraginaz.

Discontinue Aspraginaz in patients with serious thrombotic events.

Pancreatitis

Pancreatitis, in some cases fulminant or fatal, can occur in patients receiving Aspraginaz.

Evaluate patients with abdominal pain for evidence of pancreatitis.

Discontinue Aspraginaz in patients with pancreatitis.

Glucose Intolerance

Glucose intolerance can occur in patients receiving Aspraginaz.

In some cases, glucose intolerance is irreversible.

Cases of diabetic ketoacidosis have been reported.

Monitor serum glucose.
`,
},
{
  id: 73,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "bleoz",
  name: "Bleoz",
  subtitle: "Bleomycin Sulphate 15 IU",
  type: "Injection",

  image: "/products/bleoz/bleoz15-1.jpeg",

  images: [
    "/products/bleoz/bleoz15-1.jpeg",
    "/products/bleoz/bleoz15-2.jpeg",
    "/products/bleoz/bleoz15-3.jpeg",
  ],

  strength: "15 IU",
  packSize: "1 Vial",
  drugClass: "Antineoplastic Agent",

  dosage: `
Because of the possibility of an anaphylactoid reaction, lymphoma patients should be treated with 2 units or less for the first 2 doses.

If no acute reaction occurs, then the regular dosage schedule may be followed.

The following dose schedule is recommended:

Squamous Cell Carcinoma, Non-Hodgkin’s Lymphoma, Testicular Carcinoma

• 0.25 to 0.50 units/kg (10 to 20 units/m²)
• Given intravenously or subcutaneously
• Weekly or twice weekly

Hodgkin’s Disease

• 0.25 to 0.50 units/kg (10 to 20 units/m²)
• Given intravenously, intramuscularly or subcutaneously
• Weekly or twice weekly

After a 50% response, a maintenance dose of:

• 1 unit daily
or
• 5 units weekly intravenously or intramuscularly

Pulmonary toxicity of BLEOZ appears to be dose-related with a striking increase when the total dose is over 400 units.

Total doses over 400 units should be given with great caution.

Note:

When BLEOZ is used in combination with other antineoplastic agents, pulmonary toxicities may occur at lower doses.

Improvement of Hodgkin’s disease and testicular tumour is prompt and noted within 2 weeks.

If no improvement is seen by this time, improvement is unlikely.

Squamous cell cancer responds more slowly, sometimes requiring as long as 3 weeks before any improvement is noted.

Malignant Pleural Effusion

• 60 units administered as a single dose bolus intrapleural injection.

Use In Patients With Renal Insufficiency

The following dosing reductions are proposed for patients with creatinine clearance (CrCL) values of less than 50 ml/min:

Patient CrCL (mL/min) | BLEOZ Dose (%)

• 50 and above — 100%
• 40-50 — 70%
• 30-40 — 60%
• 20-30 — 55%
• 10-20 — 45%
• 5-10 — 40%

CrCL can be estimated from the individual patient’s measured serum creatinine (Scr) value using the Cockcroft and Gault formula:

Males:

CrCL = [weight × (140 – Age)] / (72 × Scr)

Females:

CrCL = 0.85 × [weight × (140 – Age)] / (72 × Scr)

Where:

• CrCL in mL/min/1.73m²
• Weight in kg
• Age in years
• Scr in mg/dL

Administration

BLEOZ may be given by:

• Intramuscular route
• Intravenous route
• Subcutaneous route
• Intrapleural route

Administration Precautions

Caution should be exercised when handling BLEOZ for injection.

Procedures for proper handling and disposal of anticancer drugs should be utilized.

To minimize the risk of dermal exposure, always wear impervious gloves when handling vials containing BLEOZ for injection.

If BLEOZ for injection contacts the skin, wash thoroughly with soap and water.

If contact with mucous membranes occurs, the membranes should be flushed immediately and thoroughly with water.

Intramuscular Or Subcutaneous Administration

The BLEOZ 15 units vial should be reconstituted with:

• 1 to 5 ml Sterile Water for Injection IP
or
• Sodium Chloride for Injection 0.9% USP
or
• Sterile Bacteriostatic Water for Injection USP

The BLEOZ 30 units vial should be reconstituted with:

• 2 to 10 ml of the above diluents

Intravenous Administration

The contents of the 15 units or 30 units vial should be dissolved in:

• 5 ml or 10 ml Sodium Chloride for Injection 0.9% USP

and administered slowly over a period of 10 minutes.

Intrapleural Administration

Sixty units of BLEOZ are dissolved in:

• 50 to 100 ml Sodium Chloride for Injection 0.9% USP

and administered through a thoracostomy tube following drainage of excess pleural fluid and confirmation of complete lung expansion.

The thoracostomy tube is clamped after BLEOZ instillation.

The patient is moved from the supine to the left and right lateral positions several times during the next four hours.

The clamp is then removed and suction re-established.

The amount of time the chest tube remains in place following sclerosis is dictated by the clinical situation.

The intrapleural injection of topical anesthetics or systemic narcotic analgesia is generally not required.

Parenteral drug products should be inspected visually for particulate matter and discoloration prior to administration, whenever solution and container permit.
`,

  coldStorage: "Yes",

  description: `
Bleomycin for Injection USP is a mixture of cytotoxic glycopeptide antibiotics isolated from a strain of Streptomyces verticillus and is freely soluble in water.

It is available as a lyophilized powder for intramuscular, intravenous or subcutaneous injection.

Each vial contains sterile bleomycin sulfate equivalent to:

• 15 units
or
• 30 units

of bleomycin.

Sulfuric acid or sodium hydroxide is used, if necessary, to adjust the pH.

Bleomycins are a group of related basic glycopeptides which differ in the terminal amine substituent of the common structural unit, bleomycin acid.

The main components of Bleomycin for Injection are:

• Bleomycin A2
• Bleomycin B2

Chemically:

Bleomycin A2 is:

N1-[3-(dimethylsulfonio)propyl]-bleomycinamide

Bleomycin B2 is:

N1-[4-(aminoiminomethyl)amino]butyl]-bleomycinamide

The molecular formula of Bleomycin A2 is:

C55H84N17O21S3

with a calculated molecular weight of 1414.

The molecular formula of Bleomycin B2 is:

C55H84N20O21S2

with a calculated molecular weight of 1425.
`,

  indication: `
BLEOZ should be considered a palliative treatment.

It has been shown to be useful in the management of the following neoplasms either as a single agent or in proven combinations with other approved chemotherapeutic agents.

Squamous Cell Carcinoma

• Head and neck (including mouth, tongue, tonsil, nasopharynx, oropharynx, sinus, palate, lip, buccal mucosa, gingivae, skin, larynx)

• Penis

• Cervix

• Vulva

The response to BLEOZ is poorer in patients with previously irradiated head and neck cancer.

Lymphomas

• Hodgkin’s disease

• Non-Hodgkin’s lymphoma

Testicular Carcinoma

BLEOZ is indicated in the treatment of testicular carcinoma, including:

• Embryonal cell carcinoma

• Choriocarcinoma

• Teratocarcinoma

Malignant Pleural Effusion

BLEOZ is effective as a sclerosing agent in the management of malignant pleural effusion and in the prevention of recurrent pleural effusions.
`,

  clinicalEfficacy: `
Although the exact mechanism of action of BLENOXANE (bleomycin sulfate injection) is unknown, available evidence indicates that the main mode of action is the inhibition of DNA synthesis with some evidence of lesser inhibition of RNA and protein synthesis.

Bleomycin is known to cause single, and to a lesser extent, double-stranded breaks in DNA.

In in vitro and in vivo experiments, bleomycin has been shown to cause cell cycle arrest in G2 and in mitosis.

When administered into the pleural cavity in the treatment of malignant pleural effusion, BLENOXANE (bleomycin sulfate injection) acts as a sclerosing agent.
`,

  safetyInformation: `
Bleomycin is a cytotoxic glycopeptide antibiotic associated with dose-related toxicities, particularly affecting the lungs, skin, and mucous membranes.

Pulmonary toxicity, including pneumonitis and pulmonary fibrosis, is the most serious adverse effect and may occur more frequently at cumulative doses exceeding 400 units, in elderly patients, and in those receiving supplemental oxygen or prior chest irradiation.

Fatal pulmonary reactions have been reported.

In animal toxicology studies, Bleomycin produced dose-dependent degenerative changes in the lungs characterized by:

• Interstitial fibrosis
• Inflammatory infiltration

Cutaneous reactions including:

• Hyperkeratosis
• Skin thickening
• Alopecia
• Nail changes

have also been observed and are considered related to its cytotoxic activity on epithelial tissues.

Bleomycin has demonstrated mutagenic potential in several in vitro and in vivo test systems.

Impairment of spermatogenesis and testicular atrophy have been reported in animal studies following repeated administration.

Reduced fertility may occur as a consequence of gonadal toxicity.

Renal impairment may increase systemic exposure to Bleomycin due to reduced elimination, thereby increasing the risk of severe toxicity.

Careful monitoring of:

• Pulmonary function
• Renal function
• Hematologic function

is recommended during treatment.

Anaphylactic reactions, including:

• Hypotension
• Fever
• Chills
• Wheezing

have been reported, particularly in lymphoma patients receiving initial doses.
`,

  specialPrecautions: `
Because Bleomycin sulfate may contain inactive ingredients, it may cause allergic reactions or other problems.

Tell your doctor or pharmacist if you have any medical history, especially:

• Immune system problems (e.g. chemotherapy, bone marrow problems)

• Kidney disease

• Liver disease

• Lung problems
`,
},
{
  id: 74,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "dazine",
  name: "Dazine",
  subtitle: "Dacarbazine Inj 200 mg / 500 mg",
  type: "Injection",

  image: "/products/dazine/dazine200-1.jpeg",

  images: [
    "/products/dazine/dazine200-1.jpeg",
    "/products/dazine/dazine200-2.jpeg",
    "/products/dazine/dazine200-3.jpeg",
    "/products/dazine/dazine500-1.jpeg",
    "/products/dazine/dazine500-2.jpeg",
    "/products/dazine/dazine500-3.jpeg",
  ],

  strength: "200 mg / 500 mg",
  packSize: "1 Vial",
  drugClass: "Antineoplastic Agent",

  dosage: `
Malignant Melanoma

The recommended dosage of Dazine is:

• 2 to 4.5 mg/kg/day for 10 days.

Treatment may be repeated at 4-week intervals.

An alternate recommended dosage is:

• 250 mg/square meter body surface/day IV for 5 days.

Treatment may be repeated every 3 weeks.

Hodgkin's Disease

The recommended dosage of Dazine in the treatment of Hodgkin's disease is:

• 150 mg/square meter body surface/day for 5 days

in combination with other effective drugs.

Treatment may be repeated every 4 weeks.

An alternative recommended dosage is:

• 375 mg/square metre of body surface on day 1

in combination with other effective drugs, to be repeated every 15 days.

Other

Combination with other antineoplastic agents.

Dosage of Dazine must be based on the clinical haematologic response and tolerance of the patient in order to obtain optimal therapeutic results.

Dacarbazine 100 mg/vial, 200 mg/vial and 500 mg/vial are reconstituted with:

• 9.9 ml
• 19.7 ml
• 50 ml

respectively of Sterile Water for Injection.

The resulting solution contains:

• 10 mg/ml of dacarbazine

having a pH of 3.0 to 4.0.

The calculated dose of the resulting solution is drawn into a syringe and administered only intravenously.

The reconstituted solution may be further diluted with:

• 5% Dextrose Injection
or
• Sodium Chloride Injection

and administered as an intravenous infusion.

After reconstitution and prior to use, the solution in the vial may be stored:

• At 4°C for up to 72 hours
or
• At normal room conditions (temperature and light) for up to 8 hours.

If the reconstituted solution is further diluted in:

• 5% Dextrose Injection
or
• Sodium Chloride Injection

the resulting solution may be stored:

• At 4°C for up to 24 hours
or
• At normal room conditions for up to 8 hours.
`,

  coldStorage: "Yes",

  description: `
Dacarbazine is an anticancer agent.

Although the exact mechanism of action of dacarbazine is not known, three hypotheses put forth are:

1) Inhibition of DNA synthesis by acting as a purine analog

2) Action as an alkylating agent

3) Interaction with SH groups
`,

  indication: `
Dazine is indicated in the treatment of:

• Metastatic malignant melanoma

• Hodgkin's disease as a secondary-line therapy when used in combination with other effective agents

• Neuroblastoma

• Soft-tissue sarcoma, including leiomyosarcoma
`,

  clinicalEfficacy: `
After intravenous administration of DTIC-Dome, the volume of distribution exceeds total body water content suggesting localization in some body tissue, probably the liver.

Its disappearance from the plasma is biphasic with:

• Initial half-life of 19 minutes

• Terminal half-life of 5 hours

In a patient with renal and hepatic dysfunctions, the half-lives were lengthened to:

• 55 minutes

• 7.2 hours

The average cumulative excretion of unchanged DTIC in the urine is 40% of the injected dose in 6 hours.

DTIC is subject to renal tubular secretion rather than glomerular filtration.

At therapeutic concentrations DTIC is not appreciably bound to human plasma protein.

In man, DTIC is extensively degraded.

Besides unchanged DTIC, 5-aminoimidazole-4-carboxamide (AIC) is a major metabolite of DTIC excreted in the urine.

AIC is not derived endogenously but from the injected DTIC, because the administration of radioactive DTIC labeled with 14C in the imidazole portion of the molecule (DTIC-2-14C) gives rise to AIC-2-14C.
`,

  safetyInformation: `
Hepatic toxicity accompanied by hepatic vein thrombosis and hepatocellular necrosis resulting in death has been observed mostly when dacarbazine has been administered concomitantly with other antineoplastic drugs.

However, it has also been reported in some patients treated with DTIC-Dome alone.

Anaphylaxis can occur following the administration of dacarbazine.
`,

  specialPrecautions: `
Before receiving dacarbazine, tell your doctor if you are breast-feeding.

Plan to avoid unnecessary or prolonged exposure to sunlight and to wear:

• Protective clothing

• Sunglasses

• Sunscreen

Dacarbazine may make your skin sensitive to sunlight.
`,
},
{
  id: 75,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "fukayna",
  name: "Fukayna",
  subtitle: "Fulvestrant Inj 250 mg",
  type: "Injection",

  image: "/products/fukayna/fukayna250-1.jpeg",

  images: [
    "/products/fukayna/fukayna250-1.jpeg",
    "/products/fukayna/fukayna250-2.jpeg",
    "/products/fukayna/fukayna250-3.jpeg",
  ],

  strength: "250 mg",
  packSize: "1 PFS",
  drugClass: "Antiestrogens",

  dosage: `
A dose of 250 mg is recommended for patients with moderate hepatic impairment (Child-Pugh class B) to be administered intramuscularly into the buttock (gluteal area) slowly (1-2 minutes) as one 5 mL injection on Days 1, 15, 29, and once monthly thereafter.

The recommended dose of Fukayna is 250 mg to be administered intramuscularly into the buttocks (gluteal area) slowly (1-2 minutes per injection) as two 5 mL injections, one in each buttock, on Days 1, 15, 29, and once monthly thereafter.
`,

  coldStorage: "Yes",

  description: `
Fukayna (fulvestrant) injection for intramuscular administration is an estrogen receptor antagonist.

The chemical name is:

7-alpha-[9-(4,4,5,5,5-penta fluoropentylsulphinyl) nonyl]estra-1,3,5-(10)-triene-3,17-beta-diol.

Fulvestrant is a white powder with a molecular weight of 606.77.
`,

  indication: `
Fukayna is indicated for the treatment of:

• Hormone receptor (HR)-positive, human epidermal growth factor receptor 2 (HER2)-negative advanced breast cancer in postmenopausal women not previously treated with endocrine therapy

• HR-positive advanced breast cancer in postmenopausal women with disease progression following endocrine therapy

• HR-positive, HER2-negative advanced or metastatic breast cancer in postmenopausal women in combination with ribociclib as initial endocrine-based therapy or following disease progression on endocrine therapy

• HR-positive, HER2-negative advanced or metastatic breast cancer in combination with palbociclib or abemaciclib in women with disease progression after endocrine therapy
`,

  clinicalEfficacy: `
Many breast cancers have estrogen receptors (ER) and the growth of these tumors can be stimulated by estrogen.

Fulvestrant is an estrogen receptor antagonist that binds to the estrogen receptor in a competitive manner with affinity comparable to that of estradiol and downregulates the ER protein in human breast cancer cells.

Fulvestrant inhibited the growth of established MCF-7 xenografts and of tamoxifen-resistant breast tumor xenografts.
`,

  safetyInformation: `
• Keep out of reach of children.

• Take as directed by physician.
`,

  specialPrecautions: `
Embryo-Fetal Toxicity

Based on findings from animal studies and its mechanism of action, Fukayna can cause fetal harm when administered to a pregnant woman.

In animal reproduction studies, administration of fulvestrant to pregnant rats and rabbits during organogenesis resulted in embryo-fetal toxicity at daily doses that are significantly less than the maximum recommended human dose.

Lactation

Advise women not to breastfeed during treatment with Fukayna and for one year after the last dose.
`,
},
{
  id: 76,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "graniz",
  name: "Graniz",
  subtitle: "Granisetron Hydrochloride Inj 3 mg",
  type: "Injection",

  image: "/products3/graniz-1.png",

  images: [
    "/products3/graniz-1.png",
    "/products3/graniz-2.png",
    "/products3/graniz-3.png",
  ],

  strength: "3 mg",
  packSize: "1 Vial",
  drugClass: "Antiemetics, Selective 5-HT3 Antagonist",

  dosage: `
Cytostatic Therapy

The recommended dosage for Granisetron injection is 40 ug/kg administration intravenously within 30 minutes before initiation of chemotherapy.

Injection may be administered intravenously either:

• Undiluted over 30 seconds
or
• Diluted over 5 minutes

One additional dose of 40 ug/kg body weight (up to 3 mg) may be administered within a 24-hour period if required.

This additional dose should be administered over five minutes.

The administration should be completed prior to the start of cytostatic therapy.

Renally Impaired

No special requirements apply.

Hepatically Impaired

No special requirements apply.

Post Operative Nausea and Vomiting

Adults

For prevention in adults, a single dose of 1 mg of Granisetron injection should be diluted to 5 ml and administered as a slow intravenous injection (over 30 seconds).

Administration should be completed prior to induction of anaesthesia.

For the treatment of established postoperative nausea and vomiting in adults, a single dose of 1 mg of Granisetron injection should be diluted to 5 ml and administered by slow intravenous injection (over 30 seconds).

Children

There is no experience in the use of Granisetron injection in the prevention and treatment of postoperative nausea and vomiting in children under 12 years of age.

Granisetron injection is therefore not recommended for the treatment of postoperative nausea and vomiting in this age group.

Elderly

As for adults.

Renally Impaired

As for adults.

Hepatically Impaired

As for adults.

Instructions For Use & Handling

As a general precaution, GRANIZ injection should not be mixed in solution with other drugs.

Prophylactic administration of Granisetron injection should be completed prior to the start of cytostatic therapy or induction of anesthesia.

Preparation Of The Infusion

Children

To prepare the dose of 40 ug/kg the appropriate volume is withdrawn and diluted with infusion fluid to a total volume of 10 to 30 ml.

Any one of the following solutions may be used:

• 0.9% w/v Sodium Chloride Injection

• 0.18% w/v Sodium Chloride Injection and 4% w/v Glucose Injection

• 5% w/v Glucose Injection

• Hartmann’s Solution for Injection

Adults

To prepare a dose of 1 mg, 1 ml should be withdrawn from the vial and diluted to 5 ml with 0.9% w/v Sodium Chloride Injection.

No other diluents should be used.

Ideally, intravenous infusion of Granisetron injection should be prepared at the time of administration.

After dilution, or when the container is opened for the first time, the shelf life is 24 hours when stored at ambient temperature in normal indoor illumination, protected from direct sunlight.

It must not be used after 24 hours.

If to be stored after preparation, Granisetron infusions must be prepared under aseptic conditions.
`,

  coldStorage: "No",

  description: `
Graniz Injection is a prescription medicine used to treat the symptoms of nausea and vomiting caused by chemotherapy, radiation or postoperative conditions.

Graniz Injection may be used alone or with other medications.

Graniz Injection belongs to a class of drugs called Antiemetics, Selective 5-HT3 Antagonist.

Chemically Granisetron Hydrochloride is:

1-Methyl-N-[(3-endo)-9-methyl-9-aza bicyclo[3.3.1]non-3-yl]-1H-indazole-3-carboxamide hydrochloride.
`,

  indication: `
Granisetron injection is indicated for the prevention or treatment of nausea and vomiting with the treatment of cancer by radiotherapy and chemotherapy and for the prevention of nausea and vomiting.

Usage:

As directed by the physician.
`,

  clinicalEfficacy: `
Granisetron is a selective 5-hydroxytryptamine3 (5-HT3) receptor antagonist with little or no affinity for other serotonin receptors, including:

• 5-HT1

• 5-HT1A

• 5-HT1B/C

• 5-HT2

and for:

• Alpha1-adrenoreceptors

• Alpha2-adrenoreceptors

• Beta-adrenoreceptors

• Dopamine-D2 receptors

• Histamine-H1 receptors

• Benzodiazepine receptors

• Picrotoxin receptors

• Opioid receptors

Animal pharmacological studies have shown that in binding to 5-HT3 receptors, granisetron blocks serotonin stimulation and is effective in alleviating the retching and vomiting evoked by cytostatic treatment.
`,

  safetyInformation: `
• Read the label carefully before use.

• Store below 30°C.

• Protect from light.

• Do not freeze.

• Keep out of the reach of children.
`,

  specialPrecautions: `
Pregnancy & Lactation

Whilst animal studies have shown no teratogenic effects, there is no experience of Granisetron injection in human pregnancy.

Therefore Granisetron injection should not be administered to pregnant women unless there are compelling reasons.

There is no data on the excretion of granisetron in breast milk.

Breastfeeding should, therefore, be discontinued during therapy.
`,
},
{
  id: 77,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "peg-aspraginaz",
  name: "PEG - Aspraginaz",
  subtitle: "Peg L-Asparaginase Inj 3750 IU",
  type: "Injection",

  image: "/products/peg-aspraginaz/peg-aspraginaz3750-1.jpeg",

  images: [
    "/products/peg-aspraginaz/peg-aspraginaz3750-1.jpeg",
    "/products/peg-aspraginaz/peg-aspraginaz3750-2.jpeg",
    "/products/peg-aspraginaz/peg-aspraginaz3750-3.jpeg",
  ],

  strength: "3750 IU",
  packSize: "1 Vial",
  drugClass: "Antineoplastic Agents",

  dosage: `
The recommended dose of PEG – Aspraginaz is 3750 International Units/m² intramuscularly (IM) or intravenously (IV) three times a week.

When PEG – Aspraginaz is administered IM, the volume at a single injection site should be limited to 2 mL.

If a volume greater than 2 mL is to be administered, two injection sites should be used.

Discard unused portion.
`,

  coldStorage: "Yes",

  description: `
PEG – Aspraginaz (asparaginase) contains the enzyme L-asparagine amidohydrolase, type EC-2, derived from Escherichia coli.

PEG – Aspraginaz activity is expressed in terms of International Units according to the recommendation of the International Union of Biochemistry.

One International Unit of asparaginase is defined as that amount of enzyme required to generate 1 μmol of ammonia per minute at pH 7.3 and 37°C.

The specific activity of PEG – Aspraginaz is at least 225 International Units per milligram of protein.
`,

  indication: `
PEG – Aspraginaz is indicated as a component of a multi-agent chemotherapeutic regimen for the treatment of patients with acute lymphoblastic leukemia (ALL).
`,

  clinicalEfficacy: `
The mechanism of action of PEG – Aspraginaz is thought to be based on selective killing of leukemic cells due to depletion of plasma asparagine.

Some leukemic cells are unable to synthesise asparagine due to a lack of asparagine synthetase and are dependent on an exogenous source of asparagine for survival.

Depletion of asparagine, which results from treatment with the enzyme L-asparaginase, kills the leukemic cells.

Normal cells, however, are less affected by the depletion due to their ability to synthesise asparagine.
`,

  safetyInformation: `
• Keep out of reach of children.

• Do not exceed the recommended dose.
`,

  specialPrecautions: `
Anaphylaxis and Serious Allergic Reactions

Serious allergic reactions can occur in patients receiving PEG – Aspraginaz.

The risk of serious allergic reactions is higher in patients with prior exposure to PEG – Aspraginaz or other Escherichia coli-derived L-asparaginases.

Observe patients for one hour after administration of PEG – Aspraginaz in a setting with resuscitation equipment and other agents necessary to treat anaphylaxis, for example:

• Epinephrine

• Oxygen

• Intravenous steroids

• Antihistamines

Discontinue PEG – Aspraginaz in patients with serious allergic reactions.

Thrombosis

Serious thrombotic events, including sagittal sinus thrombosis can occur in patients receiving PEG – Aspraginaz.

Discontinue PEG – Aspraginaz in patients with serious thrombotic events.

Pancreatitis

Pancreatitis, in some cases fulminant or fatal, can occur in patients receiving PEG – Aspraginaz.

Evaluate patients with abdominal pain for evidence of pancreatitis.

Discontinue PEG – Aspraginaz in patients with pancreatitis.

Glucose Intolerance

Glucose intolerance can occur in patients receiving PEG – Aspraginaz.

In some cases, glucose intolerance is irreversible.

Cases of diabetic ketoacidosis have been reported.

Monitor serum glucose.

Nursing Mothers

It is not known whether PEG – Aspraginaz is excreted in human milk.

Because many drugs are excreted in human milk and because of the potential for serious adverse reactions in nursing infants from PEG – Aspraginaz, a decision should be made to discontinue nursing or to discontinue the drug, taking into account the importance of the drug to the mother.
`,
},
{
  id: 78,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "peg-zuvigrast",
  name: "Peg Zuvigrast",
  subtitle: "Peg Filgrastim Inj 6 mg",
  type: "Injection",

  image: "/products/peg-zuvigrast/peg-zuvigrast6-1.jpeg",

  images: [
    "/products/peg-zuvigrast/peg-zuvigrast6-1.jpeg",
    "/products/peg-zuvigrast/peg-zuvigrast6-2.jpeg",
    "/products/peg-zuvigrast/peg-zuvigrast6-3.jpeg",
  ],

  strength: "6 mg",
  packSize: "1 Vial",
  drugClass: "Hematopoietic Growth Factors",

  dosage: `
The recommended dosage of pegfilgrastim is a single subcutaneous injection of 6 mg administered by subcutaneous route once per chemotherapy cycle.

Pegfilgrastim should not be administered in the period between 14 days before and 24 hours after administration of cytotoxic chemotherapy.

The 6 mg fixed-dose formulation should not be used in infants, children, and smaller adolescents weighing less than 45 kg.

No dosing adjustment is necessary for renal dysfunction.

Pegfilgrastim should be visually inspected for discolouration and particulate matter, and if found, should not be administered.
`,

  coldStorage: "Yes",

  description: `
Pegfilgrastim is a covalent conjugate of recombinant methionyl human GCSF (filgrastim) and monomethoxypolyethylene glycol.

Filgrastim is a water-soluble 175 amino acid protein with a molecular weight of approximately 19 kilodaltons.

Filgrastim is obtained from the bacterial fermentation of a strain of Escherichia coli transformed with a genetically engineered plasmid containing the human GCSF gene.

To produce pegfilgrastim, a 20 kDa monomethoxypolyethylene glycol molecule is covalently bound to the N-terminal methionyl residue of filgrastim.

The average molecular weight of pegfilgrastim is approximately 39 kDa.

Each syringe contains 6 mg Pegfilgrastim (based on protein weight) in a sterile, clear, colorless, preservative-free solution.

The pH of the solution is 4.0.
`,

  indication: `
Pegfilgrastim is indicated to decrease the incidence of infection, as manifested by febrile neutropenia, in patients with non-myeloid malignancies receiving myelosuppressive anticancer drugs associated with a clinically significant incidence of febrile neutropenia.
`,

  clinicalEfficacy: `
Administration of pegfilgrastim is effective and safe in reducing the risk of grades 3/4 neutropenia and FN in breast cancer patients after receiving chemotherapy.

Pegfilgrastim products are colony-stimulating factors that act on hematopoietic cells by binding to specific cell surface receptors, thereby stimulating proliferation, differentiation, commitment, and end cell functional activation.
`,

  safetyInformation: `
• Read the label carefully before use.

• Keep out of the reach of children.

• Do not exceed the recommended dose.
`,

  specialPrecautions: `
Use With Chemotherapy And/Or Radiation Therapy

Pegfilgrastim should not be administered in the period between 14 days before and 24 hours after administration of cytotoxic chemotherapy because of the potential for an increase in sensitivity of rapidly dividing myeloid cells to cytotoxic chemotherapy.

The use of pegfilgrastim has not been studied in patients receiving chemotherapy associated with delayed myelosuppression (e.g., nitrosourea, mitomycin C).

The administration of pegfilgrastim concomitantly with 5-fluorouracil or other antimetabolites has not been evaluated in patients.

Administration of pegfilgrastim at 0, 1 and 3 days before 5-fluorouracil results in increased mortality in mice.

Administration of pegfilgrastim 24 hours after 5-fluorouracil did not adversely affect survival.

The use of pegfilgrastim has not been studied in patients receiving radiation therapy.

Potential For Tumour-Growth-Stimulating Effects On Malignant Cells

The granulocyte colony-stimulating factor (GCSF) receptor through which pegfilgrastim and filgrastim act has been found on tumor cell lines.

The possibility that pegfilgrastim acts as a growth factor for any tumour type, including myeloid malignancies and myelodysplastic disease, for which pegfilgrastim is not approved, cannot be excluded.

Laboratory Monitoring

To assess the patient’s hematologic status and ability to tolerate myelosuppressive chemotherapy, a complete blood count and platelet count should be obtained before chemotherapy is administered.

Regular monitoring of haematocrit value and platelet count is recommended.

Carcinogenesis, Mutagenesis & Impairment Of Fertility

No mutagenesis studies were conducted with pegfilgrastim.

The carcinogenic potential of pegfilgrastim has not been evaluated in long-term animal studies.

In toxicity studies of 6 months' duration in rats given once-weekly subcutaneous injections of up to 1000 mcg/kg of pegfilgrastim, no precancerous or cancerous lesions were noted.

When administered once weekly via subcutaneous injections to male and female rats at doses up to 1000 mcg/kg prior to, during mating, reproductive performance, fertility and sperm assessment parameters were not affected.

USE IN SPECIAL POPULATIONS

Pregnancy

There are no adequate and well-controlled studies in pregnant women.

Pegfilgrastim should be used during pregnancy only if the potential benefit to the mother justifies the potential risk to the foetus.

Nursing Mothers

It is not known whether pegfilgrastim is secreted in human milk.

Caution should be exercised when administered to a nursing woman.

Pediatric Use

Safety and effectiveness of pegfilgrastim in paediatric patients have not been established.

The 6 mg fixed-dose formulation should not be used in infants, children and smaller adolescents weighing less than 45 kg.

It is not known whether pegfilgrastim is secreted in human milk.

Caution should be exercised when administered to a nursing woman.

Geriatric Use

No overall differences in safety or effectiveness were observed between patients aged 65 and older and younger patients.

Renal Impairment

Pegfilgrastim dose adjustment in patients with renal dysfunction is not necessary.
`,
},
{
  id: 79,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "ridoxia",
  name: "Ridoxia",
  subtitle: "Megestrol Acetate Tab 160 mg",
  type: "Tablet",

  image: "/products3/ridoxia-1.png",

  images: [
    "/products3/ridoxia-1.png",
    "/products3/ridoxia-2.png",
    "/products3/ridoxia-3.png",
  ],

  strength: "160 mg",
  packSize: "1 x 10",
  drugClass: "Antineoplastics, Hormones; Progestins; Appetite Stimulants",

  dosage: `
Breast Cancer

• 160 mg/day (40 mg q.i.d.)

Endometrial Carcinoma

• 40 to 320 mg/day in divided doses

At least 2 months of continuous treatment is considered an adequate period for determining the efficacy of megestrol acetate.
`,

  coldStorage: "No",

  description: `
Megestrol acetate is a synthetic, antineoplastic and progestational drug.

Megestrol acetate is a white, crystalline solid chemically designated as:

17(alpha)-(acetyloxy)-6-methylpregna-4,6-diene-3,20-dione.

Solubility at 37°C in water is 2 mcg per mL.

Solubility in plasma is 24 mcg per mL.

Its molecular weight is 384.51.

The molecular formula is:

C₂₄H₃₂O₄

Megestrol acetate is supplied as tablets for oral administration containing 20 mg and 40 mg megestrol acetate.

Megestrol acetate tablets contain the following inactive ingredients:

• Acacia spray dried

• Colloidal silicon dioxide

• Corn starch

• Di-calcium phosphate dihydrate powder

• Lactose hydrous impalpable

• Magnesium stearate

• Pregelatinized starch
`,

  indication: `
Indication

Megestrol acetate tablets are indicated for the palliative treatment of advanced carcinoma of the breast or endometrium (i.e., recurrent, inoperable, or metastatic disease).

It should not be used in lieu of currently accepted procedures such as:

• Surgery

• Radiation

• Chemotherapy

Usage

Megestrol tablets are used to relieve the symptoms and reduce the suffering caused by:

• Advanced breast cancer

• Advanced endometrial cancer (cancer that begins in the lining of the uterus)
`,

  clinicalEfficacy: `
While the precise mechanism by which megestrol produces its antineoplastic effects against endometrial carcinoma is unknown at the present time, inhibition of pituitary gonadotropin production and resultant decrease in estrogen secretion may be factors.

There is evidence to suggest a local effect as a result of the marked changes brought about by the direct instillation of progestational agents into the endometrial cavity.

The antineoplastic action of megestrol acetate on carcinoma of the breast is effected by modifying the action of other steroid hormones and by exerting a direct cytotoxic effect on tumor cells.

In metastatic cancer, hormone receptors may be present in some tissues but not others.

The receptor mechanism is a cyclic process whereby estrogen produced by the ovaries enters the target cell, forms a complex with the cytoplasmic receptor and is transported into the cell nucleus.

There it induces gene transcription and leads to the alteration of normal cell functions.

Pharmacologic doses of megestrol acetate not only decrease the number of hormone-dependent human breast cancer cells but also are capable of modifying and abolishing the stimulatory effects of estrogen on these cells.

It has been suggested that progestins may inhibit in one of two ways:

• By interfering with either the stability, availability, or turn over of the estrogen receptor complex in its interaction with genes

• Or in conjunction with the progestin receptor complex, by interacting directly with the genome to turn off specific estrogen-responsive genes
`,

  safetyInformation: `
Megestrol may harm an unborn baby.

Your doctor may order a pregnancy test before starting this medication.

Women of childbearing age should ask about reliable forms of birth control while taking this medication.

If you become pregnant, talk to your doctor right away about the risks and benefits of this medication.
`,

  specialPrecautions: `
General

Close surveillance is indicated for any patient treated for recurrent or metastatic cancer.

Use with caution in patients with a history of thromboembolic disease.

Use In Diabetics

Exacerbation of pre-existing diabetes with increased insulin requirements has been reported in association with the use of megestrol.

Laboratory Tests

Breast malignancies in which estrogen and/or progesterone receptors are positive are more likely to respond to megestrol.
`,
},
{
  id: 80,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "z-blastin",
  name: "Z-Blastin",
  subtitle: "Vinblastine Inj 10 mg",
  type: "Injection",

  image: "/products/z-blastin/z-blastin10-1.jpeg",

  images: [
    "/products/z-blastin/z-blastin10-1.jpeg",
    "/products/z-blastin/z-blastin10-2.jpeg",
    "/products/z-blastin/z-blastin10-3.jpeg",
  ],

  strength: "10 mg",
  packSize: "1 Vial",
  drugClass: "Antineoplastics, Vinca Alkaloid",

  dosage: `
It is wise to initiate therapy for adults by administering a single intravenous dose of 3.7 mg/m² of body surface area (BSA).

Thereafter, white-blood-cell counts should be made to determine the patient’s sensitivity to vinblastine sulphate.

A simplified and conservative incremental approach to dosage at weekly intervals for adults may be outlined as follows:

• First dose – 3.7 mg/m² BSA

• Second dose – 5.5 mg/m² BSA

• Third dose – 7.4 mg/m² BSA

• Fourth dose – 9.25 mg/m² BSA

• Fifth dose – 11.1 mg/m² BSA

Paediatric Patients

Doses of vinblastine sulphate in paediatric patients varied depending on the schedule used and whether vinblastine sulphate was administered as a single agent or incorporated within a particular chemotherapeutic regimen.

As a single agent for Letterer-Siwe disease (histiocytosis X), the initial dose of vinblastine sulphate was reported as 6.5 mg/m².

When vinblastine sulphate was used in combination with other chemotherapeutic agents for the treatment of Hodgkin’s disease, the initial dose was reported as 6 mg/m².

For testicular germ cell carcinomas, the initial dose of vinblastine sulphate was reported as 3 mg/m² in a combination regimen.

Dose modifications should be guided by haematologic tolerance.

Patients With Renal Or Hepatic Impairment

A reduction of 50% in the dose of vinblastine sulphate is recommended for patients having a direct serum bilirubin value above 3 mg/100 mL.

Since metabolism and excretion are primarily hepatic, no modification is recommended for patients with impaired renal function.
`,

  coldStorage: "Yes",

  description: `
Vinblastine Sulphate for Injection USP is vincaleukoblastine sulphate (1:1) (salt).

It is the salt of an alkaloid extracted from Vinca rosea Linn., a common flowering herb known as the periwinkle (more properly known as Catharanthus roseus G. Don).

Previously, the generic name was vincaleukoblastine, abbreviated VLB.

It is a stathmokinetic, oncolytic agent.

When treated in vitro with this preparation, growing cells are arrested in metaphase.

Chemical and physical evidence indicates that vinblastine sulphate has the molecular formula:

C₄₆H₅₈O₉N₄ • H₂SO₄

and that it is a dimeric alkaloid containing both indole and dihydroindole moieties.

Vinblastine sulphate is a white to off-white powder.

It is:

• Freely soluble in water

• Soluble in methanol

• Slightly soluble in ethanol

• Insoluble in benzene, ether, and naphtha

The clinical formulation is supplied in a sterile form for intravenous use only.

Vials of Vinblastine Sulphate for Injection USP contain 10 mg (0.011 mmol) of vinblastine sulphate, in the form of a white, amorphous, solid lyophilised plug, without excipients.

After reconstitution with sodium chloride solution, the pH of the resulting solution lies in the range of 3.5 to 5.
`,

  indication: `
Vinblastine sulphate (vinblastine sulphate injection) is indicated in the palliative treatment of the following:

Frequently Responsive Malignancies

• Generalized Hodgkin’s disease (Stages III and IV, Ann Arbor modification of Rye staging system)

• Lymphocytic lymphoma (nodular and diffuse, poorly and well differentiated)

• Histiocytic lymphoma

• Mycosis fungoides (advanced stages)

• Advanced carcinoma of the testis

• Kaposi’s sarcoma

• Letterer-Siwe disease (histiocytosis X)

Less Frequently Responsive Malignancies

• Choriocarcinoma resistant to other chemotherapeutic agents

• Carcinoma of the breast, unresponsive to appropriate endocrine surgery and hormonal therapy

Current principles of chemotherapy for many types of cancer include the concurrent administration of several antineoplastic agents.

For enhanced therapeutic effect without additive toxicity, agents with different dose-limiting clinical toxicities and different mechanisms of action are generally selected.

Therefore, although vinblastine sulfate (vinblastine sulfate injection) is effective as a single agent in the aforementioned indications, it is usually administered in combination with other antineoplastic drugs.

Such combination therapy produces a greater percentage of response than does a single-agent regimen.

These principles have been applied, for example, in the chemotherapy of Hodgkin’s disease.

Hodgkin’s Disease

Vinblastine sulfate (vinblastine sulfate injection) has been shown to be one of the most effective single agents for the treatment of Hodgkin’s disease.

Advanced Hodgkin’s disease has also been successfully treated with several multiple-drug regimens that included vinblastine sulfate (vinblastine sulfate injection).

Patients who had relapses after treatment with the MOPP program:

• Mechlorethamine hydrochloride (nitrogen mustard)

• Vincristine sulfate

• Prednisone

• Procarbazine

have likewise responded to combination-drug therapy that included vinblastine sulfate (vinblastine sulfate injection).

A protocol using cyclophosphamide in place of nitrogen mustard and vinblastine sulfate (vinblastine sulfate injection) instead of vincristine sulfate is an alternative therapy for previously untreated patients with advanced Hodgkin’s disease.

Advanced testicular germinal-cell cancers (embryonal carcinoma, teratocarcinoma, and choriocarcinoma) are sensitive to vinblastine sulfate (vinblastine sulfate injection) alone, but better clinical results are achieved when vinblastine sulfate (vinblastine sulfate injection) is administered concomitantly with other antineoplastic agents.

The effect of bleomycin is significantly enhanced if vinblastine sulfate (vinblastine sulfate injection) is administered 6 to 8 hours prior to the administration of bleomycin.

This schedule permits more cells to be arrested during metaphase, the stage of the cell cycle in which bleomycin is active.
`,

  clinicalEfficacy: `
The action of vinblastine sulfate is different from that of other recognized antineoplastic agents.

Tissue-culture studies suggest an interference with metabolic pathways of amino acids leading from glutamic acid to the citric acid cycle and to urea.

In vivo experiments tend to confirm the in vitro results.

A number of in vitro and in vivo studies have demonstrated that vinblastine sulfate (vinblastine sulfate injection) produces a stathmokinetic effect and various atypical mitotic figures.

The therapeutic responses, however, are not fully explained by the cytologic changes, since these changes are sometimes observed clinically and experimentally in the absence of any oncolytic effects.
`,

  safetyInformation: `
• Read the label carefully before use.

• Store in a cool and dry place, away from sunlight.

• Keep out of the reach of children.
`,

  specialPrecautions: `
General

Toxicity may be enhanced in the presence of hepatic insufficiency.

In patients with malignant-cell infiltration of the bone marrow, the leukocyte and platelet counts have sometimes fallen precipitously after moderate doses of vinblastine sulfate (vinblastine sulfate injection).

Further use of the drug in such patients is inadvisable.

Laboratory Tests

Since dose-limiting clinical toxicity is the result of depression of the white-blood-cell count, it is imperative that this count be obtained just before the planned dose of vinblastine sulfate.

Following administration of vinblastine sulfate, a fall in the white-blood-cell count may occur.

The nadir of this fall is observed from 5 to 10 days following a dose.

Recovery to pretreatment levels is usually observed from 7 to 14 days after treatment.

These effects will be exaggerated when preexisting bone marrow damage is present and also with the higher recommended doses.

The presence of this drug or its metabolites in blood or body tissues is not known to interfere with clinical laboratory tests.

Carcinogenesis, Mutagenesis, Impairment of Fertility

Aspermia has been reported in man.

Animal studies suggest that teratogenic effects may occur.

Animal studies have shown metaphase arrest and degenerative changes in germ cells.

Amenorrhea has occurred in some patients treated with the combination consisting of:

• An alkylating agent

• Procarbazine

• Prednisone

• Vinblastine sulfate

Its occurrence was related to the total dose of these 4 agents used.

Recovery of menses was frequent.

The same combination of drugs given to male patients produced azoospermia.

If spermatogenesis did return, it was not likely to do so with less than 2 years of unmaintained remission.

Mutagenicity

Tests in Salmonella typhimurium and with the dominant lethal assay in mice failed to demonstrate mutagenicity.

Sperm abnormalities have been noted in mice.

Vinblastine sulfate has produced an increase in micronuclei formation in bone marrow cells of mice.

However, since vinblastine sulfate inhibits mitotic spindle formation, it cannot be concluded that this is evidence of mutagenicity.

Additional studies in mice demonstrated no reduction in fertility of males.

Chromosomal translocations did occur in male mice.

First-generation male offspring of these mice were not heterozygous translocation carriers.

Pregnancy

Teratogenic Effects; Pregnancy Category.

Vinblastine sulfate should be given to a pregnant woman only if clearly needed.

Animal studies suggest that teratogenic effects may occur.

Nursing Mothers

It is not known whether this drug is excreted in human milk.

Because many drugs are excreted in human milk and because of the potential for serious adverse reactions from vinblastine sulfate in nursing infants, a decision should be made whether to discontinue nursing or the drug, taking into account the importance of the drug to the mother.
`,
},
{
  id: 81,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "z-cristin",
  name: "Z-Cristin",
  subtitle: "Vincristine Inj 1 mg",
  type: "Injection",

  image: "/products/z-cristin/z-cristin1-1.jpeg",

  images: [
    "/products/z-cristin/z-cristin1-1.jpeg",
    "/products/z-cristin/z-cristin1-2.jpeg",
    "/products/z-cristin/z-cristin1-3.jpeg",
  ],

  strength: "1 mg",
  packSize: "1 Vial",
  drugClass: "Antineoplastics, Vinca Alkaloid",

  dosage: `
This preparation is for intravenous use only.

Neurotoxicity appears to be dose related.

Extreme care must be used in calculating and administering the dose of Vincristine Sulfate Injection, USP since overdosage may have a very serious or fatal outcome.

The usual dose of Vincristine Sulfate Injection, USP for paediatric patients is:

• 1.5–2 mg/m²

For pediatric patients weighing 10 kg or less, the starting dose should be:

• 0.05 mg/kg

administered once a week.

The usual dose of Vincristine Sulfate Injection, USP for adults is:

• 1.4 mg/m²

A 50% reduction in the dose of Vincristine Sulfate Injection, USP is recommended for patients having a direct serum bilirubin value above 3 mg/100 mL.

The drug is administered intravenously at weekly intervals.

TO REDUCE THE POTENTIAL FOR FATAL MEDICATION ERRORS DUE TO INCORRECT ROUTE OF ADMINISTRATION, VINCRISTINE SULFATE INJECTION SHOULD BE DILUTED IN A FLEXIBLE PLASTIC CONTAINER AND PROMINENTLY LABELED FOR INTRAVENOUS USE ONLY.

The concentration of Vincristine Sulfate Injection, USP is 1 mg/mL.

Do not add extra fluid to the vial prior to removal of the dose.

Withdraw the solution of Vincristine Sulfate Injection, USP into an accurate dry syringe, measuring the dose carefully.

Do not add extra fluid to the vial in an attempt to empty it completely.

Preparation For Flexible Plastic Container

Vincristine Sulfate Injection, USP when diluted with 0.9% Sodium Chloride Injection in concentrations from 0.0015 mg/mL to 0.08 mg/mL is stable for up to:

• 24 hours when protected from light

or

• 8 hours under normal light at 25°C

Preparation For Syringe

Special Dispensing Information:

When dispensing Vincristine Sulfate Injection, USP in a syringe, it is imperative that it be packaged in the provided overwrap which bears the following statement:

“DO NOT REMOVE COVERING UNTIL MOMENT OF INJECTION. FOR INTRAVENOUS USE ONLY – FATAL IF GIVEN BY OTHER ROUTES”

A syringe containing a specific dose must be labeled, using the auxiliary sticker provided, to state:

“FOR INTRAVENOUS USE ONLY – FATAL IF GIVEN BY OTHER ROUTES.”

Caution:

It is extremely important that the intravenous needle or catheter be properly positioned before any vincristine is injected.

Leakage into surrounding tissue during intravenous administration of Vincristine Sulfate Injection, USP may cause considerable irritation.

If extravasation occurs, the injection should be discontinued immediately and any remaining portion of the dose should then be introduced into another vein.

Local injection of hyaluronidase and the application of moderate heat to the area of leakage will help disperse the drug and may minimise discomfort and the possibility of cellulitis.

Vincristine Sulfate Injection, USP must be administered via an intact, free-flowing intravenous needle or catheter.

Care should be taken that there is no leakage or swelling occurring during administration.

The solution may be injected either directly into a vein or into the tubing of a running intravenous infusion.

Injection of Vincristine Sulfate Injection, USP should be accomplished within 1 minute.

Patients Receiving Radiation Therapy

Vincristine Sulfate Injection, USP should not be given to patients while they are receiving radiation therapy through ports that include the liver.

When Vincristine Sulfate Injection, USP is used in combination with L-asparaginase, Vincristine Sulfate Injection, USP should be given 12 to 24 hours before administration of the enzyme in order to minimize toxicity.

Administering L-asparaginase before Vincristine Sulfate Injection, USP may reduce hepatic clearance of vincristine.

Handling And Disposal

Procedures for proper handling and disposal of anticancer drugs should be considered.

There is no general agreement that all of the procedures recommended in the guidelines are necessary or appropriate.
`,

  coldStorage: "Yes",

  description: `
Vincristine Sulfate Injection, USP is the salt of an alkaloid obtained from a common flowering herb, the periwinkle plant (Vinca rosea Linn.).

Originally known as 'leurocristine', it has also been referred to as:

• LCR

• VCR

The molecular formula for Vincristine Sulfate, USP is:

C₄₆H₅₆N₄O₁₀ • H₂SO₄

It has a molecular weight of 923.04.
`,

  indication: `
Vincristine sulfate injection has also been shown to be useful in combination with other oncolytic agents in:

• Hodgkin’s disease

• Non-Hodgkin's malignant lymphomas

• Rhabdomyosarcoma

• Neuroblastoma

• Wilms’ tumor
`,

  clinicalEfficacy: `
Vincristine is a chemotherapy drug that belongs to a group of drugs called vinca alkaloids.

Vincristine works by stopping the cancer cells from separating into 2 new cells.

So, it stops the growth of the cancer.

The mechanisms of action of vincristine sulfate remain under investigation.

The mechanism of action of vincristine sulfate has been related to the inhibition of microtubule formation in mitotic spindle, resulting in an arrest of dividing cells at the metaphase stage.
`,

  safetyInformation: `
This preparation is for intravenous use only.

Syringes containing this product must be labelled, using the auxiliary sticker provided, to state:

“FOR INTRAVENOUS USE ONLY – FATAL IF GIVEN BY OTHER ROUTES.”

Keep out of the reach of children.
`,

  specialPrecautions: `
This preparation should be administered by individuals experienced in the administration of Vincristine Sulfate Injection, USP.

It is extremely important that the intravenous needle or catheter be properly positioned before any vincristine is injected.

Leakage into surrounding tissue during intravenous administration of Vincristine Sulfate Injection, USP may cause considerable irritation.

If extravasation occurs, the injection should be discontinued immediately, and any remaining portion of the dose should then be introduced into another vein.

Local injection of hyaluronidase and the application of moderate heat to the area of leakage help disperse the drug and are thought to minimize discomfort and the possibility of cellulitis.
`,
},
{
  id: 82,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zaxotein",
  name: "Zaxotein",
  subtitle: "Albumin Bound Paclitaxel 100 mg",
  type: "Injection",

  image: "/products3/zaxotein-1.png",

  images: [
    "/products3/zaxotein-1.png",
    "/products3/zaxotein-2.png",
    "/products3/zaxotein-3.png",
  ],

  strength: "100 mg",
  packSize: "1 Vial",
  drugClass: "Chemotherapy Drug",

  dosage: `
After failure of combination chemotherapy for metastatic breast cancer or relapse within 6 months of adjuvant chemotherapy, the recommended regimen for paclitaxel protein-bound particles for injectable suspension is 260 mg/m² administered intravenously over 30 minutes every 3 weeks.

Hepatic Impairment

No dose adjustment is necessary for patients with mild hepatic impairment.

Patients with moderate and severe hepatic impairment treated with Paclitaxel protein-bound particles for injectable suspension may be at increased risk of toxicities known to paclitaxel.

Patients should not receive Paclitaxel protein-bound particles for injectable suspension if:

• AST > 10 x ULN

or

• Bilirubin > 5.0 x ULN

Recommendations For Dosage Adjustment For The First Course Of Therapy

Mild

• SGOT (AST) <10 x ULN

• Bilirubin >ULN to 1.25 x ULN

• Paclitaxel Protein-Bound Particles ≤260 mg/m²

Moderate

• SGOT (AST) <10 x ULN

• Bilirubin 1.26 to 2.0 x ULN

• 200 mg/m²

Severe

• SGOT (AST) <10 x ULN

• Bilirubin 2.01 to 5.0 x ULN

• 130 mg/m²

Not Eligible

• AST >10 x ULN

• Bilirubin >5.0 x ULN

Dosage recommendations are for the first course of therapy.

The need for further dose adjustments in subsequent courses should be based on individual tolerance.

A dose increase to 200 mg/m² in subsequent courses should be considered based on individual tolerance.

Dose Reduction

Patients who experience severe neutropenia (neutrophils <500 cells/mm³ for a week or longer) or severe sensory neuropathy during Paclitaxel protein-bound particles for injectable suspension therapy should have dosage reduced to 220 mg/m² for subsequent courses.

For recurrence of severe neutropenia or severe sensory neuropathy, additional dose reduction should be made to 180 mg/m².

For grade 3 sensory neuropathy, hold treatment until resolution to grade 1 or 2, followed by a dose reduction for all subsequent courses of Paclitaxel protein-bound particles for injectable suspension.

Preparation For Intravenous Administration

A Paclitaxel protein-bound particle for injectable suspension is supplied as a sterile lyophilized powder for reconstitution before use.

AVOID ERRORS, READ ENTIRE PREPARATION INSTRUCTIONS PRIOR TO RECONSTITUTION.

Aseptically, reconstitute each vial by injecting 20 mL of 0.9% Sodium Chloride Injection, USP.

Slowly inject the 20 mL of 0.9% Sodium Chloride Injection, USP, over a minimum of 1 minute, using the sterile syringe to direct the solution flow onto the INSIDE WALL OF THE VIAL.

DO NOT INJECT the 0.9% Sodium Chloride Injection, USP, directly onto the lyophilized cake as this will result in foaming.

Once the injection is complete, allow the vial to stand for a minimum of 5 minutes to ensure proper wetting of the lyophilized cake/powder.

Gently swirl and/or invert the vial slowly for at least 2 minutes until complete dissolution of any cake/powder occurs.

Avoid generation of foam.

If foaming or clumping occurs, stand solution for at least 15 minutes until foam subsides.
`,

  coldStorage: "No",

  description: `
Paclitaxel protein-bound particles for Injectable suspension is an albumin-bound form of Paclitaxel with a mean particle size of approximately 130 nanometers.

Each single-use vial contains:

• 100 mg of paclitaxel

• Approximately 900 mg of human albumin

This product is available as lyophilized powder which needs to be reconstituted as described in the package insert.

The active agent in Paclitaxel protein-bound particles for injectable suspension is paclitaxel, a natural product with antitumor activity.

Paclitaxel is obtained from Taxus media.

The chemical name for paclitaxel is:

5β,20-Epoxy-1,2α,4,7β,10β,13α-hexahydroxytax-11-en-9-one 4,10-diacetate 2-benzoate 13-ester with (2R,3S)-N-benzoyl-3-phenylisoserine.

Paclitaxel is a white to off-white crystalline powder with the empirical formula:

C47H51NO14

and a molecular weight of 853.91.

It is highly lipophilic, insoluble in water, and melts at approximately 216°C to 217°C.
`,

  indication: `
Metastatic Breast Cancer

Paclitaxel protein-bound particle for injectable suspension is indicated for the treatment of breast cancer after failure of combination chemotherapy for metastatic disease or relapse within 6 months of adjuvant chemotherapy.

Prior therapy should have included an anthracycline unless clinically contraindicated.

Non-Small Cell Lung Cancer

Paclitaxel protein-bound particles for injectable suspension is indicated for the first-line treatment of locally advanced or metastatic non-small cell lung cancer, in combination with carboplatin, in patients who are not candidates for curative surgery or radiation therapy.

Adenocarcinoma Of The Pancreas

Paclitaxel protein-bound particles for injectable suspension is indicated for the first-line treatment of patients with metastatic adenocarcinoma of the pancreas, in combination with gemcitabine.
`,

  clinicalEfficacy: `
Efficacy of albumin-bound paclitaxel in the treatment of advanced refractory breast cancer and its effect on serum resistin.
`,

  safetyInformation: `
Carcinogenesis, Mutagenesis, Impairment Of Fertility

The carcinogenic potential of Paclitaxel protein-bound particles for injectable suspension has not been studied.

Paclitaxel has been shown to be clastogenic in vitro (chromosome aberrations in human lymphocytes) and in vivo (micronucleus test in mice).

A Paclitaxel protein-bound particle for injectable suspension was not mutagenic in the Ames test or the CHO/HGPRT gene mutation assay.

Hematology

Paclitaxel protein-bound particles for injectable suspension therapy should not be administered to patients with baseline neutrophil counts of less than 1,500 cells/mm³.

In order to monitor the occurrence of myelotoxicity, it is recommended that frequent peripheral blood cell counts be performed on all patients receiving Paclitaxel protein-bound particles for injectable suspension.

Patients should not be retreated with subsequent cycles until:

• Neutrophils recover to a level >1,500 cells/mm³

• Platelets recover to a level >100,000 cells/mm³

In the case of severe neutropenia (<500 cells/mm³ for seven days or more) during therapy, a dose reduction for subsequent courses of therapy is recommended.

Nervous System

Sensory neuropathy occurs frequently with Paclitaxel protein-bound particles for injectable suspension.

The occurrence of grade 1 or 2 sensory neuropathy does not generally require dose modification.

If grade 3 sensory neuropathy develops, treatment should be withheld until resolution to grade 1 or 2 followed by a dose reduction for all subsequent courses.

Hepatic Impairment

Because the exposure and toxicity of Paclitaxel can be increased with hepatic impairment, administration of Paclitaxel protein-bound particles for injectable suspension in patients with hepatic impairment should be performed with caution.

The starting dose should be reduced for patients with moderate and severe hepatic impairment.

Nursing Mothers

It is not known whether Paclitaxel is excreted in human milk.

Following intravenous administration of carbon-14 labeled Paclitaxel to rats on days 9 to 10 postpartum, concentrations of radioactivity in milk were higher than in plasma and declined in parallel with the plasma concentrations.

Because many drugs are excreted in human milk and because of the potential for serious adverse reactions in nursing infants, it is recommended that nursing be discontinued when receiving Paclitaxel protein-bound particles for injectable suspension therapy.

Pediatric Use

The safety and effectiveness of Paclitaxel protein-bound particles for injectable suspension in pediatric patients have not been evaluated.

Geriatric Use

Of the 229 patients in the randomized study who received Paclitaxel protein-bound particles for injectable suspension, 11% were at least 65 years of age and less than 2% were 75 years or older.

No toxicities occurred notably more frequently among elderly patients who received Paclitaxel protein-bound particles for injectable suspension.
`,

  specialPrecautions: `
Do not administer Zaxotein therapy to patients who have baseline neutrophil counts of less than 1,500 cells/mm³.

In order to monitor the occurrence of bone marrow suppression, primarily neutropenia, which may be severe and result in infection, it is recommended that frequent peripheral blood cell counts be performed on all patients receiving Zaxotein.
`,
},
{
  id: 83,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zefinib",
  name: "Zefinib",
  subtitle: "Gefitinib Tab 250 mg",
  type: "Tablet",

  image: "/products3/zefinib-1.png",

  images: [
    "/products3/zefinib-1.png",
    "/products3/zefinib-2.png",
    "/products3/zefinib-3.png",
  ],

  strength: "250 mg",
  packSize: "1 x 10",
  drugClass: "Antineoplastic Agents, Protein Kinase Inhibitors",

  dosage: `
Patient Selection

Select patients for the first-line treatment of metastatic NSCLC with IRESSA based on the presence of EGFR exon 19 deletions or exon 21 L858R mutations in their tumor or plasma specimens.

If these mutations are not detected in a plasma specimen, test tumor tissue if feasible.

Recommended Dose

The recommended dose of IRESSA is 250 mg orally once daily with or without food until disease progression or unacceptable toxicity.

Do not take a missed dose within 12 hours of the next dose.

Administration To Patients Who Have Difficulty Swallowing Solids

Immerse Zefinib tablets in 4 to 8 ounces of water by dropping the tablet in water, and stir for approximately 15 minutes.

Immediately drink the liquid or administer through a naso-gastric tube.

Rinse the container with 4 to 8 ounces of water and immediately drink or administer through the naso-gastric tube.
`,

  coldStorage: "No",

  description: `
Gefitinib is a kinase inhibitor.

The chemical name of gefitinib is:

4-Quinazolinamine N-(3-chloro-4-fluorophenyl)-7-methoxy-6-[3-(4-morpholinyl) propoxy]

Gefitinib has the molecular formula:

C22H24ClFN4O3

a relative molecular mass of 446.9 daltons and is a white-colored powder.

Gefitinib is a free base.

The molecule has pKas of:

• 5.4

• 7.2

Gefitinib can be defined as sparingly soluble at pH 1, but is practically insoluble above pH 7, with the solubility decreasing sharply between pH 4 and pH 6.

In non-aqueous solvents, gefitinib is:

• Freely soluble in glacial acetic acid and dimethyl sulfoxide

• Soluble in pyridine

• Sparingly soluble in tetrahydrofuran

• Slightly soluble in methanol, ethanol (99.5%), ethyl acetate, propan-2-ol and acetonitrile
`,

  indication: `
Gefitinib is indicated as monotherapy for the treatment of patients with locally advanced or metastatic non small cell lung cancer after failure of both platinum based and docetaxel chemotherapies.

The effectiveness of Gefitinib is based on objective response rates.

There are no controlled trials demonstrating a clinical benefit, such as improvement in disease-related symptoms or increased survival.

Results from two large, controlled, randomized trials in first-line treatment of non-small cell lung cancer showed no benefit from adding Gefitinib to doublet, platinum based chemotherapy.

Therefore, Gefitinib is not indicated for use in this setting.

Usage

Gefitinib is used to treat metastatic (cancer that has already spread) non-small cell lung cancer in patients who have certain types of abnormal epidermal growth factor (EGFR) genes, and did not receive cancer medicines in the past.

Your doctor will perform a test before you take this medicine.
`,

  clinicalEfficacy: `
In preclinical testing, oral gefitinib inhibited the growth of NSCLC tumors that express the epidermal growth factor receptor (EGFR), a mediator of cell signaling, and phase 1 trials have demonstrated that a fraction of patients with NSCLC progressing after chemotherapy experience both a decrease in lung cancer.
`,

  safetyInformation: `
• Read the label carefully before use.

• Keep out of the reach of children.

• Protect from Light.
`,

  specialPrecautions: `
Hepatotoxicity

Asymptomatic increases in liver transaminases have been observed in Gefitinib treated patients.

Therefore, periodic liver function (transaminases, bilirubin, and alkaline phosphatase) testing should be considered.

Discontinuation of Gefitinib should be considered if changes are severe.

Patients With Hepatic Impairment

In vitro and in vivo evidence suggest that Gefitinib is cleared primarily by the liver.

Therefore, Gefitinib exposure may be increased in patients with hepatic dysfunction.

In patients with liver metastases and moderately to severely elevated biochemical liver abnormalities, however, Gefitinib pharmacokinetics were similar to the pharmacokinetics of individuals without liver abnormalities.

The influence of non-cancer related hepatic impairment on the pharmacokinetics of Gefitinib has not been evaluated.

Carcinogenesis, Mutagenesis, Impairment Of Fertility

Gefitinib has been tested for genotoxicity in a series of in vitro (bacterial mutation, mouse lymphoma and human lymphocyte) assays and an in vivo micronucleus test.

Under the conditions of these assays, Gefitinib did not cause genetic damage.

Carcinogenicity studies have not been conducted with Gefitinib.

Nursing Mothers

It is known whether Gefitinib is excreted in human milk.

Following oral administration of carbon-14-labelled gefitinib to rats 14 days postpartum, concentrations of radioactivity in milk were higher than in blood.

Levels of Gefitinib and its metabolites were 11- to 19-fold higher in milk than in blood, after oral exposure of lactating rats to a dose of 5 mg/kg.

Because many drugs are excreted in human milk and because of the potential for serious adverse reactions in nursing infants, women should be advised against breast-feeding while receiving Gefitinib therapy.

Pediatric Use

Gefitinib is not indicated for use in pediatric patients as safety and effectiveness have not been established.

In clinical trials of Gefitinib alone or with radiation in pediatric patients with primary central nervous system (CNS) tumors, cases of CNS hemorrhage and death have been reported.

There is insufficient data in pediatric patients to establish a causal relationship.

There is no evidence to suggest increased risk of cerebral hemorrhage in adult patients with NSCLC receiving Gefitinib.

Geriatric Use

Of the total number of patients participating in trials of second and third line Gefitinib treatment of NSCLC:

• 65% were aged 64 years or less

• 30.5% were aged 65 to 74 years

• 5% were aged 75 years or older

No differences in safety or efficacy were observed between younger and older patients.

Patients With Severe Renal Impairment

The effect of severe renal impairment on the pharmacokinetics of Gefitinib is not known.

Patients with severe renal impairment should be treated with caution when given Gefitinib.
`,
},
{
  id: 84,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zemecon",
  name: "Zemecon",
  subtitle: "Fosaprepitant Inj 150 mg",
  type: "Injection",

  image: "/products/zemecon/zemecon150-1.jpeg",

  images: [
    "/products/zemecon/zemecon150-1.jpeg",
    "/products/zemecon/zemecon150-2.jpeg",
    "/products/zemecon/zemecon150-3.jpeg",
  ],

  strength: "150 mg",
  packSize: "1 Vial",
  drugClass: "Antiemetic Agents",

  dosage: `
Prevention of Nausea and Vomiting Associated with Highly Emetogenic Chemotherapy (HEC)

Fosaprepitant for Injection 150 mg (Single Dose Regimen of Fosaprepitant)

Fosaprepitant for Injection 150 mg is administered intravenously on Day 1 only as an infusion over 20-30 minutes initiated approximately 30 minutes prior to chemotherapy.

No capsules of Fosaprepitant are administered on Days 2 and 3.

Fosaprepitant for Injection should be administered in conjunction with a corticosteroid and a 5-HT3 antagonist.

The recommended dosage of dexamethasone with Fosaprepitant for Injection 150 mg differs from the recommended dosage of dexamethasone with Fosaprepitant for Injection 115 mg on Days 3 and 4.

Recommended Dosing (3-Day Dosing Regimen of Fosaprepitant for Injection 150 mg)

Day 1

• Fosaprepitant for Injection 150 mg – 150 mg intravenous

• Dexamethasone – 12 mg orally

• Ondansetron – 32 mg intravenous

Day 2

• Fosaprepitant for Injection 150 mg – none

• Dexamethasone – 8 mg orally twice daily

Day 3

• Fosaprepitant for Injection 150 mg – none

• Dexamethasone – 8 mg orally twice daily

Day 4

• Fosaprepitant for Injection 150 mg – none

• Dexamethasone – 8 mg orally

Dexamethasone should be administered 30 minutes prior to chemotherapy treatment on Day 1 and in the morning on Days 2 through 4.

The dose of dexamethasone accounts for drug interactions.

Ondansetron should be administered 30 minutes prior to chemotherapy treatment on Day 1.

Preparation Of Fosaprepitant For Injection 150 mg

Step 1

Aseptically withdraw 5 mL of 0.9% Sodium Chloride for Injection IP from a 500 mL infusion bag.

Aseptically inject 5 mL 0.9% Sodium Chloride for Injection IP (normal saline) into the vial.

Assure that normal saline is added to the vial along the vial wall in order to prevent foaming.

Swirl the vial gently.

Avoid shaking and jetting saline into the vial.

Step 2

Aseptically prepare an infusion bag filled with 145 mL of normal saline.

Step 3

Aseptically withdraw the entire volume from the vial and transfer it into the infusion bag containing 145 mL of normal saline to yield a total volume of 150 mL and a final concentration of 1 mg/1 mL.

Step 4

Gently invert the bag 2-3 times.

The reconstituted final drug solution is stable for 24 hours at ambient room temperature (at or below 25°C).

Parenteral drug products should be inspected visually for particulate matter and discoloration before administration whenever solution and container permit.
`,

  coldStorage: "Yes",

  description: `
Fosaprepitant dimeglumine for Injection is a sterile, lyophilized prodrug of aprepitant, a substance P/neurokinin-1 (NK1) receptor antagonist.

It is chemically described as:

1-Deoxy-1-(methylamino)-D-glucitol[3-[[(2R,3S)-2-[(1R)-1-[3,5-bis(trifluoromethyl)phenylethoxy]-3-(4-fluorophenyl)-4-morpholinyl]methyl]-2,5-dihydro-5-oxo-1H-1,2,4-triazol-1-yl]phosphonate (2:1) (salt)

Its empirical formula is:

C₂₃H₂₂F₇N₄O₆P · 2(C₇H₁₇NO₅)

Fosaprepitant dimeglumine is a white to off-white amorphous powder with a molecular weight of 1004.83.

It is freely soluble in water.

Each vial of Fosaprepitant for Injection 150 mg for intravenous administration contains:

• 245.3 mg of fosaprepitant dimeglumine

Equivalent to:

• 150 mg of fosaprepitant free acid

Inactive ingredients:

• Edetate disodium (18.8 mg)

• Polysorbate 80 (75 mg)

• Lactose anhydrous (375 mg)

• Sodium hydroxide and/or hydrochloric acid (for pH adjustment)

Fosaprepitant dimeglumine hereafter will be referred to as fosaprepitant.
`,

  indication: `
Fosaprepitant for Injection is a substance P/neurokinin-1 (NK1) receptor antagonist indicated in adults for use in combination with other antiemetic agents for the:

• Prevention of acute and delayed nausea and vomiting associated with initial and repeat courses of highly emetogenic cancer chemotherapy (HEC) including high-dose cisplatin.

• Prevention of nausea and vomiting associated with initial and repeat courses of moderately emetogenic cancer chemotherapy (MEC).
`,

  clinicalEfficacy: `
Fosaprepitant (4.0 mg/kg) in addition to ondansetron, without application of dexamethasone, was well tolerated, safe, effective and superior to ondansetron only as CINV prophylaxis in pediatric patients during moderately and highly emetogenic chemotherapy.
`,

  safetyInformation: `
CYP3A4 Interactions

Fosaprepitant is rapidly converted to aprepitant, which is a moderate inhibitor of CYP3A4 when administered as a 3-day antiemetic dosing regimen for CINV.

Fosaprepitant should be used with caution in patients receiving concomitant medications that are primarily metabolised through CYP3A4.

Inhibition of CYP3A4 by aprepitant or fosaprepitant could result in elevated plasma concentrations of these concomitant medications.

When fosaprepitant is used concomitantly with another CYP3A4 inhibitor, aprepitant plasma concentrations could be elevated.

When aprepitant is used concomitantly with medications that induce CYP3A4 activity, aprepitant plasma concentrations could be reduced, and this may result in decreased efficacy of aprepitant.

Chemotherapy agents that are known to be metabolized by CYP3A4 include:

• Docetaxel

• Paclitaxel

• Etoposide

• Irinotecan

• Ifosfamide

• Imatinib

• Vinorelbine

• Vinblastine

• Vincristine

In clinical studies, the oral aprepitant regimen was administered commonly with:

• Etoposide

• Vinorelbine

• Paclitaxel

The doses of these agents were not adjusted to account for potential drug interactions.

In separate pharmacokinetic studies, no clinically significant change in docetaxel or vinorelbine pharmacokinetics was observed when the oral aprepitant regimen was coadministered.

Due to the small number of patients in clinical studies who received the CYP3A4 substrates:

• Vinblastine

• Vincristine

• Ifosfamide

particular caution and careful monitoring are advised in patients receiving these agents or other chemotherapy agents metabolized primarily by CYP3A4 that were not studied.
`,

  specialPrecautions: `
This medicine may cause infusion-related reactions, which can be life-threatening and require immediate medical attention.

Tell your doctor right away if you start to have:

• Fever

• Chills or shaking

• Dizziness

• Trouble breathing

• Itching or rash

• Lightheadedness

• Fainting

after receiving this medicine.
`,
},
{
  id: 85,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zitomycin",
  name: "Zitomycin",
  subtitle: "Mitomycin Inj 2 mg / 10 mg",
  type: "Injection",

  image: "/products3/zitomycin2-1.png",

  images: [
    "/products3/zitomycin2-1.png",
    "/products3/zitomycin2-2.png",
    "/products3/zitomycin2-3.png",
    "/products3/zitomycin10-1.png",
    "/products3/zitomycin10-2.png",
    "/products3/zitomycin10-3.png",
  ],

  strength: "2 mg / 10 mg",
  packSize: "1 Vial",
  drugClass: "Antineoplastics, Antibiotic",

  dosage: `
Zitomycin should be given intravenously only, using care to avoid extravasation of the compound.

If extravasation occurs, cellulitis, ulceration, and slough may result.

Each vial contains either:

• Mitomycin 2 mg and mannitol (q.s.)

or

• Mitomycin 10 mg and mannitol (q.s.)

If the product does not dissolve immediately, allow it to stand at room temperature until a solution is obtained.

After full haematological recovery from any previous chemotherapy, the following dosage schedule may be used at 6 to 8 week intervals.

Because of cumulative myelosuppression, patients should be fully re-evaluated after each course of Zitomycin, and the dose reduced if the patient has experienced any toxicities.

Doses greater than 20 mg/m² have not been shown to be more effective and are more toxic than lower doses.
`,

  coldStorage: "No",

  description: `
Mitomycin is an antibiotic isolated from the broth of Streptomyces verticillus Yingtanensis which has been shown to have antimetabolic activity.

Mitomycin is a blue-violet crystalline powder with the molecular formula:

C₁₅H₁₈N₄O₅

and a molecular weight of 334.33.

Its chemical name is:

7-amino-9α-methoxymitosane.

Mitomycin is a sterile lyophilised mixture of mitomycin and mannitol, which, when reconstituted with sterile water for injection, provides a solution for application in glaucoma filtration surgery.

Mitomycin is supplied in vials containing 0.2 mg of mitomycin.

Each vial also contains mannitol 0.4 mg, at a 1:2 ratio of mitomycin to mannitol.

Each mL of reconstituted solution contains:

• 0.2 mg mitomycin

and has a pH between:

• 5.0 and 8.0
`,

  indication: `
Zitomycin is not recommended as single-agent primary therapy.

It has been shown to be useful in the therapy of disseminated adenocarcinoma of the stomach or pancreas in proven combinations with other approved chemotherapeutic agents and as palliative treatment when other modalities have failed.

Zitomycin is not recommended to replace appropriate surgery and/or radiotherapy.

Usage:

As directed by the physicians.
`,

  clinicalEfficacy: `
Zitomycin selectively inhibits the synthesis of deoxyribonucleic acid (DNA).

The guanine and cytosine content correlates with the degree of zitomycin-induced cross-linking.

At high concentrations of the drug, cellular RNA and protein synthesis are also suppressed.

In humans, Zitomycin is rapidly cleared from the serum after intravenous administration.

Time required to reduce the serum concentration by 50% after a 30 mg bolus injection is 17 minutes.

After injection of:

• 30 mg
• 20 mg
• 10 mg IV

the maximal serum concentrations were:

• 2.4 µg/mL
• 1.7 µg/mL
• 0.52 µg/mL

respectively.

Clearance is effected primarily by metabolism in the liver, but metabolism occurs in other tissues as well.

The rate of clearance is inversely proportional to the maximal serum concentration because it is thought to be due to saturation of the degradative pathways.

Approximately 10% of a dose of Zitomycin is excreted unchanged in the urine.

Since metabolic pathways are saturated at relatively low doses, the percent of a dose excreted in urine increases with increasing dose.

In children, excretion of intravenously administered Zitomycin is similar.
`,

  safetyInformation: `
• Read the label carefully before use.

• Store between 15°C to 30°C.

• Protect from light.

• Keep out of the reach of children.
`,

  specialPrecautions: `
Acute shortness of breath and severe bronchospasm have been reported following the administration of vinca alkaloids in patients who had previously or simultaneously received Zitomycin.

The onset of this acute respiratory distress occurred within minutes to hours after the vinca alkaloid injection.

The total number of doses for each drug has varied considerably.

Bronchodilators, steroids and/or oxygen have produced symptomatic relief.

A few cases of adult respiratory distress syndrome have been reported in patients receiving Zitomycin in combination with other chemotherapy and maintained at FIO₂ concentrations greater than 50% perioperatively.

Therefore, caution should be exercised using only enough oxygen to provide adequate arterial saturation since oxygen itself is toxic to the lungs.

Careful attention should be paid to fluid balance, and overhydration should be avoided.

Bladder fibrosis/contraction has been reported with intravesical administration (not an approved route of administration), which in rare cases has required cystectomy.

Nursing Mothers

It is not known if mitomycin is excreted in human milk.

Because many drugs are excreted in human milk and because of the potential for serious adverse reactions in nursing infants from mitomycin, it is recommended that nursing be discontinued when receiving mitomycin therapy.

Pediatric Use

Safety and effectiveness in pediatric patients have not been established.
`,
},
{
  id: 86,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zoplide",
  name: "Zoplide",
  subtitle: "Leuprolide Acetate Inj 3.75 mg / 11.25 mg / 22.50 mg",
  type: "Injection",

  image: "/products3/zoplide1125-1.png",

  images: [
   
    "/products3/zoplide1125-1.png",
    "/products3/zoplide1125-2.png",
    "/products3/zoplide225-1.png",
    "/products3/zoplide225-2.png",
   
  ],

  strength: "3.75 mg / 11.25 mg / 22.50 mg",
  packSize: "1 Vial",
  drugClass: "Gonadotropin-Releasing Hormone (GnRH) Agonists",

  dosage: `
The recommended dose is 1 mg (0.2 mL or 20 units on the mark) administered as a single daily subcutaneous injection.

As with other drugs administered chronically by subcutaneous injection, the injection site should be varied periodically.

Each 0.2 mL contains:

• 1 mg of leuprolide acetate

• Sodium chloride for tonicity adjustment

• 1.8 mg of benzyl alcohol as preservative

• Water for injection

The pH may have been adjusted with sodium hydroxide and/or acetic acid.
`,

  coldStorage: "No",

  description: `
Leuprolide acetate is a synthetic nonapeptide analog of naturally occurring gonadotropin-releasing hormone (GnRH or LH-RH).

The analog possesses greater potency than the natural hormone.

The chemical name is:

5-oxo-L-prolyl-L-histidyl-L-tryptophyl-L-seryl-L-tyrosyl-D-leucyl-L-leucyl-L-arginyl-N-ethyl-L-prolinamide acetate.
`,

  indication: `
Leuprolide acetate is indicated in the palliative treatment of advanced prostatic cancer.
`,

  clinicalEfficacy: `
In a clinical study comparing leuprolide acetate injection with DES in patients with metastatic prostate cancer, adverse reactions were assessed.

Common adverse events included:

• Hot flashes (55% with injection vs. 12% with DES)

• Gynecomastia (63% vs. 7%)

• Decreased libido (11% vs. 7%)

Bone pain occurred in:

• 5% of injection patients

compared to:

• 2% with DES

Other reported adverse reactions included:

• Cardiovascular issues like ECG changes/ischemia

• Gastrointestinal symptoms such as nausea/vomiting

• Urinary tract issues like hematuria

Overall, injection was associated with a higher incidence of hot flashes and gynecomastia but showed comparable rates of bone pain and other systemic effects compared to DES in this trial.
`,

  safetyInformation: `
Pregnancy

It can cause fetal harm when administered to pregnant women and it should not be used during pregnancy.

Breastfeeding

It is not known whether leuprolide acetate is excreted in human milk.

Because many drugs are excreted in human milk and because of the potential for serious adverse reactions in nursing infants, breastfeeding should be discontinued during treatment with leuprolide acetate.

Fertility

Leuprolide acetate may cause reversible suppression of reproductive function.

In females:

• Amenorrhoea

• Suppression of ovarian function

have been reported.

Regular menstrual cycles may not resume immediately after discontinuation of therapy.

In males:

• Suppression of spermatogenesis

leading to:

• Azoospermia

• Oligospermia

has been observed.

Teratogenicity

Leuprolide acetate has the potential to cause fetal harm and is contraindicated during pregnancy.

Women of childbearing potential should use effective contraception during treatment with leuprolide acetate to prevent potential fetal exposure and related risks.
`,

  specialPrecautions: `
Tell your doctor and pharmacist if you are allergic to:

• Leuprolide

• Goserelin (Zoladex)

• Histrelin (Supprelin LA, Vantas)

• Nafarelin (Synarel)

• Triptorelin (Triptodur, Trelstar)

• Any other medications

• Any of the ingredients in leuprolide injection

Ask your pharmacist for a list of the ingredients.

Tell your doctor and pharmacist what prescription and nonprescription medications, vitamins, nutritional supplements, and herbal products you are taking or plan to take.

Tell your doctor if you or anyone in your family has or has ever had:

• Osteoporosis (condition where bones are thin and more likely to break)

• A history of drinking alcohol

• Long-term tobacco use

• Depression

• Seizures

• Brain tumors

• Cancer that has spread to the spine (backbone)

• Diabetes

• Urinary obstruction (blockage that causes difficulty urinating)

• Blood in your urine

• A prolonged QT interval

• Cerebrovascular disease

• Heart disease

• Stroke

• Hyperlipidemia (elevated cholesterol)

• Low potassium levels

• Low calcium levels

• Low magnesium levels

You should know that leuprolide is not to be used in women who are pregnant, can become pregnant, or are breastfeeding.

Tell your doctor if you are pregnant, plan to become pregnant or are breast-feeding.

Your doctor may perform a pregnancy test to be sure that you are not pregnant when you begin receiving the leuprolide injection.

You will need to use a reliable nonhormonal method of birth control to prevent pregnancy while you are receiving leuprolide injection.

Talk to your doctor about the types of birth control that are right for you, and continue to use birth control even though you should not have regular menstrual periods during your treatment.

If you think you have become pregnant while receiving leuprolide injection, call your doctor immediately.

Leuprolide injection can harm the foetus.

You should know that leuprolide injection may impair infertility (ability to make babies) in men.

You should know that some patients who receive leuprolide injection may have increasing difficulty controlling emotions, worsening mood or anxiety, or development of any new psychiatric illness.

Report any new or worsening symptoms to your doctor, nurse, or pharmacist.
`,
},
{
  id: 87,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zovorin",
  name: "Zovorin",
  subtitle: "Leucovorin Calcium Inj 50 mg/5 ml",
  type: "Injection",

  image: "/products3/zovorin-1.png",

  images: [
    "/products3/zovorin-1.png",
    "/products3/zovorin-2.png",
    "/products3/zovorin-3.png",
  ],

  strength: "50 mg/5 ml",
  packSize: "1 Vial",
  drugClass: "Antidotes, Other; Rescue Agents, Chemotherapy",

  dosage: `
Advanced Colorectal Cancer

Either of the following two regimens is recommended:

1. Leucovorin is administered at 200 mg/m² by slow intravenous injection over a minimum of 3 minutes, followed by 5-fluorouracil at 370 mg/m² by intravenous injection.

2. Leucovorin is administered at 20 mg/m² by intravenous injection followed by 5-fluorouracil at 425 mg/m² by intravenous injection.

5-Fluorouracil and Leucovorin should be administered separately to avoid the formation of a precipitate.

Treatment is repeated daily for five days.

This five-day treatment course may be repeated at 4-week (28-day) intervals for 2 courses and then repeated at 4- to 5-week (28- to 35-day) intervals, provided that the patient has completely recovered from the toxic effects of the prior treatment course.

In a subsequent treatment course, the dosage of 5-fluorouracil should be adjusted based on patient tolerance of the prior treatment course.

The daily dosage of 5-fluorouracil should be reduced by:

• 20% for patients who experienced moderate haematologic or gastrointestinal toxicity in the prior treatment course

• 30% for patients who experienced no toxicity in the prior treatment course

The 5-fluorouracil dosage may be increased by 10%.

Leucovorin dosages are not adjusted for toxicity.

Several other doses and schedules of Leucovorin/5-fluorouracil therapy have also been evaluated in patients with advanced colorectal cancer; some of these alternative regimens may also have efficacy in the treatment of this disease.

However, further clinical research will be required to confirm the safety and effectiveness of these alternative Leucovorin/5-fluorouracil treatment regimens.

Leucovorin Rescue After High-Dose Methotrexate Therapy

The recommendations for leucovorin rescue are based on a methotrexate dose of 12 to 15 grams/m² administered by intravenous infusion over 4 hours.

Leucovorin rescue at a dose of 15 mg (approximately 10 mg/m²) every 6 hours for 10 doses starts 24 hours after the beginning of the methotrexate infusion.

In the presence of gastrointestinal toxicity, nausea or vomiting, leucovorin should be administered parenterally.

Do not administer Leucovorin intrathecally.

Serum creatinine and methotrexate levels should be determined at least once daily.

Leucovorin administration, hydration, and urinary alkalization (pH of 7.0 or greater) should be continued until the methotrexate level is below 5 X 10⁻⁸ M (0.05 micromolar).

Guidelines For Leucovorin Dosage And Administration

Normal Methotrexate Elimination

Serum methotrexate level approximately:

• 10 micromolar at 24 hours after administration

• 1 micromolar at 72 hours

Dose:

• 15 mg PO, IM, or IV every 6 hours for 60 hours (10 doses starting at 24 hours after the start of the methotrexate infusion)

Delayed Late Methotrexate Elimination

Serum methotrexate level remaining above:

• 0.2 micromolar at 72 hours

• More than 0.05 micromolar at 96 hours after administration

Dose:

• Continue 15 mg PO, IM or IV every 6 hours until the methotrexate level is less than 0.05 micromolar

Delayed Early Methotrexate Elimination And/Or Evidence Of Acute Renal Injury

A serum methotrexate level of:

• 50 micromolar or more at 24 hours after administration

OR

• A 100% or greater increase in serum creatinine level at 24 hours after methotrexate administration

Dose:

• 150 mg IV every 3 hours until methotrexate level is less than 1 micromolar

Then:

• 15 mg IV every 3 hours until methotrexate level is less than 0.05 micromolar

Patients who experience delayed early methotrexate elimination are likely to develop reversible renal failure.

In addition to appropriate leucovorin therapy, these patients require continuing hydration and urinary alkalisation and close monitoring of fluid and electrolyte status until the serum methotrexate level has fallen below 0.05 micromolar and renal failure has resolved.

Impaired Methotrexate Elimination Or Inadvertent Overdosage

Leucovorin rescue should begin as soon as possible after an inadvertent overdosage and within 24 hours of methotrexate administration when there is delayed excretion.

Leucovorin 10 mg/m² should be administered IM, IV, or PO every 6 hours until the serum methotrexate level is less than 10⁻⁸ M.

In the presence of gastrointestinal toxicity, nausea, or vomiting, leucovorin should be administered parenterally.

Do not administer Leucovorin intrathecally.

Serum creatinine and methotrexate levels should be determined at 24-hour intervals.

If the 24-hour serum creatinine has increased 50% over baseline or if:

• The 24-hour methotrexate level is greater than 5 X 10⁻⁶ M

or

• The 48-hour level is greater than 9 X 10⁻⁷ M

the dose of leucovorin should be increased to:

• 100 mg/m² IV every 3 hours

until the methotrexate level is less than 10⁻⁸ M.

Hydration (3 L/day) and urinary alkalisation with sodium bicarbonate solution should be employed concomitantly.

The bicarbonate dose should be adjusted to maintain the urine pH at 7.0 or greater.

Megaloblastic Anemia Due To Folic Acid Deficiency

Up to 1 mg daily.

There is no evidence that doses greater than 1 mg/day have greater efficacy than those of 1 mg.

Additionally, loss of folate in urine becomes roughly logarithmic as the amount administered exceeds 1 mg.

Because of the calcium content of the leucovorin solution, no more than 160 mg of leucovorin should be injected intravenously per minute.
`,

  coldStorage: "No",

  description: `
Leucovorin is one of several active, chemically reduced derivatives of folic acid.

It is useful as an antidote to drugs which act as folic acid antagonists.

Also known as:

• Folinic acid

• Citrovorum factor

• 5-formyl-5,6,7,8-tetrahydrofolic acid

This compound has the chemical designation of:

Calcium N-[p-[[[(6RS)-2-amino-5-formyl-5,6,7,8-tetrahydro-4-hydroxy-6-pteridinyl]methyl]amino]benzoyl]-L-glutamate (1:1).
`,

  indication: `
Leucovorin calcium rescue is indicated after high dose methotrexate therapy in osteosarcoma.

Leucovorin calcium is also indicated to diminish the toxicity and counteract the effects of impaired methotrexate elimination and of inadvertent overdosages of folic acid antagonists.

Leucovorin calcium is indicated in the treatment of megaloblastic anemias due to folic acid deficiency when oral therapy is not feasible.

Leucovorin calcium is indicated for use in combination with 5-fluorouracil to prolong survival in the palliative treatment of patients with advanced colorectal cancer.

Leucovorin should not be mixed in the same infusion as 5-fluorouracil because a precipitate may form.
`,

  clinicalEfficacy: `
Leucovorin calcium is indicated in the treatment of megaloblastic anemias due to folic acid deficiency when oral therapy is not feasible.

Leucovorin is also indicated for use in combination with 5-fluorouracil to prolong survival in the palliative treatment of patients with advanced colorectal cancer.
`,

  safetyInformation: `
• Read the label carefully before use.

• Keep out of the reach of children.
`,

  specialPrecautions: `
General parenteral administration is preferable to oral dosing if there is a possibility that the patient may vomit and not absorb the Leucovorin.

Leucovorin has no effect on non-hematologic toxicities of methotrexate such as the nephrotoxicity resulting from drug and/or metabolite precipitation in the kidney.

Since Leucovorin enhances the toxicity of fluorouracil, Leucovorin/5-fluorouracil combination therapy for advanced colorectal cancer should be administered under the supervision of a physician experienced in the use of antimetabolite cancer chemotherapy.

Particular care should be taken in the treatment of elderly or debilitated colorectal cancer patients, as these patients may be at increased risk of severe toxicity.

Laboratory Tests

Patients being treated with the Leucovorin/5-fluorouracil combination should have a CBC with differential and platelets prior to each treatment.

During the first two courses a CBC with differential and platelets has to be repeated weekly and, thereafter, once each cycle at the time of anticipated WBC nadir.

Electrolytes and liver function tests should be performed prior to each treatment for the first three cycles then prior to every other cycle.

Dosage modifications of fluorouracil should be instituted as follows, based on the most severe toxicities:

Diarrhea and/or Stomatitis

Moderate Toxicity:

• WBC 1,000–1,900/mm³

• Platelets 25,000–75,000/mm³

• Decrease 5-FU dose by 20%

Severe Toxicity:

• WBC <1,000/mm³

• Platelets <25,000/mm³

• Decrease 5-FU dose by 30%

If no toxicity occurs, the 5-fluorouracil dose may increase 10%.

Treatment should be deferred until:

• WBCs are 4,000/mm³

• Platelets are 130,000/mm³

If blood counts do not reach these levels within two weeks, treatment should be discontinued.

Patients should have radiological examinations as needed.

Treatment should be discontinued when there is clear evidence of tumour progression.
`,
},
{
  id: 88,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zucarfil",
  name: "Zucarfil",
  subtitle: "Carfilzomib Inj 60 mg",
  type: "Injection",

  image: "/products/zucarfil/zucarfil60-1.jpeg",

  images: [
    "/products/zucarfil/zucarfil60-1.jpeg",
    "/products/zucarfil/zucarfil60-2.jpeg",
    "/products/zucarfil/zucarfil60-3.jpeg",
  ],

  strength: "60 mg",
  packSize: "1 Vial",
  drugClass: "Proteasome Inhibitors",

  dosage: `
Carfilzomib is administered as an infusion into a vein.

The infusion may last up to 30 minutes.

Carfilzomib is given 2 days in a row each week, for 3 weeks, followed by one week without treatment.

Each 28-day period is one treatment cycle.

This means that Carfilzomib will be given on:

• Day 1

• Day 2

• Day 8

• Day 9

• Day 15

• Day 16

of each 28-day cycle.

The doses on Days 8 and 9 of each cycle will not be given from Cycle 13 onwards if treated with Carfilzomib in combination with lenalidomide and dexamethasone.

Most patients will receive treatment for as long as their disease improves or remains stable.

However, Carfilzomib treatment may also be stopped if the patient experiences side effects that cannot be managed.

Together with Carfilzomib, patients may also be given:

• Lenalidomide and dexamethasone

• Daratumumab and dexamethasone

• Dexamethasone alone
`,

  coldStorage: "Yes",

  description: `
Carfilzomib is an antineoplastic agent (cancer medicine).

It interferes with the growth of cancer cells, which are eventually destroyed by the body.

This medicine is to be given only by or under the supervision of your doctor.

This product is available in the following dosage form:

• Powder for Solution
`,

  indication: `
Carfilzomib in combination with:

• Daratumumab and dexamethasone

• Lenalidomide and dexamethasone

• Dexamethasone alone

is indicated for the treatment of adult patients with multiple myeloma who have received at least one prior therapy.
`,

  clinicalEfficacy: `
Carfilzomib (Carf) is a second-generation proteasome inhibitor approved for patients with relapsed and/or refractory multiple myeloma (RRMM) who failed prior lines of therapy.

A systematic review of Carfilzomib literature with meta-analysis was performed to determine the efficacy and safety in RRMM patients.
`,

  safetyInformation: `
As lenalidomide may be used in combination with Carfilzomib, particular attention to the lenalidomide pregnancy testing and prevention requirements is needed.

New or worsening cardiac failure such as:

• Congestive cardiac failure

• Pulmonary oedema

• Decreased ejection fraction

as well as:

• Myocardial ischaemia

• Myocardial infarction

have occurred following the administration of Carfilzomib.

Cardiac Disorders

Death due to cardiac arrest has occurred within a day of Carfilzomib administration, and fatal outcomes have been reported with cardiac failure and myocardial infarction.

While adequate hydration is required prior to dosing in Cycle 1, all patients should be monitored for evidence of volume overload, especially patients at risk for cardiac failure.

The total volume of fluids may be adjusted as clinically indicated in patients with baseline cardiac failure or who are at risk for cardiac failure.

Stop Carfilzomib for Grade 3 or 4 cardiac events until recovery and consider whether to restart Carfilzomib at one dose level reduction based on a benefit/risk assessment.

The risk of cardiac failure is increased in:

• Elderly patients (≥75 years)

• Asian patients

A thorough assessment for cardiovascular risk factors prior to starting treatment is recommended.

Patients with:

• New York Heart Association (NYHA) Class III and IV heart failure

• Recent myocardial infarction

• Conduction abnormalities uncontrolled by medicinal products

may be at greater risk for cardiac complications.

Patients with signs or symptoms of:

• NYHA Class III or IV cardiac failure

• Recent myocardial infarction (within the last 4 months)

• Uncontrolled angina

• Arrhythmias

should have a comprehensive cardiological assessment prior to starting treatment with Carfilzomib.

Electrocardiographic Changes

There have been cases of QT interval prolongation reported in clinical studies and post-marketing.

Cases of ventricular tachycardia have been reported in patients receiving Carfilzomib.

Pulmonary Toxicity

Acute respiratory distress syndrome (ARDS), acute respiratory failure, and acute diffuse infiltrative pulmonary disease such as:

• Pneumonitis

• Interstitial lung disease

have occurred in patients receiving Carfilzomib.

Some of these events have been fatal.

Evaluate and stop Carfilzomib until resolved and consider whether to restart Carfilzomib based on a benefit/risk assessment.

Pulmonary Hypertension

Pulmonary hypertension has been reported in patients treated with Carfilzomib.

Some of these events have been fatal.

Evaluate as appropriate.

Stop Carfilzomib for pulmonary hypertension until resolved or returned to baseline and consider whether to restart Carfilzomib based on a benefit/risk assessment.

Dyspnoea was commonly reported in patients treated with Carfilzomib.

Evaluate dyspnoea to exclude cardiopulmonary conditions, including cardiac failure and pulmonary syndromes.

Stop Carfilzomib for Grade 3 and 4 dyspnoea until resolved or returned to baseline and consider whether to restart Carfilzomib.
`,

  specialPrecautions: `
Tell your doctor right away if you have:

• Chest pain

• Dizziness or lightheadedness

• Fainting

• Fast heartbeat

• Pain, redness, or swelling in the arms or legs

• Trouble breathing

This medicine may cause infusion-related reactions, which can be life-threatening and require immediate medical attention.
`,
},
{
  id: 89,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zuviplat",
  name: "Zuviplat",
  subtitle: "Cisplatin Inj 10 mg / 50 mg",
  type: "Injection",

  image: "/products3/zuviplat-1.png",

  images: [
    "/products3/zuviplat-1.png",
    "/products3/zuviplat-2.png",
    "/products3/zuviplat-3.png",
   
  ],

  strength: "10 mg / 50 mg",
  packSize: "1 Vial",
  drugClass: "Antineoplastic Agents / Platinum Compounds",

  dosage: `
ZUVIPLAT solution should be used intravenously only and should be administered by i.v. dose every 3-4 weeks.

An alternative regimen is:

• 15-20 mg per sq. i.v daily for 5 days every 3-4 weeks

In clinical use of ZUVIPLAT injection, take the following measures for reducing the nephrotoxicity of the drug:

• Administer 1000-2000 ml of an adequate fluid deficit replacement over 4 hours or more prior to the administration of the ZUVIPLAT injection.

• Administer ZUVIPLAT injection as a mixture with 500-1000 ml of physiological saline or a dextrose-saline solution by intravenous drip over 2 hours or more.

• When it takes the intravenous drip over 2 hours or more, keep the dripping bottle away from light.

• After the administration of ZUVIPLAT injection, administer 1000-2000 ml of an adequate fluid deficit replacement over 4 hours or more.

• During the administration of ZUVIPLAT injection, exercise care so as to maintain the urinary output and administer diuretics such as mannitol and furosemide.
`,

  coldStorage: "No",

  description: `
ZUVIPLAT is an anticancer drug of an entirely new category for antitumor activity and low toxicity from among a variety platinum compounds developed according to the discovery by Barnett Rosenberg in the U.S.A that platinum compound inhibits the mitosis of Escherichia coli.
`,

  indication: `
ZUVIPLAT can be used itself or in addition to other modalities or preferably in established combination therapy with other approved chemotherapeutic agents.

It is indicated in:

• Metastatic ovarian tumors

• Squamous cell carcinoma of the head and neck

• Advanced bladder carcinoma
`,

  clinicalEfficacy: `
Cisplatin is considered one of the most effective anticancer drugs used widely for the treatment of solid tumours.

One of the most prominent and effective clinical applications of cisplatin is the treatment of lung cancer.
`,

  safetyInformation: `
PRECAUTION SPECIAL:

• Patients with renal disorder

• Patients with hepatic disorder

• Patients with myelosuppression

• Patients with auditory disorder
`,

  specialPrecautions: `
ZUVIPLAT solution should be drawn up out of the vial using a syringe and sterile technique and added to 2 liters of either:

• A 5% dextrose in 1/3 normal saline solution

or

• 5% dextrose in a normal saline solution

37.5 gm of mannitol should also be added in the infusion solution.

As with other potentially toxic compounds, caution in handling the solution of ZUVIPLAT should be exercised.

Skin reactions associated with accidental exposure to ZUVIPLAT may occur.

The use of gloves is recommended.

If ZUVIPLAT solution comes into contact with skin or mucosa, immediately wash thoroughly with soap and water.

Do not mix ZUVIPLAT injection with:

• 5% dextrose

• Amino acid solution

• Any solution containing sodium lactate

for administration by intravenous drip because ZUVIPLAT may be degraded in such a mixture.

Because ZUVIPLAT reacts with aluminum to form precipitate, resulting in deteriorated activity.

Because ZUVIPLAT is a chelate compound, ZUVIPLAT injection should not be mixed with any other anticancer drugs.

ZUVIPLAT injection when mixed with physiological saline or a dextrose-saline solution should be administered as early as possible.

Because ZUVIPLAT is degraded by light, keep ZUVIPLAT injection away from direct sunlight.

When it takes the intravenous drip of PLATINEX injection a long time keep the dripping bottle away from light.

OTHER PRECAUTION:

It has been reported that the administration of ZUVIPLAT injection may in some cases be associated with:

• Congestive heart failure

• Abnormal ECG

• Hypomagnesaemia

• Hypocalcemia

ZUVIPLAT has proved mutagenic in bacteria.

It has been reported that the intraperitoneal administration of ZUVIPLAT to mice caused:

• Pulmonary adenoma

• Skin tumors

USE IN PREGNANCY:

ZUVIPLAT is carcinogenic and should be considered teratogenic.

Termination of pregnancy (especially first trimester) should be considered in patients given ZUVIPLAT.

Cisplatin may cause serious kidney problems.

Tell your doctor right away if you have:

• Blood in urine

• Change in frequency of urination or amount of urine

• Difficulty in breathing

• Drowsiness

• Increased thirst

• Loss of appetite

• Nausea or vomiting

• Swelling of the feet or lower legs

• Weakness
`,
},
{
  id: 90,
  category: "oncoace",
  categoryName: "OncoAce",
  slug: "zuviplexa",
  name: "Zuviplexa",
  subtitle: "Plerixafor Inj 20 mg",
  type: "Injection",

  image: "/products3/zuviplexa-1.png",

  images: [
    "/products3/zuviplexa-1.png",
    "/products3/zuviplexa-2.png",
    "/products3/zuviplexa-3.png",
  ],

  strength: "20 mg",
  packSize: "1 Vial",
  drugClass: "Hematopoietic Stem Cell Mobilizers",

  dosage: `
The recommended dose of Zuviplexa by subcutaneous injection is based on body weight:

• 20 mg fixed dose or 0.24 mg/kg of body weight for patients weighing ≤ 83 kg

• 0.24 mg/kg of body weight for patients weighing > 83 kg

Single-use vial containing 1.2 mL of a 20 mg/mL solution.
`,

  coldStorage: "No",

  description: `
Plerixafor is a haematopoietic stem cell mobiliser with a chemical name of:

1,1'-[1,4-phenylenebis(methylene)]-bis-1,4,8,11-tetraazacyclotetradecane.

It has the molecular formula:

C28H54N8

The molecular weight of plerixafor is:

502.79 g/mol

Plerixafor is a white to off-white crystalline solid.

It is hygroscopic.

Plerixafor has a typical melting point of 131.5°C.
`,

  indication: `
Zuviplexa (plerixafor) injection is indicated in combination with granulocyte-colony stimulating factor (G-CSF) to mobilize hematopoietic stem cells (HSCs) to the peripheral blood for collection and subsequent autologous transplantation in patients with:

• Non-Hodgkin’s Lymphoma (NHL)

• Multiple Myeloma (MM)
`,

  clinicalEfficacy: `
Plerixafor is an inhibitor of the CXCR4 chemokine receptor and blocks binding of its cognate ligand, stromal cell-derived factor-1α (SDF-1α).

SDF-1α and CXCR4 are recognized to play a role in the trafficking and homing of human haematopoietic stem cells (HSCs) to the marrow compartment.
`,

  safetyInformation: `
• Keep out of reach of children.

• Take as directed by physician.
`,

  specialPrecautions: `
Embryo-Fetal Toxicity

Based on findings from animal reproduction studies, Zuviplexa can cause fetal harm when administered to a pregnant woman.

Plerixafor administration to pregnant rats during organogenesis resulted in:

• Embryo-fetal mortality

• Structural abnormalities

• Alterations to growth

at exposures approximately 10 times the exposure at the recommended human dose.

Pregnancy

Limited available data with Zuviplexa use in pregnant women is insufficient to inform a drug-associated risk of adverse developmental outcomes.

In animal reproduction studies, subcutaneous administration of plerixafor to pregnant rats during organogenesis at doses 10 times the maximum recommended human doses resulted in:

• Embryo-fetal mortality

• Structural abnormalities

• Alterations to growth

Lactation

There are no data on the presence of plerixafor in human milk, the effect on the breastfed child, or the effect on milk production.

Because of the potential serious adverse reactions in the breastfed child, advise females that breastfeeding is not recommended during treatment with Zuviplexa and for one week after the final dose.
`,
},
];