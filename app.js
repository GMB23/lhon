// LHON Knowledge Hub - Enhanced JavaScript Application

// Enhanced Application Data with proper structure
const appData = {
  // Simple Summary for 6th grade reading level
  simpleSummary: "LHON is a genetic eye disease that runs in families. It damages the nerve that sends pictures from your eyes to your brain. This happens when the tiny power plants in your eye cells (called mitochondria) don't work right. Men get this disease more often than women. The main symptom is sudden loss of central vision, making it hard to see things straight ahead. To stay healthy, people with LHON genes should never smoke, drink very little alcohol, avoid certain medicines like some antibiotics, and see an eye doctor every year. Some vitamins like idebenone can help protect vision. New treatments using gene therapy are being tested and show promise for fixing the broken genes and restoring sight. The most important thing is to avoid triggers like smoking, which can turn the disease on in people who carry the genes.",

  // Pathophysiology section
  pathophysiology: {
    overview: "Leber Hereditary Optic Neuropathy (LHON) arises when point mutations in mitochondrial DNA encoding Complex I subunits (ND1, ND4, ND6) impair NADH dehydrogenase activity. These mutations block normal electron flow through the electron transport chain, leading to increased reduction of flavin mononucleotide and subsequent electron leak. This results in excessive formation of reactive oxygen species (ROS), particularly superoxide. The accumulated ROS trigger lipid peroxidation, mitochondrial DNA damage, and ultimately retinal ganglion cell apoptosis. The three main LHON variants differ in the degree and site of Complex I dysfunction, which directly influences disease penetrance and visual prognosis. Recent structural data from Degli Esposti et al. additionally clarify Complex I mechanics via the ‘quinol-triggered semi-automatic shotgun model’ (PMC3219089).",
    variantDifferences: [
      {
        variant: "m.11778G>A (ND4)",
        complexIDeficiency: "Severe disruption of proton pumping, reduces ATP synthesis by 60-80% ([Carelli 1997](https://pubmed.ncbi.nlm.nih.gov/9211511/))",
        penetrance: "50% males, 10% females",
        notes: "Poor prognosis, rare recovery - most common mutation"
      },
      {
        variant: "m.3460G>A (ND1)",
        complexIDeficiency: "Blocks quinone binding chamber, reduces electron transfer by 60-80% ([Valentino 2004](https://pubmed.ncbi.nlm.nih.gov/15513094/))",
        penetrance: "80% males, 60% females",
        notes: "Moderate prognosis, some recovery possible"
      },
      {
        variant: "m.14484T>C (ND6)",
        complexIDeficiency: "Disrupts ND6 structure, impairs Complex I assembly by 40-60% ([Patsi 2008](https://pubmed.ncbi.nlm.nih.gov/18182609/))",
        penetrance: "40% males, 15% females",
        notes: "Best prognosis, 37-65% recover vision"
      }
    ]
  },

  // Primary supplements with strong evidence
  supplementsPrimary: [{
      name: "<a href='https://idebenone.net/' target='_blank'>Idebenone </a>(Raxone®)",
      evidence: "A",
      dosage: "900 mg/day (300 mg × 3)",
      mechanism: "Bypasses Complex I dysfunction, restores cellular ATP production",
      status: "FDA approved for LHON",
      link: "https://pubmed.ncbi.nlm.nih.gov/27071925/"
    },
    {
      name: "Coenzyme Q10",
      evidence: "B",
      dosage: "200-400 mg/day",
      mechanism: "Electron transport chain cofactor, antioxidant",
      status: "Next-best option if idebenone unavailable",
      link: "https://pubmed.ncbi.nlm.nih.gov/22410442/"
    },
    {
      name: "Lenadogene nolparvovec",
      evidence: "A",
      dosage: "9×10^10 viral genomes/eye",
      mechanism: "Gene therapy for ND4 mutation",
      status: "Investigational",
      link: "https://pubmed.ncbi.nlm.nih.gov/36449262/"
    },
    {
      name: "EPI-743",
      evidence: "B",
      dosage: "100-400 mg TID",
      mechanism: "Redox cofactor, enhances glutathione pool",
      status: "Investigational",
      link: "https://pubmed.ncbi.nlm.nih.gov/22410442/"
    },

{
  name: "Elamipretide (SS-31)",
  evidence: "B",
  dosage: "40 mg/day subcutaneous",
  mechanism: "Tetrapeptide binds cardiolipin to stabilize mitochondrial inner membrane, reduces ROS and improves ATP production",
  status: "Investigational in mitochondrial disease trials",
  link: "https://pubmed.ncbi.nlm.nih.gov/30224944/"
}
  ],

  // Limited evidence supplements
  supplementsSecondary: [{
      name: "Acetyl-L-Carnitine (ALCAR)",
      evidence: "C",
      dosage: "250-500 mg/day",
      mechanism: "Mitochondrial energy metabolism substrate",
      status: "Limited evidence",
      link: "https://pubmed.ncbi.nlm.nih.gov/34903999/"
    },
    {
      name: "Alpha-Lipoic Acid (ALA)",
      evidence: "C",
      dosage: "250-300 mg/day",
      mechanism: "Mitochondrial coenzyme, antioxidant",
      status: "Limited evidence",
      link: "https://pubmed.ncbi.nlm.nih.gov/34903999/"
    },
    {
      name: "Creatine",
      evidence: "C",
      dosage: "3-5 g/day",
      mechanism: "Cellular energy buffer system",
      status: "Limited evidence",
      link: "https://pubmed.ncbi.nlm.nih.gov/34903999/"
    },
    {
      name: "B-Complex Vitamins",
      evidence: "C",
      dosage: "As per RDA",
      mechanism: "Mitochondrial metabolism cofactors",
      status: "Limited evidence",
      link: "https://pubmed.ncbi.nlm.nih.gov/35945620/"
    },
    {
      name: "N-Acetylcysteine (NAC)",
      evidence: "C",
      dosage: "600-1200 mg/day",
      mechanism: "Glutathione precursor, antioxidant",
      status: "Limited evidence",
      link: "https://pubmed.ncbi.nlm.nih.gov/34903999/"
    },
{
      name: "Humanin",
      evidence: "C",
      dosage: "5 mg/day subcutaneous",
      mechanism: "Mitochondrial-derived peptide that blocks Bax-mediated apoptosis, antioxidant",
      status: "Experimental",
      link: "https://www.frontiersin.org/articles/10.3389/fendo.2023.1120533/full"
    },
    {
      name: "MOTS-c",
      evidence: "C",
      dosage: "5 mg/day subcutaneous",
      mechanism: "Activates AMPK, enhances mitochondrial biogenesis and metabolic resilience",
      status: "Experimental",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11268520/"
    },
    {
      name: "SHLPs 1-6",
      evidence: "C",
      dosage: "Variable (preclinical)",
      mechanism: "Small humanin-like peptides that modulate mitochondrial metabolism and reduce ROS",
      status: "Preclinical",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4925829/"
    },
    {
      name: "Epitalon",
      evidence: "C",
      dosage: "10 mg/day subcutaneous for 10 days (cycle)",
      mechanism: "Tetrapeptide from pineal gland analogue; antioxidant, increases telomerase",
      status: "Experimental anti-aging",
      link: "https://pubmed.ncbi.nlm.nih.gov/40141333/"
    },
    {
      name: "FOXO4-DRI",
      evidence: "C",
      dosage: "5 mg/kg weekly (preclinical)",
      mechanism: "Senolytic peptide disrupting FOXO4-p53 to clear senescent cells and lower ROS",
      status: "Preclinical",
      link: "https://pubmed.ncbi.nlm.nih.gov/28388405/"
    },
    {
      name: "5-Amino-1MQ",
      evidence: "C",
      dosage: "50-150 mg/day oral (research)",
      mechanism: "NNMT inhibitor that raises NAD+ and boosts fat oxidation and mitochondrial metabolism",
      status: "Preclinical metabolic health",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5826726/"
    }
  ],

  // Testosterone study data
  testosteroneStudy: {
    title: "Key Findings from PMC7148285 Study",
    studyLink: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7148285/",
    keyFindings: [
      "LHON cells (m.11778G>A) showed 6× higher apoptosis rate than controls after testosterone exposure",
      "Testosterone decreased mitophagy (mitochondrial cleanup) by 40% in LHON cells",
      "LHON cells had 3× higher mitochondrial mass, indicating dysfunction in mitochondrial quality control",
      "Testosterone increased BNIP3/BNIP3L proteins but impaired autophagy flux in LHON cells",
      "Effects were dose-dependent, with both 10nM and 100nM testosterone showing toxicity"
    ],
    mechanism: "In healthy cells, testosterone normally promotes mitochondrial biogenesis and enhances Complex I activity through androgen receptor-mediated transcription. However, in LHON cells with defective Complex I, testosterone paradoxically increases oxidative stress and cell death. The defective Complex I cannot handle the increased metabolic demand, leading to excessive ROS production. Additionally, testosterone reduces the cells' ability to remove damaged mitochondria through mitophagy, causing accumulation of dysfunctional mitochondria and ultimately triggering apoptosis.",
    clinicalImplication: "Male LHON carriers should avoid supraphysiological levels of testosterone, particularly from testosterone replacement therapy (TRT), as it may trigger disease onset in pre-symptomatic carriers or worsen existing vision loss. The study provides clear evidence that testosterone acts as a metabolic stressor specifically harmful to LHON cells, while being beneficial to healthy cells. Normal physiological testosterone levels are not necessarily problematic, but elevated levels pose significant risk."
  },

  // Things to avoid
  avoidList: [
      {
      category: "Hormones",
      item: "Dehydroepiandrosterone (DHEA)",
      riskLevel: "High",
      explanation: "Directly inhibits function of Complex I",
      link: "https://pubmed.ncbi.nlm.nih.gov/16849397/"
    },
      {
      category: "Diabetes Support",
      item: "Metformin",
      riskLevel: "High",
      explanation: "Directly inhibits function of Complex I",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5783883/"
    },
    {
      category: "Antibiotics",
      item: "Chloramphenicol",
      riskLevel: "High",
      explanation: "Inhibits mitochondrial protein synthesis",
      link: "https://lhoncanada.ca/things-to-avoid/"
    },
    {
      category: "Antibiotics",
      item: "Linezolid",
      riskLevel: "High",
      explanation: "Causes mitochondrial ribosome inhibition",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7993054/"
    },
    {
      category: "Antibiotics",
      item: "Ethambutol",
      riskLevel: "High",
      explanation: "Can precipitate LHON conversion in carriers",
      link: "https://pubmed.ncbi.nlm.nih.gov/16767386/"
    },
    {
      category: "Antibiotics",
      item: "Aminoglycosides (Streptomycin, Gentamicin)",
      riskLevel: "High",
      explanation: "Direct mitochondrial toxicity",
      link: "https://lhoncanada.ca/things-to-avoid/"
    },
    {
      category: "Antibiotics",
      item: "Tetracycline",
      riskLevel: "Medium",
      explanation: "Mitochondrial dysfunction",
      link: "https://lhoncanada.ca/things-to-avoid/"
    },
    {
      category: "Antibiotics",
      item: "Erythromycin",
      riskLevel: "Medium",
      explanation: "Respiratory chain interference",
      link: "https://lhoncanada.ca/things-to-avoid/"
    },
    {
      category: "Eye drops",
      item: "Benzalkonium Chloride (BAK) preservative",
      riskLevel: "High",
      explanation: "Direct Complex I inhibition, 50x more toxic in LHON cells",
      link: "https://pubmed.ncbi.nlm.nih.gov/28444329/"
    },
    {
      category: "IV fluids",
      item: "Lactated Ringer's",
      riskLevel: "Medium",
      explanation: "Metabolic burden on compromised mitochondria",
      link: "https://lhoncanada.ca/things-to-avoid/"
    },
    {
      category: "Vitamins",
      item: "Cyanocobalamin (synthetic B12)",
      riskLevel: "Medium",
      explanation: "Cyanide component is toxic to mitochondria",
      link: "https://lhoncanada.ca/things-to-avoid/"
    },
    {
      category: "Hormones",
      item: "Supraphysiological testosterone exposure",
      riskLevel: "High",
      explanation: "6-fold increase in apoptosis, decreased mitophagy in LHON cells",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7148285/"
    },
    {
      category: "Smoking",
      item: "All smoke exposure (tobacco, BBQ, campfire, wildfire)",
      riskLevel: "High",
      explanation: "93% conversion rate in male smokers vs 50% baseline",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2732267/"
    },
    {
      category: "Alcohol",
      item: "Alcohol >2 drinks/week",
      riskLevel: "Medium",
      explanation: "Mitochondrial stress and conversion trigger",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2732267/"
    }
  ],

  // Recommended behaviors
  behaviors: {
    daily: [
      "Consume a healthy diet",
      "If recommended by your health provider, take LHON-supporting supplements",
      "Protect your eyes outdoors with dark sunglasses and a hat",
      "Take breaks from screens every 20 minutes",
      "Avoid forever chemicals, microplastics, artificial dyes, and fragrances. All these things stress the body in ways still not fully understood by the science and medical field"
    ],
    weekly: [
      "Exercise regularly, both weightlifting and cardio",
      "Plan meals rich in antioxidants (leafy greens, berries)",
      "Review supplement adherence and adjust with provider"
    ],
    monthly: [
      "Maintain smoke-free environment",
      "Perform vision self-monitoring with an Amsler grid",
      "Recharge mental health with stress-reduction practice (e.g., meditation)"
    ],
    annual: [
      "Comprehensive medication review with healthcare provider",
      "Schedule comprehensive dilated eye examination",
      "Update genetic counselling session if family planning"
    ]
  },

  // Clinical studies
  clinicalStudies: [
    {
      study: "RHODOS",
      design: "Randomized, double-blind, placebo-controlled",
      status: "Completed",
      implications: "Idebenone showed 30.2% recovery rate vs 10.3% placebo",
      link: "https://pubmed.ncbi.nlm.nih.gov/27071925/"
    },
    {
      study: "RESCUE",
      design: "Phase 3, randomized, controlled",
      status: "Completed",
      implications: "Gene therapy efficacy in early LHON (<6 months)",
      link: "https://pubmed.ncbi.nlm.nih.gov/36449262/"
    },
    {
      study: "REVERSE",
      design: "Phase 3, randomized, controlled",
      status: "Completed",
      implications: "Gene therapy efficacy in late LHON (7-12 months)",
      link: "https://pubmed.ncbi.nlm.nih.gov/36449262/"
    },
    {
      study: "RESTORE",
      design: "5-year follow-up study",
      status: "Completed",
      implications: "Sustained bilateral improvement up to 5 years",
      link: "https://pubmed.ncbi.nlm.nih.gov/39699886/"
    },
    {
      study: "REFLECT",
      design: "Phase 3, bilateral injection study",
      status: "Completed",
      implications: "Bilateral injection shows greater benefit than unilateral",
      link: "https://pubmed.ncbi.nlm.nih.gov/36449262/"
    },
    {
      study: "LEROS",
      design: "Long-term idebenone effectiveness",
      status: "Ongoing",
      implications: "Extended treatment outcomes beyond 6 months",
      link: "https://pubmed.ncbi.nlm.nih.gov/27071925/"
    },
    {
      study: "EPI-743 Open-label",
      design: "Open-label, compassionate use",
      status: "Ongoing",
      implications: "56% of treated eyes showed visual improvement",
      link: "https://pubmed.ncbi.nlm.nih.gov/22410442/"
    }
  ],

  // Key research papers
  journals: [
    {
      title: "Testosterone increases apoptotic cell death and decreases mitophagy in LHON cells",
      journal: "Biochimica et Biophysica Acta",
      relevance: "Critical for understanding TRT risks in LHON males",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7148285/"
    },
    {
      title: "RHODOS Trial: Idebenone in LHON",
      journal: "Brain",
      relevance: "Foundational evidence for idebenone treatment",
      link: "https://pubmed.ncbi.nlm.nih.gov/27071925/"
    },
    {
      title: "Gene-environment interactions in LHON",
      journal: "Brain",
      relevance: "Smoking/alcohol risk factors - guides avoidance recommendations",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2732267/"
    },
    {
      title: "BAK preservative toxicity in LHON",
      journal: "IOVS",
      relevance: "Eye drop preservative avoidance guidelines",
      link: "https://pubmed.ncbi.nlm.nih.gov/28444329/"
    },
    {
      title: "Lenadogene nolparvovec gene therapy",
      journal: "Ophthalmology",
      relevance: "Latest gene therapy efficacy data",
      link: "https://pubmed.ncbi.nlm.nih.gov/36449262/"
    },
    {
      title: "Vitamin B12 deficiency in LHON",
      journal: "Journal of Neuroinflammation",
      relevance: "Screening recommendations for B12 deficiency",
      link: "https://pubmed.ncbi.nlm.nih.gov/35945620/"
    },
    {
      title: "EPI-743 in LHON treatment",
      journal: "Archives of Ophthalmology",
      relevance: "Alternative treatment option if idebenone unavailable",
      link: "https://pubmed.ncbi.nlm.nih.gov/22410442/"
    }
  ]
};

