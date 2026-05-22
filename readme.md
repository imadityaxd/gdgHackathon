Markdown
# CreditWeave 🧵

> **Transforming informal artisan trade histories into bankable, priority-sector credit identities.**

### 👥 Team Dimensions
* **Team Name:** xdcoderz
* **Team Leader:** Adittya Sharma, subhaiyash@gmail.com
* **Team Member:** Devyanshuv Agrawal, i.devyanshv@gmail.com

---

## 📋 Project Overview
CreditWeave solves the critical credit-invisible gap for micro-artisans (**Problem Statement PS-13**). By ingesting alternative text ledgers, seasonal order cycles, micro-UPI velocity, and community cluster trust loops, CreditWeave bypasses traditional collateral-backed credit scores (like CIBIL) to output an institutional-grade proxy rating. 

Crucially, the engine features built-in calibration for regional trade variations (such as Lucknow's cyclical Chikankari/Zardozi festival demand spikes) to prevent natural economic seasonality from being misclassified as financial volatility.

---

## 🚀 Key Architectural Features

* **Alternative Underwriting Core:** Powered by the Google GenAI SDK and Gemini models to execute deep semantic extraction over unstructured invoice structures, WhatsApp transaction ledgers, and order history spreadsheets.
* **Seasonality-Aware Risk Engine:** Calibrated explicitly to recognize priority sector market cycles, ensuring that high seasonal variance (e.g., massive revenue spikes preceding Eid and Diwali) reinforces market viability rather than penalizing stability.
* **Multi-Agent Policy Matcher:** An automated compliance agent that matches the synthetic credit rating against active government priority lending brackets (MUDRA Shishu, Kishore, and Tarun frameworks).
* **Jan Samarth 2FA Automation Bridge:** A secure, interactive human-in-the-loop mock simulation demonstrating form injection into centralized public sector banking queues, pausing dynamically to clear Aadhaar multi-factor authentication loops.
* **DPDP Act Compliance Guardrails:** Built in strict accordance with the Digital Personal Data Protection Act, implementing explicit state intake checkboxes and automated sandbox session purges to clear local customer telemetry upon transaction freeze.

---

## 🛠️ Technology Stack

* **Backend:** FastAPI (Python), Pydantic v2 (Data Validation), Uvicorn (ASGI Server), `google-genai` SDK
* **Frontend:** React.js (Vite ecosystem), Tailwind CSS (Utility Styling), Zustand (State Engine), Recharts (Analytical Visualizations), Lucide React (Icon System)

---

## 📁 Repository Directory Structure

```text
creditweave/
├── README.md                        # Project documentation
├── .env.example                     # Environment variable blueprint
├── requirements.txt                 # Backend core dependencies python list
│
├── backend/
│   ├── main.py                      # FastAPI server entry point & CORS configuration
│   ├── config.py                    # Environment variable mappings via python-dotenv
│   │
│   ├── agent/
│   │   ├── __init__.py
│   │   ├── credit_agent.py          # Core LangChain/LangGraph agent interface
│   │   ├── tools/
│   │   │   ├── gst_fetcher.py       # GST Portal scraper/sandbox API
│   │   │   ├── order_analyzer.py    # WhatsApp/Excel ledger parsing scripts
│   │   │   ├── delivery_scorer.py   # Alternative distribution engine consistency tracker
│   │   │   ├── scheme_matcher.py    # Policy compliance analysis tool
│   │   │   └── loan_applicator.py   # Automated data field injector 
│   │   └── prompts/
│   │       ├── credit_profile.txt
│   │       └── scheme_selector.txt
│   │
│   ├── models/
│   │   ├── artisan.py               # Pydantic data profiles verification schemas
│   │   ├── credit_score.py          # Subscore and composite credit structures
│   │   └── loan_application.py      # Transaction application models
│   │
│   ├── services/
│   │   ├── gst_service.py           # GST data ingestion module
│   │   ├── scoring_engine.py        # AI alternate underwriting logic calculation engine
│   │   ├── scheme_service.py        # Internal policy structural database layers
│   │   └── notification_service.py  # Twilio outbound transaction alerts handler
│   │
│   └── db/
│       ├── database.py              # Engine SQLite/PostgreSQL connectors
│       ├── migrations/
│       └── seeds/
│           └── schemes.json         # Static thresholds map (MUDRA, PM Vishwakarma)
│
├── frontend/
│   ├── index.html                   # HTML Entry template shell
│   ├── package.json                 # Node package configuration layout
│   └── src/
│       ├── App.jsx                  # Main interface wrapper & routing manager
│       ├── pages/
│       │   ├── Onboarding.jsx       # Registration tracker and DPDP consent bridge
│       │   ├── Dashboard.jsx        # Forensic alternate accounting reports desk
│       │   ├── DataUpload.jsx       # Transaction log upload interfaces
│       │   └── LoanSchemes.jsx      # Transactional priority matchmaking console
│       ├── components/
│       │   ├── CreditGauge.jsx      # SVG dynamic score progress meter
│       │   ├── ScoreFactors.jsx     # High-density evaluation subscore dimensions
│       │   ├── SchemeCard.jsx       # Premium transactional allocation card layout
│       │   └── StatusTimeline.jsx   # Live container browser logs terminal trace
│       └── utils/
│           └── api.js               # Central Axios pipeline gateway instances
│
├── data/
│   ├── sample_gst_data.json         # Simulated portal payload structural vectors
│   ├── sample_orders.xlsx           # Mock invoice transaction spreadsheets
│   └── government_schemes.json      # Regulatory benchmark policy criteria maps
│
└── docs/
    ├── architecture.md              # System design specifications
    ├── scoring_methodology.md       # Weight calibration matrices definitions
    └── demo_script.md               # User scenario walkthrough timeline
⚡ Installation & Execution Guide
1. Backend Environment Variables
Create a .env file directly inside the backend/ directory:

Code snippet
GEMINI_API_KEY=your_actual_gemini_api_key_here
2. Server Startup Sequence
Open a terminal window and execute the following commands to initialize the FastAPI backend:

Bash
# Step into backend folder
cd backend

# Install dependencies 
pip install -r requirements.txt

# Launch ASGI server instance via root path map
cd ..
uvicorn backend.main:app --port 5000 --reload
The interactive API documentation dashboard is accessible at http://localhost:5000/docs.

3. Frontend UI Launch
Open a second, separate terminal window to launch your Vite server:

Bash
# Step into frontend folder
cd frontend

# Install core packages and dev tooling
npm install

# Run the local Vite development instance
npm run dev