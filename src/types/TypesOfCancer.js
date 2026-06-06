import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./typesofcancer.css";
import PageBanner from "../components/PageBanner";


const cancersData = [
  { name: "Adrenal Cancer", desc: "Affects the adrenal glands above the kidneys.", img: "/cancer-types/adrenal.png" },
  { name: "Anal Cancer", desc: "Begins in the tissues of the anus or anal canal.", img: "/cancer-types/anal.png" },
  { name: "Appendix Cancer", desc: "A rare cancer that begins in the appendix.", img: "/cancer-types/appendix.png" },
  { name: "Astrocytoma", desc: "A brain or spinal cord tumor that begins in astrocytes.", img: "/cancer-types/brain.png" },

  { name: "Basal Cell Carcinoma", desc: "A common skin cancer that starts in basal cells.", img: "/cancer-types/skin.png" },
  { name: "Bile Duct Cancer", desc: "A cancer that begins in the bile ducts.", img: "/cancer-types/bile-duct.png" },
  { name: "Bladder Cancer", desc: "Affects the tissues of the bladder.", img: "/cancer-types/bladder.png" },
  { name: "Bone Cancer", desc: "Begins in the bones or cartilage.", img: "/cancer-types/bone.png" },
  { name: "Brain Cancer", desc: "Occurs in the brain or spinal cord.", img: "/cancer-types/brain.png" },
  { name: "Breast Cancer", desc: "Starts in the cells of the breast.", img: "/cancer-types/breast.png" },
  { name: "Burkitt Lymphoma", desc: "A fast-growing type of non-Hodgkin lymphoma.", img: "/cancer-types/lymphoma.png" },

  { name: "Cervical Cancer", desc: "Affects the cells of the cervix.", img: "/cancer-types/cervix.png" },
  { name: "Cholangiocarcinoma", desc: "Another name for bile duct cancer.", img: "/cancer-types/bile-duct.png" },
  { name: "Chondrosarcoma", desc: "A cancer that begins in cartilage cells.", img: "/cancer-types/bone.png" },
  { name: "Colon Cancer", desc: "Affects the colon or large intestine.", img: "/cancer-types/colon.png" },

  { name: "Duodenal Cancer", desc: "Begins in the first part of the small intestine.", img: "/cancer-types/intestine.png" },

  { name: "Endometrial Cancer", desc: "Occurs in the lining of the uterus.", img: "/cancer-types/uterus.png" },
  { name: "Esophageal Cancer", desc: "Affects the esophagus or food pipe.", img: "/cancer-types/esophagus.png" },
  { name: "Ewing Sarcoma", desc: "A rare cancer usually found in bone or soft tissue.", img: "/cancer-types/bone.png" },
  { name: "Eye Cancer", desc: "Begins in or around the eye.", img: "/cancer-types/eye.png" },

  { name: "Fallopian Tube Cancer", desc: "Begins in the fallopian tubes.", img: "/cancer-types/fallopian.png" },

  { name: "Gallbladder Cancer", desc: "Begins in the gallbladder.", img: "/cancer-types/gallbladder.png" },
  { name: "Gastric Cancer", desc: "Another name for stomach cancer.", img: "/cancer-types/stomach.png" },
  { name: "Gastrointestinal Stromal Tumor", desc: "A tumor that begins in the digestive tract wall.", img: "/cancer-types/intestine.png" },
  { name: "Germ Cell Tumor", desc: "Begins in reproductive cells.", img: "/cancer-types/germ-cell.png" },

  { name: "Hairy Cell Leukemia", desc: "A rare slow-growing blood cancer.", img: "/cancer-types/blood.png" },
  { name: "Head & Neck Cancer", desc: "Affects areas of the mouth, throat, nose or glands.", img: "/cancer-types/head-neck.png" },
  { name: "Hodgkin Lymphoma", desc: "A cancer of the lymphatic system.", img: "/cancer-types/lymphoma.png" },

  { name: "Inflammatory Breast Cancer", desc: "A rare aggressive type of breast cancer.", img: "/cancer-types/breast.png" },

  { name: "Juvenile Myelomonocytic Leukemia", desc: "A rare blood cancer mostly seen in children.", img: "/cancer-types/blood.png" },

  { name: "Kaposi Sarcoma", desc: "A cancer that forms in blood and lymph vessel lining.", img: "/cancer-types/skin.png" },
  { name: "Kidney Cancer", desc: "Begins in the kidneys.", img: "/cancer-types/kidney.png" },

  { name: "Laryngeal Cancer", desc: "Begins in the voice box.", img: "/cancer-types/throat.png" },
  { name: "Leukemia", desc: "A cancer of blood-forming tissues.", img: "/cancer-types/blood.png" },
  { name: "Liver Cancer", desc: "Begins in the liver cells.", img: "/cancer-types/liver.png" },
  { name: "Lung Cancer", desc: "Starts in the lungs.", img: "/cancer-types/lung.png" },
  { name: "Lymphoma", desc: "A cancer of the lymphatic system.", img: "/cancer-types/lymphoma.png" },

  { name: "Male Breast Cancer", desc: "Breast cancer occurring in men.", img: "/cancer-types/breast.png" },
  { name: "Melanoma", desc: "A serious type of skin cancer.", img: "/cancer-types/skin.png" },
  { name: "Mesothelioma", desc: "Cancer affecting the lining of lungs or abdomen.", img: "/cancer-types/lung.png" },
  { name: "Mouth Cancer", desc: "Occurs in tissues of the mouth.", img: "/cancer-types/oral.png" },
  { name: "Multiple Myeloma", desc: "A cancer of plasma cells in bone marrow.", img: "/cancer-types/blood.png" },

  { name: "Nasal Cancer", desc: "Begins in the nasal cavity.", img: "/cancer-types/nose.png" },
  { name: "Nasopharyngeal Cancer", desc: "Affects the upper part of the throat behind the nose.", img: "/cancer-types/throat.png" },
  { name: "Neuroblastoma", desc: "A cancer that develops from immature nerve cells.", img: "/cancer-types/nerve.png" },
  { name: "Non-Hodgkin Lymphoma", desc: "A cancer of white blood cells.", img: "/cancer-types/lymphoma.png" },

  { name: "Ocular Melanoma", desc: "Melanoma that begins in the eye.", img: "/cancer-types/eye.png" },
  { name: "Oral Cancer", desc: "Occurs in the tissues of the mouth.", img: "/cancer-types/oral.png" },
  { name: "Osteosarcoma", desc: "A bone cancer often found in long bones.", img: "/cancer-types/bone.png" },
  { name: "Ovarian Cancer", desc: "Starts in the ovaries.", img: "/cancer-types/ovary.png" },

  { name: "Pancreatic Cancer", desc: "Begins in the pancreas.", img: "/cancer-types/pancreas.png" },
  { name: "Penile Cancer", desc: "A rare cancer that begins in the penis.", img: "/cancer-types/penile.png" },
  { name: "Pituitary Tumor", desc: "Begins in the pituitary gland.", img: "/cancer-types/pituitary.png" },
  { name: "Pleural Cancer", desc: "Affects the lining around the lungs.", img: "/cancer-types/lung.png" },
  { name: "Prostate Cancer", desc: "Affects the prostate gland in men.", img: "/cancer-types/prostate.png" },
  { name: "Rectal Cancer", desc: "Begins in the rectum.", img: "/cancer-types/rectum.png" },
  { name: "Renal Cell Carcinoma", desc: "The most common type of kidney cancer.", img: "/cancer-types/kidney.png" },
  { name: "Retinoblastoma", desc: "A rare eye cancer mostly seen in children.", img: "/cancer-types/eye.png" },
  { name: "Rhabdomyosarcoma", desc: "A cancer that begins in soft muscle tissue.", img: "/cancer-types/muscle.png" },

  { name: "Salivary Gland Cancer", desc: "Begins in the salivary glands.", img: "/cancer-types/salivary.png" },
  { name: "Sarcoma", desc: "Cancer that begins in bone or soft tissue.", img: "/cancer-types/sarcoma.png" },
  { name: "Skin Cancer", desc: "Includes melanoma and non-melanoma skin cancers.", img: "/cancer-types/skin.png" },
  { name: "Small Intestine Cancer", desc: "Begins in the small intestine.", img: "/cancer-types/intestine.png" },
  { name: "Spinal Cancer", desc: "Occurs in or near the spinal cord.", img: "/cancer-types/spine.png" },
  { name: "Stomach Cancer", desc: "Affects the stomach lining.", img: "/cancer-types/stomach.png" },

  { name: "Testicular Cancer", desc: "Occurs in one or both testicles.", img: "/cancer-types/testicular.png" },
  { name: "Throat Cancer", desc: "Affects the throat, voice box or tonsils.", img: "/cancer-types/throat.png" },
  { name: "Thymoma", desc: "A tumor that begins in the thymus gland.", img: "/cancer-types/thymus.png" },
  { name: "Thyroid Cancer", desc: "Occurs in the thyroid gland.", img: "/cancer-types/thyroid.png" },
  { name: "Tongue Cancer", desc: "Begins in the cells of the tongue.", img: "/cancer-types/tongue.png" },
  { name: "Tonsil Cancer", desc: "Begins in the tonsils.", img: "/cancer-types/throat.png" },

  { name: "Ureter Cancer", desc: "Begins in the ureters.", img: "/cancer-types/ureter.png" },
  { name: "Urethral Cancer", desc: "Begins in the urethra.", img: "/cancer-types/urethra.png" },
  { name: "Uterine Cancer", desc: "Begins in the uterus.", img: "/cancer-types/uterus.png" },

  { name: "Vaginal Cancer", desc: "Begins in the vaginal tissues.", img: "/cancer-types/vaginal.png" },
  { name: "Vulvar Cancer", desc: "Begins in the outer female genital area.", img: "/cancer-types/vulvar.png" },

  { name: "Waldenström Macroglobulinemia", desc: "A rare type of blood cancer.", img: "/cancer-types/blood.png" },
  { name: "Wilms Tumor", desc: "A kidney cancer mostly seen in children.", img: "/cancer-types/kidney.png" },

  { name: "Xeroderma Pigmentosum-related Skin Cancer", desc: "Skin cancer linked to extreme UV sensitivity.", img: "/cancer-types/skin.png" },

  { name: "Yolk Sac Tumor", desc: "A rare germ cell tumor.", img: "/cancer-types/germ-cell.png" },

  { name: "Zollinger-Ellison Syndrome Associated Tumors", desc: "Tumors linked with excess stomach acid production.", img: "/cancer-types/stomach.png" },
];