// Theme Management - Dark Default
let currentTheme = 'dark';

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set dark mode as default
  document.documentElement.setAttribute('data-color-scheme', 'dark');
  initializeApp();
});

function initializeApp() {
  setupThemeToggle();
  setupNavigation();
  renderSummary();
  renderPathophysiology();
  renderSupplementsPrimary();
  renderSupplementsSecondary();
  renderTestosterone();
  renderAvoidTable();
  renderBehaviors();
  renderJournals();
  renderStudies();
}

function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  
  // Set initial theme toggle text
  themeToggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  
  function switchTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    themeToggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', switchTheme);
  }
}

function setupNavigation() {
  // Setup navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 160; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Setup hero buttons
  const heroButtons = document.querySelectorAll('.hero-buttons a');
  heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 160;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

function renderSummary() {
  const summaryDiv = document.getElementById('summary-content');
  if (!summaryDiv) return;
  
  summaryDiv.innerHTML = `
    <div class="card">
      <div class="card__body">
        <p>${appData.simpleSummary}</p>
      </div>
    </div>
  `;
}

function renderPathophysiology() {
  const container = document.getElementById('pathophysiology-overview');
  if (!container) return;
  
  container.innerHTML = `<p>${appData.pathophysiology.overview}</p>`;

  const tableWrap = document.getElementById('variant-differences-table');
  if (!tableWrap) return;
  
  const rows = appData.pathophysiology.variantDifferences
    .map(v => `<tr>
        <td><strong>${v.variant}</strong></td>
        <td>${v.complexIDeficiency}</td>
        <td>${v.penetrance}</td>
        <td>${v.notes}</td>
      </tr>`).join('');
  
  tableWrap.innerHTML = `
    <h3>LHON Mutation Variants and Their Effects</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Variant</th>
          <th>Complex I Deficiency</th>
          <th>Penetrance</th>
          <th>Prognosis</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function renderSupplementsPrimary() {
  const wrap = document.getElementById('supplements-primary-table');
  if (!wrap) return;
  
  const rows = appData.supplementsPrimary.map(s => `
    <tr>
      <td><strong>${s.name}</strong></td>
      <td>${s.dosage}</td>
      <td>${s.mechanism}</td>
      <td><a href="${s.link}" target="_blank" class="status status--success">${s.evidence}</a></td>
      <td>${s.status}</td>
    </tr>`).join('');
  
  wrap.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Dosage</th>
        <th>Mechanism</th>
        <th>Evidence Grade</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderSupplementsSecondary() {
  const wrap = document.getElementById('supplements-secondary-table');
  if (!wrap) return;
  
  const rows = appData.supplementsSecondary.map(s => `
    <tr>
      <td><strong>${s.name}</strong></td>
      <td>${s.dosage}</td>
      <td>${s.mechanism}</td>
      <td><a href="${s.link}" target="_blank" class="status status--warning">${s.evidence}</a></td>
      <td>${s.status}</td>
    </tr>`).join('');
  
  wrap.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Dosage</th>
        <th>Mechanism</th>
        <th>Evidence Grade</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderTestosterone() {
  const div = document.getElementById('testosterone-content');
  if (!div) return;
  
  const t = appData.testosteroneStudy;
  const findingsHtml = t.keyFindings.map(finding => `<li>${finding}</li>`).join('');
  
  div.innerHTML = `
    <h3>Summary of Key Research (PMC7148285)</h3>
    <p>A <a href="${t.studyLink}" target="_blank">critical study published in 2020</a> examined the effects of testosterone on LHON cells compared to healthy control cells. The findings provide strong evidence against supraphysiological testosterone use in LHON carriers.</p>
    
    <h4>Key Findings:</h4>
    <ul>${findingsHtml}</ul>
    
    <h4>Mechanism: Why Testosterone Helps Healthy Cells but Harms LHON Cells</h4>
    <p>${t.mechanism}</p>
    
    <h4>Clinical Recommendation</h4>
    <p><strong>${t.clinicalImplication}</strong></p>
    
    <p><strong>Important:</strong> Male LHON carriers should discuss these findings with their healthcare provider before considering any testosterone therapy. The risk-benefit ratio strongly favors avoiding supraphysiological testosterone levels in this population.</p>
  `;
}

function renderAvoidTable() {
  const wrap = document.getElementById('avoid-table');
  if (!wrap) return;

  const rows = appData.avoidList.map(item => `
    <tr>
      <td><strong>${item.category}</strong></td>
      <td>${item.item}</td>
      <td><span class="status status--error">${item.riskLevel}</span></td>
      <td>${item.explanation}</td>
      <td><a href="${item.link}" target="_blank">Research Link</a></td>
    </tr>`).join('');
  
  wrap.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Item</th>
        <th>Risk Level</th>
        <th>Explanation</th>
        <th>Evidence</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderBehaviors() {
  const wrap = document.getElementById('behaviors-tables');
  if (!wrap) return;
  
  const frequencies = ['daily', 'weekly', 'monthly', 'annual'];
  wrap.innerHTML = frequencies.map(freq => {
    const items = appData.behaviors[freq] || [];
    const lis = items.map(i => `<li>${i}</li>`).join('');
    const title = freq.charAt(0).toUpperCase() + freq.slice(1);
    return `
      <div class="card">
        <div class="card__header">
          <h3>${title}</h3>
        </div>
        <div class="card__body">
          <ul>${lis}</ul>
        </div>
      </div>`;
  }).join('');
}

function renderJournals() {
  const tableWrap = document.getElementById('journals-table');
  if (!tableWrap) return;
  
  const rows = appData.journals.map(j => 
    `<tr>
      <td><a href="${j.link}" target="_blank">${j.title}</a></td>
      <td>${j.journal}</td>
      <td>${j.relevance}</td>
    </tr>`
  ).join('');
  
  tableWrap.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Journal</th>
        <th>Relevance to LHON Carriers</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderStudies() {
  const tableWrap = document.getElementById('studies-table');
  if (!tableWrap) return;
  
  const rows = appData.clinicalStudies.map(s => {
    return `<tr>
      <td><strong>${s.study}</strong></td>
      <td>${s.design}</td>
      <td><span class="status status--info">${s.status}</span></td>
      <td>${s.implications}</td>
      <td><a href="${s.link}" target="_blank">View Study</a></td>
    </tr>`;
  }).join('');
  
  tableWrap.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th>Study</th>
        <th>Design</th>
        <th>Status</th>
        <th>Implications</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}
// Responsive navbar toggle
(function() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
})();
