"use client";

import { Divider, Text } from "@/components/atoms";
import { AuthTabs } from "@/components/molecules/AuthTabs";
import { cn } from "@/utils";
import type { AuthLayoutProps } from "./AuthLayout.types";

export function AuthLayout({
  variant = "full",
  logo,
  heading,
  headingSubtitle,
  tabs,
  tabValue,
  onTabChange,
  children,
  socialLogin,
  dividerLabel,
  footer,
  rightContent,
  className,
}: AuthLayoutProps) {
  const isCard = variant === "card";

  const leftPanel = (
    <div
      className={cn(
        "flex w-full shrink-0 flex-col p-6 lg:w-[440px] lg:p-11",
        isCard ? "justify-between" : "justify-center"
      )}
    >
      <div className={cn("mx-auto w-full max-w-[360px] lg:max-w-none", isCard && "flex flex-col")}>
        {logo}
        <div className="mt-9">
          <Text as="h1" variant="heading" className="text-[22px] font-bold leading-tight text-foreground">
            {heading}
          </Text>
          {headingSubtitle != null && (
            <Text as="p" className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {headingSubtitle}
            </Text>
          )}
        </div>
        <AuthTabs
          tabs={tabs}
          value={tabValue}
          onChange={onTabChange}
          appearance={isCard ? "card" : "default"}
          className="mt-7"
        />
        <div className="mt-7">{children}</div>
        {socialLogin != null && (
          <>
            <Divider
              label={dividerLabel}
              className="my-7"
            />
            {socialLogin}
          </>
        )}
      </div>
      {footer != null && (
        <div className="mt-auto pt-8 text-center text-xs text-muted-foreground">
          {footer}
        </div>
      )}
    </div>
  );

  const rightPanel =
    rightContent != null ? (
      <div className="hidden flex-1 lg:flex">
        <div
          className={cn(
            "flex h-full w-full min-h-[580px]",
            isCard
              ? "flex-col"
              : "items-center justify-center bg-muted/30 p-8"
          )}
        >
          {rightContent}
        </div>
      </div>
    ) : null;

  const content = (
    <>
      {leftPanel}
      {rightPanel}
    </>
  );

  if (isCard) {
    return (
      <div
        className={cn(
          "flex min-h-screen w-full items-center justify-center bg-muted p-6",
          className
        )}
      >
        <div className="flex w-full max-w-[940px] flex-col overflow-hidden rounded-2xl bg-card shadow-2xl lg:min-h-[580px] lg:flex-row">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col lg:flex-row",
        className
      )}
    >
      {content}
    </div>
  );
}
