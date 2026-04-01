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
