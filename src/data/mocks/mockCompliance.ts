/**
 * Mock compliance data (disciplinary, training, incidents). No API.
 */

export interface DisciplinaryRecord {
  id: string;
  caseNumber: string;
  employeeName: string;
  employeeDept: string;
  offense: string;
  nteIssued: string;
  hearing: string;
  decision: string;
  status: "open" | "pending_hearing" | "closed" | "sealed";
  sealed?: boolean;
}

export const MOCK_DISCIPLINARY: DisciplinaryRecord[] = [
  {
    id: "1",
    caseNumber: "DISC-2024-004",
    employeeName: "Jose Cruz",
    employeeDept: "IT Dept",
    offense: "Tardiness (5th instance in 3 months)",
    nteIssued: "Apr 10, 2024",
    hearing: "Apr 17, 2024",
    decision: "1st Written Warning",
    status: "closed",
  },
  {
    id: "2",
    caseNumber: "DISC-2024-003",
    employeeName: "Pedro Garcia",
    employeeDept: "Operations",
    offense: "Unauthorized absence (3 days AWOL)",
    nteIssued: "Mar 20, 2024",
    hearing: "Mar 27, 2024",
    decision: "Suspension — 3 days",
    status: "closed",
  },
  {
    id: "3",
    caseNumber: "DISC-2024-002",
    employeeName: "Nina Bautista",
    employeeDept: "Support",
    offense: "Insubordination to direct supervisor",
    nteIssued: "Feb 5, 2024",
    hearing: "Feb 12, 2024",
    decision: "Verbal Warning",
    status: "closed",
  },
  {
    id: "4",
    caseNumber: "DISC-2024-001",
    employeeName: "Record sealed",
    employeeDept: "",
    offense: "Confidential",
    nteIssued: "Jan 15, 2024",
    hearing: "Jan 22, 2024",
    decision: "—",
    status: "sealed",
    sealed: true,
  },
];

export interface TrainingRecord {
  id: string;
  title: string;
  type: string;
  employeeName: string;
  department: string;
  completedDate: string;
  status: "completed" | "pending" | "overdue";
}

export const MOCK_TRAINING: TrainingRecord[] = [
  { id: "1", title: "Anti-Harassment", type: "Compliance", employeeName: "Ana Reyes", department: "HR", completedDate: "Feb 15, 2026", status: "completed" },
  { id: "2", title: "Data Privacy (POPIA)", type: "Compliance", employeeName: "Jose Cruz", department: "IT", completedDate: "Feb 10, 2026", status: "completed" },
  { id: "3", title: "Safety Orientation", type: "Safety", employeeName: "Maria Santos", department: "Finance", completedDate: "—", status: "pending" },
];
