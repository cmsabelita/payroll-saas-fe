"use client";

import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils";
import type { TooltipPlacement, TooltipProps } from "./Tooltip.types";

const DEFAULT_DELAY = 0;
const GAP = 8;

function getPlacementStyles(
  placement: TooltipPlacement,
  triggerRect: DOMRect,
  tw: number,
  th: number
): React.CSSProperties {
  switch (placement) {
    case "top":
      return {
        left: triggerRect.left + triggerRect.width / 2 - tw / 2,
        top: triggerRect.top - th - GAP,
      };
    case "bottom":
      return {
        left: triggerRect.left + triggerRect.width / 2 - tw / 2,
        top: triggerRect.bottom + GAP,
      };
    case "left":
      return {
        left: triggerRect.left - tw - GAP,
        top: triggerRect.top + triggerRect.height / 2 - th / 2,
      };
    case "right":
      return {
        left: triggerRect.right + GAP,
        top: triggerRect.top + triggerRect.height / 2 - th / 2,
      };
    default:
      return {
        left: triggerRect.left + triggerRect.width / 2 - tw / 2,
        top: triggerRect.top - th - GAP,
      };
  }
}

function TooltipContent({
  content,
  contentClassName,
  placement,
  triggerRef,
  contentId,
}: {
  content: React.ReactNode;
  contentClassName?: string;
  placement: TooltipPlacement;
  triggerRef: React.RefObject<HTMLDivElement | null>;
  contentId: string;
}) {
  const [style, setStyle] = useState<React.CSSProperties>({
    position: "fixed",
    visibility: "hidden",
  });
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const el = elRef.current;
    if (!trigger || !el) return;
    const measure = () => {
      const triggerRect = trigger.getBoundingClientRect();
      const tw = el.offsetWidth;
      const th = el.offsetHeight;
      setStyle({
        ...getPlacementStyles(placement, triggerRect, tw, th),
        position: "fixed",
        visibility: "visible",
      });
    };
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(measure);
    });
    return () => cancelAnimationFrame(id);
  }, [placement, triggerRef]);

  return (
    <div
      ref={elRef}
      id={contentId}
      role="tooltip"
      className={cn(
        "pointer-events-none z-[1070] max-w-[min(16rem,90vw)] rounded-md border border-border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md",
        contentClassName
      )}
      style={style}
    >
      {content}
    </div>
  );
}

export function Tooltip({
  children,
  content,
  placement = "top",
  delay = DEFAULT_DELAY,
  contentClassName,
  disabled = false,
}: TooltipProps) {
  const [open, setOpenState] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contentId = useId();

  const setOpen = useCallback(
    (next: boolean) => {
      if (disabled) return;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (next) {
        if (delay > 0) {
          timeoutRef.current = setTimeout(() => setOpenState(true), delay);
        } else {
          setOpenState(true);
        }
      } else {
        setOpenState(false);
      }
    },
    [delay, disabled]
  );

  const portalContent =
    open && typeof document !== "undefined"
      ? createPortal(
          <TooltipContent
            content={content}
            contentClassName={contentClassName}
            placement={placement}
            triggerRef={triggerRef}
            contentId={contentId}
          />,
          document.body
        )
      : null;

  return (
    <>
      <div
        ref={triggerRef}
        className="inline-flex"
        aria-describedby={open ? contentId : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={(e) => {
          if (e.target === e.currentTarget || e.currentTarget.contains(e.target as Node)) setOpen(true);
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
        }}
      >
        {children}
      </div>
      {portalContent}
    </>
  );
}