const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const createSlug = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const TypesOfCancer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");

  const filteredCancers = useMemo(() => {
    return cancersData.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLetter =
        activeLetter === "All" ||
        item.name.charAt(0).toUpperCase() === activeLetter;

      return matchesSearch && matchesLetter;
    });
  }, [searchTerm, activeLetter]);

  return (
    <div className="toc-page">

      {/* HERO */}

      <PageBanner
  image="/cancer-types/typesbanner1.png"
  title={
    <>
      Types of <br />
      Cancer
    </>
  }
  description=""
  alt="Types of Cancer"
/>

      {/* SEARCH + FILTER */}

      <section className="toc-search-section">

        <div className="toc-container">

          <div className="toc-filter-row">

            <div className="toc-search-box">

              <i className="fa-solid fa-magnifying-glass"></i>

              <input
                type="text"
                placeholder="Search cancer types..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
              />

            </div>

            <div className="toc-letters">

              {letters.map((letter) => (
                <button
                  key={letter}
                  className={
                    activeLetter === letter
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveLetter(letter)
                  }
                >
                  {letter}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CARDS */}

      <section className="toc-cards-section">

        <div className="toc-container">

          {filteredCancers.length > 0 ? (

            <div className="toc-grid">

              {filteredCancers.map((item) => (

                <Link
                  to={`/types-of-cancer/${createSlug(item.name)}`}
                  className="toc-card"
                  key={item.name}
                >

                  <div className="toc-card-img">
                    <img
                      src={item.img}
                      alt={item.name}
                    />
                  </div>

                  <div className="toc-card-content">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>

                  <span className="toc-arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>

                </Link>

              ))}

            </div>

          ) : (

            <div className="toc-empty">
              No cancer type found. Try another
              search or filter.
            </div>

          )}

        </div>

      </section>

    </div>
  );
};

export default TypesOfCancer;