"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Configurator.module.css";
import { Check } from "lucide-react";

type Option = {
  id: string;
  name: string;
  price: number;
};

const STEPS = [
  {
    title: "Base Sponge",
    options: [
      { id: "s-choc", name: "Chocolate", price: 500 },
      { id: "s-van", name: "Vanilla", price: 450 },
      { id: "s-red", name: "Red Velvet", price: 550 },
    ],
  },
  {
    title: "Filling Layer",
    options: [
      { id: "f-nut", name: "Nutella", price: 150 },
      { id: "f-ber", name: "Berry Compote", price: 120 },
      { id: "f-man", name: "Mango Mousse", price: 140 },
    ],
  },
  {
    title: "Crunch Element",
    options: [
      { id: "c-haz", name: "Roasted Hazelnut", price: 100 },
      { id: "c-bis", name: "Biscoff", price: 120 },
      { id: "c-but", name: "Butterscotch", price: 80 },
    ],
  },
  {
    title: "Top Drip / Garnish",
    options: [
      { id: "t-drp", name: "Chocolate Drip", price: 50 },
      { id: "t-fru", name: "Fresh Fruits", price: 150 },
      { id: "t-mac", name: "Macarons", price: 200 },
    ],
  },
];

export default function Configurator() {
  const [selections, setSelections] = useState<Option[]>([
    STEPS[0].options[0],
    STEPS[1].options[0],
    STEPS[2].options[0],
    STEPS[3].options[0],
  ]);

  const handleSelect = (stepIndex: number, option: Option) => {
    const newSelections = [...selections];
    newSelections[stepIndex] = option;
    setSelections(newSelections);
  };

  const totalPrice = selections.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.configurator}>
      <div className={styles.header}>
        <div className={styles.badge}>Assembled Live in 10 Minutes!</div>
        <h2 className={styles.title}>Build-Your-Layer</h2>
        <p>Customise your perfect cake in 4 simple steps.</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.steps}>
          {STEPS.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              <div className={styles.optionsGrid}>
                {step.options.map((option) => (
                  <div
                    key={option.id}
                    className={`${styles.optionCard} ${
                      selections[index].id === option.id ? styles.selected : ""
                    }`}
                    onClick={() => handleSelect(index, option)}
                  >
                    <div className={styles.optionName}>{option.name}</div>
                    <div className={styles.optionPrice}>+₹{option.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.preview}>
          <div className={styles.previewImage} style={{ position: 'relative', overflow: 'hidden' }}>
            <Image 
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop"
              alt="Cake Preview"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.summary}>
            {selections.map((item, index) => (
              <div key={index} className={styles.summaryRow}>
                <span>{STEPS[index].title}: {item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
            <div className={styles.summaryTotal}>
              <span>Total:</span>
              <span>₹{totalPrice}</span>
            </div>
            <button className={`btn-primary ${styles.addToCartBtn}`}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
