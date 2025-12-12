
import React from 'react';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';
import { FileText } from 'lucide-react';

export default function SurveyDocButton() {
  const generate = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Title
            new Paragraph({
              text: "Hypothesis Validation & Feature Survey",
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
              spacing: { after: 300 },
            }),
            new Paragraph({
              text: "BeaconIO",
              alignment: AlignmentType.CENTER,
              style: "Subtitle",
              spacing: { after: 500 },
            }),

            // Part 1
            new Paragraph({
              text: "Part 1: Concept Validation (The 'Why')",
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              text: "Hypothesis: People in local communities lack real-time, trustworthy information regarding daily logistics (fuel, cash, services, emergency) and safety hazards, leading to anxiety and wasted time.",
              style: "Intense Quote", 
              spacing: { after: 300 },
            }),
            ...createQuestionBlock("1. How often do you experience the following in your city?", [
                "Unexpected traffic gridlocks",
                "Arriving at a fuel station to find it empty",
                "Arriving at an ATM to find it has no cash",
                "Encountering road hazards (potholes, accidents)",
                "Feeling unsafe due to lack of info",
                "Wasting time on unnecessary trips",
                "Relying on unverified social media for info",
                "Other (please specify)",
            ]),
            ...createQuestionBlock("2. Primary source of information currently?", [
                "Word of mouth / Phone calls",
                "Social Media (Twitter, WhatsApp, Facebook, Instagram, Blogs)",
                "Radio/TV News",
                "I don't get info until I see it myself"
            ]),
            ...createQuestionBlock("3. Trust level of Social Media alerts (1-5)?", ["Scale: 1 (Not at all) to 5 (Completely)"]),

            // Part 2
            new Paragraph({
              text: "Part 2: Current Feature Validation",
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              text: "Introduction: We have built 'Beacon' with the following features. Please rate how useful these are to you (Scale: Not Useful - Extremely Useful).",
              spacing: { after: 200 },
            }),
            
            // Core Location & Visuals
            ...createFeatureBlock("Live Radar & Grid Map", "Visual interface to see incidents. Toggle between Radar (distance-focused) and Grid view."),
            ...createFeatureBlock("Dynamic Radius Control", "Users can set a specific coverage radius (1km to 50km). Only beacons within this range appear in the feed and map."),
            ...createFeatureBlock("Navigation Integration", "One-tap 'Get Directions' button that opens Google Maps/Apple Maps to the beacon's location."),
            
            // Reporting & Status
            ...createFeatureBlock("Granular Status Updates", "Specific indicators (e.g., 'Fuel Scarce', 'Cash Available', 'Traffic Gridlock' ....) rather than generic alerts."),
            ...createFeatureBlock("Visual Evidence", "Ability to attach photos to reports for proof."),
            ...createFeatureBlock("Live Beacon Updates", "A chat-like thread under every beacon where users can post real-time updates (e.g., 'The tanker just arrived', 'The traffic just cleared', 'Cash now available')."),
            
            // Trust & Safety
            ...createFeatureBlock("Community Verification", "Confirm/Dispute system with Trust Scores. Verified reports are highlighted."),
            ...createFeatureBlock("Duplicate Prevention", "System checks for nearby similar beacons to prevent spam and clutter."),
            ...createFeatureBlock("Activity Zone Analysis", "Real-time stats indicating if your current sector is 'Clear', 'Active', or 'High Risk' based on report density."),
            
            // Social & Personalization
              ...createFeatureBlock("Social Sharing", "Share urgent beacon details directly to WhatsApp, Twitter, or other social platforms."),
            ...createFeatureBlock("Personal Beacon Feed", "See your personalized beacon updates and alerts all in one place."),
            ...createFeatureBlock("Personalization & Privacy", "Dark/Light mode support, and privacy settings to control location sharing and analytics."),

            // Part 3
            new Paragraph({
              text: "Part 3: Futuristic Roadmap",
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              text: "Select Top 3 Desired Features:",
              style: "Heading 4",
              spacing: { after: 200 },
            }),
            ...createList([
                "Offline Mesh Networking (Bluetooth/WiFi Direct)",
                "AI-Powered Verification (Anti-bias)",
                "Predictive Alerts (Historical data analysis)",
                "Tokenized Rewards (Crypto/Vouchers)",
                "Smart City Integration (Traffic lights/Police)",
                "SOS Panic Beacon"
            ]),

            // Part 4
            new Paragraph({
              text: "Part 4: User Personas",
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 },
            }),
            ...createQuestionBlock("1. Which describes you best?", [
                "The Watcher (Passive consumer)",
                "The Reporter (Active contributor)",
                "The Skeptic (Needs official sources)"
            ]),
             ...createQuestionBlock("2. Willingness to pay for 'Pro' features?", [
                "Nothing (Free)",
                 "₦1000 - ₦2000/ month",
                 "₦2000 - ₦3000/ month",
                "₦3000 - ₦5000/ month",
                "₦5000+ / month"
            ]),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "BeaconIO_Survey_Plan.docx");
  };

  return (
    <button 
        onClick={generate}
        className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
    >
        <FileText className="w-4 h-4" />
        <span>Download Survey Plan</span>
    </button>
  );
}

// Helpers
function createQuestionBlock(question, options) {
    const els = [
        new Paragraph({
            text: question,
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    ];
    options.forEach(opt => {
        els.push(new Paragraph({
            text: `• ${opt}`,
            spacing: { before: 50, after: 50 },
            indent: { left: 720 } // 0.5 inch
        }));
    });
    return els;
}

function createFeatureBlock(title, desc) {
    return [
        new Paragraph({
            children: [
                new TextRun({ text: title, bold: true }),
                new TextRun({ text: `: ${desc}` })
            ],
            bullet: { level: 0 }
        })
    ];
}

function createList(items) {
    return items.map(item => new Paragraph({
        text: item,
        bullet: { level: 0 }
    }));
}
