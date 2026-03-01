"use client";

import { useState } from "react";
import {
  Avatar,
  Badge,
  Checkbox,
  FaIcon,
  IconButton,
} from "@/components/atoms";
import { EmployeeRowCell } from "@/components/molecules/EmployeeRowCell";
import { Pagination } from "@/components/molecules/Pagination";
import { TabFilter } from "@/components/molecules/TabFilter";
import {
  EmployeeDataTable,
  EmployeesToolbar,
} from "@/components/organisms";
import { faBell, faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { DashboardShell } from "../_components/DashboardShell";

const EMPLOYEE_TABS = [
  { key: "all", label: "All", count: 128 },
  { key: "active", label: "Active", count: 120 },
  { key: "on-leave", label: "On Leave", count: 5 },
  { key: "separated", label: "Separated", count: 3 },
  { key: "new", label: "New This Month", count: 3 },
];

const EMPLOYEE_STATUS_VARIANT: Record<
  string,
  "success" | "warning" | "secondary" | "destructive" | "default"
> = {
  Active: "success",
  "On Leave": "warning",
  Separated: "secondary",
  "New This Month": "default",
};

function getEmployeeStatusVariant(
  status: string
): "success" | "warning" | "secondary" | "destructive" | "default" {
  return EMPLOYEE_STATUS_VARIANT[status] ?? "secondary";
}

const EMPLOYMENT_TYPE_VARIANT: Record<
  string,
  "success" | "warning" | "secondary" | "default" | "outline"
> = {
  Regular: "success",
  Probationary: "warning",
  Contractual: "secondary",
  "Part-Time": "default",
  Intern: "outline",
};

function getEmploymentTypeVariant(
  employmentType: string
): "success" | "warning" | "secondary" | "default" | "outline" {
  return EMPLOYMENT_TYPE_VARIANT[employmentType] ?? "secondary";
}

const MOCK_EMPLOYEES = [
  { id: "EMP-00124", name: "Juan dela Cruz", department: "Engineering", position: "Software Engineer", employmentType: "Regular", status: "Active", dateHired: "Jan 15, 2023" },
  { id: "EMP-00089", name: "Maria Santos", department: "Human Resources", position: "HR Manager", employmentType: "Regular", status: "On Leave", dateHired: "Mar 1, 2022" },
  { id: "EMP-00112", name: "Rosa Perez", department: "Finance", position: "Accountant", employmentType: "Regular", status: "Active", dateHired: "Jun 7, 2022" },
  { id: "EMP-00098", name: "Alonzo Cruz", department: "Operations", position: "Operations Manager", employmentType: "Regular", status: "Active", dateHired: "Sep 12, 2021" },
  { id: "EMP-00131", name: "Brigitte Garcia", department: "Engineering", position: "Junior Developer", employmentType: "Probationary", status: "Active", dateHired: "Feb 3, 2026" },
  { id: "EMP-00077", name: "Daniel Manalo", department: "Sales", position: "Sales Lead", employmentType: "Regular", status: "Separated", dateHired: "Apr 20, 2020" },
  { id: "EMP-00103", name: "Lourdes Reyes", department: "Marketing", position: "Marketing Specialist", employmentType: "Regular", status: "Active", dateHired: "Nov 8, 2022" },
];

export default function EmployeesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  return (
    <DashboardShell
      topbarTitle="Employees"
      topbarPrimaryAction={
        <NextLink
          href="/employees/new"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:brightness-110"
        >
          <FaIcon icon={faPlus} size="sm" aria-hidden />
          Add Employee
        </NextLink>
      }
      topbarTrailing={
        <>
          <IconButton variant="ghost" size="sm" aria-label="Notifications">
            <FaIcon icon={faBell} size="sm" />
          </IconButton>
          <Avatar size="sm" fallback="MS" />
        </>
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <EmployeeDataTable
          tabFilter={
          <TabFilter
            tabs={EMPLOYEE_TABS}
            value={activeTab}
            onChange={setActiveTab}
            className="rounded-xl bg-muted p-2"
          />
          }
          toolbar={
          <EmployeesToolbar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onFiltersClick={() => {}}
            onDepartmentClick={() => {}}
            onExportClick={() => {}}
          />
          }
          pagination={
          <Pagination
            start={1}
            end={25}
            total={128}
            page={1}
            totalPages={6}
            onPrev={() => {}}
            onNext={() => {}}
            hasPrev={false}
            hasNext={true}
          />
          }
        >
          <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="w-10 px-4 py-3">
                <Checkbox aria-label="Select all" />
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Employee
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Department
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Position
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Employment Type
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Date Hired
              </th>
              <th className="w-10 px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {MOCK_EMPLOYEES.map((row) => (
              <tr
                key={row.id}
                className="cursor-pointer hover:bg-muted/50"
                role="button"
                tabIndex={0}
                onClick={() => router.push(`/employees/${row.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") e.currentTarget.click();
                }}
              >
                <td className="px-4 py-3">
                  <Checkbox aria-label={`Select ${row.name}`} />
                </td>
                <td className="px-4 py-3">
                  <EmployeeRowCell
                    avatar={<Avatar size="sm" fallback={row.name.slice(0, 2).toUpperCase()} />}
                    primaryLine={row.name}
                    secondaryLine={row.id}
                  />
                </td>
                <td className="px-4 py-3 text-muted-foreground">{row.department}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.position}</td>
                <td className="px-4 py-3">
                  <Badge variant={getEmploymentTypeVariant(row.employmentType)}>{row.employmentType}</Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={getEmployeeStatusVariant(row.status)}>{row.status}</Badge>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{row.dateHired}</td>
                <td className="px-4 py-3">
                  <IconButton
                    variant="ghost"
                    size="sm"
                    aria-label={`Actions for ${row.name}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaIcon icon={faEllipsisVertical} size="sm" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </EmployeeDataTable>
      </div>
    </DashboardShell>
  );
}
