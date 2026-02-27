import { PageLayout, Card, Button, ThemeToggle } from "@/components";

export default function Home() {
  return (
    <PageLayout
      title="Payroll SaaS"
      headerActions={
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" size="sm">
            Sign in
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-6 max-w-2xl">
        <Card title="Welcome">
          <p>
            This app uses Atomic Design: atoms → molecules → organisms →
            templates. Edit components in <code>src/components</code> and pages
            in <code>src/app</code>.
          </p>
        </Card>
        <div className="flex gap-3">
          <Button variant="primary">Get started</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
      </div>
    </PageLayout>
  );
}
