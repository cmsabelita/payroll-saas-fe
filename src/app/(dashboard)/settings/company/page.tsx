"use client";

import { Avatar, FaIcon, IconButton } from "@/components/atoms";
import { SettingsCompanyForm, SettingsLayout } from "@/components/organisms";
import type { SettingsCompanyFormValues } from "@/components/organisms/SettingsCompanyForm";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { DashboardShell } from "../../_components/DashboardShell";
import { SettingsNav } from "../_lib/settingsNav";

export default function SettingsCompanyPage() {
  const router = useRouter();

  const handleSubmit = (values: SettingsCompanyFormValues) => {
    console.log("Save company", values);
    router.refresh();
  };

  const nav = <SettingsNav currentHref="/settings/company" />;

  return (
    <DashboardShell
      topbarTitle="Settings"
      topbarSubtitle="Company information & configuration"
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
        <SettingsLayout nav={nav}>
          <SettingsCompanyForm
            initialValues={{
              companyName: "Acme Corporation",
              legalName: "Acme Corporation Inc.",
              industry: "it",
              companySize: "51-200",
              tin: "123-456-789-000",
              secDtiRegistration: "CS202312345",
              yearFounded: "2018",
              employmentType: "corporation",
              primaryEmail: "hr@acmecorp.com",
              phone: "+63 2 8888 0000",
              website: "https://www.acmecorp.com",
              businessAddress: "20F Ayala Tower, 6811 Ayala Ave, Makati City, Metro Manila 1226",
              sssEmployer: "03-1234567-8",
              philhealthEmployer: "PH-000123456",
              pagibigEmployer: "0100-123456-7",
              birRdoCode: "",
            }}
            onSubmit={handleSubmit}
          />
        </SettingsLayout>
      </div>
    </DashboardShell>
  );
}
