CreditWeave 🧵
Transforming informal artisan trade histories into bankable, priority-sector credit identities.

CreditWeave solves the critical credit-invisible gap for micro-artisans (Problem Statement PS-13). By ingestion of alternative text ledgers, seasonal order cycles, micro-UPI velocity, and community cluster trust loops, CreditWeave bypasses traditional collateral-backed credit scores (like CIBIL) to output an institutional-grade proxy rating.

Crucially, the engine features built-in calibration for regional trade variations (such as Lucknow's cyclical Chikankari/Zardozi festival demand spikes) to prevent natural economic seasonality from being misclassified as financial volatility.

🚀 Key Architectural Features
Alternative Underwriting Core: Powered by the new google-genai SDK and Gemini models to execute deep semantic extraction over unstructured invoice structures, WhatsApp transaction ledgers, and order history spreadsheets.

Seasonality-Aware Risk Engine: Calibrated explicitly to recognize priority sector market cycles, ensuring that high seasonal variance (e.g., massive revenue spikes preceding Eid and Diwali) reinforces market viability rather than penalizing stability.

Multi-Agent Policy Matcher: An automated compliance agent that matches the synthetic credit rating against active government priority lending brackets (MUDRA Shishu, Kishore, and Tarun frameworks).

Jan Samarth 2FA Automation Bridge: A secure, interactive human-in-the-loop mock simulation demonstrating form injection into centralized public sector banking queues, pausing dynamically to clear Aadhaar multi-factor authentication loops.

DPDP Act Compliance Guardrails: Built in strict accordance with the Digital Personal Data Protection Act, implementing explicit state intake checkboxes and automated sandbox session purges to clear local customer telemetry upon transaction freeze.

🛠️ Technology Stack
Backend: FastAPI (Python), Pydantic v2 (Data Validation), Uvicorn (ASGI Server), google-genai SDK

Frontend: React (Vite ecosystem), Tailwind CSS (Utility Styling), Zustand (State Engine), Recharts (Analytical Visualizations), Lucide React (Icon System)

📁 Repository Structure
Plaintext
creditweave/
├── README.md                        # Project documentation
├── backend/
│   ├── main.py                     # FastAPI server entry point & CORS configuration
│   ├── config.py                   # Environment variable mappings via python-dotenv
│   ├── agent/
│   │   └── tools/
│   │       └── scheme_matcher.py   # Policy compliance analysis agent
│   ├── services/
│   │   └── scoring_engine.py       # AI proxy credit risk underwriter
│   ├── models/
│   │   ├── artisan.py              # Pydantic profile validation schemas
│   │   └── credit_score.py         # Subscore and composite grading schemas
│   └── api/
│       └── routes/
│           ├── artisan.py          # /api/artisan mockup sandbox profiles
│           ├── credit.py           # /api/credit/score evaluation routing
│           └── loans.py            # /api/loans/match policy routing
└── frontend/
    ├── package.json                # Node dependency manifest
    ├── tailwind.config.js          # Utility layout style tokens
    └── src/
        ├── App.jsx                 # Application layout shell & state coordinator
        ├── components/
        │   ├── CreditGauge.jsx     # SVG radial proxy score meter
        │   ├── ScoreFactors.jsx    # Relative metric dimension sub-bars
        │   ├── SchemeCard.jsx      # High-density transactional loan products
        │   └── StatusTimeline.jsx  # Automation ledger console output trace
        └── pages/
            ├── Onboarding.jsx      # Consent tracking & profile selector portal
            ├── Dashboard.jsx       # Asymmetric forensic accounting report view
            └── LoanSchemes.jsx     # Priority credit desk & interactive 2FA modal
⚡ Installation & Execution Guide
1. Prerequisites
Ensure you have Python 3.10+ and Node.js 18+ installed on your local environment setup.

2. Backend Environment Variables
Create a .env file directly inside the backend/ directory:

Code snippet
GEMINI_API_KEY=your_actual_gemini_api_key_here
3. Server Startup Sequence
Open a terminal window and activate your Python environment to boot up the FastAPI kernel:

Bash
# Step into backend folder
cd backend

# Install dependencies 
pip install -r requirements.txt

# Launch ASGI server instance via root path map
cd ..
uvicorn backend.main:app --port 5000 --reload
The interactive API documentation grid will instantly be available for exploratory testing at http://localhost:5000/docs.

4. Frontend Interactive UI Launch
Open a second, separate terminal window to compile and run your client side presentation frame:

Bash
# Step into frontend folder
cd frontend

# Install core packages and dev tooling
npm install

# Run the local Vite development instance
npm run dev
Open your browser and step into the port mapping address printed by Vite (typically http://localhost:5173) to experience the interactive walkthrough lifecycle.

🔒 Security & Data Compliance Statement
CreditWeave processes alternative customer history data loops in strict alignment with current priority sector financial data protection frameworks:

Consent-Driven Ingestion: The evaluation model remains physically locked until data access parameters are authorized via the frontend interaction layout.

Data Minimization: No PII data components or long-term private text threads are cached within persistent database layers.

Automated Purging: All raw evaluation text vectors are kept entirely within isolated execution memory blocks and immediately cleared following endpoint resolution.