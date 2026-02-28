"use client";

import {
  faApple,
  faFacebookF,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NextLink from "next/link";
import {
  AppLogoIcon,
  FaIcon,
  LoginTemplate,
  LoginBrandingPanel,
  LoginForm,
  AuthTabs,
  SocialLoginButtons,
  SignupForm,
  FloatingPayslipCards,
  AuthLegalFooter,
} from "@/components";

const AUTH_TABS = [
  { key: "sign-in", label: "Sign In" },
  { key: "sign-up", label: "Sign Up" },
] as const;

const SOCIAL_BUTTONS = [
  {
    label: "Google",
    icon: <FaIcon icon={faGoogle} size="md" className="size-5" />,
    onClick: () => {},
  },
  {
    label: "Apple",
    icon: <FaIcon icon={faApple} size="md" className="size-5 text-foreground" />,
    onClick: () => {},
  },
  {
    label: "Facebook",
    icon: (
      <FaIcon
        icon={faFacebookF}
        size="md"
        className="size-5 text-[#1877F2]"
      />
    ),
    onClick: () => {},
  },
  {
    label: "X",
    icon: <FaIcon icon={faXTwitter} size="md" className="size-5 text-foreground" />,
    onClick: () => {},
  },
];

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("sign-in");

  const handleLoginSubmit = () => {
    // Wire to auth API when ready
  };

  return (
    <LoginTemplate
      logo={
        <NextLink
          href="/"
          className="flex items-center gap-2.5 text-foreground transition-colors hover:text-muted-foreground"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <AppLogoIcon size="lg" className="text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Payro</span>
        </NextLink>
      }
      backLink={
        <NextLink
          href="/"
          className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <FaIcon icon={faChevronLeft} size="sm" className="size-3.5" />
          Back to home
        </NextLink>
      }
      headingBlock={
        <>
          <h1 className="mb-1 text-[22px] font-bold text-foreground">
            Welcome to Payro
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Start your experience by signing in or signing up.
          </p>
        </>
      }
      tabBlock={
        <AuthTabs
          tabs={AUTH_TABS}
          value={activeTab}
          onChange={setActiveTab}
          appearance="card"
          className="rounded-xl"
        />
      }
      footer={
        <AuthLegalFooter termsHref="#" privacyHref="#" productName="Payro" />
      }
      brandingPanel={
        <LoginBrandingPanel
          taglineTitle="Philippine Payroll,"
          taglineHighlight="Simplified."
          taglineSubtitle="Automate payroll, BIR compliance, and team management — built for Filipino businesses."
          floatingCards={<FloatingPayslipCards />}
        />
      }
    >
      {activeTab === "sign-in" ? (
        <LoginForm
          onSubmit={handleLoginSubmit}
          socialButtons={
            <SocialLoginButtons buttons={SOCIAL_BUTTONS} size="large" />
          }
        />
      ) : (
        <SignupForm
          heading=""
          subheading=""
          signInHref="/login"
          termsHref="#"
          privacyHref="#"
          onSubmit={() => {}}
          socialButtons={
            <SocialLoginButtons buttons={SOCIAL_BUTTONS} size="large" />
          }
        />
      )}
    </LoginTemplate>
  );
}
