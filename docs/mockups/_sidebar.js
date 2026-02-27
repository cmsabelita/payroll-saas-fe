/**
 * Payro Admin Sidebar Injector
 * Usage: Add <div id="sidebar-placeholder"></div> + <script src="_sidebar.js"></script>
 *        Set active nav via: <body data-page="employees">
 */
(function () {
  /* ── Shared styles ─────────────────────────────────── */
  const css = `
    * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }
    .nav-item { display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:8px;font-size:0.8125rem;font-weight:500;color:#4B5563;cursor:pointer;text-decoration:none;transition:background .12s,color .12s; }
    .nav-item:hover { background:#F3F4F6; color:#111827; }
    .nav-item.active { background:#ECFDF5; color:#059669; }
    .nav-item.active svg { color:#059669; }
    .section-label { font-size:0.6875rem;font-weight:600;letter-spacing:.07em;color:#9CA3AF;text-transform:uppercase;padding:0 10px;margin-top:20px;margin-bottom:4px;display:block; }
    .badge { font-size:.6875rem;font-weight:600;padding:2px 8px;border-radius:20px;white-space:nowrap; }
    .badge-green  { background:#DCFCE7;color:#15803D; }
    .badge-yellow { background:#FEF9C3;color:#A16207; }
    .badge-blue   { background:#DBEAFE;color:#1D4ED8; }
    .badge-orange { background:#FFEDD5;color:#C2410C; }
    .badge-gray   { background:#F3F4F6;color:#374151; }
    .badge-red    { background:#FEE2E2;color:#B91C1C; }
    .badge-purple { background:#F3E8FF;color:#7C3AED; }
    .badge-teal   { background:#CCFBF1;color:#0F766E; }
    th { font-size:.75rem;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:.04em; }
    td { font-size:.8125rem; }
    tr:hover td { background:#FAFAFA; }
    .tab-btn { padding:5px 12px;border-radius:6px;font-size:.8125rem;font-weight:500;color:#6B7280;cursor:pointer;border:none;background:none;white-space:nowrap; }
    .tab-btn.active { background:white;color:#111827;box-shadow:0 1px 3px rgba(0,0,0,.08); }
    .kpi-card { background:white;border:1.5px solid #F3F4F6;border-radius:12px;padding:18px 20px; }
    .form-input { width:100%;padding:9px 13px;font-size:.875rem;background:white;border:1.5px solid #E5E7EB;border-radius:10px;color:#111827;outline:none;transition:border-color .15s,box-shadow .15s; }
    .form-input:focus { border-color:#3ECF8E;box-shadow:0 0 0 3px rgba(62,207,142,.12); }
    .form-input::placeholder { color:#9CA3AF; }
    .form-select { width:100%;padding:9px 13px;font-size:.875rem;background:white;border:1.5px solid #E5E7EB;border-radius:10px;color:#111827;outline:none;appearance:none;cursor:pointer; }
    .form-label { display:block;font-size:.875rem;font-weight:500;color:#374151;margin-bottom:5px; }
    .step-active .s-dot { background:#3ECF8E;color:white; }
    .step-done   .s-dot { background:#DCFCE7;color:#059669; }
    .step-pending .s-dot { background:#F3F4F6;color:#9CA3AF; }
    .s-dot { width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700; }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── Helpers ────────────────────────────────────────── */
  const page = document.body.dataset.page || '';
  const ic = (d) => `<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="${d}"/></svg>`;
  const ni = (href, label, d, key, badge) => `
    <a href="${href}" class="nav-item${page === key ? ' active' : ''}">
      ${ic(d)}<span class="flex-1">${label}</span>
      ${badge ? `<span style="background:#F59E0B;color:white;font-size:.6rem;font-weight:700;padding:1px 6px;border-radius:20px;">${badge}</span>` : ''}
    </a>`;
  const sl = (t) => `<span class="section-label">${t}</span>`;

  /* ── Icons (heroicons path data) ────────────────────── */
  const ICONS = {
    home:        'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    employees:   'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    org:         'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    team:        'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    attendance:  'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    approvals:   'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    payroll:     'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    compliance:  'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    reports:     'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    settings:    'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    user:        'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    payslip:     'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
    chat:        'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    logout:      'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
  };

  /* ── Sidebar HTML ───────────────────────────────────── */
  const html = `
<aside class="w-[232px] bg-white border-r border-gray-100 flex flex-col h-screen overflow-y-auto shrink-0">
  <div class="flex items-center gap-2.5 px-4 py-4 border-b border-gray-100">
    <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style="background:#3ECF8E;">
      <svg class="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
      </svg>
    </div>
    <span class="font-semibold text-gray-900 tracking-tight" style="font-size:17px;">Payro</span>
  </div>
  <nav class="flex-1 px-2.5 pb-4 pt-2">
    ${sl('Main')}
    ${ni('dashboard.html', 'Dashboard', ICONS.home, 'dashboard')}
    ${sl('People')}
    ${ni('employees.html', 'Employees', ICONS.employees, 'employees')}
    ${ni('organization-departments.html', 'Organization', ICONS.org, 'organization')}
    ${ni('team.html', 'Team', ICONS.team, 'team')}
    ${sl('Time &amp; Requests')}
    ${ni('attendance.html', 'Attendance', ICONS.attendance, 'attendance')}
    ${ni('approvals.html', 'Approvals', ICONS.approvals, 'approvals', '12')}
    ${sl('Finance')}
    ${ni('payroll.html', 'Payroll', ICONS.payroll, 'payroll')}
    ${ni('compliance.html', 'Compliance', ICONS.compliance, 'compliance')}
    ${sl('Analytics')}
    ${ni('reports.html', 'Reports', ICONS.reports, 'reports')}
    ${sl('System')}
    ${ni('settings-company.html', 'Settings', ICONS.settings, 'settings')}
    ${sl('My Account')}
    ${ni('portal.html', 'My Dashboard', ICONS.user, 'my-dashboard')}
    ${ni('my-payslips.html', 'My Payslips', ICONS.payslip, 'my-payslips')}
    ${ni('my-requests.html', 'My Requests', ICONS.chat, 'my-requests')}
  </nav>
  <div class="border-t border-gray-100 px-3 py-3">
    <div class="flex items-center gap-2.5 px-1">
      <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style="background:linear-gradient(135deg,#3ECF8E,#059669);">MS</div>
      <div class="flex-1 min-w-0">
        <p class="text-xs font-semibold text-gray-900 truncate">Mark Santos</p>
        <p class="text-xs text-gray-400 truncate">Owner</p>
      </div>
      <button class="text-gray-400 hover:text-gray-600">${ic(ICONS.logout)}</button>
    </div>
  </div>
</aside>`;

  const ph = document.getElementById('sidebar-placeholder');
  if (ph) ph.outerHTML = html;
})();
