console.log("--- ROOTED CAPITAL CO. ---");
console.log("Digital Infrastructure: Active");
console.log("Brand Identity: Sotheby's / Oppenheim Tier");
console.log("Status: Targeting HNW Leads for splitspace.co");
// --- LOAN INTAKE SYSTEM ---
const loanForm = document.getElementById('loanForm');

if (loanForm) {
    loanForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const statusMsg = document.getElementById('responseMessage');

        // Stage 1: UI Transformation
        btn.innerHTML = "PERFORMING RISK AUDIT...";
        btn.disabled = true;
        btn.style.opacity = "0.5";

        // Stage 2: Data Extraction
        const formData = new FormData(e.target);
        const submission = Object.fromEntries(formData.entries());

        console.log("[AUDIT] New Principal Detected:", submission.name);
        console.log("[AUDIT] Allocation Requested:", submission.amount);

        // Stage 3: The "SplitSpace" HNW Logic
        // This simulates the 2-second delay while the 'Computer' processes the lead
        setTimeout(() => {
            statusMsg.innerHTML = "APPLICATION SECURED. THE ARCHITECT AUDIT IS IN PROGRESS.";
            statusMsg.classList.remove('hidden');
            
            btn.innerHTML = "SUBMISSION SUCCESSFUL";
            btn.style.background = "#ffffff";
            btn.style.color = "#000000";
            btn.style.opacity = "1";
            
            e.target.reset();
            console.log("[STATUS] Lead captured and routed to Private Credit Pipeline.");
        }, 2000);
    });
}
// --- WEEKLY INSTITUTIONAL LEDGER LOGIC ---
// This handles the real-time burn rate calculations for the crew portal
document.addEventListener('input', (e) => {
    if (e.target.classList.contains('day-input')) {
        const row = e.target.closest('.worker-row');
        const dayInputs = row.querySelectorAll('.day-input');
        let rowTotal = 0;

        // Calculate Individual Worker Total
        dayInputs.forEach(input => {
            rowTotal += parseFloat(input.value || 0);
        });
        row.querySelector('.row-total').innerText = rowTotal;

        // Calculate Global Project Burn Rate
        let grandTotal = 0;
        document.querySelectorAll('.day-input').forEach(input => {
            grandTotal += parseFloat(input.value || 0);
        });

        const totalDisplay = document.getElementById('weekTotalHours');
        if (totalDisplay) {
            totalDisplay.innerText = grandTotal + " Hours";
        }
    }
});

// Submit Logic for the Weekly Sync
const weeklyForm = document.getElementById('weeklyForm');
if (weeklyForm) {
    weeklyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const site = document.getElementById('projectSite').value;

        btn.innerHTML = "SYNCING WITH LEDGER...";
        btn.style.opacity = "0.7";

        // Log to the Architect Console (keeping your Sotheby's style)
        console.log(`[OPS AUDIT] Committing Weekly Data for ${site}`);

        setTimeout(() => {
            btn.innerHTML = "WEEKLY SYNC COMPLETE";
            btn.style.background = "#C5A059"; // Switch to Gold on success
            btn.style.color = "black";
            btn.style.opacity = "1";
        }, 1500);
    });
}
